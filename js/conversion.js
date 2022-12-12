function sumarRestarSegundos() {

    let horas = parseInt(document.getElementById("txt_horas").value);
    let minutos = parseInt(document.getElementById("txt_minutos").value);
    let segundos = parseInt(document.getElementById("txt_segundos").value);

    var segundosTotales = (horas * 3600) + (minutos * 60) + segundos;
  
    let numero = parseInt(document.getElementById("txt_numero").value);
  
    let opcion = document.getElementById("lstope").value;
  
    // Realizamos la suma o la resta en función de la opción seleccionada
    if (opcion == "+") {
      segundosTotales += numero;
    } else if (opcion == "-") {
      segundosTotales -= numero;
    }
  
    // Convertimos los segundos totales a horas, minutos y segundos
    var horasResultado = Math.floor(segundosTotales / 3600);
    var minutosResultado = Math.floor((segundosTotales % 3600) / 60);
    var segundosResultado = segundosTotales % 60;
  
    // Mostramos el resultado en una caja de texto
    document.getElementById("resultado").innerHTML ="Resultado: " + horasResultado + "h " + minutosResultado + "m " + segundosResultado + "s";
}

  