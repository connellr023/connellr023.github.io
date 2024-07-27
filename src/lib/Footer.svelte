<script lang="ts">
import { onMount } from "svelte"

type CommitResponse = {
    commit: {
        committer: {
            name: string,
            email: string,
            date: string
        }
    },
    html_url: string
}

const commitIdRegex = /([a-f0-9]{40})$/
const apiEndpoint = "https://api.github.com/repos/connellr023/cr023/commits/main"

let commit: CommitResponse | null = null
let commitIdString: string = ""

const fetchCommit = async () => {
    const response = await fetch(apiEndpoint)

    if (response.ok) {
      commit = await response.json() as CommitResponse
      commitIdString = `0x${commit.html_url.match(commitIdRegex)![0].substring(0, 7)}`
    }
}

onMount(() => {
    fetchCommit()
})
</script>

<footer>
    <span class="license">
        <span class="token-red">let</span>
        license
        <span class="token-green">{"="}</span>
        <span class="token-yellow qualifier-after">Licenses</span><a class="token-yellow" href="https://opensource.org/license/mit" target="_blank">MIT</a>{";"}
    </span>
    <span class="divider">{"/* 2024 */"}</span>
    <span class="commit">
        <span class="token-red">let</span>
        last_commit
        <span class="token-green">{"="}</span>
        {#if commit === null}
            <span class="token-yellow">None</span>{";"}
        {:else}
            <span class="token-yellow">Some</span>{"("}<a class="token-pink" href={commit.html_url} target="_blank">{commitIdString}</a>{");"}
        {/if}
    </span>
</footer>

<style lang="scss">
@import "../styles/variables.scss";

span.divider {
    color: $gruvbox-grey-2;
}

a {
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

footer {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: $gruvbox-grey-1;
    border-top: 1px solid $gruvbox-grey-2;
    font-size: 1rem;
    gap: 1.2rem;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
}

@media (max-width: $mobile-breakpoint) {
    span.divider {
        display: none;
    }
}
</style>
