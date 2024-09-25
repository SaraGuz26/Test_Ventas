const { crearVenta, cancelarVenta } = require("../src/ventas/ventas");

describe("Pruebas de integración para las funciones de venta", () => {
  let venta;

  test("debería crear y cancelar una venta correctamente", () => {
    // Crear una venta
    venta = crearVenta("Cliente1", "En preparación");

    // Verificar que la venta se creó correctamente
    expect(venta).toHaveProperty("id");
    expect(venta.cliente).toBe("Cliente1");
    expect(venta.estado).toBe("En preparación");

    // Cancelar la venta
    const mensajeCancelacion = cancelarVenta(venta.id, venta.estado);

    // Verificar que la venta se canceló correctamente
    expect(mensajeCancelacion).toBe(`Venta ${venta.id} cancelada`);
  });

  test("no debería cancelar una venta que ya fue enviada", () => {
    // Crear una venta y cambiar su estado a 'Enviado'
    venta = crearVenta("Cliente2", "Enviado");

    // Intentar cancelar la venta
    const mensajeCancelacion = cancelarVenta(venta.id, "Enviado");

    // Verificar que la cancelación no se permite
    expect(mensajeCancelacion).toBe(
      "No se puede cancelar, el paquete ya está en camino",
    );
  });
});
