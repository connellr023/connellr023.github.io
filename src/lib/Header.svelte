<header>
    <nav>
        <ul class="fade-down">
            <li><a draggable={false} href="#main_projects">main_projects</a></li>
            <li><a draggable={false} href="#learning_projects">learning_projects</a></li>
            <li><a draggable={false} href="#school_projects">school_projects</a></li>
        </ul>
    </nav>
</header>

<style lang="scss">
@import "../styles/variables.scss";

ul {
    animation-delay: 0 !important;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1.2rem;
    margin-top: 0.8rem;

    li a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        transition: color 0.2s;
        color: $gruvbox-grey-1;
        transition: color 0.13s ease;

        &:hover {
            text-decoration: underline;
            color: $gruvbox-grey-2;
        }
    }
}
</style>
