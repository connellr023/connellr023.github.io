<script>
import ProjectPage from "$lib/ProjectPage.svelte"
import Footer from "$lib/Footer.svelte"

import "../../../styles/global.scss"
</script>

<ProjectPage
    title="Chatter"
    category="learning_projects"
    deployment={["chatter-lqqb.onrender.com", "https://chatter-lqqb.onrender.com"]}
    repository={["connellr023/Chatter", "https://github.com/connellr023/Chatter"]}
>
    <h2 class="left-bar fade-in">overview</h2>
    <p class="left-bar fade-in">
        Chatter is a web app centered around a global chat system.
        It features chat rooms that are isolated from each other.
        Each user can connect to it without requiring an account to keep implementation simple.
    </p>

    <h2 class="left-bar fade-in">learning_points</h2>
    <p class="left-bar fade-in">
        <i>Websockets</i> were a new concept for me when I started this project and it taught me how to implement them in a web app.
    </p>
    <p class="left-bar fade-in">
        <i>Vue.js</i> was also a new framework for me to learn and it was a great experience to work with as it showed me beyond React.
        Personally, I much prefer Vue.js over React due to its simplicity to program with.
    </p>
    <p class="left-bar fade-in">
        <i>Testing</i> was a big part of this project as I wanted to learn how to test in a Vue.js environment as well as Node.js for the backend.
        I used <b>Jest</b> for the backend and <b>Vitest</b> for the frontend.
    </p>

    <h2 class="left-bar fade-in">images</h2>
    <div class="image-container">
        <img class="fade-in" src="/images/chatter/1.png" alt="Chatter start view" />
        <img class="fade-in" src="/images/chatter/2.png" alt="Chatter empty chat view" />
        <img class="fade-in" src="/images/chatter/3.png" alt="Chatter chat view" />
        <img class="fade-in" src="/images/chatter/4.png" alt="Chatter error view" />
    </div>
</ProjectPage>
<Footer />
