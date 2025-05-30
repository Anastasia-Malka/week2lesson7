let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 3;
    sum += numbers[i];
} 
console.log(sum); // 1158411

// Через цикл for of
/*sum = 0;
for (let num of numbers){
    num = num ** 3;
    sum += num;
} 
console.log(sum); // 1003904306910622800 */


sum = 0;
for (let num of numbers) {
    console.log('Processing num:', num); // Log current number
    num = num ** 3;
    console.log('Cubed num:', num); // Log cubed value
    sum += num;
    console.log('Current sum:', sum); // Log running sum
}
console.log(sum);
