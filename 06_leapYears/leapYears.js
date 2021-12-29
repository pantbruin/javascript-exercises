const leapYears = function(year) {
    /*
    Leap years follow these rules:
     1. Divisible by four.
     2. And years divisible by 100 are not leap years, unless they are divisible by 400.

     p = Year is divisible by 4
     q = Year is divisible by 100
     r = Year is divisble by 400

     Recall: p unless q = !q -> p = q v p

     Thus we have: p AND (!q OR r)
     Year is divisible by 4 AND (year is not divisible by 100 OR year is divisible by 400)

    */
    return (year % 4 === 0) && (!(year % 100 === 0) || (year % 400 === 0))
};

// Do not edit below this line
module.exports = leapYears;
