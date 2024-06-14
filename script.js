//Reveal on scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
     // console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }
      else{
          entry.target.classList.remove('show');
      }
  });
})
const hiddenElements = document.querySelectorAll('.hiddenSection');
hiddenElements.forEach((el) => observer.observe(el));



// navbar toggle functionality

const navToggle = document.querySelector(".nav-toggler");
navToggle.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
  document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
  document.querySelector(".header").classList.toggle("active");
}

//active sections

document.addEventListener("click", (e) => {
  if(e.target.classList.contains("link-item") && e.target.hash !== ""){
    // prevents multiple clicks when overlay activated
    document.querySelector(".overlay").classList.add("active");
    navToggle.classList.add("hide");
    if(e.target.classList.contains("nav-item")){
      toggleNavbar();
    }
    else{
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      //document.querySelectorAll("section.active").classList.remove("active", "fade-out");
      // document.querySelectorAll("section.active").forEach((section) => {
      //   section.classList.remove("active", "fade-out");
      // });

      if (e.target.hash === "#home") {
        document.querySelectorAll("section").forEach((section) => {
          section.classList.add("active");
          section.classList.remove("fade-out");
        });
      } else {
        // Remove active and fade-out classes from all sections
        document.querySelectorAll("section.active").forEach((section) => {
          section.classList.remove("active", "fade-out");
        });

        // Activate the target section
        document.querySelector(e.target.hash).classList.add("active");
      }

      
      //document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0,0);
      document.body.classList.remove("hide-scrolling");
      navToggle.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    },500);
  }
})