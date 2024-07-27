<script lang="ts">
export let title: string
</script>

<span class="container">
    <span class="token-pink qualifier-after">Self</span>
    {title}
</span>

<style lang="scss">
@import "../styles/variables.scss";

span.container {
    display: flex;
    flex-direction: row;
}
</style>
