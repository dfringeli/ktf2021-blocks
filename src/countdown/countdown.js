jQuery(document).ready(function () {
    var ktf2021CountDown = document.getElementById("ktf2021-countdown");
    if (ktf2021CountDown) {
        var targetDate = ktf2021CountDown.getAttribute("data-datetime");
        var countDownDate = new Date(targetDate).getTime();
        var daysElements = document.getElementsByClassName("ktf2021-countdown-days");
        var hoursElements = document.getElementsByClassName("ktf2021-countdown-hours");
        var minutesElements = document.getElementsByClassName("ktf2021-countdown-minutes");
        var secondsElements = document.getElementsByClassName("ktf2021-countdown-seconds");

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        ktf2021CountDown.classList.remove("d-none");
        ktf2021CountDown.classList.add("d-flex");

        // Set the date we're counting down to
        if (countDownDate - new Date().getTime() > 0) {

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            // Display the result in the element with id="demo"
            daysElements[0].innerHTML = days;
            hoursElements[0].innerHTML = hours;
            minutesElements[0].innerHTML = minutes;
            secondsElements[0].innerHTML = seconds;

            // Update the count down every 1 second
            var x = setInterval(function () {
                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                daysElements[0].innerHTML = days;
                hoursElements[0].innerHTML = hours;
                minutesElements[0].innerHTML = minutes;
                secondsElements[0].innerHTML = seconds;

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(x);
                    countdownExpired();
                }
            }, 1000);
        } else {
            countdownExpired();
        }
    }
});

function countdownExpired() {
    var countdownImages = document.getElementsByClassName("ktf2021-countdown-image");
    console.log(countdownImages);
    if (countdownImages && countdownImages.length === 1) {
        var daysElements = document.getElementsByClassName("ktf2021-countdown-days");
        var hoursElements = document.getElementsByClassName("ktf2021-countdown-hours");
        var minutesElements = document.getElementsByClassName("ktf2021-countdown-minutes");
        var secondsElements = document.getElementsByClassName("ktf2021-countdown-seconds");
        daysElements[0].innerHTML = 0;
        hoursElements[0].innerHTML = 0;
        minutesElements[0].innerHTML = 0;
        secondsElements[0].innerHTML = 0;
        countdownImages[0].classList.remove("d-none");
    }
}