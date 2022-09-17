import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.querySelector("#date-input");
  const valueEl = document.querySelector("#date-text");

  const year = new Date().getFullYear();
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const date = new Date().getDate();

  inputEl.value = `${year}-${month}-${date}`;
  valueEl.innerText = `${year}년 ${month}월 ${date}일`;

  inputEl.addEventListener("change", () => {
    const [year, month, date] = inputEl.value.split("-");

    valueEl.innerText = `${year}년 ${month}월 ${date}일`;
  });
});
