<script lang="ts">
  import Graph from "../Graph.svelte";
  import type { GraphData } from "$lib/types/GraphData";

  export let name: string;
  export let description: string;
  export let stack: string[];
  export let languageData: GraphData[] = [];
  export let href: string = "";
</script>

<a class="container entry-container left-bar red" draggable={false} {href}>
  <h3 class="entry-title">
    <span class="token-red directive">define</span>
    <span class="underline string">{name}</span>
  </h3>
  <span class="arrow">{"->"}</span>
</a>
<p class="left-bar">{description}</p>
<p class="left-bar entry-stack comment">{stack.join(", ")}</p>
<Graph data={languageData} />

<style lang="scss">
  @import "../../styles/variables.scss";

  span.directive::before {
    content: "#";
  }
</style>
