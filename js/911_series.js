$(document).ready(function(){
  
    /*##### visual 영역에서 sliding 버튼 제어 (다음 버튼)#####*/
    var count = 0;		// 갯수 세어주는 역할 		

    $("#visual .btnArea .nextBtn").click(function(){

      if( count == 0 ){
        $("#visual ul").animate({"marginLeft":"-=50%"},500,"swing");
        $("#visual .more").fadeTo(200,0).fadeTo(500,1);
        $("#visual .btnArea .prevBtn").show();
        count = 1;
      }else if( count == 1 || count == 2 ){
        $("#visual ul").animate({"marginLeft":"-=50%"},500,"swing");
        $("#visual .more").fadeTo(200,0).fadeTo(500,1);
        count++;
      }else if( count == 3){
        $("#visual ul").animate({"marginLeft":"-=50%"},500,"swing");
        $("#visual .more").fadeTo(200,0).fadeTo(500,1);
        count++;
        $(this).hide();
      }
      //console.log(count);

    });

    /*##### visual 영역에서 sliding 버튼 제어 (이전 버튼)#####*/
    $("#visual .btnArea .prevBtn").hide();

    $("#visual .btnArea .prevBtn").click(function(){
      $("#visual .btnArea .nextBtn").show(); // 누르면 무조건 보임

      if( count == 1 ){
        $("#visual .btnArea .prevBtn").hide();
        $("#visual ul").animate({"marginLeft":"+=50%"},500,"swing");
        $("#visual .more").fadeTo(200,0).fadeTo(500,1);
        count--;
      }else{
        $("#visual ul").animate({"marginLeft":"+=50%"},500,"swing");
        $("#visual .more").fadeTo(200,0).fadeTo(500,1);
        count--;
      }
      //console.log(count);

    });	



  /*##### 콘텐츠 내비게이션 이동 기능 #####*/
  // li를 클릭하면 (tab하면) 영역만큼 떨어짐 
  $("#contNav li:eq(0)").bind("click focus",function(){
    var area0 = $(".area0").offset().top;
    $("body, html").stop().animate({scrollTop:area0},500);
  });

  $("#contNav li:eq(1)").bind("click focus",function(){
    var area0 = $(".area1").offset().top-40;
    $("body, html").stop().animate({scrollTop:area0},500);
  });

  $("#contNav li:eq(2)").bind("click focus",function(){
    var area0 = $(".area2").offset().top-40;
    $("body, html").stop().animate({scrollTop:area0},500);
  });

  $("#contNav li:eq(3)").bind("click focus",function(){
    var area0 = $(".area3").offset().top-40;
    $("body, html").stop().animate({scrollTop:area0},500);
  });

  $("#contNav li:eq(4)").bind("click focus",function(){
    var area0 = $(".area4").offset().top-40;
    $("body, html").stop().animate({scrollTop:area0},500);
  });

  $("#contNav li:eq(5)").bind("click focus",function(){
    var area0 = $(".area5").offset().top-40;
    $("body, html").stop().animate({scrollTop:area0},500);
  });

  $("#contNav li:eq(6)").bind("click focus",function(){
    var area0 = $(".area6").offset().top-40;
    $("body, html").stop().animate({scrollTop:area0},500);
  });

  
  /*##### 콘텐츠 내비게이션 sticky 효과#####*/
  
  $(window).scroll(function(){
    var contNav = $("#contNav");
    var headerH = $("#headerWrap").height() + $("#visual").height(); // header의 전체 높이값
    var nowScroll = $(document).scrollTop();   // 현재 scroll의 좌표

    if ( headerH <= nowScroll ){
      contNav.addClass("fixed");
    }else{
      contNav.removeClass("fixed");
    }
    //console.log(nowScroll);
    //console.log(headerH);
  });


  /*##### design에서 글씨 보여지기 #####*/
  $("#design div").mouseover(function(){
    $(this).find("h3, .desc, .more").css({"marginLeft":"0","opacity":"1"});
  });


});