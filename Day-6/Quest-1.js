const arrP = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function largestPair(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    } else {
        return [arr[arr.length - 2], arr[arr.length - 1]];
    }
}

console.log(largestPair(arrP));
