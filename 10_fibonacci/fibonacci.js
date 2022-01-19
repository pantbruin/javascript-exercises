const fibonacci = function(num) {
    // iterative 
    num = Number(num)
    if (num <= 0 ) return "OOPS"
    const cache = [0, 1]
    
    for (let i = 2; i <= num; i++){
        cache[i] = cache[i - 1] + cache[i - 2]
    }
    return cache[num]
};

// Do not edit below this line
module.exports = fibonacci;
