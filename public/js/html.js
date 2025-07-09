export function getHTMLElement(element) {
  const e = document.querySelector(element);
  if (!e) {
    throw new Error(`${element} was not set or found`);
  }
  return e;
}
