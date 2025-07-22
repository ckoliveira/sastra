import { placeUsedTags } from "../posts.js";
document.addEventListener("used-tags-reloading-requested", (e) => {
  placeUsedTags();
});
