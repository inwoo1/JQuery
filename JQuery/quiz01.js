//제이쿼리 코드 작성
//js링크가 먼저 일어남 , 레디 
$(document).ready(function() {

    $("#dark").click(function() {
        if($("#dark").hasClass("dark1")){
            $("#dark").html("밝게보기");
            $("body").css("backgroundColor", "black");
            $(".white1").css("color", "white");
            $("#dark").addClass("white");
            $("#dark").removeClass("dark1");

        } else if($("#dark").hasClass("white")) {
            $("#dark").html("어둡게보기");
            $("body").css("backgroundColor", "white");
            $(".white1").css("color", "black");
            $("#dark").addClass("dark1");
            $("#dark").removeClass("white");
        }

    })

    $("#name").click(function() {
        if($("#name").hasClass("name1")){
            $("#name").html("내용보기");
            $("#name").addClass("name2");
            $("#name").removeClass("name1");
            $(".inner > p").html("홍길자<br>20세<br>능력단위<br>Java, Oricle, JSP, CSS, Javascript");
            $(".inner > a").html("");
            
  

        } else if ($("#name").hasClass("name2")){
            $("#name").html("이름보기");
            $("#name").addClass("name1");
            $("#name").removeClass("name2");
            $(".inner > p").html("자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다");
            $(".inner > a").html("위키백과");
            


        }


    })


});