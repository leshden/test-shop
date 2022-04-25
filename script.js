document.body.onload = addElement;
let dataArray = [];

function addListItems(element) {

  let req = new XMLHttpRequest();

  req.responseType = 'json';
  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      dataArray = req.response.record;

      const countCards = dataArray.length;

      for (let i = 0; i < countCards; i++) {
        const cardContent = dataArray[i];
        let card = AddCard(cardContent);
        card.id = i;
        element.appendChild(card);
      }
    }
  };

  req.open("GET", "https://api.jsonbin.io/v3/b/626441cd38be296761f6eb55/latest", true);
  req.setRequestHeader("X-Master-Key", "$2b$10$348HYOFF3NU3G/Vp0yyV/uK49hb/7tir3La/lOoMafexngUWXfHde");
  req.send();
}

function addElement() {
  let div = document.createElement("div");
  div.className = "catalog-container";
  addListItems(div);
  document.body.append(div);
}
