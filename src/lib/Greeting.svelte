<script>
import SocialLink from "./SocialLink.svelte"
import Github from "./vector/GitHub.svelte"
import LinkedIn from "./vector/LinkedIn.svelte"
</script>

<div class="container">
    <div class="name-container">
        <h1>connell_reffo</h1>
        <ul>
            <li>student</li>
            <li>builder</li>
            <li>web_developer</li>
        </ul>
    </div>
    <div class="contact-container">
        <SocialLink link="https://github.com/connellr023" linkText="github/connellr023">
            <Github />
        </SocialLink>
        <SocialLink link="https://www.linkedin.com/in/connell-reffo/" linkText="in/connell-reffo">
            <LinkedIn />
        </SocialLink>
    </div>
</div>

<style lang="scss">
@import "../styles/variables.scss";

h1 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1.6rem;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

div.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;
    max-width: 30rem;
}

div.name-container {
    ul {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        li {
            color: $gruvbox-lime;
            font-size: 1.1rem;

            &:before {
                color: $gruvbox-green;
                content: "|>";
                margin-right: 0.5rem;
            }
        }
    }
}

div.contact-container {
    display: flex;
    flex-direction: column;
}
</style>
