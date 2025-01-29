function Persona(nombre, edad) {
  // Internamente, aquí se crea un objeto vacío: const this = {};
  
  this.nombre = nombre; // `this.nombre` es igual al valor del parámetro `nombre`
  this.edad = edad;     // `this.edad` es igual al valor del parámetro `edad`

  // El objeto se devuelve automáticamente: return this;
}

// Creamos una instancia de Persona
const persona1 = new Persona("Juan", 30);

// Lo que ocurre en detalle:
console.log(persona1); // { nombre: "Juan", edad: 30 }
