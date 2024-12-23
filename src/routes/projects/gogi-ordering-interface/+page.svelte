<script>
  import ProjectPage from "$lib/project/ProjectPage.svelte";

  import "../../../styles/global.scss";
</script>

<ProjectPage
  title="Gogi Ordering Interface"
  category="school_projects"
  repository={[
    "TurtwigPlayz/Gogi-Ordering-Interface",
    "https://github.com/TurtwigPlayz/Gogi-Ordering-Interface",
  ]}
  deployment={[
    "GitHub Pages",
    "https://connellr023.github.io/gogi-ordering-interface/",
  ]}
  extraContributers={["Creek Thompson", "Hamza Khan", "Thevin Mahawatte"]}
>
  <h2 class="left-bar fade-in">overview</h2>
  <p class="left-bar fade-in">
    This project was developed for the course <b>CPSC 481</b>, Human Computer
    Interaction. The goal of this project was to design and develop a food
    ordering interface for a restaurant. The restaurant we chose was Gogi, a
    Korean BBQ restaurant. The interface was designed to be used on a tablet
    device attached to the table.
  </p>

  <h2 class="left-bar fade-in">images</h2>
  <p class="left-bar fade-in">
    Below are some images of the interface. Also, see the deployment to see the
    entire interface and its features.
  </p>
  <div class="image-container">
    <img
      class="left-bar fade-in"
      src="/images/gogi-ordering-interface/empty-session-order.png"
      alt="Gogi Ordering Interface empty session order"
    />
    <img
      class="fade-in"
      src="/images/gogi-ordering-interface/session-order.png"
      alt="Gogi Ordering Interface filled session order"
    />
    <img
      class="fade-in"
      src="/images/gogi-ordering-interface/item-config-menu.png"
      alt="Gogi Ordering Interface item configuration menu"
    />
    <img
      class="fade-in"
      src="/images/gogi-ordering-interface/order-confirm.png"
      alt="Gogi Ordering Interface order conifrmation"
    />
    <img
      class="fade-in"
      src="/images/gogi-ordering-interface/light.png"
      alt="Gogi Ordering Interface light theme"
    />
  </div>
</ProjectPage>
