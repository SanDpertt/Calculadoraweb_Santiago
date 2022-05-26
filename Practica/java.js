const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let insertRowtable = new FormDatos(form);
    insertRowtable(PreformDatos)

})

function insertRowtable(PreformDatos) {

    let Table = document.getElementById("tablita");
    let newLineRow = Table.insertRow(-1);
    let newCelda = newLineRow.insertCell(0);

    let n1 = 0;
    let n2 = 0;
    let options = "";
    let Texto = "";

    let indice = document.formul.miSelect.selectedIndex
    let valor = document.formul.miSelect.options[indice].value

    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    newCelda.textContent = n1;

    let newCelda2 = newLineRow.insertCell(1);
    newCelda2.textContent = n2;

    let newCelda3 = newLineRow.insertCell(2);
    newCelda3.textContent = valor;

}