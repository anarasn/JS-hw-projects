const time = document.querySelector('.time');
const allBtn = document.querySelectorAll("button");
let seconds = 0;
let interval = null;

allBtn.forEach((item)=>{
    item.addEventListener("click", (el)=>{
        let typeOfBtn = el.currentTarget.classList;
        if(typeOfBtn.contains("start")){
           return start()
        }else if(typeOfBtn.contains("stop")){
           return  stop()
        }else if(typeOfBtn.contains("reset")){
            return reset()
        }
    })

})

function timer(){
    seconds++;
    //Formating time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds-(hrs*3600))/60);
    let secs = seconds % 60;
    if(secs<10) secs = "0" + secs;
    if(mins<10) mins = "0" + mins;
    if(hrs<10) hrs = "0" + hrs;
    time.innerText = `${hrs}:${mins}:${secs}`
}
function start(){
    if(interval){
        return
    }
    interval = setInterval(timer, 1000)
}
function stop(){
    clearInterval(interval);
    interval = null;
}
function reset(){
    stop();
    seconds = 0;
    time.innerText = "00:00:00";
}