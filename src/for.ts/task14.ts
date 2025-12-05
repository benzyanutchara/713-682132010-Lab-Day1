import add, { subtract } from './functionsone.ts'
import findMax from './functionstwo.ts'

const result = add(1, 2) + 0
const result2 = subtract(1, 2) + 0
console.log(result, 'type of result:', typeof result)
console.log(result2, 'type of result2:', typeof result2)

console.log(findMax([15, 268, 73, 54, 105]))