import { setTheme } from "../theme-configuration/theme-configuration.js";
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    setTheme();
  }
});
setTheme();
