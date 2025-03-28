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

// Función para borrar todas las cookies
function borrarTodasLasCookies() {
    const cookies = document.cookie.split(";");
    
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const nombre = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        document.cookie = nombre + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
    
    console.log("Todas las cookies han sido borradas");
}

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
    
    // Verificar si existe el botón 'prev-question' antes de añadir el evento
    const prevButton = document.getElementById('prev-question');
    if (prevButton) {
        prevButton.addEventListener('click', prevQuestion);
    }
    // El botón 'prev-question' se crea dinámicamente en startTest() si no existe
    
    // Asegurarse de que el botón finalizar tenga un evento de clic correctamente asignado
    const finishButton = document.getElementById('finish-test');
    if (finishButton) {
        // Eliminar cualquier evento anterior para evitar duplicados
        finishButton.removeEventListener('click', finishTest);
        // Añadir el evento de clic
        finishButton.addEventListener('click', finishTest);
        console.log("Evento de clic asignado al botón finalizar");
    } else {
        console.error("No se encontró el botón finalizar");
    }
    
    // Añadir evento al botón de ver resultados
    const viewResultsBtn = document.getElementById('view-results');
    if (viewResultsBtn) {
        viewResultsBtn.addEventListener('click', function() {
            showResults();
        });
    }
    
    document.getElementById('back-to-menu').addEventListener('click', backToMenu);
    document.getElementById('download-results').addEventListener('click', downloadResults);
    // Add this to your document ready or initialization code section
    document.addEventListener('DOMContentLoaded', function() {
        // ... existing initialization code ...
        
        // Add event listener for the email button
        const emailButton = document.getElementById('email-results');
        if (emailButton) {
            emailButton.addEventListener('click', function() {
                sendResultsByEmail();
            });
        }
        
        // ... other event listeners ...
    });
});

// Verificar si el usuario ya existe en localStorage
function checkExistingUser(cc) {
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');
    return allUsers[cc];
}

// Actualizar el estado de las tarjetas de prueba
// Add this function to your main.js file
function updateTestCardStatus() {
    // Get all test cards
    const testCards = document.querySelectorAll('.test-card');
    
    // Check each card if it's completed
    testCards.forEach(card => {
        const testId = card.getAttribute('data-test');
        
        // If user has results for this test
        if (userData.testResults && userData.testResults[testId]) {
            card.classList.add('completed');
            
            // Show the view results button
            document.getElementById('view-results').classList.remove('d-none');
        }
    });
}

// Call this function after loading user data
// For example, in your existing code where you show the test menu

