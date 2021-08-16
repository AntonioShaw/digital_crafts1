//h1 element
const stockQuoteHeading = document.getElementById("stockQuoteHeading")


//the code below should be inside a button click
//inside the button click you will get the value of the textbox
window.setInterval(function() {

    const result = getStockQuote('APLE')
    stockQuoteHeading.innerText = result.price
    console.log(result)

}, 3000)