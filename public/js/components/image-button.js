const IMAGE_BUTTON_CLASS = "image-button";
export const ImageButton = (imagePath, imageID = "", tooltip = "") =>
  /* HTML */
  `<button id=${imageID} class=${IMAGE_BUTTON_CLASS}>
    <img src="/images/${imagePath}" class="image-button-icon" />
    <p class="tooltip">${tooltip}</p>
  </button>`;
