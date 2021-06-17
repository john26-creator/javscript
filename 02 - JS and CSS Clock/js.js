
    function updateClock() {
      var date = new Date ();
      var currentDateHours = date.getHours();
      if (currentDateHours>12) {currentDateHours -= 12;}
      var currentDateMinutes = date.getMinutes();
      var currentDateSeconds = date.getSeconds();

      var second = document.querySelector(".second-hand");
      var minutes = document.querySelector(".min-hand");
      var hours = document.querySelector(".hour-hand");
      
      var degreesToAddToSeconds = Math.round(90 + (360/60) * (currentDateSeconds));
      var degreesToAddToMinutes = Math.round(90 + (360/60) * (currentDateMinutes)) ;
      var degreesToAddToHours = Math.round(90 + (360/12) * (currentDateHours)) ;

      second.style = 'transform:rotate(' + degreesToAddToSeconds + 'deg);transform-origin:bottom right';
      minutes.style = 'transform:rotate(' + degreesToAddToMinutes + 'deg);transform-origin:bottom right';
      hours.style = 'transform:rotate(' + degreesToAddToHours + 'deg);transform-origin:bottom right';

    }


    var id = setInterval(updateClock,1000);
    //clearInterval(id)
