function languageSelector(event) {
  event.preventDefault();
  const question1 = document.querySelector("input[name='question1']:checked").value;
  const question2 = document.querySelector("input[name='question2']:checked").value;
  const question3 = document.querySelector("input[name='question3']:checked").value;
  const question4 = document.querySelector("input[name='question4']:checked").value;
  const question5 = document.querySelector("input[name='question5']:checked").value;

  document.getElementById("img1").setAttribute("class", "hidden");
  document.getElementById("img2").setAttribute("class", "hidden");
  document.getElementById("img3").setAttribute("class", "hidden");
  document.getElementById("img4").setAttribute("class", "hidden");
  document.getElementById("img5").setAttribute("class", "hidden");
  document.getElementById("img6").setAttribute("class", "hidden");

  let output;
  if (question1  === "yes") {
    output = "JavaScript is the language for you!";
    document.getElementById("img1").removeAttribute("class");
  } else if (question2 === "yes") {
    output = "You'll likely find Ruby to be right up your alley!";
    document.getElementById("img2").removeAttribute("class");
  } else if (question3 === "yes") {
    output = "Python is a heck of a good time for someone as cool as you!";
    document.getElementById("img3").removeAttribute("class");
  } else if (question4 === "yes") {
    output = "Go is the language for programmers on the move!";
    document.getElementById("img4").removeAttribute("class");
  } else if (question5 === "yes") {
    output = "C# will let you code with perfect pitch!";
    document.getElementById("img5").removeAttribute("class");
  } else {
    output = "The only logical choice for a first language is Swift!";
    document.getElementById("img6").removeAttribute("class");
  }

  document.getElementById("output").innerText = output
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", languageSelector);
});