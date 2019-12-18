const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
//Dec 24, 2019 18:00:00
let countDown = new Date('Dec 24, 2019 18:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        document.getElementById("message").innerHTML = "";
        document.getElementById("description_D").innerHTML = "Dní";
        document.getElementById("description_H").innerHTML = "Hodín";
        document.getElementById("description_M").innerHTML = "Minút";
        document.getElementById("description_S").innerHTML = "Sekúnd";
      
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("message").innerHTML = "";
        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("minutes").innerHTML = "";
        document.getElementById("seconds").innerHTML = "";
        document.getElementById("description_D").innerHTML = "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎";
        document.getElementById("description_H").innerHTML = "Veselé Vianoce";
        document.getElementById("description_M").innerHTML = "";
        document.getElementById("description_S").innerHTML = "";
        document.getElementById("head").innerHTML = " ";
        if (document.getElementById("otvor_darcek") != null) {
              document.getElementById('otvor_darcek').style.display = 'block';
          }
      }

    }, second)


    function showTimer() {
        if (document.getElementById("container") != null) {
          setTimeout(function() {
            document.getElementById('container').style.display = 'block';
          }, 1000);
        }
      }
      
      showTimer();