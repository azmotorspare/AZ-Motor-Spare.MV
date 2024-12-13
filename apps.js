// script.js
document.getElementById("copy-btn").addEventListener("click", function () {
    const number = document.getElementById("number").textContent;
    
    // Copy the number to the clipboard
    navigator.clipboard.writeText(number).then(() => {
      const message = document.getElementById("message");
      message.classList.remove("hidden");
      
      // Hide the message after 2 seconds
      setTimeout(() => {
        message.classList.add("hidden");
      }, 2000);
    });
  });
  