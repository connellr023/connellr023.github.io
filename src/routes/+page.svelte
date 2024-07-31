<script lang="ts">
import { onMount, onDestroy, afterUpdate } from "svelte"
import { browser } from "$app/environment"

import Main from "$lib/Main.svelte"
import Header from "$lib/Header.svelte"
import Footer from "$lib/Footer.svelte"
import Greeting from "$lib/Greeting.svelte"
import TypeWriter from "$lib/TypeWriter.svelte"
import TechCarousel from "$lib/TechCarousel.svelte"
import ProjectEntry from "$lib/ProjectEntry.svelte"

import "../styles/global.scss"

if (browser) {
  const onHashChanged = () => {
      const hash = window.location.hash

      if (hash) {
          const category = hash.slice(1)
          document.getElementById(category)?.scrollIntoView()
      }
  }

  onMount(() => {
      window.onload = () => { window.location.hash = "" }
      window.addEventListener("hashchange", onHashChanged)

      onHashChanged()
  })

  onDestroy(() => {
      window.removeEventListener("hashchange", onHashChanged)
  })
}
</script>

<Header />
<Main>
    <Greeting />
    <div class="content-container">
        <p class="left-bar intro fade-in">
            Hey, I'm Connell, a <i>Computer Science</i> student at the <i>University of Calgary</i>.
            I specialize in building <i>interactive</i>, <i>scalable</i>, and <i>secure</i> software tailored to the web.
            Whether that be in the context of a <i>web app</i>, <i>mobile app</i>, or a <i>static website</i>, I am consistently honing these skills.
        </p>

        <h2 class="left-bar fade-in">technologies</h2>
        <p class="left-bar fade-in">{"I have experience with a variety of technologies, but I am most comfortable with as well as enjoy the ones below."}</p>
        <div class="carousel-container fade-in">
            <TechCarousel />
        </div>

        <h2 id="main_projects" class="left-bar fade-in">main_projects</h2>
        <p class="left-bar fade-in">{"This section is dedicated to the projects that have had the largest scale, complexity and required significant time and effort."}</p>
        <div class="fade-in">
            <ProjectEntry
                isPrivate={true}
                href="/projects/oncology-quest"
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

        <h2 id="learning_projects" class="left-bar fade-in">learning_projects</h2>
        <p class="left-bar fade-in">
            These projects were created for the purposes of self-learning and are not what I would consider very complex but are still interesting in terms of their functionality.
            This is not an exhaustive list of all the projects I have worked on, but rather a selection of the most interesting ones.
        </p>
        <div class="fade-in">
            <ProjectEntry
                isPrivate={false}
                href="/projects/chatter-reborn"
                name="Chatter Reborn"
                description="A massively concurrent chat application created for real-time, one-on-one conversations."
                stack={["Gleam", "Gleeunit", "React", "Docker"]}
                languageData={[
                  ["Gleam", "gleam", 52],
                  ["TS", "ts", 29],
                  ["SCSS", "scss", 12],
                  ["Docker", "docker", 7]
                ]}
            />
        </div>
        <div class="fade-in">
            <ProjectEntry
                isPrivate={false}
                href="/projects/chatter"
                name="Chatter"
                description="A web application designed for real-time, conversations within global chat rooms."
                stack={["Vue.js", "Vitest", "Jest", "Node.js", "Socket.io"]}
                languageData={[
                  ["TS", "ts", 80],
                  ["SCSS", "scss", 9],
                  ["Vue", "vue", 11]
                ]}
            />
        </div>
        <div class="fade-in">
            <ProjectEntry
                isPrivate={false}
                href="/projects/tensort"
                name="tensort"
                description="A CLI tool that utilizes a ResNet convolutional neural network to recognize content in images and sort them into classes."
                stack={["Rust", "tch.rs (Libtorch)", "Docker"]}
                languageData={[
                  ["Rust", "rust", 96],
                  ["Docker", "docker", 4]
                ]}
            />
        </div>
        <div class="fade-in">
            <ProjectEntry
                isPrivate={false}
                href="/projects/gratis"
                name="gratis"
                description="A lightweight framework for developing RESTful APIs in PHP."
                stack={["PHP", "PHPUnit", "Composer"]}
                languageData={[["PHP", "php", 100]]}
            />
        </div>
        <div class="fade-in">
            <ProjectEntry
                isPrivate={false}
                href="/projects/cr023"
                name="cr023"
                description="My portfolio website which you are currently viewing!"
                stack={["SvelteKit", "Typescript"]}
                languageData={[
                  ["Svelte", "svelte", 95],
                  ["SCSS", "scss", 3],
                  ["TS", "ts", 2]
                ]}
            />
        </div>

        <h2 id="school_projects" class="left-bar fade-in">school_projects</h2>
        <p class="left-bar fade-in">These are some of my projects completed as school work which were particularly interesting to me and likely relevant in a job context.</p>
        <div class="fade-in">
            <ProjectEntry
                isPrivate={true}
                href="/projects/snesk"
                name="SNESK"
                description="A re-implementation of snake that runs on a bare metal Rapberry Pi 4 with a SNES controller. Built with a team of 2."
                stack={["C", "Raspberry Pi 4"]}
                languageData={[
                  ["C", "c", 97],
                  ["Assembly", "asm", 3]
                ]}
            />
        </div>
        <div class="fade-in">
            <ProjectEntry
                isPrivate={true}
                href="/projects/self-checkout-station"
                name="Self-Checkout Station"
                description="A software system that controls a self-checkout station, including a user interface and interacts with a simulated hardware API. Built with a team of 20."
                stack={["Java, JUnit", "Swing"]}
                languageData={[["Java", "java", 100]]}
            />
        </div>
    </div>
</Main>
<Footer />

<style lang="scss">
@import "../styles/variables.scss";

div.carousel-container {
    margin-top: 1rem;
}

p.intro {
    margin-top: 2rem;
}
</style>
