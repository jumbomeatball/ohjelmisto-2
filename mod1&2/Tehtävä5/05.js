let vuosi = Number(prompt("Anna vuosiluku:"));

if (vuosi % 400 === 0) {
    document.write(vuosi + " on karkausvuosi.");
} else if (vuosi % 100 === 0) {
    document.write(vuosi + " ei ole karkausvuosi.");
} else if (vuosi % 4 === 0) {
    document.write(vuosi + " on karkausvuosi.");
} else {
    document.write(vuosi + " ei ole karkausvuosi.");
}