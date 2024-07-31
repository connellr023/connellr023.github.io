<script lang="ts">
const scrollToCategory = (category: string) => {
    const element = document.getElementById(category)
    element?.scrollIntoView({ behavior: "smooth" })
}

const categories = ["main_projects", "learning_projects", "school_projects"]
</script>

<header>
    <nav>
        <ul class="fade-down">
            {#each categories as category}
                <li>
                    <button on:click|preventDefault={() => scrollToCategory(category)}>
                        {category}
                    </button>
                </li>
            {/each}
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

    li button {
        color: $gruvbox-grey-2;
        border: 1px solid transparent;
        background-color: transparent;
        padding: 0.3rem;
        border-radius: 0.3rem;
        font-size: 0.9rem;
        font-family: $font;
        transition: all 0.1s ease;

        &:hover {
            color: $gruvbox-white;
            border: 1px solid $gruvbox-grey-2;
            background-color: $gruvbox-grey-1;
            text-decoration: underline;
        }
    }
}
</style>
