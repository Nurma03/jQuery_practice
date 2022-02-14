$(document).ready(function(){
   $("body").css("background-image", "url('C:\creator\Web tech. course\JQuery_Practice\photo-1532012197267-da84d127e765.jpg')");
});

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});

$('#accept').click(function() {
	if ($('#submitbtn').is(':disabled')) {
    	$('#submitbtn').removeAttr('disabled');
    } else {
    	$('#submitbtn').attr('disabled', 'disabled');
    }
});

$("h2").on("click", function() {
  $("h2").fadeOut();
});

var maxLength = 15;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});

const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

function scrollToTop() {
  window.scrollTo(0, 0);
}
