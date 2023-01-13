function findRotatedIndex(arr, int) {
    let idx = findNum(arr)
    // if the idx we get back is greater than 0, and the number we want is greater than or equal to the first number int he array, and the number we want is less than the pivot point/num we found
    if (idx > 0 && int >= arr[0] && int <= arr[idx - 1]) {
        // do a binary search with the array and the first index at 0 and the last index at our pivot point
        return doASearch(arr, int, 0, idx - 1);
    } else {
        // otherwise do a binary search with the first set as our pivot point and the last index set as the last number in the array
        return doASearch(arr, int, idx, arr.length - 1)
    }
}

// do a binary search for the number
function doASearch(arr, int, first, last) {
    // return -1 if the array isn't a thing
    if (arr.legnth === 0) {
        return -1;
    }
    // if the number we want is smaller than the first number in the array or larger than the last number return -1
    if (int < arr[first] || int > arr[last]) {
        return -1
    }

    // while the first idx is less than the last idx given
    while (first <= last) {
        // find the middle
        let middle = Math.floor((first + last) / 2)
        // console.log("doASearch middle", middle)
        // if the middle index is the number we want, return that
        if (arr[middle] === int) {
            return middle;
            // otherwise if the number is less than the array, set the last index to the old middle
        } else if (int < arr[middle]) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    // console.log('returning -1')
    return -1;
}


function findNum(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let first = 0;
    let last = arr.length - 1;
    while (first <= last) {
        // find the middle
        let middle = Math.floor((first + last) / 2)
        // console.log(middle)
        // if the middle index of the array is larger than the next index return the next index
        if (arr[middle] > arr[middle + 1]) {
            // console.log("findNum - arr[middle], arr[middle +1]", arr[middle], arr[middle + 1])
            return middle + 1;
        }
        // if the first index is smaller than the middle set the first to the next index after the middle
        else if (arr[first] <= arr[middle]) {
            first = middle + 1
            // console.log('findNum - first', first)
        } else {
            last = middle - 1;
            // console.log("findNum - last", last)
        }
    }
}

module.exports = findRotatedIndex