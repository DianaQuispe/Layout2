var imgArray= Array.from(document.getElementsByClassName("imagenes"));
var product=document.getElementById("product");
imgArray.forEach(function(img) {
    img.addEventListener("click",agregar);
});

function agregar() {
    var product=document.getElementById("product");
    var product=document.getElementById("product");S
    var divsote = document.createElement("div");
    divsote.setAttribute("id","divG");
    var divsito = document.createElement("div");
    divsito.setAttribute("class","divC");
    var image = document.createElement("img");
    divsote.appendChild(divsito);
    product.appendChild(divsote);
    
}
