<script lang="ts">
  import type { GraphData } from "$lib";
  import Graph from "../Graph.svelte";

  export let title: string;
  export let href: string;
  export let description: string;
  export let stack: string[];
  export let languages: [string, string][] = [];

  let languageData = languages.map(([a, b]) => [
    a,
    b,
    1,
  ]) as unknown as GraphData[];
</script>

<a class="entry-container left-bar red" draggable={false} {href}>
  <h3 class="entry-title">
    <span class="token-green">{title}</span>
  </h3>
  <span class="arrow">{"->"}</span>
</a>
<p class="left-bar">{description}</p>
<p class="left-bar entry-stack comment">{stack.join(", ")}</p>
<Graph data={languageData} />
