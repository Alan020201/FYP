document.addEventListener("DOMContentLoaded", () => {
    const profilePages = [
      "student-profile.html",
      "student-password.html",
      "student-preferences.html",
      "student-coupons.html",
    ];
  
    const currentPath = window.location.pathname.toLowerCase();
    const isProfilePage = profilePages.some(page => currentPath.includes(page));
  
    console.log("👀 navbar-highlight.js loaded on:", currentPath);
  
    if (isProfilePage) {
      const navItems = document.querySelectorAll(".nav-links li");
      navItems.forEach(li => {
        const label = li.textContent.toLowerCase().replace(/\s+/g, "").trim();
        console.log("🔍 checking nav item:", label);
        if (label.includes("profile")) {
          li.classList.add("active");
          console.log("✅ Profile tab activated");
        }
      });
    }
  });
  