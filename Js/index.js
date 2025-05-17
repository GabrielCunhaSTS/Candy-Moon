document.addEventListener("DOMContentLoaded", function () {
      const cardWrapper = document.querySelector(".card-wrapper");
      const cardItems = document.querySelectorAll("#card-item");

      const itemsPerPage = 4;
      let currentIndex = 0;

      function scrollToIndex(index) {
        const card = cardItems[0];
        const style = window.getComputedStyle(card);
        const gap = parseFloat(style.marginRight || 0) + (cardWrapper.offsetWidth * 0.02); // ~2vw
        const scrollAmount = (card.offsetWidth + gap) * index;
        cardWrapper.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }

      document.getElementById("next").addEventListener("click", () => {
        currentIndex += itemsPerPage;
        if (currentIndex >= cardItems.length) {
          currentIndex = 0;
        }
        scrollToIndex(currentIndex);
      });

      document.getElementById("prev").addEventListener("click", () => {
        currentIndex -= itemsPerPage;
        if (currentIndex < 0) {
          currentIndex = Math.floor((cardItems.length - 1) / itemsPerPage) * itemsPerPage;
        }
        scrollToIndex(currentIndex);
      });
    });