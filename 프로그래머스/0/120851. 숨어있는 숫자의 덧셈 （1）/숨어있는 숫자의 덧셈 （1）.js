const solution = (my_string) => 
[...my_string].reduce((acc,cur) => Number(cur) ? +acc + +cur : acc, 0);