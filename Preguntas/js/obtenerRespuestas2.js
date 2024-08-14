const email = localStorage.getItem('email');
const idUsuario = localStorage.getItem('id');
const edad = localStorage.getItem('edad');
const esResidenteArg = localStorage.getItem('esResidenteArg');
const paisOrigen = localStorage.getItem('paisOrigen');
const provinciaArg = localStorage.getItem('provinciaArg');
// Total de preguntas
const totalQuestions = 17;

// Resultado id generado
let idResultado;

// let $slider = $(".slider1a10").ionRangeSlider({
//     min: 1,
//     max: 10,
//     from: 5,         // Default start value
//     step: 1,
//     grid: false,
//     skin: "round"
// });

let sliders = [];

function initSliders() {
    $(".slider1a10").each(function(index) {
        sliders[index] = $(this).ionRangeSlider({
            min: 1,
            max: 10,
            from: 5,  // Valor por defecto
            step: 1,
            // values: [
            //     // "1","2","3","4","5","6","7","8","9","10"
            //     1,2,3,4,5,6,7,8,9,10
            // ],
            grid: true,
            skin: "round"
        }).data("ionRangeSlider");
    });
}

// Inicializar sliders después de cargar el DOM
$(document).ready(function() {
    initSliders();
});

let $sliderDuracion = $(".sliderDuracion").ionRangeSlider({
    from: "3 años", // Default start value
    grid: true,
    values: ["3 años", "4/5 años"],
    skin: "round"
});

let $sliderHorario = $(".sliderHorario").ionRangeSlider({
    from: "8 am", // Default start value
    grid: true,
    values: ["8 am", "6 pm"],
    skin: "round"
});
let valueSliderP;


// Variable para guardar las preguntas y opciones seleccionadas
let questionsAndOption = [];
// Variable para saber que pregunta vengo cuando se elige reiniciar
let questionReload;

function showQuestion(questionId) {
    document.querySelectorAll('.question').forEach(question => {
        question.style.display = 'none';
        // También puedes quitar la clase de animación antes de ocultar la pregunta si es necesario
        question.classList.remove('animate__animated', 'animate__fadeInRight');
        // Puedes ajustar la clase de animación según sea necesario para cada pregunta
    });
    const currentQuestion = document.getElementById(questionId);
    currentQuestion.style.display = 'block';
    currentQuestion.classList.add('animate__animated', 'animate__fadeInRight');
    // Agrega la clase de animación a la pregunta que se está mostrando
}

function showQuestionFromRight(questionId) {
    document.querySelectorAll('.question').forEach(question => {
        question.style.display = 'none';
        // También puedes quitar la clase de animación antes de ocultar la pregunta si es necesario
        question.classList.remove('animate__animated', 'animate__fadeInLeft');
        // Puedes ajustar la clase de animación según sea necesario para cada pregunta
    });
    const currentQuestion = document.getElementById(questionId);
    currentQuestion.style.display = 'block';
    currentQuestion.classList.add('animate__animated', 'animate__fadeInLeft');
    // Agrega la clase de animación a la pregunta que se está mostrando
}

