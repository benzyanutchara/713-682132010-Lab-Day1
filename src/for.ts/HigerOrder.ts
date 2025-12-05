//16.1
const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);

//16.2
const b = [1, 2, 3, 4, 5];
const even = b.filter((num) => num % 2 === 0);
console.log(even);

//16.3
const divideThree = (num: number) => num % 3 === 0
const tripleThree = (num: number) => num * num * num

const h = [24, 6, 9, 12, 15, 21]
const result = h.filter(divideThree).map(tripleThree)
console.log(result)