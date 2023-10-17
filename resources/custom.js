// AOS animation
AOS.init();

//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbwDjU29_4qt8gG2qdYWyvYzhiLQbX6iIhFBDN4CvKL44o1HFsmYPDJXyOz7MlvdCewJ/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});

//scroll to top
$("#top-button").click(
  function(){
    $("html, body").animate({scrollTop: 0}, 1000);
  }
)