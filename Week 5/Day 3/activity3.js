const addOrderButton = document.getElementById("addOrderButton")

addOrderButton.addEventListener('click', function() {

    const email = 'johndoe@mgail.com'
    const coffeeType = 'Hot Coffee'
    const size = 'Small'
    const price = 4.50

    const order = { email: email, type: coffeeType, size: size, price: price}

    // Another way to do the above
    //placeOrder(email, coffeeType, size, price)

    placeOrder(order)
})

function placeOrder(order) {

    fetch('https://troubled-peaceful-hell.glitch.me/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
}).then(response=> {
        return response.json()
    }).then(result => {
        console.log(result)
    })
  }
  