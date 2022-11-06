import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
let data = {};
onLoad()
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


function onFormInput (event) {
 data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

  data[event.target.name] = event.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

function onFormSubmit(event) {
    event.preventDefault()
    const { email, message } = event.currentTarget.elements;

    const formOutput = { email: email.value, message: message.value };
   
    
    if (email.value && message.value) {
        console.log(formOutput);
        form.reset();
        localStorage.clear()
    } else alert("Всі поля повинні бути заповнені!!!");
}

function onLoad() {
    const onReloadStorage = JSON.parse( localStorage.getItem(LOCALSTORAGE_KEY))
    if (!onReloadStorage) {
      return;
    }
    data = onReloadStorage;
    form.email.value = data.email || '';
    form.message.value = data.message || '';
}

