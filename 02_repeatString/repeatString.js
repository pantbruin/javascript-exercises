const repeatString = function(string, num) {

    if (num < 0) return 'ERROR';

    const arr = [];
    for(let i = 0; i < num; i++) arr.push(string);
    return arr.join("");
};

// Do not edit below this line
module.exports = repeatString;
