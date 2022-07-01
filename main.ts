function fibonacci(number: number): number {
    if (number == 1 || number == 2) {
        return number == 1 ? 0 : 1
    } else {
        return fibonacci(number - 2) + fibonacci(number - 1)
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(fibonacci(i))
}