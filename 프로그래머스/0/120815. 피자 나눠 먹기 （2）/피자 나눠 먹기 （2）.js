function solution(n) {
   for(let p = 1; p<=n; p++ ){
       if(6*p%n===0){
           return p}
   }
}