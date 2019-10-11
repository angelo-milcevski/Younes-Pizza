function cart() {
    // Creating a JSON file out of the products array
    let dataString = JSON.stringify(products)
    let data = JSON.parse(dataString);

    let objects = JSON.parse(window.localStorage.getItem('products'));

    let cartDiv = document.getElementsByClassName("cart")[0];
    let totalPrice = document.getElementsByClassName("crt-Bill_TotalPrice")[0];

    let sumPrice = 0;
    let sumExtra = 0;

    if (!objects) {
        cartDiv.innerHTML = "Shopping Cart is empty"
    } else {
        for (let i = 0; i < objects.length; i++) {
            let objectId = parseInt(objects[i].id) - 1;
            let foodCategory = objects[i].category;

            if (foodCategory == "sandwich" || foodCategory == "salatretter" || foodCategory == "grillretter" || foodCategory == "burger" || foodCategory == "nuggets" || foodCategory == "diverse" || foodCategory == "menuer" || foodCategory == "snacks" || foodCategory == "pasta" || foodCategory == "ekstra") {

            cartDiv.innerHTML += `

                <div class="crt-Bill_Product">                
                    <p class="crt-Bill_ProductName" id="Bill_Productname"> ${data[foodCategory][objectId].name}</p>
                    <p class = "crt-Bill_ProductPriceNumber" id="Bill_Productprice"><b>DKK ${objects[i].price}</b></p>
                    <p class="crt-Bill_ProductIng"><b>Ingredients:</b></br> ${data[foodCategory][objectId].ingredients}<p>
                    <p class="crt-Bill_ProductExtra"><b>Extra:</b></br> ${objects[i].extra}</p>
                    <p class = "crt-Bill_ProductExtraPriceNumber"><b>DKK ${objects[i].extraPrice}</b></p>
                    <p class="crt-Bill_ProductComment"><b>Comments:</b></br> ${objects[i].comments}</p>
                </div>`;
                
                sumPrice = sumPrice + objects[i].price;
                sumExtra = sumExtra + objects[i].extraPrice;

                let price = sumPrice + sumExtra;
                let discount = price * 0.05;
                let finalPrice = price - discount

                totalPrice.innerHTML = "DKK "+ parseFloat(Math.round(finalPrice * 100) / 100).toFixed(2);


            } else {
                cartDiv.innerHTML += `       
                    <div class="crt-Bill_Product">          
                        <p class="crt-Bill_ProductName" id="Bill_Productname"> ${data[foodCategory][objectId].name}</p>
                        <p class="crt-Bill_ProductPriceNumber" id="Bill_Productprice"><b>DKK ${objects[i].price}</b></p>
                        <p class="crt-Bill_ProductIng"><b>Ingredients:</b></br> ${data[foodCategory][objectId].ingredients}<p>        
                        <p class="crt-Bill_ProductDough"><b>Dough:</b></br> ${objects[i].dough}</p>
                        <p class="crt-Bill_ProductExtra"><b>Extra:</b></br> ${objects[i].extra}</p>
                        <p class="crt-Bill_ProductExtraPriceNumber"><b>DKK ${objects[i].extraPrice}</b></p>
                        <p class="crt-Bill_ProductComment"><b>Comments:</b></br> ${objects[i].comments}</p>
                    </div>`;

                sumPrice = sumPrice + objects[i].price;
                sumExtra = sumExtra + objects[i].extraPrice;

                let price = sumPrice + sumExtra;
                let discount = price * 0.05;
                let finalPrice = price - discount

                totalPrice.innerHTML = "DKK "+ parseFloat(Math.round(finalPrice * 100) / 100).toFixed(2);
            }
        }
    }
}

function clearStorage(){   
    if (confirm('Are you sure you want to clear your basket?')) {
        
    localStorage.clear();
     countCartItems();
    location.reload();

    } else {
    //
    }   
}


/*Paying method*/

