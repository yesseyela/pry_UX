function realizarRetiro() {
    var cantidad = document.getElementById("txt_cantidad").value;
    cantidad = parseInt(cantidad);
   // document.getElementById("resultado").innerHTML = "Si sirve";
    
    if (!isNaN(cantidad) && cantidad >= 50000 && cantidad <= 1200000 && cantidad % 5000 === 0) {
        document.getElementById("resultado").innerHTML = "Valor válido";
    }  else {
        document.getElementById("resultado").innerHTML = "Valor NO válido";
    }
}
