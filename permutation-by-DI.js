function match(str) {
    const result = [];

    let i = 0;
    let max = str.length; 
    let min = 0;
    
    while (result.length <= str.length) {
        if (str[i] === "I") {
            result.push(min);
            min += 1;
        } 
        else if (str[i] === "D") {
            result.push(max);
            max -= 1;
        } else {
            result.push(min);
        }
        
        i++;
    }
    
    return result;
}

match('III') // [0,1,2,3]
match('DDI') // [3,2,0,1]
match('IDID') // [0,4,1,3,2]
