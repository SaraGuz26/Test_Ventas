// tests/ventas.test.js
const { crearVenta, cancelarVenta } = require('../src/ventas/ventas');

test('Debería crear una venta correctamente', () => {
    const venta = crearVenta('Juan Pérez');
    expect(venta.cliente).toBe('Juan Pérez');
    expect(venta.estado).toBe('En preparación');
});

test('No debería permitir cancelar una venta cuando ya está en envío', () => {
    const mensaje = cancelarVenta('ABC123', 'Enviado');
    expect(mensaje).toBe('No se puede cancelar, el paquete ya está en camino');
});