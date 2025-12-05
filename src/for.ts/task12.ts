// task 12.1
const greet = function greet(name: string) {
    return 'Hello ' + name
}

console.log(greet('Benzio'))

// task 12.2
const sayhi = (name:string) => 'Hello ' + name

console.log(sayhi('Jojo'))


const multiply = (x:number,y:number) => { return x * y }

console.log(multiply(999.9, 10))

// task 12.3
const multinum = (x:number,y:number) => {
    if (x > y) {
        return x
    } else if (x === y) {
        return 'Numbers are equal'
    } else {
        return y
    }

}
    console.log(multinum(999, 888))


