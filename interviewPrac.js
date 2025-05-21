// nums = [2, 7, 11, 15];
// target = 9;


// function addTo (arr, target) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return -1;
// }

// console.log(addTo(nums, target));

// array1 = [2, 5, 1, 2, 3, 5, 1];
// array2 = [1, 2, 3, 4];
// array3 = [5, 5, 5, 5];

// function findDuplicate(arr) {
//     let seen = {};

//     for(let i = 0; i < arr.length; i++) {
//         const duplicate = arr[i];
//         if(seen.hasOwnProperty(duplicate)) {
//             return duplicate;
//         }
//         seen[arr[i]] = i;
//     };
//     return -1;
// }

// console.log(findDuplicate(array1));
// console.log(findDuplicate(array2));
// console.log(findDuplicate(array3));

// Create a loop (for/while?) that compares the first and last letter and 
// moves inward in the word to see if they are the same.
// The loop will stop when the indices are equal or cross.

function isPalindrome(string) {
    const lowerString = string.toLowerCase();
    let beginCounter = 0;
    let endCounter = lowerString.length - 1;

    while(beginCounter < endCounter) {
        if(lowerString[beginCounter] !== lowerString[endCounter]) {
            return false;
        }
        beginCounter++;
        endCounter--;
    }
    return true;
}

//console.log(isPalindrome("Tacocat"))


// Create an object that stores each number of the array as the key and 
// the count of that number as the _____. Add the number to the object
// if one does not exist, or increase the count if one does exist.

function mostFrequent(arr) {
    const hashMap = {};
    for(let i = 0; i < arr.length; i++) {
        if(!hashMap[arr[i]]) {
            hashMap[arr[i]] = 1;
        } else {
            hashMap[arr[i]]++;
        }
    }
    
    let maxCount = 0;
    let maxKey;
    for(let key in hashMap) {
        if(hashMap[key] > maxCount) {
            maxCount = hashMap[key];
            maxKey = key;
        }
    }
    return parseInt(maxKey);
}

//console.log(mostFrequent([1, 2, 1, 3, 2, 2, 5, 2]))

// I am going to create nested for loops. The first loop will iterate through
// the array. The second look will look for arrays within each element of
// the array and push each of those to the new array. The function will 
// return the new array.

function flatten(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])) {
            for(let j = 0; j < arr[i].length; j++) {
                newArr.push(arr[i][j]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(flatten([1, 2, [3, 4], 5]));       
// console.log(flatten([1, [2, 3], [4, 5], 6]));  
// console.log(flatten([1, [2, [3, 4]], 5]));

function removeDoubles (arr) {
    const counter = {};
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!counter.hasOwnProperty(arr[i])) {
            counter[arr[i]] = 1;
        }
    }

    for(let i in counter) {
        if(counter[i] === 1) {
            newArr.push(parseInt(i));
        }
    }
    return newArr;
}

//console.log(removeDoubles([4, 2, 7, 2, 5, 7, 1]))

class Pin {
    #imageURL;
    #description;
    #likes;

    constructor(imageURL, description) {
        this.#imageURL = imageURL;
        this.#description = description;
        this.#likes = 0;
    }

    getDescription() {
        return this.#description;
    }

    getImageURL() {
        return this.#imageURL;
    }

    getLikes() {
        return this.#likes;
    }

    like() {
        this.#likes += 1;
    }

    setDescription(newDescription) {
        this.#description = newDescription;
    }

    setImageURL(newURL) {
        this.#imageURL = newURL;
    }

    getSummary() {
        return `Summary - ImageURL: ${this.getImageURL()}, Description: ${this.getDescription()}, Likes: ${this.getLikes()}`
    }
}

const pin1 = new Pin("https://example.com/cake.jpg", "Delicious chocolate cake!");
console.log(pin1.getDescription());  // ➜ "Delicious chocolate cake!"
pin1.setDescription("Eww. That cake is gross.")
console.log(pin1.getDescription());
pin1.like();
pin1.like();
pin1.like();
pin1.like();
console.log(pin1.getLikes());
console.log(pin1.getSummary())

const pins = [
  new Pin("url1", "desc1"),
  new Pin("url2", "desc2")
];

pins[0].like();
pins[0].like();
pins[0].like();
pins[1].like();
pins[1].like();

console.log(pins[0].getLikes());

function findMaxLikes (arr) {
    //return the index of the first pin with the most likes
    let maxLikes = 0;
    let index = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].getLikes() > maxLikes) {
            maxLikes = arr[i].getLikes();
            index = i;
        }
    }
    return index;
}

console.log(findMaxLikes(pins))