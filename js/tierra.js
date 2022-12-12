// Función para calcular el ángulo recorrido en grados, minutos y segundos
function calcularArcoRecorrido(horas, minutos, segundos) {
    // Validamos que las horas, minutos y segundos sean valores válidos
    if (horas < 0 || horas > 23) {
      return "Error: las horas deben estar entre 0 y 23";
    }
    if (minutos < 0 || minutos > 59) {
      return "Error: los minutos deben estar entre 0 y 59";
    }
    if (segundos < 0 || segundos > 59) {
      return "Error: los segundos deben estar entre 0 y 59";
    }
  
    // Convertimos las horas a grados
    let gradosHoras = horas * 30;
    // Convertimos los minutos a grados
    let gradosMinutos = minutos * 0.5;
    // Convertimos los segundos a grados
    let gradosSegundos = segundos * 0.0083333333333;
  
    // Calculamos el ángulo total recorrido en grados
    let gradosTotales = gradosHoras + gradosMinutos + gradosSegundos;
  
    // Calculamos el ángulo total en minutos y segundos
    let minutosTotales = Math.floor(gradosTotales * 60);
    let segundosTotales = Math.floor((gradosTotales * 60 - minutosTotales) * 60);
  
    // Devolvemos el resultado en grados, minutos y segundos
    return gradosTotales + " grados, " + minutosTotales + " minutos y " + segundosTotales + " segundos";
  }
  
  