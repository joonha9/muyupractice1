//네비게이션 버튼 자바//
const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');

});
//네이게이션 자바 끝//



imgslide(); //페이지가 로딩될때 함수를 실행합니다

function imgslide(){

  $val = $("#slide").attr("val"); //현재 이미지 번호를 가져옵니다

  $mx = $("#slide").attr("mx"); //총 이미지 개수를 가져옵니다

	$("#img"+$val).hide(); //현재 이미지를 사라지게 합니다.

	if( $val == $mx ){ $val = 1; } //현재이미지가 마지막 번호라면 1번으로 되돌립니다.

	else{ $val++; } //마지막 번호가 아니라면 카운트를 증가시켜줍니다

	$("#img"+$val).fadeIn(500); //변경된 번호의 이미지영역을 나타나게 합니다.괄호 안에 숫자는 페이드인 되는 시간을 나타냅니다.

	$("#slide").attr('val',$val); //변경된 이미지영역의 번호를 부여합니다.

	setTimeout('imgslide()',5500); //1초 뒤에 다시 함수를 호출합니다.(숫자값 1000당 1초)

}



var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ //한문장이끝나면
     //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
     if(liIndex>=liLength-1){
       liIndex=0;
     }else{
       liIndex++; 
     }
     
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
         setTimeout(function(){
            $(".typing").html('');
           tyInt = setInterval(typing,100);
         },2500);
    } 
}  

// 3개 아이콘 움직이는 거


$( '#show1' ).click(function() {
  $( ".specinfo1 span" ).slideToggle( "slow" );
});
$( '#show2' ).click(function() {
  $( ".specinfo2 span" ).slideToggle( "slow" );
});
$( '#show3' ).click(function() {
  $( ".specinfo3 span" ).slideToggle( "slow" );
});



function dis1(){
  if($('#dis1').css('display') == 'none'){
  $('#dis1').show();
}else{
  $('#dis1').hide();
}
}


function dis2(){
  if($('#dis2').css('display') == 'none'){
  $('#dis2').show();
}else{
  $('#dis2').hide();
}
}

function dis3(){
  if($('#dis3').css('display') == 'none'){
  $('#dis3').show();
}else{
  $('#dis3').hide();
}
}