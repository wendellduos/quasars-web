// styling for nav items
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.color = "var(--dark)";

    for (item of navItems) {
      if (e != item) {
        item.style.color = "var(--dark-dull)";
      }
    }
  });
});
