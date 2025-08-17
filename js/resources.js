// for resources
let resourceCurrentPage = 1;
const resourceTotalPages = 10;

function resourceUpdatePagination() {
  const resourcePageButtons = document.querySelectorAll(
    ".resource-pagination-btn"
  );
  const resourcePrevBtn = document.getElementById("resource-prev-btn");
  const resourceNextBtn = document.getElementById("resource-next-btn");

  resourcePageButtons.forEach((btn) => {
    btn.classList.remove("resource-active");
    if (parseInt(btn.dataset.page) === resourceCurrentPage) {
      btn.classList.add("resource-active");
    }
  });

  resourcePrevBtn.disabled = resourceCurrentPage === 1;
  resourceNextBtn.disabled = resourceCurrentPage === resourceTotalPages;
}

document.querySelectorAll(".resource-pagination-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    resourceCurrentPage = parseInt(btn.dataset.page);
    resourceUpdatePagination();

    console.log(`Loading page ${resourceCurrentPage}`);
  });
});

document.getElementById("resource-prev-btn").addEventListener("click", () => {
  if (resourceCurrentPage > 1) {
    resourceCurrentPage--;
    resourceUpdatePagination();
    console.log(`Loading page ${resourceCurrentPage}`);
  }
});

document.getElementById("resource-next-btn").addEventListener("click", () => {
  if (resourceCurrentPage < resourceTotalPages) {
    resourceCurrentPage++;
    resourceUpdatePagination();
    console.log(`Loading page ${resourceCurrentPage}`);
  }
});

document.querySelectorAll(".resource-card").forEach((card) => {
  card.addEventListener("click", () => {
    console.log(
      "Card clicked:",
      card.querySelector(".resource-card-title").textContent
    );
  });
});

document.querySelector(".resource-btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Featured article clicked");
});

resourceUpdatePagination();

// search bar
function initDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector(".dropdown-btn");
    const content = dropdown.querySelector(".dropdown-content");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close other dropdowns
      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("active");
          otherDropdown
            .querySelector(".dropdown-content")
            .classList.remove("show");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("active");
      content.classList.toggle("show");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
      dropdown.querySelector(".dropdown-content").classList.remove("show");
    });
  });
}

// Search functionality
function initSearch() {
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");

  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      console.log("Searching for:", query);
      // Add your search logic here
      alert(`Searching for: ${query}`);
    }
  }

  searchBtn.addEventListener("click", performSearch);

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initDropdowns();
  initSearch();
});
