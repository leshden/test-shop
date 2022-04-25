const formCard = document.querySelector(".form-card");

function AddCardContent(element, content) {
  // let div = document.createElement("div");
  // cardDiv.className = 'card-item-content';

  let titleEl = document.createElement("div");
  titleEl.className = 'card-item-content-title';
  titleEl.textContent = content.title;
  element.appendChild(titleEl);

  let imgEl = document.createElement("img");
  imgEl.className = 'card-item-content-img';
  imgEl.src = content.image;
  element.appendChild(imgEl);

  let descriptionEl = document.createElement("div");
  descriptionEl.className = 'card-item-content-description';
  descriptionEl.textContent = content.description;
  element.appendChild(descriptionEl);

  let priceEl = document.createElement("div");
  priceEl.className = 'card-item-content-price';
  priceEl.textContent = content.price;
  element.appendChild(priceEl);

  // element.appendChild(div);
}

function OnClick() {
  console.log('Click Card!');
  formCard.classList.add('show-form');
}

function AddCard(content) {
  let cardDiv = document.createElement("div");
  cardDiv.onclick = OnClick;
  cardDiv.className = 'card-item';
  AddCardContent(cardDiv, content);
  return cardDiv;
}
