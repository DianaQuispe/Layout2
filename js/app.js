var imgArray= Array.from(document.getElementsByClassName("imagenes"));
for(var i=1; i<=imgArray.length; i++) {
    var index = imgArray.indexOf("../assets/images/img"+2+".jpg");
    }
var product=document.getElementById("product");
imgArray.forEach(function(img) {
   

    img.addEventListener("click",agregar);

});

function agregar() {
     for(var i=1; i<=9; i++) {
        var index = imgArray.indexOf(i);
    }
     product=document.getElementById("product");
    var divsote = document.createElement("div");
    divsote.setAttribute("id","divG");
    var divsito = document.createElement("div");
    divsito.setAttribute("class","divC");
    var image = document.createElement("img");
    var nuevospan =document.createElement("span");
    nuevospan.setAttribute("class","span");
    var textospan= document.createTextNode("X");
    nuevospan.addEventListener("click",borrar);
    nuevospan.appendChild(textospan);
    
    image.setAttribute("src",index);
    image.setAttribute("class","image");
    divsito.appendChild(image);
    divsito.appendChild(nuevospan);
    divsote.appendChild(divsito);
    product.appendChild(divsote);
}
function borrar() {
    var nuevospan = document.getElementsByClassName("span");
    var divsote = document.getElementById('divG');
    var product=document.getElementById("product");        
    product.removeChild(divsote);
    
}
