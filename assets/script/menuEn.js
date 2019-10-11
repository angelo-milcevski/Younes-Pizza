function allFood() {
    let foodCategoriesBtn = document.getElementsByClassName("foodSelector");
    for (let a = 0; a < foodCategoriesBtn.length; a++) {
        foodCategoriesBtn[a].style.display = "block";
    }

    /// (Anna) I added 2 more for loop to add the box and the title of the category
    let catBox = document.getElementsByClassName("mn-Content_Box");
    for (let a = 0; a < catBox.length; a++) {
        catBox[a].style.display = "block";
    }

    let menuTitle = document.getElementsByClassName("mn-Title")[0];
    menuTitle.style.display = "block";

    let allFood = document.getElementsByClassName("food");
    for (let a = 0; a < allFood.length; a++) {
        allFood[a].style.display = "none"
    }

    let arrows = document.getElementsByClassName("fa-arrow-left");
    for (let a = 0; a < arrows.length; a++) {
        arrows[a].style.display = "none";
    }
}

function display(productType) {
    document.getElementsByClassName(productType + "Menu")[0].style.display = "block";

    let foodCategoriesBtn = document.getElementsByClassName("foodSelector");
    for (let a = 0; a < foodCategoriesBtn.length; a++) {
        foodCategoriesBtn[a].style.display = "none";
    }

    /// (Anna) I added 2 more for loop to hide the box and the title of the category
    let catBox = document.getElementsByClassName("mn-Content_Box");
    for (let a = 0; a < catBox.length; a++) {
        catBox[a].style.display = "none";
    }

    let menuTitle = document.getElementsByClassName("mn-Title")[0];
    menuTitle.style.display = "none";

    let arrows = document.getElementsByClassName("fa-arrow-left");
    for (let a = 0; a < arrows.length; a++) {
        arrows[a].style.display = "block";
    }
}


// Creating a JSON file out of the products array
let dataString = JSON.stringify(products)
let data = JSON.parse(dataString);


// this is OnClick function that has pizza type as parameter
function foodType(category, type, elements) {

    //(Anna) the 'elements' in the () above is added in order to be able to add and remove styling from the buttons
    let activateBtn = document.getElementsByClassName('PizzaBtn');

    for (a = 0; a < activateBtn.length; a++) {
        activateBtn[a].classList.remove("hey");
    }

    if (category == "pizza") {
        elements.classList.add("hey");
    } else {
        elements.classList.remove("hey");
    }  

    // I am passing type of pizza into the print function along with json data.
    printData(data, category, type);

    let allCat = document.getElementsByClassName(category);
    for (let c = 0; c < allCat.length; c++) {
        allCat[c].style.display = "none"
    }

    let allTypes = document.getElementsByClassName(type);
    for (let c = 0; c < allTypes.length; c++) {
        allTypes[c].style.display = "block"
    }

    //selecting all boxes (comments,dough,grain etc box) and hiding it whenever you switch between types of pizzas
    let allBoxes = document.getElementsByClassName("orderBox");
    for (let a = 0; a < allBoxes.length; a++) {
        allBoxes[a].style.display = "none"
    }
}


