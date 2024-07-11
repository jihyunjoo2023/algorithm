function solution(array, height) {
    let answer = 0;
    answer = array.filter(t => t > height)
    return answer.length;
}