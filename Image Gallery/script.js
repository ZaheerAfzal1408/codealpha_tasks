var modal = document.getElementById("modal");

var modalImg = document.getElementById("modal-img");
var images = document.querySelectorAll(".image-card img");

images.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
