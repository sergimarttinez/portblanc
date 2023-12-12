document.addEventListener('DOMContentLoaded', function () {
    const imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg', 'imagen4.jpg', 'imagen5.jpg', 'imagen6.jpg', 'imagen7.jpg', 'imagen8.jpg', 'imagen9.jpg', 'imagen10.jpg'];
    
    function mostrarImagenAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        const imagen = imagenes[indiceAleatorio];
        document.getElementById('imagen').src = imagen;
    }

    mostrarImagenAleatoria();
});
