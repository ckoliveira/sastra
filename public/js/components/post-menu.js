export const POST_MENU_DIV = "post-menu";
export const POST_MENU_SAVE_BUTTON = "post-menu-save-button";
export const POST_MENU_CLOSE_BUTTON = "post-menu-close-button";
export const POST_TITLE_INPUT = "post-title";
export const POST_BODY_INPUT = "post-body";
export const POST_TAGS_INPUT = "post-tags";
export const PostMenu = () => `
    <section id=${POST_MENU_DIV}>
        <div class="post-menu-wrapper">
            <header class="post-menu-actions">
                <button id=${POST_MENU_SAVE_BUTTON}>Save Entry</button>
                <button id=${POST_MENU_CLOSE_BUTTON}>Close Menu</button>
            </header>
            
            <input type="text" placeholder="Title" id=${POST_TITLE_INPUT} />

            <textarea
                id=${POST_BODY_INPUT}
                placeholder="Enter your text here"></textarea>

            <input type="text" id=${POST_TAGS_INPUT} placeholder="Tags" />
        </div>

        <div class="post-menu-sastra-logo">
            <h1>S A S T R A</h1>
            <img src="/images/round_logo.png" alt="sastra logo">
        </div>
    </section>
`;
