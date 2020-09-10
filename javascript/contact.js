$('#contact').submit(function(e) {
  var name = document.getElementById('firstName')
  var name = document.getElementById('lastName')
  var name = document.getElementById('email')
  var name = document.getElementById('phone')
  message = document.getElementById('message')

  if (!firstName.value || !lastName.value || !email.value || !phone.value || !message.value) {
    alertify.error("Please chech your entries")
  } else {
    $.ajax({
      url:"https://formspree.io/scottlee5455@outlook.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });
    e.preventDefault()
    $(this).get(0).reset()
    alertify.success('Message sent')
  }
})