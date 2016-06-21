document.addEventListener("DOMContentLoaded", function (event) {
    
    $(".morgue-item").mouseover(function () {
        alert('Okay saw you mouseover.');
        var morgueItem = this;
        /*var morgueItemChildren = this.children();
        var morgueItem = this;
        this.children().css("display:", "block");
        var morgueItemChildren = this.children()
        $(".morgue-item").children().css("display:", "block");*/
    });
    
    $(".morgue-item").mouseout(function () {
        alert('Not sure why this isnt working.');
        $(".morgue-item").children().css("display:", "none");
    });
    
});


if (thumbnailElement.className == "small") {
            thumbnailElement.className = "";
        } else {
            thumbnailElement.className = "small";
        }

$( "#container" ).click(function ( event ) {
  $( "*" ).removeClass( "hilite" );
  var kids = $( event.target ).children();
  var len = kids.addClass( "hilite" ).length;
 
  $( "#results span:first" ).text( len );
  $( "#results span:last" ).text( event.target.tagName );
 
  event.preventDefault();
});