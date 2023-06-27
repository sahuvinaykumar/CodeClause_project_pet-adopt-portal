// Define an array of pet objects
var pets = [
  {
    name: "Buddy",
    age: 3,
    breed: "Labrador Retriever",
    image: "images/labrador.jpg",
    description: "Buddy is a friendly and energetic dog who loves to play fetch."
  },
  {
    name: "Fluffy",
    age: 2,
    breed: "Persian",
    image: "images/persian.jpg",
    description: "Fluffy is a beautiful and cuddly cat who loves to be petted."
  },
  {
    name: "Max",
    age: 1,
    breed: "Golden Retriever",
    image: "images/golden.jpg",
    description: "Max is a playful and affectionate dog who enjoys going for walks."
  }
];
// Function to display the pets in a table
function displayPets() {
  var tableBody = document.getElementById("pet-table-body");
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    var row = "<tr><td>" + pet.name + "</td><td>" + pet.age + "</td><td>" + pet.breed + "</td><td><img src='" + pet.image + "' alt='" + pet.name + "'></td><td>" + pet.description + "</td></tr>";
    tableBody.innerHTML += row;
  }
}
// Call the displayPets function to populate the table on page load
window.onload = displayPets;
// Function to filter the pets by breed
function filterPetsByBreed() {
  var breedFilter = document.getElementById("breed-filter").value.toLowerCase();
  var filteredPets = [];
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.breed.toLowerCase().indexOf(breedFilter) != -1) {
      filteredPets.push(pet);
    }
  }
  // Clear the table body
  var tableBody = document.getElementById("pet-table-body");
  tableBody.innerHTML = "";
  // Display the filtered pets
  for (var i = 0; i < filteredPets.length; i++) {
    var pet = filteredPets[i];
    var row = "<tr><td>" + pet.name + "</td><td>" + pet.age + "</td><td>" + pet.breed + "</td><td><img src='" + pet.image + "' alt='" + pet.name + "'></td><td>" + pet.description + "</td></tr>";
    tableBody.innerHTML += row;
  }
}
// Add an event listener to the breed filter input
var breedFilterInput = document.getElementById("breed-filter");
breedFilterInput.addEventListener("keyup", filterPetsByBreed);
// Function to add a new pet to the array and table
function addNewPet() {
  var nameInput = document.getElementById("new-pet-name");
  var ageInput = document.getElementById("new-pet-age");
  var breedInput = document.getElementById("new-pet-breed");
  var imageInput = document.getElementById("new-pet-image");
  var descriptionInput = document.getElementById("new-pet-description");
  // Create a new pet object from the input values
  var newPet = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    breed: breedInput.value,
    image: imageInput.value,
    description: descriptionInput.value
  };
  // Add the new pet to the pets array and clear the input values
  pets.push(newPet);
  nameInput.value = "";
  ageInput.value = "";
  breedInput.value = "";
  imageInput.value = "";
  descriptionInput.value = "";
  // Update the table to display the new pet
  var tableBody = document.getElementById("pet-table-body");
  var row = "<tr><td>" + newPet.name + "</td><td>" + newPet.age + "</td><td>" + newPet.breed + "</td><td><img src='" + newPet.image + "' alt='" + newPet.name + "'></td><td>" + newPet.description + "</td></tr>";
  tableBody.innerHTML += row;
}
// Add an event listener to the add pet form
var addPetForm = document.getElementById("add-pet-form");
addPetForm.addEventListener("submit", function(event) {
  event.preventDefault();
  addNewPet();
});