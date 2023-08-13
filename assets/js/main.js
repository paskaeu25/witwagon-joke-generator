function getJoke() {
  const url = 'https://v2.jokeapi.dev/joke/Any';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response not ok');
      }

      return response.json();
    })
    .then((data) => {
      console.log('Data:', data);
    })
    .catch((error) => {
      console.error('Fetch error', error);
    });
}
