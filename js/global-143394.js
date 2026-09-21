(function () {
  const init = () => {
    const toggleButtons = document.querySelectorAll(".nav-mobile-toggle");

    toggleButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const nav = this.closest("nav");
        const menu = nav.querySelector(".nav-mobile-menu");
        const iconOpen = nav.querySelector(".nav-icon-open");
        const iconClose = nav.querySelector(".nav-icon-close");

        menu.classList.toggle("hidden");
        iconOpen.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");
      });
    });

    const mobileLinks = document.querySelectorAll(".nav-mobile-menu a");
    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        const nav = this.closest("nav");
        const menu = nav.querySelector(".nav-mobile-menu");
        const iconOpen = nav.querySelector(".nav-icon-open");
        const iconClose = nav.querySelector(".nav-icon-close");

        menu.classList.add("hidden");
        iconOpen.classList.remove("hidden");
        iconClose.classList.add("hidden");
      });
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      "#solucoes .group, #beneficios .bg-white\/5",
    );
    animatedElements.forEach(function (el, index) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      el.style.transitionDelay = index * 0.1 + "s";
      observer.observe(el);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
