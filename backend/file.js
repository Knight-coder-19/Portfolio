function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

  const carousel = document.getElementById("carousel");
    const items = Array.from(carousel.children);
    const itemCount = items.length;
    const angle = 360 / itemCount;
    const dotsContainer = document.getElementById("dots");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;
    
    // Create dots
    for (let i = 0; i < itemCount; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.addEventListener('click', function() {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
    const dots = Array.from(dotsContainer.children);
    
    // Position items in a horizontal ring
    items.forEach((item, i) => {
      item.style.transform = `rotateY(${i * angle}deg) translateZ(400px)`;
    });
    
    function updateCarousel() {
      carousel.style.transform = `translateZ(-300px) rotateY(${-currentIndex * angle}deg)`;
      
      items.forEach((item, i) => {
        const offset = (i - currentIndex + itemCount) % itemCount;
        if (offset === 0) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
      
      // Update dots
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
    
    function next() {
      currentIndex = (currentIndex + 1) % itemCount;
      updateCarousel();
    }
    
    function prev() {
      currentIndex = (currentIndex - 1 + itemCount) % itemCount;
      updateCarousel();
    }
    
    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }
    
    // Add event listeners
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    
    // Initialize
    updateCarousel();