// Auto close the navbar in mobile view after a menu item click
$('.navbar-collapse a').click(function() {
    $("navbar-collapse").collapse('hide');
});

// Clear the form data and reset
function clearForm() {
    document.getElementById("contactUs").reset(); 
}

// Dynamically changing current year for copyright footer
var copyrightYear = document.querySelector(".copyright-year");
var date = new Date();

copyrightYear.textContent = date.getFullYear();
