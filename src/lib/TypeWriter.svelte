<script lang="ts">
import { onMount } from "svelte"

export let text: string
export let typeSpeed: number = 110
export let blinkSpeed: number = 300

let current = 0
let isBlinkVisible: boolean = true

onMount(() => {
    const typeInterval = setInterval(() => {
      current = current < text.length ? current + 1 : current
    }, typeSpeed)

    const blinkInterval = setInterval(() => {
        isBlinkVisible = current === text.length ? !isBlinkVisible : true
    }, blinkSpeed)

    return () => {
        clearInterval(typeInterval)
        clearInterval(blinkInterval)
    }
})
</script>


<span>
    {text.slice(0, current)}
    <span class={`invis ${isBlinkVisible ? "blink" : ""}`}>{text.slice(current, text.length)}</span>
</span>

<style lang="scss">
span {
    display: flex;
    flex-direction: row;

    span.invis {
        visibility: hidden;
        position: relative;

        &:after {
            $width: 0.77rem;

            content: " ";
            position: absolute;
            width: $width;
            height: 100%;
            border-radius: 0.2rem;
            background-color: transparent;
            visibility: visible;
            left: -$width;
        }

        &.blink:after {
            background-color: #ffffff;
            mix-blend-mode: difference;
        }
    }
}
</style>
