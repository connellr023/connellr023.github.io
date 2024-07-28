<script>
import ProjectPage from "$lib/ProjectPage.svelte"
import Footer from "$lib/Footer.svelte"

import "../../../styles/global.scss"
</script>

<ProjectPage
    title="Oncology Quest"
    stack={["Rust", "Actix Web", "SQLx", "PostgreSQL", "Vue.js", "AWS ECS", "Docker"]}
>
    <p class="left-bar">hello</p>
</ProjectPage>
<Footer />
