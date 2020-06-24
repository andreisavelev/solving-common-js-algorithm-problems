const swap = function<T> (list: T[], indexFrom: number, indexTo: number ): T[] {
    return [
        list[indexTo], 
        list[indexFrom]
    ] = [
        list[indexTo], 
        list[indexFrom]
    ];
}

export default swap;