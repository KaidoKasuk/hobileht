// Select all tab buttons and tutorial elements
const tabs = document.querySelectorAll(".tab-btn");
const tutorials = document.querySelectorAll(".tutorial");

// Add event listeners to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove 'active' class from all tabs and add to the clicked one
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Get the selected category from data attribute
    const category = tab.dataset.category;

    // Update tutorials visibility
    handleTabClick(category);
  });
});

// Function to handle which tutorials to show
function handleTabClick(category) {
  tutorials.forEach((tutorial) => {
    const tutorialCategory = tutorial.dataset.category;

    if (category === "all" || tutorialCategory === category) {
      // Show matching tutorials
      tutorial.classList.remove("d-none");
    } else {
      // Hide non-matching tutorials
      tutorial.classList.add("d-none");
    }
  });
}
