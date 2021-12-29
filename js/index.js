let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form_input");
let elFormSelect = document.querySelector(".form_select");
let elResult = document.querySelector(".form_result");
let elHeading = document.querySelector(".main_heading")

elHeading.textContent = "UFC"

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

  elHeading.textContent = "JANG 1-HAFTADAN SO'NG!"

  let inputValue = elFormInput.value;

  let selectValue = elFormSelect.value;

  elResult.textContent = `${inputValue} VS ${selectValue}`

  console.log(inputValue, selectValue);
});