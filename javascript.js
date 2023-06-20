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

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const regExName = /^[a-zA-Z]{1,}$/;
    const regExLastName = /^[a-zA-Z]{1,}$/;
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
    promesa = new Promise((resolve, reject) => {
      regExName.test(nombre) && regExLastName.test(apellido) && regExEmail.test(email) && regExPassword.test(contrasena) ? 
        (Swal.fire({
              title: "Estamos procesando tus datos...",
              color: "lightblue",
              showConfirmButton: false,
              imageUrl: "/images/blue-black-load.gif",
              imageWidth: 400,
              imageAlt: "Custom image",
              background: "black",
              timer: 3000,
        }))
        .then(() => {
          resolve();
          (Swal.fire({
            icon: "success",
            title: `Excelente, ${nombre}!`,
            text: "Tu registro se ha completado exitosamente!",
          }))
        })
        .catch((error) => {
          reject(error)
        })
      : !regExName.test(nombre) ? 
      mostrarError("Nombre inválido", "Tu nombre debe estar formado sólo por letras y no contener espacios en blanco")
      : !regExLastName.test(apellido) ? 
      mostrarError("Apellido inválido", "Tu apellido debe estar formado sólo por letras y no contener espacios en blanco")
      : !regExEmail.test(email) ? 
      mostrarError("E-mail inválido", "Introduce un e-mail válido") 
      : !regExPassword.test(contrasena) ? 
      mostrarError("Contraseña inválida", "La contraseña debe contener al menos un dígito, una letra minúscula, una mayúscula y estar formada por al menos 8 caracteres")
      : reject(new Error("Error de validación"))
    });
  })
}

function mostrarError(titulo, texto) {
  Swal.fire({
    icon: "error",
    title: titulo,
    text: texto,
  })
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
