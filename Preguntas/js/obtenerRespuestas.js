// import { generarPDF} from './pdf.js';
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

// function showQuestion(questionId) {
//     // Oculta todas las preguntas con un efecto de deslizamiento y desvanecimiento hacia la izquierda
//     document.querySelectorAll('.question').forEach(question => {
//         Velocity(question, { opacity: 0, marginLeft: '-50px' }, { duration: 800, easing: 'easeInOutQuart' });
//         // Después de la animación, establece el display en 'none'
//         Velocity(question, 'style', { display: 'none' });
//     });

//     // Muestra la pregunta específica con un efecto de deslizamiento y aparece con desvanecimiento desde la derecha
//     Velocity(document.getElementById(questionId), { opacity: [1, 0], marginLeft: '0px' }, { duration: 800, easing: 'easeInOutQuart' });
//     // Después de la animación, establece el display en 'block'
//     Velocity(document.getElementById(questionId), 'style', { display: 'block' });
// }

// function showQuestion(questionId) {
//     // Oculta todas las preguntas con un efecto de deslizamiento y desvanecimiento hacia la izquierda
//     document.querySelectorAll('.question').forEach(question => {
//         Velocity(question, { opacity: 0, marginLeft: '-50px' }, { duration: 800, easing: 'easeInOutQuart', complete: () => {
//             // Después de la animación, establece el display en 'none'
//             Velocity(question, { display: 'none' });
//         }});
//     });

//     // Muestra la pregunta específica con un efecto de deslizamiento y aparece con desvanecimiento desde la derecha
//     setTimeout(() => {
//         Velocity(document.getElementById(questionId), { opacity: [1, 0], marginLeft: '0px' }, { duration: 800, easing: 'easeInOutQuart', complete: () => {
//             // Después de la animación, establece el display en 'block'
//             Velocity(document.getElementById(questionId), { display: 'block' });
//         }});
//     }, 20); // el delay es igual al tiempo de duración de la animación
// }

// function showQuestion(questionId) {
//     // Oculta todas las preguntas con un efecto de deslizamiento y desvanecimiento hacia la izquierda
//     document.querySelectorAll('.question').forEach(question => {
//         Velocity(question, { opacity: 0, translateX: '-50%' }, { duration: 800, easing: 'easeInOutQuart', begin: function(elements, options) {
//             elements.forEach(function(element) {
//                 element.style.display = 'none';
//             });
//         }});
//     });

//     // Muestra la pregunta específica con un efecto de deslizamiento y aparece con desvanecimiento desde la derecha
//     setTimeout(function() {
//         Velocity(document.getElementById(questionId), { opacity: [1, 0], translateX: '0%' }, { duration: 800, easing: 'easeInOutQuart', begin: function(elements, options) {
//             elements.forEach(function(element) {
//                 element.style.display = 'block';
//             });
//         }});
//     }, 800);
// }

///funcaaaaaaaaaaaaaaaaaaa
// function showQuestion(questionId) {
//     // Oculta todas las preguntas con un efecto de deslizamiento y desvanecimiento hacia la derecha
//     document.querySelectorAll('.question').forEach(question => {
//         Velocity(question, { opacity: 0, translateX: '50%' }, { duration: 300, easing: 'easeInOutQuart', begin: function(elements, options) {
//             elements.forEach(function(element) {
//                 element.style.display = 'none';
//             });
//         }});
//     });

//     // Muestra la pregunta específica con un efecto de deslizamiento y aparece con desvanecimiento desde la izquierda
//     setTimeout(function() {
//         Velocity(document.getElementById(questionId), { opacity: [1, 0], translateX: '-100%' }, { duration: 800, easing: 'easeInOutQuart', begin: function(elements, options) {
//             elements.forEach(function(element) {
//                 element.style.display = 'block';
//             });
//         }});
//     }, 800);
// }

