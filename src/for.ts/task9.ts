let i = 0;
for (i = 0; i < 10; i++) {
    console.log(i);
}


let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
for (let i = 0; i < color.length; i++) {
    console.log(color[i])
}

//task9
let names = ["Benz", "Alice", "Somchai", "Mark", "Pimchanok"];
for (let i = 0; i < names.length; i++) {
    // @ts-ignore
    if (names[i].length > 6) {
        console.log("Sawaddee Khun.. " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}