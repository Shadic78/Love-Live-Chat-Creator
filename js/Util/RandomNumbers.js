// Max is not included
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};