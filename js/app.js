/*
 * Archivo principal de funcionalidad de JS
 */
var row = document.getElementById("row");

var images = ["../assets/images/img-1.jpg", "../assets/images/img-2.jpg", "../assets/images/img-3.jpg", "../assets/images/img-4.jpg", "../assets/images/img-5.jpg", "../assets/images/img-6.jpg", "../assets/images/img-7.jpg", "../assets/images/img-8.jpg", "../assets/images/img-9.jpg"];
for (var o = 0; o < images.length; o++) {
    var div = document.createElement("div");
    div.setAttribute("class", "col-4");
    var crearIM = document.createElement("img");
    crearIM.setAttribute("src", images[o]);
    crearIM.setAttribute("onclick", 'iMG()');
    crearIM.style.cursor = "pointer";
    crearIM.setAttribute("class", "imagenes");
    var crearH2 = document.createElement("H2");
    var textoH2 = document.createTextNode("NOMBRE DEL PROYECTO")
    crearH2.appendChild(textoH2);
    div.appendChild(crearIM);
    div.appendChild(crearH2);
    row.appendChild(div);
}

function iMG() {
    alert('hola');
    body = document.getElementsByTagName("body")[0];
    var divsote = document.createElement("div");
    divsote.setAttribute("id","divG");
    body.appendChild(divsote);
    var divsito = document.createElement("div");
    divsito.setAttribute("class","divC");
    images[o];
    divsote.appendChild(divsito);
    
    
}