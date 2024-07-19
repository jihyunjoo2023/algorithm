function solution(my_string) {
    
    const str = 'aeiou'
    let a = my_string.split('').filter((el)=>(!str.includes(el))).join('')
    
    return a
    
}