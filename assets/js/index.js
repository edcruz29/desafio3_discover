const button = document.querySelector(".form__button");
const input = document.querySelector(".form__input");

input.addEventListener("change", function () {
  if (input.value.length > 0) {
    const email = input.value;
    button.addEventListener("click", function (event) {
      alert(`Olá, tudo bom ${email}? Agora você receberá a nossa NewsLetter!`);
      event.preventDefault();
    });
  }
});
