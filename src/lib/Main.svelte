<script lang="ts">
import { onMount } from "svelte"

onMount(() => {
    const sections = document.querySelectorAll(".fade-in")

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("appear")
              observer.unobserve(entry.target)
            }
        })
    },
    { threshold: 0.2 })

    sections.forEach(section => {
        observer.observe(section)
    })

    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: "instant"
    // })
})
</script>

<main>
    <slot></slot>
</main>
