'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').append(
    `<img src="${responseJson.message}" class="results-img">`
  )
}

function watchForm() {
  $('.form').on('submit', function() {
    event.preventDefault();
    const dogNumber = $(event.currentTarget).find('#dog-number');
    console.log('show ' + dogNumber.val() + ' dog pics!');
    for (let i = 0; i < dogNumber.val(); i++) {
      getDogImage();
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});