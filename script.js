document.body.onload = addElement;

function addListItems(element) {

  let req = new XMLHttpRequest();

  req.responseType = 'json';
  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {

      const countCards = req.response.record.length;

      for (let i = 0; i < countCards; i++) {
        const cardContent = req.response.record[i];
        element.appendChild(AddCard(cardContent));
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
