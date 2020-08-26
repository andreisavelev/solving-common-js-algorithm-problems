const pyramidByLoop = function (n: number): string {
    let result: string = '';
    const basic = n * 2 - 1;
    const midpoint = Math.floor(basic / 2);

    for (let row = 0; row < n; row++) {
        for (let column = 0; column < basic; column++) {
            if (column >= midpoint - row && column <= midpoint + row) {
                result += '#'
            } else {
                result += '_';
            }
        }

        result += '\n';
    }

    return result;
};
