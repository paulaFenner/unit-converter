const inputEl = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');

const baseValue = inputEl.value;

convertBtn.addEventListener('click', render);

function render() {
  getValue();
  clearInput();
}

function getValue() {
  convertLenght(baseValue);
  convertVolume(baseValue);
  convertMass(baseValue);
}

function clearInput() {
  inputEl.value = '';
}

function convertLenght(baseValue) {
  const meter = 3.281;
  const lengthEl = document.getElementById('length-el');
  lengthEl.textContent += `
    ${baseValue} meters = ${(baseValue * meter).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue / meter).toFixed(3)} meters
    `;
}

function convertVolume(baseValue) {
  const liter = 0.264;
  const volumeEl = document.getElementById('volume-el');
  volumeEl.textContent += `
    ${baseValue} meters = ${(baseValue * liter).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue / liter).toFixed(3)} meters
    `;
}

function convertMass(baseValue) {
  const kilo = 2.204;
  const massEl = document.getElementById('mass-el');
  massEl.textContent += `
    ${baseValue} meters = ${(baseValue * kilo).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue / kilo).toFixed(3)} meters
    `;
}

/* CHALLENGE
function convert(baseValue, conversionType, unit1, unit2, conversionFactor) {
    const result1 = `${baseValue} ${unit1} = ${(baseValue * conversionFactor).toFixed(3)} ${unit2}`;
    const result2 = `${baseValue} ${unit2} = ${(baseValue / conversionFactor).toFixed(3)} ${unit1}`;
  
    return `${result1} | ${result2} (${conversionType})`;
  } */
