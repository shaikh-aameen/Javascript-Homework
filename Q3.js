let numbers = [2,5,8,10,15,20];

const firstq = numbers.map(numbers => numbers * numbers)

const secondq = numbers.filter(numbers => numbers > 20)

const thirdq = numbers.reduce((num1,num2)=> num1 + num2 )

console.log(firstq);

console.log(secondq);

console.log(thirdq);
