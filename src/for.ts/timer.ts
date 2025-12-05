// //function waitAndPrint = (message:string, delay:number) => {
//     setTimeout(() => {
//         console.log(message);
//     }, delay);
// }
//
// // Example usage:
// waitAndPrint("Hello, world!", 2000);

//17.2
function waitAndPrint(message: string, delay: number) {
    let messageWorld = message
    setInterval(() => {
        console.log(messageWorld)
        messageWorld = messageWorld + ' world!'
    }, delay)
}

waitAndPrint('Hello, world!', 3000)