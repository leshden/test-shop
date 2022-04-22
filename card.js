function AddCardContent(element) {
  // let div = document.createElement("div");
  // cardDiv.className = 'card-item-content';

  let title = document.createElement("div");
  title.className = 'card-item-content-title';
  title.textContent = 'title';
  element.appendChild(title);

  let img = document.createElement("img");
  img.className = 'card-item-content-img';
  img.src = 'https://www.shop.philips.ru/media/catalog/product/cache/23/image/600x/163b81649b7ef7bc8a00b0066e59ae0a/x/d/xd3000_01_image_01.jpg';
  element.appendChild(img);

  let description = document.createElement("div");
  description.className = 'card-item-content-description';
  description.textContent = 'Description';
  element.appendChild(description);

  let price = document.createElement("div");
  price.className = 'card-item-content-price';
  price.textContent = '1000';
  element.appendChild(price);



  // element.appendChild(div);
}


function AddCard(index) {
  let cardDiv = document.createElement("div");
  cardDiv.className = 'card-item';
  AddCardContent(cardDiv);
  return cardDiv;
}
