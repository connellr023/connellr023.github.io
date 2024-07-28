<script lang="ts">
export let title: string
export let stack: string[] = []
</script>

<main>
    <div class="content-container">
        <div class="title-container">
            <a class="left-bar yellow container" href="/">
                <span class="back underline">projects</span>
                <span class="divider">/</span>
                <h1 class="string">{title}</h1>
            </a>
            <p class="left-bar stack comment">{stack.join(", ")}</p>
        </div>
        <div class="project-info-container">
            <slot></slot>
        </div>
    </div>
</main>

<style lang="scss">
@import "../styles/variables.scss";

a.container {
    $font-size: 1.4rem;

    h1 {
        font-size: $font-size;
        font-weight: 500;
        margin: 0;
    }

    span.back {
        color: $gruvbox-yellow;
        font-size: $font-size;
        font-weight: 500;
    }

    span.divider {
        color: $gruvbox-white;
        margin: 0 0.5rem;
        font-size: $font-size;
    }
}

p.stack {
  border-color: $gruvbox-grey-2;
}

div.project-info-container {
    margin-top: 2rem;
}
</style>
