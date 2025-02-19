export default function phrasesRandom() {
  // console.log("frases random");
  const url = "./phrasesRandomSPF.json";
  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      let { name, skin } = data.characters[0];

      function getRandomPhrase(result) {
        const characters = result.characters;
        const randomCharacterIndex = Math.floor(
          Math.random() * characters.length
        );
        const randomCharacter = characters[randomCharacterIndex];

        const skins = randomCharacter.skin;
        const randomSkinIndex = Math.floor(Math.random() * skins.length);
        const randomSkin = skins[randomSkinIndex];

        const phrases = randomSkin.phrases;
        const randomPhraseIndex = Math.floor(Math.random() * phrases.length);
        const randomPhrase = phrases[randomPhraseIndex];

        return {
          characterName: randomCharacter.name,
          skinName: randomSkin.name,
          phrase: randomPhrase.text,
          audioId: randomPhrase.audioId,
        };
      }
      const randomPhraseData = getRandomPhrase(data);

      const $phraseRandom = document.getElementById("phraseRandom");
      $phraseRandom.innerHTML = `~ "${randomPhraseData.phrase}"`;
      const $idAudio = document.getElementById("phraseAudio");
      $idAudio.setAttribute(
        "src",
        `./assets/Audio/${randomPhraseData.audioId}.mp3`
      );
    })
    .catch((err) => {
      let errores =
        `ocurrio un error: ${err.status} errorText: ${err.statusText}` ||
        `algo no estabien `;
      console.log(errores);
    });
}
