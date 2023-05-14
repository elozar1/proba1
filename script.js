const zaposlenik_btn = document.querySelector("#zaposlenik");
const manager_btn = document.querySelector("#manager");
const name_input = document.querySelector("#name-input");

const path =
  "C:\\Users\\Edi\\Downloads\\Evidencija studenata (2020-11-19).xlsx";

const getZaposlenik = () => {
  const name = name_input.value;
  const reader = new FileReader();
  reader.onload = function () {
    reader.result;
  };
  reader.readAsText();
};
const text = new Blob();
zaposlenik_btn.addEventListener("click", getZaposlenik);
