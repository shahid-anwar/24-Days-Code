// To print all the numbers from 2 to 100


function printNumbers() {
    const start = 2;
    const end = 100;
    let current = start;

    while (current < end) {
        console.log(current);
        current++;
    }
    return ""
}

console.log(printNumbers());
