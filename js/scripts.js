function languageSelector(event) {
  event.preventDefault();
  const question1 = document.querySelector("input[name='question1']:checked").value;
  const question2 = document.querySelector("input[name='question2']:checked").value;
  const question3 = document.querySelector("input[name='question3']:checked").value;
  const question4 = document.querySelector("input[name='question4']:checked").value;
  const question5 = document.querySelector("input[name='question5']:checked").value;

  let output;
  if (question1  === "yes") {
    output = "JavaScript is the language for you!";
  } else if (question2 === "yes") {
    output = "You'll likely find Ruby to be right up your alley!";
  } else if (question3 === "yes") {
    output = "Python is a heck of a good time for someone as cool as you!";
  } else if (question4 === "yes") {
    output = "Go is the language for programmers on the move!";
  } else if (question5 === "yes") {
    output = "C# will let you code with perfect pitch!";
  } else {
    output = "The only logical choice for a first language is Swift!"
  }

  document.getElementById("output").innerText = output
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", languageSelector);
});