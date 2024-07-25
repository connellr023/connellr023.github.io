<script>
import Greeting from "$lib/Greeting.svelte";
import "../styles/global.scss"
</script>

<main>
    <Greeting />
</main>

<style lang="scss">
@import "../styles/variables.scss";

main {
    $horizontal-margin: 15lvw;
    $vertical-margin: 10lvh;

    margin: $vertical-margin $horizontal-margin;
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
