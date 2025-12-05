let prevValue = [0, 0];
const calcValue = () => {
  const abv = parseFloat(document.getElementById("pct").value) / 100;
  const volume = parseFloat(document.getElementById("vol").value);
  const unit = document.getElementById("unit").value;
  const price = parseFloat(document.getElementById("price").value);

  const totalAlc = volume * abv;
  const alcPerDollar = totalAlc / price;

  updateValue(totalAlc, alcPerDollar, unit);
};

const updateValue = (totalAlc, alcPerDollar, unit) => {
  const calcContainer = document.getElementById("calc-container");
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const totalDiv = document.createElement("div");
  const totalP = document.createElement("p");
  totalP.textContent = `There is ${totalAlc.toFixed(
    2
  )} ${unit} of total alcohol in this product.`;
  totalDiv.appendChild(totalP);

  // Create container for value per dollar
  const valueDiv = document.createElement("div");
  const valueP = document.createElement("p");
  valueP.setAttribute("style", "white-space: pre;");
  valueP.textContent = `Alcohol per dollar: ${alcPerDollar.toFixed(
    3
  )} ${unit}/$ \r\n`;
  valueP.textContent += `${prevValue[0] != 0 ? "Prev: " + prevValue[1] : ""}`;
  valueDiv.appendChild(valueP);

  fragment.appendChild(totalDiv);
  fragment.appendChild(valueDiv);
  resultContainer.classList.add("result-container");
  resultContainer.appendChild(fragment);
  prevValue[0] = totalAlc;
  prevValue[1] = alcPerDollar.toFixed(3) + " " + unit;
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calc").onsubmit = (e) => {
    e.preventDefault();
    calcValue();
  };
});
