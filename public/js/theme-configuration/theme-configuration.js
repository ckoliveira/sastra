export const THEME_SETTINGS = "sastra-theme-settings";
export const COLORS_AMOUNT = 6;
export function rgbStringToHex(rgbString) {
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
export function getThemeSettings() {
  const themeSettings = localStorage.getItem(THEME_SETTINGS);
  if (themeSettings) {
    return JSON.parse(themeSettings);
  } else {
    throw new Error(
      `[theme-configuration.ts] ${THEME_SETTINGS} was not set in localStorage`,
    );
  }
}
export function setThemeColor(color, value) {
  const themeSettings = getThemeSettings();
  themeSettings[color] = value;
  localStorage.setItem(THEME_SETTINGS, JSON.stringify(themeSettings));
}
export function getThemeColor(color) {
  const themeSettings = getThemeSettings();
  return themeSettings[color];
}
export function getDefaultColor(colorID) {
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    `--base-color-${colorID}`,
  );
  return rgbStringToHex(color);
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
