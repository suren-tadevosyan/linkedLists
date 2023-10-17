function fib(num){
    const cach = new Map()
    if(cach.has(num)){
        return cach.get(num)
    }

    if(num <= 1){
        return num
    }

    const result = fib(num - 1) + fib(num - 2)
    cach.set(num,result)

    return result

}

console.log(fib(39));
console.log(fib(40));


