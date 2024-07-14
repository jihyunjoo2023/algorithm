function solution(num) {
    let a = num.filter(n=>n%2===0).length;
    return [a,num.length-a];
}