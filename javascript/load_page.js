
console.log("jQuery version:", $.fn.jquery);


$(function(){
  console.log("Se va crear la pagina");
  $("#includeNavbar").load("snippets/navbar.html"); 
  $("#includePageContent").load("snippets/pageContent.html");
  $("#includeBandSection").load("snippets/bandSection.html");
  $("#includeTourSection").load("snippets/tourSection.html");
  $("#includeTicketModal").load("snippets/ticketModal.html");
  $("#includeContactSection").load("snippets/contactSection.html");
  $("#includeFooter").load("snippets/footer.html");
});
