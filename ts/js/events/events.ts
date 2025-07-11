export function dispatchEvent(eventName: string, opts: Record<any, any>) {
  document.dispatchEvent(new CustomEvent(eventName, opts));
}
