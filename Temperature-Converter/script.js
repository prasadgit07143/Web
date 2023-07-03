// Logic

var c_obj = document.getElementById("c");
var k_obj = document.getElementById("k");
var f_obj = document.getElementById("f");

function setDefaults() {
  c_obj.value = 0;
  k_obj.value = 273;
  f_obj.value = 32;
}

function fromC() {
  const c = parseFloat(c_obj.value);

  if (isNaN(c)) {
    setDefaults();
    return;
  }

  const temp_in_k = c + 273;
  const temp_in_f = 1.8 * c + 32;

  k_obj.value = temp_in_k;
  f_obj.value = temp_in_f;
}

function fromK() {
  const k = parseFloat(k_obj.value);

  if (isNaN(k)) {
    setDefaults();
    return;
  }

  const temp_in_c = k - 273;
  const temp_in_f = 1.8 * temp_in_c + 32;

  c_obj.value = temp_in_c;
  f_obj.value = temp_in_f;
}

function fromF() {
  const f = parseFloat(f_obj.value);

  if (isNaN(f)) {
    setDefaults();
    return;
  }

  const temp_in_c = (f - 32) * 0.5555555555555556;
  const temp_in_k = temp_in_c + 273;

  c_obj.value = temp_in_c;
  k_obj.value = temp_in_k;
}

// Theme

let lightMode = localStorage.getItem("lightMode");
const switchMode = document.querySelector("#switch");

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
  enableLightMode();
}

switchMode.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  if (lightMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

var state = true;

function move() {
  const c = document.getElementById("switch");

  c.style.transition = "0.2s linear";
  if (state) {
    c.style.transform = "translateX(100%)";
    state = false;
  } else {
    c.style.transform = "translateX(0%)";
    state = true;
  }
}
