console.log(this)

// DOM 
// Document Object Model 

// access the button using the id  
const submitButton = document.getElementById("submitButton")
const nameTextBox = document.getElementById("nameTextBox")
const imagesUL = document.getElementById("imageUL")


submitButton.addEventListener("click", function () {


    // create a name LI 
    const nameLI = document.createElement("li")
    nameLI.innerHTML = name
    const removeButton = document.createElement("button")

    removeButton.addEventListener("click", function () {
        
        // this = removeButton 
        // this.parentElement = LI 
        // this.parentElement.parentElement = UL 
        namesUL.removeChild(this.parentElement)
        //console.log(this.parentElement)
    })


    removeButton.innerHTML = "Remove"
    nameLI.appendChild(removeButton)

    // append nameLI to namesUL 
    namesUL.appendChild(nameLI)

    // add a div element to the body 
    /*
    const divElement = document.createElement("div")
    divElement.innerHTML = "HELLO WORLD"
    // add div element to the body 
    document.body.appendChild(divElement) */

})

/*
function submitButtonClicked() {
    console.log("submitButtonClicked")
}
*/
