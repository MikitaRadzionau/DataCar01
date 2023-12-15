const fs = require("fs");
const path = require("path");
const url = require("url");

const {cars} = require("../data/cars_file");
const {contentTypes} = require("../config/mimeTypes");
const {
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
} = require("../utils/random");
const CarItemTemplate = fs.readFileSync("./templates/carItem.html","utf-8");
const CarListPageTemplate = fs.readFileSync("./templates/carListPage.html","utf-8");


function getRouter(req, response) {
    console.log(`\n\n\nUrl: ${req.url}\n`);
    const parsedUrl = url.parse(req.url, true);
    console.log(`.pathname: ${req.pathname}`);

    switch (parsedUrl.pathname) {
        case "/":
        case"/home":
        case"/index":
        case"/main":
        case"/hom":
            response.writeHead(301, {Location: "/index.html",});
            response.end();
            break;
        case "/cars":
            const filteredCars = cars
                .filter((car) => {
                    if (
                        parsedUrl.query.brand &&
                        !car.name
                        .toLowerCase()
                        .includes(parsedUrl.query.brand.toLowerCase())
                    )return false;
                    if (
                        parsedUrl.query.age &&
                        car.age > parseInt(parsedUrl.query.age)
                    )return false;

                    return true;
                })
                .sort(function(q, w) {
                    return q.age - w.age;
                });
            const renderedData = filteredCars
                .map((item) =>
                CarItemTemplate
                .replace("{{name}}",`Название : ${item.name}`)
                .replace("{{ageRealise}}",`Произведена в  : ${item.age}`)
                .replace("{{ves}}",`Весит : ${item.massa}`)
                .replace("{{number}}",`Номерной Знак : ${item.number}`)
                .replace("{{color}}",`Окрас : ${item.color}`)
                .replace("{{type}}", `Тип : ${item.type}`)
                .replace("{{countOfNarush}}",`Кол-во Нарушений : ${item.bad}`)
                .replace("{{sumFines}}",`Сумма Неуплат : ${item.notpaid} $`)
                .replace("{{img}}",getRandomImg())
                )
                .join("");
            const html = CarListPageTemplate
                .replace("{{content}}", renderedData)
                .replace("{{title}}", "CARS DATA")
                

            response.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8",
            });
            response.end(html);
            break;
        default:
            const filePath = path.join("./public", parsedUrl.pathname.substring(1));
            console.log(filePath);

            fs.access(filePath, fs.constants.R_OK, (err) => {
                if (err) {
                    response.writeHead(404, {
                        "Content-Type": "text/html; charset=utf-8",
                    });

                    response.end("<h1>Not found</h1>");
                } else {
                    const extname = path.extname(filePath);
                    const contentType =
                        contentTypes[extname] || "application/octet-stream";

                    response.writeHead(200, {
                        "Content-Type": contentType,
                    });
                    fs.createReadStream(filePath).pipe(response);
                }
            });
    }
};
module.exports = getRouter;





// ----------------------------------------------------------------
                            // myself
// ----------------------------------------------------------------
// fs.access - Проверяет, есть ли у указанного файла или каталога право на чтение.
// fs.createReadStream создаёт readable stream для файла или каталога.
//  Это позволяет читать содержимое файла или все файлы в каталоге.
//   Вы можете использовать его для чтения больших файлов или для получения содержимого каталога