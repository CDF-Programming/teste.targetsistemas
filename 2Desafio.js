let numberOne= 0
let numberTwo= 1
let QtdeNumberPrint = 10 
let arrayFibo=[]
for(let i = 0; i< QtdeNumberPrint; i++) {

    let fibo= numberOne + numberTwo;
    numberOne = numberTwo
    numberTwo = fibo;
    arrayFibo.push(fibo)
}
console.log(arrayFibo)
