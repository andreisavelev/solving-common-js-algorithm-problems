/**
 * Return the digit in @param num ath the given @param place value;
 * @param num {number}
 * @param place {number}
 * @returns {number}
 */
const getDigit = function (num: number, place: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

export default getDigit;