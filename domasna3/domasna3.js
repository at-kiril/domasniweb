const siteKarti = [
  "./kartite/znak1.png",
  "./kartite/znak1.png",
  "./kartite/znak2.png",
  "./kartite/znak2.png",
  "./kartite/znak3.png",
  "./kartite/znak3.png",
  "./kartite/znak4.png",
  "./kartite/znak4.png",
  "./kartite/znak5.png",
  "./kartite/znak5.png",
  "./kartite/znak6.png",
  "./kartite/znak6.png"
];

let obidi = 0;
let zavrsi = false;
let otvoreni = [];

const pointer = document.getElementById("igrata");
const karti = pointer.getElementsByTagName("img");

mesajkarti(siteKarti);

for (let i = 0; i < karti.length; i++) {
  karti[i].dataset.skriena = siteKarti[i];
  karti[i].src = "./kartite/pozadina.png";
  karti[i].addEventListener("click", vlecenje2);
}

document.getElementById("restart").addEventListener("click", restart);

function mesajkarti(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function restart() {
  window.location.reload();
}

function vlecenje2(event) {
  if (zavrsi) return;
  const img = event.target;
  if (otvoreni.includes(img) || img.src.includes("znak")) return;
  img.src = img.dataset.skriena;
  otvoreni.push(img);
  if (otvoreni.length == 2) {
    obidi++;
    document.getElementById("obidi").textContent = obidi;
    if (otvoreni[0].dataset.skriena == otvoreni[1].dataset.skriena) {
      otvoreni = [];
    } else {
      setTimeout(() => {
        otvoreni[0].src = "./kartite/pozadina.png";
        otvoreni[1].src = "./kartite/pozadina.png";
        otvoreni = [];
      }, 1000);
    }
  }
}