function ChooseGetting(){
    let chooseGetting = document.getElementsByClassName("crt-Buttons_ChooseGetting")[0];
    let payingMethPU = document.getElementsByClassName("crt-Button_PayingMethPU")[0];
    let payingMethD = document.getElementsByClassName("crt-Button_PayingMethD")[0];
    let paying = document.getElementsByClassName("crt-Button_Paying")[0];
    let text = document.getElementsByClassName("crt-Button_Text")[0];

    chooseGetting.classList.remove("crt-Buttons-hide");
    chooseGetting.classList.add("crt-Buttons-show");

    payingMethPU.classList.add("crt-Buttons-hide");
    payingMethPU.classList.remove("crt-Buttons-show");
    payingMethD.classList.add("crt-Buttons-hide");
    payingMethD.classList.remove("crt-Buttons-show");
    paying.classList.add("crt-Buttons-hide")
    paying.classList.remove("crt-Buttons-show");
    text.classList.add("crt-Buttons-hide");
    text.classList.remove("crt-Buttons-show");
}

function PayingMethPU(){
    let pickup = document.getElementsByClassName("crt-PickUpBtn")[0];
    let delivery = document.getElementsByClassName("crt-DeliveryBtn")[0];
    let punow = document.getElementsByClassName("crt-PUNow")[0];
    let pulater = document.getElementsByClassName("crt-PULater")[0];
    let dnow = document.getElementsByClassName("crt-DNow")[0];
    let dlater = document.getElementsByClassName("crt-DLater")[0];
    let mpbtn = document.getElementsByClassName("crt-MobilePayBtn")[0];
    let ccbtn = document.getElementsByClassName("crt-CreditCardBtn")[0];

    let payingMethPU = document.getElementsByClassName("crt-Button_PayingMethPU")[0];
    let payingMethD = document.getElementsByClassName("crt-Button_PayingMethD")[0];
    let paying = document.getElementsByClassName("crt-Button_Paying")[0];
    let text = document.getElementsByClassName("crt-Button_Text")[0];

    pickup.classList.add("crt-activeBtn");
    pickup.classList.remove("crt-nonactiveBtn");

    delivery.classList.add("crt-nonactiveBtn");
    delivery.classList.remove("crt-activeBtn");
    punow.classList.add("crt-nonactiveBtn");
    punow.classList.remove("crt-activeBtn");
    pulater.classList.add("crt-nonactiveBtn");
    pulater.classList.remove("crt-activeBtn");
    dnow.classList.add("crt-nonactiveBtn");
    dnow.classList.remove("crt-activeBtn");
    dlater.classList.add("crt-nonactiveBtn");
    dlater.classList.remove("crt-activeBtn");
    mpbtn.classList.add("crt-nonactiveBtn");
    mpbtn.classList.remove("crt-activeBtn");
    ccbtn.classList.add("crt-nonactiveBtn");
    ccbtn.classList.remove("crt-activeBtn");

    payingMethPU.classList.remove("crt-Buttons-hide");
    payingMethPU.classList.add("crt-Buttons-show");
    
    payingMethD.classList.add("crt-Buttons-hide");
    payingMethD.classList.remove("crt-Buttons-show");
    paying.classList.add("crt-Buttons-hide");
    paying.classList.remove("crt-Buttons-show");
    text.classList.add("crt-Buttons-hide");
    text.classList.remove("crt-Buttons-show");
}

