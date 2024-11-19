

// Fix Header on Scroll 

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    if (!header) {
      console.error("Header element with id 'header' not found!");
      return;
    }
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    });
  });
  




// Scroll to Top Button


  const scrollToTopButton = document.getElementById("scrollToTopButton");


  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "flex";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  });

