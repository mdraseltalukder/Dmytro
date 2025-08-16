document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  const menuIcon = mobileToggle.querySelector(".menu");
  const closeIcon = mobileToggle.querySelector(".clear");

  let dropdownTimeout;
  const desktopDropdownItems = document.querySelectorAll(
    ".nav-item.has-dropdown"
  );

  desktopDropdownItems.forEach((item) => {
    const dropdown = item.querySelector(".dropdown-menu");

    if (dropdown) {
      item.addEventListener("mouseenter", () => {
        clearTimeout(dropdownTimeout);
        dropdown.style.display = "block";
      });

      item.addEventListener("mouseleave", () => {
        dropdownTimeout = setTimeout(() => {
          dropdown.style.display = "none";
        }, 50);
      });

      dropdown.addEventListener("mouseenter", () => {
        clearTimeout(dropdownTimeout);
        dropdown.style.display = "block";
      });

      dropdown.addEventListener("mouseleave", () => {
        dropdownTimeout = setTimeout(() => {
          dropdown.style.display = "none";
        }, 50);
      });
    }
  });
  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }

  // Mobile menu open/close
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("active");

    if (isOpen) {
      closeMobileMenu();
    } else {
      mobileMenu.classList.add("active");
      mobileOverlay.classList.add("active");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  });

  mobileCloseBtn.addEventListener("click", closeMobileMenu);

  // Overlay click closes menu
  mobileOverlay.addEventListener("click", closeMobileMenu);

  // Mobile dropdown toggle
  const dropdownItems = document.querySelectorAll(
    ".mobile-nav-item.has-dropdown"
  );

  dropdownItems.forEach((item) => {
    const link = item.querySelector(".mobile-nav-link");
    const dropdown = item.querySelector(".mobile-dropdown");

    // Click functionality
    link.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownItems.forEach((i) => {
        if (i !== item) i.classList.remove("active");
      });
      item.classList.toggle("active");
    });

    item.addEventListener("mouseenter", () => {
      item.classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("hover");
    });
  });
});

//  serve-section carousel
class Carousel {
  constructor() {
    this.wrapper = document.getElementById("carouselWrapper");
    this.cards = document.querySelectorAll(".carousel-card");
    this.prevBtns = document.querySelectorAll(".prev");
    this.nextBtns = document.querySelectorAll(".next");
    this.isMobile = window.innerWidth <= 768;

    this.currentIndex = this.isMobile ? 0 : 2;
    this.totalCards = this.cards.length;

    this.startX = 0;
    this.endX = 0;
    this.isDragging = false;
    this.resizeTimer = null;

    this.init();
  }

  init() {
    this.updateCarousel();
    this.bindEvents();

    window.addEventListener("resize", () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        const wasMobile = this.isMobile;
        const newIsMobile = window.innerWidth <= 768;

        console.log(
          "[v0] Resize detected - wasMobile:",
          wasMobile,
          "newIsMobile:",
          newIsMobile,
          "currentIndex:",
          this.currentIndex
        );

        if (wasMobile !== newIsMobile) {
          this.isMobile = newIsMobile;

          if (this.isMobile) {
            this.currentIndex = 0;
            console.log("[v0] Switched to mobile - setting currentIndex to 0");
          } else {
            this.currentIndex = 2;
            console.log("[v0] Switched to desktop - setting currentIndex to 2");
          }

          // Force update after device change
          setTimeout(() => {
            this.updateCarousel();
          }, 50);
        } else {
          this.updateCarousel();
        }
      }, 200);
    });

    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        const wasMobile = this.isMobile;
        this.isMobile = window.innerWidth <= 768;

        if (wasMobile !== this.isMobile) {
          this.currentIndex = this.isMobile ? 0 : 2;
          console.log(
            "[v0] Orientation change - device type changed, currentIndex:",
            this.currentIndex
          );
        }

        this.updateCarousel();
      }, 300);
    });
  }

  bindEvents() {
    // Prev/Next click
    this.prevBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.prev();
      });
    });

    this.nextBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.next();
      });
    });

    // Card click for mobile
    this.cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        if (this.isMobile) {
          if (this.currentIndex === index) {
            this.currentIndex = -1;
          } else {
            this.currentIndex = index;
          }
          this.updateCarousel();
        }
      });
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
  }

  handleSwipe() {
    if (this.isMobile) return;
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
    if (this.isMobile) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.totalCards) % this.totalCards;
    this.updateCarousel();
  }

  next() {
    if (this.isMobile) return;
    this.currentIndex = (this.currentIndex + 1) % this.totalCards;
    this.updateCarousel();
  }

  updateCarousel() {
    console.log(
      "[v0] updateCarousel called - isMobile:",
      this.isMobile,
      "currentIndex:",
      this.currentIndex
    );

    this.cards.forEach((card, index) => {
      if (this.isMobile) {
        // Mobile behavior
        if (index === this.currentIndex) {
          card.classList.add("active");
          card.style.height = "auto";
          card.querySelector(".card-description").style.display = "block";
          card.querySelector(".explore-btn").style.display = "block";
        } else {
          card.classList.remove("active");
          card.style.height = "80px";
          card.querySelector(".card-description").style.display = "none";
          card.querySelector(".explore-btn").style.display = "none";
        }
      } else {
        // Desktop behavior
        if (index === this.currentIndex) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
        card.style.height = "";
        card.querySelector(".card-description").style.display = "";
        card.querySelector(".explore-btn").style.display = "";
      }
    });

    if (!this.isMobile) {
      const container = this.wrapper.parentElement;
      const containerWidth = container.offsetWidth;
      const activeCard = this.cards[this.currentIndex];

      const cardOffsetLeft = activeCard.offsetLeft;
      const cardWidth = activeCard.offsetWidth;

      const cardCenter = cardOffsetLeft + cardWidth / 2;

      const containerCenter = containerWidth / 2;
      const translateX = containerCenter - cardCenter;

      this.wrapper.style.transform = `translateX(${translateX}px)`;
      this.wrapper.style.transition =
        "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    } else {
      this.wrapper.style.transform = "none";
      this.wrapper.style.transition = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});

