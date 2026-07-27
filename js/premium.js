(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector(".menu-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  var revealItems = document.querySelectorAll(".reveal");
  var filters = document.querySelectorAll(".filter");
  var cards = document.querySelectorAll(".community-card");
  var year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function updateHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      var isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
      mobileMenu.classList.toggle("is-open", !isOpen);
      document.body.style.overflow = isOpen ? "" : "hidden";
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
        mobileMenu.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px" });

    revealItems.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index % 4, 3) * 80 + "ms";
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
      var selected = filter.getAttribute("data-filter");

      filters.forEach(function (item) {
        item.classList.toggle("is-active", item === filter);
        item.setAttribute("aria-pressed", String(item === filter));
      });

      cards.forEach(function (card) {
        var shouldShow = selected === "all" || card.getAttribute("data-category") === selected;
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });

  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".magnetic").forEach(function (element) {
      element.addEventListener("mousemove", function (event) {
        var rect = element.getBoundingClientRect();
        var x = event.clientX - rect.left - rect.width / 2;
        var y = event.clientY - rect.top - rect.height / 2;
        element.style.transform = "translate(" + x * 0.08 + "px, " + y * 0.12 + "px)";
      });

      element.addEventListener("mouseleave", function () {
        element.style.transform = "";
      });
    });
  }
})();
