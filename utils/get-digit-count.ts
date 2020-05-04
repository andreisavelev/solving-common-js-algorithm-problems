/**
 * Returns count of digits in the given @param num
 * @param num {number}
 */
const getDigitCount = function (num: number): number {
    if (num === 0) {
        return 1;
    }

    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

export default getDigitCount;