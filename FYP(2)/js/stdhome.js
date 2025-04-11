// List of all tutors
const tutors = [
    { name: "John Doe", subject: "Math", level: "Beginner", mode: "Online", distance: 5, experience: "5 years", image: "teacher1.jpg" },
    { name: "Jane Smith", subject: "Science", level: "Intermediate", mode: "Offline", distance: 10, experience: "4 years", image: "teacher2.jpg" },
    { name: "Emily Brown", subject: "English", level: "Advanced", mode: "Online", distance: 15, experience: "3 years", image: "teacher3.jpg" },
    { name: "Michael Clark", subject: "Math", level: "Beginner", mode: "Online", distance: 20, experience: "6 years", image: "teacher4.jpg" },
    { name: "Sarah White", subject: "Math", level: "Intermediate", mode: "Offline", distance: 25, experience: "2 years", image: "teacher5.jpg" },
    { name: "David Green", subject: "Science", level: "Advanced", mode: "Online", distance: 30, experience: "7 years", image: "teacher6.jpg" },
    { name: "James Lee", subject: "English", level: "Beginner", mode: "Offline", distance: 35, experience: "4 years", image: "teacher7.jpg" },
    { name: "Anna Black", subject: "Math", level: "Intermediate", mode: "Online", distance: 40, experience: "5 years", image: "teacher8.jpg" },
    // Add more tutors as needed
  ];
  
  // Function to update the tutor cards based on search filters
  function filterTutors() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const levelQuery = document.getElementById("levelInput").value;
    const subjectQuery = document.getElementById("subjectInput").value;
    const modeQuery = document.getElementById("modeInput").value;
    const distanceQuery = document.getElementById("distanceInput").value;
    
    // Filter tutors based on the input values
    const filteredTutors = tutors.filter(tutor => {
      const matchesSearch = tutor.name.toLowerCase().includes(searchQuery);
      const matchesLevel = levelQuery === "Level" || tutor.level === levelQuery;
      const matchesSubject = subjectQuery === "Subject" || tutor.subject === subjectQuery;
      const matchesMode = modeQuery === "Mode" || tutor.mode === modeQuery;
      const matchesDistance = !distanceQuery || tutor.distance <= distanceQuery;
      
      return matchesSearch && matchesLevel && matchesSubject && matchesMode && matchesDistance;
    });
    
    // Clear existing tutors and display filtered tutors
    const tutorSections = document.getElementById("tutorSections");
    tutorSections.innerHTML = "";  // Clear current tutor cards
    
    if (filteredTutors.length === 0) {
      tutorSections.innerHTML = "<p>No tutors found matching your criteria.</p>";
      return;
    }
  
    // Show the first 4 filtered tutors
    displayTutors(filteredTutors.slice(0, 4), filteredTutors);
  }
  
  // Function to display tutor cards
  function displayTutors(tutorsToDisplay, allTutors) {
    const tutorSections = document.getElementById("tutorSections");
    
    tutorsToDisplay.forEach(tutor => {
      const tutorCard = document.createElement("div");
      tutorCard.classList.add("tutor-card");
      tutorCard.innerHTML = `
        <img src="${tutor.image}" alt="${tutor.name}">
        <h4>${tutor.name}</h4>
        <p>Subject: ${tutor.subject}</p>
        <p>Experience: ${tutor.experience}</p>
        <p>Mode: ${tutor.mode}</p>
        <button class="view-profile">View Profile</button>
      `;
      tutorSections.appendChild(tutorCard);
    });
    
    // Add navigation buttons (left and right arrows) to show more tutors
    addNavigationButtons(allTutors);
  }
  
  // Function to add navigation buttons for showing more tutors
  function addNavigationButtons(allTutors) {
    const tutorSections = document.getElementById("tutorSections");
    
    // Create left and right arrow buttons
    const leftArrowButton = document.createElement("button");
    leftArrowButton.classList.add("arrow", "left-arrow");
    leftArrowButton.innerHTML = "&#8592;";
    leftArrowButton.onclick = () => showNextTutors(allTutors, -4);
    
    const rightArrowButton = document.createElement("button");
    rightArrowButton.classList.add("arrow", "right-arrow");
    rightArrowButton.innerHTML = "&#8594;";
    rightArrowButton.onclick = () => showNextTutors(allTutors, 4);
    
    tutorSections.appendChild(leftArrowButton);
    tutorSections.appendChild(rightArrowButton);
  }
  
  // Function to show the next set of tutors when the arrows are clicked
  function showNextTutors(allTutors, offset) {
    const tutorSections = document.getElementById("tutorSections");
    
    const currentDisplay = tutorSections.querySelectorAll(".tutor-card");
    currentDisplay.forEach(card => card.remove());
    
    // Calculate the new batch of tutors to show
    const startIndex = offset < 0 ? Math.max(0, allTutors.indexOf(currentDisplay[0].dataset.tutor) + offset) : Math.min(allTutors.length - 1, allTutors.indexOf(currentDisplay[0].dataset.tutor) + offset);
    displayTutors(allTutors.slice(startIndex, startIndex + 4), allTutors);
  }
  
  // Add Event Listener to Search Button
  document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    filterTutors();
  });
  
// Distance Slider functionality
const distanceSlider = document.getElementById('distance'); // Corrected ID
const distanceValue = document.getElementById('distanceValue'); // Corrected ID

if (distanceSlider && distanceValue) {
  distanceSlider.addEventListener('input', function () {
    distanceValue.textContent = this.value;
  });
}