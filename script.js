// header navbar
document.addEventListener("DOMContentLoaded", () => {
  new Carousel();

  const mobileMenu = document.getElementById("mobileMenu");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileClose = document.getElementById("mobileClose"); // ক্লোজ বাটন

  function openMobileMenu() {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
  }

  mobileToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // ক্লোজ বাটন যদি থাকে তাহলে ইভেন্ট লিসেনার যোগ করো
  if (mobileClose) {
    mobileClose.addEventListener("click", closeMobileMenu);
  }

  // Overlay ক্লিক করেও মেনু বন্ধ হবে
  mobileOverlay.addEventListener("click", closeMobileMenu);
});

// todo slider
// caurasal
class Carousel {
  constructor() {
    this.wrapper = document.getElementById("carouselWrapper");
    this.cards = document.querySelectorAll(".carousel-card");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.indicators = document.querySelectorAll(".indicator");

    this.currentIndex = 2; // Start with 3rd card active
    this.totalCards = this.cards.length;

    this.startX = 0;
    this.endX = 0;
    this.isDragging = false;

    this.init();
  }

  init() {
    this.updateCarousel();
    this.bindEvents();
  }

  bindEvents() {
    // Prev/Next click
    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());

    // Indicator click
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goToSlide(index));
    });

    // Touch support
    this.wrapper.addEventListener("touchstart", (e) => {
      this.startX = e.touches[0].clientX;
    });

    this.wrapper.addEventListener("touchend", (e) => {
      this.endX = e.changedTouches[0].clientX;
      this.handleSwipe();
    });

    // Mouse drag support
    this.wrapper.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.startX = e.clientX;
    });

    this.wrapper.addEventListener("mouseup", (e) => {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.endX = e.clientX;
      this.handleSwipe();
    });

    // Window resize => recenter
    window.addEventListener("resize", () => this.updateCarousel());
  }

  handleSwipe() {
    const threshold = 50;
    const diff = this.startX - this.endX;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalCards) % this.totalCards;
    this.updateCarousel();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalCards;
    this.updateCarousel();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  updateCarousel() {
    // Update active card style
    this.cards.forEach((card, index) => {
      card.classList.toggle("active", index === this.currentIndex);
    });

    // Update indicators
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === this.currentIndex);
    });

    // Dynamic card width calculation
    const activeCard = this.cards[this.currentIndex];
    const cardWidth = activeCard.offsetWidth;

    // Total offset to center the active card
    const centerOffset =
      this.wrapper.parentElement.offsetWidth / 2 - cardWidth / 2;

    const offset = this.cards[this.currentIndex].offsetLeft;

    // Apply smooth translate
    this.wrapper.style.transform = `translateX(${centerOffset - offset}px)`;
    this.wrapper.style.transition = "transform 0.5s ease";
  }
}

// Initialize carousel
document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});

// todo
//testimonial counter
let currentTestimonial = 1;
const totalTestimonials = 10;

function nextTestimonial() {
  if (currentTestimonial < totalTestimonials) {
    currentTestimonial++;
    updateCounter();
  }
}

function previousTestimonial() {
  if (currentTestimonial > 1) {
    currentTestimonial--;
    updateCounter();
  }
}

function updateCounter() {
  const counter = document.querySelector(".nav-counter .current");
  counter.textContent = currentTestimonial.toString().padStart(2, "0");
}

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    previousTestimonial();
  } else if (e.key === "ArrowRight") {
    nextTestimonial();
  }
});

// todo
// auto slider
const logosGrid = document.querySelector(".logos-grid");
let scrollX = 0;
const speed = 0.5; // গতি

// ডুপ্লিকেট করে লুপের জন্য প্রস্তুত
logosGrid.innerHTML += logosGrid.innerHTML;

function slideLogos() {
  scrollX += speed;
  logosGrid.style.transform = `translateX(-${scrollX}px)`;

  if (scrollX >= logosGrid.scrollWidth / 2) {
    scrollX = 0; // রিসেট
  }

  requestAnimationFrame(slideLogos);
}

slideLogos();
