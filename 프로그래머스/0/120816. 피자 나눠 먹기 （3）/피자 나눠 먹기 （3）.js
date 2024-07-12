function solution(slice, n) {
    2<=slice<=10;
    if(n%slice===0){
            return n/slice;
        }else{
            return Math.floor(n/slice)+1;
        }
    }
