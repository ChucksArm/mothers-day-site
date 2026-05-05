// Personalized message templates
const messageTemplates = [
  "Dear {name}, your love and care have shaped who I am today. Thank you for everything!",
  "To the strongest woman I know, {name} - Happy Mother's Day! You inspire me every single day.",
  "{name}, you are the heart of our family. Your kindness and strength mean the world to us.",
  "Happy Mother's Day to {name}, my greatest role model and biggest supporter!",
  "{name}, your sacrifices and love have made all the difference. Thank you for being you!",
  "To my amazing mom {name}, you make the world a better place. Happy Mother's Day!"
];

// Generate personalized message
function generateMessage() {
  const momName = document.getElementById('momName').value.trim();
  
  if (!momName) {
    alert('Please enter your mom\'s name!');
    return;
  }
  
  // Select random template
  const randomTemplate = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
  
  // Replace placeholder with actual name
  const personalizedMessage = randomTemplate.replace('{name}', momName);
  
  // Display the message
  const outputDiv = document.getElementById('message-output');
  const messageText = document.getElementById('generated-message');
  
  messageText.textContent = personalizedMessage;
  outputDiv.style.display = 'block';
  
  // Smooth scroll to message
  setTimeout(() => {
    outputDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 200);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Allow Enter key to generate message
document.addEventListener('DOMContentLoaded', function() {
  const momNameInput = document.getElementById('momName');
  if (momNameInput) {
    momNameInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        generateMessage();
      }
    });
  }
});

// Add subtle animation on page load
window.addEventListener('load', function() {
  document.body.style.opacity = '1';
});
