
"use strict"
 
window.onload = () =>{
 
    //console.log("Hello")
 
    let dropdown = document.querySelector("#productSearchDDL");

    dropdown.addEventListener("change", displayAll);
 
}
async function displayAll(){
    let dropdown = document.querySelector("#productSearchDDL");
    let tbody = document.querySelector("#tableBody")
    let productsList = await getAllData();
    
    if(dropdown.value === "all"){
    
    productsList.forEach((product) => {
    
         buildTable(tbody, product)
    });
    
    
    }else{
        console.log("Error")
    }
    