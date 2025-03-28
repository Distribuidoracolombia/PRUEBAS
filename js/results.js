// Funciones para manejar los resultados de las pruebas

// Guardar resultados en localStorage
function saveResults() {
    localStorage.setItem('testResults_' + userData.cc, JSON.stringify(userData));
}

// Cargar resultados desde localStorage
function loadResults() {
    const savedData = localStorage.getItem('testResults_' + userData.cc);
    if (savedData) {
        return JSON.parse(savedData);
    }
    return null;
}

// Generar informe detallado
function generateDetailedReport() {
    let report = `
    <h3>Informe Detallado</h3>
    <p><strong>Nombre:</strong> ${userData.fullName}</p>
    <p><strong>Cédula:</strong> ${userData.cc}</p>
    <p><strong>Cargo:</strong> ${userData.position}</p>
    <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
    <hr>
    `;
    
    Object.keys(userData.testResults).forEach(testId => {
        const result = userData.testResults[testId];
        const testName = tests[testId].title;
        
        report += `
        <h4>${testName}</h4>
        <p><strong>Puntuación:</strong> ${result.score}%</p>
        <p><strong>Respuestas correctas:</strong> ${result.correctAnswers} de ${result.totalQuestions}</p>
        <p><strong>Fecha de realización:</strong> ${result.date}</p>
        `;
        
        // Añadir evaluación basada en la puntuación
        if (result.score >= 90) {
            report += `<p><strong>Evaluación:</strong> <span class="text-success">Excelente</span></p>`;
        } else if (result.score >= 70) {
            report += `<p><strong>Evaluación:</strong> <span class="text-primary">Bueno</span></p>`;
        } else if (result.score >= 50) {
            report += `<p><strong>Evaluación:</strong> <span class="text-warning">Regular</span></p>`;
        } else {
            report += `<p><strong>Evaluación:</strong> <span class="text-danger">Necesita mejorar</span></p>`;
        }
        
        // Añadir detalles de las preguntas si están disponibles
        if (result.detailedAnswers && result.detailedAnswers.length > 0) {
            report += `
            <div class="mt-4">
                <h5>Detalle de respuestas:</h5>
                <div class="accordion" id="accordionAnswers${testId}">
            `;
            
            result.detailedAnswers.forEach((answer, idx) => {
                const accordionId = `answer-${testId}-${idx}`;
                const statusClass = answer.isCorrect ? 'text-success' : 'text-danger';
                const statusIcon = answer.isCorrect ? 
                    '<i class="fas fa-check-circle text-success"></i>' : 
                    '<i class="fas fa-times-circle text-danger"></i>';
                
                report += `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${accordionId}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                data-bs-target="#collapse${accordionId}" aria-expanded="false" 
                                aria-controls="collapse${accordionId}">
                            ${statusIcon} Pregunta ${idx + 1}: ${answer.question.substring(0, 50)}${answer.question.length > 50 ? '...' : ''}
                        </button>
                    </h2>
                    <div id="collapse${accordionId}" class="accordion-collapse collapse" 
                         aria-labelledby="heading${accordionId}" data-bs-parent="#accordionAnswers${testId}">
                        <div class="accordion-body">
                            <p><strong>Pregunta:</strong> ${answer.question} ${answer.context ? `(${answer.context})` : ''}</p>
                            <p><strong>Tu respuesta:</strong> <span class="${statusClass}">${answer.options[answer.userAnswer]}</span></p>
                            <p><strong>Respuesta correcta:</strong> ${answer.options[answer.correctAnswer]}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            
            report += `
                </div>
            </div>
            `;
        }
        
        report += `<hr>`;
    });
    
    // Añadir evaluación general
    let totalScore = 0;
    let testsCount = Object.keys(userData.testResults).length;
    
    Object.values(userData.testResults).forEach(result => {
        totalScore += result.score;
    });
    
    const averageScore = totalScore / testsCount;
    
    report += `
    <h4>Evaluación General</h4>
    <p><strong>Puntuación promedio:</strong> ${Math.round(averageScore)}%</p>
    `;
    
    if (averageScore >= 90) {
        report += `<p><strong>Evaluación general:</strong> <span class="text-success">Excelente</span></p>`;
    } else if (averageScore >= 70) {
        report += `<p><strong>Evaluación general:</strong> <span class="text-primary">Bueno</span></p>`;
    } else if (averageScore >= 50) {
        report += `<p><strong>Evaluación general:</strong> <span class="text-warning">Regular</span></p>`;
    } else {
        report += `<p><strong>Evaluación general:</strong> <span class="text-danger">Necesita mejorar</span></p>`;
    }
    
    return report;
}

// Generar certificado
function generateCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Título
    doc.setFontSize(22);
    doc.setTextColor(0, 102, 204);
    doc.text('Certificado de Evaluación', 105, 30, { align: 'center' });
    
    // Línea decorativa
    doc.setDrawColor(0, 102, 204);
    doc.setLineWidth(1);
    doc.line(20, 40, 190, 40);
    
    // Contenido
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text('Se certifica que:', 105, 60, { align: 'center' });
    
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(userData.fullName, 105, 75, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(`Cargo: ${userData.position}`, 105, 90, { align: 'center' });
    
    doc.setFontSize(16);
    doc.text('Ha completado satisfactoriamente las siguientes evaluaciones:', 105, 110, { align: 'center' });
    
    // Resultados
    let yPosition = 130;
    Object.keys(userData.testResults).forEach(testId => {
        const result = userData.testResults[testId];
        const testName = tests[testId].title;
        
        doc.setFontSize(14);
        doc.text(`${testName}: ${result.score}%`, 105, yPosition, { align: 'center' });
        
        yPosition += 15;
    });
    
    // Fecha
    doc.setFontSize(12);
    doc.text(`Fecha de emisión: ${new Date().toLocaleDateString()}`, 105, 230, { align: 'center' });
    
    // Firma
    doc.setDrawColor(0, 0, 0);
    doc.line(70, 210, 140, 210);
    doc.setFontSize(12);
    doc.text('Firma del evaluador', 105, 220, { align: 'center' });
    
    return doc;
}

// Exportar resultados a Excel (simulado con CSV)
function exportToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Encabezados
    csvContent += "Nombre,Cargo,Prueba,Puntuación,Respuestas Correctas,Total Preguntas,Fecha\n";
    
    // Datos
    Object.keys(userData.testResults).forEach(testId => {
        const result = userData.testResults[testId];
        const testName = tests[testId].title;
        
        csvContent += `${userData.fullName},${userData.position},${testName},${result.score}%,${result.correctAnswers},${result.totalQuestions},${result.date}\n`;
    });
    
    // Crear enlace de descarga
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `resultados_${userData.fullName.replace(/\s+/g, '_')}_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`);
    document.body.appendChild(link);
    
    // Descargar archivo
    link.click();
    
    // Eliminar enlace
    document.body.removeChild(link);
}

// Inicializar EmailJS
function initEmailJS() {
    // Solo se necesita el public key para la inicialización
    emailjs.init("ujydeP8ESBAm8HttQ");
}

// Función para generar un informe muy simplificado para correo
function generateVerySimpleEmailReport() {
    let report = `<h3>Informe de Resultados</h3>
    <p><strong>Nombre:</strong> ${userData.fullName}</p>
    <p><strong>Cédula:</strong> ${userData.cc}</p>
    <p><strong>Cargo:</strong> ${userData.position}</p>
    <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
    <hr>`;
    
    Object.keys(userData.testResults).forEach(testId => {
        const result = userData.testResults[testId];
        const testName = tests[testId].title;
        
        report += `<h4>${testName}</h4>
        <p><strong>Puntuación:</strong> ${result.score}%</p>
        <p><strong>Respuestas correctas:</strong> ${result.correctAnswers} de ${result.totalQuestions}</p>
        <p><strong>Fecha de realización:</strong> ${result.date}</p>`;
        
        // Evaluación sin formato HTML complejo
        if (result.score >= 90) {
            report += `<p><strong>Evaluación:</strong> Excelente</p>`;
        } else if (result.score >= 70) {
            report += `<p><strong>Evaluación:</strong> Bueno</p>`;
        } else if (result.score >= 50) {
            report += `<p><strong>Evaluación:</strong> Regular</p>`;
        } else {
            report += `<p><strong>Evaluación:</strong> Necesita mejorar</p>`;
        }
        
        // Añadir detalles de las preguntas si están disponibles
        if (result.detailedAnswers && result.detailedAnswers.length > 0) {
            report += `<h5>Detalle de respuestas:</h5>
            <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
                <tr style="background-color: #f2f2f2;">
                    <th style="text-align: left;">Pregunta</th>
                    <th style="text-align: left;">Respuesta del usuario</th>
                    <th style="text-align: left;">Respuesta correcta</th>
                    <th style="text-align: center;">Estado</th>
                </tr>`;
            
            result.detailedAnswers.forEach((answer, idx) => {
                const isCorrect = answer.isCorrect;
                const statusIcon = isCorrect ? '✓' : '✗';
                const statusColor = isCorrect ? 'green' : 'red';
                
                report += `<tr>
                    <td>${answer.question} ${answer.context ? `(${answer.context})` : ''}</td>
                    <td>${answer.options[answer.userAnswer]}</td>
                    <td>${answer.options[answer.correctAnswer]}</td>
                    <td style="text-align: center; color: ${statusColor};">${statusIcon}</td>
                </tr>`;
            });
            
            report += `</table>`;
        } else {
            report += `<p><em>No hay información detallada disponible para esta prueba.</em></p>`;
        }
        
        report += `<hr>`;
    });
    
    // Evaluación general simplificada
    let totalScore = 0;
    let testsCount = Object.keys(userData.testResults).length;
    
    Object.values(userData.testResults).forEach(result => {
        totalScore += result.score;
    });
    
    const averageScore = totalScore / testsCount;
    
    report += `<h4>Evaluación General</h4>
    <p><strong>Puntuación promedio:</strong> ${Math.round(averageScore)}%</p>`;
    
    if (averageScore >= 90) {
        report += `<p><strong>Evaluación general:</strong> Excelente</p>`;
    } else if (averageScore >= 70) {
        report += `<p><strong>Evaluación general:</strong> Bueno</p>`;
    } else if (averageScore >= 50) {
        report += `<p><strong>Evaluación general:</strong> Regular</p>`;
    } else {
        report += `<p><strong>Evaluación general:</strong> Necesita mejorar</p>`;
    }
    
    return report;
}

// Configuración de múltiples destinatarios en EmailJS

// Para activar la opción de múltiples destinatarios en EmailJS, necesitas modificar tu plantilla en el panel de control de EmailJS. Voy a actualizar tu función para asegurar que funcione correctamente con múltiples destinatarios:
function sendResultsByEmail() {
    // Generar el informe simplificado para el correo
    const emailReport = generateVerySimpleEmailReport();
    
    // Preparar parámetros del correo con múltiples destinatarios
    const emailParams = {
        to_email: "gestionhumana@luma.com.co",
        to_name: "Recursos Humanos",
        from_name: "Sistema de Evaluación",
        subject: `Resultados de Evaluación - ${userData.fullName}`,
        message: emailReport,
        reply_to: "noreply@luma.com.co",
        cc_email: "auxiliargh@luma.com", // Puedes añadir correos en copia si lo necesitas
        user_name: userData.fullName,
        user_position: userData.position,
        user_document: `${userData.documentType.toUpperCase()}: ${userData.cc}`,
        test_date: new Date().toLocaleDateString()
    };
    
    // Enviar el correo y retornar la promesa
    return emailjs.send('service_gu2z3bu', 'template_nh327cj', emailParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Resultados enviados por correo exitosamente');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Error al enviar resultados por correo: ' + error);
            throw error; // Re-throw to be caught by the caller
        });
}
