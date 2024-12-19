// Data for the modal - can be expanded with more details
const details = [
    {
      title: "Taj Mahal - Agra",
      description: "The Taj Mahal is a white marble mausoleum located in Agra, Uttar Pradesh. It is a UNESCO World Heritage site and one of the Seven Wonders of the World."
    },
    {
      title: "Jaipur City - Rajasthan",
      description: "Jaipur, the capital of Rajasthan, is known for its historic palaces and forts, including the Amer Fort and Hawa Mahal."
    },
    {
      title: "Backwaters of Kerala",
      description: "The backwaters of Kerala are a network of interconnected canals, rivers, lakes, and inlets. A houseboat ride through these waters is a popular tourist attraction."
    },
    {
      title: "Varanasi Ganges",
      description: "Varanasi, situated on the banks of the Ganges River, is one of the world's oldest living cities, known for its ghats and spiritual significance."
    },
    {
      title: "kaziranga national park",
      description: "Kaziranga National Park is a national park in the Golaghat, Sonitpur, Biswanath and Nagaon districts of the state of Assam, India. KNP has 5 ranges."
    },
    {
      title: "Goa Beaches",
      description: "Goa is famous for its beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture."
    },
    {
      title: "Himalayan Views",
      description: "The Himalayas, stretching across northern India, offer breathtaking views, trekking trails, and spiritual retreats."
    },
    {
      title: "Mysore Palace - Karnataka",
      description: "Mysore Palace is a historical palace in Karnataka, known for its stunning architecture and cultural significance."
    }
  ];
  
  // Open the modal with the appropriate details
  function openModal(imageIndex) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    
    // Set the title and description from the details array based on the index
    title.textContent = details[imageIndex - 1].title;
    description.textContent = details[imageIndex - 1].description;
    
    // Display the modal
    modal.style.display = "block";
  }
  
  // Close the modal when the close button is clicked
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  