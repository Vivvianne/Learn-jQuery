jQuery(document).ready(function() {
    jQuery("h1").click(function() {
        alert("This is a header.");

    });
    jQuery("p").click(function() {
        alert("This is a paragraph.");
    });
    jQuery("img").click(function() {
        alert("This is an image.");
    })

    $('cipher').clicked(function(){
        var input = prompt('string you want ciphered');

        var capitaliseFirstLastReversed = function(string){
            var capsFirst = string.charAt(0).toUpperCase();
            var capsLast = string.charAt((string.length -1)).toUpperCase();
            return capsLast + capsFirst;
        }

        var originalPlusReversedChar = function(string){
            var reversedFirstLast = capitaliseFirstLastReversed(string);
        }


    });


})