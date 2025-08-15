document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileOverlay = document.getElementById('mobileOverlay');

  // Mobile menu open/close
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });

  mobileOverlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    mobileToggle.classList.remove('active');
  });

  // Mobile dropdown toggle
  const dropdownItems = document.querySelectorAll(
    '.mobile-nav-item.has-dropdown'
  );

  dropdownItems.forEach(item => {
    const link = item.querySelector('.mobile-nav-link');
    link.addEventListener('click', e => {
      e.preventDefault();
      // Close other dropdowns
      dropdownItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      // Toggle current dropdown
      item.classList.toggle('active');
    });
  });
});


