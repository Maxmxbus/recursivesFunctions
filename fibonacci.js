function fibs(num) {
    let arr = [0, 1];

    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

function fibsRec(num) {
    if(num === 1){
        return [0];
    }
    if(num === 2){
        return [0, 1];
    }

    const fibArr = fibsRec(num - 1);
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);

    return fibArr;
}

console.log(fibs(8))
console.log(fibsRec(8))

