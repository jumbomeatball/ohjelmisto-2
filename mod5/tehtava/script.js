const form = document.querySelector('form');
const input = document.getElementById('query');
const results = document.getElementById('results');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const value_from_input = input.value;

  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${value_from_input}`
    );
    const data = await response.json();

    console.log(data);

    showResults(data);
  } catch (error) {
    console.log('Virhe haussa:', error);
  }
});

function showResults(data) {
  results.innerHTML = '';

  for (const tvShow of data) {
    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.innerText = tvShow.show.name;
    article.appendChild(h2);

    const a = document.createElement('a');
    a.href = tvShow.show.url;
    a.innerText = 'Lisätietoa';
    a.target = '_blank';
    article.appendChild(a);

    const imageUrl = tvShow.show.image?.medium;
    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = tvShow.show.name;
      article.appendChild(img);
    }
    const div = document.createElement('div');
    div.innerHTML = tvShow.show.summary;
    article.appendChild(div);

    results.appendChild(article);
  }
}