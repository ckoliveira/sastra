/*{
  "post-history": {
    "postID_1": {
      "postId": "postID_1",
      "currentVersion": "3.0",
      "versions": [
        {
          "post": [post],
          "version": "1.0",
          "createdAt": [timestamp]
        },
        {
          "post": [post],
          "version": "2.0",
          "createdAt": [timestamp]
        },
        {
          "post": [post],
          "version": "3.0",
          "createdAt": [timestamp]
        }
      ]
    },
    "postID_2": { ... },
    ...
  }
}*/
import { getHistory, getPostHistory, HISTORY_STORAGE_NAME } from "./history.js";
export function addNewVersion(oldVersion, postID) {
  console.debug(
    `[version-manager.ts] Adding new version to post with id ${postID}`,
  );
  const postHistory = getPostHistory(postID);
  const history = getHistory();
  const versions = postHistory.versions;
  const newVersion = {
    post: oldVersion,
    version: postHistory.currentVersion + 1.0,
    createdAt: Date.now(),
  };
  versions.push(newVersion);
  postHistory.currentVersion += 1.0;
  history[postID] = postHistory;
  localStorage.setItem(HISTORY_STORAGE_NAME, JSON.stringify(history));
}
