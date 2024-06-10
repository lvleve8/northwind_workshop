"use strict";

window.onload = () => {
    console.log("hello )");

    let productSearchDDL = document.querySelector("#productSearchDDL");
    productSearchDDL.addEventListener("change", checkOptions);

};


function hideTable() {
    let tableOverall = document.querySelector("#allProductTable");
    tableOverall.style.display = "none";
}

function showTable(){
    let tableOverall = document.querySelector("#allProductTable");
    console.log(tableOverall);
    tableOverall.style.display = "table";
}

function checkOptions() {
    let value = document.querySelector("#productSearchDDL").value;

    if (value === "viewAll") {
        getViewAllData()
        showTable()
        console.log("you chose the viewAll option"); 
    } else if (value === "category"){
     
        console.log("you chose the category option")
    } else {
        if(value === ""){
            hideTable()
            console.log("you chose the Select one option");
        }
    }
}


async function getViewAllData() {
    try {
        let response = await fetch('http://localhost:8081/api/products/');
        if (!response.ok) {
            throw new Error("Failed to fetch allProductsData");
        }
        let data = await response.json();
      
        makeViewAllDataTable(data); 
    } catch (error) {
        console.error(`Error products: ${error.message}`);
    }
}

async function makeViewAllDataTable(products) {
    try {
        let tbodyTable = document.querySelector("#tbodyTable");
     
        tbodyTable.innerHTML = "";

        products.forEach(product => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.productName}</td>
                <td>${product.unitPrice}</td>
                <td>${product.unitsInStock}</td>
                <td>${product.categoryId}</td>
                <td>${product.supplier}</td>
                <td>${product.discounted ? 'Yes' : 'No'}</td>
            `;
            tbodyTable.appendChild(row);
        });
    } catch (error) {
        console.error(`Error making data table: ${error.message}`);
    }
}