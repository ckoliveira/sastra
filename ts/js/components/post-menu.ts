export const POST_MENU_DIV: string = "post-menu";
export const POST_MENU_SAVE_BUTTON: string = "post-menu-save-button";
export const POST_MENU_CLOSE_BUTTON: string = "post-menu-close-button";

export const POST_TITLE_INPUT: string = "post-title";
export const POST_BODY_INPUT: string = "post-body";
export const POST_TAGS_INPUT: string = "post-tags";

export const PostMenu = (
  title: string = "",
  body: string = "",
  tags: string[] = [""],
): string => `
    <section id=${POST_MENU_DIV}>
        <header class="post-menu-actions">
            <button id=${POST_MENU_SAVE_BUTTON}>Save Entry</button>
            <h3 id="invalid-post-warning"> Post with empty body and title can't be made </h3>
            <button id=${POST_MENU_CLOSE_BUTTON}> Close Menu </button>
        </header>
        
        <input type="text" placeholder="Title" id=${POST_TITLE_INPUT} value="${title}"/>

        <textarea
            id=${POST_BODY_INPUT}
            placeholder="Enter your text here">${body}</textarea>

        <input type="text" id=${POST_TAGS_INPUT} placeholder="Tags" value="${tags.join(", ")}"/>
    </section>
`;
