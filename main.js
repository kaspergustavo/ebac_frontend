document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    var succesMessage = document.getElementById('successMessage');
    var errorMessage = document.getElementById('errorMessage');

    if (campoB > campoA) {
        succesMessage.textContent = "Formulário válido!";
        errorMessage.textContent = " ";
    } else {
        errorMessage.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        succesMessage.textContent = " ";
    }
});