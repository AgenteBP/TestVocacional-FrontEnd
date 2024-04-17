// function showQuestion(questionId) {
//     document.querySelectorAll('.question').forEach(question => {
//         question.style.display = 'none';
//     });
//     document.getElementById(questionId).style.display = 'block';
// }
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

function nextQuestion(questionId, selectedOption) {
    switch (questionId) {
        case 1:
            // Primera pregunta
            if (selectedOption === 'opcion1') {
                showQuestion('question14');
            } else if (selectedOption === 'opcion2') {
                showQuestion('question2');
            }
            break;
        case 2:
            // Segunda pregunta
            if (selectedOption === 'opcion1') {
                showQuestion('question3');
            } else if (selectedOption === 'opcion2') {
                showQuestion('question5');
            }
            break;
        case 3:
            // Tercera pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultPC");
            } else if (selectedOption === 'opcion2') {
                showQuestion('question4');
            }
            break;
        case 4:
            // Cuarta pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultLC");
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoLC");
            } 
            break;
        case 5:
            // Quinta pregunta
            if (selectedOption === 'opcion1') {
                showQuestion('question6');
            } else if (selectedOption === 'opcion2') {
                showQuestion('question10');
            }
            break;
        case 6:
            // Sexta pregunta
            if (selectedOption === 'opcion1') {
                showQuestion('question7');
            } else if (selectedOption === 'opcion2') {
                showQuestion('question8');
            }
            break;
        case 7:
            // Septima pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultTW");
            } else if (selectedOption === 'opcion2') {
                showQuestion('question8');
            } 
        break;
        case 8:
            // Octava pregunta
            if (selectedOption === 'opcion1') {
                showQuestion('question9');
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoTWyR");
            }           
        break;
        case 9:
            // Novena pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultTR");
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoTWyR");
            } 
            break;

        case 10:
            // Decima pregunta
            if (selectedOption === 'opcion1') {
                showQuestion('question11');
            } else if (selectedOption === 'opcion2') {
                showQuestion('question12');
            }
        break;

        case 11:
            // Onceava pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultII");
                const btnSiguiente = document.getElementById('botonS');
                btnSiguiente.disabled = true; 
            } else if (selectedOption === 'opcion2') {
                showQuestion('question12');
            } 
        break;
        
        case 12:
            // Doceava pregunta
            if (selectedOption === 'opcion1') {
                showQuestion('question13');
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoIC");
            }

        break;
        
        case 13:
            // Treceava pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultIC");
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoIC");
            } 
        break;
        
        // Preguntas para el caso de horario tarde y noche
        case 14:
            // Catorceava pregunta
            if (selectedOption === 'opcion1') {
                showQuestion('question15');
            } else if (selectedOption === 'opcion2') {
                showQuestion('question16');
            }
            
        break;
        case 15:
            // Quinceava pregunta
            if (selectedOption === 'opcion1') {                
                modalResultTest("modalResultTW");
            } else if (selectedOption === 'opcion2') {
                showQuestion('question16');
            } 
        break;
        case 16:
            // Deciseisava pregunta
            if (selectedOption === 'opcion1') {
                showQuestion('question17');
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoTWyR2");
            }           
        break;
        case 17:
            // Decisieteava pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultTR");
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoTWyR2");
            } 
        break;
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


// function sendEmail(email) {
//     // Obtiene el valor del correo electrónico desde el span
//     // var destinatario = document.getElementById('emailEnModal').innerText;
//     var destinatario = email;

//     // Abre una nueva ventana de correo electrónico con el destinatario
//     // window.open('mailto:' + email);
//     fetch('http://localhost:8081/sendEmail/enviar', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             destinatario: destinatario 
//         })
//     })
//     .then(response => {
//         console.log('Estado de la respuesta:', response.status);
//         console.log('Cabeceras de la respuesta:', response.headers);

//         if (!response.ok) {
//             throw new Error('Error en la respuesta del servidor: ' + response.status);
//         }

//         // Verifica si la respuesta tiene un tipo de contenido adecuado
//         const contentType = response.headers.get('content-type');
//         console.log('Tipo de contenido de la respuesta:', contentType);

//         if (contentType && contentType.includes('application/json')) {
//             return response.json();  // Analiza la respuesta como JSON
//         } else {
//             return response.text();
//         }
//     })
//     .then(data => {
//         console.log('Respuesta del servidor:', data);
//         console.log('Respuesta del status:', data.status);
    
//         // Verifica si la respuesta indica que el mensaje fue enviado exitosamente
//         // if (data.status === 200) {
//             // Muestra un mensaje de alerta indicando que el mensaje fue enviado
//             // alert('Mensaje enviado exitosamente, presione aceptar para volver hacer el test');
//             // reloadPage();
//         // } else {
//         //     // Muestra un mensaje de alerta indicando que hubo un problema al enviar el mensaje
//         //     alert('Error al enviar el mensaje');
//         // }
        
//     })
//     .catch(error => {
//         console.error('Error al enviar el correo electrónico:', error);
//     });
// }

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

