<script lang="ts">
  import type { GraphData } from "$lib/types/GraphData";

  export let data: GraphData[];
</script>

<div class="container">
  {#each data as [name, className, value]}
    <span style={`flex-grow: ${value}`} class={className}>{name}</span>
  {/each}
</div>

<style lang="scss">
  @import "../styles/variables.scss";

  span {
    $side-padding: 4px;

    padding-left: $side-padding;
    padding-right: $side-padding;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    height: 100%;
    opacity: 0.8;
    color: $gruvbox-black;
    transition: padding 0.25s ease;
    cursor: default;

    &:hover {
      $side-padding: 2.2rem;

      padding-left: $side-padding;
      padding-right: $side-padding;
    }

    &.rust {
      background-color: $lang-rust;
    }

    &.vue {
      background-color: $lang-vue;
    }

    &.ts {
      background-color: $lang-ts;
      color: $gruvbox-white;
    }

    &.docker {
      background-color: $lang-docker;
      color: $gruvbox-white;
    }

    &.scss {
      background-color: $lang-scss;
      color: $gruvbox-white;
    }

    &.gleam {
      background-color: $lang-gleam;
    }

    &.php {
      background-color: $lang-php;
      color: $gruvbox-white;
    }

    &.c {
      background-color: $lang-c;
      color: $gruvbox-white;
    }

    &.asm {
      background-color: $lang-asm;
      color: $gruvbox-white;
    }

    &.java {
      background-color: $lang-java;
      color: $gruvbox-white;
    }

    &.svelte {
      background-color: $lang-svelte;
    }

    &.make {
      background-color: $lang-make;
      color: $gruvbox-white;
    }

    &.cpp {
      background-color: $lang-cpp;
    }

    &.python {
      background-color: $lang-python;
      color: $gruvbox-white;
    }

    &.dart {
      background-color: $lang-dart;
    }

    &.js {
      background-color: $lang-js;
    }

    &.css {
      background-color: $lang-css;
      color: $gruvbox-white;
    }

    &.groovy {
      background-color: $lang-groovy;
      color: $gruvbox-black;
    }
  }

  div.container {
    height: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: $gruvbox-grey-2;
  }
</style>
