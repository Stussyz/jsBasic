// a simple else-if decision statement with more strict operator
let age = 20;

if (age === 15) {
    console.log ("belum cukup umur ya dek ya");
} else if (age === 20) {
    console.log ("udah cukup umur ya dek ya");
} else if (age === 5) {
    console.log ("hayo kok keluar malem2");
}

// a little bit interactive if-elseif-else statement combining with prompting feature
let day = prompt('a day you like').toLowerCase();
if (day === 'monday') {
    console.log('happy working!');
} else if (day === 'friday') {
    console.log("time to sholat jum'at broder");
}else if (day === 'sunday') {
    console.log('happy holiday, buddy!');
} else {
    console.log('a normal day');
}