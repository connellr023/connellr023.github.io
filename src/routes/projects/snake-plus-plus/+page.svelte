<script>
  import ProjectPage from "$lib/ProjectPage.svelte";

  import "../../../styles/global.scss";
</script>

<ProjectPage
  title="Snake++"
  category="learning_projects"
  repository={[
    "connellr023/snake-plus-plus",
    "https://github.com/connellr023/snake-plus-plus",
  ]}
>
  <h2 class="left-bar fade-in">overview</h2>
  <p class="left-bar fade-in">
    Snake++ is a re-implementation of the classic Snake game in C++ without the
    use of any libraries except <i>X11</i> (on Linux) and <i>Win32</i> (on Windows)
    for graphics. The game features a few different power-ups that can be collected
    by the snake to change its behavior. Additionally, it includes enemies and obstacles
    that the player must avoid.
  </p>
  <p class="left-bar fade-in">
    This project is based on a school project which can be found <b
      ><a href="/projects/snesk">here</a></b
    >. While it is based on the same concept, this project is a complete
    re-write and underlying game logic has been changed to allow for more
    features.
  </p>

  <h2 class="left-bar fade-in">gameplay</h2>
  <p class="left-bar fade-in">
    The game is controlled using the arrow keys. The snake will move in the
    direction of the last arrow key pressed. Below are the different power-ups
    that can be collected by the snake.
  </p>
  <p class="left-bar fade-in">
    <i>Food</i> increases the length of the snake and is the colour purple.
  </p>
  <p class="left-bar fade-in">
    <i>Portal power-up</i> allows the snake to go through one side of the screen
    and come out the other side. It is the colour blue.
  </p>
  <p class="left-bar fade-in">
    <i>Attack power-up</i> allows the snake to eat exactly one ghost. It is the colour
    red.
  </p>
  <p class="left-bar fade-in">
    <i>Rainbow power-up</i> is a combination of all the power-ups and appears multiple
    shades of orange. The effect has a time limit and will be de-applied after the
    time limit is reached. Time limit is shown in the bottom UI bar.
  </p>
  <p class="left-bar fade-in">
    Ghosts randomly spawn and wander around the screen. If the snake collides
    with a ghost when it does not have the attack power-up, the snake is reset
    to its starting length and score resets to 0. The game ends when the snake
    runs out of lives.
  </p>
  <p class="left-bar fade-in">
    The game also features some other collectibles such as <i>stars</i> and
    <i>hearts</i> which increase the score and lives respectively.
  </p>

  <h2 class="left-bar fade-in">technical_improvements</h2>
  <p class="left-bar fade-in">
    Some technical improvements over the original project are below.
  </p>
  <p class="left-bar fade-in">
    An <i>interval API</i> was implemented to allow for more control over timing
    during the game loop. It leveraged C++ lambda functions to allow for easy implementation
    of custom intervals.
  </p>
  <p class="left-bar fade-in">
    An <i>entity</i> class was implemented to allow for easy creation of game objects.
    It used virtual dispatch to allow all entities to be updated and rendered in
    a generic way. The entity class also allowed for easy creation of new entities
    by extending the class.
  </p>
  <p class="left-bar fade-in">
    All sprites and font characters are represented as a 64-bit integer to be
    rendered as 8x8 pixel sprites. This is an improvement over the old version
    which used a 2D array of characters to represent sprites.
  </p>

  <h2 class="left-bar fade-in">images</h2>
  <p class="left-bar fade-in">Below are some images of the game in action.</p>
  <div class="image-container">
    <img
      class="fade-in"
      src="/images/snake-plus-plus/start.PNG"
      alt="Snake++ start screen"
    />
    <img
      class="fade-in"
      src="/images/snake-plus-plus/normal.PNG"
      alt="Snake++ normal snake"
    />
    <img
      class="fade-in"
      src="/images/snake-plus-plus/attack.PNG"
      alt="Snake++ attack snake"
    />
    <img
      class="fade-in"
      src="/images/snake-plus-plus/portal.PNG"
      alt="Snake++ portal snake"
    />
    <img
      class="fade-in"
      src="/images/snake-plus-plus/rainbow.PNG"
      alt="Snake++ rainbow snake"
    />
    <img
      class="fade-in"
      src="/images/snake-plus-plus/over.PNG"
      alt="Snake++ game over screen"
    />
  </div>
</ProjectPage>
