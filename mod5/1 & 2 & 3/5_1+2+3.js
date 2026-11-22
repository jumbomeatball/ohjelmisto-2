const form = document.querySelector('form');
const input = document.getElementById('query');
const results = document.getElementById('results');

form.addEventListener('submit', async function (event) {
  // Estetään lomakkeen oletustoiminta (sivun lataaminen JSON-datana)
  event.preventDefault();

  const value_from_input = input.value;

  try {
    // Tehtävä 2: haetaan data fetchillä
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${value_from_input}`
    );
    const data = await response.json();

    // Tulostetaan hakutulos konsoliin
    console.log(data);

    // Tehtävä 3: näytetään tiedot verkkosivulla
    showResults(data);
  } catch (error) {
    console.log('Virhe haussa:', error);
  }
});

function showResults(data) {
  // Tyhjennetään vanhat tulokset ennen uusia
  results.innerHTML = '';

  for (const tvShow of data) {
    const article = document.createElement('article');

    // Nimi h2-elementissä
    const h2 = document.createElement('h2');
    h2.innerText = tvShow.show.name;
    article.appendChild(h2);

    // Linkki a-elementissä, aukeaa uuteen välilehteen
    const a = document.createElement('a');
    a.href = tvShow.show.url;
    a.innerText = 'Lisätietoa';
    a.target = '_blank';
    article.appendChild(a);

    // Keskikokoinen kuva (valinnainen ketjutus, koska kuva voi puuttua)
    const imageUrl = tvShow.show.image?.medium;
    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = tvShow.show.name;
      article.appendChild(img);
    }

    // Tiivistelmä div-elementissä (tiivistelmä sisältää jo p-tagit)
    const div = document.createElement('div');
    div.innerHTML = tvShow.show.summary;
    article.appendChild(div);

    // Lisätään article results-elementtiin
    results.appendChild(article);
  }
}