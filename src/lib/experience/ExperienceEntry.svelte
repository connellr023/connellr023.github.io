<script lang="ts">
  import type { GraphData } from "$lib/types/GraphData";
  import Graph from "../Graph.svelte";

  export let company: string;
  export let position: string;
  export let href: string;
  export let description: string;
  export let stack: string[];
  export let startDate: string | null = null;
  export let endDate: string | null = null;
  export let languages: [string, string][] = [];

  const languageData = languages.map<GraphData>(([a, b]) => [
    a,
    b,
    1,
  ]);
</script>

<a class="entry-container left-bar lime container" draggable={false} {href}>
  <h3 class="entry-title">
    <span class="underline string">{company}</span>
  </h3>
  <span class="arrow">{"->"}</span>
</a>
<p class="left-bar">{description}</p>
<p class="left-bar red">
  <span class="token-red">as</span>
  <span class="token-yellow">{"("}</span>{position}<span class="token-yellow">{")"}</span>
  {#if startDate}
    <span class="token-red">from</span>
    <span class="token-yellow">{"("}</span>{startDate}<span class="token-yellow">{")"}</span>
    <span class="token-red">to</span>
    {#if endDate}
      <span class="token-yellow">{"("}</span>{endDate}<span class="token-yellow">{")"}</span>
    {/if}
    {#if !endDate}
      <span class="token-red">now</span><span class="token-yellow">{"("}</span><span class="token-yellow">{")"}</span>
    {/if}
  {/if}
</p>
<p class="left-bar entry-stack comment">{stack.join(", ")}</p>
<Graph data={languageData} />
