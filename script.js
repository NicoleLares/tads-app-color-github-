// Obtener elementos de los sliders
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// Obtener elementos de los inputs numéricos
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

// Recuadro de color y código HEX
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");

// Función para actualizar color
function updateColor() {
  const r = parseInt(red.value);
  const g = parseInt(green.value);
  const b = parseInt(blue.value);

  // Sincronizar los inputs numéricos
  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  // Generar color RGB
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  colorBox.style.backgroundColor = rgbColor;

  // Convertir a HEX
  const hex = "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  hexCode.textContent = hex.toUpperCase();
}

// Función para sincronizar input numérico con slider
function syncInputWithSlider(input, slider) {
  let val = parseInt(input.value);
  if (isNaN(val) || val < 0) val = 0;
  if (val > 255) val = 255;
  slider.value = val;
  updateColor();
}

// Eventos sliders
[red, green, blue].forEach(slider => {
  slider.addEventListener("input", updateColor);
});

// Eventos inputs numéricos
redInput.addEventListener("input", () => syncInputWithSlider(redInput, red));
greenInput.addEventListener("input", () => syncInputWithSlider(greenInput, green));
blueInput.addEventListener("input", () => syncInputWithSlider(blueInput, blue));

// Inicializar
updateColor();
