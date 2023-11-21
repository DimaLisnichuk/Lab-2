// Додайте цей скрипт в ваш файл script.js
document.addEventListener("DOMContentLoaded", function() {
    var scrollButtons = document.querySelectorAll('.nav-desktop a, .btn, .nav-mobile a');

    scrollButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            
            // Прокрутка до елементу з плавністю
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
