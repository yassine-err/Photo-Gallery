function upDate(previewPic) {
    console.log("Événement de survol déclenché");
    console.log("Source de l'image :", previewPic.src);
    console.log("Texte alternatif :", previewPic.alt);

    
    document.getElementById('image').innerHTML = previewPic.alt;

   
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
   
    document.getElementById('image').style.backgroundImage = "url('')";

   
    document.getElementById('image').innerHTML = "Survolez une image ci-dessous pour l'afficher ici";
}
