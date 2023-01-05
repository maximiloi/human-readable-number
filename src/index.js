module.exports = function toReadable(number) {
    const NUMBER_WORDS = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    const firstDigit = NUMBER_WORDS[number.toString()[0]];
    const secondDigit = NUMBER_WORDS[number.toString()[1]];
    const thirdDigit = NUMBER_WORDS[number.toString()[2]];
    const lastTwoDigits = NUMBER_WORDS[number.toString().slice(-2)];
    const firstTens = NUMBER_WORDS[`${number.toString()[0]}0`];
    const secondTens = NUMBER_WORDS[`${number.toString()[1]}0`];
    const hundreds = NUMBER_WORDS[100];

    let result = "";

    if (number <= 20) {
        result = NUMBER_WORDS[number];
    } else if (number.toString().length <= 2) {
        if (number % 10 === 0) {
            result = firstTens;
        } else {
            result = `${firstTens} ${secondDigit}`;
        }
    } else {
        if (number % 100 === 0) {
            result = `${firstDigit} ${hundreds}`;
        } else if (number % 10 === 0) {
            result = `${firstDigit} ${hundreds} ${secondTens}`;
        } else if (number.toString()[1] == 0 && number.toString()[2] < 10) {
            result = `${firstDigit} ${hundreds} ${thirdDigit}`;
        } else if (number.toString().slice(-2) <= 20) {
            result = `${firstDigit} ${hundreds} ${lastTwoDigits}`;
        } else {
            result = `${firstDigit} ${hundreds} ${secondTens} ${thirdDigit}`;
        }
    }
    return result;
};
