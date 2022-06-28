/*
  script로 적용할 기능
    1) modal popup
    2) modal에서 슬라이드
    3) select 관련 기능: 색상, 숫자 넣으면 내용 출력
    4) 숫자 변경에 따른 자동 계산
*/

/*########### select ##########*/
// 모델이 선택되면 컬러를 선택하게 하는 기능 
function modelSct(){
  var modelSel = document.getElementById("modelSel"); // 모델 선택 변수
  var colorSel = document.getElementById("colorSel"); // 색상 선택 변수
  if( modelSel.value != "model" ){										
    colorSel.removeAttribute("disabled");		// 모델이 선택되면 color에 걸려있던 disable 속성 삭제 
    item.value = "911 "+modelSel.value+" - "+colorSel.value;
  }
}

/*########### select ##########*/
// 컬러가 선택되면 내용 하단에 출력
function colorSct(){
  if( colorSel.value != "colorSelect"){
    var item = document.getElementById("item");

    if( colorSel.value != "" ){
      // 선택 사항이 모두 선택되면 숨겨놓은 계산 영역 펼치기
      var calArea = document.getElementById("calArea");
      calArea.style.visibility = "visible";


      item.value = "911 "+modelSel.value+" - "+colorSel.value;	  // 선택된 모델과 컬러 하단에 출력
      var price = document.getElementById("price"); // 원래 가격
      var quan = document.getElementById("quan"); // 갯수
      var total = document.getElementById("total"); // 총합
      total.value = quan.value * price.value;  // 자동 총합 계산
    }
  }
}


/*########### select ##########
// 숫자 창에 클릭하면 총합 갱신*/
function total0(){
  total.value = quan.value * price.value;  // number 부분 클릭하면 계산식 갱신
  //console.log(item);
  //console.log(price.value);
}
// 숫자 창에 입력하면 총합 갱신
function total1(){
  total.value = quan.value * price.value;   
}



/*################ jQuery 영역 ################*/
$(function(){
  /*###### main image modal popup ######*/
  $("#view, #full").hide();  // 태그 보이지 않게 하기
          
  // 이미지 클릭하면 팝업 되도록 만들기
  $("#prod_img a").click(function(){
    $("#view").html("<img src=' "+$(this).find('img').attr('src')+" ' alt='image'/>");
    $("#view, #full").show();
    return false;
  });

  $("#full, #view").click(function(){
    $("#full, #view").hide();
  });

  /*########## tab menu ##########*/
  $("#detail .tabCont li:not(:first)").hide(); // 내용 처음빼고 숨김

  $("#detail .tabMenu li a").bind("click focus",function(){
    $("#detail .tabCont li").hide();
    $($(this).attr("href")).show();
    // 상단에 선택한 탭 강조
    $("#detail .tabMenu li a").removeClass();
    $(this).addClass("selected");
    return false;
  });

});
