<script lang="ts">
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { browser } from "$app/environment";

  import Header from "$lib/Header.svelte";
  import Greeting from "$lib/Greeting.svelte";
  import TechCarousel from "$lib/TechCarousel.svelte";
  import ProjectEntry from "$lib/project/ProjectEntry.svelte";

  import "../styles/global.scss";
  import ExperienceEntry from "$lib/experience/ExperienceEntry.svelte";

  if (browser) {
    const onHashChanged = () => {
      const hash = window.location.hash;

      if (hash) {
        const category = hash.slice(1);
        document.getElementById(category)?.scrollIntoView();
      }
    };

    onMount(() => {
      window.addEventListener("hashchange", onHashChanged);
      onHashChanged();
    });

    onDestroy(() => {
      window.removeEventListener("hashchange", onHashChanged);
    });
  }
</script>

<Header />
<Greeting />
<div class="content-container">
  <p class="left-bar intro fade-in">
    I am a <i>Computer Science</i> student at the <i>University of Calgary</i>,
    specializing in <i>interactive</i>, <i>scalable</i>, and <i>secure</i>
    software development. I have experience in building <i>web applications</i>
    and <i>real-time embedded systems</i>, and I am dedicated to continuously
    enhancing my skills.
  </p>

  <h2 class="left-bar fade-in">technologies</h2>
  <p class="left-bar fade-in">
    I have experience with a variety of technologies, but I am most comfortable
    with and enjoy the ones below.
  </p>
  <div class="carousel-container fade-in">
    <TechCarousel />
  </div>

  <h2 id="experience" class="left-bar fade-in">experience</h2>
  <p class="left-bar fade-in">
    This area is dedicated to work and volunteer experience related to software
    development.
  </p>
  <div class="fade-in">
    <ExperienceEntry
      href="/experience/garmin"
      company="Garmin"
      position="Software Engineering Intern"
      description="A global leader in the design and manufacturing of GPS navigation and communication devices."
      stack={["C"]}
      languages={[["C", "c"]]}
    />
  </div>
  <div class="fade-in">
    <ExperienceEntry
      href="/experience/soar"
      startDate="September 2024"
      company="Student Organization for Aerospace Research (SOAR)"
      position="Avionics Software Member"
      description="The University of Calgary’s foremost student run high rocketry research team."
      stack={[
        "C",
        "C++",
        "Python",
        "Svelte",
        "Protobuf",
        "Pocketbase",
        "Raspberry Pi",
        "STM32",
        "FreeRTOS",
      ]}
      languages={[
        ["C", "c"],
        ["C++", "cpp"],
        ["Python", "python"],
        ["Svelte", "svelte"],
        ["TS", "ts"],
      ]}
    />
  </div>

  <h2 id="main_projects" class="left-bar fade-in">main_projects</h2>
  <p class="left-bar fade-in">
    This section is dedicated to the projects that have had the largest scale,
    complexity and required significant time and effort.
  </p>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={true}
      href="/projects/oncology-quest"
      name="Oncology Quest"
      description="A web app architected to aid Medical Oncology trainees and rotation directors."
      stack={[
        "Rust",
        "Actix Web",
        "SQLx",
        "PostgreSQL",
        "Vue.js",
        "AWS ECS",
        "Docker",
      ]}
      languageData={[
        ["Rust", "rust", 44],
        ["Vue", "vue", 32],
        ["TS", "ts", 17],
        ["SCSS", "scss", 5],
        ["Docker", "docker", 2],
      ]}
    />
  </div>

  <h2 id="learning_projects" class="left-bar fade-in">learning_projects</h2>
  <p class="left-bar fade-in">
    These projects were created for the purposes of self-learning and are not
    what I would consider very complex but are still interesting in terms of
    their functionality. This is not an exhaustive list of all the projects I
    have worked on, but rather a selection of the most relevant ones.
  </p>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={false}
      href="/projects/snake-plus-plus"
      name="Snake++"
      description="An infinitely playable version of the classic Snake game with power-ups and a high score system."
      stack={["C++", "GNU Make"]}
      languageData={[
        ["C++", "cpp", 97],
        ["Make", "make", 3],
      ]}
    />
  </div>
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
        ["Docker", "docker", 7],
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
        ["Vue", "vue", 11],
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
        ["Docker", "docker", 4],
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
      href="/projects/connellr023.github.io"
      name="connellr023.github.io"
      description="My portfolio website which you are currently viewing!"
      stack={["SvelteKit", "Typescript"]}
      languageData={[
        ["Svelte", "svelte", 90],
        ["SCSS", "scss", 7],
        ["TS", "ts", 3],
      ]}
    />
  </div>

  <h2 id="school_projects" class="left-bar fade-in">school_projects</h2>
  <p class="left-bar fade-in">
    These are some of my projects completed as school work which were
    particularly interesting to me and likely relevant in a job context.
  </p>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={true}
      href="/projects/snesk"
      name="SNESK"
      description="A re-implementation of snake that runs on a bare metal Rapberry Pi 4 with a SNES controller. Built with a team of 2."
      stack={["C", "GNU Make", "Raspberry Pi 4"]}
      languageData={[
        ["C", "c", 94],
        ["Assembly", "asm", 3],
        ["Make", "make", 3],
      ]}
    />
  </div>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={true}
      href="/projects/self-checkout-station"
      name="Self-Checkout Station"
      description="A software system that controls a self-checkout station, including a user interface and interacts with a simulated hardware API. Built with a team of 20."
      stack={["Java", "JUnit", "Swing"]}
      languageData={[["Java", "java", 100]]}
    />
  </div>

  <h2 id="hackathons" class="left-bar fade-in">hackathons</h2>
  <p class="left-bar fade-in">
    This section is for projects that were created during hackathons. These
    projects were created in a short amount of time and are not polished.
  </p>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={false}
      href="/projects/atla"
      name="Atla"
      description="A web app that aims to bring the Calgarian community together by providing a centralized platform to post and view volunteering events. Built with a team of 2."
      stack={["Next.js", "TypeScript", "Redis", "Vercel"]}
      languageData={[
        ["TS", "ts", 83],
        ["SCSS", "scss", 17],
      ]}
    />
  </div>

  <h2 id="historical" class="left-bar fade-in">historical</h2>
  <p class="left-bar fade-in">
    This section is dedicated to projects that I developed during my years in
    Middle School and High School.
  </p>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={false}
      href="/projects/platscii"
      name="PlatSCII"
      description="A text adventure platformer developed for Ludum Dare 41. Developed with a team of 3."
      stack={[
        "Unity",
        "C#",
        "Pyxel Art",
        "Ableton Suite 9",
        "BFXR",
        "Mercurial",
        "Tortoise HG",
      ]}
      languageData={[["C#", "csharp", 100]]}
    />
  </div>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={false}
      href="/projects/crumble"
      name="CRUMBLE"
      description="A turn-based strategy game developed for Ludum Dare 42. Developed with a team of 3."
      stack={[
        "Unity",
        "C#",
        "Aesprite",
        "Ableton Studio",
        "Mercurial",
        "Tortoise HG",
      ]}
      languageData={[["C#", "csharp", 100]]}
    />
  </div>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={false}
      href="/projects/dungeon-o-coins"
      name="Dungeon O' Coins"
      description="A level-based platformer developed for Ludum Dare 43. Developed with a team of 3."
      stack={["Unity", "C#", "Aesprite", "Mercurial", "Tortoise HG"]}
      languageData={[["C#", "csharp", 100]]}
    />
  </div>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={false}
      href="/projects/spirit"
      name="Spirit"
      description="You are stranded in a world of basic geometry and being hunted by squares hungry for Spirits. Developed for Ludum Dare 44."
      stack={["Unity", "C#", "Bosca Ceoil", "Adobe Illustrator", "Paint.NET"]}
      languageData={[["C#", "csharp", 100]]}
    />
  </div>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={false}
      href="/projects/crumble-reborn"
      name="Crumble Reborn"
      description="A multiplayer top-down view web game where you must battle another opponent with a rocket launcher on a crumbling map."
      stack={["Typescript", "Socket.io", "P5.js", "JQuery"]}
      languageData={[
        ["TS", "ts", 93],
        ["SCSS", "scss", 7],
      ]}
    />
  </div>
  <div class="fade-in">
    <ProjectEntry
      isPrivate={false}
      href="/projects/colour-battle"
      name="Colour Battle"
      description="A 2D multiplayer platformer where the goal is to paint the level with your colour."
      stack={["Java", "Processing"]}
      languageData={[["Java", "java", 100]]}
    />
  </div>
</div>

<style lang="scss">
  @import "../styles/variables.scss";

  div.carousel-container {
    margin-top: 1rem;
  }

  p.intro {
    margin-top: 2rem;
  }
</style>
