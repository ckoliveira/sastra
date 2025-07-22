export const THEME_SETTINGS: string = "sastra-theme-settings";
export const COLORS_AMOUNT: number = 6;

export function rgbStringToHex(rgbString: string): string {
  let rgbRegex: RegExpMatchArray | null = rgbString.trim().match(/\d+/g);

  if (rgbRegex) {
    const [r, g, b]: number[] = rgbRegex.map(Number);

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

export function getThemeSettings(): Record<string, string> {
  const themeSettings: string | null = localStorage.getItem(THEME_SETTINGS);
  if (themeSettings) {
    return JSON.parse(themeSettings);
  } else {
    throw new Error(
      `[theme-configuration.ts] ${THEME_SETTINGS} was not set in localStorage`,
    );
  }
}

export function setThemeColor(color: string, value: string): void {
  const themeSettings: Record<string, string> = getThemeSettings();

  themeSettings[color] = value;

  localStorage.setItem(THEME_SETTINGS, JSON.stringify(themeSettings));
}

export function getThemeColor(color: string): string {
  const themeSettings: Record<string, string> = getThemeSettings();

  return themeSettings[color];
}

export function getDefaultColor(colorID: number): string {
  const color: string = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(`--base-color-${colorID}`);
  return rgbStringToHex(color);
}

export function setTheme(): void {
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
