var setting = {
    roots: document.querySelector('.my-js-slider'),
    type: 'range',
    step: 1,
    rangeValue: {
        minValue: 16,
        maxValue: 100,
    },
    limits : { 
        minLimit: 16,      
        maxLimit: 100   
    }
    }
var slider = wRunner(setting);

var setting2 = {
    roots: document.querySelector('.my-js-slider2'),
    type: 'range',
    step: 1,
    rangeValue: {
        minValue: 1930,
        maxValue: 2024,
    },
    limits : { 
        minLimit: 1930,      
        maxLimit: 2024   
    }
    }
var slider2 = wRunner(setting2);

var setting3 = {
    roots: document.querySelector('.my-js-slider3'),
    type: 'range',
    step: 1,
    rangeValue: {
        minValue: 16,
        maxValue: 100,
    },
    limits : { 
        minLimit: 16,      
        maxLimit: 100   
    }
    }
var slider3 = wRunner(setting3);

// Variables de paginación
let paginaActual = 0;
const elementosPorPagina = 10; // Ajusta la cantidad de elementos por página según tu necesidad
var valores = slider.getValue();
let urlViewAll = urlForBack+`resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=true`;
let urlViewEsResident = urlForBack+`resultados/esRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=true`;
let urlViewEsNoResident = urlForBack+`resultados/esNoRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=true`;
let urlViewSchoolInSanLuis = urlForBack+`resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=true`;
let urlViewGraph = null;
let graficas; // Arreglo para almacenar las instancias de gráfico

// Obtener la URL actual
let currentURL = window.location.href;

let opcionVisualizador = 1;
let typeOfSearch = 0;

let opcion = null;
let valor = null;

// Tabla seleccionada
let numberTable = parseInt(localStorage.getItem('numberTable'));
let tableId = localStorage.getItem('tableId');


if(numberTable === 4){
    // Mostrar el selector de escuelas
    document.getElementById("filtroForSchool").style.display = "block";
}
else{
    document.getElementById("filtroForSchool").style.display = "none";
}

// Extraer los parámetros de la cadena de consulta
// let urlParams = new URLSearchParams(window.location.search);

// Obtener los valores de los parámetros
// let userName = urlParams.get('userName');
// let password = urlParams.get('password');
// let token = urlParams.get('token');

const token = localStorage.getItem('authToken');
const userName = localStorage.getItem('userName');

function showTable(elementId) {
    // Ocultar todos los elementos con la clase 'result-view'
    document.querySelectorAll('.result-view').forEach(table => {
        table.style.display = 'none';
    });

    // Mostrar el elemento específico con el ID proporcionado
    const elementToShow = document.getElementById(elementId);
    if (elementToShow) {
        elementToShow.style.display = 'block';
    }
}

function selectOption(numberTable, tableId){
    opcionVisualizador = numberTable;
    typeOfSearch = 0;
    switch (numberTable) {
        case 1:
            showTable(tableId);
            cargarDatosYPaginacion(numberTable,urlViewAll);
            break;
        case 2:
            showTable(tableId);
            cargarDatosYPaginacion(numberTable,urlViewEsResident);
            break;
        case 3:
            showTable(tableId);
            cargarDatosYPaginacion(numberTable,urlViewEsNoResident);
            break;
        case 4:
            showTable(tableId);
            cargarDatosYPaginacion(numberTable,urlViewSchoolInSanLuis);
            break;
        case 5:
            urlViewGraph = urlForBack+`resultados/viewGraph?interes=true`;
            showTable(tableId);
            cargarDatosYPaginacion(numberTable,urlViewGraph);
            break;
        case 6:
            console.log("entreee aquiiiiiiiiiiiiii");
            urlViewGraph = urlForBack+`resultados/viewGraph?interes=false`;
            showTable(tableId);
            cargarDatosYPaginacion(numberTable,urlViewGraph);
            break;
    }
}

function logOut() {
    localStorage.removeItem('token'); // Cambia 'token' por la clave que identifica tu sesión
    
    // Redirige a index.html
    window.location.href = '../index.html';
}

