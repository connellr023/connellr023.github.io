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
                    <a href={`#${category}`} on:click|preventDefault={() => scrollToCategory(category)}>
                        {category}
                    </a>
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
