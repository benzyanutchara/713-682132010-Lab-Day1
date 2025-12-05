let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
for (const c of color) {
    console.log(c);
}

let colour = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
for (const index in colour) {
    console.log(`Index: ${index}, Value: ${colour[index]}`);
}
