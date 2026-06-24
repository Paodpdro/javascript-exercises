const removeFromArray = function() {
    let ogArray =  Array.from(arguments);
    let first = ogArray[0];
    let rest = ogArray.slice(1);

    let result = first.filter(item => !rest.includes(item));
    
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
