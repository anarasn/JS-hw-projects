const typeWord = document.querySelector("#typeWord")
const resNum = document.querySelector("#output")
const wordLengthBtn = document.querySelector("#wordLength")

wordLengthBtn.addEventListener('click', ()=>{
    let word = typeWord.value;
    let count = word.length
    resNum.innerHTML = count
 })



