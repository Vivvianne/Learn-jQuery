
    $(document).ready(function() {
        $("p").click(function() {
        $("img").show();
    });
    });

    $(document).ready(function(){
        $("#bbee").click(function(){
            $("#beeimg").toggleClass('bbeeimg');
            // $(".bumble_bee-hidden").hide();
        });
    });
    $(document).ready(function(){
        $("p").click(function(){
            $(".bumble_bee-showing").toggle();
            $(".bumble_bee-hidden").toggle();
        })
    })