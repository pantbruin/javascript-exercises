const removeFromArray = function(arr) {

    let valuesToRemove = new Set(Array.from(arguments));

    let output = [];

    for (const val of arr){
        if (!valuesToRemove.has(val)) output.push(val);
    };

    return output
};

// Do not edit below this line
module.exports = removeFromArray;