function assignTextToIDQuestions(questionId){
    let textQuestion = null;
    switch (questionId) {
        case 1:
            textQuestion = "Pregunta 1: ¿Qué tanto gustaría practica te gustaría adquirir en tu formación de programación?";
            break;
        case 2:
            textQuestion = "Pregunta 2: ¿Te interesaría aprender programación de alto nivel, podrás ver lenguaje como C, Java, Python, etc.?";
            break;
        case 3:
            textQuestion = "Pregunta 3: ¿Te interesaría aprender sobre programación de bajo nivel?";
            break;
        case 4:
            textQuestion = "Pregunta 4: ¿Te gustaría cursar materias en donde te preparare puedas transmitir enseñanzas de la informática en todos los niveles?";
            break;
        case 5:
            textQuestion = "Pregunta 5: ¿Te gustaría cursar materias donde puedas realizar investigación con fines científicos?";
            break;
        case 6:
            textQuestion = "Pregunta 6: ¿Te interesaría aprender sobre materias dedicadas a la industria del software?";
            break;
        case 7:
            textQuestion = "Pregunta 7: ¿Te interesaría aprender sobre materias que tenga más aporte en Web?";
            break;
        case 8:
            textQuestion = "Pregunta 8: ¿Te interesaría aprender sobre materias enfocado a Redes?";
            break;
        case 9:
            textQuestion = "Pregunta 9: ¿Te gustaría aprender sobre materias que tenga más aporte en la integración de hardware y software?";
            break;
        case 10:
            textQuestion = "Pregunta 10: ¿Te gustaría estudiar una carrera que se centre en la web?";
            break;
        case 11:
            textQuestion = "Pregunta 11: ¿Te gustaría estudiar una carrera que se centre en redes de computadora?";
            break;
        case 12:
            textQuestion = "Pregunta 12: ¿Te gustaría estudiar una carrera que se centre en la industria del software?";
            break;
        case 13:
            textQuestion = "Pregunta 13: ¿Te gustaría estudiar una carrera que tenga un enfoque en el desarrollo que integre hardware y software?";
            break;
        case 14:
            textQuestion = "Pregunta 14: ¿Te gustaría estudiar una carrera que tenga un enfoque en el área de investigación, pero también se puede enfocar en otros roles?";
            break;
        case 15:
            textQuestion = "Pregunta 15: ¿Te gustaría estudiar una carrera que tenga un enfoque en el área de educación?";
            break;
        case 16:
            textQuestion = "Pregunta 16: Selecciona la duración de la carrera: 3 años o 4/5 años";
            break;
        case 17:
            textQuestion = "Pregunta 17: ¿Qué tan flexible puedes ser con tus horarios para asistir a las clases, considerando tus compromisos laborales y actividades diarias? Selecciona en que horario puedes comenzar a cursar: 8am a 6pm?";
            break;
    }
    return textQuestion;
}

function tour(idPregunta, valorSeleccionado, preguntaTexto){
    // Agrega un objeto con la pregunta, su texto, y la opción seleccionada al arreglo
    console.log("ID de la pregunta: " + idPregunta + ", Texto de la pregunta: " + preguntaTexto + ", Valor seleccionado: " + valorSeleccionado);
    questionsAndOption.push({ idPregunta: idPregunta, preguntaTexto: preguntaTexto, valorSeleccionado: valorSeleccionado });

}

function nextQuestion(questionId) {
    // Capturar el texto del h2 correspondiente a la pregunta actual
    // let questionText = document.querySelector(`#question${questionId} h2`).textContent.trim();

    switch (questionId){
        case totalQuestions - 1:
            valueSliderP = $sliderDuracion.data("ionRangeSlider").result.from === 1 ? "4/5 años" : "3 años";
            tour(questionId, valueSliderP, assignTextToIDQuestions(questionId));
            showQuestion('question' + totalQuestions);
            break;
        case totalQuestions:
            valueSliderP = $sliderHorario.data("ionRangeSlider").result.from === 1 ? "6 pm" : "8 am";
            tour(questionId, valueSliderP, assignTextToIDQuestions(questionId));
            sendResults();
            break;
        default:
            let sliderInstance = sliders[questionId - 1];  // Ajustar al índice del slider correspondiente
            let valueSliderPreguntas = sliderInstance.result.from;
            
            tour(questionId, valueSliderPreguntas, assignTextToIDQuestions(questionId));
            showQuestion('question'+(questionId+1));
    }

    
}

