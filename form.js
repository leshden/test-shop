const closeBtn = document.getElementById("btnClose");
const submitBtn = document.getElementById("btnSubmit");
const inputName = document.querySelector(".input-name");
const inputPhone = document.querySelector(".input-phone");

function HideForm() {
  formCard.classList.remove('show-form');
}

function onClickCloseForm() {
  HideForm();
}

function onSubmitForm() {
  if (CheckData()) {
    //отправить
    ym('form-submit','reachGoal', 'ubmit_item');
    HideForm();
  }
}

function CheckData() {
  if (inputName.value === '') {
    alert('Имя не добавлено');
    return false;
  }

  if (inputPhone.value === '') {
    alert('Номер пустой');
    return false;
  }

  if(!inputPhone.value.match(/^\d{6}$/g)) {
    alert('Номер должен состоять из 6 цифр');
    return false;
  }

  return true;
}

closeBtn.onclick = onClickCloseForm;
submitBtn.onclick = onSubmitForm;
