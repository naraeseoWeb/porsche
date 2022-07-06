$(document).ready(function(){
  /*############# [mobNav] #############*/
  // movNav 메뉴 열기
  $("#mobHeader p").click(function(){
    $("#mobNavArea").animate({"right":"0"},300,"linear");
    $("#mobNav_deem").show();
    $("#mobNav .close").show();
  });			

  // movNav 메뉴 접기
  $("#mobNav .close").click(function(){
    $("#mobNavArea").animate({"right":"-500px"},200,"linear");
    $("#mobNav_deem").hide();
    $("#mobNav .close").hide();
  });

  // movNav 안의 메뉴 열리게 하기
  $("#gnbMob .title").click(function(){
    $("#gnbMob li ul").slideUp(300,"swing")
    $(this).find("span").toggleClass("hide");
    $(this).next().stop().slideToggle(300,"swing");
    
  });

  /*############# [header / gnb] #############*/
  // header hover 시 내려오는 기능
  /*	
    대상: #gnb .menu h3
    이벤트: 마우스 호버
    이벤트 핸들러: find .submenu
  */
  // 과거 버전 
  $("#gnb .menu").mouseover(function(){
    $(".submenu").hide();
    $(this).find(".submenu").show();
  }).mouseout(function(){
    $(".submenu").hide();
  });
  
  /* 추후 수정
  $("#gnb .menu a").bind("mouseover focus",function(){
    $(".submenu").hide();
    $(this).next().show();
  });
  $("#gnb .menu").bind("mouseout blur",function(){
    $(".submenu").hide();
  });
  */
  // !문제점 발생: tab 기능 추가 시 a를 선택해야 하는데 a 태그 에서 벗어나면 메뉴가 닫힘
  // 일단은 과거 버전으로 reset 함


  /*############# [visual 부분 이미지 sliding] #############*/
    /*
      sliding button					
      대상:#btnArea .prevBtn, 이벤트: click, 이벤트 핸들러: #visual의 ul
    */
    $("#visual ul").prepend($(".slide:last"));
    $("#visual ul").css({"marginLeft":"-100%"});			

    $("#visual .btnArea .nextBtn").click(function(){
      $("#visual ul").animate({"marginLeft":"-=100%"},500,"swing",function(){			
          $("#visual ul").append( $(".slide:eq(0)") );
          $("#visual ul").css({"marginLeft":"-100%"});
      });
    });	
    
    $("#visual .btnArea .prevBtn").click(function(){
      $("#visual ul").animate({"marginLeft":"+=100%"},500,"swing",function(){			
          $("#visual ul").prepend( $(".slide:last") );
          $("#visual ul").css({"marginLeft":"-100%"});
      });
    });
  
  // 자동 슬라이딩
  var sel = setInterval(function(){$(".nextBtn").click();},3000);

  var play = true;
  
  $("#visual .btnArea .playBtn").click(function(){
    if(play==true){
      clearInterval(sel);
      $(this).find("img").attr("src","img/index/playBtn.png");
      play=false;
      //console.log(sel);
    }else{
      sel = setInterval(function(){$(".nextBtn").click();},3000);
      $(this).find("img").attr("src","img/index/stopBtn.png");
      play=true;
      //console.log(sel);
    }
  });
  
  
  /*############# [visual에서 아래로 내려가는 효과] #############*/
    $("#visual .scroll a").bind("click focus", function(){
      var goDown = $("#modelArea").offset().top;
      $("body, html").animate({scrollTop:goDown},800);
    });


  /*##### [craft 영역 mouseover, focus로 사진 올리기] #######*/
    $("#craftArea").mouseover(function(){
      $("#craft .cate, #craft h3, #craft .desc").css({"opacity":"1"});
      $("#craft .more").css({"transform":"translatey(0)"});
      $("#craft .imgArea li").css({"transform":"translatex(0)"});
    });
    
  /*####### [subvisual 글씨 이동] ######*/				
  $("#subvisualArea").mouseover(function(){
    $(this).find("h3, p").css({"marginLeft":"0","opacity":"1"});
  });


  /*############# [footer 부분 메뉴 열리게 만들기] #############*/		
    $("#sitemap dt").click(function(){
      $("#sitemap dd").slideUp(300,"swing");
      $(this).siblings().stop().slideToggle(300,"swing");	
    });


});
