const luvut = [];
let jatka = true;

while (jatka) {
  const luku = Number(prompt("Anna luku"));

  if (luvut.includes(luku)) {
    alert("Luku on jo annettu");
    jatka = false;
  } else {
    luvut.push(luku);
  }
}

luvut.sort((a, b) => a - b);

for (let i = 0; i < luvut.length; i++) {
  console.log(luvut[i]);
}