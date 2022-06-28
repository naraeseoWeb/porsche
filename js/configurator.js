$(document).ready(function(){
  
  /*#### mainImg 와 config 높이 맞추기####
    var mW = $("#main").height();
    $("#config").css("height",+mW+"px");

  $(window).resize(function(){
    var mW = $("#main").height();
    $("#config").css("height",+mW+"px");
  }); 로딩 시 안불러와지는 현생 발생*/


  /*##### navigation 클릭하면 강조 효과 #####*/
  $("#configNav li a").click(function(){
    $("#configNav li a").removeClass();
    $(this).addClass("sel");
  });
  // 하단의 이미지 기능 클릭 하면 위에 메뉴 강조

  // #ext, .ext 클릭하면 상단의 메뉴 강조
  /*
    대상: #config 영역의 n번째 dt, dd
    이벤트: click 
    이벤트 핸들러: #configNav ul의 n번째 li가 강조

    var num = $("#config dd:eq(1)");
    num.css({"backgroundColor":"red"});
    console.log(num);
  */

  /*##### 제목 dt 클릭하면 아래부분 열리는 기능(열렸다 닫혔다 가능) #####*/
  $("#config dt").click(function(){
    $(this).find("span").toggleClass("hide");
    $(this).next().stop().slideToggle(500,"swing");

  });

  /*##### navigation 클릭하면 내용 열리는 기능 #####*/
  /*다시 닫히지는 않고 열리기만 가능하도록 만듦*/
  $("#configNav li a").bind("click focusin",function(){
    $($(this).attr("href")).next().stop().slideDown();
    $($(this).attr("href")).find("span").removeClass("hide");
  });
  
  /*##### exerior color 클릭 시 색상 커지게 하기 #####*/
  $("#config .ext li, #config .int li").click(function(){
    $("#config li").css({"transform":"scale(1)","boxShadow":"none"});
    $(this).css({"transform":"scale(1.1)","boxShadow":"4px 4px 4px #ccc"});				
  });

  /*##### wheel 클릭 시 이미지 커지게 하기 #####*/
  $("#config .wheel li").click(function(){
    $("#config .wheel li").css({"transform":"scale(1)"});
    $(this).css({"transform":"scale(1.2)"});			
  });



  /*###### 색상 클릭 시 메인 이미지 변경 ######*/
  // 너무 복잡해서 추후에 변경이 필요함 
  // (내부 각 항목에 줄에 따라 영역이 달라 나뉘어짐)
  $("#config .mainInt").hide();

  $("#config .stan li").click(function(){
    $("#main .mainInt").hide();
    var num = $(this).index();
    $("#main .mainImg").show().attr("src","../img/config/body/stan"+num+".jpg");
    return false;	
  });
  $("#config .meta li").click(function(){
    $("#main .mainInt").hide();
    var num = $(this).index();
    $("#main .mainImg").show().attr("src","../img/config/body/meta"+num+".jpg");
    return false;	
  });
  $("#config .spec li").click(function(){
    $("#main .mainInt").hide();
    var num = $(this).index();
    $("#main .mainImg").show().attr("src","../img/config/body/spec"+num+".jpg");
    return false;	
  });

  /*###### 휠 클릭 시 메인 이미지 변경 ######*/
  $("#config .wheel li").click(function(){
    $("#main .mainInt").hide();
    var num = $(this).index();
    $("#main .layer1").find("img").show().attr("src","../img/config/wheel/whel"+num+".png")
  }); 
  
  /*###### 내부 사진 색상 클릭 시 메인 이미지 변경 (layer2)######*/
  $("#config .intS li").click(function(){		
    var num = $(this).index();
    $("#main .mainInt").show().attr("src","../img/config/int/intS"+num+".jpg");
  });
  $("#config .intL li").click(function(){
    var num = $(this).index();
    $("#main .mainInt").show().attr("src","../img/config/int/intL"+num+".jpg");
  });

  $("#config .intC li").click(function(){
    var num = $(this).index();
    $("#main .mainInt").show().attr("src","../img/config/int/intC"+num+".jpg");

  });


  /*###### 메인 이미지 modal 팝업 ######
  $("body").append('<div id="full"></div><div id="view"></div>');
  $("#full, #view").hide();
  
  $("#main").click(function(){
    $("#view").html('<img src=" '+$(this).find('img').attr('src')+' " alt="image"/>');
    $("#full, #view").show();

  });

  $("#full, #view").click(function(){
    $("#full, #view").hide();
  });*/




  
});
