function repeat(fn, n){
    for (let i = 0; i < n; i++){
         fn();
    }
};


function hello(){
    console.log('Hello world');
};

function goodbye(){
    console.log('goodbye world');
};

repeat(hello, 5);

repeat(goodbye, 5);

function filter(arr, fn) {
    // TASK: Define your function here
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = arr[i] 
        if (fn(result)) {
            newArr.push(result)
        }
    }
    return newArr;
}


// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return (location) => {
        warningCounter ++;
        console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
        if (warningCounter === 1){
        console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!"`);
        }
        else if (warningCounter >= 2){
        console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!"`);
        };
    }
}
    const rocksWarning = hazardWarningCreator('Rocks on the Road');
    const mooseWarning = hazardWarningCreator('Moose on the Road');
    const tsunamiWarning = hazardWarningCreator('tsunami on the Road');

    rocksWarning('Main St and Pacific Ave');
    mooseWarning('Main St and Atlantic Ave');
    tsunamiWarning('Atlantic Ave and Pacific Ave');

let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
    movements = movements.filter(step => step[0] >= 0 && step[1] >= 0); 
    steps = movements.map(step => step[0] + step[1]);
        console.log(steps);
    steps = movements.forEach(step => {
        console.log(step);
    });



let string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let array = string.split(' ');
console.log(array);
let callback = array.reduce((a,b) => {
    if (b.length === 3){
    return a + ' ';
}
else {
    return a + b[b.length-1].toUpperCase();
}
}, '');
console.log(callback);

// function callback(a,b){   
//     if (a.length === 3){
//         b = ' ';
//     }
//     else {
//         b = b;
//     }
// }
