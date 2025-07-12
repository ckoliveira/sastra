export const POST_MENU_DIV: string = "post-menu";
export const POST_MENU_SAVE_BUTTON: string = "post-menu-save-button";
export const POST_MENU_CLOSE_BUTTON: string = "post-menu-close-button";

export const POST_TITLE_INPUT: string = "post-title";
export const POST_BODY_INPUT: string = "post-body";
export const POST_TAGS_INPUT: string = "post-tags";

export const PostMenu = () => `
    <section id=${POST_MENU_DIV}>
        <header class="post-menu-actions">
            <button id=${POST_MENU_SAVE_BUTTON}>Save Entry</button>
            <div id=${POST_MENU_CLOSE_BUTTON}></div>
        </header>
        
        <input type="text" placeholder="Title" id=${POST_TITLE_INPUT} />

        <textarea
            id=${POST_BODY_INPUT}
            placeholder="Enter your text here"></textarea>

        <input type="text" id=${POST_TAGS_INPUT} placeholder="Tags" />
    </section>
`;
