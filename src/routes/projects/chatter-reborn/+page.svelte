<script>
import ProjectPage from "$lib/ProjectPage.svelte"

import "../../../styles/global.scss"
</script>

<ProjectPage
    title="Chatter Reborn"
    category="learning_projects"
    deployment={["chatter-5dkr.onrender.com", "https://chatter-5dkr.onrender.com"]}
    repository={["connellr023/chatter-reborn", "https://github.com/connellr023/chatter-reborn"]}
>
    <h2 class="left-bar fade-in">overview</h2>
    <p class="left-bar fade-in">
        This project is a variation of a previous project, Chatter, re-implemented in the Gleam programming language.
        This version is essentially just the text chat aspect of Omegle (which no longer exists).
        It allows users to speed chat with random strangers in real-time.
    </p>

    <h2 class="left-bar fade-in">why</h2>
    <p class="left-bar fade-in">I chose to re-implement this project in Gleam for the following reasions:</p>
    <p class="left-bar fade-in">
        <i>Learning functional programming</i> was something I wanted to do for a while, and Gleam seemed like a good language to start with.
    </p>
    <p class="left-bar fade-in">
        <i>Type safety</i> is very important to me when programing, and Gleam is a statically typed language unlike Erlang and Elixir.
    </p>
    <p class="left-bar fade-in">
        <i>Familiar syntax</i> was also a factor in choosing Gleam. It has a syntax similar to Rust, which I have really enjoyed using.
    </p>
    <p class="left-bar fade-in">
        <i>Concurrency</i> is a big part of the Erlang ecosystem, and I wanted to see how it was implemented in Gleam.
    </p>
    <p class="left-bar fade-in">
        What is interesting about this approach, is that the webserver can scale to handle many users at once because of the way the Erlang VM handles concurrency.
        This is in contrast to single-threaded servers like those in Node.js which will hit a limit on the number of users they can handle at some point.
    </p>

    <h2 class="left-bar fade-in">challenges</h2>
    <p class="left-bar fade-in">
        The concept of socket programming was not new to me at this point but I typically used libraries like Socket.io to handle the heavy lifting.
        Thus, in this version, I had to implement the socket server from scratch with the help of a small library called <b>mist</b>.
    </p>
    <p class="left-bar fade-in">
        This was difficult at first because Gleam is a new language and the documentation is not as extensive as other languages.
        Additionally, at the time of writing this, <b>mist</b> had almost no documentation on how to use sockets for anything more than a basic echo server.
        I ended up reading the source code of the library to figure out how to use it.
    </p>

    <h2 class="left-bar fade-in">images</h2>
    <div class="image-container">
        <img class="fade-in" src="/images/chatter-reborn/1.png" alt="Chatter Reborn start view">
        <img class="fade-in" src="/images/chatter-reborn/2.png" alt="Chatter Reborn queue view">
        <img class="fade-in" src="/images/chatter-reborn/3.png" alt="Chatter Reborn chat view">
    </div>
</ProjectPage>
