document.addEventListener("DOMContentLoaded", function () {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll("[data-animate]");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3; 

      if (elementPosition < screenPosition) {
        element.classList.add("animated");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); 
});



document.addEventListener("DOMContentLoaded", function () {

  document
    .querySelectorAll('nav a[href^="#"], a[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
     
        e.preventDefault();


        const targetId = this.getAttribute("href");

    
        if (targetId === "#") return;


        const targetElement = document.querySelector(targetId);

        if (targetElement) {

          const offsetTop = targetElement.offsetTop - 80; 

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth", 
          });
        }
      });
    });
});