// Función para cargar datos y paginación
function cargarDatosYPaginacion(opcion, url) {
    // Verifica si el token está disponible
    console.log("el token tiene "+token);
    console.log("el userName tiene "+userName);
    console.log("la url tiene "+url);
    if (token) {
        // Realizar la solicitud GET a la API con información de paginación
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
                // Otros encabezados según sea necesario
            }
        })
        .then(response => {
            // Verificar si la respuesta es un Unauthorized (código 403)
            if (response.status === 403) {
                // El token ha expirado, muestra un modal y redirige a index.html
                mostrarModalSesionExpirada();
                // window.location.href = 'index.html';
                return Promise.reject('Token expirado');
            }

            return response.json();
        })
        .then(data => {
            switch (opcion) {
                case 1:
                    dataForTableViewAll(data);
                    break;
                case 2:
                    dataForTableViewEsResident(data);
                    break;
                case 3:
                    dataForTableViewEsNoResident(data);
                    break;
                case 4:
                    dataForTableSchoolInSanLuis(data);
                    break;
                case 5:
                    dataForTableViewGraph(data);
                    break;
                case 6:
                    dataForTableViewGraph(data);
                    break;
                
            }
        })
        .catch(error => console.error('Error al obtener datos:', error));
    } else {
        console.error('Token no disponible. El usuario no está autenticado.');
    }
}

function mostrarModalSesionExpirada() {
    // Muestra el modal
    $('#sesionExpiradaModal').modal('show');

    // Configura el evento para redirigir al hacer clic en el botón "Volver"
    $('#volverBtn').on('click', function() {
        // Obtén el nombre de usuario del parámetro en la URL
        const urlParams = new URLSearchParams(window.location.search);
        const userNameFromURL = urlParams.get('userName');

        // Verifica si el nombre de usuario está definido
        if (userNameFromURL) {
            // Redirige a index.html con el nombre de usuario en el parámetro
            window.location.href = `../index.html?username=${userNameFromURL}`;
        } else {
            // Redirige a index.html sin ningún parámetro
            window.location.href = '../index.html';
        }
    });
}

function filtrarTabla(event) {
    event.preventDefault();

    opcion = document.getElementById('filtroOpcion').value;
    valor = document.getElementById('filtroValor').value;
    // Obtener el valor del checkbox de interés
    const interesCheckbox = document.getElementById('interesCheckbox');
    const interesSeleccionado = interesCheckbox.checked;
    var valores = slider.getValue();
    let urlFiltrado = null;
    

    // Resto del código de filtrado
    // Puedes usar 'opcion' y 'valor' en tu lógica de filtrado
    console.log("Opción de filtrado: ", opcion);
    console.log("Valor de búsqueda: ", valor);
    console.log("Valor mínimo:", valores.minValue);
    console.log("Valor máximo:", valores.maxValue);

    switch (opcionVisualizador) {
        case 1:
            // if(opcion == 0){
            //     urlFiltrado = urlForBack+`resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}`;
            //     typeOfSearch = 0;
            // }
            // else{
            //     urlFiltrado = urlForBack+`resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}`;
            //     typeOfSearch = 1;
            // }
            //Operador ternario
            urlFiltrado = (opcion == 0) ?
            urlForBack+`resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            urlForBack+`resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            typeOfSearch = (opcion == 0) ? 0 : 1;
            break;
        case 2:
            urlFiltrado = (opcion == 0) ?
            urlForBack+`resultados/esRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            urlForBack+`resultados/esRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            typeOfSearch = (opcion == 0) ? 0 : 1;
            break;
        case 3:
            urlFiltrado = (opcion == 0) ?
            urlForBack+`resultados/esNoRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            urlForBack+`resultados/esNoRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            typeOfSearch = (opcion == 0) ? 0 : 1;
            break;
        case 4:
            urlFiltrado = (opcion == 0) ?
            urlForBack+`resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            urlForBack+`resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            typeOfSearch = (opcion == 0) ? 0 : 1;
            break;
        // case 5:// caso de no interes
        //     urlFiltrado = (opcion == 0) ?
        //     urlForBack+`resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}` :
        //     urlForBack+`resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}`;

        //     typeOfSearch = (opcion == 0) ? 0 : 1;
        //     break;
    }


    // Después de aplicar el filtrado, puedes volver a cargar los datos y la paginación
    cargarDatosYPaginacion(opcionVisualizador, urlFiltrado, typeOfSearch);
}

