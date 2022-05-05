$(".content1 img").click(function(){
    var img = $(this).attr("src");
    $(".content1 .bk").addClass("shadow");
    $(".content1 .window").css("background-image","url(" + img + ")");
    $(".content1 .window").fadeIn(300);
});

$(".content1 .bk").click(function(){
    $(".content1 .bk").removeClass("shadow");
    $(".content1 .window").fadeOut(300);
});

$(".content2 .tab1").click(function(){
    $(this).addClass("tab-show");
    $(this).siblings().removeClass("tab-show");
    $(".content2 .con1").addClass("con-show");
    $(".content2 .con1").siblings().removeClass("con-show");
});

$(".content2 .tab2").click(function(){
    $(this).addClass("tab-show");
    $(this).siblings().removeClass("tab-show");
    $(".content2 .con2").addClass("con-show");
    $(".content2 .con2").siblings().removeClass("con-show");
});

$(".content2 .tab3").click(function(){
    $(this).addClass("tab-show");
    $(this).siblings().removeClass("tab-show");
    $(".content2 .con3").addClass("con-show");
    $(".content2 .con3").siblings().removeClass("con-show");
});

var num =1;
$(".content3 button").click(function(){
    if(num<6){
        var data = '<div class="list"> <div class="no">'+ (++num) +'</div>  <div class="del">Delete</div> </div>';
        $(".content3 .data").append(data);
    }
    else
        alert("超过最大数量");
});

$('.content3').on('click', '.del', (e) => {
    Delete(e);
  })

function Delete(e) {
    var t = e.currentTarget;
    $(t).parent().remove();
    num --;
    for(var i=0;i<num;i++)
        $(".no").eq(i).text(i+1);
}