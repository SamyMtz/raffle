let cantidadBoletos = 54;
let boletos = [...Array(cantidadBoletos).keys()].map((i) => i + 1);
let no_comprados = [
  25, 26, 27, 28, 29, 31, 32, 34, 35, 36, 38, 39, 42, 44, 45, 47, 49, 50, 51,
  52, 53, 54,
];
let ganadores = [];

// Función para obtener un número participante
function generarNumeroGanador() {
  // Verificar si todavía hay números participando
  if (boletos.length > 0) {
    let numero;
    // Generar un número aleatorio
    do {
      numero = Math.floor(Math.random() * cantidadBoletos) + 1;
      // Verificar si ese número participa
    } while (no_comprados.includes(numero) || ganadores.includes(numero));
    // Agregar el número generado a la lista de números ganadores
    ganadores.push(numero);
    // Mostrar el número ganador en el elemento con id "ganador"
    document.getElementById("ganador").textContent = numero;
    // Imprimir la lista de números no comprados en la consola
    console.log(ganadores);
  }
}

