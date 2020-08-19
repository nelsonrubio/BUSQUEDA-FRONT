function realizarBusqueda() {
    document.getElementById("mensaje").innerHTML = '';
    document.getElementById("lista").innerHTML = '';
    if ($("#search").val() == '') {
        document.getElementById("mensaje").innerHTML +=
            ` <div class="col-md-12 justify-content-md-center">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Debe ingresar un parametro de busqueda</strong>.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>`;
    } else {
        $("#loadMe").modal({ backdrop: "static", keyboard: false, show: true });
        axios.get('http://localhost:4000/search/' + $("#search").val()).then(resp => {
            resp.data.busqueda.resultado.map(function(info, index) {
                document.getElementById("lista").innerHTML +=
                    `<div class="col-md-4">
                        <div class='normal'>
                            <div class='module'>
                                <div class='thumbnail'>
                                    <img src="${info.imagen}">
                                </div>
                                <div class='content'>
                                    <div class="category">${info.tipo}</div>
                                    <h1 class='title'>${info.nombre}</h1>
                                    <div class="description">
                                        <p>Resultado encontrado en:</p><br />
                                        <img src="${info.icon}" class="imgBusqueda" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                $("#loadMe").modal("hide");
            })
        });
    }
}