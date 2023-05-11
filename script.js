function chocolate(){
    
    const circleColor = document.querySelectorAll(".circle");
    for(var i = 0 ; i<circleColor.length; i++){
        circleColor[i].style.backgroundColor = "#361500";
    }

    const loginbutton = document.querySelector('#loginBtn')
    const getstartedBtn = document.querySelector(".headtext button")
    const spantext = document.querySelector(".headtext span")
    
    loginbutton.style.backgroundColor = "#603601"
    loginbutton.style.color = "#fff"
    getstartedBtn.style.backgroundColor = "#603601";
    spantext.style.color = "#603601";
    const image = document.querySelector('.circle3img img').src = "./Image/Chocolate-Ice-Cream.jpg";
}

function vanila(){

    const circleColor = document.querySelectorAll(".circle");
    for(var i = 0 ; i<circleColor.length; i++){
        circleColor[i].style.backgroundColor = "#FFA931";
    }

    const loginbutton = document.querySelector('#loginBtn')
    const getstartedBtn = document.querySelector(".headtext button")
    const spantext = document.querySelector(".headtext span")
    
    loginbutton.style.backgroundColor = "#FFA931"
    loginbutton.style.color = "#000"
    getstartedBtn.style.backgroundColor = "#FFA931";
    spantext.style.color = "#FFA931";
    const image = document.querySelector('.circle3img img').src = "./Image/vanila.png";
    
}

function strowberry(){

    const circleColor = document.querySelectorAll(".circle");
    for(var i = 0 ; i<circleColor.length; i++){
        circleColor[i].style.backgroundColor = "#F59AA3";
    }

    const loginbutton = document.querySelector('#loginBtn')
    const getstartedBtn = document.querySelector(".headtext button")
    const spantext = document.querySelector(".headtext span")
    
    loginbutton.style.backgroundColor = "#F59AA3"
    getstartedBtn.style.backgroundColor = "#F59AA3";
    spantext.style.color = "#F59AA3";
    const image = document.querySelector('.circle3img img').src = "./Image/Strawberry-IceCream.jpg";
    
}