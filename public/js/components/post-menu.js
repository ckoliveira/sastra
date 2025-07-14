export const POST_MENU_DIV = "post-menu";
export const POST_MENU_SAVE_BUTTON = "post-menu-save-button";
export const POST_MENU_CLOSE_BUTTON = "post-menu-close-button";
export const POST_TITLE_INPUT = "post-title";
export const POST_BODY_INPUT = "post-body";
export const POST_TAGS_INPUT = "post-tags";
export const PostMenu = (title = "", body = "", tags = [""]) => `
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
