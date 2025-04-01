'use strict';

const dogContainer = document.getElementById('dogContainer');
const op = document.getElementById('op');

async function fetchDogPicsAsync() {
  const url = 'https://dog.ceo/api/breeds/image/random/5';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  dogContainer.innerHTML = '';

  data.message.forEach((imageUrl, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3';

    const card = document.createElement('div');
    card.className = 'card h-100 shadow-sm';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'card-img-top';
    img.alt = `Dog ${index + 1}`;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardText = document.createElement('p');
    cardText.className = 'card-text text-center';
    cardText.innerText = `Dog #${index + 1}`;

    cardBody.appendChild(cardText);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);

    dogContainer.appendChild(col);
  });
}

function getGOTInfo() {
  let url = 'https://anapioficeandfire.com/api/characters/583';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.aliases[0]);
      op.innerText = `GOT Alias: ${data.aliases[0]}`;
    });
}

document.getElementById('myBtn').addEventListener('click', getGOTInfo);
document.getElementById('fetchDogs').addEventListener('click', fetchDogPicsAsync);
