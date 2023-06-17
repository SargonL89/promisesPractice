// function mostrarImagen() {
//     const btn = document.querySelector(".btn");
//     const imagen = document.getElementById("img1");

//     btn.addEventListener('click', () => {
//         promesa = new Promise((resolve, reject) => {
//             imagen.src = "images/johnwick4.jpg",
//             imagen.addEventListener('load', () => {
//                 resolve(console.log('bien ahí pedazo de hijo de puta!!'))
//             });
//             imagen.addEventListener('error', () => {
//                 reject(console.log('sos la cara de la verga'))
//             });
//         });
//     });
// }

// mostrarImagen();


function cargarImagen(url) {
    return new Promise((resolve, reject) => {
      const imagen = new Image();
  
      imagen.addEventListener('load', () => {
        resolve(imagen);
      });
  
      imagen.addEventListener('error', () => {
        reject(new Error('No se pudo cargar la imagen.'));
      });
  
      imagen.src = url;
    });
}

const urlImagen = 'images/johnwick4.jpg';

cargarImagen(urlImagen)
  .then((imagen) => {
    console.log('La imagen se ha cargado correctamente:', imagen);
  })
  .catch((error) => {
    console.log('Error al cargar la imagen:', error);
  });
