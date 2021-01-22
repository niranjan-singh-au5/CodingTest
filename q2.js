var arr = [1, 2, 2, 4, 3, 4, 5]
function duplicates(data) {
return [...new Set(data)]
}
console.log(duplicates(arr));
