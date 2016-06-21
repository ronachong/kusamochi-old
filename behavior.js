document.addEventListener("DOMContentLoaded", function (event) {
    
    var thumbnailElement = document.getElementById("smart_thumbnail"),
        footerElements = document.getElementsByTagName("footer"),
        footer = footerElements[0],
        disqusIcon = document.getElementById("disqusIcon"),
        mainContainer = document.getElementById("mainContainer"),
        hiddenAside = document.getElementById("hiddenAside"),
        previewElements = document.getElementsByClassName("livepreview");
        //div = new Element('div')

    //dynamic footer
    footer.addEventListener("mouseover", function () {
        footer.className = "";
    });
    
    footer.addEventListener("mouseout", function () {
        footer.className = "small";
    });
    
    //hiding/unhiding aside
    disqusIcon.addEventListener("click", function () {        
        if (hiddenAside.className == "hidden") {
            hiddenAside.className = "unhidden";
            mainContainer.className = "collapsed";
        } else {
            hiddenAside.className = "hidden";
            mainContainer.className = "";
        }
    });    
    
    //dynamic image
    thumbnailElement.addEventListener("click", function () {
        if (thumbnailElement.className == "small") {
            thumbnailElement.className = "";
        } else {
            thumbnailElement.className = "small";
        }
    });

    
});