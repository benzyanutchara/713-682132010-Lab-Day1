function greet(name:string) {
    return 'Hello ' + name
}
console.log(greet('Benzema,'))

//task 10
const scores     = [10, 20, 30];
function sumScores(list: number[]): string {
    let total = 0;
    for (const number of list) {
        total += number;
    }
    return ' Your total score is ' + total + '.'
    }
console.log(sumScores(scores));
