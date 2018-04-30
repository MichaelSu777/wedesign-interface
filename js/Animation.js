var underlineElements;
var underlineContainers;

$(document).ready(function() {
    addAnimation();
});

function addAnimation() {
    underlineElements = document.getElementsByClassName("underline");
    underlineContainers = document.getElementsByClassName("underline-container");

    for (var i = 0; i < underlineElements.length; i++) {
        $(underlineContainers[i]).hover(function() {
            $(this).addClass("showUnderline");
            $(this).removeClass("hideUnderline");
        }, function() {
            $(this).addClass("hideUnderline");
            $(this).removeClass("showUnderline");
        });
    }
}