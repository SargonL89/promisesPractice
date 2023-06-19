function submit() {
  const registrarse = document.getElementById("registrationForm");
  registrarse.addEventListener("click", () => {
    aceptarRegistro();
  });
}

function aceptarRegistro() {
  const form = document.getElementById("registrationForm");
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("contrasena").value;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const regExName = /^[a-zA-Z]{1,}$/;
    const regExLastName = /^[a-zA-Z]{1,}$/;
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    regExName.test(nombre) &&
    regExLastName.test(apellido) &&
    regExEmail.test(email) &&
    regExPassword.test(contrasena)
      ? (await Swal.fire({
          title: "Estamos procesando tus datos...",
          color: "lightblue",
          showConfirmButton: false,
          imageUrl: "/images/blue-black-load.gif",
          imageWidth: 400,
          imageAlt: "Custom image",
          background: "black",
          timer: 3000,
        }),
        Swal.fire({
          icon: "success",
          title: `Excelente, ${nombre}!`,
          text: "Tu registro se ha completado exitosamente!",
        }))
      : !regExName.test(nombre)
      ? Swal.fire({
          icon: "error",
          title: "Nombre inválido",
          text: "Tu nombre debe estar formado sólo por letras y no contener espacios en blanco",
        })
      : !regExLastName.test(apellido)
      ? Swal.fire({
          icon: "error",
          title: "Apellido inválido",
          text: "Tu apellido debe estar formado sólo por letras y no contener espacios en blanco",
        })
      : !regExEmail.test(email)
      ? Swal.fire({
          icon: "error",
          title: "E-mail inválido",
          text: "Introduce un e-mail válido",
        })
      : !regExPassword.test(contrasena)
      ? Swal.fire({
          icon: "error",
          title: "Contraseña inválida",
          text: "La contraseña debe contener al menos un dígito, una letra minúscula, una mayúscula y estar formada por al menos 8 caracteres",
        })
      : Swal.fire({
          icon: "error",
          title: "No pudimos completar el registro",
          text: "Se produjo un error inesperado",
        });
  });
}

submit();

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