// function showQuestion(questionId) {
//     // Oculta todas las preguntas con un efecto de deslizamiento y desvanecimiento hacia la izquierda
//     document.querySelectorAll('.question').forEach(question => {
//         Velocity(question, { opacity: 0, translateX: '50%' }, { duration: 300, easing: 'easeInOutQuart', begin: function(elements, options) {
//             elements.forEach(function(element) {
//                 element.style.display = 'none';
//             });
//         }});
//     });

//     // Muestra la pregunta específica con un efecto de deslizamiento y aparece con desvanecimiento desde la derecha
//     setTimeout(function() {
//         Velocity(document.getElementById(questionId), { opacity: [1, 0], translateX: '-100%' }, { duration: 500, easing: 'easeInOutQuart', begin: function(elements, options) {
//             elements.forEach(function(element) {
//                 element.style.display = 'block';
//             });
//         }});
//     }, 300);
// }


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
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Estimación: Profesorado en Ciencias de la Computación</p>

                // <p>Lo que debes saber acerca de la carrera:</p>
                // <ul>
                //     <li>Programación
                //     <ul>
                //         <li>Veras lenguajes y herramientas que te permitan comprender, mantener y solucionar problemas en el área de educativa como por ejemplo:</li>
                //         <ul>
                //             <li>Java<li>
                //             <li>C, C++<li>
                //             <li>Prolog<li>
                //             <li>Bases de datos como MySql, postgresql<li>
                //             <li>Programación funcional como Haskell<li>
                //             <li>Assembly<li>
                //             <li>Software educativo como App Inventor<li>
                //         </ul>
                //     </ul>
                //     </li>
                //     <li>Horario de cursada
                //         <ul>
                //             <li>Generalmente los horarios de la materia entan dividos entre mañana, tarde y noche/li>
                //         </ul>
                //     </li>
                //     <li>Salida laboral
                //         <ul>
                //             <li>-Poder ejercer la docencia en informática en todos los niveles.</li>
                //             <li>-Realizar investigación con fines educativos.</li>
                //             <li>-Asesoría y consultoría a empresas, instituciones educativas o gubernamentales.</li>
                //             <li>-Desarrollo de Software Educativo.</li>
                //         </ul>
                //     </li>
                //     <li>Etapa Final
                //         <ul>
                //             <li>Actividades acreditables en docencia</li>
                //             <li>Actividades acreditables en extensión</li>
                //             <li>Actividades acreditables en investigación</li>
                //         </ul>
                //     </li>
                //     <li>Exigencia
                //         <ul>
                //             <li>Dedicación completa (exigente)</li>
                //         </ul>
                //     </li>
                // </ul>
                // `;
                // botonsSpecials(3);
                // // const botonS = document.getElementById('botonS3');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // botonAndFooterDesactived(3);
                // agregarFooter();
            } else if (selectedOption === 'opcion2') {
                showQuestion('question4');
            }
            break;
        case 4:
            // Cuarta pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultLC");
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Estimación: Licenciatura en Ciencia de la Computacion con posibilidad de obtener un titulo intermedio Analista Programador Universitario</p>

                // <p>Lo que debes saber acerca de la carrera:</p>
                // <ul>
                //     <li>Programación
                //     <ul>
                //         <li>Veras lenguajes y herramientas que te permitan comprender, mantener y solucionar problemas en el área de investigación como por ejemplo:</li>
                //         <ul>
                //             <li>Java<li>
                //             <li>C, C++<li>
                //             <li>Prolog<li>
                //             <li>Bases de datos como MySql, postgresql<li>
                //             <li>Programación funcional como Haskell<li>
                //             <li>Assembly<li>
                //             <li>Arena Simulation para simulación<li>
                //             <li>Cisco packet tracer<li>
                //         </ul>
                //     </ul>
                //     </li>
                //     <li>Horario de cursada
                //         <ul>
                //             <li>Generalmente los horarios de la materia entan dividos entre mañana, tarde y noche/li>
                //         </ul>
                //     </li>
                //     <li>Salida laboral
                //         <ul>
                //             <li>-Ámbito de investigación</li>
                //             <li>-Áreas informáticas de organizaciones</li>
                //             <li>-Enseñanzas Universitaria y capacitación en ciencias de la computación</li>
                //         </ul>
                //     </li>
                //     <li>Etapa Final
                //         <ul>
                //             <li>Trabajo Final</li>
                //             <li>Práctica de Investigación Supervisada</li>
                //         </ul>
                //     </li>
                //     <li>Exigencia
                //         <ul>
                //             <li>Dedicación completa (exigente)</li>
                //         </ul>
                //     </li>
                // </ul>
                // `;
                // botonsSpecials(4);
                // // const botonS = document.getElementById('botonS4');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // botonAndFooterDesactived(4);
                // agregarFooter();
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoLC");
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Dentro de las carreras con enfoque Teorico son las carreras que se puede ofrecer, como has seleccionado horarios flexibles intenta probar con las carreras con enfoque Practico</p>
                // `;
                // // const botonS = document.getElementById('botonS4');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // botonsSpecials(4);
                // botonAndFooterDesactived(4);
                // agregarFooter();
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
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Estimación: Tecnicatura Web</p>

                // <p>Lo que debes saber acerca de la carrera:</p>
                // <ul>
                //     <li>Programación
                //         <ul>
                //             <li>Veras mas orientado al alto Nivel como por ejemplo:</li>
                //             <ul>
                //                 <li>HTML<li>
                //                 <li>CSS<li>
                //                 <li>JavaScript<li>
                //                 <li>Frameworks y Bibliotecas como React<li>
                //                 <li>Bases de datos<li>
                //                 <li>Git y GitHub<li>
                //             </ul>
                //         </ul>
                //     </li>
                //     <li>Horario de cursada
                //         <ul>
                //             <li>Generalmente son en la tarde y la noche</li>
                //         </ul>
                //     </li>
                //     <li>Salida laboral
                //         <ul>
                //             <li>-Desarrollador de Software Web y de aplicaciones móviles</li>
                //             <li>-Dar asesoramiento técnico</li>
                //             <li>-Brindar seguridad en Web</li>
                //         </ul>
                //     </li>
                //     <li>Etapa Final
                //         <ul>
                //             <li>Práctica Técnica Supervisada.</li>
                //         </ul>
                //     </li>
                //     <li>Exigencia
                //         <ul>
                //             <li>Dedicación parcial (no es exigente)</li>
                //         </ul>
                //     </li>
                // </ul>
                // `;
                // botonsSpecials(7);
                // botonAndFooterDesactived(7);
                // // const botonS = document.getElementById('botonS7');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // agregarFooter();
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
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Dentro de las carreras con enfoque Practico con duracion de 3 años son las carreras que se puede ofrecer, intenta probar con las carreras con enfoque Practico con duracion de 5 años</p>
                // `;
                // botonsSpecials(8);
                // botonAndFooterDesactived(8);
                // // const botonS = document.getElementById('botonS8');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // agregarFooter();
            }           
        break;
        case 9:
            // Novena pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultTR");
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Estimación: Tecnicatura Universitaria en Redes de Computadoras</p>

                // <p>Lo que debes saber acerca de la carrera:</p>
                // <ul>
                //     <li>Programación
                //         <ul>
                //             <li>Veras mas lenguajes y herramientas que te permitan comprender, mantener y solucionar problemas en entornos de redes en tareas de redes como por ejemplo:</li>
                //             <ul>
                //                 <li>Python<li>
                //                 <li>Java<li>
                //                 <li>Sistemas Operativos de Redes<li>
                //                 <li>Bash scripting<li>
                //                 <li>Wireshark<li>
                //                 <li>GNS3 (Graphical Network Simulator-3)<li>
                //                 <li>Cisco packet tracer<li>
                //             </ul>
                //         </ul>
                //     </li>
                //     <li>Horario de cursada
                //         <ul>
                //             <li>Generalmente son en la tarde y la noche</li>
                //         </ul>
                //     </li>
                //     <li>Salida laboral
                //         <ul>
                //             <li>-Asesoramiento técnico</li>
                //             <li>-Mantenimiento de redes</li>
                //             <li>-Desarrollar dispositivos de redes</li>
                //             <li>-Diseño, instalación y configuración de redes de computadora</li>
                //         </ul>
                //     </li>
                //     <li>Etapa Final
                //         <ul>
                //             <li>Práctica Técnica Supervisada.</li>
                //         </ul>
                //     </li>
                //     <li>Exigencia
                //         <ul>
                //             <li>Dedicación parcial (no es exigente)</li>
                //         </ul>
                //     </li>
                // </ul>
                // `;
                // botonsSpecials(9);
                // botonAndFooterDesactived(9);
                // // const botonS = document.getElementById('botonS9');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // agregarFooter();
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoTWyR");
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Dentro de las carreras con enfoque Practico con duracion de 3 años son las carreras que se puede ofrecer, intenta probar con las carreras con enfoque Practico con duracion de 5 años</p>
                // `;
                // botonsSpecials(9);
                // botonAndFooterDesactived(9);
                // // const botonS = document.getElementById('botonS9');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // agregarFooter();
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
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                //     <p>Estimación: Ingeniería en Informática</p>

                //     <p>Lo que debes saber acerca de la carrera:</p>
                //     <ul>
                //         <li>Programación
                //         <ul>
                //             <li>Veras mas lenguajes y herramientas que te permitan comprender, mantener y solucionar problemas en entornos de industria de software como por ejemplo:</li>
                //             <ul>
                //                 <li>Python<li>
                //                 <li>Java<li>
                //                 <li>C, C++<li>
                //                 <li>Prolog<li>
                //                 <li>HTML<li>
                //                 <li>CSS<li>
                //                 <li>Javascript<li>
                //                 <li>Frameworks y Bibliotecas como React, CodeIgniter, etc<li>
                //                 <li>Bases de datos como MySql, postgresql<li>
                //                 <li>Programación funcional como Haskell<li>
                //             </ul>
                //         </ul>
                //         </li>
                //         <li>Horario de cursada
                //             <ul>
                //                 <li>Generalmente los horarios de la materia entan dividos entre mañana, tarde y noche</li>
                //             </ul>
                //         </li>
                //         <li>Salida laboral
                //             <ul>
                //                 <li>-Desarrollar, gestionar o controlar Proyectos de Software teniendo en cuenta el costo y tiempo.</li>
                //                 <li>-Aplicar la ciencia de la tecnología en mejorar productos de software ya existentes</li>
                //                 <li>-Seguridad Informática en Software</li>
                //                 <li>-Participar en asuntos legales, económicos y financieros en el área de software</li>
                //             </ul>
                //         </li>
                //         <li>Etapa Final
                //             <ul>
                //                 <li>Trabajo Final</li>
                //                 <li>Práctica Profesional Supervisada</li>
                //             </ul>
                //         </li>
                //         <li>Exigencia
                //             <ul>
                //                 <li>Dedicación completa (exigente)</li>
                //             </ul>
                //         </li>
                //     </ul>
                //     `;
                //     botonsSpecials(11);
                //     botonAndFooterDesactived(11);
                //     // const botonS = document.getElementById('botonS11');
                //     // botonS.style.display = 'none';
                //     // const footer1 = document.getElementById('footer1');
                //     // footer1.style.display = 'none';
                //     agregarFooter();
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
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Dentro de las carreras con enfoque Practico con duracion de 5 años son las carreras que se puede ofrecer, intenta probar con las carreras con enfoque Practico con duracion de 3 años o puedes probar con las carreras con enfoque Teorico</p>
                // `;
                // botonsSpecials(12);
                // botonAndFooterDesactived(12);
                // // const botonS = document.getElementById('botonS12');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // agregarFooter();
            }

        break;
        
        case 13:
            // Treceava pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultIC");
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Estimación: Ingeniería en Computación</p>

                // <p>Lo que debes saber acerca de la carrera:</p>
                // <ul>
                //     <li>Programación
                //     <ul>
                //         <li>Veras mas lenguajes y herramientas que te permitan comprender, mantener y solucionar problemas, como por ejemplo:</li>
                //         <ul>
                //             <li>Python<li>
                //             <li>Java<li>
                //             <li>C, C++<li>
                //             <li>Assembly<li>
                //             <li>Sistemas Operativos de Redes<li>
                //             <li>Bash scripting<li>
                //             <li>Wireshark<li>
                //             <li>GNS3 (Graphical Network Simulator-3)<li>
                //             <li>Cisco packet tracer<li>
                //             <li>Bases de datos como MySql, postgresql<li>
                //             <li>Programación funcional como Haskell<li>
                //         </ul>
                //     </ul>
                //     </li>
                //     <li>Horario de cursada
                //         <ul>
                //             <li>Generalmente los horarios de la materia entan dividos entre mañana, tarde y noche</li>
                //         </ul>
                //     </li>
                //     <li>Salida laboral
                //         <ul>
                //             <li>-Desarrollar, gestionar o controla arquitectura de computadoras, componentes electrónicos, la gestión de redes y comunicaciones, señales digitales. Teniendo en cuenta el costo y tiempo.</li>
                //             <li>-Aplicar la ciencia de la tecnología en mejorar productos de hardware y software ya existentes.</li>
                //             <li>-Seguridad Informática en productos de hardware y software</li>
                //             <li>-Participar en asuntos legales, económicos y financieros en el área.</li>
                //         </ul>
                //     </li>
                //     <li>Etapa Final
                //         <ul>
                //             <li>Trabajo Final</li>
                //             <li>Práctica Profesional Supervisada</li>
                //         </ul>
                //     </li>
                //     <li>Exigencia
                //         <ul>
                //             <li>Dedicación completa (exigente)</li>
                //         </ul>
                //     </li>
                // </ul>
                // `;
                // botonsSpecials(13);
                // botonAndFooterDesactived(13);
                // // const botonS = document.getElementById('botonS11');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // agregarFooter();
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoIC");
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Dentro de las carreras con enfoque Practico con duracion de 5 años son las carreras que se puede ofrecer, intenta probar con las carreras con enfoque Practico con duracion de 3 años o puedes probar con las carreras con enfoque Practico</p>
                // `;
                // botonsSpecials(13);
                // botonAndFooterDesactived(13);
                // // const botonS = document.getElementById('botonS8');
                // // botonS.style.display = 'none';
                // // const footer1 = document.getElementById('footer1');
                // // footer1.style.display = 'none';
                // agregarFooter();
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
                // questionAllDesactived();
                // botonsSpecials(15);
                
                modalResultTest("modalResultTW");

                
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <div class="container mt-5 ">
                //     <p>Estimación: Tecnicatura Web</p>

                //         <p>Lo que debes saber acerca de la carrera:</p>
                //         <ul>
                //             <li>Programación
                //                 <ul>
                //                     <li>Veras mas orientado al alto Nivel como por ejemplo:</li>
                //                     <ul>
                //                         <li>HTML</li>
                //                         <li>CSS</li>
                //                         <li>JavaScript</li>
                //                         <li>Frameworks y Bibliotecas como React</li>
                //                         <li>Bases de datos</li>
                //                         <li>Git y GitHub</li>
                //                     </ul>
                //                 </ul>
                //             </li>
                //             <li>Horario de cursada
                //                 <ul>
                //                     <li>Generalmente son en la tarde y la noche</li>
                //                 </ul>
                //             </li>
                //             <li>Salida laboral
                //                 <ul>
                //                     <li>-Desarrollador de Software Web y de aplicaciones móviles</li>
                //                     <li>-Dar asesoramiento técnico</li>
                //                     <li>-Brindar seguridad en Web</li>
                //                 </ul>
                //             </li>
                //             <li>Etapa Final
                //                 <ul>
                //                     <li>Práctica Técnica Supervisada.</li>
                //                 </ul>
                //             </li>
                //             <li>Exigencia
                //                 <ul>
                //                     <li>Dedicación parcial (no es exigente)</li>
                //                 </ul>
                //             </li>
                //         </ul>
                //     </div>
                // `;
                // questionAllDesactived();
                // botonsSpecials(15);
                // botonAndFooterDesactived(15);
                // agregarFooter();
                
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
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Dentro de las carreras con enfoque Practico con duracion de 3 años son las carreras que se puede ofrecer</p>
                // `;
                // botonsSpecials(16);
                // botonAndFooterDesactived(16);
                // agregarFooter();
            }           
        break;
        case 17:
            // Decisieteava pregunta
            if (selectedOption === 'opcion1') {
                modalResultTest("modalResultTR");
            //     const resultsContainer = document.getElementById('results');
            //     resultsContainer.innerHTML = `
            //     <p>Estimación: Tecnicatura Universitaria en Redes de Computadoras</p>
            //     <p>Lo que debes saber acerca de la carrera:</p>
            //     <ul>
            //         <li>Programación
            //             <ul>
            //                 <li>Veras mas lenguajes y herramientas que te permitan comprender, mantener y solucionar problemas en entornos de redes en tareas de redes como por ejemplo:</li>
            //                 <ul>
            //                     <li>Python<li>
            //                     <li>Java<li>
            //                     <li>Sistemas Operativos de Redes<li>
            //                     <li>Bash scripting<li>
            //                     <li>Wireshark<li>
            //                     <li>GNS3 (Graphical Network Simulator-3)<li>
            //                     <li>Cisco packet tracer<li>
            //                 </ul>
            //             </ul>
            //         </li>
            //         <li>Horario de cursada
            //             <ul>
            //                 <li>Generalmente son en la tarde y la noche</li>
            //             </ul>
            //         </li>
            //         <li>Salida laboral
            //             <ul>
            //                 <li>-Asesoramiento técnico</li>
            //                 <li>-Mantenimiento de redes</li>
            //                 <li>-Desarrollar dispositivos de redes</li>
            //                 <li>-Diseño, instalación y configuración de redes de computadora</li>
            //             </ul>
            //         </li>
            //         <li>Etapa Final
            //             <ul>
            //                 <li>Práctica Técnica Supervisada.</li>
            //             </ul>
            //         </li>
            //         <li>Exigencia
            //             <ul>
            //                 <li>Dedicación parcial (no es exigente)</li>
            //             </ul>
            //         </li>
            //     </ul>
            // `;
            // const opcion15 = document.getElementById('opcion15');
            // opcion15.style.display = 'none';
            // botonsSpecials(17);
            // botonAndFooterDesactived(17);
            // agregarFooter();
            } else if (selectedOption === 'opcion2') {
                modalResultTest("modalResultNoTWyR2");
                // const resultsContainer = document.getElementById('results');
                // resultsContainer.innerHTML = `
                // <p>Dentro de las carreras con enfoque Practico con duracion de 3 años son las carreras que se puede ofrecer</p>
                // `;
                // botonsSpecials(17);
                // botonAndFooterDesactived(17);
                // agregarFooter();
            } 
        break;
    }
    
}

