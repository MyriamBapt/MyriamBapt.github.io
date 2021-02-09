let tableauImages = ["img/pixel-stagiaire.png","img/pixel-discuss.png","img/pixel-merci.png"]
let i =0;

function next() {
    let image = document.getElementById("pixelimage");

    if(i<3) {

    image.setAttribute("src", tableauImages[i])
    i++
        if(i==2){
            document.getElementById("hiddenbutton").removeAttribute("hidden")
        //$('#hiddenbutton').removeAttribute('hidden')
        }
}
else{
    i = 2;
    image.setAttribute("src", tableauImages[i])

}
    }


$(document).mouseleave(function(){
    document.getElementById("pixelimage").setAttribute("src", "img/pixel-byebye.png")
})



