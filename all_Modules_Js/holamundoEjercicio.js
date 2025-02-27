export default function holaMundo() {
  /*   En resumen:

   for...of es una herramienta poderosa para iterar sobre colecciones de datos en JavaScript.
   Simplifica el código y mejora la legibilidad.
   Es compatible con una amplia gama de objetos iterables.
   Usa for...of cuando necesites acceder a los valores de un objeto iterable.
  
  
  for...in itera sobre las claves de un objeto.
  No garantiza el orden de iteración.
  Se utiliza principalmente para objetos, no para arrays (para arrays, se recomienda for...of o for).
  Es importante usar hasOwnProperty() para evitar iterar sobre propiedades heredadas del prototipo del objeto.


  */
  // Usa for...in cuando necesites acceder a las claves de un objeto.
  // function usuarios(name) {
  //   this.id = Math.random();
  //   this.name = name;
  // }
  // // usuarios("chola");
  // let user1 = new usuarios("chanchito");
  // console.log(user1);
  // function CreatedUser(nick) {
  //   return {
  //     name: nick,
  //     id: Math.random(),
  //   };
  // }
  // let nick1 = CreatedUser("chanchitoF");
  // console.log(nick1);
  // function similares(obj1, obj2) {
  //   let distintos = false;
  //   for (let llave in obj1) {
  //     if (obj1[llave] !== obj2[llave]) {
  //       distintos = true;
  //     }
  //   }
  //   return !distintos;
  // }
  // let resultado = similares({ id: 1, name: "omar" }, { id: 1, name: "diego" });
  // resultado = similares({ id: 1, name: "omar" }, { id: 1, name: "omar" });
  // console.log(resultado);
  /*
   * Esta función puede ser útil para inspeccionar objetos y determinar qué métodos están disponibles, especialmente en situaciones donde no se conoce la estructura exacta del objeto de antemano.
   *
   */
  // let objeto = {
  //   id: 1,
  //   name: "omar",
  //   login: function () {},
  //   logout: function () {},
  // };
  // function CualesMetodos(obj) {
  //   for (let llave in obj) {
  //     if (typeof obj[llave] === "function") {
  //       console.log(llave);
  //     }
  //   }
  // }
  // CualesMetodos(objeto);
  // let objeto = {
  //   id: 1,
  //   name: false,
  //   login: function () {},
  //   logout: function () {},
  // };
  // let propiedad = "name";
  // function tienePropiedad(obj, prop) {
  //   const propie = Object.keys(obj);
  //   for (let pro of propie) {
  //     if (prop == pro) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // console.log(tienePropiedad(objeto, propiedad));

  // let obj1 = { id: 1, name: "omar" };
  // for (let valor of obj1) {
  //   console.log(obj1[valor]);
  // }
  // function crearCopia(obj) {
  //   let copiaMiObjeto = {};
  //   for (let prop in obj) {
  //     console.log(prop);

  //     copiaMiObjeto[prop] = obj[prop];
  //   }
  //   return copiaMiObjeto;
  // }
  // let obj2 = crearCopia(obj1);
  // console.log({ obj1, obj2 });

  let usuarios = { name: "omar" };
  function agregarId(obj) {
    console.log(typeof obj);

    if (typeof obj === "object") {
      obj.id = Math.floor(Math.random() * 100);
    }
    return obj;
  }
  console.log(agregarId(usuarios));
}
