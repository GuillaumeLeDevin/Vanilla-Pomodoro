const displayWork = document.querySelector(".displayW");
const displayPause = document.querySelector(".displayP");
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2');

let initialTime = 1800;
let restTime = 300;
let pause = false;
let cyclesNumber = 0;
let checkInterval = false;

cycles.innerText = `Cycles number ${cyclesNumber}`;
displayWork.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`;
displayPause.innerText = `${Math.trunc(restTime/60)} : ${(restTime % 60 < 10) ? `0${restTime % 60}` : restTime % 60}`;

btnGo.addEventListener('click', () => {

    if(checkInterval === false) {
        checkInterval = true;

        initialTime--;
        displayWork.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`;

        let timer = setInterval(() => {

            if(initialTime > 0 && pause === false){

                initialTime--;
                displayWork.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`;
            
            } else if(initialTime === 0 && restTime > 0 && pause === false) {
            
                restTime--;
                displayPause.innerText = `${Math.trunc(restTime/60)} : ${(restTime % 60 < 10) ? `0${restTime % 60}` : restTime % 60}`;

            } else if(restTime === 0 && initialTime ===0 && pause === false) {

                initialTime = 1800;
                restTime = 300;
                cyclesNumber++;
                cycles.innerText = `Cycles number ${cyclesNumber}`;
                displayWork.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`;
                displayPause.innerText = `${Math.trunc(restTime/60)} : ${(restTime % 60 < 10) ? `0${restTime % 60}` : restTime % 60}`;

            }

        }, 1000)

        //Reset
        btnReset.addEventListener('click', () => {

            clearInterval(timer);
            checkInterval = false;
            initialTime = 1800;
            restTime = 300;
            displayWork.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`;
            displayPause.innerText = `${Math.trunc(restTime/60)} : ${(restTime % 60 < 10) ? `0${restTime % 60}` : restTime % 60}`;
        
        })

    } else {
        return;
    }

})

btnPause.addEventListener('click', () => {

    if(pause === false){
        btnPause.innerText = "Play";
    } else {
        btnPause.innerText = "Pause";
    }
    pause = !pause;
})
