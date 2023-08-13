const jokeText = document.querySelector('#jokeText');
const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', getJoke);

function getJoke() {
  const url =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response not ok');
      }

      return response.json();
    })
    .then((data) => {
      if (data.type === 'single') {
        jokeText.textContent = data.joke;
      } else {
        jokeText.innerHTML = `${data.setup}<br><br>${data.delivery}`;
      }
    })
    .catch((error) => {
      console.error('Fetch error', error);
    });
}
