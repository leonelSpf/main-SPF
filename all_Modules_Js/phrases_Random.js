export default function phrasesRandom() {
  console.log("frases random");
  const url = "./phrasesRandomSPF.json";
  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      let { name, skin } = data.characters[0];
      console.log(data);
      // console.log(name, skin[0].phrases);
      // const characterAudio = skin;
      for (const el of skin) {
        const cloneObj = { ...el.phrases };
        // const randomFrases = Math.random(cloneObj * 100);
        // randomfrss = Math.trunc(Math.random() * 1);
        // console.log(randomfrss);

        // console.log(cloneObj[randomfrss]);

        // console.log("FRASES RANDOM" + randomFrases);

        console.log(cloneObj);

        for (const prop in cloneObj) {
          const eleme = cloneObj[prop];
          //  YA FUNCIONA ✅✅✅
          // console.log(eleme.audioId);
          // console.log(eleme.text);
          // console.log(eleme);
        }
        // console.log(cloneObj[1]);
      }
    })
    .catch((err) => {
      let errores =
        `ocurrio un error: ${err.status} errorText: ${err.statusText}` ||
        `algo no estabien `;
      console.log(errores);
    });
}
