<script>
import ProjectPage from "$lib/ProjectPage.svelte"
import Footer from "$lib/Footer.svelte"

import "../../../styles/global.scss"
</script>

<ProjectPage title="SNESK" extraContributers={["Hillary Nguyen"]}>
    <h2 class="left-bar">overview</h2>
    <p class="left-bar">
        <i>SNESK</i> is a re-implementation of snake with additions required for an assignment in the course <b>CPSC 359</b>.
        It runs on a bare-metal (no underlying operating system) <b>Raspberry Pi 4</b> and is controlled using a <b>SNES controller</b> (the driver for it
        was written in a previous assignment).
    </p>

    <h2 class="left-bar">gameplay_mechanics</h2>
    <p class="left-bar">
        The game consists of <b>2</b> rounds: <b>collect</b> and <b>hunt</b>.
        The collect rounds requires the player to collect every flag on the screen before the time runs out while new
        ghosts periodically spawn throughout the map.
        The hunt rounds requires the player to eliminate every ghost on the screen before the time runs out.
        Around the map, there are <b>power-ups</b> that are generated frequently and can be collected to help the player.
    </p>
    <p class="left-bar">
        <i>Grow power-up</i> increases the length of the snake by and is the colour purple.
    </p>
    <p class="left-bar">
        <i>Shrink power-up</i> decreases the length of the snake by and is the colour orange.
    </p>
    <p class="left-bar">
        <i>Portal power-up</i> allows the snake to go through one side of the screen and come out the other side. It is the colour blue.
    </p>
    <p class="left-bar">
        <i>Ghost power-up</i> allows the snake to eat exactly one ghost. It is the colour red.
    </p>

    <h2 class="left-bar">implementation_details</h2>
    <p class="left-bar">
        Creating a game without an operating system introduced challenges such as lack of dynamic memory allocation and no async runtime.
        Additionally, running on Raspberri Pi 4 meant the game had to be highly optimized to run at a reasonable speed.
        Below are some of the implementation details that were used to overcome these challenges.
    </p>
    <p class="left-bar">
        <i>Fixed size arrays</i> were used to store the snake and other entity positions.
        Specifically, the snake was stored as an array of a lot of structs (~100) that represented each segment of the snake.
        This array acted as a circular buffer where the head and tail indicies rotated around the array each move.
        The snake was able to grow by simply not moving the tail index.
    </p>
    <p class="left-bar">
        <i>Surgical re-rendering</i> was used to only update the parts of the screen that changed.
    </p>
    <p class="left-bar">
        <i>Custom font-engine</i> was created to render text on the screen. Every character is hardcoded as an 8x8 byte array.
        However, this representation of characters could have been improved by using a 64-bit integer to represent each character instead.
    </p>
    <p class="left-bar">
        <i>Event loop</i> was used to handle input from the SNES controller, update the game state, and render the game to make the game feel responsive.
        The game would tick a certain number of times per second and the event loop would run as fast as possible by subtracting the time it took to run from the time it was supposed to run using the internal clock.
    </p>

    <h2 class="left-bar">images</h2>
    <p class="left-bar">Below is some images taken of the game.</p>
    <div class="image-container">
        <img src="/images/snesk/menu.jpg" alt="SNESK menu" />
        <img src="/images/snesk/collect.jpg" alt="SNESK collect round gameplay" />
        <img src="/images/snesk/hunt.jpg" alt="SNESK hunt round gameplay" />
        <img src="/images/snesk/pause.jpg" alt="SNESK pause menu" />
        <img src="/images/snesk/lose.jpg" alt="SNESK lose screen" />
        <img src="/images/snesk/win.jpg" alt="SNESK win screen" />
    </div>
</ProjectPage>
<Footer />
