(function () {
  var nav = document.getElementById("nav");
  var ham = document.querySelector(".ham");
  var drawer = document.getElementById("drawer");
  var year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function closeDrawer() {
    if (!drawer || !ham) return;
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    ham.classList.remove("open");
    ham.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function openDrawer() {
    if (!drawer || !ham) return;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    ham.classList.add("open");
    ham.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  if (ham) {
    ham.addEventListener("click", function () {
      if (drawer && drawer.classList.contains("open")) closeDrawer();
      else openDrawer();
    });
  }

  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeDrawer);
    });
  }
})();
