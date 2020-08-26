export const reverse = (input: string): string => {
    return input.replaceAll(/[^\W]/g, '')
        .split('')
        .reverse()
        .join('');
};
