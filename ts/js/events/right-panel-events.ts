import { placeUsedTags } from "../posts.ts";

document.addEventListener("used-tags-reloading-requested", (e) => {
  console.log("im herteeee");
  placeUsedTags();
});
