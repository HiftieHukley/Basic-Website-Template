const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  img.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
});


const text = 'Get notified for my updates by joining my server!';

let index = 0;

function typeEffect() {
    const container = document.getElementById("typing-effect");
    const lineBreakPoint = window.innerWidth <= 1023 ? 35 : 55;
    
    if (index < text.length) {
      if (index > 0 && index % lineBreakPoint === 0) {
        container.innerHTML += "<br>";
      }
      container.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 40);
    }
  }
  
  typeEffect();
  
document.addEventListener('mousemove', function(e) {
  });
  