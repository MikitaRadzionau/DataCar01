const {
    getRandomImg,
    getRandomCarName,
    getRandomAgeOfCar,
    getRandomColorOfCar,
    getRandomCountOfBadMoves,
    getRandomMasOfCar,
    getRandomNumberOfCar,
    getRandomTypeOfCar,
    getRandomSumNoPaid,
    getRandomInt,
} = require("../utils/random");

const cars = Array.from({length: getRandomInt(8,20)}, ()=>({
    img:getRandomImg(),
    name:getRandomCarName(),
    age:getRandomAgeOfCar(),
    color:getRandomColorOfCar(),
    massa:getRandomMasOfCar(),
    number:getRandomNumberOfCar(),
    type:getRandomTypeOfCar(),
    bad:getRandomCountOfBadMoves(),
    notpaid:getRandomSumNoPaid()
}));

// export
module.exports = {cars};