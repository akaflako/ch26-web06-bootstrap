// valores introducidos por el usuario
function calcular() {
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);
    const anio = parseInt(document.getElementById('anio').value);
  
    // objeto date
    const fecha = new Date(anio, mes - 1, dia);
    
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  
    const diaSemana = fecha.getDay();
  
    //switch
    let resultado;
    switch (diaSemana) {
      case 0:
      case 6:
        resultado = 'fin de semana';
        break;
      default:
        resultado = 'día laborable';
    }
  
    //año bisiesto
    let esBisiesto = false;
    if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) {
      esBisiesto = true;
    }
  
    //resultado en pagina
    const mensajeResultado = `${diasSemana[diaSemana]}, ${resultado}`;
    const mensajeBisiesto = esBisiesto ? 'El año es bisiesto' : 'El año no es bisiesto';
    document.getElementById('resultado').textContent = `${mensajeResultado}. ${mensajeBisiesto}.`;
  }