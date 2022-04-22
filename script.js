document.body.onload = addElement;

const countCards = 4;

function addListItems(element) {
  for (let i = 0; i < countCards; i++) {
    element.appendChild(AddCard(i));
  }
}

function addElement() {
  let div = document.createElement("div");
  div.className = "catalog-container";
  addListItems(div);
  document.body.append(div);
}
