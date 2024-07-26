<script>
import Greeting from "$lib/Greeting.svelte"
import Footer from "$lib/Footer.svelte"

import "../styles/global.scss"
</script>

<main>
    <Greeting />
    <div class="content-container">
        <p>
            Hey, I'm Connell, a <i>Computer Science</i> student at the <i>University of Calgary</i>.
            I specialize in building <i>interactive</i>, <i>scalable</i>, and <i>secure</i> software tailored to the web.
            Whether that be in the context of a <i>web app</i>, <i>mobile app</i>, or a <i>static website</i>, I am consistently honing these skills.
        </p>
    </div>
</main>
<Footer />

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

p {
    border-left: 2px solid $gruvbox-white;
    padding-left: 1rem;
    line-height: 1.3;
    max-width: 800px;
    text-align: justify;

    i {
        color: $gruvbox-lime;
    }
}

div.content-container {
    @include fade-transform(
        $transform: translateY(1.3rem),
        $children: 1,
        $anim-delay: 0.1s,
        $anim-id: 3
    );
}
</style>
