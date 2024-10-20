import {Serie} from './Serie.js';
import {series} from "./data.js";

let numSeries:number=0;
let numSeasons:number=0;

let tablaSeries:HTMLElement=document.getElementById("tabla_series")!;
let promedio:HTMLElement=document.getElementById("promedio")!;
let detalles:HTMLElement=document.getElementById("detalles")!;

mostrarSeries();
mostrarPromedio();
configurarBotones();

function mostrarSeries():void{
    for(let serie of series){
        numSeries++;
        numSeasons+=serie.temporadas;
        let filaSerie = document.createElement("tr");
        filaSerie.innerHTML=`<td>${serie.iD}</td>
                            <td><button type="button" class="btn btn-link" id=${serie.iD}>${serie.nombre}</button></td>
                            <td>${serie.canal}</td>
                            <td>${serie.temporadas}</td>`;
        tablaSeries.appendChild(filaSerie);
    }
}
function mostrarPromedio():void{
    let prom:number=numSeasons/numSeries;
    promedio.innerHTML=`Seasons Average: ${prom}`;
}

function configurarBotones(){
    for(let serie of series){
        let botonDetalle:HTMLElement=document.getElementById(serie.iD.toString())!;
        botonDetalle.onclick=()=>{
            mostrarDetalles(serie.iD.toString())
        };
    }
}

function mostrarDetalles(id:string):void{
    detalles.innerHTML="";
    let serie:Serie=series.filter(c=>c.iD.toString()==id)[0];
    detalles.innerHTML=`<img src='${serie.foto}' alt="${serie.nombre}" width="250" height="250">
                        <h2>${serie.nombre}</h2>
                        <p><b>Synopsis: </b>${serie.sinopsis}</p>
                        <a href="${serie.url}">${serie.url}</a>`
}
