// Reduce a lot of line code above with logic operator "And" (&&):
// const password = prompt('Please input 8-character password');

// if (password.length >= 8 && password.indexOf(' ') === -1) {
//     console.log ('password valid');
// } else {
//     console.log ('password tidak sah')  
// }

// example 2 AND Operator:
let age = prompt ('input your age');
let gender = prompt ('input your gender');

if (age === '24' && gender === 'male'){
    console.log("memenuhi syarat");
} else {
    console.log("tidak memenuhi syarat");
}