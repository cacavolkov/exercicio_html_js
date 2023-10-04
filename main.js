
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault()

    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;

    if (campoB > campoA) {
    document.getElementById("message").innerHTML = "Formulário válido!";
    document.getElementById("message").style.color = "green";
    document.getElementById("message").style.display = "block";

    return false;
    
    } else {
    document.getElementById("message").innerHTML = "Formulário inválido!";
    document.getElementById("message").style.color = "red";
    document.getElementById("message").style.display = "block";

    return false;

    }
});