<div class="container">
    <div class="name-container">
        <h1>connellr023</h1>
        <ul>
            <li>programmer</li>
            <li>builder</li>
            <li>web_developer</li>
        </ul>
    </div>
    <div class="contact-container">

    </div>
</div>

<style lang="scss">
@import "../styles/variables.scss";

h1 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

div.container {
    display: flex;
    gap: 3rem;
    flex-direction: row;
    justify-content: center;
}

div.name-container {
    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
            color: $gruvbox-lime;

            &:before {
                color: $gruvbox-green;
                content: "|>";
                margin-right: 0.5rem;
            }
        }
    }
}
</style>