function filterGraphA(event){
    event.preventDefault();

    // Obtener los valores del formulario
    var rangoEdad = slider3.getValue();
    var rangoAño = slider2.getValue();
    var exampleSchool = document.getElementById('exampleSchool').value;
    var interesCheckboxG = document.getElementById('interesCheckboxG').checked;

    console.log("rangoEdad mínimo: ", rangoEdad.minValue);
    console.log("rangoAño mínimo: ", rangoAño.minValue);
    console.log("rangoEdad máximo: ", rangoEdad.maxValue);
    console.log("rangoAño máximo: ", rangoAño.maxValue);
    console.log("exampleSchool: ", exampleSchool);
    console.log("interesCheckboxG:", interesCheckboxG);
    if(exampleSchool == ""){
        console.log("esta vacio exampleScholl");
        exampleSchool= null;
    }

    // urlViewSchoolInSanLuis = urlForBack+`resultados/viewGraph?interes=${interesCheckboxG}&edadMinima=${rangoEdad.minValue}&edadMaxima=${rangoEdad.maxValue}&anoMinimo=${rangoAño.minValue}&anoMaximo=${rangoAño.maxValue}&escuela=${exampleSchool}&modo=2`;

    urlViewSchoolInSanLuis = urlForBack+`resultados/schoolInSanLuisFP?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&interes=${interesCheckboxG}&edadMinima=${rangoEdad.minValue}&edadMaxima=${rangoEdad.maxValue}&anoMinimo=${rangoAño.minValue}&anoMaximo=${rangoAño.maxValue}&escuela=${exampleSchool}`;

    

    cargarDatosYPaginacion(4, urlViewSchoolInSanLuis);

    // Cerrar el modal después de cargar los datos
    $('#exampleModal').modal('hide');
}

function convertirFormatoFecha(fecha) {
    // Dividir la fecha en año, mes y día
    var partes = fecha.split("-");
    // Crear una nueva fecha en el formato DD-MM-AAAA
    var nuevaFecha = partes[2] + "-" + partes[1] + "-" + partes[0];
    return nuevaFecha;
}

function dataForTableViewAll(data){
    // Obtener la referencia a la tabla y la paginación
    const tabla = document.getElementById("miTabla");
    const tbody = tabla.querySelector("tbody");
    const paginacion = document.getElementById("paginacion");
    // const canvas = document.getElementById("graficaBarras");
    const filtro = document.getElementById("filtrado"); // Agregar esta línea

    // Limpiar la tabla y la paginación
    tbody.innerHTML = '';
    paginacion.innerHTML = '';
    // canvas.style.display =  'none';
    if (filtro) {
        filtro.style.display = 'table-row';
    }

    // Llenar la tabla con los datos
    data.content.forEach((resultado) => {
        const fila = document.createElement("tr");
        // Acceder a los campos dentro del objeto usuarios
        // console.log("los usuarios tiene: "+resultado.usuarios);
        // console.log("email tiene: "+ resultado.usuarios.email);
        // const email = resultado.usuarios.email;
        // const edad = resultado.usuarios.edad;
        // const fecha = resultado.fecha;
        // const carreraObtenida = resultado.carreraObtenida;

        const email = resultado[0];
        const edad = resultado[1];
        const fecha = resultado[2];
        const carreraObtenida = resultado[3];

        const columnas = [email, edad, convertirFormatoFecha(fecha), carreraObtenida];
        columnas.forEach((columna) => {
            const celda = document.createElement("td");
            celda.textContent = columna;
            fila.appendChild(celda);
        });
        tbody.appendChild(fila);
        
    });

    agregarBotonesPaginacionBootstrap(data, "paginacion", 1);
    
}

function dataForTableViewEsResident(data){
    // Obtener la referencia a la tabla y la paginación
    const tabla = document.getElementById("tablaEsResidente");
    const tbody = tabla.querySelector("tbody");
    const paginacion = document.getElementById("paginacion");
    const filtro = document.getElementById("filtrado"); // Agregar esta línea

    // Limpiar la tabla y la paginación
    tbody.innerHTML = '';
    paginacion.innerHTML = '';
    filtro.style.display = 'table-row';

    // Llenar la tabla con los datos
    data.content.forEach((resultado) => {
        const fila = document.createElement("tr");
        // Acceder a los campos dentro del objeto usuarios
        const email = resultado[0];
        const edad = resultado[1];
        const fecha = resultado[2];
        const esResidenteArg = resultado[3];
        const provincia = resultado[4];
        const carreraObtenida = resultado[5];

        const columnas = [email, edad, convertirFormatoFecha(fecha), provincia, carreraObtenida];
        columnas.forEach((columna) => {
            const celda = document.createElement("td");
            celda.textContent = columna;
            fila.appendChild(celda);
        });
        tbody.appendChild(fila);
        
    });
    
    agregarBotonesPaginacionBootstrap(data, "paginacion2", 2);
}

