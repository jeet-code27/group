function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Open Sidebar
function openSidebar() {
  document.getElementById("sidebar").style.right = "0";
}

// Close Sidebar
function closeSidebar() {
  document.getElementById("sidebar").style.right = "-400px";
}

// Form Submission (Optional)
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const referral = document.getElementById("referral").value;

  alert(`Thank you, ${fullName}! Your registration is successful.`);
  closeSidebar();
});
