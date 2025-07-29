import { getPost } from "../storage.ts";
import { History, Post, PostHistory, PostVersion } from "../types.ts";

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

export const HISTORY_STORAGE_NAME: string = "post-history";

export function initializeHistoryStorage(): void {
  if (!localStorage.getItem(HISTORY_STORAGE_NAME)) {
    localStorage.setItem(HISTORY_STORAGE_NAME, JSON.stringify({}));
  }
}

export function getHistory(): History {
  const history: string | null = localStorage.getItem(HISTORY_STORAGE_NAME);

  if (!history) {
    throw new Error(`${HISTORY_STORAGE_NAME} was not found in localStorage`);
  }

  return JSON.parse(history);
}

export function getPostHistory(postID: string): PostHistory {
  const postHistory: PostHistory = getHistory()[postID];

  if (!postHistory) {
    throw new Error(`no versions were found for post with id '${postID}'`);
  }
  return postHistory;
}

export function generatePostHistory(pID: string): void {
  console.debug(`[history.ts] Generating history for post with id ${pID}`);

  if (pID in getHistory()) {
    console.warn(`a post history for post with id ${pID} already exists`);
    return;
  }

  const postHistory: PostHistory = {
    postId: pID,
    currentVersion: 1.0,
    versions: [],
  };

  const history: History = getHistory();

  history[pID] = postHistory;

  localStorage.setItem(HISTORY_STORAGE_NAME, JSON.stringify(history));
}

export function removePostHistory(postID: string): void {
  const history: History = getHistory();

  delete history[postID];

  localStorage.setItem(HISTORY_STORAGE_NAME, JSON.stringify(history));
}
