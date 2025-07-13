export function getHTMLElement(elementIdentifier) {
  let e;
  if (elementIdentifier[0] === "#") {
    e = document.getElementById(elementIdentifier.slice(1));
  } else {
    e = document.querySelector(elementIdentifier);
  }
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
