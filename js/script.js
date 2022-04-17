const navbar = document.querySelector(".navbar");
window.onscroll=function(){
    if (scrollY>10){
        navbar.setAttribute("style","background-color:#23272a")
    }
    else{
        navbar.setAttribute("style","background-color:none")
    }
}