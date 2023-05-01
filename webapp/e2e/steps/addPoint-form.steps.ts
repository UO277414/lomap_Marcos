import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/addPoint-form.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature (feature, test => {
    beforeAll(async () => {
        browser = process.env.GITHUB_ACTIONS
          ? await puppeteer.launch()
          : await puppeteer.launch({ headless: false, slowMo: 50 });
        page = await browser.newPage();
    
        await page
          .goto("http://localhost:3000", {
            waitUntil: "networkidle0",
          })
          .catch(() => {});
    
      }     
    );

    test('The user is registered and no introduce data' , ({given,when,then}) => {
        let name : string;
        let address : string;
        let description : string;
        let username: string;
        let password : string;

        given ('A registered user and no data', () => {
            username = "miguelglez";
            password = "Qwertyuiop1?";   
        });

        when('I navigate to the page and i press publish' , async () =>{


            //Solo la primera vez para ir a la pagina de SOLID
            await expect(page).toClick('button', { text: 'Log In' });

            await wait(10000);

            await expect(page).toFillForm('form[class="form-horizontal login-up-form"]', {
                //Utilizo la cuenta que creo miguel para los test
                username: username,
                password: password,
            });
        
            await wait(1000);
        
            // seleccionamos el botón del login
            await expect(page).toClick('button', { text: 'Log In' });
        
            await wait(15000);
            //Navego a la pagina de la creacion de punto
            await expect(page).toClick('button', {text: 'Añadir punto'});

            //Relleno el formulario
            await expect(page).toFillForm('form[class="createPoint-form"]', {
                nombre : name,
                direccion: address,
                description: description
            });
            await wait(1000);
            //Clicko el boton publicar
            await expect(page).toClick('button', { text: 'Publicar' });
        });

        then('An error message is shown in the screen', async () => {
            const text = await page.evaluate(() => document.body.textContent);
            expect(text).toMatch("El campo nombre del punto es obligatorio");
          });
    })


    function wait(time: number) {
        return new Promise(function (res) {
            setTimeout(res, time);
        });
      }

})