function sendResults(results, interes, typeofPDF){
    
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
   
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
    const paisOrigen = localStorage.getItem('paisOrigen');
    const provinciaArg = localStorage.getItem('provinciaArg');

    console.log('Email:', email);
    console.log('ID:', idUsuario);
    console.log('Edad:', edad);
    console.log('Es residente de Argentina:', esResidenteArg);
    console.log('País de Origen:', paisOrigen);
    console.log('Provincia en Argentina:', provinciaArg);

    // debugger;
    // http://localhost:8081 para probar en local
    const url = urlForBack+'resultados';  // Reemplaza con la URL de tu endpoint en el backend
    const data = {
        carreraObtenida: results,
        idUsuario: idUsuario,
        fecha: obtenerFechaActual(),
        interes: interes
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
        console.log('ID del usuario:', data.id);
        // debugger;
        // Acciones de que en caso aceptara la carrera
        if(interes == true){ 
            let urlModalsResults = "../Preguntas/modalsResults.html";
            fetch(urlModalsResults)
            .then(response => response.text())
            .then(html => {
                // Enviamos el correo
                sendEmail(typeofPDF,email);
                // Crear un elemento temporal para cargar el HTML del archivo
                const tempEl = document.createElement('div');
                tempEl.innerHTML = html;

                // Obtener el modal deseado por su ID
                const modalContent = tempEl.querySelector(`#modalFinalizacion`);
            
                // Verificar si se encontró el modal
                if (modalContent) {          
                    // Modificar el contenido del modal antes de mostrarlo
                    const emailSpan = modalContent.querySelector('#emailEnModal');
                    if (emailSpan) {
                        emailSpan.textContent = `${email}`;
                    }
                    
                    // Crear un nuevo div para el modal
                    const modalWrapper = document.createElement('div');
                    modalWrapper.appendChild(modalContent.cloneNode(true));

                    // Adjuntar el nuevo div al cuerpo del documento
                    document.body.appendChild(modalWrapper);

                    // Mostrar el modal usando jQuery
                    $(modalWrapper.firstChild).modal('show');
                } else {
                console.error(`Modal con ID modalFinalizacion no encontrado en el archivo modalsResults.html.`);
                }
            });
        }
        else{
            // Acciones de que en caso no aceptara la carrera 
            let urlModalsResults = "../Preguntas/modalsResults.html";
            fetch(urlModalsResults)
            .then(response => response.text())
            .then(html => {
                // Crear un elemento temporal para cargar el HTML del archivo
                const tempEl = document.createElement('div');
                tempEl.innerHTML = html;

                // Obtener el modal deseado por su ID
                const modalContent = tempEl.querySelector(`#modalNoInteres`);
            
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
                console.error(`Modal con ID modalFinalizacion no encontrado en el archivo modalsResults.html.`);
                }
            });
        }
        
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

        case 2:
        // Segunda pregunta
            showQuestionFromRight('question1');
            // resultsContainer.innerHTML = 
            // `
            // `;
        break;

        case 3:
        // Tercera pregunta
            showQuestionFromRight('question2');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(3); 
        break;

        case 4:
        // Cuarta pregunta
            showQuestionFromRight('question3');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(4);
        break;

        case 5:
        // Quinta pregunta
            showQuestionFromRight('question2');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(5);
        break;

        case 6:
        // Sexta pregunta
            showQuestionFromRight('question5');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(6);
        break;

        case 7:
        // Septima pregunta
            showQuestionFromRight('question6');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(7);
        break;

        case 8:
        // Octava pregunta
            showQuestionFromRight('question7');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(8);
        break;

        case 9:
        // Novena pregunta
            showQuestionFromRight('question6');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(9);
        break;

        case 10:
        // Decima pregunta
            showQuestionFromRight('question5');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(10);
        break;

        case 11:
        // Onceava pregunta
            showQuestionFromRight('question10');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(11);
        break;

        case 12:
        // Doceava pregunta
            showQuestionFromRight('question11');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(12);
        break;

        case 13:
        // Treceava pregunta
            showQuestionFromRight('question12');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(13);
        break;

        // Preguntas para el caso de horario tarde y noche
        case 14:
        // Catorceava pregunta
            showQuestionFromRight('question1');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // botonAndFooterActived(14);
        break;

        case 15:
        // Quinceava pregunta
            showQuestionFromRight('question14');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // // botonAndFooterActived(15);
            // const divP = document.getElementById('divPrincipal');
            // divP.style.display = 'block';
        break;

        case 16:
        // Diesiesava pregunta
            showQuestionFromRight('question14');
            // resultsContainer.innerHTML = 
            // `
            // `;
            //  botonAndFooterActived(16);
        break;

        case 17:
        // Disieteava pregunta
            showQuestionFromRight('question16');
            // resultsContainer.innerHTML = 
            // `
            // `;
            // const opcion15 = document.getElementById('opcion15');
            // opcion15.style.display = 'block';
            // botonAndFooterActived(17);
        break;
    }
}
