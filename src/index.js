console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedDropdown = document.getElementById("breed-dropdown");
    const dogBreedsList = document.getElementById("dog-breeds");
  
    // Challenge 1
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const img = document.createElement("img");
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      });
  
    // Challenge 2
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        breeds.forEach((breed) => {
          const li = document.createElement("li");
          li.textContent = breed;
          dogBreedsList.appendChild(li);
        });
      });
  
    // Challenge 3
    dogBreedsList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        e.target.style.color = "blue"; // Change the color as desired
      }
    });
  
    // Challenge 4
    breedDropdown.addEventListener("change", () => {
      const selectedLetter = breedDropdown.value;
      const lis = dogBreedsList.getElementsByTagName("li");
      for (const li of lis) {
        if (li.textContent.startsWith(selectedLetter)) {
          li.style.display = "block";
        } else {
          li.style.display = "none";
        }
      }
    });
  });
  