// Guardar datos de todos los usuarios
function saveAllUsersData() {
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');
    allUsers[userData.cc] = userData;
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
}

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
    
    // Seleccionar aleatoriamente 20 preguntas (o menos si no hay suficientes)
    const questionCount = Math.min(20, allQuestions.length);
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
    
    // Crear botón "Anterior" si no existe
    if (!document.getElementById('prev-question')) {
        const prevButton = document.createElement('button');
        prevButton.id = 'prev-question';
        prevButton.className = 'btn btn-secondary me-2 d-none';
        prevButton.textContent = 'Anterior';
        prevButton.addEventListener('click', prevQuestion);
        
        // Insertar antes del botón "Siguiente"
        const nextButton = document.getElementById('next-question');
        nextButton.parentNode.insertBefore(prevButton, nextButton);
    }
    
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
            imageContainer.innerHTML = `<img src="./${question.image}" alt="Imagen de referencia" class="img-fluid" style="max-height: 200px;">`;
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
                const finishButton = document.getElementById('finish-test');
                finishButton.disabled = false;
                console.log("Botón finalizar habilitado"); // Añadir log para depuración
            }
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Mostrar/ocultar botones según la pregunta actual
    const prevButton = document.getElementById('prev-question');
    const nextButton = document.getElementById('next-question');
    const finishButton = document.getElementById('finish-test');
    
    // Habilitar/deshabilitar botón anterior
    if (currentQuestionIndex > 0) {
        prevButton.classList.remove('d-none');
    } else {
        prevButton.classList.add('d-none');
    }
    
    if (currentQuestionIndex < currentTest.questions.length - 1) {
        nextButton.classList.remove('d-none');
        finishButton.classList.add('d-none');
        nextButton.disabled = true;
    } else {
        nextButton.classList.add('d-none');
        finishButton.classList.remove('d-none');
        // Inicialmente deshabilitado hasta que se seleccione una opción
        finishButton.disabled = true;
    }
    
    // Si hay una respuesta guardada para esta pregunta, seleccionarla
    if (userAnswers[currentQuestionIndex] !== undefined) {
        const savedOption = document.querySelector(`.option-item[data-index="${userAnswers[currentQuestionIndex]}"]`);
        if (savedOption) {
            savedOption.classList.add('selected');
            
            // Habilitar botones según corresponda
            if (currentQuestionIndex < currentTest.questions.length - 1) {
                nextButton.disabled = false;
            } else {
                finishButton.disabled = false;
                console.log("Botón finalizar habilitado por respuesta guardada"); // Añadir log para depuración
            }
        }
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

// Volver a la pregunta anterior
function prevQuestion() {
    // Guardar respuesta del usuario actual antes de retroceder
    const selectedOption = document.querySelector('.option-item.selected');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.getAttribute('data-index'));
    }
    
    // Retroceder a la pregunta anterior
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Configurar validación de documento
function setupDocumentValidation() {
    const documentTypeSelect = document.getElementById('document-type');
    const documentInput = document.getElementById('cc');
    const documentHelp = document.getElementById('document-help');
    
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
            
            // Limpiar mensajes de error previos
            clearValidationMessages();
        });
        
        // Validar en tiempo real mientras el usuario escribe
        documentInput.addEventListener('input', function() {
            const documentType = documentTypeSelect.value;
            const documentValue = this.value.trim();
            
            // Limpiar mensajes de error previos
            clearValidationMessages();
            
            if (documentValue && !validarDocumento(documentType, documentValue)) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                
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
                
                // Crear mensaje de error
                const feedbackElement = document.createElement('div');
                feedbackElement.className = 'invalid-feedback';
                feedbackElement.textContent = errorMessage;
                feedbackElement.id = 'document-error';
                this.parentNode.appendChild(feedbackElement);
            } else if (documentValue) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.remove('is-valid');
            }
        });
        
        // Establecer placeholder inicial
        documentTypeSelect.dispatchEvent(new Event('change'));
    }
}

// Función para limpiar mensajes de validación
function clearValidationMessages() {
    // Eliminar todos los mensajes de error existentes
    const existingErrors = document.querySelectorAll('.invalid-feedback');
    existingErrors.forEach(element => element.remove());
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

// Finalizar prueba
function finishTest() {
    console.log("Finalizando prueba..."); 
    
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
    const detailedAnswers = [];
    
    userAnswers.forEach((answer, index) => {
        const question = currentTest.questions[index];
        const isCorrect = answer === question.correctAnswer;
        
        if (isCorrect) {
            correctAnswers++;
        }
        
        // Guardar detalles de la respuesta
        detailedAnswers.push({
            question: question.question,
            context: question.context || null,
            options: question.options,
            userAnswer: answer,
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect
        });
    });
    
    const score = Math.round((correctAnswers / currentTest.questions.length) * 100);
    
    // Guardar resultados
    const testId = Object.keys(tests).find(key => tests[key].title === currentTest.title);
    if (!testId) {
        console.error("No se pudo encontrar el ID del test actual");
        alert("Error al guardar los resultados. Por favor, inténtelo de nuevo.");
        return;
    }
    
    userData.testResults[testId] = {
        score: score,
        correctAnswers: correctAnswers,
        totalQuestions: currentTest.questions.length,
        questionsFromPool: currentTest.originalQuestionCount,
        date: new Date().toLocaleDateString(),
        detailedAnswers: detailedAnswers // Añadir detalles de respuestas
    };
    
    // Guardar en localStorage
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

// Function to show results - moved outside of finishTest
function showResults() {
    console.log("Showing results...");
    
    // Update user info in results area
    document.getElementById('result-name').textContent = userData.fullName;
    document.getElementById('result-position').textContent = userData.position;
    document.getElementById('result-date').textContent = new Date().toLocaleDateString();
    
    // Generate results HTML
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = generateDetailedReport();
    
    // Hide other sections and show results
    document.getElementById('test-menu').classList.add('d-none');
    document.getElementById('test-area').classList.add('d-none');
    document.getElementById('results-area').classList.remove('d-none');
}

// Function to go back to menu
function backToMenu() {
    // Hide results and show menu
    document.getElementById('results-area').classList.add('d-none');
    document.getElementById('test-menu').classList.remove('d-none');
}

// Function to download results
function downloadResults() {
    // Create PDF and download
    const doc = generateCertificate();
    doc.save(`certificado_${userData.fullName.replace(/\s+/g, '_')}.pdf`);
}
