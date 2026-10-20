let numbers = [10,20,30,40,50,60];

const [first,second, ,fourth, ...all] = numbers;

console.log(first);
console.log(second);
console.log(fourth);
console.log(all);