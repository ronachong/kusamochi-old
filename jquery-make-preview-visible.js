document.addEventListener("DOMContentLoaded", function (event) {
    
    $(".iframe-overlay").mouseover(function () {
        $(this).css('opacity', '0.5');
    });
    
    $(".iframe-overlay").mouseout(function () {
        $(this).css('opacity', '1.0');
    });
    
});


