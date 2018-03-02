$(function(){
    $(".slide_aside").load("aside.html",function(){
        //侧边栏
        (function(){
            $(".slide_aside").css("height",$(window).height());
            $(window).on("resize",function(){
                $(".slide_aside").css("height",$(window).height())
            });
            $(".slide_aside .top").on("click",function(){
                $.scrollTarget(0)
            })
            $(".slide_aside ul li a").on("mouseenter",function(){
                $(this).siblings().stop().scaleX(0,1);
            }).on("mouseleave",function(){
                $(this).siblings().stop().scaleX(1,0);
            })
        })()
    })
});