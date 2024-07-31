<script>
import ProjectPage from "$lib/ProjectPage.svelte"
import Footer from "$lib/Footer.svelte"

import "../../../styles/global.scss"
</script>

<ProjectPage
    title="Self-Checkout Station"
    category="school_projects"
    extraContributers={[
      "Tara Strickland",
      "Julian Fan",
      "Samyog Dahal",
      "Phuong Le",
      "Daniel Yakimenka",
      "Merick Parkinson",
      "Julie Kim",
      "Ajaypal Sallh",
      "Nathaniel Dafoe",
      "Anmol Ratol",
      "Chantel del Carmen",
      "Dana Al Bastrami",
      "Maria Munoz",
      "Ernest Shukla",
      "Hillary Nguyen",
      "Robin Bowering",
      "Anne Lumumba",
      "Jasmit Saroya",
      "Fion Lei",
      "Royce Knoepfli"
    ]}
>
    <h2 class="left-bar fade-in">overview</h2>
    <p class="left-bar fade-in">
        This was created as the final iteration of developing <i>Self Checkout Station</i> control software for the course <b>SENG 300</b>.
        It was essentially a <b>GUI</b> wrapper around a hardware simulation <b>API</b> that was provided to us.
        The software had to meet a set of requirements that were given to each group by the client (The professor - Mr. Customer).
    </p>

    <h2 class="left-bar fade-in">relevance</h2>
    <p class="left-bar fade-in">
        The work required for this project aimed to simulate a real software development environment where the client would provide requirements and the developers would implement them.
        It required a lot of communiation between team members to ensure that the software met the requirements and was delivered on time.
        Version control with <b>git</b> was also a key part of this project.
        Additionally, automated tests were written to ensure there would be no bugs when it was had to be demonstrated to the client.
    </p>

    <h2 class="left-bar fade-in">highlights</h2>
    <p class="left-bar fade-in">
        I was fortunate enough to have a driven team that was able to work together to deliver a product that met the requirements.
        Not only did it meet the requirements, but it was the only demonstration that did not have any bugs!
    </p>

    <h2 class="left-bar fade-in">architecture</h2>
    <p class="left-bar fade-in">
        The software followed the <b>MVC</b> where observers provided by the <b>API</b> would notify the <b>controller</b> which would then update the <b>model</b> which would then update the <b>view</b>.
        This design allowed work to be split up between team members and allowed for a more modular approach to development.
        However, this design led to high coupling which could have been improved by using the <b>Observer Pattern</b>.
    </p>

    <h2 class="left-bar fade-in">images</h2>
    <p class="left-bar fade-in">
        Below are some images of the <b>GUI</b> that was created for the <i>Self Checkout Station</i> control software.
    </p>
    <div class="image-container">
        <img class="fade-in" src="/images/self-checkout-station/1.png" alt="Self Checkout Station disabled" />
        <img class="fade-in" src="/images/self-checkout-station/2.png" alt="Self Checkout Station ready" />
        <img class="fade-in" src="/images/self-checkout-station/3.png" alt="Self Checkout Station session" />
        <img class="fade-in" src="/images/self-checkout-station/4.png" alt="Self Checkout Station visual catalog" />
        <img class="fade-in" src="/images/self-checkout-station/5.png" alt="Self Checkout Station with item added and text search" />
        <img class="fade-in" src="/images/self-checkout-station/6.png" alt="Self Checkout Station payment" />
    </div>
</ProjectPage>
<Footer />
