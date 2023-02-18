// get inputField Value
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
function displayTable(name, area) {
    const container = document.getElementById("parent-container");
    const createRow = document.createElement("tr");
    createRow.innerHTML = `
        <td>${1}</td>
        <td>${name}</td>
        <td>${area}</td>
        <td><button class="bg-sky-500 text-white px-3 py-2 font-medium rounded-lg">Convert to m<sup>2</sup> </button></td>
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
         const triangleArea = 0.5 * height * base;
        displayTable(name, triangleArea);
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
        const rectangleArea = height * width;
        displayTable(name, rectangleArea);
    }
})