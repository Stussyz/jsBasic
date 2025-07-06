// if nesting statement (nesting conditional)
// password checker with nested validation
const password = prompt('Please input 8-character password');

if (password.length >= 8){
    if (password.indexOf(' ') === -1) { // if password have spacing / not using valid index
        console.log ('password valid');
    } else {
        console.log ('password is not valid');
    }
} else {
    console.log ('8-character password minimum ');
}