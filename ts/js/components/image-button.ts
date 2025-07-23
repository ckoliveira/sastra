const IMAGE_BUTTON_CLASS: string = "image-button";

export const ImageButton = (
  imagePath: string,
  imageID: string = "",
  tooltip: string = "",
) =>
  /* HTML */
  `<button id=${imageID} class=${IMAGE_BUTTON_CLASS}>
    <img src="/images/${imagePath}" class="image-button-icon" />
    <p class="tooltip">${tooltip}</p>
  </button>`;
