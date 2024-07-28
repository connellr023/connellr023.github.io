<script lang="ts">
import TypeWriter from "$lib/TypeWriter.svelte"

export let title: string
export let stack: string[] = []
export let deployment: [string, string] | null = null
</script>

<main>
    <div class="content-container">
        <div class="title-container">
            <a class="left-bar yellow container" href="/">
                <span class="back underline">projects</span>
                <span class="divider">/</span>
                <h1>
                    <TypeWriter text={title} />
                </h1>
            </a>
            <p class="left-bar stack comment">{stack.join(", ")}</p>
            {#if deployment}
                <div class="left-bar green extra-link">
                    <a target="_blank" href={deployment[1]}>{deployment[0]}</a>
                </div>
            {/if}
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
        display: flex;
        flex-direction: row;
        color: $gruvbox-white;
        font-size: $font-size;
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

div.extra-link {
    $vertical-padding: 0.25rem;

    padding-top: $vertical-padding;
    padding-bottom: $vertical-padding;

    & > a {
        text-decoration: none;
        color: $gruvbox-green;

        &:hover {
            text-decoration: underline;
        }
    }
}

p.stack {
  border-color: $gruvbox-grey-2;
}

div.project-info-container {
    margin-top: 2rem;
}
</style>
