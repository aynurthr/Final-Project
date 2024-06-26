document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.getAttribute("data-tab");

      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((content) => (content.style.display = "none"));

      this.classList.add("active");
      document.getElementById(target).style.display = "block";
    });
  });

  // set the initial state to show the reviews tab
  document
    .querySelector(".tab[data-tab='user-reviews']")
    .classList.add("active");
  document.getElementById("user-reviews").style.display = "block";
});