function PayingMethD(){
    let pickup = document.getElementsByClassName("crt-PickUpBtn")[0];
    let delivery = document.getElementsByClassName("crt-DeliveryBtn")[0];
    let payingMethPU = document.getElementsByClassName("crt-Button_PayingMethPU")[0];
    let payingMethD = document.getElementsByClassName("crt-Button_PayingMethD")[0];
    let paying = document.getElementsByClassName("crt-Button_Paying")[0];
    let text = document.getElementsByClassName("crt-Button_Text")[0];

    delivery.classList.add("crt-activeBtn");
    delivery.classList.remove("crt-nonactiveBtn");

    pickup.classList.add("crt-nonactiveBtn");
    pickup.classList.remove("crt-activeBtn");

    payingMethD.classList.remove("crt-Buttons-hide");
    payingMethD.classList.add("crt-Buttons-show");

    payingMethPU.classList.add("crt-Buttons-hide");
    payingMethPU.classList.remove("crt-Buttons-show");
    paying.classList.add("crt-Buttons-hide");
    paying.classList.remove("crt-Buttons-show");
    text.classList.add("crt-Buttons-hide");
    text.classList.remove("crt-Buttons-show");
}

function PayingPU(){    
    let mpbtn = document.getElementsByClassName("crt-MobilePayBtn")[0];
    let ccbtn = document.getElementsByClassName("crt-CreditCardBtn")[0];
    let now = document.getElementsByClassName("crt-PUNow")[0];
    let later = document.getElementsByClassName("crt-PULater")[0];
    let paying = document.getElementsByClassName("crt-Button_Paying")[0];
    let text = document.getElementsByClassName("crt-Button_Text")[0];
    let mobilepay = document.getElementsByClassName("crt-MobilePayForm")[0];
    let creditcard = document.getElementsByClassName("crt-CreditCardForm")[0];

    now.classList.add("crt-activeBtn");
    now.classList.remove("crt-nonactiveBtn");

    later.classList.add("crt-nonactiveBtn");
    later.classList.remove("crt-activeBtn");
    mpbtn.classList.add("crt-nonactiveBtn");
    mpbtn.classList.remove("crt-activeBtn");
    ccbtn.classList.add("crt-nonactiveBtn");
    ccbtn.classList.remove("crt-activeBtn");

    paying.classList.remove("crt-Buttons-hide");
    paying.classList.add("crt-Buttons-show");

    text.classList.add("crt-Buttons-hide");
    text.classList.remove("crt-Buttons-show");
    mobilepay.classList.add("crt-Buttons-hide");    
    mobilepay.classList.remove("crt-Buttons-show");
    creditcard.classList.add("crt-Buttons-hide");    
    creditcard.classList.remove("crt-Buttons-show");
}

function TextPU(){    
    let mpbtn = document.getElementsByClassName("crt-MobilePayBtn")[0];
    let ccbtn = document.getElementsByClassName("crt-CreditCardBtn")[0];
    let now = document.getElementsByClassName("crt-PUNow")[0];
    let later = document.getElementsByClassName("crt-PULater")[0];
    let paying = document.getElementsByClassName("crt-Button_Paying")[0];
    let text = document.getElementsByClassName("crt-Button_Text")[0];
    
    later.classList.add("crt-activeBtn");
    later.classList.remove("crt-nonactiveBtn");

    now.classList.add("crt-nonactiveBtn");
    now.classList.remove("crt-activeBtn");
    mpbtn.classList.add("crt-nonactiveBtn");
    mpbtn.classList.remove("crt-activeBtn");
    ccbtn.classList.add("crt-nonactiveBtn");
    ccbtn.classList.remove("crt-activeBtn");

    text.classList.remove("crt-Buttons-hide");
    text.classList.add("crt-Buttons-show");

    paying.classList.add("crt-Buttons-hide");
    paying.classList.remove("crt-Buttons-show");
}

