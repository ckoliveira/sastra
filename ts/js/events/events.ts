export function dispatchEvent(eventName: string, opts: Record<any, any>) {
  console.debug(
    `[events.ts] Dispatching event ${eventName} with opts ${JSON.stringify(opts)}`,
  );
  document.dispatchEvent(new CustomEvent(eventName, opts));
}
