import { placeUsedTags } from "../posts.ts";

document.addEventListener("used-tags-reloading-requested", (e) => {
  placeUsedTags();
});
