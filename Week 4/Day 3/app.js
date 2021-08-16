const nameTextBox = document.getElementById("nameTextBox")
const saveButton = document.getElementById("saveButton")
const nameDiv = document.getElementById("nameDiv")


// passing the event like Mouse click event 
function removeName2(e) {
    console.log(e.target) // the element that caused the event which in our case will be the button 
    console.log('Remove Name')
}

// passing this and btn will be the button
function removeName1(btn) {
    console.log(btn)
    console.log('Remove Name')
}

function nameChange() {
    console.log('name change')
}

saveButton.addEventListener("click", function() {
    
    const name = nameTextBox.value 

    const divName = `
        <input type = 'checkbox' onchange = 'nameChange()' />
        <label>${name}</label>
        <button onclick = 'removeName1(this)'>Remove</button>
        <button onclick = 'removeName2(event)'>Remove</button>
    `

    nameDiv.innerHTML = divName 


})

/*
const firstName = "John"
const lastName = "Doe"
const cohort = "July 2021"
const fullName = firstName + " " + lastName
//const message = "Welcome " + firstName + "," + lastName + " to DigitalCrafts cohort " + cohort
// TEMPLATE LITERALS 
const message = `Welcome ${firstName},${lastName} to DigitalCrafts cohort ${cohort}`
console.log(message)
*/