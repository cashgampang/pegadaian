function setActiveNavigation() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "index.html";

  // Remove active classes from all links
  document.querySelectorAll(".nav-link, .nav-link-mobile").forEach((link) => {
    link.classList.remove("text-teal-600", "font-semibold");
    link.classList.add("text-gray-500");
  });

  // Determine current page
  let activePage = "home";
  if (currentPage === "products.html") activePage = "products";
  else if (currentPage === "about.html") activePage = "about";
  else if (currentPage === "services.html") activePage = "services";
  else if (currentPage === "contact.html") activePage = "contact";

  // Set active link
  document.querySelectorAll(`[data-page="${activePage}"]`).forEach((link) => {
    link.classList.remove("text-gray-500");
    link.classList.add("text-teal-600", "font-semibold");
  });
}

// Set active navigation on page load
document.addEventListener("DOMContentLoaded", setActiveNavigation);

// Mobile menu toggle functionality
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });
