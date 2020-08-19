function realizarBusqueda() {
    $("#loadMe").modal({ backdrop: "static", keyboard: false, show: true });
    axios.get('http://localhost:4000/search/' + $("#search").val()).then(resp => {
        document.getElementById("lista").innerHTML = '';
        resp.data.busqueda.resultado.map(function(info, index) {
            document.getElementById("lista").innerHTML +=
                `
                <div class="col-md-4">
                <div class='normal'>
                <div class='module'>
                    <div class='thumbnail'>
                        <img src="${info.imagen}">
                    </div>
                    <div class='content'>
                        <div class="category">${info.tipo}</div>
                        <h1 class='title'>${info.nombre}</h1>
                        <div class="description">
                            <p>El resultado de la busqueda fue encontrado en</p><br />
                            <div class='date'>
                            <img src="${info.icon}" class="imgBusqueda" alt="">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                 `;
            $("#loadMe").modal("hide");
        })
    });
}