function PayingD(){    
    let mpbtn = document.getElementsByClassName("crt-MobilePayBtn")[0];
    let ccbtn = document.getElementsByClassName("crt-CreditCardBtn")[0];
    let now = document.getElementsByClassName("crt-DNow")[0];
    let later = document.getElementsByClassName("crt-DLater")[0];
    let paying = document.getElementsByClassName("crt-Button_Paying")[0];
    let text = document.getElementsByClassName("crt-Button_Text")[0];
    let mobilepay = document.getElementsByClassName("crt-MobilePayForm")[0];
    let creditcard = document.getElementsByClassName("crt-CreditCardForm")[0];

    now.classList.add("crt-activeBtn");
    now.classList.remove("crt-nonactiveBtn");

    later.classList.add("crt-nonactiveBtn");
    later.classList.remove("crt-activeBtn");
    mpbtn.classList.add("crt-nonactiveBtn");
    mpbtn.classList.remove("crt-activeBtn");
    ccbtn.classList.add("crt-nonactiveBtn");
    ccbtn.classList.remove("crt-activeBtn");

    paying.classList.remove("crt-Buttons-hide");
    paying.classList.add("crt-Buttons-show");

    text.classList.add("crt-Buttons-hide");
    text.classList.remove("crt-Buttons-show");
    mobilepay.classList.add("crt-Buttons-hide");    
    mobilepay.classList.remove("crt-Buttons-show");
    creditcard.classList.add("crt-Buttons-hide");    
    creditcard.classList.remove("crt-Buttons-show");
}

function TextD(){   
    let mpbtn = document.getElementsByClassName("crt-MobilePayBtn")[0];
    let ccbtn = document.getElementsByClassName("crt-CreditCardBtn")[0]; 
    let now = document.getElementsByClassName("crt-DNow")[0];
    let later = document.getElementsByClassName("crt-DLater")[0];
    let paying = document.getElementsByClassName("crt-Button_Paying")[0];
    let text = document.getElementsByClassName("crt-Button_Text")[0];
    
    later.classList.add("crt-activeBtn");
    later.classList.remove("crt-nonactiveBtn");

    now.classList.add("crt-nonactiveBtn");
    now.classList.remove("crt-activeBtn");
    mpbtn.classList.add("crt-nonactiveBtn");
    mpbtn.classList.remove("crt-activeBtn");
    ccbtn.classList.add("crt-nonactiveBtn");
    ccbtn.classList.remove("crt-activeBtn");

    text.classList.remove("crt-Buttons-hide");
    text.classList.add("crt-Buttons-show");

    paying.classList.add("crt-Buttons-hide");
    paying.classList.remove("crt-Buttons-show");
}

function MobilePay(){    
    let mpbtn = document.getElementsByClassName("crt-MobilePayBtn")[0];
    let ccbtn = document.getElementsByClassName("crt-CreditCardBtn")[0];
    let mobilepay = document.getElementsByClassName("crt-MobilePayForm")[0];
    let creditcard = document.getElementsByClassName("crt-CreditCardForm")[0];
    
    mpbtn.classList.add("crt-activeBtn");
    mpbtn.classList.remove("crt-nonactiveBtn");

    ccbtn.classList.add("crt-nonactiveBtn");
    ccbtn.classList.remove("crt-activeBtn");
    
    mobilepay.classList.remove("crt-Buttons-hide");
    mobilepay.classList.add("crt-Buttons-show");

    creditcard.classList.add("crt-Buttons-hide");    
    creditcard.classList.remove("crt-Buttons-show");
}

function CreditCard(){    
    let mpbtn = document.getElementsByClassName("crt-MobilePayBtn")[0];
    let ccbtn = document.getElementsByClassName("crt-CreditCardBtn")[0];
    let mobilepay = document.getElementsByClassName("crt-MobilePayForm")[0];
    let creditcard = document.getElementsByClassName("crt-CreditCardForm")[0];
    
    ccbtn.classList.add("crt-activeBtn");
    ccbtn.classList.remove("crt-nonactiveBtn");

    mpbtn.classList.add("crt-nonactiveBtn");
    mpbtn.classList.remove("crt-activeBtn");
    
    creditcard.classList.remove("crt-Buttons-hide");
    creditcard.classList.add("crt-Buttons-show");

    mobilepay.classList.add("crt-Buttons-hide");    
    mobilepay.classList.remove("crt-Buttons-show");
}

function checklenght(element){
    if (element.value.length > element.maxLength) {
        element.value = element.value.slice(0, element.maxLength)
    }
}
    
