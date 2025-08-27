// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Set active navigation
  setActiveNavigation();

  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Mobile service dropdown functionality
  const mobileServiceToggle = document.getElementById("mobile-service-toggle");
  const mobileServiceMenu = document.getElementById("mobile-service-menu");
  const mobileServiceArrow = document.getElementById("mobile-service-arrow");

  if (mobileServiceToggle && mobileServiceMenu && mobileServiceArrow) {
    mobileServiceToggle.addEventListener("click", function (e) {
      e.preventDefault();
      mobileServiceMenu.classList.toggle("hidden");
      mobileServiceArrow.classList.toggle("rotate-180");
    });
  }
});
