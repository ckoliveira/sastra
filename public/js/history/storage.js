import { getPost } from "../storage.js";
const HISTORY_STORAGE_NAME = "post-history";
export function initializeHistoryStorage() {
  if (!localStorage.getItem(HISTORY_STORAGE_NAME)) {
    localStorage.setItem(HISTORY_STORAGE_NAME, JSON.stringify({}));
  }
}
function getHistory() {
  const history = localStorage.getItem(HISTORY_STORAGE_NAME);
  if (!history) {
    throw new Error(`${HISTORY_STORAGE_NAME} was not found in localStorage`);
  }
  return JSON.parse(history);
}
export function getPostHistory(postID) {
  const postHistory = getHistory()[postID];
  if (!postHistory) {
    throw new Error(`no versions were found for post with id '${postID}'`);
  }
  return postHistory;
}
export function generatePostHistory(pID) {
  if (pID in getPostHistory(pID)) {
    console.warn(`a post history for post with id ${pID} already exists`);
    return;
  }
  const postHistory = {
    postId: pID,
    currentVersion: "1.0",
    versions: [
      {
        post: getPost(pID),
        version: "1.0",
        createdAt: Date.now(),
      },
    ],
  };
  const history = getHistory();
  history[pID] = postHistory;
  localStorage.setItem(HISTORY_STORAGE_NAME, JSON.stringify(history));
}
export function generateHistory(postID) {}
/*{
    "post-history": {
        "postID 1": {
            "postID": "post id".
            "currentVersion": 3.0,
            "versions": [
                {
                    post: [post],
                    version: "1.0",
                    createdAt: [date when version was created]

                },
                {...},
                {...}
            ]
        },
        "postID 2": ...
        "postID 3": ...
        ...
    }
}*/
