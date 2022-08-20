function getPin() {
  const pin = genaretPin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function genaretPin() {
  const rendom = Math.round(Math.random() * 100000);
  return rendom;
}

document.getElementById("genaretPin").addEventListener("click", function () {
  const pin = getPin();
  //display pin
  const pinGenaretorInput = document.getElementById("pinGenaretorInput");
  pinGenaretorInput.value = pin;
});


document.getElementById('calculater').addEventListener("click", function () {
  const number = event.target.innerText;
  const typeNumber = document.getElementById('typeNumber')
  const previusNumber = typeNumber.value;

  if (isNaN(number)) {
    if (number === 'C') {
      typeNumber.value = '';

    } else if (number === '<') {
      const degit = previusNumber.split('');
      degit.pop();
      const reminDegit = degit.join('');
      typeNumber.value = reminDegit;
    }

  } else {
    const newNumber = previusNumber + number;
    typeNumber.value = newNumber;
  }
})


// =========== submit buton =============
document.getElementById('submitBtn').addEventListener('click', () => {
  const displayFild = document.getElementById('pinGenaretorInput');
  const currentPin = displayFild.value;

  const typedNumber = document.getElementById('typeNumber');
  const typedPin = typedNumber.value;
  const pinSuccesMassage = document.getElementById('pinSucces');
  const errorPin = document.getElementById('errorPin');


  if (typedPin === currentPin) {
    pinSuccesMassage.style.display = 'block';
    errorPin.style.display = 'none';

  } else {
    errorPin.style.display = 'block';
    pinSuccesMassage.style.display = 'none';

  }

});