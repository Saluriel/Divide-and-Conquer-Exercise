// split the array
// figure out if the middle number is larger or smaller than X
// if the middle number is larger, we have to look at the left side
// if the middle number is smaller, we have to look at the right side
// we don't want a number larger than X
// if they're all larger return -1

function findFloor(arr, x, first = 0, last = arr.length - 1) {
    // if the first number in the array is greater than the last number return -1
    if (first > last) {
        return -1
    }

    // if the number we want is larger than the last number in the array, return the last number in the array
    if (x >= arr[last]) {
        return arr[last]
    }

    let middle = Math.floor((first + last) / 2)
    // console.log("middle number", arr[middle])

    // if the middle idx is greater than 0, and the number in the array before the middle is less than the number we want, and its smaller than the middle, then the number right before the middle is the one we want
    if (middle > 0 && arr[middle - 1] <= x && x < arr[middle]) {
        return arr[middle - 1]
    }

    // if the number in the middle index of the array we found is the same as the number, return that
    if (arr[middle] === x) {
        return arr[middle]
    }

    // if thbe number we want is smaller than the middle, look at the left side
    if (x < arr[middle]) {
        return findFloor(arr, x, first, middle - 1)
    }

    // if the number we want is larger than the middle look at the right side
    return findFloor(arr, x, middle + 1, last)


}

module.exports = findFloor