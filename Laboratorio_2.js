let num1, num2;
let operacion;

function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    if (num2 === 0) {
      return "Error: No se puede dividir por cero.";
    }
    return num1 / num2;
  } else {
    return "Error: Operación no válida.";
  }
}

while (true) {
  operacion = prompt(
    "Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:",
  );
  if (operacion.toLowerCase() === "salir") {
    console.log("Saliendo del programa...");
    break;
  }

  num1 = parseFloat(prompt("Ingrese el primer número:"));
  num2 = parseFloat(prompt("Ingrese el segundo número:"));

  let resultado = realizarOperacion(num1, num2, operacion);
  console.log(`Resultado: ${resultado}`);
  
}
