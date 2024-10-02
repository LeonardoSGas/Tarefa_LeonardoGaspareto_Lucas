function Escolher() {
    var valor = prompt("Digite um número para a repetição (negativo ou positivo):");
    var numero = Number(valor);
  
    switch (true) {
      case !isNaN(numero) && numero !== 0:
        document.write('<br><h3>Repetindo de 0 até ' + numero + '</h3>');
  
        if (numero < 0) {
          for (var x = 0; x >= numero; x--) {
            document.write('<br>O valor de x é: ' + x);
          }
        } else {
          for (var x = 0; x <= numero; x++) {
            document.write('<br>O valor de x é: ' + x);
          }
        }
        break;
      
      default:
        alert("Por favor, digite um número válido diferente de zero!");
        break;
    }
  }