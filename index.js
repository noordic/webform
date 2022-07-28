var selectedRow = null

function onFormSubmit(e) { 
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Recuperar data del form
function readFormData() { //listar contactos
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["primerApellido"] = document.getElementById("primerApellido").value;
    formData["segundoApellido"] = document.getElementById("segundoApellido").value;
    formData["email"] = document.getElementById("email").value;
    formData["telefono"] = document.getElementById("telefono").value;
    return formData;
}

//Insertar data
function insertNewRecord(data) { // agregar contacto
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		  cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
		  cell2.innerHTML = data.primerApellido;
    cell3 = newRow.insertCell(2);
		  cell3.innerHTML = data.segundoApellido;
    cell4 = newRow.insertCell(3);
		  cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
		  cell5.innerHTML = data.telefono;
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("primerApellido").value = selectedRow.cells[1].innerHTML;
    document.getElementById("segundoApellido").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("telefono").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) { // editar contacto
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.primerApellido;
    selectedRow.cells[2].innerHTML = formData.segundoApellido;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.telefono;
}

//Delete data
function onDelete(td) { // eliminar contacto
    if (confirm('Estas seguro de eliminar este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("nombre").value = '';
    document.getElementById("primerApellido").value = '';
    document.getElementById("segundoApellido").value = '';
    document.getElementById("email").value = '';
    document.getElementById("telefono").value = '';
    selectedRow = null;
}


module.exports = {readFormData}