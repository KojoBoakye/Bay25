function showModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = message;
    modal.style.display = "block";
    var closeButton = document.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    showModal("Submitting form...");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = xhr.responseText;
          showModal(response);
          document.getElementById("myForm").reset();
        } else {
          showModal("Error: Something went wrong. Please try again later.");
          console.error("Server returned an error:", xhr.status, xhr.statusText);
        }
      }
    };
    xhr.onerror = function() {
      showModal("Error: A network error occurred. Please check your internet connection.");
      console.error("Network error occurred");
    };
    xhr.send(new FormData(this));
  });