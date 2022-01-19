const palindromes = function (str) {

    let arrayOfString = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split("");
    let arrayOfStringCopy = [...arrayOfString].reverse()

    return arrayOfString.every((element, index) => element === arrayOfStringCopy[index])


};

// Do not edit below this line
module.exports = palindromes;
