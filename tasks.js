// const task1 = array =>{
//     return array.reduce((acc, item) => {
//         if (acc[item] === undefined){
//             return {...acc, [item]: 1}
//         }
//         return {...acc, [item]: acc[item]+1}
//     },{})
// }
// console.log(task1(['a','b','a','a','c']))


// const task1 = array =>{
//     return array.reduce((acc, item) => {
//         return {...acc, [item]: (acc[item] || 0) +1}
//     },{})
// }
// console.log(task1(['a','b','a','a','c']))


// function sum (a, b, c) {
//     return a + b + c
// }
// console.log(sum(5,86,95))
//function declaration создается при помощи ключевого слова function

// const sum = function sum (a, b, c) {
//     return a + b + c
// }
// console.log(sum(5,86,95))
//function expression вызывается только после функции


//в обычной функции есть массив аргументов в стрелочной функции нет аргумента массива (*стрелочную функцию можно написать одной строкой)
//анонимная функция это - () => {}    -функция у которой нет имени
//любая функция вызывается круглыми скобками


//пример анонимной самовызывающейся функции:
// (() => {
//     console.log("Hello")
// })()

// let array = [33,56,44,3,45]
// console.log( Array.isArray(array) )
//Как проверить, является ли объект массивом?

// let num = NaN
// console.log( isNaN(num) )
//Как проверить, что переменная равна NaN?

//область видимости-это где мы видим переменную
//область переменной ограничена фигурными скобками

//циклы (for)
// console.log("I love Bishkek")
// console.log("I love Bishkek")
// console.log("I love Bishkek")
// console.log("I love Bishkek")
// console.log("I love Bishkek")
// for (let i = 0; i < 5; i++) {
//     console.log("I love Bishkek")
// }

//цикл()
// let numbers = [33, 44, 55, 66, 77, 88]
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// console.log(numbers[5])

// let numbers = [33, 44, 55, 66, 77, 88]
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }


// for (let i = 5; i >=0 ; i--){
//     console.log(i)
// }


// let numbers = [33, 44, 55, 66, 77, 88]
// for (let i = numbers.length -1; i >= 0; i--){
//     console.log(numbers[i])
// }

// for(let i = 0; i < 6; i++){
//     console.log(i)
// }



//вывести в консоль сумму четных чисел
// let numbers = [22,12,23,43,44,5,67,7,66,77,88,42,32]
// let sum = 0
//
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 0){
//         sum = sum +numbers[i]
//     }
// }
// console.log(sum)


//выводит числа в квадратной степени
// let numbers = [22,12,23,43,44,5,67,7,66,77,88,42,32]
// let result = []
//
// for (let i = 0; i < numbers.length; i++){
//     result = [...result, numbers[i] ** 2]
// }
// console.log(result)


//умножает числа внутри массива на 2
// let numbers = [22,12,23,43,44,5,67,7,66,77,88,42,32]
// let result = []
//
// for (let i = 0; i < numbers.length; i++){
//     result = [...result, numbers[i] * 2]
// }
// console.log(result)


// let array = ['k', 'a', 't', 'e']
// let str = ''
// for (let i = 0; i < array.length; i++){
//     str = str +array[i]
// }
// console.log(str)


//выводит максимальное число в массиве
// let array = [54,76,3,5,7,8,43,21]
// let max = array[0]
// for (let i = 0; i < array.length; i++){
//     if (array[i] > max){
//         max = array[i]
//     }
// }
// console.log(max)


















