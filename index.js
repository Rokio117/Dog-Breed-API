function handleBreedInput() {
  $("form").submit(function(event) {
    event.preventDefault();
    breed = $("#breed")
      .val()
      .toLowerCase();
    getDogPicture(breed);
  });
}

function getDogPicture(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayDogPicture(responseJson))
    .catch(error => alert('Something went wrong. Please try again'));
}

function displayDogPicture(url) {
  $("#dog-picture").replaceWith(
    `<img src="${url.message}" class="dog-image"></img>`
  );
}

$(handleBreedInput);
