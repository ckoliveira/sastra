import { POST_MENU_DIV, PostMenu } from "../components/post-menu.js";
import {
  doesElementExist,
  getHTMLElement,
  removeHTMLElement,
} from "../html.js";
import {
  setClosePostMenuButtonEvent,
  setSavePostButtonEvent,
} from "../post-menu.js";
document.addEventListener("post-menu-requested", (e) => {
  if (!doesElementExist("#" + POST_MENU_DIV)) {
    const middlePanelDIV = getHTMLElement(".middle-panel");
    middlePanelDIV.innerHTML = PostMenu();
    setSavePostButtonEvent();
    setClosePostMenuButtonEvent();
  }
});
document.addEventListener("post-menu-closing-requested", (e) => {
  removeHTMLElement("#" + POST_MENU_DIV);
});