//benefit section cta
document.addEventListener("DOMContentLoaded", () => {
  const benefitsData = {
    1: {
      number: "01",
      title: "Make Every Seat Count",
      description:
        "From dance recitals to community productions, we simplify ticket sales with reserved seating, promotion tools, and live tracking for easy planning and upselling.",
    },
    2: {
      number: "02",
      title: "Turn Ticketing Into a Fundraising Engine",
      description:
        "Transform every ticket sale into a fundraising opportunity with built-in donation options, sponsorship tools, and community engagement features that maximize your revenue potential.",
    },
    3: {
      number: "03",
      title: "Grow a Loyal Audience, Not Just a Crowd",
      description:
        "Build lasting relationships with your audience through personalized communications, loyalty programs, and data-driven insights that turn one-time attendees into lifelong supporters.",
    },
    4: {
      number: "04",
      title: "All Your Event Data in One Place",
      description:
        "Access comprehensive analytics, attendee insights, and performance metrics in a unified dashboard that helps you make informed decisions and optimize future events.",
    },
    5: {
      number: "05",
      title: "You Handle the Show and We'll Handle the Setup",
      description:
        "Focus on creating amazing experiences while we take care of the technical setup, payment processing, customer support, and all the behind-the-scenes work.",
    },
  };

  const sidebenefits = document.querySelectorAll(".side-benefit");
  const mainNumber = document.getElementById("main-number");
  const mainTitle = document.getElementById("main-title");
  const mainDescription = document.getElementById("main-description");

  function updateMainBenefit(benefitId) {
    const benefit = benefitsData[benefitId];
    if (benefit) {
      mainNumber.textContent = benefit.number;
      mainTitle.textContent = benefit.title;
      mainDescription.textContent = benefit.description;
    }
  }

  sidebenefits.forEach((item) => {
    item.addEventListener("click", function () {
      const benefitId = this.getAttribute("data-benefit");

      if (window.innerWidth < 769 && this.classList.contains("active")) {
        this.classList.remove("active");
        return;
      }

      sidebenefits.forEach((benefit) => {
        benefit.classList.remove("active");
      });

      this.classList.add("active");

      if (window.innerWidth >= 769) {
        updateMainBenefit(benefitId);
      }
    });
  });
});

//testimonial sections testimonial
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalTestimonials = testimonials.length;
const counter = document.querySelector(".nav-counter .current");
const indicators = document.querySelectorAll(".indicator-line");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("show");
    if (i === index) t.classList.add("show");
  });
  counter.textContent = (index + 1).toString().padStart(2, "0");

  indicators.forEach((indicator, i) => {
    indicator.classList.remove("active");
    if (i <= index) indicator.classList.add("active");
  });
}

function nextTestimonial() {
  currentTestimonial++;
  if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
  showTestimonial(currentTestimonial);
}

function previousTestimonial() {
  currentTestimonial--;
  if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
  showTestimonial(currentTestimonial);
}

showTestimonial(currentTestimonial);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    previousTestimonial();
  } else if (e.key === "ArrowRight") {
    nextTestimonial();
  }
});

// auto slider in testimonial section
const logosGrid = document.querySelector(".logos-grid");
let scrollX = 0;
const speed = 0.5;

logosGrid.innerHTML += logosGrid.innerHTML;

function slideLogos() {
  scrollX += speed;
  logosGrid.style.transform = `translateX(-${scrollX}px)`;

  if (scrollX >= logosGrid.scrollWidth / 2) {
    scrollX = 0;
  }

  requestAnimationFrame(slideLogos);
}

slideLogos();
