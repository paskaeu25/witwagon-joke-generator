const jokeText = document.querySelector('#jokeText');
const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', getJoke);

function setLoadingState() {
  jokeBtn.disabled = true;
  jokeText.textContent = 'Loading the joke...';
}
function clearLoadingState() {
  jokeBtn.disabled = false;
}
function displayJoke(joke) {
  jokeText.innerHTML = joke;
}
function displayError() {
  jokeText.textContent = `Oops! Failed to fetch a joke. Please try again later.`;
  jokeText.classList.add('error');
}

function getJoke() {
  setLoadingState();

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
        displayJoke(data.joke);
      } else {
        displayJoke(`${data.setup}<br><br>${data.delivery}`);
      }
    })
    .catch((error) => {
      console.log(error);
      displayError();
    })
    .finally(() => {
      clearLoadingState();
    });
}
