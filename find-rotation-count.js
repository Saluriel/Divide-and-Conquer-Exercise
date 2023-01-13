function findRotationCount(arr, first = 0, last = arr.length - 1) {
    // if the array hasn't been rotated at all...
    if (first > last) {
        return 0;
    }
    // if the first and last numbers are equal return the first
    if (first === last) {
        return first;
    }

    // find the middle
    let middle = Math.floor((first + last) / 2)
    // console.log("outside if - middle", arr[middle])

    // if the middle index is less than the last number in the array AND the next index after the middle is larger than the middle index we found return the next index after the middle
    if (middle < last && arr[middle + 1] < arr[middle]) {
        // console.log('middle idx', middle)
        // console.log('middle num', arr[middle])
        // console.log('last', last)
        return middle + 1;
    }

    // if the middle index is greater than the first index and the middle num in the array is less than the number before it, return the middle index
    if (middle > first && arr[middle] < arr[middle - 1]) {
        // console.log("middle", middle)
        // console.log('first', first)
        return middle;
    }

    // if the last number in the array is larger than the middle we found we need to call the function again with the last number as middle index -1
    if (arr[last] > arr[middle]) {
        return findRotationCount(arr, first, middle - 1)
    }

    return findRotationCount(arr, middle + 1, last)

}


module.exports = findRotationCount