var setting2 = {
    roots: document.querySelector('.my-js-slider2'),
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
var slider2 = wRunner(setting2);

function filterGraph(event) {
    event.preventDefault();

    filterschools = document.getElementById('filtroOpcion').value;
    valor = document.getElementById('filtroValor').value;
    // Obtener el valor del checkbox de interés
    const interesCheckbox = document.getElementById('interesCheckbox');
    const interesSeleccionado = interesCheckbox.checked;
    var valores = slider2.getValue();
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
            //     urlFiltrado = `http://localhost:8081/resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}`;
            //     typeOfSearch = 0;
            // }
            // else{
            //     urlFiltrado = `http://localhost:8081/resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}`;
            //     typeOfSearch = 1;
            // }
            //Operador ternario
            urlFiltrado = (opcion == 0) ?
            `http://localhost:8081/resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            `http://localhost:8081/resultados/viewAll?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            typeOfSearch = (opcion == 0) ? 0 : 1;
            break;
        case 2:
            urlFiltrado = (opcion == 0) ?
            `http://localhost:8081/resultados/esRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            `http://localhost:8081/resultados/esRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            typeOfSearch = (opcion == 0) ? 0 : 1;
            break;
        case 3:
            urlFiltrado = (opcion == 0) ?
            `http://localhost:8081/resultados/esNoRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            `http://localhost:8081/resultados/esNoRes?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            typeOfSearch = (opcion == 0) ? 0 : 1;
            break;
        case 4:
            urlFiltrado = (opcion == 0) ?
            `http://localhost:8081/resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}` :
            `http://localhost:8081/resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}&interes=${interesSeleccionado}`;

            typeOfSearch = (opcion == 0) ? 0 : 1;
            break;
        // case 5:// caso de no interes
        //     urlFiltrado = (opcion == 0) ?
        //     `http://localhost:8081/resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}` :
        //     `http://localhost:8081/resultados/schoolInSanLuis?page=${paginaActual}&quantityPerPage=${elementosPorPagina}&opcion=${opcion}&valor=${valor}&edadDesde=${valores.minValue}&edadHasta=${valores.maxValue}`;

        //     typeOfSearch = (opcion == 0) ? 0 : 1;
        //     break;
    }


    // Después de aplicar el filtrado, puedes volver a cargar los datos y la paginación
    cargarDatosYPaginacion(opcionVisualizador, urlFiltrado, typeOfSearch);
}
