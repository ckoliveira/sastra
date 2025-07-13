export function getHTMLElement(elementIdentifier: string): HTMLElement {
  let e: HTMLElement | null;

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

export function removeHTMLElement(elementIdentifier: string): void {
  const e: HTMLElement = getHTMLElement(elementIdentifier);

  e.remove();
}

export function doesElementExist(elementIdentifier: string): boolean {
  return document.querySelector(elementIdentifier) ? true : false;
}
