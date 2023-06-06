let clientesTexto = document.getElementById('client-names');

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {return response.json()})
    .then((post) => {
        clientesTexto.textContent = `${post.name}`;
    });

let initialBalance;
let currentBalance = 10000;

let selvaNegra = new Cake("Selva Negra", 2000);
let lemonPie = new Cake("Lemon Pie", 1500);
let tiramisu = new Cake("Tiramisu", 3000);

let purchases = [];

let purchaseSelvaNegra = document.getElementById("selva-negra");
let purchaseLemonPie = document.getElementById("lemon-pie");
let purchaseTiramisu = document.getElementById("tiramisu");

let encouragingText = document.querySelector(".encouraging-text");

let currentBalanceDisplay = document.querySelector("#current-balance");
currentBalanceDisplay.innerHTML = currentBalance;

let customerName = document.getElementById("customer-name");

let customerNameStorage = JSON.stringify(localStorage.getItem("userName"));

let selvaNegraAdquired;
let lemonPieAdquired;
let tiramisuAdquired;

let selvaNegraPurchased = document.getElementById("selva-negra-purchased");
let lemonPiePurchased = document.getElementById("lemon-pie-purchased");
let tiramisuPurchased = document.getElementById("tiramisu-purchased");

let selvaNegraRefund = document.getElementById("selva-negra-refund");
let lemonPieRefund = document.getElementById("lemon-pie-refund");
let tiramisuRefund = document.getElementById("tiramisu-refund");

purchaseSelvaNegra.addEventListener("click", () => {
    if(currentBalance >= selvaNegra.price){
        currentBalance -= selvaNegra.price;
        currentBalanceDisplay.innerHTML = currentBalance;
        purchases.push(selvaNegra.price);
        sumPurchases();
        selvaNegra.purchase();
        selvaNegraAdquired = purchases.filter((cakePrice) => {
            return cakePrice == selvaNegra.price;
        });
        console.log(selvaNegraAdquired);
        displaySelvaNegraPurchased();
    }else{
        insufficientFundsAlert.innerHTML ="Usted no tiene suficiente saldo para adquirir este producto!";
        insufficientFundsAlert.style.color = "red";
    }
});
purchaseLemonPie.addEventListener("click", () => {
    if(currentBalance >= lemonPie.price){
        currentBalance -= lemonPie.price;
        currentBalanceDisplay.innerHTML = currentBalance;
        purchases.push(lemonPie.price);
        sumPurchases();
        lemonPie.purchase();
        lemonPieAdquired = purchases.filter((cakePrice) => {
            return cakePrice == lemonPie.price;
        });
        console.log(lemonPieAdquired);
        displayLemonPiePurchased();
    }else{
        insufficientFundsAlert.innerHTML ="Usted no tiene suficiente saldo para adquirir este producto!";
        insufficientFundsAlert.style.color = "red";
    }
});
purchaseTiramisu.addEventListener("click", () => {
    if(currentBalance >= tiramisu.price){
        currentBalance -= tiramisu.price;
        currentBalanceDisplay.innerHTML = currentBalance;
        purchases.push(tiramisu.price);
        sumPurchases();
        tiramisu.purchase();
        tiramisuAdquired = purchases.filter((cakePrice) => {
            return cakePrice == tiramisu.price;
        });
        console.log(tiramisuAdquired);
        displayTiramisuPurchased();
    }else{
        insufficientFundsAlert.innerHTML ="Usted no tiene suficiente saldo para adquirir este producto!";
        insufficientFundsAlert.style.color = "red";
    }
});
let sumOutside;
function sumPurchases(){
    let sum = 0;
    for (let i = 0; i < purchases.length; i += 1) {
        sum += purchases[i];
    }
    console.log(purchases);
    console.log(sum);
    sumOutside = sum;
    console.log("sumOutside es igual a: " + sumOutside);
    encouragingText.innerHTML = ("Usted ha gastado un total de: $" + sumOutside);
    return sum;
}

 function displaySelvaNegraPurchased(){

        if (selvaNegraAdquired.length !== null)
        {
            selvaNegraPurchased.innerHTML = selvaNegraAdquired.length + " Selva/s Negra/s, "
        } else {
            selvaNegraPurchased.innerHTML = "0 Selva/s Negra/s, "
        }
}
function displayLemonPiePurchased(){

    if (lemonPieAdquired.length !== null)
    {
        lemonPiePurchased.innerHTML = lemonPieAdquired.length + " Lemon Pie/s, "
    } else {
        lemonPiePurchased.innerHTML = "0 Lemon Pie/s, "
    }
}
function displayTiramisuPurchased(){

    if (tiramisuAdquired.length !== null)
    {
        tiramisuPurchased.innerHTML = tiramisuAdquired.length + " Tiramisú/es"
    } else {
        tiramisuPurchased.innerHTML = "0 Tiramisú/es"
    }
}
function returnText(){
    let userName = document.getElementById("user-name").value;
    if (userName == "")
    {
        insufficientFundsAlert.innerHTML = "Por favor, ingrese un nombre valido";
        insufficientFundsAlert.style.color = "red";
    }else
    {
        customerName.innerHTML = userName;
        localStorage.setItem("userName", userName);
        insufficientFundsAlert.innerHTML = "";
        insufficientFundsAlert.style.color = "black";
    }
}

