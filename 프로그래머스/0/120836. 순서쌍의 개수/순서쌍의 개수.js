function solution(n) {
    let count = 0; // 약수의 개수를 세기 위한 변수
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) { // i가 n의 약수인 경우
            count++;
        }
    }
    return count; // 약수의 개수를 반환
}