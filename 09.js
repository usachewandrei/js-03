// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
for (let index = 2; index <= 9; index++) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${index} * ${i} = ${index * i}`)
    }
}