if (customerNameStorage){
    customerName.innerHTML = customerNameStorage;
}

selvaNegraRefund.addEventListener("click", () => {
    if (selvaNegraAdquired == undefined || selvaNegraAdquired.length === 0){
        insufficientFundsAlert.innerHTML = "Usted ya ha reembolsado todas sus Selvas Negras!";
        insufficientFundsAlert.style.color = "red";
    } else {
        let index = purchases.indexOf(selvaNegra.price);
        selvaNegraAdquired.pop();
        console.log(selvaNegraAdquired);
        currentBalance += selvaNegra.price;
        currentBalanceDisplay.innerHTML = currentBalance;   
        purchases.splice(index, 1);
        sumPurchases();
        displaySelvaNegraPurchased();
        insufficientFundsAlert.innerHTML = "Usted ha reembolsado 1 Selva Negra";
        insufficientFundsAlert.style.color = "red";
    }
})

lemonPieRefund.addEventListener("click", () => {
    if (lemonPieAdquired == undefined || lemonPieAdquired.length === 0){
        insufficientFundsAlert.innerHTML = "Usted ya ha reembolsado todos sus Lemon Pies!";
        insufficientFundsAlert.style.color = "red";
    } else {
        let index = purchases.indexOf(lemonPie.price);
        lemonPieAdquired.pop();
        console.log(lemonPieAdquired);
        currentBalance += lemonPie.price;
        currentBalanceDisplay.innerHTML = currentBalance;   
        purchases.splice(index, 1);
        sumPurchases();
        displayLemonPiePurchased();
        insufficientFundsAlert.innerHTML = "Usted ha reembolsado 1 Lemon Pie";
        insufficientFundsAlert.style.color = "red";
    }
})

tiramisuRefund.addEventListener("click", () => {
    if (tiramisuAdquired == undefined || tiramisuAdquired.length === 0){
        insufficientFundsAlert.innerHTML = "Usted ya ha reembolsado todos sus Tiramisues!";
        insufficientFundsAlert.style.color = "red";
    } else {
        let index = purchases.indexOf(tiramisu.price);
        tiramisuAdquired.pop();
        console.log(tiramisuAdquired);
        currentBalance += tiramisu.price;
        currentBalanceDisplay.innerHTML = currentBalance;   
        purchases.splice(index, 1);
        sumPurchases();
        displayTiramisuPurchased();
        insufficientFundsAlert.innerHTML = "Usted ha reembolsado 1 Tiramisu";
        insufficientFundsAlert.style.color = "red";
    }
})


