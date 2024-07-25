<script lang="ts">
export let link: string
export let linkText: string
</script>

<a class="container" href={link} target="_blank">
    <div class="inner">
        <span class="arrow">{"=>"}</span>
        <div class="logo-container">
            <slot>Logo image goes here</slot>
        </div>
        <span>{linkText}</span>
    </div>
</a>

<style lang="scss">
@import "../styles/variables.scss";

$shift-distance: 0.5rem;
$transition: 0.15s ease;

span.arrow {
    color: $gruvbox-green;
    font-size: 1.5rem;
    opacity: 0;
    transition: opacity $transition;
}

div.inner {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: transform $transition;
    padding-right: $shift-distance;
}

a.container {
    margin: 0;
    padding: 10px;
    color: $gruvbox-white;
    text-decoration: none;
    transition: all $transition;
    border: 1px solid transparent;
    border-radius: 8px;

    &:hover {
        background-color: $gruvbox-grey-1;
        border: 1px solid $gruvbox-grey-2;

        & > div.inner {
            transform: translateX($shift-distance);

            & > span.arrow {
                opacity: 1;
            }
        }
    }
}
</style>
