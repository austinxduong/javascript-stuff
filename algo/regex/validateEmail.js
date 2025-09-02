// the string must contain an '@' char
// the string must contain an '.' char
// the '@' must have at least 1 char in front of it
// the '.' and '@' must be in the appropriate places (i.e hello@gmail.com)

function validateEmail(str) {
const regex = /[a-z][A-Z]\w@\w[a-z][A-Z]+\.com/

const matchy = str.match(regex)

if(matchy) {
    return true;
    }
    else return false
}

console.log(validateEmail("hello@email.com"))



