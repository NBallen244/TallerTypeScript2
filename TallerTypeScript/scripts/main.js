import { series } from "./data.js";
var numSeries = 0;
var numSeasons = 0;
var tablaSeries = document.getElementById("tabla_series");
var promedio = document.getElementById("promedio");
var detalles = document.getElementById("detalles");
mostrarSeries();
mostrarPromedio();
configurarBotones();
function mostrarSeries() {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        numSeries++;
        numSeasons += serie.temporadas;
        var filaSerie = document.createElement("tr");
        filaSerie.innerHTML = "<td>".concat(serie.iD, "</td>\n                            <td><button type=\"button\" class=\"btn btn-link\" id=").concat(serie.iD, ">").concat(serie.nombre, "</button></td>\n                            <td>").concat(serie.canal, "</td>\n                            <td>").concat(serie.temporadas, "</td>");
        tablaSeries.appendChild(filaSerie);
    }
}
function mostrarPromedio() {
    var prom = numSeasons / numSeries;
    promedio.innerHTML = "Seasons Average: ".concat(prom);
}
function configurarBotones() {
    var _loop_1 = function (serie) {
        var botonDetalle = document.getElementById(serie.iD.toString());
        botonDetalle.onclick = function () {
            mostrarDetalles(serie.iD.toString());
        };
    };
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        _loop_1(serie);
    }
}
function mostrarDetalles(id) {
    detalles.innerHTML = "";
    var serie = series.filter(function (c) { return c.iD.toString() == id; })[0];
    detalles.innerHTML = "<img src='".concat(serie.foto, "' alt=\"").concat(serie.nombre, "\" width=\"250\" height=\"250\">\n                        <h2>").concat(serie.nombre, "</h2>\n                        <p><b>Synopsis: </b>").concat(serie.sinopsis, "</p>\n                        <a href=\"").concat(serie.url, "\">").concat(serie.url, "</a>");
}
