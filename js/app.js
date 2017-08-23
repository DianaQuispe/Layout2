
var imgArray= Array.from(document.getElementsByClassName("imagenes"));
  var images = ["../assets/images/img-1.jpg", "../assets/images/img-2.jpg", "../assets/images/img-3.jpg", "../assets/images/img-4.jpg", "../assets/images/img-5.jpg", "../assets/images/img-6.jpg", "../assets/images/img-7.jpg", "../assets/images/img-8.jpg", "../assets/images/img-9.jpg"];
var product=document.getElementById("product");
imgArray.forEach(function(img) {
    img.addEventListener("click",agregar);

});
    var images = ["../assets/images/img-1.jpg", "../assets/images/img-2.jpg", "../assets/images/img-3.jpg", "../assets/images/img-4.jpg", "../assets/images/img-5.jpg", "../assets/images/img-6.jpg", "../assets/images/img-7.jpg", "../assets/images/img-8.jpg", "../assets/images/img-9.jpg"];

     for(var i=0; i<images.length; i++) {
        var index = images[i];
   var image = document.createElement("img");
         image.setAttribute(index);
    }
function agregar() {
    var index;


     product=document.getElementById("product");
    var divsote = document.createElement("div");
    divsote.setAttribute("id","divG");
    var divsito = document.createElement("div");
    divsito.setAttribute("class","divC");

    var nuevospan =document.createElement("span");
    nuevospan.setAttribute("class","span");
    var textospan= document.createTextNode("X");
    nuevospan.addEventListener("click",borrar);
    nuevospan.appendChild(textospan);

    image.setAttribute("src","../assets/images/img-"+i+".jpg");
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
