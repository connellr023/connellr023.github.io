<script>
  import SocialLink from "./SocialLink.svelte";
  import TypeWriter from "./TypeWriter.svelte";
  import Github from "./vector/GitHub.svelte";
  import LinkedIn from "./vector/LinkedIn.svelte";
</script>

<div class="container">
  <div class="name-container">
    <h1><TypeWriter text="connell_reffo" /></h1>
    <ul>
      <li>student</li>
      <li>designer</li>
      <li>programmer</li>
    </ul>
  </div>
  <div class="contact-container">
    <ul>
      <li>
        <SocialLink
          link="https://github.com/connellr023"
          linkText="github/connellr023"
        >
          <Github />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          link="https://www.linkedin.com/in/connell-reffo/"
          linkText="in/connell-reffo"
        >
          <LinkedIn />
        </SocialLink>
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  @import "../styles/variables.scss";

  h1 {
    margin: 0;
    margin-bottom: 0.1rem;
    font-size: 1.6rem;
  }

  div.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;
    max-width: 30rem;
    margin-top: 2.3rem;
  }

  div.name-container {
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      li {
        color: $gruvbox-lime;
        font-size: 1.2rem;

        &:before {
          color: $gruvbox-green;
          content: "|>";
          margin-right: 0.5rem;
        }
      }

      @include fade-transform(
        $transform: translateX(-1.3rem),
        $children: 3,
        $anim-delay: 0.2s,
        $anim-id: 1
      );
    }
  }
</style>