function modalFunction(modalId) {
    // Ruta al archivo modals.html
    const rutaArchivo = '../Preguntas/modals.html'; // Reemplaza con la ruta correcta

    // Fetch para obtener el contenido del archivo modals.html
    fetch(rutaArchivo)
      .then(response => response.text())
      .then(data => {
        // Crear un elemento temporal para cargar el HTML del archivo
        const tempEl = document.createElement('div');
        tempEl.innerHTML = data;

        // Obtener el modal deseado por su ID
        const modalContent = tempEl.querySelector(`#${modalId}`);
    
        // Verificar si se encontró el modal
        if (modalContent) {          
            // Crear un nuevo div para el modal
            const modalWrapper = document.createElement('div');
            modalWrapper.appendChild(modalContent.cloneNode(true));

            // Adjuntar el nuevo div al cuerpo del documento
            document.body.appendChild(modalWrapper);

            // Mostrar el modal usando jQuery
            $(modalWrapper.firstChild).modal('show');
        } else {
          console.error(`Modal con ID ${modalId} no encontrado en el archivo ${rutaArchivo}.`);
        }
      })
      .catch(error => {
        console.error('Error al cargar el archivo:', error);
      });
  }

function reloadPage() {
    // Recarga la página a registroA.html

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // const email = urlParams.get('email');
    // const idUsuario = urlParams.get('id');
    // const edad = urlParams.get('edad');
    // const esResidenteArg = urlParams.get('esResidenteArg');
    // const paisOrigen = urlParams.get('paisOrigen');
    // const provinciaArg = urlParams.get('provinciaArg');

    const email = localStorage.getItem('email');
    const idUsuario = localStorage.getItem('id');
    const edad = localStorage.getItem('edad');
    const esResidenteArg = localStorage.getItem('esResidenteArg');
    const provinciaArgValue = localStorage.getItem('provinciaArg');
    const schoolInSanLuis = localStorage.getItem('schoolInSanLuis');
    const otherSchool = localStorage.getItem('otherSchool');
    
    // Construir la nueva URL con los datos
    // const nuevaURL = `registroA.html?email=${email}&id=${idUsuario}&edad=${edad}&esResidenteArg=${esResidenteArg}&paisOrigen=${paisOrigen}&provinciaArg=${provinciaArg}`;
    const nuevaURL = `../../registroA.html`;

    // Redirigir a registroA.html con los datos
    window.location.href = nuevaURL;
}

function reloadTest(idPregunta, opcionSeleccionada, idModal){

    // Capturar el texto del h2 correspondiente a la pregunta actual
    // let questionText = document.querySelector(`#question${questionId} h2`).textContent.trim();

    if(idPregunta != null && opcionSeleccionada !=null){
        tour(idPregunta, opcionSeleccionada, assignTextToIDQuestions(questionId));
    }
    showQuestion('question1');

    // Desactivo el modal 
    $(idModal).modal('hide');

    // Obtener todas las preguntas
    const allQuestions = document.querySelectorAll('.question');

    // Iterar sobre todas las preguntas
    allQuestions.forEach(question => {
        // Obtener todos los botones de opción de radio en la pregunta actual
        const radioButtons = question.querySelectorAll('input[type="radio"]');
        // Desmarcar todos los botones de opción de radio
        radioButtons.forEach(radioButton => {
            radioButton.checked = false;
        });
    });
}

function modalResultTest(idResult){
    // Ruta al archivo modals.html
    const rutaArchivo = '../Preguntas/modalsResults.html'; // Reemplaza con la ruta correcta

    // Fetch para obtener el contenido del archivo modals.html
    fetch(rutaArchivo)
      .then(response => response.text())
      .then(data => {
        // Crear un elemento temporal para cargar el HTML del archivo
        const tempEl = document.createElement('div');
        tempEl.innerHTML = data;

        // Obtener el modal deseado por su ID
        const modalContent = tempEl.querySelector(`#${idResult}`);
    
        // Verificar si se encontró el modal
        if (modalContent) {          
            // Crear un nuevo div para el modal
            const modalWrapper = document.createElement('div');
            modalWrapper.appendChild(modalContent.cloneNode(true));

            // Adjuntar el nuevo div al cuerpo del documento
            document.body.appendChild(modalWrapper);

            // Mostrar el modal usando jQuery
            $(modalWrapper.firstChild).modal('show');
        } else {
          console.error(`Modal con ID ${idResult} no encontrado en el archivo.`);
        }
      })
      .catch(error => {
        console.error('Error al cargar el archivo:', error);
      });
}

