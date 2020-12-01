function openPage(pageName, elmnt, color, clicou) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    if (tablinks[i].innerHTML == clicou ){
      tablinks[i].classList.remove("unactive")
      tablinks[i].classList.add("active")
      
    }
    else{
      tablinks[i].classList.remove("active")
      tablinks[i].classList.add("unactive")
    }
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  
}

<<<<<<< HEAD
function filtros() {
  var submit,options;

  submit = document.querySelectorAll('a')

  options = document.querySelectorAll('input[type="checkbox"]')

  for ( var j = 0 , lenghth = options.length; j< lenghth ; j++) {
    if(options[j].checked) {
      localStorage.setItem(options[j].id,options[j].getAttribute("Name"));
    }
  }


}
=======
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('input[type="submit"]');
>>>>>>> 4e09f9da7e6d0b081d16d33c84ac8d717dfebbdf
