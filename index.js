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
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(responseJson => displayDogPicture(responseJson))
    //.catch(error => alert('Something went wrong. Please try again'));
    
}

function displayDogPicture(url) {
  console.log(url)
  console.log(url.status)
  console.log(typeof url.status)
  if (url.status === 'error') {
    window.alert("We didn't have that. Please Try again")
  }
  if (url.status === 'success') {
  $('.dog-image').replaceWith(
    `<img src="${url.message}" class="dog-image" ></img>`
  );
  }
}

$(handleBreedInput);
