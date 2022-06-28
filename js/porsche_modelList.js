$(document).ready(function(){

  /*###### 카테고리 tab 메뉴 만들기 ######*/
  /*
    문제점 발생

    : 탭을 누르면 해당 영역으로 이동하면서 category 보이지 않고 떨어짐
  
  */
  $("#list > li:not(:first)").hide(); // 첫번째 제외 모두 숨기기
  
  $("#cate li a").bind("click focusin",function(){
    $("#list > li").hide();
    $($(this).attr("href")).show();
  });

  /*###### 카테고리 누르면 강조, 나머지 흐려지기 ######*/

  $("#cate li").click(function(){
    $("#cate li").fadeTo(200,0.4);
    $(this).stop().fadeTo(200,1);
    return false;
  });


  /*###### 버튼 클릭하면 숨긴 부분 드러나기 ######*/

  $("#list li ul .hide").hide();

  $("#modelArea .link").click(function(){
    $("#list li ul .hide").fadeToggle(800,"swing");
  
  });

});
