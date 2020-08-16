// module.exports = tegel;
module.exports = aanvraag;

let quickfix = `${Math.random()}`;

function aanvraag(args) {
    if (!args) {
        return 'Gun iets voor op de tegel 😡';
    }

    let tegelArr = [];

    for (let i in args) {
        tegelArr.push(args[i]);
    }
    tegelArr.shift();


    let tegelStr = tegelArr.join('%20');

    async function myAsyncFunc() {
        try {
            let result = await tegel(tegelStr);
            console.log(result);
            quickfix++;
        } catch (err) {
            console.log(err);
        }
    }
    myAsyncFunc();
    return quickfix;
}


// path: `img/${quickfix}.png`
// `Foto opgeslagen onder de naam ${quickfix}`

function tegel(text) {
    const puppeteer = require('puppeteer');

    return new Promise(function (resolve, reject) {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setViewport({
                width: 800,
                height: 800,
                deviceScaleFactor: 1,
            });
            await page.goto(`https://vuurvos1.github.io/tileGenerator/?${text}`);
            await page.screenshot({
                path: `img/${quickfix}.png`
            });
            console.log(`Foto opgeslagen onder de naam ${quickfix}`);
            await browser.close();
            resolve('done')

        })();
    });
}