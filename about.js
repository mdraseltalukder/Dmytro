
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileOverlay = document.getElementById('mobileOverlay');

  // Icons inside toggle
  const menuIcon = mobileToggle.querySelector('.menu'); // menu image
  const closeIcon = mobileToggle.querySelector('.clear'); // cross image

  // Mobile menu open/close
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('active');

    if (isOpen) {
      mobileMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    } else {
      mobileMenu.classList.add('active');
      mobileOverlay.classList.add('active');
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    }
  });

  // Overlay click closes menu
  mobileOverlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
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

