<script>
import ProjectPage from "$lib/ProjectPage.svelte"

import "../../../styles/global.scss"
</script>

<ProjectPage
    title="gratis"
    category="learning_projects"
    repository={["connellr023/gratis", "https://github.com/connellr023/gratis"]}
>
    <h2 class="left-bar fade-in">overview</h2>
    <p class="left-bar fade-in">
        This project is an object-oriented <b>MVC</b> PHP framework that can be used to build RESTful APIs and web applications.
        It is designed to be very lightweight and easy to use.
        The main reason I created it was because I wanted to use PHP to create a web app but I did not want to use a bloated framework like Laravel.
        Secondly, I wanted to refresh my knowledge of PHP and learn how to create a framework.
        However, after creating it, I never ended up using it because I don't have the love for PHP that I used to when it was the only web language I knew.
    </p>

    <h2 class="left-bar fade-in">features</h2>
    <p class="left-bar fade-in">
        Detailed documentation is available on the <b>GitHub</b> repository.
        I will list some of the features here:
    </p>
    <p class="left-bar fade-in">
        <i>Middlewares</i> are classes that can be used to modify the request and response objects before the controller is called.
    </p>
    <p class="left-bar fade-in">
        <i>Controllers</i> are classes that are used to handle HTTP requests and echo a response.
    </p>
    <p class="left-bar fade-in">
        <i>Models</i> are classes that are used to interact with the database.
        They can hook into a global database object that is essentially a PDO wrapper.
        Models were more loosely implemented than controllers and middlewares as they were not required to be used.
    </p>
    <p class="left-bar fade-in">
        <i>View</i> in this framework is a single directory containing static files to be served as a single page application generated by a frontend framework.
        This part is also optional.
    </p>

    <h2 class="left-bar fade-in">routing</h2>
    <p class="left-bar fade-in">
        Routing is done by a <i>Router</i> class that could match URI Regex patterns and request methods to controllers.
        Middlewares and controllers are registered to the router and the router calls the middleware before the controller.
        An interesting optimization I made was to seperate static routes from dynamic routes.
        That is, routes registered with a static URI could be mapped in <b>O(1)</b> time while dynamic routes would be mapped in <b>O(n)</b> time.
    </p>

    <h2 class="left-bar fade-in">testing</h2>
    <p class="left-bar fade-in">
        The framework includes comprehensive unit and integration tests including all the features of the framework.
        The tests were written using <b>PHPUnit</b> and are run in a <b>GitHub Actions</b> workflow.
    </p>

    <h2 class="left-bar fade-in">final_note</h2>
    <p class="left-bar fade-in">
        I honestly think PHP is an underrated language and should be learned before diving into Node.js.
        It gave me such a foundational understanding of HTTP and web development that is abstracted away in Node.js with its vast ecosystem of libraries.
    </p>
    <p class="left-bar fade-in">
        I would recommend this framework to anyone who is looking to learn how to create a web framework or wants to create a simple web app in PHP.
        I cannot vet how production ready it is because I never used it in production... but it should be fine.
    </p>
</ProjectPage>
