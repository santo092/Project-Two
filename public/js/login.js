$("#user-login").on("submit", function(e) {
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: "/api/login",
    data: {
      email: $("#email")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    }
  })
    .then(function(data) {
      console.log(data);
      //***** */stick this into local storage to access user id
      window.location.replace(data);
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });
});
