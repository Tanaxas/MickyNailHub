//nav bar
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
//image view
// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var img = document.getElementById("modalImage");

// Get all view links
var viewLinks = document.querySelectorAll(".view-link");

// Loop through each view link
viewLinks.forEach(function(viewLink) {
  viewLink.addEventListener("click", function(event) {
    event.preventDefault();
    var imageUrl = viewLink.getAttribute("data-image");
    img.src = imageUrl;
    modal.style.display = "block";
  });
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Close the modal when the close button is clicked
document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
});
// Function to handle the scroll event
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    // Loop through sections to find the current section
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is in the viewport
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active'); // Add active class to the current link
        }
    });
});