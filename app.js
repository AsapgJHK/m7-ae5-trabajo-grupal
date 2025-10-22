const { ProductoModel, syncDatabase } = require('./db');


const productoNuevo = {
  nombre: 'Disco Duro SSD 1TB',
  descripcion: 'Unidad de estado sólido de alta velocidad.',
  precio: 79.99,
  cantidad: 30
};


async function ejecutarCRUD() {
  let productoCreadoId;
  let productoParaActualizarId;

  try {
    
    await syncDatabase();
    
    
    console.log("\n--- 💾 OPERACIÓN: CREAR ---");
    const producto1 = await ProductoModel.create(productoNuevo);
    productoCreadoId = producto1.id;
    console.log(`Producto Creado (ID ${productoCreadoId}): ${producto1.nombre}`);

    
    const producto2 = await ProductoModel.create({
      nombre: 'Webcam HD',
      descripcion: 'Cámara para videollamadas.',
      precio: 45.00,
      cantidad: 75
    });
    productoParaActualizarId = producto2.id;
    console.log(`Producto Creado (ID ${productoParaActualizarId}): ${producto2.nombre}`);


    
    console.log("\n--- 📚 OPERACIÓN: LEER (Todos) ---");
    const todosLosProductos = await ProductoModel.findAll();
    console.log(`Se encontraron ${todosLosProductos.length} productos.`);
    todosLosProductos.forEach(p => console.log(`[ID: ${p.id}] ${p.nombre} - Stock: ${p.cantidad}`));


    
    console.log(`\n--- 🔍 OPERACIÓN: LEER (Por ID: ${productoCreadoId}) ---`);
    const productoEspecifico = await ProductoModel.findByPk(productoCreadoId);
    if (productoEspecifico) {
      console.log(`Detalle de ${productoEspecifico.nombre}: $${productoEspecifico.precio} | Stock: ${productoEspecifico.cantidad}`);
    } else {
      console.log(`❌ Error de Lectura: Producto con ID ${productoCreadoId} no encontrado.`);
    }


    
    console.log(`\n--- ✏️ OPERACIÓN: ACTUALIZAR (ID: ${productoParaActualizarId}) ---`);
    
    
    const [filasActualizadas] = await ProductoModel.update({
      precio: 50.99, 
      cantidad: 60 
    }, {
      where: { id: productoParaActualizarId }
    });

    if (filasActualizadas > 0) {
      console.log(`✅ Producto (ID ${productoParaActualizarId}) actualizado con éxito.`);
      const productoPostUpdate = await ProductoModel.findByPk(productoParaActualizarId);
      console.log(`Nuevos datos: Precio $${productoPostUpdate.precio}, Stock ${productoPostUpdate.cantidad}`);
    } else {
      
      console.log(`❌ Error de Actualización: No se encontró el producto con ID ${productoParaActualizarId}.`);
    }


    
    console.log(`\n--- 🗑️ OPERACIÓN: ELIMINAR (ID: ${productoCreadoId}) ---`);
    const filasEliminadas = await ProductoModel.destroy({
      where: { id: productoCreadoId }
    });

    if (filasEliminadas > 0) {
      console.log(`✅ Producto (ID ${productoCreadoId}) eliminado con éxito.`);
    } else {
      
      console.log(`❌ Error de Eliminación: No se encontró el producto con ID ${productoCreadoId}.`);
    }

  } catch (error) {
    console.error("\n*** 🚨 ERROR CRÍTICO EN CRUD: ***", error.message);
  } finally {
    console.log("\n--- FIN DE LAS OPERACIONES ---");
    
  }
}

ejecutarCRUD();