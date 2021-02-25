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
  console.log(typeof btn.dataset.key);
  let audio = new Audio("../../res/pianoNotes/" + btn.dataset.key + ".mp3");
  audio.play();
}

document.addEventListener("keypress", (e) => {
  if (keyMap[e.key.toLowerCase()]) {
    console.log(
      document.querySelector("[data-key='" + keyMap[e.key.toLowerCase()] + "']")
    );
    let audio = new Audio(
      "../../res/pianoNotes/" + keyMap[e.key.toLowerCase()] + ".mp3"
    );
    audio.play();
  }
});
