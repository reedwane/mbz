window.addEventListener("DOMContentLoaded", (e) => {
  //
  // carousel logic//
  //
  let slideIndex = 1;
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot");
  let controls = document.querySelectorAll(".control");

  const showSlides = (n) => {
    if (n > slides.length) slideIndex = 1; //return to the first slide
    if (n < 1) slideIndex = slides.length; // return to the last

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add("fade");
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    // set active slide
    slides[slideIndex - 1].classList.remove("fade");
    dots[slideIndex - 1].classList.add("active");

    // change color of dots and left and right arrows and their background
    if (slideIndex == 2 || slideIndex == 3) {
      for (let dot of dots) {
        dot.style.backgroundColor = "rgba(19, 137, 81, 1)"; //dots to green
      }

      for (let control of controls) {
        let i = Array.prototype.indexOf.call(controls, control); //get the position of the arrow (first-left or second-right)
        let position = control.children[0].setAttribute(
          "src",
          `./assets/icons/green-${i == 0 ? "left" : "right"}.png`
        );

        control.style.backgroundColor = "rgba(189, 189, 189, 1)";
      }
      //
    } else {
      //
      for (let dot of dots) {
        dot.style.backgroundColor = "#fefefe"; //dots to white
      }
      for (let control of controls) {
        let i = Array.prototype.indexOf.call(controls, control); //get the position of the arrow (first-left or second-right)

        control.children[0].setAttribute(
          "src",
          `./assets/icons/white-${i == 0 ? "left" : "right"}.png`
        );

        control.style.backgroundColor = "rgba(224, 224, 224, 0.3)";
      }
    }
  };

  const nextSlide = (n) => {
    showSlides((slideIndex += n));
  };

  //
  // the slide toggle buttons
  document.querySelectorAll(".left")[0].addEventListener("click", (e) => {
    nextSlide(-1);
  });

  document.querySelectorAll(".right")[0].addEventListener("click", (e) => {
    nextSlide(1);
  });

  //

  const presentSlide = (n) => {
    // when the dots are clicked
    showSlides((slideIndex = n));
  };

  // show corresponding slide on dot click
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      let n = Array.prototype.indexOf.call(dots, dot);
      presentSlide(n + 1);
    });
  });

  showSlides(slideIndex); //initial render
  setInterval(() => {
    // automatic slides
    slideIndex++;
    showSlides(slideIndex);
  }, 7000);

  //
  // carousel logic ends
  //

  //
  /// nav menu ///
  //
  let ham = document.querySelectorAll(".ham")[0];
  let navList = document.querySelectorAll(".nav-list")[0];
  let mainLinks = document.querySelectorAll(".nav-list > li");
  let nestedMenu = document.querySelectorAll(".nav-list > ul");

  ham.addEventListener("click", (e) => {
    navList.classList.toggle("closed");
  });

  // opening nested links in the nav
  mainLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      let nested = link.nextElementSibling; //the nested ul

      let index = Array.prototype.indexOf.call(mainLinks, link);

      if (nested) {
        nested.style.display == "block"
          ? (nested.style.display = "none")
          : (nested.style.display = "block");

        nested.style.left = `${index * 15}%`;
      }

      for (let ul of nestedMenu) {
        //close all others
        if (ul != nested) ul.style.display = "none";
      }
    });
  });

  //
  // nav menu ends
  //
});