function dataForTableViewEsNoResident(data){
    // Obtener la referencia a la tabla y la paginación
    const tabla = document.getElementById("tablaEsNoResidente");
    const tbody = tabla.querySelector("tbody");
    const paginacion = document.getElementById("paginacion");
    const filtro = document.getElementById("filtrado"); // Agregar esta línea

    // Limpiar la tabla y la paginación
    tbody.innerHTML = '';
    paginacion.innerHTML = '';
    filtro.style.display = 'table-row';

    // Llenar la tabla con los datos
    data.content.forEach((resultado) => {
        const fila = document.createElement("tr");
        // Acceder a los campos dentro del objeto usuarios
        const email = resultado[0];
        const edad = resultado[1];
        const fecha = resultado[2];
        const esResidenteArg = resultado[3];
        const paisOrigen = resultado[4];
        const carreraObtenida = resultado[5];

        const columnas = [email, edad, convertirFormatoFecha(fecha), paisOrigen, carreraObtenida];
        columnas.forEach((columna) => {
            const celda = document.createElement("td");
            celda.textContent = columna;
            fila.appendChild(celda);
        });
        tbody.appendChild(fila);
        
    });
    
    agregarBotonesPaginacionBootstrap(data, "paginacion3", 3);
}

function dataForTableSchoolInSanLuis(data){
    // Obtener la referencia a la tabla y la paginación
    const tabla = document.getElementById("tablaSchoolInSanLuis");
    const tbody = tabla.querySelector("tbody");
    const paginacion = document.getElementById("paginacion");
    const filtro = document.getElementById("filtrado"); // Agregar esta línea

    // Limpiar la tabla y la paginación
    tbody.innerHTML = '';
    paginacion.innerHTML = '';
    filtro.style.display = 'table-row';

    // Llenar la tabla con los datos
    data.content.forEach((resultado) => {
        const fila = document.createElement("tr");
        // Acceder a los campos dentro del objeto usuarios
        const email = resultado[0];
        const edad = resultado[1];
        const schoolInSanLuis = resultado[3];
        const fecha = resultado[4];
        const carreraObtenida = resultado[5];

        const columnas = [email, edad, schoolInSanLuis, convertirFormatoFecha(fecha), carreraObtenida];
        columnas.forEach((columna) => {
            const celda = document.createElement("td");
            celda.textContent = columna;
            fila.appendChild(celda);
        });
        tbody.appendChild(fila);
        
    });
    
    agregarBotonesPaginacionBootstrap(data, "paginacion4", 4);
}

// function dataForTableViewGraph(data) {
//     // Ocultar el buscador
//     document.getElementById('filtrado').style.display = 'none';

//     // Obtener el lienzo (canvas) existente
//     var canvas = document.getElementById("graficaBarras");

//     // Destruir las instancias anteriores del gráfico
//     graficas.forEach(chart => {
//         chart.destroy();
//     });
//     graficas = []; // Limpiar el arreglo

//     // Obtener los datos de las carreras y cantidades desde el array data
//     let carreras = data.map(item => item[0]);
//     let cantidades = data.map(item => item[1]);

//     // Crear el objeto de datos para la gráfica
//     let datosCarreras = {
//         labels: carreras,
//         datasets: [{
//             label: 'Cantidad de estudiantes',
//             data: cantidades,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.5)',
//                 'rgba(255, 159, 64, 0.5)',
//                 'rgba(255, 205, 86, 0.5)',
//                 'rgba(75, 192, 192, 0.5)',
//                 'rgba(54, 162, 235, 0.5)',
//                 'rgba(153, 102, 255, 0.5)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(255, 205, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(153, 102, 255, 1)',
//             ],
//             borderWidth: 1
//         }]
//     };

//     // Obtén el contexto del canvas y crea la gráfica
//     var ctx = canvas.getContext('2d');
//     var graficaBarras = new Chart(ctx, {
//         type: 'bar',
//         data: datosCarreras,
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });

//     // Almacenar la instancia de la gráfica en el arreglo
//     graficas.push(graficaBarras);
// }

function dataForTableViewGraph(data) {
    
    // Ocultar el buscador
    document.getElementById('filtrado').style.display = 'none';

    // Obtener el lienzo (canvas) existente
    var canvas = document.getElementById("graficaBarras");

    // Destruir la instancia anterior del gráfico, si existe
    if (graficas) {
        graficas.dispose();
    }

    // Obtener los datos de las carreras y cantidades desde el array data
    let carreras = data.map(item => item[0]);
    let cantidades = data.map(item => item[1]);

    // Crear un arreglo de objetos que contengan las carreras y las cantidades
    let chartData = [];
    for (let i = 0; i < carreras.length; i++) {
        chartData.push({ x: carreras[i], value: cantidades[i] });
    }

    // Crear el gráfico circular
    var chart = anychart.pie(chartData);
    // Título del gráfico
    chart.title("Gráfico Circular de Carreras");

     // Ajustar el tamaño de la gráfica
    //  chart.width("80%"); // Opcional: Puedes especificar un porcentaje
    //  chart.height("80%"); // Opcional: Puedes especificar un porcentaje

    // Mostrar el gráfico en el lienzo
    chart.container(canvas);
    chart.draw();

    // Asignar la instancia del gráfico a una variable global para poder accederla posteriormente
    graficas = chart;
}

