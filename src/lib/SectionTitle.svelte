<script lang="ts">
export let title: string
</script>

<span class="container">
    <span class="token-pink">Self</span>
    <span class="token-green">{"::"}</span>
    {title}
</span>

<style lang="scss">
span.container {
    display: flex;
    flex-direction: row;
}
</style>
