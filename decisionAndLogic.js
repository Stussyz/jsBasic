// Reduce a lot of line code above with logic operator "And" (&&):
const password = prompt('Please input 8-character password');

if (password.length >= 8 && password.indexOf(' ') === -1) {
    console.log ('password valid');
} else {
    console.log ('password tidak sah')  
}