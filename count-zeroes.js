function countZeroes(arr) {
    let firstZero = findFirstZero(arr)
    // if it returns -1 there's no 0s in the array at all
    if (firstZero === -1) return 0;

    // console.log("first zero", firstZero)
    // console.log("allzeroes", arr.length - firstZero)

    return arr.length - firstZero


}

// write a function to find the first zero in the array, we only have to look at the array after the first 0, everything before that doesn't matter
function findFirstZero(arr, low = 0, high = arr.length - 1) {

    if (high >= low) {

        let middle = low + Math.floor((high - low) / 2)
        // console.log('well we r here')

        // if the middle is 0 OR the middle -1 is 1 and the arr[middle] is 0 we return the middle because that's where the zeroes start
        if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0) {
            // console.log('we in here')
            return middle;
            // otherwise we have to find where the zeroes start so we have to call the function again to divide the array again 
        } else if (arr[middle] === 1) {


            // return 42
            return findFirstZero(arr, middle + 1, high)
        }
        // otherwise look on the front half of the array to find the first 0
        // console.log('lol do we get here?')
        return findFirstZero(arr, low, middle - 1)
    }

    return -1;
}

// countZeroes([1, 1, 1, 1, 0, 0])

module.exports = countZeroes