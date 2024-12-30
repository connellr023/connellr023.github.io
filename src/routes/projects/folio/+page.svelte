<script>
  import ProjectPage from "$lib/project/ProjectPage.svelte";

  import "../../../styles/global.scss";
</script>

<ProjectPage
  title="Folio"
  category="historical"
  repository={["connellr023/Folio", "https://github.com/connellr023/Folio"]}
>
  <h2 class="left-bar fade-in">overview</h2>
  <p class="left-bar fade-in">
    <i>fol.io</i> is a comprehensive platform where users can join and contribute
    to forums on any topic. Users can scroll through posts, post their own content,
    comment, and reply to others. Posts can be upvoted, with the highest-voted posts
    displayed on the front page. Comments use a liking system. Notifications are
    sent for replies, comments, or rank changes.
  </p>

  <h2 class="left-bar fade-in">revival</h2>
  <p class="left-bar fade-in">
    This project was originally developed by me in highschool in 2019 and 2020.
    While the code certainly is not the best, I am proud of the project as it
    was my first full-stack web application. I have since learned a lot about
    web development and have decided to revive the project in a way that stays
    true to the original as much as possible. The main changes in the revival
    were reconstructing the schema, integrating <b>Docker</b>, and removing
    <b>SendGrid</b> integration for verification codes.
  </p>

  <h2 class="left-bar fade-in">nostalgia</h2>
  <p class="left-bar fade-in">
    I have a lot of nostalgia for this project. It was created at a point where
    all I used was raw <b>PHP</b>, <b>JavaScript</b>, <b>CSS</b>, and
    <b>JQuery</b>. No frameworks, no preprocessors, no package managers... such
    a simpler time.
  </p>

  <h2 class="left-bar fade-in">images</h2>
  <p class="left-bar fade-in">
    Here are some images of the front-end of the web application.
  </p>
  <div class="image-container">
    <img
      class="fade-in"
      src="/images/folio/register.png"
      alt="Folio register page"
    />
    <img
      class="fade-in"
      src="/images/folio/register-verification-code.png"
      alt="Folio registeration verification code page"
    />
    <img class="fade-in" src="/images/folio/login.png" alt="Folio login page" />
    <img
      class="fade-in"
      src="/images/folio/profile.png"
      alt="Folio user profile page"
    />
    <img
      class="fade-in"
      src="/images/folio/main-screen.png"
      alt="Folio main page"
    />
    <img class="fade-in" src="/images/folio/forum.png" alt="Folio forum page" />
    <img
      class="fade-in"
      src="/images/folio/trending-posts.png"
      alt="Folio trending posts"
    />
    <img
      class="fade-in"
      src="/images/folio/notifications.png"
      alt="Folio notifications inbox"
    />
  </div>
</ProjectPage>