function updateInterest(interest, typeofPDF){
    // Crear funcion update 
    const url = urlForBack + `resultadosU/${idResultado}`;  // Asegúrate de que la URL es correcta
    const data = {
        interes: interest
    };

    fetch(url, {
        method: 'PUT', // Usando PUT en lugar de PATCH
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor: ' + response.status);
        }
        return response.text(); // Maneja la respuesta como texto
    })
    .then(data => {
        console.log("El interés desde el backend: " + data);
        
        // Acciones de que en caso aceptara la carrera
        let urlModalsResults = "../Preguntas/modalsResults.html";
        fetch(urlModalsResults)
            .then(response => response.text())
            .then(html => {
                const tempEl = document.createElement('div');
                tempEl.innerHTML = html;

                let modalId = interest ? 'modalFinalizacion' : 'modalNoInteres';
                const modalContent = tempEl.querySelector(`#${modalId}`);

                if (modalContent) {
                    if (interest) {
                        // Enviamos el correo
                        sendEmail(typeofPDF, email);

                        // Modificar el contenido del modal antes de mostrarlo
                        const emailSpan = modalContent.querySelector('#emailEnModal');
                        if (emailSpan) {
                            emailSpan.textContent = `${email}`;
                        }
                    }

                    // Crear un nuevo div para el modal
                    const modalWrapper = document.createElement('div');
                    modalWrapper.appendChild(modalContent.cloneNode(true));

                    // Adjuntar el nuevo div al cuerpo del documento
                    document.body.appendChild(modalWrapper);

                    // Mostrar el modal usando jQuery
                    $(modalWrapper.firstChild).modal('show');
                } else {
                    console.error(`Modal con ID ${modalId} no encontrado en el archivo modalsResults.html.`);
                }
            });
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
}

function changeResultToResultModal(idResult){
    const resultToModalMap = {
        "Licenciatura en Ciencia de la Computación": "modalResultLC",
        "Profesorado en Ciencias de la Computación": "modalResultPC",
        "Tecnicatura Universitaria en Web": "modalResultTW",
        "Tecnicatura Universitaria en Redes de Computadoras": "modalResultTR",
        "Ingeniería en Informática": "modalResultII",
        "Ingeniería en Computación": "modalResultIC"
    };

    return resultToModalMap[idResult] || idResult;
}

function obtenerFechaActual() {
    const fechaActual = new Date();
    
    // Obtén los componentes de la fecha
    const dia = fechaActual.getUTCDate() + 1;
    const mes = fechaActual.getUTCMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const anio = fechaActual.getUTCFullYear();

    // Formatea la fecha como "YYYY-MM-DD" (puedes ajustar el formato según tus necesidades)
    const fechaFormateada = `${anio}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
    // const fechaFormateada = `${dia < 10 ? '0' : ''}${dia}-${mes < 10 ? '0' : ''}${mes}-${anio}`;

    return fechaFormateada;
}


function sendResults(){
    
    console.log('Email:', email);
    console.log('ID:', idUsuario);
    console.log('Edad:', edad);
    console.log('Es residente de Argentina:', esResidenteArg);
    console.log('País de Origen:', paisOrigen);
    console.log('Provincia en Argentina:', provinciaArg);

    questionsAndOption.forEach((item, index) => {
        console.log(`Objeto ${index + 1}:`);
        console.log(`  ID de Pregunta: ${item.idPregunta}`);
        console.log(`  Texto de la Pregunta: ${item.questionText}`);
        console.log(`  Valor Seleccionado: ${item.valorSeleccionado}`);
    });

    // debugger;
    const url = urlForBack+'resultados';  // Reemplaza con la URL de tu endpoint en el backend
    const data = {
        resultados: {
            idUsuario: idUsuario,
            fecha: obtenerFechaActual(),
            saveTest: true
        },
        recorrido: questionsAndOption // El arreglo de recorridos
    };

    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Estado de la respuesta:', response.status);
        console.log('Cabeceras de la respuesta:', response.headers);

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor: ' + response.status);
        }

        // Verifica si la respuesta tiene un tipo de contenido adecuado
        const contentType = response.headers.get('content-type');
        console.log('Tipo de contenido de la respuesta:', contentType);

        if (contentType && contentType.includes('application/json')) {
            return response.json();  // Analiza la respuesta como JSON
        } else {
            return response.text();
        }
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // debugger;
        // Muestro modal de la aproximacion del resultado
        idResultado = data.resultados.id;
        const carreraObtenida = data.resultados.carreraObtenida;

        let idResultForModal = changeResultToResultModal(carreraObtenida);

        let urlModalsResults = "../Preguntas/modalsResults.html";
        fetch(urlModalsResults)
        .then(response => response.text())
        .then(html => {
            // Crear un elemento temporal para cargar el HTML del archivo
            const tempEl = document.createElement('div');
            tempEl.innerHTML = html;

            // Obtener el modal deseado por su ID
            const modalContent = tempEl.querySelector(`#${idResultForModal}`);
        
            // Verificar si se encontró el modal
            if (modalContent) {          
                // Crear un nuevo div para el modal
                const modalWrapper = document.createElement('div');
                modalWrapper.appendChild(modalContent.cloneNode(true));

                // Adjuntar el nuevo div al cuerpo del documento
                document.body.appendChild(modalWrapper);

                // Mostrar el modal usando jQuery
                $(modalWrapper.firstChild).modal('show');
            } else {
            console.error(`Modal con ID ${idResultForModal} no encontrado en el archivo.`);
            }
        });
        
        
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
}

