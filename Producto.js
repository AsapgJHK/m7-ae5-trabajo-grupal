const Producto = class {
  constructor(nombre, descripcion, precio, cantidad) {
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._precio = precio; 
    this._cantidad = cantidad;
  }

  

  get nombre() {
    return this._nombre;
  }

  get descripcion() {
    return this._descripcion;
  }

  get precio() {
    return this._precio;
  }

  get cantidad() {
    return this._cantidad;
  }

  

  set nombre(nuevoNombre) {
    if (typeof nuevoNombre === 'string' && nuevoNombre.trim() !== '') {
      this._nombre = nuevoNombre;
    } else {
      console.error("Error: El nombre debe ser una cadena no vacía.");
    }
  }

  set descripcion(nuevaDescripcion) {
    this._descripcion = nuevaDescripcion;
  }

  set precio(nuevoPrecio) {
    if (typeof nuevoPrecio === 'number' && nuevoPrecio >= 0) {
      this._precio = nuevoPrecio;
    } else {
      console.error("Error: El precio debe ser un valor numérico no negativo.");
    }
  }

  set cantidad(nuevaCantidad) {
    if (Number.isInteger(nuevaCantidad) && nuevaCantidad >= 0) {
      this._cantidad = nuevaCantidad;
    } else {
      console.error("Error: La cantidad debe ser un número entero no negativo.");
    }
  }

  

  mostrarInfo() {
    console.log("--- Información del Producto (Instancia JS) ---");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Descripción: ${this.descripcion}`);
    console.log(`Precio: $${this.precio.toFixed(2)}`);
    console.log(`Cantidad en Stock: ${this.cantidad}`);
    console.log("-----------------------------------------------");
  }
};

const productoA = new Producto("Laptop Gamer", "Portátil de alta gama.", 1200.50, 15);
const productoB = new Producto("Teclado Mecánico", "Switches rojos, retroiluminado.", 85.99, 50);
const productoC = new Producto("Mouse Inalámbrico", "Óptico, ligero.", 25.00, 120);


productoA.mostrarInfo();
productoB.precio = 95.50; 
console.log(`Precio actualizado de ${productoB.nombre}: $${productoB.precio}`);

module.exports = Producto;