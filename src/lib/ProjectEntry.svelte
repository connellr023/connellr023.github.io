<script lang="ts">
import Graph from "./Graph.svelte"
import type { GraphData } from "$lib/index"

export let isPrivate: boolean
export let name: string
export let description: string
export let stack: string[]
export let languageData: GraphData[] = []
export let href: string = ""
</script>

<a class="container left-bar red" draggable={false} href={href}>
    <h3>
        <span class="token-red">{isPrivate ? "private" : "public"}</span>
        <span class="underline string">{name}</span>
    </h3>
    <span class="arrow">{"->"}</span>
</a>
<p class="left-bar">{description}</p>
<p class="left-bar stack comment">{stack.join(", ")}</p>
<Graph data={languageData} />

<style lang="scss">
@import "../styles/variables.scss";

h3 {
    font-weight: normal;
    margin: 0;
    flex-grow: 1;
    position: relative;
}

span.arrow {
    color: $gruvbox-grey-2;
    padding-right: 0.5rem;
    transform: translateX(-0.5rem);
    transition: all 0.15s ease;
    font-size: 1.1rem;
    white-space: nowrap;
}

a.container {
    &:hover span.arrow {
        color: $gruvbox-white;
        transform: translateX(0);
    }
}

p.stack {
    padding-bottom: 0.3rem;
    border-color: $gruvbox-grey-2;
}
</style>
