const closeBtn = document.getElementById("btnClose");
const submitBtn = document.getElementById("btnSubmit");
const inputName = document.querySelector(".input-name");
const inputPhone = document.querySelector(".input-phone");
const formTitle = document.querySelector(".form-title");

function HideForm() {
  formCard.classList.remove('show-form');
}

function ShowForm(index) {
  formTitle.textContent = dataArray[index].title;
  formCard.classList.add('show-form');

  console.log(index);
}

function sendEmail() {
	Email.send({
		Host: "smtp.gmail.com",
		Username : "<sender’s email address>",
		Password : "<email password>",
		To : '<recipient’s email address>',
		From : "<sender’s email address>",
		Subject : "<email subject>",
		Body : "<email body>",
	})
	.then(function(message){
		alert("mail sent successfully")
	});
}

function onClickCloseForm() {
  HideForm();
}

function onSubmitForm() {
  if (CheckData()) {
    //отправить
    ym('form-submit','reachGoal', 'ubmit_item');
    sendEmail();
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
