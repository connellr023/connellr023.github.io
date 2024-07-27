<script lang="ts">
export let isPrivate: boolean;
export let name: string;
export let description: string;
export let stack: string[];
</script>

<div class="container left-bar red">
    <h3>
        <span class="token-red">{isPrivate ? "private" : "public"}</span>
        <span class="name">{name}</span>
    </h3>
    <span class="comment">{`// ${stack.join(", ")}`}</span>
</div>
<p class="left-bar">{description}</p>

<style lang="scss">
@import "../styles/variables.scss";

div.container {
    $border-radius: 0.4rem;
    $vertical-padding: 0.25rem;
    $border: 1px solid transparent;

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
    transition: all 0.1s ease;

    &.expanded,
    &:hover {
        border-right-color: $gruvbox-grey-2;
        border-top-color: $gruvbox-grey-2;
        border-bottom-color: $gruvbox-grey-2;
        background-color: $gruvbox-grey-1;
    }
}

h3 {
    font-weight: normal;
    margin: 0;
    flex-grow: 1;

    span.name {
        color: $gruvbox-lime;

        &:before,
        &:after {
            content: "\"";
        }
    }
}

span.comment {
    color: $gruvbox-grey-2;
    margin-right: 0.7rem;
}
</style>
