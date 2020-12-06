const API_URL = 'https://api.punkapi.com/v2/beers';
const container = document.querySelector('.container');

const render = (data) => {
  if (!data.length) return;
  const fragment = document.createDocumentFragment();
  data.forEach(({ name, tagline, description, image_url: imageURL }) => {
    const div = document.createElement('div');
    div.classList.add('beer');
    div.innerHTML = `
    <div class="beer--content">
     <h1 class="beer--title">${name}</h1>
     <p class="beer--tagline">${tagline}</p>
     <p class="beer--description">${description}</p>
    </div>
    <img class="beer--image" src="${imageURL}">
    `;
    fragment.appendChild(div);
  });

  container.appendChild(fragment);
};

const success = (data) => {
  const beers = JSON.parse(data.target.responseText);
  render(beers);
};

const error = (err) => {
  console.log(err);
};

const req = new XMLHttpRequest();
req.onload = success;
req.onerror = error;
req.open('GET', API_URL);
req.send();

