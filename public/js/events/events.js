export function dispatchEvent(eventName, opts) {
  console.debug(
    `[events.ts] Dispatching event ${eventName} with opts ${JSON.stringify(opts)}`,
  );
  document.dispatchEvent(new CustomEvent(eventName, opts));
}
