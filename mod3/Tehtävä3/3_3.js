const koirat = [];

for (let i = 0; i < 6; i++) {
  const nimi = prompt("Anna koiran nimi");
  koirat.push(nimi);
}

koirat.sort();

let teksti = "<ul>";
for (let i = koirat.length - 1; i >= 0; i--) {
  teksti = teksti + "<li>" + koirat[i] + "</li>";
}
teksti = teksti + "</ul>";

document.body.innerHTML = teksti;