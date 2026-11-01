let nimi = prompt("Mikä on nimesi?");
let arvottu = Math.floor(Math.random() * 4) + 1;
let tupa = "";

if (arvottu === 1) {
    tupa = "Rohkelikko";
} else if (arvottu === 2) {
    tupa = "Luihuinen";
} else if (arvottu === 3) {
    tupa = "Puuskupuh";
} else {
    tupa = "Korpinkynsi";
}

document.write(nimi + ", sinä olet " + tupa + ".");