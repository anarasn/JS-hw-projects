let fav_colors = ["Aqua", "AliceBlue","Aquamarine", "Bisque","DeepPink","MediumAquaMarine", "Plum", "SlateGrey", "Thistle", "RosyBrown", "MintCream", "MistyRose", "Maroon", "LawnGreen"] //list color  
const colorBox = document.querySelector(".color-container")
const simple = document.querySelector("#simple")
const hex = document.querySelector("#hex")
const currentColor = document.querySelector("#current-color")
const changeColorBtn = document.querySelector("#change-color-btn")

let isSimpleOn = true; //

simple.addEventListener('click', ()=>{
    hex.classList.remove("active")
    simple.classList.add("active")
    isSimpleOn = true
})
hex.addEventListener('click', ()=>{
    simple.classList.remove("active")
    hex.classList.add("active")
    isSimpleOn = false
})
function changeBgColor(){
    if(isSimpleOn){
        let randomIndex = Math.floor(Math.random()*fav_colors.length)
        let randomColor = fav_colors[randomIndex]
        colorBox.style.backgroundColor = randomColor
        currentColor.innerText = randomColor
    }else{
        let randomHexColor = '#'+Math.floor(Math.random()*16777215).toString(16)
        colorBox.style.backgroundColor = randomHexColor
        currentColor.innerText = randomHexColor
    }

}
changeColorBtn.addEventListener("click", changeBgColor)





/*simple.addEventListener("click", function(){
  hex.classList.remove("active")
  simple.classList.add("active")
  isSimpleOn=true;
})

hex.addEventListener("click", function(){
  simple.classList.remove("active")
  hex.classList.add("active")
  isSimpleOn=false;
})
function changeBgColor(){
    if(isSimpleOn){ // simple option selected
      let randomIndex = Math.floor(Math.random()*fav_colors.length)
      let randomColor = fav_colors[randomIndex]
      main.style.backgroundColor = randomColor
      span.innerText = randomColor
    }else{
      //random Hex color 
      let randomHexColor = '#'+Math.floor(Math.random()*16777215).toString(16)
      main.style.backgroundColor = randomHexColor
      span.innerText = randomHexColor
    }
   
  }
  
  changeColorBtn.addEventListener("click", changeBgColor)*/
