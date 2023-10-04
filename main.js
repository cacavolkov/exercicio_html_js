document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    
    if (campoB > campoA) {
        document.getElementById("message").innerHTML = "Formulário válido!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerHTML = "Formulário inválido!";
        document.getElementById("message").style.color = "red";
    }
});
