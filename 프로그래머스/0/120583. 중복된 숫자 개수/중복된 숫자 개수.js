function solution(array, n) {
    return array.filter(a => a === n).length;
}
//filter() 사용. => 중복값 true가 나온걸 새로 반환