const {test, expect} = require('@playwright/test');


const {pageObjectManager} = require('../Pages/POManager')

let productName="iphone 13 pro";
test('Shopping Application', async ({page})=>{
    const pom=new pageObjectManager(page)
    //login
    await pom.login().goto();
    await pom.login().login("bhapavan1113@gmail.com","Bala@1234");
    

    //dashboard
    await pom.dashboard().addtocart(productName);

    //cartpgae
    await pom.cart().checkoutPage(productName);

    //orderpage
    
    await pom.order().finalorderPage();

   
    
    //cart page
    // await page.locator("button[routerlink*='cart']").click();
    // const cartproducts=await page.locator(".cartSection h3");
    // const cartProductNames = [];
    // for(let i=0;i<await cartproducts.count();i++){
    //     cartProductNames.push(await cartproducts.nth(i).textContent());
    // }
    // if(cartProductNames.includes(productName)){
    //     await page.getByRole("button", { name: "Checkout" }).click();
    // }
    
    // await page.getByPlaceholder('Select Country').pressSequentially("ind");
    // const dropdown=page.locator(".ta-results");
    // await dropdown.waitFor();
    // for(let i=0;i<await dropdown.locator("button").count();i++){
    //     const text=(await dropdown.locator("button").nth(i).textContent()).trim();
    //     if(text==="India"){
    //         await dropdown.locator("button").nth(i).click();
    //         break;
    //     }
    // }

    // await page.locator(".action__submit").click();

    //ordered page
    // await page.locator(".hero-primary").waitFor();
    // const confirmMessage=await page.locator(".hero-primary").textContent();
    // expect(confirmMessage).toBe(" Thankyou for the order. ");
    // const orderId=await page.locator("//td[@class='em-spacer-1']//label[@class='ng-star-inserted']").textContent();
    // const orderIdValue=(await orderId.split(" ")[2]).trim();
    // console.log(orderIdValue);
});