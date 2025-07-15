import { dispatchEvent } from "./events/events.ts";

const CACHED_POST_STORAGE_NAME: string = "sastra:cached-post";

export function setPostCache(): void {
  if (!localStorage.getItem(CACHED_POST_STORAGE_NAME)) {
    localStorage.setItem(CACHED_POST_STORAGE_NAME, "");
  }
}

export function savePostIDToCache(postID: string): void {
  localStorage.setItem(CACHED_POST_STORAGE_NAME, postID);
  console.debug(`[cached-post.ts] Post Cache was set to ${getCachedPostID()}`);
}

export function getCachedPostID(): string {
  const cachedPostID: string | null = localStorage.getItem(
    CACHED_POST_STORAGE_NAME,
  );

  if (cachedPostID === null) {
    throw new Error("cached-post was not set in localStorage");
  }

  return cachedPostID;
}

export function loadCachedPost(): void {
  dispatchEvent("post-clicked", {
    detail: {
      postID: getCachedPostID(),
    },
  });
}

export function clearCachedPost(): void {
  console.debug("[cached-post.ts] Post Cache was cleared");
  localStorage.setItem(CACHED_POST_STORAGE_NAME, "");
}
