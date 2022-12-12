function realizarRetiro() {
    var cantidad = document.getElementById("txt_cantidad").value;
    cantidad = parseInt(cantidad);
   // document.getElementById("resultado").innerHTML = "Si sirve";
    
    if (!isNaN(cantidad) && cantidad >= 50000 && cantidad <= 1200000 && cantidad % 5000 === 0) {
        
        var billete50 = cantidad / 50000;
        var entero50 = Math.trunc(billete50);
        var decimal50 = billete50 - entero50;
        var restante = decimal50 * 50000;

        var billete20 = restante / 20000;
        var entero20 = Math.trunc(billete20);
        var decimal20 = billete20 - entero20;
        var restante2 = decimal20 * 20000;

        var billete10 = restante2 / 10000;

        if (billete10 > 0.8) {
            billete10 = 1;
        }else {
            billete10 = 0;
        }

        document.getElementById("resultado").innerHTML = "El cajero entrego: " + entero50 + " billetes de 50.000, "
        + entero20 + " billetes de 20.000, " + billete10 + " billetes de 10.000";

    }  else {
        document.getElementById("resultado").innerHTML = "Valor NO válido";
    }
}
