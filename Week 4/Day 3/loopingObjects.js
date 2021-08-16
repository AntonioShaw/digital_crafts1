
console.log(posts)
for(let index=0; index <posts.length; index++) {
    const post = posts[index]

    const postItem = `
        <li>
        </li>`

    console.log(post.title)
}

// const friendsUL = document.getElementById("friendsUL")

// let friends = [
//     {firstName: "John", lastName: "Doe", hobby: "Gardening"},
//     {firstName: "Mary", lastName: "Doe", hobby: "Movies"}, 
//     {firstName: "Alex", lastName: "Doe", hobby: "Music"}, 
// ]

// for(let index = 0; index < friends.length; index++) {

//     const friend = friends[index]

//     // console.log(friends[index].hobby) SAME AS BELOW

//     const friendItem = `
//         <li>
//             <p>${friend.firstName}, ${friend.lastName} - ${friend.hobby}</p>
//         </li>
//     `

//     // += will concatenate and create strings each time it is appended. This is because strings are immutable 
//     //friendsUL.innerHTML += friendItem
    
//     // No new strings are created. All new items are just appended at the end
//     friendsUL.insertAdjacentHTML('beforeend', friendItem)
// }