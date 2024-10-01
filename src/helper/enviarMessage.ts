interface CarritoInteface {
    name: string;
    precio: number;
    cantidad:number;
    descripcion?:string[]
    img: string; // Puedes cambiar 'string' si tienes un tipo específico para las imágenes
  }
 export  const mensajeWhatsapp=(items:CarritoInteface[],subTotal:number,igv:number,totalPagar:number)=>{
    let mensaje = '📋 *Tu Pedido*:\n\n';
    items.forEach((producto:CarritoInteface, index) => {
        mensaje += `${index + 1}. ${producto.name} (x${producto.cantidad}) - $${(producto.precio * producto.cantidad).toFixed(2)}\n`;
      });
      mensaje += `\n🧾 *Sub Total*: $${subTotal.toFixed(2)}\n`;
  mensaje += `🧾 *IGV*: $${igv.toFixed(2)}\n`;
  mensaje += `💰 *Total a Pagar*: $${totalPagar.toFixed(2)}`;
  const telefono = '51925221012'; 
  const mensajeCodificado = encodeURIComponent(mensaje); 
  const url = `https://wa.me/${telefono}/?text=${mensajeCodificado}`; 
  window.open(url);
 }