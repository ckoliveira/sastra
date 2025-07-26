import { ColorInput } from "../components/color-input.ts";
import { placeSastraHeader } from "../components/sastra-header.ts";
import { getHTMLElement } from "../html.ts";
import {
  COLORS_AMOUNT,
  getDefaultColor,
  getThemeColor,
  rgbStringToHex,
  setTheme,
  setThemeColor,
  THEME_SETTINGS,
} from "./theme-configuration.ts";

const colorPickerDIV: HTMLElement = getHTMLElement(".tc-color-pickers");

if (!localStorage.getItem(THEME_SETTINGS)) {
  localStorage.setItem(THEME_SETTINGS, JSON.stringify({}));
}

for (let i = 1; i <= COLORS_AMOUNT; i++) {
  colorPickerDIV.insertAdjacentHTML("beforeend", ColorInput(i));

  const colorName: string = `--color-${i}`;

  /* Set Input events and default value*/
  const picker = getHTMLElement(`#tc-color-${i}`) as HTMLInputElement;

  const baseColor: string = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(colorName);

  picker.value = getThemeColor(colorName) || rgbStringToHex(baseColor);

  picker.oninput = function () {
    document.documentElement.style.setProperty(colorName, picker.value);
    setThemeColor(colorName, picker.value);
  };

  /* Set Reset Button events */
  const resetButton: HTMLElement = getHTMLElement(`#reset-color-${i}-button`);

  resetButton.onclick = function () {
    document.documentElement.style.setProperty(colorName, getDefaultColor(i));
    picker.value = getDefaultColor(i);
    setThemeColor(colorName, getDefaultColor(i));
  };
}

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    setTheme();
  }
});

placeSastraHeader();

setTheme();
