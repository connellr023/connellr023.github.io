<script lang="ts">
export let isPrivate: boolean
export let name: string
export let description: string
export let stack: string[]
</script>

<a class="container left-bar red" href="">
    <h3>
        <span class="token-red">{isPrivate ? "private" : "public"}</span>
        <span class="name">{name}</span>
        <span class="arrow">{"-> !"}</span>
    </h3>
</a>
<p class="left-bar">{description}</p>
<p class="left-bar comment">{stack.join(", ")}</p>

<style lang="scss">
@import "../styles/variables.scss";

$transition: 0.07s ease;

a.container {
    $border-radius: 0.4rem;
    $vertical-padding: 0.25rem;
    $border: 1px solid transparent;

    margin-top: 2rem;
    cursor: pointer;
    border-bottom: $border;
    border-top: $border;
    border-right: $border;
    padding-top: $vertical-padding;
    padding-bottom: $vertical-padding;
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    transition: all $transition;
    text-decoration: none;

    &:hover {
        border-right-color: $gruvbox-grey-2;
        border-top-color: $gruvbox-grey-2;
        border-bottom-color: $gruvbox-grey-2;
        background-color: $gruvbox-grey-1;

        & > h3 > span.name {
            text-decoration: underline;
        }

        & > h3 > span.arrow {
            opacity: 1;
        }
    }
}

h3 {
    font-weight: normal;
    margin: 0;
    flex-grow: 1;
    transition: transform $transition;
    position: relative;

    span.name {
        color: $gruvbox-lime;

        &:before,
        &:after {
            content: "\"";
        }
    }
}

span.arrow {
    opacity: 0;
    transition: opacity $transition;
    color: $gruvbox-grey-2;
    margin-left: 0.3rem;
}

p.comment {
    color: $gruvbox-grey-2;
    border-color: $gruvbox-grey-2;

    $dist: 0.5rem;

    &:before {
        content: "/*";
        margin-right: $dist;
    }

    &:after {
        content: "*/";
        margin-left: $dist;
    }
}
</style>