function updateUrl(urlID,paginaActual, url){
    console.log("typeofSearch tieneeeee "+ typeOfSearch);
    const interesCheckbox = document.getElementById('interesCheckbox');
    const interesSeleccionado = interesCheckbox.checked.toString();
    switch (urlID) {
        case 1:
            // if(typeOfSearch == 0){
            //     console.log("entreaaaaaaaaaaaaaaa aquiiii sin search");
            //     url = urlForBack+`resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}`;
            // }
            // else{
            //     console.log("entreaaaaaaaaaaaaaaa aquiiii con search");
            //     url = urlForBack+`resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}`;
            // }
            
            url = (typeOfSearch === 0) ?
            urlForBack+`resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            urlForBack+`resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&interes=${interesSeleccionado}`;
            break;
        case 2:
            url = (typeOfSearch === 0) ?
            urlForBack+`resultados/esRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            urlForBack+`resultados/esRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            break;
        case 3:
            url = (typeOfSearch === 0) ?
            urlForBack+`resultados/esNoRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            urlForBack+`resultados/esNoRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            break;
        case 4:
            url = (typeOfSearch === 0) ?
            urlForBack+`resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            urlForBack+`resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            break;
    }
    return url;
}
function agregarBotonesPaginacionBootstrap(data, idpaginacion, numberTable) {

    const paginacion = document.getElementById(idpaginacion);
    let url = "";

    // Limpiar el contenedor de paginación antes de agregar nuevos botones
    paginacion.innerHTML = "";

    console.log("typeofSearch tiene en paginado " +typeOfSearch);
    // Botón "Anterior"
    const botonAnterior = document.createElement("li");
    botonAnterior.classList.add("page-item");
    const enlaceAnterior = document.createElement("a");
    enlaceAnterior.classList.add("page-link");
    enlaceAnterior.setAttribute("href", "#");
    enlaceAnterior.textContent = "Anterior";
    botonAnterior.appendChild(enlaceAnterior);
    botonAnterior.addEventListener("click", () => {
        if (paginaActual > 0) {
            paginaActual--;
            url = updateUrl(numberTable,paginaActual,url);
            cargarDatosYPaginacion(numberTable,url);
        }
    });
    paginacion.appendChild(botonAnterior);

    // Agregar botones de páginas
    for (let i = 0; i < data.totalPages; i++) {
        const boton = document.createElement("li");
        boton.classList.add("page-item");
        const enlace = document.createElement("a");
        enlace.classList.add("page-link");
        enlace.setAttribute("href", "#");
        enlace.textContent = i + 1;
        boton.appendChild(enlace);
        // boton.addEventListener("click", () => {
        //     paginaActual = i;
        //     cargarDatosYPaginacion();
        // });
        paginacion.appendChild(boton);
    }

    // Botón "Siguiente"
    console.log("pagina total "+data.totalPages);
    console.log("pagina actual "+paginaActual);
    const botonSiguiente = document.createElement("li");
    botonSiguiente.classList.add("page-item");
    const enlaceSiguiente = document.createElement("a");
    enlaceSiguiente.classList.add("page-link");
    enlaceSiguiente.setAttribute("href", "#");
    enlaceSiguiente.textContent = "Siguiente";
    botonSiguiente.appendChild(enlaceSiguiente);
    botonSiguiente.addEventListener("click", () => {
        if (paginaActual < data.totalPages - 1) {
            paginaActual++;
            url = updateUrl(numberTable,paginaActual, url);
            cargarDatosYPaginacion(numberTable,url);
        }
    });
    paginacion.appendChild(botonSiguiente);

    // Personalizar botones (aquí puedes agregar tu propia lógica para estilos u otros atributos)
    const botones = paginacion.querySelectorAll("li");
    botones.forEach((boton, index) => {
        boton.classList.add("clase-personalizada"); // Agregar una clase personalizada
        // Puedes agregar más personalizaciones según tus necesidades
    });
}

// Cargar datos y paginación al cargar la página
console.log("numberTable tiene ",numberTable);
console.log("tableId tiene ",tableId);
// cargarDatosYPaginacion(numberTable, tableId);
selectOption(numberTable, tableId);