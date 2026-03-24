// Add your filename to the petImage list!
// Format: "studentName_petName.jpg"
const petImages = [
  "sam_lady-cat.jpg",
  // add your pet file(s) name below this line:
];

const gallery = document.getElementById("gallery");

// This method loops through an array/list to look at each item inside
petImages.forEach((fileName) => {
  // we replace any -, remove the file extension, then split the owner and pet name
  fileName.replace("-", " ")
  const nameData = fileName.split(".")[0];
  const [owner, pet] = nameData.split("_");

  if (owner && pet) {
    // Some DOM manipulation to create new pet card elements
    const card = document.createElement("div");
    card.className = "pet-card";

    card.innerHTML = `
            <img src="assets/${fileName}" alt="${pet}" onerror="this.src='https://via.placeholder.com/250x200?text=Image+Missing'">
            <div class="pet-info">
                <p class="pet-name">${pet.charAt(0).toUpperCase() + pet.slice(1)}</p>
                <p class="owner-name">Owner: ${owner.charAt(0).toUpperCase() + owner.slice(1)}</p>
            </div>
        `;
    gallery.appendChild(card); // put the pet card inside the gallery element
  }
});
