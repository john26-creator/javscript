const audioElements = document.querySelectorAll("kbd");
const body = document.getElementsByTagName("body")[0];//ligne a garder, ca permet de selectionner tout le body


Array.prototype.forEach.call(audioElements, element =>
     element.addEventListener("click",
        function (event) {
            var letter = event.target.textContent;
            document.getElementById(letter).play();
        }));

        body.addEventListener("keydown",
        function (event) {
            var key = event.key.toUpperCase();
            document.getElementById(key).play();
        });