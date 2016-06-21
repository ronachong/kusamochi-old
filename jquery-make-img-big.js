document.addEventListener("DOMContentLoaded", function (event) {
    
    var collapseDoodling = document.getElementById("1"),
        collapseFormalWork = document.getElementById("3"),
        collapseGraphicDesign = document.getElementById("4"),
        collapseVideo = document.getElementById("5"),
        doodlingImages = document.getElementById("doodling"),
        formalWorkImages = document.getElementById("more-formal-work"),
        graphicDesignImages = document.getElementById("graphic-design"),
        video = document.getElementById("video");
    
    $(".gallery").click(function (event) {
        if (this.className === "gallery") {
            $(this).addClass("big");
        } else {
            $(this).removeClass("big");
        }
        
    });
    
    collapseDoodling.addEventListener("click", function () {
        if (doodlingImages.className === "nodisplay") {
            doodlingImages.className = "display";
        } else {
            doodlingImages.className = "nodisplay";
        }
        
    });
    
    collapseFormalWork.addEventListener("click", function () {
        if (formalWorkImages.className === "nodisplay") {
            formalWorkImages.className = "display";
        } else {
            formalWorkImages.className = "nodisplay";
        }
        
    });
    
    collapseGraphicDesign.addEventListener("click", function () {
        if (graphicDesignImages.className === "nodisplay") {
            graphicDesignImages.className = "display";
        } else {
            graphicDesignImages.className = "nodisplay";
        }
        
    });
    
    collapseVideo.addEventListener("click", function () {
        if (video.className === "nodisplay") {
            video.className = "display";
        } else {
            video.className = "nodisplay";
        }
        
    });
    
});

/*
{
        if (thumbnailElement.className == "small") {
            thumbnailElement.className = "";
        } else {
            thumbnailElement.className = "small";
        }
    });*/