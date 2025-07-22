import { ColorInput } from "./components/color-input.js";
import { getHTMLElement } from "./html.js";
const colorPickerDIV = getHTMLElement(".tc-color-pickers");
const THEME_SETTINGS = "sastra-theme-settings";
const COLORS_AMOUNT = 6;
function rgbStringToHex(rgbString) {
  let rgbRegex = rgbString.trim().match(/\d+/g);
  if (rgbRegex) {
    const [r, g, b] = rgbRegex.map(Number);
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  } else {
    throw new Error(
      "[theme-configuration.ts] rgbRegex in rgbStringToHex function was set to null [ERROR, THIS VARIABLE SHOULD NOT BEEN SET TO NULL!!!!]",
    );
  }
}
function getThemeSettings() {
  const themeSettings = localStorage.getItem(THEME_SETTINGS);
  if (themeSettings) {
    return JSON.parse(themeSettings);
  } else {
    throw new Error(
      `[theme-configuration.ts] ${THEME_SETTINGS} was not set in localStorage`,
    );
  }
}
function setThemeColor(color, value) {
  const themeSettings = getThemeSettings();
  themeSettings[color] = value;
  localStorage.setItem(THEME_SETTINGS, JSON.stringify(themeSettings));
}
function getThemeColor(color) {
  const themeSettings = getThemeSettings();
  return themeSettings[color];
}
export function setTheme() {
  for (let i = 1; i <= COLORS_AMOUNT; i++) {
    document.documentElement.style.setProperty(
      `--color-${i}`,
      getThemeColor(`--color-${i}`) ||
        getComputedStyle(document.documentElement).getPropertyValue(
          `--color-${i}`,
        ),
    );
  }
}
if (!localStorage.getItem(THEME_SETTINGS)) {
  localStorage.setItem(THEME_SETTINGS, JSON.stringify({}));
}
for (let i = 1; i <= COLORS_AMOUNT; i++) {
  colorPickerDIV.insertAdjacentHTML("beforeend", ColorInput(i));
  const picker = getHTMLElement(`#tc-color-${i}`);
  const baseColor = getComputedStyle(document.documentElement).getPropertyValue(
    `--color-${i}`,
  );
  picker.value = rgbStringToHex(baseColor);
  picker.oninput = function () {
    document.documentElement.style.setProperty(`--color-${i}`, picker.value);
    setThemeColor(`--color-${i}`, picker.value);
  };
}
