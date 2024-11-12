<script>
  import ProjectPage from "$lib/project/ProjectPage.svelte";

  import "../../../styles/global.scss";
</script>

<ProjectPage
  title="Atla"
  category="hackathons"
  extraContributers={["Tara Strickland"]}
  repository={["connellr023/Atla", "https://github.com/connellr023/Atla"]}
>
  <h2 class="left-bar fade-in">overview</h2>
  <p class="left-bar fade-in">
    Created for <b>Calgary Hacks 2024</b>, <i>Atla</i> serves as a dynamic hub for
    coordinators to effortlessly share events in preset categories. Users easily
    discover nearby events through an intuitive filtering system. Coordinators can
    have events posted within minutes, fostering community engagement.
  </p>

  <h2 class="left-bar fade-in">challenges</h2>
  <p class="left-bar fade-in">
    Integrating a map library called <b>react-leaflet</b> with server-side
    rendering in <b>Next.js</b> posed unexpected challenges. Exploring
    <b>Redis</b>
    as an alternative database to something like <b>PostgreSQL</b> brought a unique
    learning curve, requiring mastery of unfamiliar CLI syntax.
  </p>

  <h2 class="left-bar fade-in">acheivements</h2>
  <p class="left-bar fade-in">
    We take pride in seamlessly fetching data from <b
      >Calgary's Open Data Portal</b
    >
    and <b>Redis</b> database, dynamically loading it onto the map and webpage. Overcoming
    hurdles, including successfully implementing the interactive map, stands out
    as a significant achievement.
  </p>

  <h2 class="left-bar fade-in">images</h2>
  <p class="left-bar fade-in">Below are some images of the Atla project.</p>
  <div class="image-container">
    <img class="fade-in" src="/images/atla/1.png" alt="Atla welcome view" />
    <img class="fade-in" src="/images/atla/2.png" alt="Atla blank map view" />
    <img class="fade-in" src="/images/atla/3.png" alt="Atla event view" />
    <img
      class="fade-in"
      src="/images/atla/4.png"
      alt="Atla event creation view"
    />
    <img
      class="fade-in"
      src="/images/atla/5.png"
      alt="Atla event viewing event view"
    />
  </div>
</ProjectPage>
