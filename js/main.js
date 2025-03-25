// Variables globales
let userData = {
    fullName: '',
    position: '',
    cc: '',
    documentType: 'cc',
    testResults: {}
};

let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let testTimer = null;
let timeRemaining = 0;

// Elementos DOM
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS
    initEmailJS();
    
    // Configurar validación de documento según tipo
    setupDocumentValidation();
    
    // Formulario de registro
    const userForm = document.getElementById('user-form');
    userForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value.trim();
        const documentType = document.getElementById('document-type').value;
        const documentNumber = document.getElementById('cc').value.trim();
        const position = document.getElementById('position').value.trim();
        
        // Validar campos
        if (!fullname || !documentNumber || !position) {
            alert('Por favor, complete todos los campos');
            return;
        }
        
        // Validar formato del documento según su tipo
        if (!validarDocumento(documentType, documentNumber)) {
            let mensaje = 'El formato del documento no es válido. ';
            
            switch(documentType) {
                case 'cc':
                    mensaje += 'La cédula de ciudadanía debe tener entre 8 y 10 dígitos numéricos.';
                    break;
                case 'ce':
                    mensaje += 'La cédula de extranjería debe tener entre 6 y 12 caracteres alfanuméricos.';
                    break;
                case 'pasaporte':
                    mensaje += 'El pasaporte debe tener 2 letras seguidas de 6-7 dígitos.';
                    break;
            }
            
            alert(mensaje);
            return;
        }
        
        userData.fullName = fullname;
        userData.position = position;
        userData.cc = documentNumber;
        userData.documentType = documentType;
        
        // Verificar si el usuario ya ha realizado pruebas
        const existingUserData = checkExistingUser(userData.cc);
        if (existingUserData) {
            userData.testResults = existingUserData.testResults || {};
        }
        
        // Mostrar información del usuario en el menú
        document.getElementById('user-name').textContent = userData.fullName;
        document.getElementById('user-position').textContent = userData.position;
        
        // Ocultar formulario y mostrar menú
        document.getElementById('registration-form').classList.add('d-none');
        document.getElementById('test-menu').classList.remove('d-none');
        
        // Actualizar estado de las tarjetas de prueba
        updateTestCardStatus();
        
        // Mostrar botón de resultados si hay al menos una prueba completada
        if (Object.keys(userData.testResults).length > 0) {
            document.getElementById('view-results').classList.remove('d-none');
        }
    });
    
    // Menú de pruebas
    const testCards = document.querySelectorAll('.test-card');
    testCards.forEach(card => {
        card.addEventListener('click', function() {
            const testId = this.getAttribute('data-test');
            
            // Verificar si el usuario ya realizó esta prueba
            if (userData.testResults[testId]) {
                alert("Ya has realizado esta prueba. Solo se permite un intento por prueba.");
                return;
            }
            
            startTest(testId);
        });
    });
    
    // Botones de navegación
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('finish-test').addEventListener('click', finishTest);
    document.getElementById('view-results').addEventListener('click', showResults);
    document.getElementById('back-to-menu').addEventListener('click', backToMenu);
    document.getElementById('download-results').addEventListener('click', downloadResults);
    document.getElementById('email-results').addEventListener('click', sendResultsByEmail);
});

// Verificar si el usuario ya existe en localStorage
function checkExistingUser(cc) {
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');
    return allUsers[cc];
}

// Actualizar el estado de las tarjetas de prueba
function updateTestCardStatus() {
    const testCards = document.querySelectorAll('.test-card');
    testCards.forEach(card => {
        const testId = card.getAttribute('data-test');
        
        // Si el usuario ya realizó esta prueba, deshabilitar la tarjeta
        if (userData.testResults[testId]) {
            card.classList.add('disabled');
            card.style.opacity = '0.6';
            card.style.cursor = 'not-allowed';
            
            // Añadir indicador de completado
            const completedBadge = document.createElement('div');
            completedBadge.className = 'position-absolute top-0 end-0 p-2';
            completedBadge.innerHTML = '<span class="badge bg-success">Completado</span>';
            card.appendChild(completedBadge);
        }
    });
}

// Guardar datos de todos los usuarios
function saveAllUsersData() {
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');
    allUsers[userData.cc] = userData;
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
}

