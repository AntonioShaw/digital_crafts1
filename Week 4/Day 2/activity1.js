// DOM 
// Document Object Model 

// access the button using the id  
const submitButton = document.getElementById("submitButton")
const nameTextBox = document.getElementById("nameTextBox")
const ageTextBox = document.getElementById("ageTextBox")
const nameHeading = document.getElementById("nameHeading")

submitButton.addEventListener("click", function() {
    // get the value of the textbox 
    const name = nameTextBox.value 
    // get the value from the age textbox 
    const name = ageTextBox.value 
    // assign the value from textbox to H1 
    nameHeading.innerHTML = name + " " + age
})

/*
function submitButtonClicked() {
    console.log("submitButtonClicked")
} 
*/