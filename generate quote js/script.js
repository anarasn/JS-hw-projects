const quote = document.querySelector("#quote")
const quoteContainer = document.querySelector("#quote-container")
const author = document.querySelector("#author")
const nextBtn = document.querySelector("#quote-btn")


async function generateQuote(){
    
    const req = await fetch(`https://api.quotable.io/random`)
    const res = await req.json()
    console.log(res)   
        
        const showQuotes = 
                `<div class="quote-section">
                <h1  id="quote">${res.content} </h1>
                <h2 id="author"> - ${res.author}</h2>
                </div>`
        quoteContainer.innerHTML = showQuotes
    }        

generateQuote()

nextBtn.addEventListener("click", ()=>{
    generateQuote()

})

