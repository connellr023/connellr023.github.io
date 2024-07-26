<script lang="ts">
import { onMount } from "svelte"

export let text: string
export let typeSpeed: number
export let blinkSpeed: number

let current = 0
let isBlinkVisible: boolean = true

onMount(() => {
    const typeInterval = setInterval(() => {
      current = current < text.length ? current + 1 : current
    }, typeSpeed)

    const blinkInterval = setInterval(() => {
        isBlinkVisible = !isBlinkVisible
    }, blinkSpeed)

    return () => {
        clearInterval(typeInterval)
        clearInterval(blinkInterval)
    }
})
</script>


<span>{text.slice(0, current)}</span>
<span class="invis">{text.slice(current, text.length)}</span>

<style lang="scss">
span {
    display: inline;
    word-wrap: nowrap;
}

span.invis {
    color: red;
}
</style>
