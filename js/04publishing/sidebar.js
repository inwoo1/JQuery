//사이드 js 링크시 바디보다 위에있기때문에 null값이 나옴
//2가지 방법
//1. window.onload
//2. 링크를 html코드 밑에다가 적용시키기

window.onload = function() {
    var menuBtn = document.querySelector(".menuBtn");

    menuBtn.onclick = function() {

        var sideWidth = document.querySelector(".side");
        
        if(sideWidth.style.width == '200px') {
            sideWidth.style.width = "0px";
        }else {
            sideWidth.style.width = "200px";
        }

    }
}
