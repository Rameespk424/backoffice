// Mobile Menu


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
   
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});



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
  

  // JavaScript to handle "Add to Cart" functionality


const cartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartCountElement = document.getElementById("cart-count");


let cartCount = 0;


cartButtons.forEach((button) => {
  button.addEventListener("click", () => {

    cartCount++;

    cartCountElement.textContent = cartCount;
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

