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
  $("#gnb .menu a").bind("mouseover focus",function(){
    $(".submenu").hide();
    $(this).next().show();
  }).bind("mouseout blur",function(){
    $(".submenu").hide();
  });


  /*스크롤 시 사라지게 하는 기능 만들기
   : 해당 기능은 추후 연구하기
  var docElem = document.documentElement;
  
  window.addEventListener('scroll',function(){  // 스크롤 감지
    var nowScroll = $(document).scrollTop();	// 상단의 스크롤 좌표
    var offs = document.body.getBoundingClientRect().bottom;	// 화면 바닥부터 보여지는 화면 상단의 스크롤 좌표

    console.log(nowScroll);
    console.log(offs);

    if (nowScroll > 300){					// 스크롤
      $("#headerWrap").animate({"top":"-300px"},200,"swing");
      return false;
    }else if(nowScroll < 200){
      $("#headerWrap").css({"top":"-20px"});
      return false;
    }
  });*/




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
      $(this).find("img").attr("src","img/index/stopBtn.png");
      play=false;
      console.log(sel);
    }else{
      sel = setInterval(function(){$(".nextBtn").click();},3000);
      $(this).find("img").attr("src","img/index/playBtn.png");
      play=true;
      console.log(sel);
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
