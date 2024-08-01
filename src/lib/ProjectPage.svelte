<script lang="ts">
import { base } from "$app/paths"

import SocialLink from "$lib/SocialLink.svelte"
import TypeWriter from "$lib/TypeWriter.svelte"
import Github from "$lib/vector/GitHub.svelte"
import Docker from "$lib/vector/Docker.svelte"

const defaultContributer = "Connell Reffo"

export let title: string
export let category: "main_projects" | "learning_projects" | "school_projects"
export let deployment: [string, string] | null = null
export let repository: [string, string] | null = null
export let extraContributers: string[] = []
</script>

<div class="title-container">
    <div class="name-container column">
        <a class="container" href="{base}/#{category}" draggable={false}>
            <div class="column">
                <div class="row">
                    <span class="back underline left-bar yellow">{category}</span>
                    <span class="divider">{"/"}</span>
                </div>
                <h1 class="left-bar">
                    <TypeWriter text={title} />
                </h1>
            </div>
        </a>
        <p class="left-bar comment contributers">{[defaultContributer, ...extraContributers].join(", ")}</p>
    </div>
    <div class="contact-container column">
        <ul>
            {#if deployment}
                <li>
                    <SocialLink link={deployment[1]} linkText={deployment[0]}>
                        <Docker />
                    </SocialLink>
                </li>
            {/if}
            {#if repository}
                <li>
                    <SocialLink link={repository[1]} linkText={repository[0]}>
                        <Github />
                    </SocialLink>
                </li>
            {/if}
        </ul>
    </div>
</div>
<div class="content-container">
    <slot></slot>
</div>

<style lang="scss">
@import "../styles/variables.scss";

div.title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: $max-content-width;
    margin-top: 1.8rem;
    margin-bottom: 0.5rem;

    div.name-container {
        flex-grow: 1;
    }
}

div.name-container {
    @include fade-transform(
        $transform: translateX(-1.3rem),
        $children: 3,
        $anim-id: 6
    );
}

a.container {
    $font-size: 1.2rem;

    margin: 0;
    padding: 0;

    h1 {
        display: flex;
        flex-direction: row;
        color: $gruvbox-white;
        font-size: $font-size;
        white-space: nowrap;
        margin: 0;
        padding-bottom: 0.3rem;
        padding-right: 0.6rem;
    }

    span.back {
        color: $gruvbox-yellow;
        font-size: $font-size;
        font-weight: 500;
        padding-top: 0.2rem;
        padding-bottom: 0.3rem;
    }

    span.divider {
        user-select: none;
        color: $gruvbox-white;
        margin: 0 0.5rem;
        font-size: $font-size;
    }
}

p.contributers {
  border-color: $gruvbox-grey-2;
  padding-top: 0.2rem;
}
</style>
