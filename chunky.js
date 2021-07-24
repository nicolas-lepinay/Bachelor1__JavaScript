/* Create the chunk function that returns an array of elements split into groups the length of the given size.
If array can't be split evenly, the final chunk will be the remaining elements. */

function chunk(source, len)
{
    let result = [];
    let arr1 = source.slice(0, len);
    let arr2 = source.slice(len);
    result.push(arr1);
    result.push(arr2);
    return result;
}

// Si arr = ['a', 'b', 'c', 'd'] et len = 2;
// > ['a', 'b'] ,  ['c', 'd']

// Si arr = ['a', 'b', 'c', 'd'] et len = 3;
// > ['a', 'b', 'c'] ,  ['d']