// Iniciar prueba
// Iniciar prueba
function startTest(testId) {
    // Asegurarse de que estamos cargando el test correcto
    if (!tests[testId]) {
        console.error(`Test no encontrado: ${testId}`);
        alert("Error al cargar la prueba. Por favor, inténtelo de nuevo.");
        return;
    }
    
    // Obtener todas las preguntas disponibles para este test
    const allQuestions = tests[testId].questions;
    
    // Seleccionar aleatoriamente 15 preguntas (o menos si no hay suficientes)
    const questionCount = Math.min(15, allQuestions.length);
    const shuffledQuestions = shuffleArray([...allQuestions]);
    const selectedQuestions = shuffledQuestions.slice(0, questionCount);
    
    // Crear una copia del test con solo las preguntas seleccionadas
    currentTest = {
        ...tests[testId],
        questions: selectedQuestions,
        originalQuestionCount: allQuestions.length
    };
    
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // Configurar el temporizador (10 minutos por defecto)
    timeRemaining = currentTest.timeLimit || 600; // en segundos
    updateTimerDisplay();
    
    // Iniciar el temporizador
    testTimer = setInterval(function() {
        timeRemaining--;
        updateTimerDisplay();
        
        // Si se acaba el tiempo, finalizar la prueba
        if (timeRemaining <= 0) {
            clearInterval(testTimer);
            alert("¡Se acabó el tiempo!");
            finishTest();
        }
    }, 1000);
    
    // Actualizar título de la prueba
    document.getElementById('test-title').textContent = currentTest.title;
    
    // Ocultar menú y mostrar área de prueba
    document.getElementById('test-menu').classList.add('d-none');
    document.getElementById('test-area').classList.remove('d-none');
    
    // Mostrar primera pregunta
    showQuestion();
}

// Función para mezclar un array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Actualizar el temporizador en la interfaz
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer-display').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Finalizar prueba
function finishTest() {
    // Detener el temporizador
    if (testTimer) {
        clearInterval(testTimer);
        testTimer = null;
    }
    
    // Guardar última respuesta
    const selectedOption = document.querySelector('.option-item.selected');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.getAttribute('data-index'));
    }
    
    // Calcular resultados
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentTest.questions[index].correctAnswer) {
            correctAnswers++;
        }
    });
    
    const score = Math.round((correctAnswers / currentTest.questions.length) * 100);
    
    // Guardar resultados
    const testId = Object.keys(tests).find(key => tests[key].title === currentTest.title);
    userData.testResults[testId] = {
        score: score,
        correctAnswers: correctAnswers,
        totalQuestions: currentTest.questions.length,
        questionsFromPool: currentTest.originalQuestionCount,
        date: new Date().toLocaleDateString()
    };
    
    // Guardar en localStorage
    saveResults();
    saveAllUsersData();
    
    // Volver al menú
    document.getElementById('test-area').classList.add('d-none');
    document.getElementById('test-menu').classList.remove('d-none');
    
    // Actualizar estado de las tarjetas de prueba
    updateTestCardStatus();
    
    // Mostrar botón de resultados si hay al menos una prueba completada
    if (Object.keys(userData.testResults).length > 0) {
        document.getElementById('view-results').classList.remove('d-none');
    }
}

// Mostrar resultados
function showResults() {
    // Mostrar información del usuario
    document.getElementById('result-name').textContent = userData.fullName;
    document.getElementById('result-position').textContent = userData.position;
    document.getElementById('result-date').textContent = new Date().toLocaleDateString();
    
    // Mostrar resultados de pruebas
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = generateDetailedReport();
    
    // Ocultar menú y mostrar resultados
    document.getElementById('test-menu').classList.add('d-none');
    document.getElementById('results-area').classList.remove('d-none');
}

// Volver al menú
function backToMenu() {
    document.getElementById('results-area').classList.add('d-none');
    document.getElementById('test-menu').classList.remove('d-none');
}

// Descargar resultados
function downloadResults() {
    const doc = generateCertificate();
    doc.save(`certificado_${userData.fullName.replace(/\s+/g, '_')}_${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`);
    
    // También exportar a CSV para datos detallados
    exportToCSV();
}

