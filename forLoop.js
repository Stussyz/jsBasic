// FOR LOOPING METHOD:

// DUMB WAY: 
    // console.log(1);
    // console.log(2);
    // console.log(3);
    // console.log(4);
    // console.log(5);
    // console.log(6);
    // console.log(7);
    // console.log(8);
    // console.log(9);
    // console.log(10);

// GOOD WAY -->
    // for (let i = 1; i <=11; i++) {
    //     console.log (i);
    // }

// SAME, BUT ONLY TAKE THE "EVEN NUMBER" -->
    // for (let i = 0; i <=20; i+=2) { // number 0 is using for "starting from"
    //     console.log (i);
    // }

// SAME BUT DECREMENT VALUE -->
    // for (let i = 20; i >=0; i--) { // number 0 is using for "starting from"
    //     console.log (i);
    // }

// SAME BUT INCREMENT ANIMALS VALUE -->
    // const animals = ['cat', 'dog', 'bird', 'fish', 'crocodile', 'horse'];
    // for (let i = 0; i < animals.length; i++) {
    //     console.log (i + 1, animals[i]); // i+1 mean.. it will change let i = 0 with 0+1 = 1
    // }

// NESTED LOOP -->
    const pilihan = 'abcd';
    for (let i = 1; i <= 10; i++ ) {
        console.log (`${i}. Soal Nomor ${i}`);
        for (let j = 0; j < pilihan.length; j++){
            console.log (`${pilihan [j]}. Pilihan Jawaban`);
        }
    }