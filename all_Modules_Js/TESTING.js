export default function testings() {
  // alert("holas");
  // prompt("es usted elemento");
  // alert()

  function firstLoggin() {
    const urlmusic = "https://www.google.com/";
    let pregunta00 = confirm("pertence a spf"),
      nombreElemento,
      clavesElemento,
      directorElemento,
      añoactualElemento;
    if (pregunta00) {
      // alert(" se hara unas preguntas");
      pregunta00 = confirm(
        "Se realizara un par de preguntas, ¿esta usted de acuerdo?"
      );
      if (pregunta00) {
        pregunta00 = prompt("cual es tu nombre elemento");
        nombreElemento = pregunta00;
        pregunta00 = alert(
          `hola ${nombreElemento} \n continuamos con las preguntas \n `
        );
        pregunta00 = prompt(
          `${nombreElemento} \n nombra una clave que defina "persona" \n `
        );
        clavesElemento = pregunta00;
        pregunta00 = alert(
          `${nombreElemento} \n continuamos con las preguntas \n `
        );
        pregunta00 = prompt(
          `${nombreElemento} \n cual es nuestro director Actualmente \n `
        );
        directorElemento = pregunta00;
        pregunta00 = alert(
          `${nombreElemento} \n continuamos con las preguntas \n `
        );
        pregunta00 = prompt(
          `${nombreElemento} \n presta mucha atencion \n en que año estamos actualmente `
        );
        añoactualElemento = pregunta00;
        pregunta00 = alert(
          `${nombreElemento} \n Muy bien \n  si las respuestas fuero correctas ingresaras al sitio, \n en dado caso que las respuestas no sean correctas seras redirigido a una pagina segura \n **Buena Suerte** `
        );
        pregunta00 = alert(
          `${nombreElemento} \n las respuestas fueron \n ${clavesElemento},${directorElemento},${añoactualElemento}`
        );
        let respuestas = clavesElemento + directorElemento + añoactualElemento;
        if (
          respuestas === respuestas &&
          clavesElemento === "30" &&
          directorElemento === "omar" &&
          añoactualElemento === "2025"
        ) {
          alert("bienvenido ");
        } else {
          alert("seras redirigido a otra pagina segura");
          location.href = urlmusic;
        }
        // document.body.innerHTML = pregunta00;
      } else {
        alert("seras redirigido a otra pagina segura");
        location.href = urlmusic;
      }
    } else {
      alert("seras redirigido a otra pagina segura");
      location.href = urlmusic;
    }
  }
  // 💖💖para ejecutar 💖💖
  // firstLoggin();
  // 💖💖💖💖 💖💖 💖💖
  // while (!pregunta00) {
  //   let username = prompt("introdusca username");
  //   let pasword = prompt("introdusca pasword");
  //   if (username === "1" && pasword === "1") {
  //     pregunta00 = true;
  //     alert("bienvenido");
  //   } else {
  //     alert("novuelvasnunca");
  //   }
  // }
}

// preguntas ☢️☢️
// const pregunta = confirm(
//   "es usted integrante de Servicio de Proteccion Federal "
// );
// if (pregunta === true) {
//   let pregunta2 = prompt("numero de esclavo");
//   if (pregunta2 === null || pregunta2 === "") {
//     pregunta2 = prompt("porfavor intrusca su numero de esclavo");
//     console.log(pregunta2);
//   }
//   if (pregunta2 === "1") {
//     alert("bienvenido");
//   }
//   console.log(pregunta2);
// }
// if (pregunta === false) {
//   alert("sera rediridigo a otra pagina segura");
//   const clean = document.createElement("h1");
//   document.body.innerHTML = "";
//   clean.innerHTML =
//     "Lo sentimos el contenido solo es para Elementos de la insticuion";
//   document.body.appendChild = clean;
// }
// console.log("click " + pregunta);
