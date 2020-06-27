'use strict';
function getDogImage(dogNumero) {
  let url = `https://dog.ceo/api/breeds/image/random/${dogNumero}`;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, dogNumero))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, dogNumero) {
  console.log(responseJson);
  $('.results').html('');
  for (let i=0; i<dogNumero; i++) {
    console.log('image added!');
    $('.results').append(
    `<img src="${responseJson.message[i]}" class="results-img">`
    );
  }
}

function watchForm() {
  $('.form').on('submit', function() {
    event.preventDefault();
    const dogNumber = $(event.currentTarget).find('#dog-number');
    const dogNumero = dogNumber.val();
    console.log('show ' + dogNumber.val() + ' dog pics!');
    //for (let i = 0; i < dogNumber.val(); i++) {
    getDogImage(dogNumero);
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});