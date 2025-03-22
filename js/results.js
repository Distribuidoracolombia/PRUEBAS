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
    // Reemplaza "tu_clave_publica_de_emailjs" con la clave pública de tu cuenta EmailJS
    emailjs.init("uotg11rDLHyBtejvj");
}

// Enviar resultados por correo
function sendResultsByEmail() {
    // Generar el contenido HTML para el correo
    const htmlContent = generateDetailedReport();
    
    // Preparar los parámetros para el correo
    const templateParams = {
        to_email: "auxsistemas@luma.com.co",
        from_name: "Sistema de Evaluación",
        to_name: "Administrador",
        subject: `Resultados de evaluación - ${userData.fullName}`,
        message: `
            <p>Se adjuntan los resultados de la evaluación realizada por:</p>
            <p><strong>Nombre:</strong> ${userData.fullName}</p>
            <p><strong>Cargo:</strong> ${userData.position}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
        `,
        results_html: htmlContent
    };
    
    // Mostrar indicador de carga
    document.getElementById('email-results').disabled = true;
    document.getElementById('email-results').innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
    
    // Enviar el correo usando EmailJS
    // Reemplaza "service_id" y "template_id" con los IDs de tu servicio y plantilla
    emailjs.send("service_gu2z3bu", "template_nh327cj", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Los resultados han sido enviados correctamente al correo auxsistemas@luma.com.co');
            
            // Restaurar el botón
            document.getElementById('email-results').disabled = false;
            document.getElementById('email-results').textContent = 'Enviar por Correo';
        }, function(error) {
            console.log('FAILED...', error);
            alert('Error al enviar los resultados. Por favor, inténtelo de nuevo más tarde.');
            
            // Restaurar el botón
            document.getElementById('email-results').disabled = false;
            document.getElementById('email-results').textContent = 'Enviar por Correo';
        }); // Close emailjs.send() promise chain
}