function printData(data, category, type) {

    // there is products div in HTML and it is empty, later we'll fill it with the products that user picks
    let productsDiv = document.getElementsByClassName(category + "Menu")[0]

    // a few lines below, we will print data with pizza type in the class name.
    // So now, we are checking if there are any divs with selected type of pizza, if there are not, we will create them
    // We are doing this to avoid duplicating divs whenever you click on the button
    let checkDivs = document.getElementsByClassName(type)
    if (checkDivs.length === 0) {

        let allPizza = document.getElementsByClassName('products')[0].querySelectorAll(category);
        let allOrderBox = document.getElementsByClassName('orderBox')

        // all pizza divs have a class name - "pizza 'type of pizza'", now we are hiding all pizzas whenever you click on the button, so when you are switching from eg. america to italian - to hide all american pizzas
        for (let k = 0; k < allPizza.length; k++) {

            allPizza[k].style.display = "none"
            // allOrderBox[k].style.display = "none"
        }

        // looping through all pizzas
        for (let a = 0; a < data[category].length; a++) {
            // checking if JSON type of pizza = selected type of pizza, also getting the number of pizza types. eg italian = 2, american = 4
            if (data[category][a].category == type) {

                if (type == "borne" || type == "american" || type == "indbagte" || type == "fedtfattig") {
                    productsDiv.innerHTML +=
                        `<div class='${category} ${data[category][a].category} productInfo' style='display:block'> 
                            <h2 class = "productName">${data[category][a].name}</h2> 
                            <p id = "productNormalPrice">DKK ${data[category][a].sPrice}</p> 
                            <i class="fas fa-plus-square" onclick="openDetails('${category}${data[category][a].id}')"></i> 
                            <p class = "productIngredients">${data[category][a].ingredients}</p>
                        </div>

                        <div class='orderBox' id="orderBox${category}${data[category][a].id}" style="display: none">
                            <i class="fas fa-times" onclick="hideOrderBox('${category}${data[category][a].id}')"></i>
                        
                            <div class = "sizeChoose">
                                <input type="radio" name="size${category}${data[category][a].id}" class="size${category}${data[category][a].id} normalsizeCheck" value="${data[category][a].sPrice}" onclick="priceUpdate('${category}${data[category][a].id}', ${data[category][a].sPrice})" checked>
                                <p class = "normalsize">Normal Size</p> <p class = "normalsizePrice">DKK ${data[category][a].sPrice}</p>
                            </div>

                            <div class = "doughChoose">
                                <input type="radio" name="dough${category}${data[category][a].id}" class="normalDoughCheck dough${category}${data[category][a].id}" value="nDough${data[category][a].id}">
                                <p class = "normalDough">Normal Dough</p>

                                <input type="radio" name="dough${category}${data[category][a].id}" class="wholeDoughCheck dough${category}${data[category][a].id}" value="grain${data[category][a].id}">
                                <p class = "wholeDough">Whole Grain</p>
                                
                                <input type="radio" checked name="dough${category}${data[category][a].id}" class="dough${category}${data[category][a].id}" value="nDough${data[category][a].id}" style="display:none" checked> 
                            </div>

                            <button class = "extraBtn" type="button" onclick="displayExtra('${category}${data[category][a].id}')">Extra <i class="fas fa-chevron-down"></i></button>

                                       <div class="extraBox" id="extraBox${category}${data[category][a].id}" style="overflow: auto;">                        
                                <input type="checkbox" name="garlic" value="0" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Garlic (0.00)</p>
                                <input type="checkbox" name="oregano" value="0" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Oregano (0.00)</p>
                                <input type="checkbox" name="chili" value="0" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Chili (0.00)</p>
                                <input type="checkbox" name="tuna" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Tuna (7.00)</p>
                                <input type="checkbox" name="chicken" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Chicken (7.00)</p>
                                <input type="checkbox" name="feta cheese" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Feta Cheese (7.00)</p>
                                <input type="checkbox" name="kebab" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Kebab (7.00)</p>
                                <input type="checkbox" name="sausages" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Sausages (7.00)</p>
                                <input type="checkbox" name="mushroom" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Mushroom (7.00)</p>
                                <input type="checkbox" name="corn" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Corn (7.00)</p>
                                <input type="checkbox" name="tomato" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Tomato (7.00)</p>
                                <input type="checkbox" name="ham" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Ham (7.00)</p>
                                <input type="checkbox" name="salad" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Salad (7.00)</p>
                                <input type="checkbox" name="paprika" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Paprika (7.00)</p>
                                <input type="checkbox" name="pepperoni" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Pepperoni (7.00)</p>
                                <input type="checkbox" name="onion" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Onion (7.00)</p>
                                <input type="checkbox" name="beed" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Beef (7.00)</p>
                                <input type="checkbox" name="meat sauce" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Meat Sauce (7.00)</p>
                                <input type="checkbox" name="jalapenos" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Jalapenos (7.00)</p>
                                <input type="checkbox" name="gorgonzola" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Gorgonzola (7.00)</p>
                                <input type="checkbox" name="creme fraiche dressing" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Creme fraiche dressing (7.00)</p>
                                <input type="checkbox" name="bacon" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Bacon (7.00)</p>
                                <input type="checkbox" name="spaghetti" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Spaghetti (7.00)</p>
                                <input type="checkbox" name="Mussels" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Mussels (7.00)</p>
                                <input type="checkbox" name="salad and dressing" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Salat and Dressing (7.00)</p>
                                <input type="checkbox" name="prawns" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Prawns (7.00)</p>
                                <input type="checkbox" name="bell pepper" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Bell pepper (7.00)</p>
                                <input type="checkbox" name="cheese" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Cheese (7.00)</p>
                                <input type="checkbox" name="olive" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Olive (7.00)</p>
                                <input type="checkbox" name="ananas" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Ananas (7.00)</p>
                            </div>

                            <p class = "orderCommentTitle">Comments</p>  

                            <input type="text" placeholder="Write your Comment" class="orderComment" id="orderComment${data[category][a].id}">
                            
                            <button type='button' class = "addToCartBtn" onClick="addToCart(${data[category][a].id},'${category}');countCartItems();">Add To Cart</button>
                            
                            <span class="productPrice" id="productPrice${category}${data[category][a].id}">DKK ${data[category][a].sPrice}</span>                                 
                        </div>`;
                    
                }else if(category == "drikkevarer" || category == "ekstra"){
                    
                    productsDiv.innerHTML +=
                        `<div class='${category} ${data[category][a].category} productInfo' style='display:block'> 
                            <h2 class = "productName">${data[category][a].name}</h2> 
                            <p id = "productNormalPrice">DKK ${data[category][a].sPrice}</p> 
                            <i class="fas fa-plus-square" onclick="openDetails('${category}${data[category][a].id}')"></i> 
                        </div>

                        <div class='orderBox' id="orderBox${category}${data[category][a].id}" style="display: none">
                            <i class="fas fa-times" onclick="hideOrderBox('${category}${data[category][a].id}')" style="float:right"></i>
                            
                            <div class = "sizeChoose">
                                <input type="radio" name="size${category}${data[category][a].id}" class="size${category}${data[category][a].id} normalsizeCheck" value="${data[category][a].sPrice}" onclick="priceUpdate('${category}${data[category][a].id}', ${data[category][a].sPrice})" checked> 
                                <p class = "normalsize">Normal Size</p> <p class = "normalsizePrice"> DKK ${data[category][a].sPrice}</p>
                                
                                <input type="radio" checked name="dough${category}${data[category][a].id}" class="dough${category}${data[category][a].id}" value="nDough${data[category][a].id}" style="display:none" checked> 
                            </div>

                            <p class = "orderCommentTitle">Comments</p>  

                            <input type="text" placeholder="Write your Comment" class="orderComment" id="orderComment${data[category][a].id}">
                            
                            <button type='button' class = "addToCartBtn" onClick="addToCart(${data[category][a].id},'${category}');countCartItems();">Add To Cart</button>
                            
                            <span class="productPrice" id="productPrice${category}${data[category][a].id}">DKK ${data[category][a].sPrice}</span>                                 
                        </div>`;

                }  else if(category == "sandwich" || category == "salatretter" || category == "grillretter" || category == "burger" || category== "nuggets" || category == "menuer" || category == "snacks" || category == "diverse" || category == "pasta" || category == "pita"){
                        
                    productsDiv.innerHTML +=
                        `<div class='${category} ${data[category][a].category} productInfo' style='display:block'> 
                            <h2 class = "productName">${data[category][a].name}</h2> 
                            <p id = "productNormalPrice">DKK ${data[category][a].sPrice}</p> 
                            <i class="fas fa-plus-square" onclick="openDetails('${category}${data[category][a].id}')"></i> 
                            <p class = "productIngredients">${data[category][a].ingredients}</p>
                        </div>

                        <div class='orderBox' id="orderBox${category}${data[category][a].id}" style="display: none">
                            <i class="fas fa-times" onclick="hideOrderBox('${category}${data[category][a].id}')" style="float:right"></i>
                            
                            <div class = "sizeChoose">
                                <input type="radio" name="size${category}${data[category][a].id}" class="size${category}${data[category][a].id} normalsizeCheck" value="${data[category][a].sPrice}" onclick="priceUpdate('${category}${data[category][a].id}', ${data[category][a].sPrice})" checked> 
                                <p class = "normalsize">Normal Size</p> <p class = "normalsizePrice"> DKK ${data[category][a].sPrice}</p>
                                
                                <input type="radio" checked name="dough${category}${data[category][a].id}" class="dough${category}${data[category][a].id}" value="nDough${data[category][a].id}" style="display:none" checked> 
                            </div>

                            <button class = "extraBtn" type="button" onclick="displayExtra('${category}${data[category][a].id}')">Extra <i class="fas fa-chevron-down"></i></button>

                                       <div class="extraBox" id="extraBox${category}${data[category][a].id}" style="overflow: auto;">                        
                                <input type="checkbox" name="garlic" value="0" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Garlic (0.00)</p>
                                <input type="checkbox" name="oregano" value="0" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Oregano (0.00)</p>
                                <input type="checkbox" name="chili" value="0" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Chili (0.00)</p>
                                <input type="checkbox" name="tuna" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Tuna (7.00)</p>
                                <input type="checkbox" name="chicken" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Chicken (7.00)</p>
                                <input type="checkbox" name="feta cheese" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Feta Cheese (7.00)</p>
                                <input type="checkbox" name="kebab" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Kebab (7.00)</p>
                                <input type="checkbox" name="sausages" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Sausages (7.00)</p>
                                <input type="checkbox" name="mushroom" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Mushroom (7.00)</p>
                                <input type="checkbox" name="corn" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Corn (7.00)</p>
                                <input type="checkbox" name="tomato" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Tomato (7.00)</p>
                                <input type="checkbox" name="ham" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Ham (7.00)</p>
                                <input type="checkbox" name="salad" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Salad (7.00)</p>
                                <input type="checkbox" name="paprika" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Paprika (7.00)</p>
                                <input type="checkbox" name="pepperoni" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Pepperoni (7.00)</p>
                                <input type="checkbox" name="onion" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Onion (7.00)</p>
                                <input type="checkbox" name="beed" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Beef (7.00)</p>
                                <input type="checkbox" name="meat sauce" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Meat Sauce (7.00)</p>
                                <input type="checkbox" name="jalapenos" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Jalapenos (7.00)</p>
                                <input type="checkbox" name="gorgonzola" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Gorgonzola (7.00)</p>
                                <input type="checkbox" name="creme fraiche dressing" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Creme fraiche dressing (7.00)</p>
                                <input type="checkbox" name="bacon" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Bacon (7.00)</p>
                                <input type="checkbox" name="spaghetti" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Spaghetti (7.00)</p>
                                <input type="checkbox" name="Mussels" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Mussels (7.00)</p>
                                <input type="checkbox" name="salad and dressing" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Salat and Dressing (7.00)</p>
                                <input type="checkbox" name="prawns" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Prawns (7.00)</p>
                                <input type="checkbox" name="bell pepper" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Bell pepper (7.00)</p>
                                <input type="checkbox" name="cheese" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Cheese (7.00)</p>
                                <input type="checkbox" name="olive" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Olive (7.00)</p>
                                <input type="checkbox" name="ananas" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Ananas (7.00)</p>
                            </div>

                            <p class = "orderCommentTitle">Comments</p>  

                            <input type="text" placeholder="Write your Comment" class="orderComment" id="orderComment${data[category][a].id}">
                            
                            <button type='button' class = "addToCartBtn" onClick="addToCart(${data[category][a].id},'${category}');countCartItems();">Add To Cart</button>
                            
                            <span class="productPrice" id="productPrice${category}${data[category][a].id}">DKK ${data[category][a].sPrice}</span>                                 
                        </div>`;
                    
                } else {

                    // Filling an empty div with product information
                    productsDiv.innerHTML +=
                        `<div class='${category} ${data[category][a].category} productInfo' style='display:block'> 
                            <h2 class = "productName">${data[category][a].name}</h2> 
                            <p id = "productNormalPrice">DKK ${data[category][a].sPrice}</p> 
                            <i class="fas fa-plus-square" onclick="openDetails('${category}${data[category][a].id}')"></i> 
                            <p class = "productIngredients">${data[category][a].ingredients}</p>
                        </div>
                        
                        <div class='orderBox' id="orderBox${category}${data[category][a].id}" style="display: none">
                            <i class="fas fa-times" onclick="hideOrderBox('${category}${data[category][a].id}')"></i>
                      
                            <div class = "sizeChoose">
                                <input type="radio" name="size${category}${data[category][a].id}" class="size${category}${data[category][a].id} normalsizeCheck" value="${data[category][a].sPrice}" onclick="priceUpdate('${category}${data[category][a].id}', ${data[category][a].sPrice})">
                                <p class = "normalsize">Normal Size</p> <p class = "normalsizePrice">DKK ${data[category][a].sPrice}</p>

                                <input type="radio" name="size${category}${data[category][a].id}" class="size${category}${data[category][a].id} normalsizeCheck" value="${data[category][a].bPrice}" onclick="priceUpdate('${category}${data[category][a].id}', ${data[category][a].bPrice})"> 
                                <p class = "normalsize">Family Size</p> <p class = "normalsizePrice">DKK ${data[category][a].bPrice}</p>
                            </div>

                            <div class = "doughChoose">
                                <input type="radio" name="dough${category}${data[category][a].id}" class="normalDoughCheck dough${category}${data[category][a].id}" value="nDough${data[category][a].id}">
                                <p class = "normalDough">Normal Dough</p>

                                <input type="radio" name="dough${category}${data[category][a].id}" class="wholeDoughCheck dough${category}${data[category][a].id}" value="grain${data[category][a].id}">
                                <p class = "wholeDough">Whole Grain</p>
                            </div>

                            <button class = "extraBtn" type="button" onclick="displayExtra('${category}${data[category][a].id}')">Extra <i class="fas fa-chevron-down"></i></button>

                                       <div class="extraBox" id="extraBox${category}${data[category][a].id}" style="overflow: auto;">                        
                                <input type="checkbox" name="garlic" value="0" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Garlic (0.00)</p>
                                <input type="checkbox" name="oregano" value="0" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Oregano (0.00)</p>
                                <input type="checkbox" name="chili" value="0" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Chili (0.00)</p>
                                <input type="checkbox" name="tuna" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Tuna (7.00)</p>
                                <input type="checkbox" name="chicken" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Chicken (7.00)</p>
                                <input type="checkbox" name="feta cheese" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Feta Cheese (7.00)</p>
                                <input type="checkbox" name="kebab" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Kebab (7.00)</p>
                                <input type="checkbox" name="sausages" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Sausages (7.00)</p>
                                <input type="checkbox" name="mushroom" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Mushroom (7.00)</p>
                                <input type="checkbox" name="corn" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Corn (7.00)</p>
                                <input type="checkbox" name="tomato" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Tomato (7.00)</p>
                                <input type="checkbox" name="ham" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Ham (7.00)</p>
                                <input type="checkbox" name="salad" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Salad (7.00)</p>
                                <input type="checkbox" name="paprika" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Paprika (7.00)</p>
                                <input type="checkbox" name="pepperoni" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Pepperoni (7.00)</p>
                                <input type="checkbox" name="onion" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Onion (7.00)</p>
                                <input type="checkbox" name="beed" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Beef (7.00)</p>
                                <input type="checkbox" name="meat sauce" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Meat Sauce (7.00)</p>
                                <input type="checkbox" name="jalapenos" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Jalapenos (7.00)</p>
                                <input type="checkbox" name="gorgonzola" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Gorgonzola (7.00)</p>
                                <input type="checkbox" name="creme fraiche dressing" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Creme fraiche dressing (7.00)</p>
                                <input type="checkbox" name="bacon" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Bacon (7.00)</p>
                                <input type="checkbox" name="spaghetti" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Spaghetti (7.00)</p>
                                <input type="checkbox" name="Mussels" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Mussels (7.00)</p>
                                <input type="checkbox" name="salad and dressing" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Salat and Dressing (7.00)</p>
                                <input type="checkbox" name="prawns" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Prawns (7.00)</p>
                                <input type="checkbox" name="bell pepper" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Bell pepper (7.00)</p>
                                <input type="checkbox" name="cheese" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Cheese (7.00)</p>
                                <input type="checkbox" name="olive" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Olive (7.00)</p>
                                <input type="checkbox" name="ananas" value="7" class="extraCheck chkBox${category}${data[category][a].id}"><p class = "extraName">Ananas (7.00)</p>
                            </div>

                            <p class = "orderCommentTitle">Comments</p>  

                            <input type="text" placeholder="Write your Comment" class="orderComment" id="orderComment${data[category][a].id}">
                            
                            <button type='button' class = "addToCartBtn" onClick="addToCart(${data[category][a].id},'${category}');countCartItems();">Add To Cart</button>
                            
                            <span class="productPrice" id="productPrice${category}${data[category][a].id}">DKK 0</span> 
                                
                            </div>`;
                }
            }


        }
        
    //if there are divs that have the selected type of pizza inside the class name, then also hide all pizzas
    } else {

        let allProducts = document.getElementsByClassName('products')[0].querySelectorAll(category);

        for (let k = 0; k < allProducts.length; k++) {
            allProducts[k].style.display = "none"
        }

        // display only the selected type of pizza
        let selectedProduct = document.getElementsByClassName(type);
        for (let b = 0; b < selectedProduct.length; b++) {
            selectedProduct[b].style.display = "block"
        }
    }
}

