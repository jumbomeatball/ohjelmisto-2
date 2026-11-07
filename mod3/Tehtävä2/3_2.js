const maara = Number(prompt("Montako osallistujaa on?"));
const nimet = [];

for (let i = 0; i < maara; i++) {
  const nimi = prompt("Anna nimi");
  nimet.push(nimi);
}

nimet.sort();

let teksti = "<ol>";
for (let i = 0; i < nimet.length; i++) {
  teksti = teksti + "<li>" + nimet[i] + "</li>";
}
teksti = teksti + "</ol>";

document.body.innerHTML = teksti;