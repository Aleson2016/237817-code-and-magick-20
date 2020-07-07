'use strict';

var firstNames = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];

var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var rgbColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var nameColors = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

var getRandomNumber = function(arr) {
  return Math.floor(Math.random() * arr.length);
}

var wizards = [];

// рандом простой, поэтому все может повторяться (имена, цвета)

for (var i = 0; i < 4; i++) {
  wizards[i] = {};
  wizards[i].name = firstNames[getRandomNumber(firstNames)] + secondNames[getRandomNumber(secondNames)];
  wizards[i].coatColor = rgbColors[getRandomNumber(rgbColors)];
  wizards[i].eyesColor = nameColors[getRandomNumber(nameColors)];
}

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
