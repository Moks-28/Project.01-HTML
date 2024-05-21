

function JagoankodeStedy() {
  var jagoankodeblog = document.getElementById("jagoankodeblog");
  var selengkapnyaText = document.getElementById("selengkapnya");
  var jagoankodecool = document.getElementById("myjagoankode");

  if (jagoankodeblog.style.display === "none") {
    jagoankodeblog.style.display = "inline";
    jagoankodecool.innerHTML = "Baca selengkapnya"; 
    selengkapnyaText.style.display = "none";
  } else {
    jagoankodeblog.style.display = "none";
    jagoankodecool.innerHTML = "Sembunyikan"; 
    selengkapnyaText.style.display = "inline";
  }
}

let x = 5;
let y = 7;
let z = x + y;
console.log(z)
console.log(x > y)
