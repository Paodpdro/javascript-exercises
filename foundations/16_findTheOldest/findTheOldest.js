const findTheOldest = function(people) {
    let result = people.reduce((acc, curr) => {
            let currDeath = new Date().getFullYear();
            let accDeath = new Date().getFullYear();

            if (curr.yearOfDeath) {
                currDeath = curr.yearOfDeath;
            }

            if (acc.yearOfDeath) {
                accDeath = acc.yearOfDeath;
            }

            let currAge = currDeath - curr.yearOfBirth;
            let accAge = accDeath - acc.yearOfBirth;
            if (accAge < currAge) {
                acc = curr;
            }
        return acc;
    });
    return result
};

// Do not edit below this line
module.exports = findTheOldest;
