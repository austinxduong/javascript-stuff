// the string must contain an '@' char
// the string must contain an '.' char
// the '@' must have at least 1 char in front of it
// the '.' and '@' must be in the appropriate places (i.e hello@gmail.com)

function validateEmail(str) {
const regex = /\w@\w+\.com/

const matchy = str.match(regex)

if(matchy) {
    return true;
    }
    else return false
}

console.log(validateEmail("hello@email.com")) // true
console.log(validateEmail("hello.world@email.com")) // true
console.log(validateEmail("hello_world@email.com")) // true
console.log(validateEmail("hello@emailcom")) // false
console.log(validateEmail("helloemail.com")) // false
console.log(validateEmail("helloemailcom")) // false
console.log(validateEmail("hello.email@com")) // false
console.log(validateEmail("@email.com")) // false
console.log(validateEmail("hello_world@email.com")) // true



