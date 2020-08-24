//Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");

function reverseWords(str) {
    let arr = str.split("");
    let reverseStr = [];
    
    for(let i = arr.length-1; i > -1; i--) {
        reverseStr.push(arr[i]);
    }
    return reverseStr;
}
console.log(reverseWords('hello there'));