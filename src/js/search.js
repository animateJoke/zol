$(function(){
    $(".search1").load("search.html",function(){
        $(".menu").on("mouseenter",function(){
            $(this).find("i").rotate(0,180);
            $(this).find("p").css("borderBottom",0);
            $(this).find("ul").css("display","block")
        });
        $(".menu").on("mouseleave",function(){
            $(this).find("i").rotate(180,0);
            $(this).find("p").css("borderBottom","1px solid #ccc");
            $(this).find("ul").css("display","none")
        });



    })
})