function displayExtra(id) {
    let box = document.getElementById("extraBox" + id);

    if (box.style.display == "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none"
    }
}


// OnClick function, X button under comments box, every one has an id that consist "orderBox and ID of select element
// If you don't understand how we declared it, check the code from line 140, fa-times is the name of the class for I tag
function hideOrderBox(id) {
    document.getElementById("orderBox" + id).style.display = "none";
}


// OnClick function, triggered by button where you choose between big and small pizza
// Parameters are - the current product Id , and size that user picks = sPrice or bPrice (stands for Small price, big price)
function openDetails(name) {

    // since the array starts from 0 and id's from 1, we need to subtract id by 1
    // we will use nId a bit below for getting the pizza price from array
    document.getElementById("orderBox" + name).style.display = "block";

    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
            inputs[i].checked = false;
        }
    }
    
   let allExtras = document.getElementsByClassName("extraBox");
    
    for(let a=0; a < allExtras.length; a++){
        allExtras[a].style.display = "none"
    }
}


// we are constantly calling this function to get the sum of normal dough and whole gram values in input boxes.
function priceUpdate(id, price) {

    document.getElementById("productPrice" + id).innerHTML = "DKK " + price;
}


// OnClick, storing items into the localstorage
function addToCart(id, category) {


    let arrId = id - 1;



    let commentBox = document.getElementById("orderComment" + id).value;
    let radioSize1 = document.getElementsByClassName("size" + category + id)[0]
    let radioSize2 = document.getElementsByClassName("size" + category + id)[1]
    let radioDough1 = document.getElementsByClassName("dough" + category + id)[0]
    let radioDough2 = document.getElementsByClassName("dough" + category + id)[1]

    //  let checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

    //   let inputElements = document.getElementsByClassName("chkBox" +id)

    let checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    let extraSum = 0;

    //[1].classList.value

    for (let a = 0; a < checkedBoxes.length; a++) {

        if (checkedBoxes[a].classList.value = `chkBox${id}`) {


            values += checkedBoxes[a].name + " ";
            extraSum = extraSum + Number(checkedBoxes[a].value);
        }

    }


    //creating an empty array where we are going to store our data and put it into localstorage
    let products = [];

    //if the comment box is empty, write "no comments" into the storage

    if (!((radioSize1.checked == true || radioSize2.checked == true) && (radioDough1.checked == true || radioDough2.checked == true))) {
        errorMsgAnimation();
    } else {
        if (commentBox === "") {

            if (radioSize1.checked == false) {
                //use radioSize2
                if (radioDough1.checked == false) {
                    //use radioDough2
                    if (localStorage.getItem('products')) {
                        products = JSON.parse(localStorage.getItem('products'));
                    }

                    products.push({
                        id: id,
                        comments: "no comments",
                        dough: "Whole Grain",
                        extra: values,
                        extraPrice: extraSum,
                        price: data[category][arrId].bPrice,
                        category: category
                    });

                    localStorage.setItem('products', JSON.stringify(products));
                    addMsgAnimation();

                } else {
                    if (localStorage.getItem('products')) {
                        products = JSON.parse(localStorage.getItem('products'));
                    }

                    products.push({
                        id: id,
                        comments: "no comments",
                        dough: "Normal Dough",
                        extra: values,
                        extraPrice: extraSum,
                        price: data[category][arrId].bPrice,
                        category: category
                    });

                    localStorage.setItem('products', JSON.stringify(products));
                    addMsgAnimation();
                }

            } else {
                //use radioSize1
                if (radioDough1.checked == false) {                    
                    //use radioDough2
                    if (localStorage.getItem('products')) {
                        products = JSON.parse(localStorage.getItem('products'));
                    }

                    products.push({
                        id: id,
                        comments: "no comments",
                        dough: "Whole Grain",
                        extra: values,
                        extraPrice: extraSum,
                        price: data[category][arrId].sPrice,
                        category: category
                    });

                    localStorage.setItem('products', JSON.stringify(products));
                    addMsgAnimation();
                } else {
                    if (localStorage.getItem('products')) {
                        products = JSON.parse(localStorage.getItem('products'));
                    }

                    products.push({
                        id: id,
                        comments: "no comments",
                        dough: "Normal Dough",
                        extra: values,
                        extraPrice: extraSum,
                        price: data[category][arrId].sPrice,
                        category: category
                    });

                    localStorage.setItem('products', JSON.stringify(products));
                    addMsgAnimation();
                }
            }

        } else {
            // if the comments aren't empty, we are getting rid of the white spaces eg('example:      this' -> 'example: this')
            let trimmedBox = commentBox.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");;
            // After we got rid of the white space, now we are clearing the text of potential injections... html code,js code will get deleted
            let safeComment = trimmedBox.replace(/<(?:.|\n)*?>/gm, '');

            // 'pushing' items into the empty array, with the data that user has chosen
            if (radioSize1.checked == false) {
                //use radioSize2
                if (radioDough1.checked == false) {
                    //use radioDough2

                    if (localStorage.getItem('products')) {
                        products = JSON.parse(localStorage.getItem('products'));
                    }

                    products.push({
                        id: id,
                        comments: safeComment,
                        dough: "Whole Grain",
                        extra: values,
                        extraPrice: extraSum,
                        price: data[category][arrId].bPrice,
                        category: category
                    });

                    localStorage.setItem('products', JSON.stringify(products));
                    addMsgAnimation();

                } else {

                    if (localStorage.getItem('products')) {
                        products = JSON.parse(localStorage.getItem('products'));
                    }

                    products.push({
                        id: id,
                        comments: safeComment,
                        dough: "Normal Dough",
                        extra: values,
                        extraPrice: extraSum,
                        price: data[category][arrId].bPrice,
                        category: category
                    });

                    localStorage.setItem('products', JSON.stringify(products));
                    addMsgAnimation();
                }

            } else {
                //use radioSize1
                if (radioDough1.checked == false) {
                    //use radioDough2

                    if (localStorage.getItem('products')) {
                        products = JSON.parse(localStorage.getItem('products'));
                    }

                    products.push({
                        id: id,
                        comments: safeComment,
                        dough: "Whole Grain",
                        extra: values,
                        extraPrice: extraSum,
                        price: data[category][arrId].sPrice,
                        category: category
                    });

                    localStorage.setItem('products', JSON.stringify(products));
                    addMsgAnimation();

                } else {

                    if (localStorage.getItem('products')) {
                        products = JSON.parse(localStorage.getItem('products'));
                    }

                    products.push({
                        id: id,
                        comments: safeComment,
                        dough: "Normal Dough",
                        extra: values,
                        extraPrice: extraSum,
                        price: data[category][arrId].sPrice,
                        category: category
                    });

                    localStorage.setItem('products', JSON.stringify(products));
                    addMsgAnimation();

                }
            }
        }

        // putting things that we pushed into localstorage, under name : 'orderN' and Id of the element
        localStorage.setItem('products', JSON.stringify(products));
        addMsgAnimation();
    }
}

