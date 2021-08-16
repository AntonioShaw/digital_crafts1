const factUL = document.getElementById("factsUL")
let request = new XMLHttpRequest

request.addEventListener("load", function() {
    console.log(this.responseText)
    const facts = JSON.parse(this.responseText)
    const factItems = facts.map(function(facts) {
        const factItem = `<li>${factItem.title}</li>`
        return factItem
    })
    factUL.innerHTML = factItems.join("")
})

request.open('GET', "https://island-bramble.glitch.me/dog-facts")
request.send()
