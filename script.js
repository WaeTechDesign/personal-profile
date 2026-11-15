document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const topicPills = document.querySelectorAll(".topic-pill");
  const contentSections = document.querySelectorAll("section[id]");

  if (topicPills.length > 0 && contentSections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          topicPills.forEach((pill) => {
            if (pill.getAttribute("href") === `#${currentId}`) {
              pill.classList.add("active");
            } else {
              pill.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    contentSections.forEach((section) => observer.observe(section));
  }
});
