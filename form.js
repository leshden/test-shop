const closeBtn = document.getElementById("btnClose");

function onClickCloseForm(){
  formCard.classList.remove('show-form');
}

closeBtn.onclick = onClickCloseForm;
