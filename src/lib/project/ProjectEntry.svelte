<script lang="ts">
  import Graph from "../Graph.svelte";
  import type { GraphData } from "$lib/types/GraphData";

  export let isPrivate: boolean;
  export let name: string;
  export let description: string;
  export let stack: string[];
  export let languageData: GraphData[] = [];
  export let href: string = "";
</script>

<a class="container entry-container left-bar red" draggable={false} {href}>
  <h3 class="entry-title">
    <span class="token-red">{isPrivate ? "private" : "public"}</span>
    <span class="underline string">{name}</span>
  </h3>
  <span class="arrow">{"->"}</span>
</a>
<p class="left-bar">{description}</p>
<p class="left-bar entry-stack comment">{stack.join(", ")}</p>
<Graph data={languageData} />
