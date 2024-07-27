<script>
import Greeting from "$lib/Greeting.svelte"
import Footer from "$lib/Footer.svelte"
import TypeWriter from "$lib/TypeWriter.svelte"
import SectionTitle from "$lib/SectionTitle.svelte"

import "../styles/global.scss"
</script>

<main>
    <Greeting />
    <div class="content-container">
        <p class="left-bar">
            Hey, I'm Connell, a <i>Computer Science</i> student at the <i>University of Calgary</i>.
            I specialize in building <i>interactive</i>, <i>scalable</i>, and <i>secure</i> software tailored to the web.
            Whether that be in the context of a <i>web app</i>, <i>mobile app</i>, or a <i>static website</i>, I am consistently honing these skills.
        </p>

        <h2 class="left-bar pink"><SectionTitle title="main_projects" /></h2>
        <p class="left-bar">{"This section is dedicated to the projects that have had the largest scale, complexity and have required significant time and effort."}</p>

        <h2 class="left-bar pink"><SectionTitle title="learning_projects" /></h2>
        <p class="left-bar">{"These projects were created for the purposes of self-learning and are not what I would consider very complex but are still interesting in terms of their functionality."}</p>

        <h2 class="left-bar pink"><SectionTitle title="school_projects" /></h2>
        <p class="left-bar">These are <i>some</i> of my projects completed as school work which were particularly interesting to me and possibly relevant in a job context.</p>
    </div>
</main>
<Footer />

<style lang="scss">
@import "../styles/variables.scss";

main {
    $horizontal-margin: 20px;
    $vertical-margin: 10lvh;

    margin: $vertical-margin $horizontal-margin;
    display: flex;
    align-items: center;
    flex-direction: column;
}

p {
    line-height: 1.3;
    text-align: justify;

    i {
        color: $gruvbox-lime;
    }
}

h2 {
    margin-top: 2.5rem;
    margin-bottom: 0;
    font-weight: normal;
}

div.content-container {
    @include fade-transform(
        $transform: translateY(1.3rem),
        $children: 20,
        $anim-delay: 0.1s,
        $delay-step: 0.13s,
        $anim-id: 3
    );

    max-width: 800px;
}
</style>
