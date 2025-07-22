import { setTheme } from "../theme-configuration/theme-configuration.ts";

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    setTheme();
  }
});

setTheme();
