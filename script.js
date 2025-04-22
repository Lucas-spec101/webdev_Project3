// Image arrays for each pet
const petImages = {
  pet1: ["images/conyac1.jpg", "images/Con_Bell.jpg", "images/Con_Bell_Sleep.jpg"],
  pet2: ["images/Bella1.jpg", "images/Bell_Creep.jpg", "images/Bell_Goof.jpg"],
  pet3: ["images/Orion1.jpg", "images/Orion_Slump.jpg"]
};

// Track current index for each pet
const currentIndexes = {
  pet1: 0,
  pet2: 0,
  pet3: 0
};

function showImage(petId) {
  const imgElement = document.getElementById(`${petId}-image`);
  imgElement.src = petImages[petId][currentIndexes[petId]];
}

function nextImage(petId) {
  currentIndexes[petId] = (currentIndexes[petId] + 1) % petImages[petId].length;
  showImage(petId);
}

function prevImage(petId) {
  currentIndexes[petId] = (currentIndexes[petId] - 1 + petImages[petId].length) % petImages[petId].length;
  showImage(petId);
}