function languageSelector(event) {
  event.preventDefault();
  const question1 = document.querySelector("input[name='question1']:checked").value;
  const question2 = document.querySelector("input[name='question2']:checked").value;
  const question3 = document.querySelector("input[name='question3']:checked").value;
  const question4 = document.querySelector("input[name='question4']:checked").value;
  const question5 = document.querySelector("input[name='question5']:checked").value;
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", languageSelector);
});