let lastScroll = 0;
const body = document.body;
const transitionThreshold = 800;
const invertedThreshold = 1200;
let positionInterval;

function randomPosition(element) {
  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 100);
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function updatePositions() {
  if (body.classList.contains("transition")) {
    randomPosition(document.getElementById("duality"));
    randomPosition(document.getElementById("of"));
    randomPosition(document.getElementById("a"));
    randomPosition(document.getElementById("man"));
  }
}

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (
    currentScroll > transitionThreshold &&
    lastScroll <= transitionThreshold
  ) {
    body.classList.add("transition");
    positionInterval = setInterval(updatePositions, 1000);
  } else if (
    currentScroll <= transitionThreshold &&
    lastScroll > transitionThreshold
  ) {
    body.classList.remove("transition");
    clearInterval(positionInterval);
  }

  if (
    currentScroll > invertedThreshold &&
    lastScroll <= invertedThreshold
  ) {
    body.classList.add("inverted");
  } else if (
    currentScroll <= invertedThreshold &&
    lastScroll > invertedThreshold
  ) {
    body.classList.remove("inverted");
  }

  lastScroll = currentScroll;
});

// Initial positions
randomPosition(document.getElementById("duality"));
randomPosition(document.getElementById("of"));
randomPosition(document.getElementById("a"));
randomPosition(document.getElementById("man"));

document.addEventListener('DOMContentLoaded', function() {
  // Handle project clicks
  const projects = document.querySelectorAll('.project');
  
  projects.forEach(project => {
    project.addEventListener('click', function() {
      // Close other projects
      projects.forEach(p => {
        if (p !== project) {
          p.classList.remove('active');
        }
      });
      
      // Toggle current project
      this.classList.toggle('active');
    });
  });
}); 