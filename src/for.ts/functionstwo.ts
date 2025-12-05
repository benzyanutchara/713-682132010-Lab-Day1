function findMax(list: number[]): string {
    let max = 0
    for (const num of list) {
        if (num > max) {
            max = num
        }
    }
    return max.toString()
}

export default findMax