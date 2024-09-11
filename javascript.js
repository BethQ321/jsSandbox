function add7(a) {
    return a + 7;
}

let b = 5;
console.log(b);

let c = add7(b);
console.log(c);

function multiply(a, b) {
    return a*b;
}

let d = multiply(3, 2);
console.log(d);

function capitalize(word) {
    let lowerWord = word.toLowerCase();
    let capWord = lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    return capWord;
}

let result = capitalize("jumPER");
console.log(result);

function lastLetter(string) {
    return string.slice(-1);
}

let result2 = lastLetter("monkey");
console.log(result2);
