const arr = [1, 2, 3, 4, 5, {hello: 'world'}]
console.log('Default Array: ', arr)

arr.pop()
console.log('Deleted Object: ', arr)

const str = arr.join(' и ')
console.log('Made string from array: ', str)

arr[3] = 10
arr.reverse()
console.log('Changed array: ', arr)