// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").hide();
//       $("button").click(function(){
//         $("p").show();
//       })
//     });
//   });

console.log("Hello World");

console.log("jQuery version:", $.fn.jquery);


$(function(){
  console.log("Se va crear la pagina");
  $("#includeNavbar").load("snippets/navbar.html"); 
  $("#includePageContent").load("snippets/pageContent.html");
  $("#includeIntroduciton").load("snippets/introduction.html");
  $("#includeTourSection").load("snippets/tourSection.html");
  $("#includeTicketModal").load("snippets/ticketModal.html");
  $("#includeContactSection").load("snippets/contactSection.html");
  $("#includeFooter").load("snippets/footer.html");
});


var myIndex = 1;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
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
