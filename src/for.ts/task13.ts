//task13.1
const add = (a:number,b:number) => {
    return a+b;
}
console.log(add(1,2));

//task 13.2
const addon = (c:number,d:number) => {
    return c+d;
}
const result = addon(1,2) + 0;
console.log(result, 'type of result:', typeof result);

//task 13.3
const addmore = (e:number,f:number):number => {
    return e+f;
}
const total = addmore(1,2) + 0;
console.log(total, 'type of result:', typeof total);

//task 13.4
const addagain = (g:number,h:number):string => {
    const result =  g+h;
    return result.toString();
}
console.log(addagain(1,2), 'type of result:', typeof addagain(1,2));

//task 13.5
function findMax(list: number[]): string {
    let max = 0
    for (const number of list) {
        if (number > max) {
            max = number
        }
    }
    return max.toString()
}

console.log(findMax([25, 99, 768, 5, 78, 123]));