const myForm = document.getElementById("my-form");
myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const userObject = {
    username: "joshi",
    password: "pass"
  };
  if (username === userObject.username && password === userObject.password) {
    window.location.href = "about.html"; // Replace with your desired URL
  } else {
    alert("Invalid username or password");
  }
});
