<script lang="ts">
import { afterUpdate, onMount } from "svelte"

import Footer from "$lib/Footer.svelte"

onMount(() => {
    window.location.hash = ""
})

afterUpdate(() => {
    const sections = document.querySelectorAll(".fade-in")

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            const rect = entry.target.getBoundingClientRect()

            if (entry.isIntersecting) {
              entry.target.classList.add("appear")
              observer.unobserve(entry.target)
            }
            else if (rect.top < 0) {
              entry.target.classList.add("above")
            }
        })
    },
    { threshold: 0.2 })

    sections.forEach((section) => {
        observer.observe(section)
    })
})
</script>

<main>
    <slot></slot>
</main>
<Footer />
