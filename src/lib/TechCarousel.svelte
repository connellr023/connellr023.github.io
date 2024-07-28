<script>
import Typescript from "./vector/Typescript.svelte"
import Rust from "./vector/Rust.svelte"
import Vue from "./vector/Vue.svelte"
import React from "./vector/React.svelte"
import C from "./vector/C.svelte"
import Java from "./vector/Java.svelte"
import Python from "./vector/Python.svelte"
import PHP from "./vector/PHP.svelte"
import Postgres from "./vector/Postgres.svelte"
import Docker from "./vector/Docker.svelte"
</script>

<ul>
    <li>
        <div>
            <Typescript />
            <p>Typescript</p>
        </div>
    </li>
    <li>
        <div>
            <Rust />
            <p>Rust</p>
        </div>
    </li>
    <li>
        <div>
            <Vue />
            <p>{"Vue.js"}</p>
        </div>
    </li>
    <li>
        <div>
            <React />
            <p>React</p>
        </div>
    </li>
    <li>
        <div>
            <C />
            <p>C</p>
        </div>
    </li>
    <li>
        <div>
            <Java />
            <p>Java</p>
        </div>
    </li>
    <li>
        <div>
            <Python />
            <p>Python</p>
        </div>
    </li>
    <li>
        <div>
            <PHP />
            <p>PHP</p>
        </div>
    </li>
    <li>
        <div>
            <Postgres />
            <p>PostgreSQL</p>
        </div>
    </li>
    <li>
        <div>
            <Docker />
            <p>Docker</p>
        </div>
    </li>
</ul>

<style lang="scss">
@import "../styles/variables.scss";

ul {
    @include fade-transform(
        $transform: translateY(-1.3rem),
        $children: 10,
        $anim-delay: 0.4s,
        $delay-step: 0.07s,
        $anim-id: 4
    );

    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 0.2rem;

    li > div {
        opacity: 0.7;
        transition: all 0.1s;
        transform: scale(0.87);
        position: relative;

        p {
            color: $gruvbox-lime;
            opacity: 0;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translateX(-50%);
            transition: opacity 0.1s ease;

            &:after,
            &:before {
                content: "\"";
            }
        }

        &:hover {
            opacity: 1;
            transform: scale(1);

            p {
                opacity: 1;
            }
        }
    }
}
</style>
