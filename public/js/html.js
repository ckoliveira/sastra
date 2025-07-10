export function getHTMLElement(elementIdentifier) {
  const e = document.querySelector(elementIdentifier);
  if (!e) {
    throw new Error(`${elementIdentifier} was not set or found`);
  }
  return e;
}
export function removeHTMLElement(elementIdentifier) {
  const e = getHTMLElement(elementIdentifier);
  e.remove();
}
export function doesElementExist(elementIdentifier) {
  return document.querySelector(elementIdentifier) ? true : false;
}
