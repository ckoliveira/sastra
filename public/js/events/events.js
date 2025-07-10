export function dispatchEvent(eventName, opts) {
  document.dispatchEvent(new CustomEvent(eventName, opts));
}