function errorMsgAnimation() {

    let message = document.getElementsByClassName("errorMsg")[0];

    let position = -200;
    let intervalAppear = setInterval(msgAppear, 0.5);

    function msgDisappear() {

        let intervalDisappear = setInterval(msgDisappear, 35);

        if (position != -200) {

            position--;
            message.style.transform = "translateY(" + position + "px)";
        } else {
            clearInterval(intervalDisappear);
        }
    }

    function msgAppear() {
        if (position == 0) {
            clearInterval(intervalAppear);

            setTimeout(function() {
                msgDisappear();
            }, 900);

        } else {
            position++;
            message.style.transform = "translateY(" + position + "px)";
        }
    }
}

function addMsgAnimation() {

    let message = document.getElementsByClassName("successMsg")[0];

    let position = -200;
    let intervalAppear = setInterval(msgAppear, 0.5);

    function msgDisappear() {

        let intervalDisappear = setInterval(msgDisappear, 35);

        if (position != -200) {
            position--;
            message.style.transform = "translateY(" + position + "px)";
        } else {
            clearInterval(intervalDisappear);
        }
    }

    function msgAppear() {
        if (position == 0) {
            clearInterval(intervalAppear);

            setTimeout(function() {
                msgDisappear();
            }, 900);

        } else {
            position++;
            message.style.transform = "translateY(" + position + "px)";
        }
    }
}