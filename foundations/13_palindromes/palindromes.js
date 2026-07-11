const palindromes = function (word) {
    const reversed = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split('').reverse().join('')
    const correct = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") 
    return reversed == correct;
};

// Do not edit below this line
module.exports = palindromes;
    