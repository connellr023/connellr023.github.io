<script>
import Greeting from "$lib/Greeting.svelte"
import Footer from "$lib/Footer.svelte"
import TypeWriter from "$lib/TypeWriter.svelte"
import SectionTitle from "$lib/SectionTitle.svelte"
import TechCarousel from "$lib/TechCarousel.svelte"
import ProjectEntry from "$lib/ProjectEntry.svelte"

import "../styles/global.scss"
</script>

<main>
    <Greeting />
    <div class="content-container">
        <p class="left-bar intro">
            Hey, I'm Connell, a <i>Computer Science</i> student at the <i>University of Calgary</i>.
            I specialize in building <i>interactive</i>, <i>scalable</i>, and <i>secure</i> software tailored to the web.
            Whether that be in the context of a <i>web app</i>, <i>mobile app</i>, or a <i>static website</i>, I am consistently honing these skills.
        </p>

        <h2 class="left-bar pink"><SectionTitle title="technologies" /></h2>
        <p class="left-bar">{"I have experience with a variety of technologies, but I am most comfortable with as well as enjoy the ones below."}</p>
        <div class="carousel-container">
            <TechCarousel />
        </div>

        <h2 class="left-bar pink"><SectionTitle title="main_projects" /></h2>
        <p class="left-bar">{"This section is dedicated to the projects that have had the largest scale, complexity and required significant time and effort."}</p>
        <div>
            <ProjectEntry
                isPrivate={true}
                name="Oncology Quest"
                description="A web app architected to aid Medical Oncology trainees and rotation directors."
                stack={["Rust", "Actix Web", "SQLx", "PostgreSQL", "Vue.js", "AWS ECS", "Docker"]}
                languageData={[
                  ["Rust", "rust", 44],
                  ["Vue", "vue", 32],
                  ["TS", "ts", 17],
                  ["SCSS", "scss", 5],
                  ["Docker", "docker", 2]
                ]}
            />
        </div>

        <h2 class="left-bar pink"><SectionTitle title="learning_projects" /></h2>
        <p class="left-bar">{"These projects were created for the purposes of self-learning and are not what I would consider very complex but are still interesting in terms of their functionality."}</p>
        <div>
            <ProjectEntry
                isPrivate={false}
                name="Chatter Reborn"
                description="A massively concurrent chat application architected for real-time, one-on-one conversations."
                stack={["Gleam/Erlang", "React", "Docker"]}
                languageData={[
                  ["Gleam", "gleam", 52],
                  ["TS", "ts", 29],
                  ["SCSS", "scss", 12],
                  ["Docker", "docker", 7]
                ]}
            />
        </div>
        <div>
            <ProjectEntry
                isPrivate={false}
                name="Chatter"
                description="A web application designed for real-time, conversations within global chat rooms."
                stack={["Vue.js", "Node.js", "Socket.io"]}
                languageData={[
                  ["TS", "ts", 80],
                  ["SCSS", "scss", 9],
                  ["Vue", "vue", 11]
                ]}
            />
        </div>
        <div>
            <ProjectEntry
                isPrivate={false}
                name="tensort"
                description="A CLI tool that utilizes a ResNet convolutional neural network to recognize content in images and sort them into classes."
                stack={["Rust", "Libtorch", "Docker"]}
                languageData={[
                  ["Rust", "rust", 96],
                  ["Docker", "docker", 4]
                ]}
            />
        </div>
        <div>
            <ProjectEntry
                isPrivate={false}
                name="gratis"
                description="A lightweight framework for developing REST-like APIs in PHP."
                stack={["PHP", "PHPUnit", "Composer"]}
                languageData={[["PHP", "php", 100]]}
            />
        </div>

        <h2 class="left-bar pink"><SectionTitle title="school_projects" /></h2>
        <p class="left-bar">These are <i>some</i> of my projects completed as school work which were particularly interesting to me and possibly relevant in a job context.</p>
        <div>
            <ProjectEntry
                isPrivate={true}
                name="SNESK"
                description="An implementation of the classic snake game that runs on a bare metal Rapberry Pi 4 with a SNES controller. Built with a team of 2."
                stack={["C"]}
                languageData={[
                  ["C", "c", 97],
                  ["Assembly", "asm", 3]
                ]}
            />
        </div>
        <div>
            <ProjectEntry
                isPrivate={true}
                name="Self-Checkout Station Control Software"
                description="A software system that controls a self-checkout station, including a user interface and interacts with a simulated hardware API. Built with a team of 20."
                stack={["Java, JUnit", "Swing"]}
                languageData={[["Java", "java", 100]]}
            />
        </div>
    </div>
</main>
<Footer />

<style lang="scss">
@import "../styles/variables.scss";

main {
    $horizontal-margin: 20px;

    margin-left: $horizontal-margin;
    margin-right: $horizontal-margin;
    margin-top: 50px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
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

div.carousel-container {
    margin-top: 1rem;
}

p.intro {
    margin-top: 1rem;
}
</style>
