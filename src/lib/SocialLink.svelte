<script lang="ts">
export let link: string
export let linkText: string
</script>

<div class="container">
    <a class="inner" href={link} target="_blank" draggable={false}>
        <span class="arrow">{"=>"}</span>
        <div class="logo-container">
            <slot>Logo image goes here</slot>
        </div>
        <span class="link-text">{linkText}</span>
    </a>
</div>

<style lang="scss">
@import "../styles/variables.scss";

$shift-distance: 0.5rem;
$transition: 0.15s ease;

span.arrow {
    color: $gruvbox-green;
    font-size: 1.3rem;
    opacity: 0;
    transition: opacity $transition;
}

a.inner {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: transform $transition;
    padding-right: $shift-distance;
    text-decoration: none;
    color: $gruvbox-white;
}

div.container {
    margin: 0;
    padding: 10px;
    transition: all $transition;
    border: 1px solid transparent;
    border-radius: 8px;

    &:hover {
        background-color: $gruvbox-grey-1;
        border: 1px solid $gruvbox-grey-2;

        & > a.inner {
            transform: translateX($shift-distance);

            & > span.arrow {
                opacity: 1;
            }

            & > span.link-text {
                text-decoration: underline;
            }
        }
    }
}

@media (max-width: $mobile-breakpoint) {
    span.link-text {
        display: none;
    }
}
</style>
