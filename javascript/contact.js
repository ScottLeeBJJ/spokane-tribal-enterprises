function myFunction() {
    var input = document.getElementById("contact").onsubmit();

    function validateForm() {
      var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
}