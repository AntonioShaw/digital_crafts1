// program to check if the string is palindrome or not

function checkPalindrome(str) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('Yes,this word is a palindrome.');
    }
    else {
        console.log('No, this word is not a palindrome.');
    }
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);