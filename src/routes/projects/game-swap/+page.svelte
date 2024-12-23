<script>
  import ProjectPage from "$lib/project/ProjectPage.svelte";

  import "../../../styles/global.scss";
</script>

<ProjectPage
  title="Game Swap"
  category="school_projects"
  repository={[
    "NDMcCa/GameSwap--CPSC-471-Project-",
    "https://github.com/NDMcCa/GameSwap--CPSC-471-Project-",
  ]}
  extraContributers={["Nick McCamis", "Ryan Grewal"]}
>
  <h2 class="left-bar fade-in">overview</h2>
  <p class="left-bar fade-in">
    This project was created for the course <b>CPSC 471</b>, Introduction to
    Database Management Systems. The goal of this project was to create a web
    application that allows users to trade video games with other users. Since
    the project was heavily focused on the database, the front-end interface is
    very minimal due to time constraints.
  </p>

  <h2 class="left-bar fade-in">images</h2>
  <p class="fade-in">
    Below are some images of the platform. It is worth noting these images do
    not show every feature of the project.
  </p>
  <div class="image-container">
    <img
      class="fade-in"
      src="/images/game-swap/main-page.png"
      alt="Game Swap main page"
    />
    <img
      class="fade-in"
      src="/images/game-swap/register.png"
      alt="Game Swap register page"
    />
    <img
      class="fade-in"
      src="/images/game-swap/login.png"
      alt="Game Swap login page"
    />
    <img
      class="fade-in"
      src="/images/game-swap/view-listing.png"
      alt="Game Swap view listing page"
    />
    <img
      class="fade-in"
      src="/images/game-swap/view-seller.png"
      alt="Game Swap view seller page"
    />
    <img
      class="fade-in"
      src="/images/game-swap/buyer-main-page.png"
      alt="Game Swap main page viewed as a buyer"
    />
    <img
      class="fade-in"
      src="/images/game-swap/seller-main-page.png"
      alt="Game Swap main page viewed as a seller"
    />
  </div>
</ProjectPage>
