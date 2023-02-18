// get inputField Value

let serial=0;
function getInputFieldValue(id) {
    const inputField = document.getElementById(id);
    const value = parseFloat(inputField.value);
    inputField.value = "";
    return value;
}
// get element value
function getElementValue(id) {
    const text = document.getElementById(id).innerText;
    return text;
}

// display in table
function displayTable(serial,name, area) {
    const container = document.getElementById("parent-container");
    const createRow = document.createElement("tr");
    createRow.innerHTML = `
        <td>${serial}</td>
        <td>${name}</td>
        <td>${area}</td>
        <td><button class="bg-sky-400 hover:bg-sky-600 text-white px-2 py-2 font-medium rounded-lg">Convert to m<sup>2</sup> </button></td>
        `
    container.appendChild(createRow);
}
// Triangle
document.getElementById("triangle-calculation").addEventListener("click", function () {
    
    const base = getInputFieldValue("triangle-base");
    const height = getInputFieldValue("triangle-height");
    const name = getElementValue("triangle-name");

    if (base < 0 || height < 0 || isNaN(base) || isNaN(height) || base == "" || height == "") {
        alert("Give Valid Width and Height");
    }
    else {
         let triangleArea = 0.5 * height * base;
         if(Number.isInteger(triangleArea))
         {
             serial++;
             displayTable(serial, name, triangleArea);
         }
         else
         {   serial++;
             triangleArea=triangleArea.toFixed(2);
             displayTable(serial, name, triangleArea);
         }
    }
})
// Rectangle
document.getElementById("rectangle-calculation").addEventListener("click", function () {
    
    const width = getInputFieldValue("rectangle-width");
    const height = getInputFieldValue("rectangle-height");
    const name = getElementValue("rectangle-name");
    if (width < 0 || height < 0 || isNaN(width) || isNaN(height) || width == "" || height == "") {
        alert("Give Valid Width and Height");
    }
    else {
        let rectangleArea = height * width;
        if(Number.isInteger(rectangleArea))
        {   
            serial++;
            displayTable(serial, name, rectangleArea);
        }
        else
        {
            serial++;
            rectangleArea=rectangleArea.toFixed(2);
            displayTable(serial,name, rectangleArea);
        }
       
    }
})
// parallelogram
document.getElementById("parallelogram-calculation").addEventListener("click",function(){
    serial++;
   const base= getElementValue("parallelogram-base");
   const height=getElementValue("parallelogram-height")

   const name= getElementValue("parallelogram-name");

   const parallelogramArea=parseInt(base)*parseInt(height);

   displayTable(serial,name, parallelogramArea);
})

// rhombus
document.getElementById("rhombus-calculation").addEventListener("click",function(){
    serial++;
    const d1= getElementValue("rhombus-d1");
    const d2=getElementValue("rhombus-d2")
 
    const name= getElementValue("rhombus-name");
 
    const rhombusArea=0.5*parseInt(d1)*parseInt(d2);
 
    displayTable(serial,name, rhombusArea);
 })

 //pentagon
 document.getElementById("pentagon-calculation").addEventListener("click",function(){
    serial++;
    const part= getElementValue("pentagon-part");
    const base=getElementValue("pentagon-base")
 
    const name= getElementValue("pentagon-name");
 
    const pentagonArea=0.5*parseInt(part)*parseInt(base);
 
    displayTable(serial,name, pentagonArea);
 })
// ellipse
 document.getElementById("ellipse-calculation").addEventListener("click",function(){
    serial++;
    const a= getElementValue("ellipse-a");
    const b=getElementValue("ellipse-b")
 
    const name= getElementValue("ellipse-name");
 
    const pentagonArea=(3.14*parseInt(a)*parseInt(b)).toFixed(2);
 
    displayTable(serial,name, pentagonArea);
 })

//  Card Random Background
let cards = document.getElementsByClassName("card");

for (item of cards) {
    item.addEventListener("mouseenter", function (event) {
        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255);
        event.target.style.backgroundColor = `rgb(${red},${green},${blue})`
    })
    item.addEventListener("mouseleave", function (event) {
        event.target.style.backgroundColor = "white"
    })

}