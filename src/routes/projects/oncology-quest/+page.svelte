<script>
import ProjectPage from "$lib/ProjectPage.svelte"

import "../../../styles/global.scss"
</script>

<ProjectPage title="Oncology Quest" category="main_projects" deployment={["oncologyquest.net", "https://www.oncologyquest.net/"]}>
    <h2 class="left-bar fade-in fade-in">overview</h2>
    <p class="left-bar fade-in fade-in">
        <i>Oncology Quest</i> is a web app designed to support Medical Oncology trainees by tracking their progress throughout
        various rotations. It also provides rotation directors with a secure and accessible way to monitor trainee
        progression and update the rotation structure as needed.
    </p>
    <p class="left-bar fade-in fade-in">
        It is currently in use by <b>6+ trainees</b> and <b>2 rotation directors</b> at the <b>Tom Baker Cancer Centre</b>.
    </p>

    <h2 class="left-bar fade-in fade-in">key_features</h2>
    <p class="left-bar fade-in fade-in">
        <i>Trainees</i> are able to access any existing rotations, mark tasks as complete or in progress,
        leave comments on tasks, and view their progress in a visual format.
        Additionally, they can also export progress reports in PDF format and delete their account if needed.
    </p>
    <p class="left-bar fade-in">
        <i>Admins</i> can create and delete rotations, add and remove tasks from rotations, and manage trainee accounts.
        Management for trainee accounts includes the ability to view their progress, export their progress, generate password reset tokens, and delete their account.
    </p>

    <h2 class="left-bar fade-in">technical_highlights</h2>
    <p class="left-bar fade-in">
        <i>Performance optimizations</i> include caching and memoization of frequently accessed data to reduce server load and improve load times.
    </p>
    <p class="left-bar fade-in">
        <i>Security features</i> include password hashing with <b>BCRYPT</b> and salting with a random 64-bit integer,
        rate limiting on sensitive routes,
        user authentication with <b>JWT</b>,
        input sanitization with <b>REGEX</b>,
        requests secured with <b>HTTPS</b>,
        and appropriate <b>CORS</b> policies are in place.
    </p>

    <h2 class="left-bar fade-in">testing_integrity</h2>
    <p class="left-bar fade-in">
        <i>Automated testing</i> is done with a seperate client that sends requests to the <b>API</b> and checks the responses.
        The tests are run within a <b>Github Actions</b> workflow.
    </p>
    <p class="left-bar fade-in">
        <i>Container orchestration</i> is used to execute these tests via <b>Docker Compose</b>. The containers used are:
        <b>API</b>, <b>Database (PostgreSQL)</b>, and <b>Test Client</b>.
    </p>
    <p class="left-bar fade-in">
        <i>Manual testing</i> is done by me to ensure that the app is functioning and appearing as expected.
    </p>

    <h2 class="left-bar fade-in">deployment</h2>
    <p class="left-bar fade-in">
        The web app is deployed as a single container on <b>AWS ECS</b> with a <b>PostgreSQL</b> database.
        A <i>monolithic architecture</i> was chosen to simplify deployment and reduce costs.
    </p>

    <h2 class="left-bar fade-in">images</h2>
    <p class="left-bar fade-in">Below are some screenshots of the web app.</p>
    <div class="image-container">
        <img class="fade-in" src="/images/oncology-quest/1.png" alt="Login Page" />
        <img class="fade-in" src="/images/oncology-quest/2.png" alt="Trainee Dashboard 1" />
        <img class="fade-in" src="/images/oncology-quest/3.png" alt="Rotation Director Dashboard" />
        <img class="fade-in" src="/images/oncology-quest/4.png" alt="Trainee Dashboard 2" />
        <img class="fade-in" src="/images/oncology-quest/5.png" alt="Rotation Director Trainee Search" />
        <img class="fade-in" src="/images/oncology-quest/6.png" alt="Rotation Director Trainee Progress" />
    </div>
</ProjectPage>
