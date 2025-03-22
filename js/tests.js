// Datos de las pruebas
const tests = {
    "ortografia-basico": {
        title: "Prueba de Ortografía Básica",
        timeLimit: 600, // 10 minutos
        questions: [
            {
                question: "¿Cuál de las siguientes palabras está escrita correctamente?",
                options: ["Examen", "Exámen", "Examen", "Exsamen"],
                correctAnswer: 0
            },
            {
                question: "Selecciona la palabra correctamente escrita:",
                options: ["Vació", "Vacio", "Vacío", "Vasío"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es la forma correcta?",
                options: ["Haber", "A ver", "Haver", "Aber"],
                correctAnswer: 0,
                context: "Voy a _____ si puedo resolver este problema."
            },
            {
                question: "Identifica la palabra con error ortográfico:",
                options: ["Biblioteca", "Adolescente", "Ajendrar", "Conocimiento"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es la forma correcta?",
                options: ["Hay", "Ay", "Ahí", "Ai"],
                context: "_____ está el libro que buscabas.",
                correctAnswer: 2
            },
            {
                question: "Selecciona la oración con la puntuación correcta:",
                options: [
                    "Juan, mi hermano, es médico.",
                    "Juan mi hermano, es médico.",
                    "Juan, mi hermano es médico.",
                    "Juan mi hermano es, médico."
                ],
                correctAnswer: 0
            },
            {
                question: "¿Cuál de estas palabras debe llevar tilde?",
                options: ["Examen", "Resumen", "Volumen", "Dictamen"],
                correctAnswer: 0
            },
            {
                question: "Identifica la palabra correctamente escrita:",
                options: ["Absorver", "Absolver", "Absorber", "Abssorber"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es la forma correcta?",
                options: ["A", "Ha", "Ah", "Há"],
                context: "Él _____ terminado su trabajo.",
                correctAnswer: 1
            },
            {
                question: "Selecciona la palabra con la acentuación correcta:",
                options: ["Fácilmente", "Facilménte", "Fácilménte", "Facilmente"],
                correctAnswer: 0
            }
        ]
    },
    "ortografia-medio": {
        title: "Prueba de Ortografía Nivel Medio",
        timeLimit: 600, // 10 minutos
        questions: [
            {
                question: "¿Cuál de las siguientes palabras está escrita correctamente?",
                options: ["Idiosincracia", "Idiosincrasia", "Idiosincracia", "Idiosincrasia"],
                correctAnswer: 1
            },
            {
                question: "Selecciona la oración con el uso correcto de 'porque', 'por que', 'porqué' o 'por qué':",
                options: [
                    "No sé por qué no vino a la fiesta.",
                    "No sé porque no vino a la fiesta.",
                    "No sé porqué no vino a la fiesta.",
                    "No sé por que no vino a la fiesta."
                ],
                correctAnswer: 0
            },
            {
                question: "¿Cuál es la forma correcta?",
                options: ["Exhuberante", "Exuberante", "Exuverante", "Exhauberante"],
                correctAnswer: 1
            },
            {
                question: "Identifica la palabra con error ortográfico:",
                options: ["Convalecencia", "Adolescencia", "Efervecencia", "Paciencia"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es el plural correcto de 'régimen'?",
                options: ["Régimenes", "Regímenes", "Régimens", "Regímens"],
                correctAnswer: 1
            },
            {
                question: "Selecciona la oración con el uso correcto de la coma:",
                options: [
                    "Los invitados, que llegaron tarde, se perdieron el discurso.",
                    "Los invitados que, llegaron tarde, se perdieron el discurso.",
                    "Los invitados que llegaron tarde, se perdieron el discurso.",
                    "Los invitados, que llegaron tarde se perdieron el discurso."
                ],
                correctAnswer: 0
            },
            {
                question: "¿Cuál de estas palabras está correctamente escrita?",
                options: ["Eminente", "Inminente", "Iminente", "Emminente"],
                context: "El peligro era _____.",
                correctAnswer: 1
            },
            {
                question: "Identifica la palabra correctamente escrita:",
                options: ["Escacés", "Escases", "Escasez", "Escaséz"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es la forma correcta?",
                options: ["Adición", "Adicción", "Addicción", "Adisión"],
                context: "Sufre una _____ a las drogas.",
                correctAnswer: 1
            },
            {
                question: "Selecciona la palabra con la acentuación correcta:",
                options: ["Heróico", "Heroico", "Héroico", "Heroíco"],
                correctAnswer: 1
            }
        ]
    },
    "excel-basico": {
        title: "Prueba de Excel Básico",
        timeLimit: 600, // 10 minutos
        questions: [
            {
                question: "¿Qué símbolo se utiliza para comenzar una fórmula en Excel?",
                options: ["#", "=", "$", "@"],
                correctAnswer: 1
            },
            {
                question: "¿Cuál es la función para sumar un rango de celdas?",
                options: ["SUMA()", "TOTAL()", "CONTAR()", "PROMEDIO()"],
                correctAnswer: 0
            },
            {
                question: "¿Qué tecla se usa para seleccionar celdas no adyacentes?",
                options: ["Alt", "Shift", "Ctrl", "Tab"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es el resultado de la fórmula =5+2*3?",
                options: ["21", "11", "17", "Error"],
                correctAnswer: 1
            },
            {
                question: "¿Qué función se utiliza para encontrar el valor más alto en un rango?",
                options: ["MAX()", "MAYOR()", "ALTO()", "MAXIMO()"],
                correctAnswer: 0
            },
            {
                question: "¿Cómo se llama la intersección de una fila y una columna?",
                options: ["Rango", "Tabla", "Celda", "Matriz"],
                correctAnswer: 2
            },
            {
                question: "¿Qué combinación de teclas se usa para copiar en Excel?",
                options: ["Ctrl+X", "Ctrl+V", "Ctrl+C", "Ctrl+Z"],
                correctAnswer: 2
            },
            {
                question: "¿Qué función se utiliza para contar celdas que contienen números?",
                options: ["CONTAR()", "CONTARA()", "CONTAR.SI()", "CONTAR.BLANCO()"],
                correctAnswer: 0
            },
            {
                question: "¿Qué símbolo se utiliza para referencias absolutas en Excel?",
                options: ["&", "#", "$", "@"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es el atajo de teclado para guardar un archivo en Excel?",
                options: ["Ctrl+G", "Ctrl+S", "Ctrl+A", "Ctrl+B"],
                correctAnswer: 1
            }
        ]
    },
    // En el objeto excel-intermedio, actualiza las rutas de las imágenes
    "excel-intermedio": {
        title: "Prueba de Excel Intermedio",
        timeLimit: 900, // 15 minutos
        questions: [
            {
                question: "¿Qué función se utiliza para buscar un valor en la primera columna de una tabla y devolver un valor en la misma fila de otra columna?",
                options: ["BUSCAR()", "BUSCARV()", "COINCIDIR()", "INDICE()"],
                correctAnswer: 1
            },
            {
                question: "¿Qué función se utiliza para contar celdas que cumplen con un criterio específico?",
                options: ["CONTAR()", "CONTARA()", "CONTAR.SI()", "CONTAR.BLANCO()"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es la función para combinar texto de diferentes celdas?",
                options: ["UNIR()", "CONCATENAR()", "JUNTAR()", "COMBINAR()"],
                correctAnswer: 1
            },
            {
                question: "¿Qué función devuelve el número de días entre dos fechas?",
                options: ["DIAS()", "DIAS.LAB()", "FECHA.DIFF()", "DIAS.ENTRE()"],
                correctAnswer: 0
            },
            {
                question: "¿Qué hace la función SI.ERROR()?",
                options: [
                    "Muestra un mensaje de error personalizado",
                    "Evita que se muestren errores en las fórmulas",
                    "Comprueba si una celda contiene un error",
                    "Corrige automáticamente errores en fórmulas"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Qué función se utiliza para redondear un número al entero más cercano?",
                options: ["REDONDEAR()", "REDONDEAR.MAS()", "ENTERO()", "REDONDEAR.MENOS()"],
                correctAnswer: 0
            },
            {
                question: "¿Qué es una tabla dinámica?",
                options: [
                    "Una tabla que cambia automáticamente sus valores",
                    "Una herramienta para ordenar datos",
                    "Una herramienta para resumir y analizar datos",
                    "Una tabla con fórmulas dinámicas"
                ],
                correctAnswer: 2
            },
            {
                question: "¿Qué función se utiliza para extraer una parte específica de un texto?",
                options: ["EXTRAER()", "IZQUIERDA()", "DERECHA()", "EXTRAE()"],
                correctAnswer: 3
            },
            {
                question: "¿Qué función se utiliza para encontrar un valor en un rango de celdas y devolver su posición relativa?",
                options: ["BUSCARV()", "INDICE()", "COINCIDIR()", "BUSCARH()"],
                correctAnswer: 2
            },
            {
                question: "¿Qué tipo de referencia no cambia cuando se copia una fórmula?",
                options: [
                    "Referencia relativa",
                    "Referencia absoluta",
                    "Referencia mixta",
                    "Referencia dinámica"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Qué tipo de gráfico es mejor para mostrar la contribución de cada valor a un total?",
                options: [
                    "Gráfico de barras",
                    "Gráfico de líneas",
                    "Gráfico circular (pie)",
                    "Gráfico de dispersión"
                ],
                correctAnswer: 2,
                image: "./img/chart-pie.png" // Cambiado a ruta relativa
            },
            {
                question: "¿Qué tipo de gráfico es más adecuado para mostrar tendencias a lo largo del tiempo?",
                options: [
                    "Gráfico de barras",
                    "Gráfico de líneas",
                    "Gráfico circular (pie)",
                    "Gráfico de radar"
                ],
                correctAnswer: 1,
                image: "./img/chart-line.png" // Cambiado a ruta relativa
            },
            {
                question: "¿Cómo se llama el elemento que muestra la relación entre los colores y los valores en un gráfico?",
                options: [
                    "Título",
                    "Leyenda",
                    "Etiqueta de datos",
                    "Eje"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Qué tipo de gráfico es mejor para comparar valores entre diferentes categorías?",
                options: [
                    "Gráfico de barras",
                    "Gráfico de líneas",
                    "Gráfico circular (pie)",
                    "Gráfico de área"
                ],
                correctAnswer: 0,
                image: "./img/chart-bar.png" // Cambiado a ruta relativa
            },
            {
                question: "¿Qué función se utiliza para crear un gráfico dinámico basado en una tabla dinámica?",
                options: [
                    "Insertar gráfico",
                    "Crear gráfico dinámico",
                    "Gráfico de tabla dinámica",
                    "Análisis de datos"
                ],
                correctAnswer: 2
            }
        ]
    },    "cajera-pdv": {
    title: "Prueba para Cajera de Punto de Venta",
    timeLimit: 600, // 10 minutos
    questions: [
        {
            question: "¿Cuál es el procedimiento correcto al recibir un pago con tarjeta de crédito?",
            options: [
                "Solicitar la tarjeta y pasarla por el datáfono sin verificar identidad",
                "Solicitar la tarjeta y documento de identidad, verificar que coincidan, y luego procesar el pago",
                "Pedir solo el documento de identidad y procesar el pago",
                "Aceptar cualquier tarjeta sin verificación si el monto es menor a $500.000"
            ],
            correctAnswer: 1
        },
        {
            question: "Un cliente desea comprar una nevera de $1.800.000 y tiene un cupón de descuento del 15%. ¿Cuál es el monto final a cobrar?",
            options: [
                "$1.530.000",
                "$1.650.000",
                "$1.700.000",
                "$1.550.000"
            ],
            correctAnswer: 0
        },
        {
            question: "¿Qué información debe contener una factura de venta de una motocicleta?",
            options: [
                "Solo el valor y la marca de la moto",
                "Valor, marca, modelo y color",
                "Valor, marca, modelo, número de chasis, número de motor y especificaciones técnicas",
                "Solo el valor con IVA incluido"
            ],
            correctAnswer: 2
        },
        {
            question: "Un cliente compra una lavadora de $1.200.000 y un televisor de $900.000. Si paga en efectivo tiene un 5% de descuento. ¿Cuánto debe pagar?",
            options: [
                "$2.100.000",
                "$1.995.000",
                "$2.000.000",
                "$1.900.000"
            ],
            correctAnswer: 1
        },
        {
            question: "¿Qué debe hacer si el sistema de punto de venta deja de funcionar durante una transacción?",
            options: [
                "Pedir al cliente que regrese más tarde",
                "Realizar la venta manualmente con factura física, registrando todos los detalles necesarios",
                "Cancelar la venta",
                "Procesar el pago sin factura y emitirla después"
            ],
            correctAnswer: 1
        },
        {
            question: "¿Cuál es el procedimiento para aplicar una garantía en un electrodoméstico?",
            options: [
                "Simplemente cambiar el producto sin verificación",
                "Solicitar la factura, verificar fecha de compra, revisar condiciones de garantía y procesar según políticas",
                "Negar la garantía si han pasado más de 15 días",
                "Solicitar autorización del gerente en todos los casos"
            ],
            correctAnswer: 1
        },
        {
            question: "Un cliente desea financiar una moto de $8.000.000. Da un inicial del 20% y financia el resto a 36 meses. ¿Cuánto es el monto a financiar?",
            options: [
                "$6.400.000",
                "$1.600.000",
                "$8.000.000",
                "$4.000.000"
            ],
            correctAnswer: 0
        },
        {
            question: "¿Qué información debe verificar al recibir un cheque como forma de pago?",
            options: [
                "Solo el monto y la firma",
                "Monto, firma, fecha, beneficiario y que no tenga tachones ni enmendaduras",
                "Solo que el cheque esté firmado",
                "No se aceptan cheques como forma de pago"
            ],
            correctAnswer: 1
        },
        {
            question: "Al realizar el cierre de caja, hay un faltante de $50.000. ¿Cuál es el procedimiento correcto?",
            options: [
                "Ignorar el faltante si es una cantidad pequeña",
                "Registrar el faltante, reportarlo al supervisor y documentar en el formato de cierre de caja",
                "Reponer el dinero sin informar a nadie",
                "Ajustar las ventas para que cuadre la caja"
            ],
            correctAnswer: 1
        },
        {
            question: "¿Qué debe hacer cuando un cliente solicita la devolución de un electrodoméstico?",
            options: [
                "Negar todas las devoluciones",
                "Aceptar la devolución sin hacer preguntas",
                "Verificar la factura, el estado del producto, el motivo de devolución y proceder según políticas de la empresa",
                "Ofrecer solo cambio por otro producto"
            ],
            correctAnswer: 2
        },
        {
            question: "Un cliente compra repuestos para moto por valor de $320.000. Si paga con tarjeta de crédito a 6 cuotas con un interés del 2% mensual, ¿cuál es el valor total que pagará?",
            options: [
                "$320.000",
                "$352.000",
                "$358.400",
                "$384.000"
            ],
            correctAnswer: 3
        },
        {
            question: "¿Qué información debe solicitar para registrar a un cliente en el sistema?",
            options: [
                "Solo nombre y teléfono",
                "Nombre, documento de identidad, dirección, teléfono y correo electrónico",
                "Solo documento de identidad",
                "Nombre, dirección y fecha de nacimiento"
            ],
            correctAnswer: 1
        },
        {
            question: "¿Cuál es el procedimiento para manejar una reclamación por un producto defectuoso?",
            options: [
                "Pedir al cliente que contacte directamente al fabricante",
                "Negar la reclamación si el producto ha sido usado",
                "Escuchar al cliente, documentar el problema, verificar la garantía y seguir el protocolo de servicio técnico",
                "Cambiar inmediatamente el producto sin verificación"
            ],
            correctAnswer: 2
        },
        {
            question: "¿Qué debe hacer si detecta un billete falso durante una transacción?",
            options: [
                "Aceptarlo para evitar conflictos y luego reportarlo",
                "Rechazarlo discretamente, informar al cliente y solicitar otra forma de pago",
                "Retener el billete sin informar al cliente",
                "Aceptarlo pero con un recargo adicional"
            ],
            correctAnswer: 1
        },
        {
            question: "¿Cuál es la mejor manera de manejar una fila larga de clientes en caja?",
            options: [
                "Atender rápidamente sin verificar bien los pagos",
                "Mantener la calma, ser eficiente, solicitar apoyo si está disponible y agradecer a los clientes por su paciencia",
                "Cerrar la caja temporalmente",
                "Atender solo a los clientes que compren productos de alto valor"
            ],
            correctAnswer: 1
        }
    ]
}
};