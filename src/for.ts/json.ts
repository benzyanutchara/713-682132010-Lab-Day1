const object = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(object.name)
const jsonStr = JSON.stringify(object);
console.log("Object: ", object)
console.log("json String: ", jsonStr)

//15.4
interface Student {
    name: string
    lastName: string
    age: number
    grade: number
}

function statusCheck(student: Student): string {
    if (student.grade > 2) {
        return JSON.stringify(student)
    }
    return `${student.name} were dismissed from the course.`
}

console.log(statusCheck({ name: 'Dicky', lastName: 'Doe', age: 20, grade: 1 }))
console.log(statusCheck({ name: 'Bliss', lastName: 'Charm', age: 20, grade: 3 }))
console.log(statusCheck({ name: 'Marie', lastName: 'Marsh', age: 19, grade: 2 }))
console.log(statusCheck({ name: 'Ron', lastName: 'Mustang', age: 18, grade: 4 }))
