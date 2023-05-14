const zaposlenik_btn = document.querySelector("#zaposlenik");
const manager_btn = document.querySelector("#manager");
const name_input = document.querySelector("#name-input");

const getZaposlenik = () => {
  const name = name_input.value;
  console.log(name);
};

zaposlenik_btn.addEventListener("click", getZaposlenik);