function getParameterURL(dato) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(dato);
}

// function botonAndFooterActived(questionId){
//     const botonS = document.getElementById('botonS'+questionId);
//     botonS.style.display = 'block';
//     const botonV = document.getElementById('botonV'+questionId);
//     botonV.style.display = 'block';
//     const footer1 = document.getElementById('footer1');
//     footer1.style.display = 'block';
// }

function previousQuestion(questionId){
    const resultsContainer = document.getElementById('results');
    switch (questionId) {
        case 1:
        // primera pregunta
            // tour(1, "Volver");
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
        
            // const email = urlParams.get('email');
            // const idUsuario = urlParams.get('id');
            // const edad = urlParams.get('edad');
            // const esResidenteArg = urlParams.get('esResidenteArg');
            // const paisOrigen = urlParams.get('paisOrigen');
            // const provinciaArg = urlParams.get('provinciaArg');

            const email = localStorage.getItem('email');
            const idUsuario = localStorage.getItem('id');
            const edad = localStorage.getItem('edad');
            const esResidenteArg = localStorage.getItem('esResidenteArg');
            const provinciaArgValue = localStorage.getItem('provinciaArg');
            const schoolInSanLuis = localStorage.getItem('schoolInSanLuis');
            const otherSchool = localStorage.getItem('otherSchool');
            
            // Construir la nueva URL con los datos
            // const nuevaURL = `registroA.html?email=${email}&id=${idUsuario}&edad=${edad}&esResidenteArg=${esResidenteArg}&paisOrigen=${paisOrigen}&provinciaArg=${provinciaArg}`;
            const nuevaURL = `../../registroA.html`;

            // Redirigir a registroA.html con los datos
            window.location.href = nuevaURL;
            
        break;

        default:
        // Demas preguntas
            questionsAndOption.pop();
            showQuestionFromRight('question'+ (questionId - 1));

        break;
    }
}
