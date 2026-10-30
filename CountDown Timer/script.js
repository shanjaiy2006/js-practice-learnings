let timeLeft = 0;
let originalTime = 0;
let timerId = null;

function showTime() {
    let display = document.getElementById("display");
    let minutes = Math.floor(timeLeft/60);
    let seconds = Math.floor(timeLeft%60);
    display.textContent = String(minutes).padStart(2,"00") + ":" + 
    String(seconds).padStart(2,"00");

}

function startBtn() {

    const message = document.getElementById("message");
    if(timerId !== null) {
        return;
    }

    if(timeLeft == 0) {
        const input = Number(document.getElementById("seconds").value.trim());

        if(input <= 0 || !Number.isFinite(input) || !Number.isInteger(input)) {
            message.textContent = "Please a positive whole number!";
            return;
        }

        timeLeft = input;
        originalTime = input;
        showTime();
    }

    timerId = setInterval(function(){
        timeLeft--;
        showTime();
        if(timeLeft == 0){
            clearInterval(timerId);
            timerId = null;
            message.textContent = "Timer is Up!";
        }
    },1000);

    
}
function pauseBtn() {
        if(timerId!==null) {
            clearInterval(timerId);
            timerId = null;
        }       
    }

    function resetBtn() {
        if(timerId!==null) {
            clearInterval(timerId);
            timerId = null;
        }  

        message.textContent = "";
        timeLeft = originalTime;
        showTime();
    }