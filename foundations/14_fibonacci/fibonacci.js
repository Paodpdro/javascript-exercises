const fibonacci = function(num) {
    let n = 1;
    let m = 1;

    if (num < 0) {
        return "OOPS";
    }
    else if (num ==0) {
        return 0;
    }
    else if (num == 1 || num ==2) {
        return m;
    }
    else {
        for(let i = 3; i<=num; i++) {
        result = n + m;
        n = m;
        m = result;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
