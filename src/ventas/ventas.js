// src/ventas/ventas.js
function crearVenta(cliente, estado) {
    return {
        id: Math.random().toString(36).substring(2, 15),
        cliente: cliente,
        estado: estado || 'En preparación',
    };
}

function cancelarVenta(ventaId, estadoActual) {
    if (estadoActual === 'Enviado') {
        return 'No se puede cancelar, el paquete ya está en camino';
    }
    return `Venta ${ventaId} cancelada`;
}
 //pruebaq
module.exports = { crearVenta, cancelarVenta };
