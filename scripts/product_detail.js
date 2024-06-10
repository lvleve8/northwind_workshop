
"use strict"

window.onload = () => {

    let dropdown = document.querySelector("#productSearchDDL");

    applyToDropdown();

    
    dropdown.addEventListener("change", displayAll);
}

async function displayAll() {
    let dropdown = document.querySelector("#productDetailDDL");

    let tbody = document.querySelector("#tableBody");

    let productsList = await getAllData();

    if (dropdown.value === "all") {

       
        productsList.forEach((product) => {

          
            buildTable(tbody, product)
        });


    } else if (dropdown.value === "category") {

        

    }else{
        console.log("error");
    }


}

function buildTable(tbody, data) {

 
    let row = tbody.insertRow();

    let productNCell = row.insertCell();
    productNCell.innerHTML = data.productName;

    let priceCell = row.insertCell();
    priceCell.innerHTML = data.unitPrice;

    let inStockCell = row.insertCell();
    inStockCell.innerHTML = data.unitsInStock;

    let suppCell = row.insertCell();
    suppCell.innerHTML = data.supplier;




}

async function getAllData() {

    try {
        let response = await fetch("http://localhost:8081/api/products");
        let list = await response.json();

        return list;
    } catch (err) {
        console.log("error")
        throw new Error(err)
    }

}


async function getCategories(){
    try {
        let response = await fetch("http://localhost:8081/api/categories");
        let cat = await response.json();

        return cat;
    } catch (err) {
        console.log("error")
        throw new Error(err)
    }
}

async function applyToDropdown(){

    let catDrop = document.querySelector("#categorySearch");

    let allCategories = await getCategories();

    let defaultOption = document.createElement("option");
    defaultOption.value = "0";
    defaultOption.innerText = "----Select Category----";
 
    catDrop.appendChild(defaultOption);

    allCategories.forEach((category) => {

       
        let newOption = document.createElement("option");

        newOption.value = 0;

        newOption.textContent = category.name;

        catDrop.appendChild(newOption);


    })

}