<script>
  import ProjectPage from "$lib/project/ProjectPage.svelte";

  import "../../../styles/global.scss";
</script>

<ProjectPage
  title="Transient OS"
  category="main_projects"
  repository={[
    "connellr023/transient-os",
    "https://github.com/connellr023/transient-os",
  ]}
>
  <h2 class="left-bar fade-in">overview</h2>
  <p class="left-bar fade-in">
    <i>Transient OS</i> is a time-sharing operating system designed for the Raspberry
    Pi 3. It uses preemptive round-robin scheduling with configurable time quantums
    to manage concurrency. The system includes several system calls for memory management
    and thread control.
  </p>

  <h2 class="left-bar fade-in">example</h2>
  <p class="left-bar fade-in">
    A project showcasing the capability of this project can be found <b
      ><a target="_blank" href="https://github.com/connellr023/game-of-life-tos"
        >here</a
      ></b
    >. This showcase project is a simulation of <i>Conway's Game of Life</i> on
    <b>257</b>
    OS Threads. There is one thread for each cell on a 16x16 grid plus one thread
    for a grid-swap operation.
  </p>

  <h2 class="left-bar fade-in">purpose</h2>
  <p class="left-bar fade-in">
    This operating system is intended to still be used for very low-level
    programming somewhat similar to a real-time operating system. Additionally,
    it was also created to learn more about operating systems and how they work
    at a hardware and software level.
  </p>

  <h2 class="left-bar fade-in">features</h2>
  <p class="left-bar fade-in fade-in">
    <i>Preemptive Round Robin Scheduling</i> ensures fair CPU time distribution among
    threads with configurable time quantums.
  </p>
  <p class="left-bar fade-in">
    <i>System Calls</i> provide an essential <b>API</b> for memory management and
    thread control.
  </p>
  <p class="left-bar fade-in">
    <i>Memory Management</i> consists of a <b>First Fit</b> algorithm for heap allocation
    and paging (with a page size of 4KB but no virtual memory).
  </p>
  <p class="left-bar fade-in">
    <i>Utilities</i> such as <i>Mutex</i>, <i>Mutex Lock Guard</i>, and
    <i>Atomic Gaurd</i> provide thread syncronization and atomic operations.
  </p>

  <h2 class="left-bar fade-in">threads</h2>
  <p class="left-bar fade-in">
    <i>Threads</i> are the fundamental unit of execution in this operating system.
    Each thread is allocated a single page of memory and is scheduled by the kernel.
    Threads are not tied to each other, that is, there is no concept of parent and
    child threads. All threads (except the main startup thread) are created by the
    user and are managed by the kernel.
  </p>
  <p class="left-bar fade-in">
    <i>User mode threads</i> run at <b>EL0</b> and do not have access to
    privileged instructions such as reading and writing to
    <b>special registers</b>. If a user mode thread attempts to execute a
    privileged instruction, a <b>segmentation fault</b> is raised and the thread
    is terminated. They also can only spawn other user mode threads.
  </p>
  <p class="left-bar fade-in">
    <i>Kernel mode threads</i> run at <b>EL1</b> and have access to privileged instructions
    and have free reign over the system. The first thread created, the main thread,
    is a kernel mode thread.
  </p>
  <p class="left-bar fade-in">
    <i>Thread Stack</i> is located at the top of the memory page and grows downwards.
    The stack is intended to be half the size of the memory page, but this is not
    enforced and can certainly overflow into the heap.
  </p>
  <p class="left-bar fade-in">
    <i>Thread Heap</i> is located at the bottom of the memory page and grows upwards.
    The heap is constrained to be the other half of the memory page and cannot grow
    beyond that. The heap is implemented as a first-fit allocator with a simple free
    list. The heap is intended to be used for dynamic memory allocation but is prone
    to fragmentation.
  </p>

  <h2 class="left-bar fade-in">diagrams</h2>
  <p class="left-bar fade-in">
    Below are diagrams of the overall system memory layout and the heap
    allocation layout.
  </p>
  <div class="image-container">
    <img
      class="fade-in"
      src="/images/transient-os/memory-layout.png"
      alt="Transient OS memory layout"
    />
    <img
      class="fade-in"
      src="/images/transient-os/thread-heap-memory-layout.png"
      alt="Transient OS thread heap memory layout"
    />
  </div>
</ProjectPage>
