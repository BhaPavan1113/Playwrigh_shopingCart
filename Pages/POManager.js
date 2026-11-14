const {loginPage} = require('../Pages/login')
const {dashboardPage} = require('../Pages/dashboard')
const {cartPage} = require('../Pages/cart');
const { orderPage } = require('../Pages/order');

class pageObjectManager{
    constructor(page){
        this.logindatapage=new loginPage(page);
        this.dashboardPage=new dashboardPage(page);
        this.cartPage=new cartPage(page);
        this.orderPage=new orderPage(page);

    }

     login(){
        return this.logindatapage;
    }

     dashboard(){
        return this.dashboardPage;
    }

     cart(){
        return this.cartPage;
    }

     order(){
        return this.orderPage;
    }
}

module.exports={pageObjectManager}