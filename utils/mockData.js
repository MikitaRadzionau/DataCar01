const carsName = [
    "Tesla Model S",
    "Tesla Model E",
    "Tesla Model X",
    "Tesla Model Y",
    "BMW iX1",
    "BMW X7 M60i xDrive",
    "BMW M2 Coupe",
    "Mercedes-Maybach S-Class",
    "Mercedes-AMG",
    "Audi Q8",
    "Audi Q2",
    "Audi A3",
];
const images = [
    'https://images.prismic.io/carwow/a0b54c70-b58c-482c-8d28-b72884380e42_2023+Tesla+Model+S+front+quarter+static.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format',
    'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F3203037%2FTesla_Charger_EV_Charging_2022_10_15_T07_03_57_123_Z_d8ecf18431.jpeg&w=750&q=75',
    'https://www.cnnphilippines.com/.imaging/default/dam/cnn/2015/9/3/Tesla-Model-X_CNNPH-(1).png/jcr:content.png?width=750&height=450&crop:1:1,smart',
    'https://media.thuonghieuvaphapluat.vn/upload/2023/05/29/tesla-model-y-lot-top-xe-ban-chay-nhat-the-gioi.jpg',
    'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2FBMW_i_X1_de56f546f1.jpg&w=750&q=75',
    'https://www.bmw.by/content/dam/bmw/common/all-models/m-series/x7-m60i/2022/highlights/bmw-x-series-x7-m60i-gallery-image-impressions-01_890.jpg',
    'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F3202968%2FBMW_M2_2022_10_13_T05_53_44_882_Z_68bedafc64.jpg&w=750&q=75',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFTBMXcJ6WzD-bbpQlCpZ0u8quxEPXBsPVQ&usqp=CAU',
    'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2023%2F5%2F3207068%2Farticles%2F2023%2F5%2F3207069%2Farticles%2F2023%2F5%2F3207070%2Farticles%2F2023%2F5%2F3207070%2Farticles%2F2023%2F5%2F3207070%2Farticles%2F2023%2F5%2F3207078%2FAMG_GT_4_Door_Coupe_1_f8eb2d2368.jpg&w=750&q=75',
    'https://biznesistyl.pl/app/uploads/2023/09/image-2.png',
    'https://www.yanase.co.jp/audi/q2/img/index_slide01_08_sp.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LxID0cbkcVFABT947ztpNs4zkBTU8T56hQ&usqp=CAU',
]
const masCars =[];
for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    masCars.push(randomNumber);
  };
const NumberOfCar = [
    "8888 KA-3",
    "6446 II-1",
    "1111 AX-5",
    "E043AE-7",
    "2404 BO-4",
    "7814 RT-3",
    "HF8E QE-2",
    "7896 YU-6",
    "3493 YR-7",
    "1777 ZX-1",
    "LPD3 TN-5",
    "QWER TY-2",
    "TE53 HG-3",
    "PZ6X LS-6",
];
const colorOfCar = [
    "красная",
    "синяя",
    "желтая",
    "зеленая",
    "оранж",
    "лимонная",
    "невидимая",
    "государственная"
];
const ageOfCar =[]
for(i=0;i<20;i++){
    let randomNumber = Math.floor(Math.random() * (2000 - 1500 + 1)) + 2000;
    ageOfCar.push(randomNumber);
};
const typeOfCar = [
    "на бензе",
    "на пару",
    "на дизеле",
    "на божьей помощи"
];
const sumOfNoPaid = [];
for(i=0;i<20;i++){
    let randomNumber = Math.floor(Math.random() * (400 - 235 + 11)) + 142;
    sumOfNoPaid.push(randomNumber);
};
const countsOfBadMoves = [];
for(i=0;i<20;i++){
    let randomNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 2;
    countsOfBadMoves.push(randomNumber);
};
module.exports = {
    images,
    carsName,
    masCars,
    colorOfCar,
    NumberOfCar,
    ageOfCar,
    typeOfCar,
    countsOfBadMoves,
    sumOfNoPaid,
}