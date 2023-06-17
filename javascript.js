function mostrarImagen() {
    const btn = document.querySelector(".btn");
    const imagen = document.getElementById("img1");

    btn.addEventListener('click', () => {
        promesa = new Promise((resolve, reject) => {
            imagen.src = "images/johnwick4.jpg",
            imagen.addEventListener('load', () => {
                resolve(console.log('bien ahí pedazo de hijo de puta!!'))
            });
            imagen.addEventListener('error', () => {
                reject(console.log('sos la cara de la verga'))
            });
        });
    });
}

mostrarImagen();

