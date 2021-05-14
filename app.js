// Form Submission
const form = document.getElementById('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

const nameInvalid = document.getElementById('name-invalid');
const emailInvalid = document.getElementById('email-invalid');
const messageInvalid = document.getElementById('message-invalid');

fullName.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
message.addEventListener('blur', validateMessage);

function validateName() {
  const re = /^[a-zA-Z]{2,35}(?: [a-zA-Z]+){0,2}$/;
  if (!re.test(fullName.value)) {
    nameInvalid.style.display = 'block';
  } else {
    nameInvalid.style.display = 'none';
  }
}

function validateEmail() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email.value)) {
    emailInvalid.style.display = 'block';
  } else {
    emailInvalid.style.display = 'none';
  }
}

function validateMessage() {
  if (message.value === '') {
    messageInvalid.style.display = 'block';
  } else {
    messageInvalid.style.display = 'none';
  }
}

// Event Listeners
submit.addEventListener('click', function (e) {
  if (fullName.value === '' || email.value === '' || message.value === '') {
    validateName(fullName);
    validateEmail(email);
    validateMessage(message);

    e.preventDefault();
  }
});
