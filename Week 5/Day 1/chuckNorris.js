const postUL = document.getElementById("postsUL")
let request = new XMLHttpRequest

request.addEventListener("load", function() {
    const result = JSON.parse(this.responseText)
    let joke = joke.value.joke
    console.log(joke)
    const jokeItem
        const jokeItem
        return joke
    })
    jokeUL.innerHTML = jokeItem.join("")
})

request.open("GET", "http://api.icndb.com/jokes/random")
request.send()


console.log(jokeItem)