const token = localStorage.getItem('authToken');
const userName = localStorage.getItem('userName');

// Definir las URLs a las que quieres hacer Fetch
const url1 = `http://localhost:8081/resultados/count`;
const url2 = `http://localhost:8081/resultados/countWithInterest`;
const url3 = `http://localhost:8081/resultados/mostChosenCareer`;
const url4 = `http://localhost:8081/resultados/mostFrequentSchool`;
const urlGraphPie = `http://localhost:8081/resultados/viewGraph`;

const cuentaTotalElement1 = document.getElementById('cuentaTotal');
const cuentaTotalElement2 = document.getElementById('cuentaTotalI');
const cuentaTotalElement3 = document.getElementById('cuentaCarrera');
const cuentaTotalElement4 = document.getElementById('cuentaEscuela');

console.log("el token tiene "+token);

// Crear una función para hacer Fetch a una URL con el token de autorización
const fetchData = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    // Verificar si la respuesta es un Unauthorized (código 403)
    if (response.status === 403) {
        // El token ha expirado, muestra un modal y redirige a launch.html
        mostrarModalSesionExpirada();
        // window.location.href = 'launch.html';
        return Promise.reject('Token expirado');
    }
    return await response.json();
};

// Hacer Fetch a todas las URLs simultáneamente usando Promise.all()
Promise.all([fetchData(url1), fetchData(url2), fetchData(url3), fetchData(url4), fetchData(urlGraphPie)])
.then(responses => {
    // responses es un array con los resultados de todas las llamadas Fetch
    const data1 = responses[0];
    const data2 = responses[1];
    const data3 = responses[2];
    const schools = responses[3];
    const graphPieCarreras = responses[4];

    // Aquí puedes hacer lo que necesites con los datos obtenidos
    console.log('Datos de la URL 1:', data1);
    console.log('Datos de la URL 2:', data2);
    console.log('Datos de la URL 3:', data3);
    console.log('Datos de la URL 4:', schools);

    // Por ejemplo, actualizar el contenido del DOM con los datos obtenidos
    cuentaTotalElement1.textContent = data1;
    cuentaTotalElement2.textContent = data2;
    cuentaTotalElement3.textContent = data3[0];
    cuentaTotalElement4.textContent = schools[0][0] + " con " + schools[0][1] + " veces";

    //Para grafico de barra
    anychart.onDocumentReady(function () {

        // Obtener los datos de las carreras y cantidades desde el array data
        let school = schools.map(item => item[0]);
        let cantidades = schools.map(item => item[1]);

        // Crear un arreglo de objetos que contengan las carreras y las cantidades
        let chartData = [];

        for (let i = 0; (i < 5 && i<school.length); i++) {
            chartData.push({ x: school[i], value: cantidades[i] });
        }

        // create a chart
        var chart = anychart.bar();
        // chart.name("cantidad");
    
        // create a bar series and set the data
        var cantidad = chart.bar(chartData);
        cantidad.name("Cantidad");
    
        // set the chart title
        chart.title("Top 5");
    
        // set the titles of the axes
        chart.xAxis().title("Escuelas");
        chart.yAxis().title("Cantidad");
    
        // set the container id
        chart.container("graphForSchoolTop");
    
        // initiate drawing the chart
        chart.draw();
    });

    //Para grafico circular
    anychart.onDocumentReady(function () {
    
    var canvas = document.getElementById("graficaBarras");

    // Obtener los datos de las carreras y cantidades desde el array data
    let carreras = graphPieCarreras.map(item => item[0]);
    let cantidades = graphPieCarreras.map(item => item[1]);

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
    });     
})
.catch(error => console.error('Error al obtener datos:', error));


function logOut() {
    localStorage.removeItem('token'); // Cambia 'token' por la clave que identifica tu sesión
    
    // Redirige a launch.html
    window.location.href = 'launch.html';
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
            // Redirige a launch.html con el nombre de usuario en el parámetro
            window.location.href = `launch.html?username=${userNameFromURL}`;
        } else {
            // Redirige a launch.html sin ningún parámetro
            window.location.href = 'launch.html';
        }
    });
}
