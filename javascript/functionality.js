
let myIndex = 1;
var carousel_error = 0;
function carousel() {

  const slides = $(".mySlides");

  if (carousel_error > 1) {
    console.log("Error loading slides: Terminating");
    return;
  }

  if (slides.length == 0) {
    console.log("Error loading slides: Trying again...");
    // Se intenta una unica vez más en caso de haber error
    carousel_error += 1;
    setTimeout(carousel, 4000);
    return;
  }

 
  slides.hide();

  myIndex++;
  myIndex = myIndex % slides.length + 1;
  
  slides.eq(myIndex-1).show();
  
  setTimeout(carousel, 4000);    
}
carousel();

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
