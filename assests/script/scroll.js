document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function toggleVisibility() {
      sections.forEach((section) => {
        if (isInViewport(section)) {
          section.classList.add("visible");
        }
      });
    }
  
    // Initial check on page load
    toggleVisibility();
  
    // Check on scroll
    document.addEventListener("scroll", function () {
      toggleVisibility();
    });
  });
  