// Mostrar pregunta actual
function showQuestion() {
    const question = currentTest.questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    // Limpiar cualquier imagen anterior
    const existingImages = document.querySelectorAll('.question-image-container');
    existingImages.forEach(img => img.remove());
    
    // Actualizar barra de progreso
    const progress = ((currentQuestionIndex + 1) / currentTest.questions.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
    
    // Mostrar pregunta
    questionText.textContent = question.question;
    if (question.context) {
        questionText.textContent += ` (${question.context})`;
    }
    
    // Mostrar imagen si existe
    if (question.image) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'text-center my-3 question-image-container';
        
        // Verificar si la carpeta img existe
        const img = new Image();
        img.onload = function() {
            imageContainer.innerHTML = `<img src="${question.image}" alt="Imagen de referencia" class="img-fluid" style="max-height: 200px;">`;
        };
        img.onerror = function() {
            console.error(`Error al cargar la imagen: ${question.image}`);
            imageContainer.innerHTML = `<div class="alert alert-warning">No se pudo cargar la imagen</div>`;
        };
        img.src = question.image;
        
        questionText.insertAdjacentElement('afterend', imageContainer);
    }
    
    // Mostrar opciones
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-item mb-3 p-3 border rounded';
        optionDiv.setAttribute('data-index', index);
        optionDiv.textContent = option;
        
        // Add click handler
        optionDiv.addEventListener('click', function() {
            // Remove selection from other options
            document.querySelectorAll('.option-item').forEach(item => {
                item.classList.remove('selected');
            });
            // Add selection to clicked option
            this.classList.add('selected');
            
            // Habilitar botón siguiente o finalizar
            if (currentQuestionIndex < currentTest.questions.length - 1) {
                document.getElementById('next-question').disabled = false;
            } else {
                document.getElementById('finish-test').disabled = false;
            }
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Mostrar/ocultar botones según la pregunta actual
    const nextButton = document.getElementById('next-question');
    const finishButton = document.getElementById('finish-test');
    
    if (currentQuestionIndex < currentTest.questions.length - 1) {
        nextButton.classList.remove('d-none');
        finishButton.classList.add('d-none');
        nextButton.disabled = true;
    } else {
        nextButton.classList.add('d-none');
        finishButton.classList.remove('d-none');
        finishButton.disabled = true;
    }
}

// Pasar a la siguiente pregunta
function nextQuestion() {
    // Guardar respuesta del usuario
    const selectedOption = document.querySelector('.option-item.selected');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.getAttribute('data-index'));
    }
    
    // Avanzar a la siguiente pregunta
    currentQuestionIndex++;
    showQuestion();
}

// Configurar validación de documento
function setupDocumentValidation() {
    const documentTypeSelect = document.getElementById('document-type');
    const documentInput = document.getElementById('cc');
    
    if (documentTypeSelect && documentInput) {
        // Cambiar placeholder según tipo de documento
        documentTypeSelect.addEventListener('change', function() {
            switch(this.value) {
                case 'cc':
                    documentInput.placeholder = 'Ej: 1234567890';
                    break;
                case 'ce':
                    documentInput.placeholder = 'Ej: E123456';
                    break;
                case 'pasaporte':
                    documentInput.placeholder = 'Ej: AB123456';
                    break;
            }
        });
        
        // Validar en tiempo real mientras el usuario escribe
        documentInput.addEventListener('input', function() {
            const documentType = documentTypeSelect.value;
            const documentValue = this.value.trim();
            
            if (documentValue && !validarDocumento(documentType, documentValue)) {
                this.classList.add('is-invalid');
                
                // Mostrar mensaje de error específico
                let errorMessage = '';
                switch(documentType) {
                    case 'cc':
                        errorMessage = 'Debe tener entre 8 y 10 dígitos numéricos';
                        break;
                    case 'ce':
                        errorMessage = 'Debe tener entre 6 y 12 caracteres alfanuméricos';
                        break;
                    case 'pasaporte':
                        errorMessage = 'Debe tener 2 letras seguidas de 6-7 dígitos';
                        break;
                }
                
                // Crear o actualizar mensaje de error
                let feedbackElement = this.nextElementSibling;
                if (!feedbackElement || !feedbackElement.classList.contains('invalid-feedback')) {
                    feedbackElement = document.createElement('div');
                    feedbackElement.className = 'invalid-feedback';
                    this.parentNode.appendChild(feedbackElement);
                }
                feedbackElement.textContent = errorMessage;
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        });
        
        // Establecer placeholder inicial
        documentTypeSelect.dispatchEvent(new Event('change'));
    }
}

// Función para validar el documento según su tipo
function validarDocumento(tipo, numero) {
    // Eliminar espacios y guiones
    numero = numero.replace(/[\s-]/g, '');
    
    switch(tipo) {
        case 'cc': // Cédula de ciudadanía colombiana
            // Debe ser numérica y tener entre 8 y 10 dígitos
            return /^\d{8,10}$/.test(numero);
        
        case 'ce': // Cédula de extranjería
            // Debe comenzar con letra o número y tener entre 6 y 12 caracteres
            return /^[a-zA-Z0-9]{6,12}$/.test(numero);
        
        case 'pasaporte':
            // Formato típico: 2 letras seguidas de 6-7 dígitos
            return /^[a-zA-Z]{2}[0-9]{6,7}$/.test(numero);
            
        default:
            // Si no se especifica tipo, al menos debe tener 6 caracteres
            return numero.length >= 6;
    }
}
