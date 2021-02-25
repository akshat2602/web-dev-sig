const keyMap = {
  a: "A",
  w: "Ab",
  s: "B",
  e: "Bb",
  d: "C",
  f: "D",
  r: "Db",
  g: "E",
  t: "Eb",
  h: "F",
  j: "G",
  i: "Gb",
};
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    playAudio(btn);
  });
});

function playAudio(btn) {
  let audio = new Audio("../../res/pianoNotes/" + btn.dataset.key + ".mp3");
  audio.play();
}

document.addEventListener("keypress", (e) => {
  const mappedKeyValue = keyMap[e.key.toLowerCase()];
  if (mappedKeyValue) {
    const tile = document.querySelector("[data-key='" + mappedKeyValue + "']");
    let originalBg, activeBg;

    // according to the tile class
    if (tile.className.includes("white")) {
      originalBg = "#98ded9";
      activeBg = "#00bfff";
    } else {
      originalBg = "#000";
      activeBg = "#555555";
    }

    tile.style["background-color"] = activeBg;
    setTimeout(() => {
      tile.style["background-color"] = originalBg;
    }, 100);

    let audio = new Audio("../../res/pianoNotes/" + mappedKeyValue + ".mp3");
    audio.play();
  }
});