function agregarFooter(){
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML += 
    `
    <br>
    <footer class="text-center " style="background-color: black; color: white;">
        <div class="container">
        <h7>Hecho por Braian Paez - UNSL</h7>
        </div>
    </footer>
    `;

}

// function modalFunction(botonModalNumero,modalId){
//     $(document).ready(function(){
//         // Cuando haces clic en el botón
//         $(botonModalNumero).click(function(){
//             $(modalId).modal('show'); // Muestra el modal
//         });
//     });
//     // document.getElementById(botonModalNumero).addEventListener('click', function() {
//     //     // Mostrar el modal por su ID
//     //     var modal = document.getElementById(modalId);
//     //     if (modal) {
//     //         modal.classList.add('show'); // Agregar la clase 'show' para mostrar el modal
//     //         modal.style.display = 'block'; // Establecer el estilo 'display' como 'block' para mostrar el modal
//     //         modal.setAttribute('aria-hidden', 'false'); // Cambiar el atributo 'aria-hidden' a 'false'
//     //         document.body.classList.add('modal-open'); // Agregar la clase 'modal-open' al cuerpo del documento para corregir el desplazamiento del fondo
//     //     }
//     // });
// }

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

function botonsSpecials(questionId){
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML += 
    `
    <br/>
    <div class="d-flex justify-content-between">
        <button class="btn btn-primary"  onclick="reloadPage()">Reiniciar</button>
        <button class="btn btn-primary" value="botonV" id="botonV" onclick="previousQuestion(${questionId})">Volver</button>
    </div>
    `;
    
}
function questionAllDesactived(){
    const divP = document.getElementById('divPrincipal');
    divP.style.display = 'none';
}
function botonAndFooterDesactived(questionId){
    const botonS = document.getElementById('botonS'+questionId);
    botonS.style.display = 'none';
    const botonV = document.getElementById('botonV'+questionId);
    botonV.style.display = 'none';
    const footer1 = document.getElementById('footer1');
    footer1.style.display = 'none';
}

