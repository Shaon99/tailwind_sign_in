const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarText = document.querySelectorAll(".sidebar-text");
const logoImage = document.getElementById("logo-image");
const logoText = document.getElementById("logo-text");
const dashboardToggle = document.getElementById("dashboard-toggle");
const dashboardMenu = document.getElementById("dashboard-menu");
const dashboardIcon = document.getElementById("dashboard-icon");

// Toggle sidebar for mobile
mobileMenuToggle.addEventListener("click", () => {
  const icon = mobileMenuToggle.querySelector("i");
  sidebar.classList.toggle("w-[60px]");
  sidebar.classList.toggle("w-[180px]");
  sidebar.classList.toggle("md:w-[200px]");

  // Show or hide sidebar text
  sidebarText.forEach((text) => {
    text.classList.toggle("hidden");
  });

  // Toggle the icon
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");

    // Show logo image and text
    logoImage.classList.remove("hidden");
    logoText.classList.remove("hidden");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");

    // Hide logo image and text
    logoImage.classList.add("hidden");
    logoText.classList.add("hidden");
  }
});

// Toggle "Dashboards" submenu and icon
dashboardToggle.addEventListener("click", () => {
  dashboardMenu.classList.toggle("hidden");
  if (dashboardIcon.classList.contains("fa-plus")) {
    dashboardIcon.classList.remove("fa-plus");
    dashboardIcon.classList.add("fa-minus");
  } else {
    dashboardIcon.classList.remove("fa-minus");
    dashboardIcon.classList.add("fa-plus");
  }
});

// Toggle profile dropdown
const profileDropdownToggle = document.getElementById("profile-dropdown-toggle");
const profileDropdown = document.getElementById("profile-dropdown");

profileDropdownToggle.addEventListener("click", () => {
  profileDropdown.classList.toggle("hidden");
});

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!profileDropdown.contains(e.target) && !profileDropdownToggle.contains(e.target)) {
    profileDropdown.classList.add("hidden");
  }
});
