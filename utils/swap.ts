const swap = function<T> (list: T[], indexFrom: number, indexTo: number ): T[] {
    return [
        list[indexFrom],
        list[indexTo]
    ] = [
        list[indexTo], 
        list[indexFrom]
    ];
}

export default swap;