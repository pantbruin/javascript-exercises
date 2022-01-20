const isObjectEmpty = (obj) => {
    for (const key in obj){
        return false;
    };
    return true;
};


const findTheOldest = function(peopleArray) {
    let result = peopleArray.reduce((oldestPersonObj, currentPersonObj) => {

        if (isObjectEmpty(oldestPersonObj)) return currentPersonObj

        let currYear = new Date().getFullYear();

        let currPersonAge = 'yearOfDeath' in currentPersonObj ? currentPersonObj.yearOfDeath - currentPersonObj.yearOfBirth : currYear - currentPersonObj.yearOfBirth;
        let oldestPersonAge = 'yearOfDeath' in oldestPersonObj ? oldestPersonObj.yearOfDeath - oldestPersonObj.yearOfBirth : currYear - oldestPersonObj.yearOfBirth;

        oldestPersonObj = currPersonAge > oldestPersonAge ? currentPersonObj : oldestPersonObj;
        return oldestPersonObj
        
    }, {});
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
