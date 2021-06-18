const kbds = document.querySelectorAll("kbd");
const body = document.body;//ligne a garder, ca permet de selectionner tout le body


Array.prototype.forEach.call(kbds, element =>
     element.addEventListener("click",
        function (event) {
            var letter = event.target.textContent;
            document.getElementById(letter).play();
        }));

        body.addEventListener("keydown",
        function (event) {
            var key = event.key.toUpperCase();
            document.getElementById(key).play();
            var kbd = document.querySelector("." + key);
            kbd.parentElement.classList.toggle("playing");
            setTimeout (function () {kbd.parentElement.classList.toggle("playing");}, 2000);
        });