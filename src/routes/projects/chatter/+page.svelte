<script>
  import ProjectPage from "$lib/ProjectPage.svelte";

  import "../../../styles/global.scss";
</script>

<ProjectPage
  title="Chatter"
  category="learning_projects"
  deployment={[
    "chatter-lqqb.onrender.com",
    "https://chatter-lqqb.onrender.com",
  ]}
  repository={["connellr023/Chatter", "https://github.com/connellr023/Chatter"]}
>
  <h2 class="left-bar fade-in">overview</h2>
  <p class="left-bar fade-in">
    Chatter is a web app centered around a global chat system. It features chat
    rooms that are isolated from each other. Each user can connect to it without
    requiring an account to keep implementation simple.
  </p>

  <h2 class="left-bar fade-in">learning_points</h2>
  <p class="left-bar fade-in">
    <i>Websockets</i> were a new concept for me when I started this project and it
    taught me how to implement them in a web app.
  </p>
  <p class="left-bar fade-in">
    <i>Vue.js</i> was also a new framework for me to learn and it was a great experience
    to work with as it showed me beyond React. Personally, I much prefer Vue.js over
    React due to its simplicity to program with.
  </p>
  <p class="left-bar fade-in">
    <i>Testing</i> was a big part of this project as I wanted to learn how to
    test in a Vue.js environment as well as Node.js for the backend. I used
    <b>Jest</b>
    for the backend and <b>Vitest</b> for the frontend.
  </p>

  <h2 class="left-bar fade-in">original_inception</h2>
  <p class="left-bar fade-in">
    The original inception of this project was created by me in grade 8 with PHP
    and a MySQL database running on phpMyAdmin. Futhermore, most of the
    development was completed on an old Acer chromebook emulating Ubuntu. It was
    actually more advanced than this version in that it had an account system.
    However, the chat system used HTTP polling which was very inefficient and it
    never saw the light of day. And yes, JQuery was used to sync app state with
    the DOM, I miss those days...
  </p>
  <p class="left-bar fade-in">
    Another cool fact, the logo used in both this project and Chatter Reborn is
    the same one I made in grade 8 with Adobe Illustrator on a school computer.
    That is its only remains as Google Drive was used as version control...
  </p>

  <h2 class="left-bar fade-in">images</h2>
  <div class="image-container">
    <img class="fade-in" src="/images/chatter/1.png" alt="Chatter start view" />
    <img
      class="fade-in"
      src="/images/chatter/2.png"
      alt="Chatter empty chat view"
    />
    <img class="fade-in" src="/images/chatter/3.png" alt="Chatter chat view" />
    <img class="fade-in" src="/images/chatter/4.png" alt="Chatter error view" />
  </div>
</ProjectPage>