function botonAndFooterActived(questionId){
    const botonS = document.getElementById('botonS'+questionId);
    botonS.style.display = 'block';
    const botonV = document.getElementById('botonV'+questionId);
    botonV.style.display = 'block';
    const footer1 = document.getElementById('footer1');
    footer1.style.display = 'block';
}

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
            showQuestion('question1');
            resultsContainer.innerHTML = 
            `
            `;
        break;

        case 3:
        // Tercera pregunta
            showQuestion('question2');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(3); 
        break;

        case 4:
        // Cuarta pregunta
            showQuestion('question3');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(4);
        break;

        case 5:
        // Quinta pregunta
            showQuestion('question2');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(5);
        break;

        case 6:
        // Sexta pregunta
            showQuestion('question5');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(6);
        break;

        case 7:
        // Septima pregunta
            showQuestion('question6');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(7);
        break;

        case 8:
        // Octava pregunta
            showQuestion('question7');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(8);
        break;

        case 9:
        // Novena pregunta
            showQuestion('question6');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(9);
        break;

        case 10:
        // Decima pregunta
            showQuestion('question5');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(10);
        break;

        case 11:
        // Onceava pregunta
            showQuestion('question10');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(11);
        break;

        case 12:
        // Doceava pregunta
            showQuestion('question11');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(12);
        break;

        case 13:
        // Treceava pregunta
            showQuestion('question12');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(13);
        break;

        // Preguntas para el caso de horario tarde y noche
        case 14:
        // Catorceava pregunta
            showQuestion('question1');
            resultsContainer.innerHTML = 
            `
            `;
            botonAndFooterActived(14);
        break;

        case 15:
        // Quinceava pregunta
            showQuestion('question14');
            resultsContainer.innerHTML = 
            `
            `;
            // botonAndFooterActived(15);
            const divP = document.getElementById('divPrincipal');
            divP.style.display = 'block';
        break;

        case 16:
        // Diesiesava pregunta
            showQuestion('question14');
            resultsContainer.innerHTML = 
            `
            `;
             botonAndFooterActived(16);
        break;

        case 17:
        // Disieteava pregunta
            showQuestion('question16');
            resultsContainer.innerHTML = 
            `
            `;
            const opcion15 = document.getElementById('opcion15');
            opcion15.style.display = 'block';
            botonAndFooterActived(17);
        break;
    }
}