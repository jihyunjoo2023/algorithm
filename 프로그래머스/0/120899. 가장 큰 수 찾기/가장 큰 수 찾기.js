function solution(array) {
    let max = array[0]; // 배열의 첫 번째 요소로 초기화
    let maxIndex = 0;   // 첫 번째 요소의 인덱스로 초기화

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];     // 더 큰 값을 찾으면 max를 갱신
            maxIndex = i;       // maxIndex도 갱신
        }
    }

    return [max, maxIndex]; // 가장 큰 값과 그 인덱스를 반환
}