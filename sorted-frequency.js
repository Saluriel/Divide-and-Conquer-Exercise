function sortedFrequency(arr, num) {
    let firstNum = findFirstinstanceOfNum(arr, num);
    if (firstNum == -1) return firstNum;

    let lastNum = findLastInstanceOfNum(arr, num);
    // console.log('first', firstNum)
    // console.log('last', lastNum)
    return lastNum - firstNum + 1;

}

function findFirstinstanceOfNum(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let middle = Math.floor((high + low) / 2)
        // console.log("THIS IS THE MIDDLE INDEX", middle)
        // console.log('THIS IS THE MIDDLE OF THE ARRAY', arr[middle])
        // if the middle is 0, the number given is larger than the middle, and the middle IS the number we're looking for...
        if (middle === 0 || num > arr[middle - 1] && arr[middle] === num) {
            // console.log('middle', middle)
            return middle;
            // if the number is larger than the middle we need to divide the array again to find the number we're looking for
        } else if (num > arr[middle]) {
            // console.log('middle of array', arr[middle])
            return findFirstinstanceOfNum(arr, num, middle + 1, high)
        } else {
            // console.log('last return')
            return findFirstinstanceOfNum(arr, num, low, middle - 1)
        }

    }
    // console.log('returning -1')
    return -1
}

function findLastInstanceOfNum(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let middle = Math.floor((low + high) / 2)
        // if the middle number is equal to the last number int he array, or its less than the next number after the middle return the middle
        if ((middle === arr.length - 1 || num < arr[middle + 1]) && arr[middle] === num) {
            return middle;
            // otherwise if the number is less than the middle we found we need to divide again the find it
        } else if (num < arr[middle]) {
            // console.log('middle of array', arr[middle])
            return findLastInstanceOfNum(arr, num, low, middle - 1)
        } else {
            return findLastInstanceOfNum(arr, num, middle + 1, high)
        }
    }
    return -1
}

module.exports = sortedFrequency