function change()
{
    var num = 1;
    setInterval(function(){
        var t = Math.ceil(Math.random()*14);
        while(t==num) t = Math.ceil(Math.random()*14);
        num = t;
        $("#loveBox").attr("src",num+".png");
    }, 100);
}
$(document).ready(function(){
    $("#play").click(function(){
        $(this).addClass("rotate");
        setTimeout(function(){
            $("#play").remove();
            $("#titleBox").append("<h1 id=\"title\">Happy one month Lindsay!</h1>");
            setTimeout(function(){
                $("#titleBox").append("<h1 id=\"line1\">I didn't really know what to put on this website.</h1>");
                setTimeout(function(){
                    $("#titleBox").append("<h1 id=\"line2\">But at the end of the day,</h1>");
                    setTimeout(function(){
                        $("#titleBox").append("<h1 id=\"line3\">I want you to know...</h1>");
                        setTimeout(function(){
                            $("#titleBox").append("<h1 id=\"line4\">I love you!!!</h1>");
                            $("#song")[0].play();
                            setTimeout(function(){
                                $("h1").fadeOut("slow",function(){});
                                setTimeout(function(){
                                    $("h1").remove();
                                    $("#titleBox").append("<img id=\"loveBox\" src=\"1.png\" />");
                                    change();
                                },2000);
                            },2000);
                        },2000);
                    },2000);
                },2000);
            },2000);
        }, 1000);
    });
});