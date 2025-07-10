export const POST_MENU_DIV = "post-menu";
export const POST_MENU_SAVE_BUTTON = "post-menu-save-button";
export const POST_MENU_CLOSE_BUTTON = "post-menu-close-button";
export const PostMenu = () => `
    <section id=${POST_MENU_DIV}>
        <header class="post-menu-actions">
            <button id=${POST_MENU_SAVE_BUTTON}>Save Entry</button>
            <button id=${POST_MENU_CLOSE_BUTTON}>Close Menu</button>
        </header>
        
        <input type="text" placeholder="Title" id="post-title" />

        <textarea
            id="post-body"
            placeholder="Enter your text here">
        </textarea>

        <input type="text" id="post-tags" placeholder="Tags" />
    </section>
`;
