function calculateTax(amount) {
    return amount * 0.10;
}
function convertToUpperCase(text) {
    return text.toUpperCase();
}
function findMaximum(num1,num2){
    return Math.max(num1, num2);
}
function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}
function calculateDiscountedPrice(originalPrice, dicountedPercentage) {
    return originalPrice - (originalPrice * dicountedPercentage/100);

}
console.log(calculateTax(100));
console.log(convertToUpperCase("hello"));
console.log(findMaximum(10,20));
console.log(isPalindrome("madam"));
console.log(calculateDiscountedPrice(80,20));

