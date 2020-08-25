const userInput = document.getElementsByTagName('INPUT')[0];
const displayText = document.getElementsByTagName('MAIN')[0];

userInput.addEventListener('keyup', function(e) {
  displayText.innerHTML = userInput.value;
});