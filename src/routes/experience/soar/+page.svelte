<script>
  import ProjectPage from "$lib/project/ProjectPage.svelte";

  import "../../../styles/global.scss";
</script>

<ProjectPage
  title="SOAR"
  category="experience"
  hideContributers={true}
  repository={[
    "UCSOAR",
    "https://github.com/UCSOAR",
  ]}
>
  <h2 class="left-bar fade-in">overview</h2>
  <p class="left-bar fade-in">
    As an <i>Avionics Software Member</i> on the <i>Student Organization for Aerospace Research</i>, I am responsible for
    taking on tasks whether it be related to embedded systems with <i>STM32</i> microcontrollers and <i>FreeRTOS</i>,
    front-end web development in the context of our Rocket Control Unit (RCU) GUI with <i>Figma</i> and <i>Svelte</i>,
    or back-end development for the RCU server with <i>Python</i> and <i>Pocketbase</i>.
    Below I will go into more detail about the projects I have worked on.
  </p>

  <h2 class="left-bar fade-in">refactoring</h2>
  <p class="left-bar fade-in">
    I came onto the team with years of experience with web development in javascript.
    Upon examining the codebase for our Rocket Control Unit (RCU) GUI, I noticed that improvements regarding code quality and modularity could be made.
    I seperated pieces of code that could be reused and abstracted into dedicated <i>hooks</i> in order to encapsulate state and logic.
    The major area I refactored was how theme transitions were handled.
    Instead of having a duplicate icon and background for each theme, I created a single icon and GUI diagram background that would change based on the theme using <i>CSS variables</i>.
  </p>
  <p class="left-bar fade-in">
    However, with the introduction of binding CSS variables to specific parts of the various SVG elements in the background, it made it harder to make changes to the background.
    To solve this, I wrote an SVG pre-processor in <i>Rust</i> specific to our use case that would take in a base SVG file, a base CSS file, and a config file and then output a Svelte component that could replace the unmodified Svelte component.
    This automated the tedious find and replace process and made it easier to make changes to the background.
  </p>

  <h2 class="left-bar fade-in">integrating_qspi</h2>
  <p class="left-bar fade-in">
    Currently, my main task is to write an abstraction layer for <i>Quad-SPI</i> in anticipation of new microcontrollers that will be used in the future.
    Additionally, the goal is to allow easier integration of new QSPI peripherals and to make the codebase more modular.
    However, since the team is currently waiting on the new microcontrollers to arrive, progress has been limited as I am solely reliant on the datasheets and the <i>STM32 HAL</i> documentation.
  </p>

  <h2 class="left-bar fade-in">nafe11388_driver</h2>
  <p class="left-bar fade-in">
    My secondary task is to write a driver for an <i>Analog Front-End (AFE)</i> specifically, the <i>NAFE11388</i>.
    The primary purpose of it will be to use it as an <i>Analog</i> to <i>Digital</i> converter.
    While we do not have the hardware for this component currently either, I feel more confident in writing the driver
    for it as I have some experience with <i>SPI</i> which this device uses.
  </p>

  <h2 class="left-bar fade-in">gui_images</h2>
  <p class="left-bar fade-in">
    Below are some images of the Rocket Control Unit (RCU) GUI. The data being received from the server is simulated and does not reflect real data.
  </p>
  <div class="image-container">
    <img class="fade-in" src="/images/soar/dark-theme.png" alt="RCU GUI dark theme" />
    <img class="fade-in" src="/images/soar/light-theme.png" alt="RCU GUI light theme" />
    <img class="fade-in" src="/images/soar/loadcell-cal.png" alt="RCU GUI loadcell calibration pause" />
    <p class="left-bar fade-in">
      The above image is a screenshot of the loadcell calibration screen.
      The user can pause the calibration process at any time and resume it when they are ready.
      This is a user experience feature that I implemented.
    </p>
  </div>
</ProjectPage>
