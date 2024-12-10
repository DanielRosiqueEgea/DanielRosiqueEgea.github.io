// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").hide();
//       $("button").click(function(){
//         $("p").show();
//       })
//     });
//   });

console.log("jQuery version:", $.fn.jquery);
var mySlides;
var first_time = true;
$(function(){
  console.log("Se va crear la pagina");
  $("#includeNavbar").load("snippets/navbar.html"); 
  $("#includeProjectSlides").load("snippets/projectSlides.html");
  mySlides = $('.mySlides');
  $("#includeIntroduction").load("snippets/introduction.html");
  $("#includeTourSection").load("snippets/tourSection.html");
  $("#includeTicketModal").load("snippets/ticketModal.html");
  $("#includeContactSection").load("snippets/contactSection.html");
  $("#includeFooter").load("snippets/footer.html");
  carousel();
});


var myIndex = 0;
var carousel_tries = 1;



function getContrastYIQ(hexcolor){
    var r = parseInt(hexcolor.substring(1,3),16);
    var g = parseInt(hexcolor.substring(3,5),16);
    var b = parseInt(hexcolor.substring(5,7),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? ['w3-text-black', 'w3-text-white'] : ['w3-text-white', 'w3-text-black'];
}

function changeTextClass(element, contrast){
    //console.log(element, contrast);
    $(element).removeClass(contrast[1]);
    $(element).addClass(contrast[0]);
   // console.log(element.className.split(' '));
}


function carousel() {
  var i;
  if (carousel_tries >= 3){
      console.log("carousel_tries exceeded maximun, not loading slides")
      return;
  }

  if (mySlides == undefined || mySlides.length == 0){
      console.log('mySlides is undefined, Trying again in 4s');
      carousel_tries ++;
      mySlides = document.getElementsByClassName("mySlides");
      
      setTimeout(carousel, 4000);    
      return;
  }
  

  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";  
  }

  
  if (myIndex >= mySlides.length) {myIndex = 0; first_time= false}
  var curentSlide = mySlides[myIndex];
  myIndex++;
  curentSlide.style.display = "block";  

  if (first_time){
      img = $(curentSlide).children('img')[0];
      hexcolor = img.getAttribute('data-contrast');
      contrast = getContrastYIQ(hexcolor);
      subdiv = $(curentSlide).children('div')[0];
      changeTextClass(subdiv,contrast);
  }
  carousel_tries = 0;
  setTimeout(carousel, 4000);    
}


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
