const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();

})

function insertRowtable() {

    let Table = document.getElementById("tablita");
    let newLineRow = Table.insertRow(-1);
    let newCelda = newLineRow.insertCell(0);

    var resultado;

    let indice = document.formul.miSelect.selectedIndex
    let valor = document.formul.miSelect.options[indice].value

    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);

    if (valor == "Suma") {
        resultado = (n1 + n2);
    } else if (valor == "Resta") {
        resultado = (n1 - n2);
    } else if (valor == "Multiplicación") {
        resultado = (n1 * n2);
    } else if (valor == "División") {
        resultado = (n1 / n2);
    }

    newCelda.textContent = n1;

    let newCelda2 = newLineRow.insertCell(1);
    newCelda2.textContent = n2;

    let newCelda3 = newLineRow.insertCell(2);
    newCelda3.textContent = valor;

    let newCelda4 = newLineRow.insertCell(3);
    newCelda4.textContent = resultado;



}