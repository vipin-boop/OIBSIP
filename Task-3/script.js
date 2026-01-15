function convertTemperature() {
  const tempInput = document.getElementById("temperature").value;
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("result");
  if (tempInput === "" || isNaN(tempInput)) {
    resultDiv.textContent = "Please enter a valid number!!!";
    return;
  }

  const temp = parseFloat(tempInput);
  let result = "";

  if (unit === "celsius") {
    const f = (temp * 9 / 5) + 32;
    const k = temp + 273.15;
    result = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
  }

  else if (unit === "fahrenheit") {
    const c = (temp - 32) * 5 / 9;
    const k = c + 273.15;
    result = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
  }

  else if (unit === "kelvin") {
    const c = temp - 273.15;
    const f = (c * 9 / 5) + 32;
    result = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
  }

  resultDiv.textContent = result;
}
