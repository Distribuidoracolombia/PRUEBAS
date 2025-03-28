const tests = {
    "ortografia-basico": {
        title: "Prueba de Ortografía Básica",
        timeLimit: 600, // 10 minutos
        questions: [
            {
                question: "¿Cuál de las siguientes palabras está escrita correctamente?",
                options: ["Examen", "Exámen", "Excamen", "Exsamen"],
                correctAnswer: 0
            },
            {
                question: "Selecciona la palabra correctamente escrita:",
                options: ["Vació", "Vacio", "Vacío", "Vasío"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es la forma correcta?",
                context: "Voy a _____ si puedo resolver este problema.",
                options: ["Haber", "A ver", "Aber", "Abe"],
                correctAnswer: 1
            },
            {
                question: "Identifica la palabra con error ortográfico:",
                options: ["Biblioteca", "Adolescente", "Ajendrar", "Conocimiento"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es la forma correcta?",
                context: "_____ está el libro que buscabas.",
                options: ["Hay", "Ay", "Ahí", "Ai"],
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
                context: "Él _____ terminado su trabajo.",
                options: ["A", "Ha", "Ah", "Há"],
                correctAnswer: 1
            },
            {
                question: "Selecciona la palabra con la acentuación correcta:",
                options: ["Fácilmente", "Facilménte", "Fácilménte", "Facilmente"],
                correctAnswer: 0
            },
            {
                question: "¿Cuál es la forma correcta?",
                context: "_____ a comprar pan.",
                options: ["Valla", "Vaya", "Baya", "Balla"],
                correctAnswer: 1
            },
            {
                question: "Identifica la palabra correctamente escrita:",
                options: ["Ayer", "Alludante", "Alludar", "Hallar"],
                correctAnswer: 0
            },
            {
                question: "¿Cuál de las siguientes palabras lleva tilde?",
                options: ["Cesped", "Lapiz", "Margen", "Cielo"],
                correctAnswer: 1
            },
            {
                question: "Selecciona la palabra con la acentuación correcta:",
                options: ["Examén", "Exámen", "Examen", "Éxamen"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es la forma correcta?",
                context: "No quiero café _____ té.",
                options: ["Sino", "Si no", "Sinó", "Sí no"],
                correctAnswer: 1
            },
            {
                question: "Identifica la palabra con error ortográfico:",
                options: ["Caballo", "Desarrollo", "Llabe", "Brillante"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es la forma correcta?",
                context: "Ya he _____ la tarea.",
                options: ["Hecho", "Echo", "Eko", "Heco"],
                correctAnswer: 0
            },
            {
                question: "Selecciona la oración con la puntuación correcta:",
                options: [
                    "María, compró pan, leche y huevos.",
                    "María compró, pan, leche y huevos.",
                    "María compró pan, leche y huevos.",
                    "María compró pan leche, y huevos."
                ],
                correctAnswer: 2
            },
            {
                question: "¿Cuál de estas palabras debe llevar tilde?",
                options: ["Mesa", "Lapiz", "Libro", "Reloj"],
                correctAnswer: 1
            },
            {
                question: "Identifica la palabra correctamente escrita:",
                options: ["Vevida", "Bebida", "Bevida", "Bebída"],
                correctAnswer: 1
            }
        ]
    },
    "ortografia-medio": {
    "title": "Prueba de Ortografía Nivel Medio",
    "timeLimit": 600, // 10 minutos
    "questions": [
        {
            "question": "¿Cuál de las siguientes palabras está escrita correctamente?",
            "options": ["Idiosincracia", "Idiosincrasia", "Idiosincracia", "Idiosincrasía"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál de las siguientes oraciones usa correctamente 'porque', 'por qué', 'por que' o 'porqué'?",
            "options": [
                "No sé por qué no vino a la fiesta.",
                "No sé porque no vino a la fiesta.",
                "No sé porqué no vino a la fiesta.",
                "No sé por que no vino a la fiesta."
            ],
            "correctAnswer": 0
        },
        {
            "question": "¿Cuál de estas palabras está escrita correctamente?",
            "options": ["Exhuberante", "Exuberante", "Exuverante", "Exhauberante"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál de las siguientes palabras contiene un error ortográfico?",
            "options": ["Convalecencia", "Adolescencia", "Efervecencia", "Paciencia"],
            "correctAnswer": 2
        },
        {
            "question": "¿Cuál es el plural correcto de 'régimen'?",
            "options": ["Régimenes", "Regímenes", "Régimens", "Regímens"],
            "correctAnswer": 1
        },
        {
            "question": "¿En cuál de estas oraciones el uso de la coma es correcto?",
            "options": [
                "Los invitados, que llegaron tarde, se perdieron el discurso.",
                "Los invitados que, llegaron tarde, se perdieron el discurso.",
                "Los invitados que llegaron tarde, se perdieron el discurso.",
                "Los invitados, que llegaron tarde se perdieron el discurso."
            ],
            "correctAnswer": 0
        },
        {
            "question": "¿Cuál es la palabra correcta para completar la siguiente oración?",
            "context": "El peligro era _____.",
            "options": ["Eminente", "Inminente", "Iminente", "Emminente"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál de estas palabras está escrita correctamente?",
            "options": ["Escacés", "Escases", "Escasez", "Escaséz"],
            "correctAnswer": 2
        },
        {
            "question": "¿Cuál es la forma correcta para completar la oración?",
            "context": "Sufre una _____ a las drogas.",
            "options": ["Adición", "Adicción", "Addicción", "Adisión"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál de las siguientes palabras tiene la acentuación correcta?",
            "options": ["Heróico", "Heroico", "Héroico", "Heroíco"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál es el plural correcto de 'carácter'?",
            "options": ["Carácteres", "Caracteres", "Carácters", "Caracterés"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál de estas palabras está escrita correctamente?",
            "options": ["Exhuberante", "Exuberante", "Hexuberante", "Exuverante"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál es la forma correcta para completar la oración?",
            "context": "Vamos _____ si terminamos a tiempo.",
            "options": ["Haber", "A ver", "Haver", "Aber"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál de las siguientes palabras tiene un error ortográfico?",
            "options": ["Exhaustivo", "Exhuberante", "Exhibición", "Exhortar"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál de las siguientes oraciones usa correctamente la palabra 'sino'?",
            "options": [
                "No quiero café sino té.",
                "No quiero café si no té.",
                "No quiero café si nó té.",
                "No quiero café sinó té."
            ],
            "correctAnswer": 0
        },
        {
            "question": "¿En cuál de estas oraciones el uso de 'demás' o 'de más' es correcto?",
            "options": [
                "Los demás estudiantes ya se fueron.",
                "Los de más estudiantes ya se fueron.",
                "Los demas estudiantes ya se fueron.",
                "Los de mas estudiantes ya se fueron."
            ],
            "correctAnswer": 0
        },
        {
            "question": "¿Cuál de estas palabras está correctamente escrita?",
            "options": ["Translúcido", "Traslúcido", "Translucido", "Traslucido"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál de estas palabras está escrita correctamente?",
            "options": ["Absorver", "Absolver", "Absorber", "Abssorber"],
            "correctAnswer": 2
        },
        {
            "question": "¿Cuál es la forma correcta para completar la oración?",
            "context": "Espero que _____ terminado para mañana.",
            "options": ["Halla", "Haya", "Alla", "Aya"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál de estas palabras tiene la acentuación correcta?",
            "options": ["Exámen", "Examén", "Examen", "Éxamen"],
            "correctAnswer": 2
        }
    ]
},
   "excel-basico": {
    "title": "Prueba de Excel Básico",
    "timeLimit": 600, // 10 minutos
    "questions": [
        {
            "question": "¿Qué símbolo se usa para comenzar una fórmula en Excel?",
            "options": ["#", "=", "$", "@"],
            "correctAnswer": 1
        },
        {
            "question": "¿Cuál es la función utilizada para sumar un rango de celdas?",
            "options": ["SUMA()", "TOTAL()", "CONTAR()", "PROMEDIO()"],
            "correctAnswer": 0
        },
        {
            "question": "¿Qué tecla permite seleccionar celdas no adyacentes?",
            "options": ["Alt", "Shift", "Ctrl", "Tab"],
            "correctAnswer": 2
        },
        {
            "question": "¿Cuál es el resultado de la fórmula =5+2*3 considerando la jerarquía de operaciones?",
            "options": ["21", "11", "17", "Error"],
            "correctAnswer": 1
        },
        {
            "question": "¿Qué función permite encontrar el valor más alto en un rango de celdas?",
            "options": ["MAX()", "MAYOR()", "ALTO()", "MAXIMO()"],
            "correctAnswer": 0
        },
        {
            "question": "¿Cómo se llama la intersección de una fila y una columna en Excel?",
            "options": ["Rango", "Tabla", "Celda", "Matriz"],
            "correctAnswer": 2
        },
        {
            "question": "¿Qué combinación de teclas se usa para copiar contenido en Excel?",
            "options": ["Ctrl+X", "Ctrl+V", "Ctrl+C", "Ctrl+Z"],
            "correctAnswer": 2
        },
        {
            "question": "¿Qué función cuenta únicamente las celdas que contienen valores numéricos?",
            "options": ["CONTAR()", "CONTARA()", "CONTAR.SI()", "CONTAR.BLANCO()"],
            "correctAnswer": 0
        },
        {
            "question": "¿Qué símbolo indica una referencia absoluta en Excel?",
            "options": ["&", "#", "$", "@"],
            "correctAnswer": 2
        },
        {
            "question": "¿Cuál es el atajo de teclado para guardar un archivo en Excel?",
            "options": ["Ctrl+G", "Ctrl+S", "Ctrl+A", "Ctrl+B"],
            "correctAnswer": 1
        },
        {
            "question": "¿Qué tecla se usa para editar el contenido de una celda?",
            "options": ["Enter", "F2", "Tab", "Esc"],
            "correctAnswer": 1
        },
        {
            "question": "¿Qué función calcula el promedio de un rango de celdas?",
            "options": ["PROMEDIO()", "MEDIA()", "AVG()", "PROM()"],
            "correctAnswer": 0
        },
        {
            "question": "¿Qué combinación de teclas permite pegar solo valores en Excel?",
            "options": ["Ctrl+V", "Alt+V", "Ctrl+Alt+V", "Shift+V"],
            "correctAnswer": 2
        },
        {
            "question": "¿Qué función redondea un número hacia abajo al entero más cercano?",
            "options": ["REDONDEAR()", "REDONDEAR.MAS()", "REDONDEAR.MENOS()", "ENTERO()"],
            "correctAnswer": 3
        },
        {
            "question": "¿Cuál es el operador de concatenación en Excel?",
            "options": ["&", "+", "*", "#"],
            "correctAnswer": 0
        },
        {
            "question": "¿Qué función se usa para buscar un valor en una tabla y devolver un valor relacionado?",
            "options": ["BUSCAR()", "BUSCARV()", "COINCIDIR()", "INDICE()"],
            "correctAnswer": 1
        },
        {
            "question": "¿Qué combinación de teclas selecciona toda la hoja de cálculo?",
            "options": ["Ctrl+A", "Ctrl+E", "Ctrl+T", "Ctrl+S"],
            "correctAnswer": 0
        },
        {
            "question": "¿Cómo se denomina una celda que contiene una fórmula que hace referencia a sí misma?",
            "options": ["Referencia circular", "Autorreferencia", "Bucle de celda", "Referencia recursiva"],
            "correctAnswer": 0
        },
        {
            "question": "¿Qué función cuenta celdas que cumplen con un criterio específico?",
            "options": ["CONTAR()", "CONTAR.SI()", "CONTARA()", "CONTAR.BLANCO()"],
            "correctAnswer": 1
        },
        {
            "question": "¿Qué combinación de teclas inserta una nueva hoja en Excel?",
            "options": ["Ctrl+N", "Shift+F11", "Alt+I", "Ctrl+I"],
            "correctAnswer": 1
        },
        {
            "question": "¿Qué símbolo se usa para la multiplicación en una fórmula de Excel?",
            "options": ["x", "*", "·", "×"],
            "correctAnswer": 1
        }
    ]
}, 
    "excel-intermedio": {

                title: "Prueba de Excel Intermedio",
                timeLimit: 600, // 10 minutos
                questions: [
                    {
                        question: "¿Qué función se utiliza para combinar rangos y aplicar criterios múltiples?",
                        options: ["Y()", "O()", "SI.CONJUNTO()", "SI.MULTIPLE()"],
                        correctAnswer: 0
                    },
                    {
                        question: "¿Qué hace la función SUMAR.SI()?",
                        options: [
                            "Suma todos los valores de un rango",
                            "Suma valores que cumplen con un criterio específico",
                            "Suma si el resultado es positivo",
                            "Suma valores duplicados"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "¿Qué es una referencia mixta en Excel?",
                        options: [
                            "Una referencia que incluye texto y números",
                            "Una referencia que combina celdas absolutas y relativas",
                            "Una referencia a múltiples hojas",
                            "Una referencia a una tabla dinámica"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "¿Qué función se utiliza para buscar un valor en una matriz y devolver un valor de la misma fila pero en una columna diferente?",
                        options: ["BUSCARV()", "BUSCARH()", "INDICE()", "COINCIDIR()"],
                        correctAnswer: 0
                    },
                    {
                        question: "¿Qué hace la función CONCATENAR()?",
                        options: [
                            "Suma valores",
                            "Une texto de diferentes celdas",
                            "Cuenta celdas",
                            "Calcula promedios"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "¿Qué función se utiliza para buscar un valor en la primera columna de una tabla y devolver un valor de la misma fila en una columna especificada?",
                        options: ["BUSCARV()", "BUSCARH()", "INDICE(COINCIDIR())", "CONSULTAV()"],
                        correctAnswer: 0
                    },
                    {
                        question: "¿Qué función se utiliza para extraer texto de una celda desde una posición específica y con una longitud determinada?",
                        options: ["EXTRAER()", "EXTRAE()", "SUBCADENA()", "IZQUIERDA()"],
                        correctAnswer: 1
                    },
                    {
                        question: "¿Qué función anidada se puede usar para buscar un valor en una tabla y devolver la posición de la fila?",
                        options: ["INDICE()", "COINCIDIR()", "BUSCARV()", "FILA()"],
                        correctAnswer: 1
                    },
                    {
                        question: "¿Qué función se utiliza para combinar texto de diferentes celdas?",
                        options: ["CONCATENAR()", "UNIR()", "COMBINAR()", "JUNTAR()"],
                        correctAnswer: 0
                    },
                   
                    {
                        question: "¿Qué tipo de referencia no cambia cuando se copia una fórmula a otra celda?",
                        options: ["Referencia relativa", "Referencia absoluta", "Referencia mixta", "Referencia dinámica"],
                        correctAnswer: 1
                    },
                    {
                        question: "¿Qué función se utiliza para contar celdas que contienen números en un rango que cumple con múltiples criterios?",
                        options: ["CONTAR.SI()", "CONTAR.SI.CONJUNTO()", "SUMAR.SI()", "PROMEDIO.SI()"],
                        correctAnswer: 1
                    },
                    {
                        question: "¿Qué función se utiliza para devolver uno de dos valores dependiendo de una condición?",
                        options: ["SI()", "Y()", "O()", "ELEGIR()"],
                        correctAnswer: 0
                    },
                    {
                        question: "¿Qué función se utiliza para calcular la suma de productos de rangos correspondientes?",
                        options: ["SUMAR()", "PRODUCTO()", "SUMAPRODUCTO()", "SUMX2MY2()"],
                        correctAnswer: 2
                    },
                    {
                        question: "¿Qué función se utiliza para encontrar el valor más pequeño en un rango?",
                        options: ["MIN()", "MENOR()", "PEQUEÑO()", "MINIMO()"],
                        correctAnswer: 0
                    },
                    // Nuevas preguntas para completar las 20
                    {
                        question: "¿Qué función se utiliza para calcular el valor futuro de una inversión con pagos periódicos constantes?",
                        options: ["VF()", "VA()", "TIR()", "VNA()"],
                        correctAnswer: 0
                    },
                    {
                        question: "¿Qué función se utiliza para convertir texto a mayúsculas?",
                        options: ["MAYUSC()", "SUPERIOR()", "CAPITAL()", "UPPER()"],
                        correctAnswer: 0
                    },
                    {
                        question: "¿Qué función se utiliza para redondear un número al múltiplo más cercano de un número específico?",
                        options: ["REDONDEAR()", "MULTIPLO.SUPERIOR()", "REDONDEAR.MULTIPLO()", "MULTIPLO()"],
                        correctAnswer: 2
                    },
                    {
                        question: "¿Qué función se utiliza para obtener el día de la semana a partir de una fecha?",
                        options: ["DIA()", "DIASEM()", "DIASEMANA()", "NOMDIA()"],
                        correctAnswer: 1
                    },
                                          
            {
                question: "¿Qué función se utiliza para encontrar un valor en la primera columna de una tabla y devolver un valor de la misma fila en una columna especificada?",
                options: ["BUSCARV()", "BUSCARH()", "INDICE(COINCIDIR())", "CONSULTAV()"],
                correctAnswer: 0
            },
            {
                question: "¿Qué función se utiliza para extraer texto de una celda desde una posición específica y con una longitud determinada?",
                options: ["EXTRAER()", "EXTRAE()", "SUBCADENA()", "IZQUIERDA()"],
                correctAnswer: 1
            },
            {
                question: "¿Qué función anidada se puede usar para buscar un valor en una tabla y devolver la posición de la fila?",
                options: ["INDICE()", "COINCIDIR()", "BUSCARV()", "FILA()"],
                correctAnswer: 1
            },
            {
                question: "¿Qué función se utiliza para combinar texto de diferentes celdas?",
                options: ["CONCATENAR()", "UNIR()", "COMBINAR()", "JUNTAR()"],
                correctAnswer: 0
            },
                      {
                question: "¿Qué tipo de referencia no cambia cuando se copia una fórmula a otra celda?",
                options: ["Referencia relativa", "Referencia absoluta", "Referencia mixta", "Referencia dinámica"],
                correctAnswer: 1
            },
            {
                question: "¿Qué función se utiliza para contar celdas que contienen números en un rango que cumple con múltiples criterios?",
                options: ["CONTAR.SI()", "CONTAR.SI.CONJUNTO()", "SUMAR.SI()", "PROMEDIO.SI()"],
                correctAnswer: 1
            },
            {
                question: "¿Qué función se utiliza para devolver uno de dos valores dependiendo de una condición?",
                options: ["SI()", "Y()", "O()", "ELEGIR()"],
                correctAnswer: 0
            },
            {
                question: "¿Qué función se utiliza para calcular la suma de productos de rangos correspondientes?",
                options: ["SUMAR()", "PRODUCTO()", "SUMAPRODUCTO()", "SUMX2MY2()"],
                correctAnswer: 2
            },
            {
                question: "¿Qué función se utiliza para encontrar el valor más pequeño en un rango?",
                options: ["MIN()", "MENOR()", "PEQUEÑO()", "MINIMO()"],
                correctAnswer: 0
            }
        ]
    },
    "cajera-pdv": {
        title: "Prueba para Cajera de Punto de Venta",
        timeLimit: 600, // 10 minutos
        questions: [
            {
                question: "¿Qué información debe verificar en una tarjeta de crédito antes de procesarla?",
                options: [
                    "Solo el nombre del titular",
                    "Nombre del titular, fecha de vencimiento y que la tarjeta esté firmada",
                    "Solo la fecha de vencimiento",
                    "Solo el número de la tarjeta"
                ],
                correctAnswer: 1
            },
            {
                question: "Un cliente compra productos por $85.000 y tiene un cupón de 10% de descuento. ¿Cuánto debe pagar?",
                options: ["$76.500", "$75.000", "$80.000", "$77.500"],
                correctAnswer: 0
            },
            {
                question: "¿Qué debe hacer si un cliente solicita factura con datos fiscales?",
                options: [
                    "Emitir una factura normal",
                    "Solicitar los datos fiscales completos y emitir una factura con esos datos",
                    "Decir que no es posible emitir ese tipo de factura",
                    "Pedir que regrese otro día"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Cuál es el procedimiento correcto para una devolución de dinero?",
                options: [
                    "Devolver el dinero sin preguntar",
                    "Verificar el producto, la factura, registrar la devolución en el sistema y devolver el dinero por el mismo medio de pago original",
                    "Negar todas las devoluciones",
                    "Ofrecer solo cambio por otro producto"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Qué debe hacer si el sistema indica que un producto tiene descuento pero el cliente dice que el descuento debería ser mayor?",
                options: [
                    "Aplicar el descuento que pide el cliente",
                    "Verificar en el sistema o con el supervisor el descuento correcto y explicar amablemente al cliente",
                    "Ignorar al cliente y cobrar sin descuento",
                    "Llamar a seguridad"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Cómo debe manejar un reclamo de un cliente insatisfecho?",
                options: [
                    "Ignorarlo y seguir atendiendo a otros clientes",
                    "Escuchar atentamente, mostrar empatía, ofrecer una solución y, si es necesario, llamar a un supervisor",
                    "Discutir con el cliente para demostrar que está equivocado",
                    "Pedir al cliente que se retire"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Qué debe hacer al final de su turno con el dinero de la caja?",
                options: [
                    "Llevárselo a casa y entregarlo al día siguiente",
                    "Contar el dinero, cuadrar la caja, llenar el formato de cierre y entregar al supervisor",
                    "Dejarlo en la caja para el siguiente turno",
                    "Depositarlo en su cuenta bancaria"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Qué información debe incluir un recibo de venta?",
                options: [
                    "Solo el monto total",
                    "Fecha, productos, precios, subtotal, impuestos, total y forma de pago",
                    "Solo los productos y el precio",
                    "Solo la fecha y el monto"
                ],
                correctAnswer: 1
            },
            {
                question: "Un cliente compra una moto de $12.000.000 y quiere financiar el 70%. ¿Cuánto debe pagar como inicial?",
                options: ["$3.600.000", "$8.400.000", "$4.000.000", "$5.000.000"],
                correctAnswer: 0
            },
            {
                question: "¿Qué debe hacer si detecta que un producto no tiene código de barras o precio?",
                options: [
                    "Asignarle cualquier precio",
                    "No vender el producto",
                    "Consultar el precio con el departamento correspondiente antes de procesarlo",
                    "Regalarlo al cliente"
                ],
                correctAnswer: 2
            },
            {
                question: "¿Qué debe hacer si un cliente olvida su cambio o tarjeta de crédito?",
                options: [
                    "Quedarse con el dinero o destruir la tarjeta",
                    "Guardar el cambio o tarjeta, registrarlo en el sistema y notificar al supervisor",
                    "Usar el dinero para cuadrar la caja",
                    "No hacer nada, es responsabilidad del cliente"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Cuál es la mejor forma de organizar los billetes en la caja?",
                options: [
                    "Todos mezclados",
                    "Ordenados por denominación y con los billetes en la misma dirección",
                    "Solo separar billetes grandes de pequeños",
                    "No importa mientras estén dentro de la caja"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Qué debe hacer si un cliente quiere pagar parte en efectivo y parte con tarjeta?",
                options: [
                    "No aceptar este tipo de pago",
                    "Procesar primero el pago en efectivo, luego el de tarjeta y registrar ambos en el sistema",
                    "Pedir que elija solo una forma de pago",
                    "Cobrar todo en efectivo y quedarse con la diferencia"
                ],
                correctAnswer: 1
            },
            {
                question: "¿Qué información debe solicitar para una venta a crédito de un electrodoméstico?",
                options: [
                    "Solo el nombre del cliente",
                    "Documento de identidad, comprobantes de ingresos, referencias y completar la solicitud de crédito",
                    "Solo un número de teléfono",
                    "Solo la dirección del cliente"
                ],
                correctAnswer: 1
            }
        ]
    }
}

