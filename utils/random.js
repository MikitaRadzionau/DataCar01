const {
    carsName,
    masCars,
    colorOfCar,
    NumberOfCar,
    ageOfCar,
    typeOfCar,
    countsOfBadMoves,
    sumOfNoPaid,
    images,
}=require("./mockData")

// --------- base functions
function getRandomElementFromArray(array) {
    if (Array.isArray(array) && array.length > 0) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    } else {
        return null;
    }
}
function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
// ------------ functions start
function getRandomCarName(){
    return getRandomElementFromArray(carsName);
}
function getRandomMasOfCar(){
    return getRandomElementFromArray(masCars);
}
function getRandomColorOfCar(){
    return getRandomElementFromArray(colorOfCar);
}
function getRandomNumberOfCar(){
    return getRandomElementFromArray(NumberOfCar);
}
function getRandomAgeOfCar(){
    return getRandomElementFromArray(ageOfCar);
}
function getRandomTypeOfCar(){
    return getRandomElementFromArray(typeOfCar);
}
function getRandomCountOfBadMoves(){
    return getRandomElementFromArray(countsOfBadMoves);
}
function getRandomSumNoPaid(){
    return getRandomElementFromArray(sumOfNoPaid);
}
function getRandomImg(){
    return getRandomElementFromArray(images);
}
// functions end
module.exports = {
    getRandomImg,
    getRandomCarName,
    getRandomMasOfCar,
    getRandomColorOfCar,
    getRandomNumberOfCar,
    getRandomAgeOfCar,
    getRandomTypeOfCar,
    getRandomCountOfBadMoves,
    getRandomSumNoPaid,
    getRandomInt,
}