function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function close() {
    let x = document.getElementByTd("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}

$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu, .main-ul').toggleClass('active');
    });
});





// function first() {

//     document.getElementById("text1").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

//     document.getElementById("first").setAttribute("style", "display: none");

//     document.getElementById("close1").setAttribute("style", "display: block");

// }

// function first_yelloy() {

//     document.getElementById("text1").setAttribute("style", "display: none");

//     document.getElementById("close1").setAttribute("style", "display: none");

//     document.getElementById("first").setAttribute("style", "display: block");

// }

// function second() {
//     document.getElementById("text2").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

//     document.getElementById("second").setAttribute("style", "display: none");

//     document.getElementById("button2").setAttribute("style", "display: block");
// }

// function second_yelloy() {

//     document.getElementById("text2").setAttribute("style", "display: none");

//     document.getElementById("second").setAttribute("style", "display: none");

//     document.getElementById("button2").setAttribute("style", "display: block");

// }



// document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодейтсвию

//     const mobile = () => { // объявляем основную функцию, чтобы вся логика мобильной навигации находилась в одном месте

//         const menu = document.querySelector('.burger-menu') // находим кнопку Menu
//         const mobile = document.querySelector('.main-ul') // находим блок мобильной навигации

//         menu.addEventListener('click', () => { // при клике на кнопку Menu
//             mobile.classList.toggle('mobile_active') // показываем/скрываем навигацию, добавляя/удаляя класс mobile_active со свойством display: bloсk;
//         })

//     }

//     mobile() // вызываем основную функцию

// })