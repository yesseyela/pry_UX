function convertir() {
    var horas = parseFloat(document.getElementById("txt_horas").value);
    var minutos = parseFloat(document.getElementById("txt_minutos").value);
    var segundos = parseFloat(document.getElementById("txt_segundos").value);

    if (horas >= 0 && minutos >= 0 && segundos >= 0) {

        // Convertimos los segundos a minutos
        let min_seg = segundos /60;
        // Convertimos los minutos a horas
        minutos = minutos + min_seg;
        let horas_min = minutos /60;
        // Convertimos horas a grados
        horas = horas + horas_min;
        
        grados = horas * 360 / 24;
        
        document.getElementById("resultado").innerHTML = "La tierra ha dado un giro de: " + grados + " grados";
        
    } else {
        alert("Cantidad no valida");
    }  
}