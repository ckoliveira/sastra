export const ColorInput = (colorID: number) => /*html*/ `
    <section class="color-picker">
        <label for="color-${colorID}-input">Color ${colorID}</label>
        <input type="color" name="color-${colorID}-input" id="tc-color-${colorID}" />
        <button id="reset-color-${colorID}-button"> Reset </button>
    </section>
`;
