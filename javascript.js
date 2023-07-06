const regExName = /^[a-zA-Z]{1,}$/;
const regExLastName = /^[a-zA-Z]{1,}$/;
const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function submit() {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", (event) => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;

    event.preventDefault(),
    promesa()
    .then(() => {
      Swal.fire({
        title: "Estamos procesando tus datos...",
        color: "lightblue",
        showConfirmButton: false,
        imageUrl: "/images/blue-black-load.gif",
        imageWidth: 400,
        imageAlt: "Custom image",
        background: "black",
        timer: 3000,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Excelente!",
          text: "Tu registro se ha completado exitosamente!",
          })
      })
    })
    .catch(() => {
      !regExName.test(nombre) ? 
      mostrarError("Nombre inválido", "Tu nombre debe estar formado sólo por letras y no contener espacios en blanco")
      : !regExLastName.test(apellido) ? 
      mostrarError("Apellido inválido", "Tu apellido debe estar formado sólo por letras y no contener espacios en blanco")
      : !regExEmail.test(email) ? 
      mostrarError("E-mail inválido", "Introduce un e-mail válido") 
      : !regExPassword.test(contrasena) ? 
      mostrarError("Contraseña inválida", "La contraseña debe contener al menos un dígito, una letra minúscula, una mayúscula y estar formada por al menos 8 caracteres")
      : mostrarError("Ocurrió un error inesperado")
    })
  });
}

function mostrarError(titulo, texto) {
  Swal.fire({
    icon: "error",
    title: titulo,
    text: texto,
  })
}

function promesa() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("contrasena").value;

  return new Promise((resolve, reject) => {
    regExName.test(nombre) && regExLastName.test(apellido) && regExEmail.test(email) && regExPassword.test(contrasena) ? 
    resolve('Promesa resuelta')
    : reject('Promesa rechazada') 
  })
}

submit()








function mostrarImagen() {
  const btn = document.querySelector(".btn");
  const imagen = document.getElementById("img1");

  btn.addEventListener("click", () => {
    promesa = new Promise((resolve, reject) => {
      (imagen.src = "images/johnwick4.jpg"),
        imagen.addEventListener("load", () => {
          resolve(console.log("La imagen se cargó correctamente"));
        });
      imagen.addEventListener("error", () => {
        reject(console.log("Error: no se pudo cargar la imagen"));
      });
    });
  });
}

mostrarImagen();

function cargarImagen(url) {
  return new Promise((resolve, reject) => {
    const imagen = new Image();

    imagen.addEventListener("load", () => {
      resolve(imagen);
    });

    imagen.addEventListener("error", () => {
      reject(new Error("No se pudo cargar la imagen."));
    });

    imagen.src = url;
  });
}

const urlImagen = "images/johnwick4.jpg";

cargarImagen(urlImagen)
  .then((imagen) => {
    console.log("La imagen se ha cargado correctamente:", imagen);
  })
  .catch((error) => {
    console.log("Error al cargar la imagen:", error);
  });
