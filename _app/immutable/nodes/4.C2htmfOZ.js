import{s as Q,n as N}from"../chunks/scheduler.CFpRn4Gx.js";import{S as W,i as J,k as K,l as X,m as Y,n as Z,o as ee,p as te,e as r,s as h,c as o,q as c,f,r as d,g as a,d as i}from"../chunks/index.DZF8ZFNM.js";import{P as ae}from"../chunks/ProjectPage.CYd-mzF4.js";import"../chunks/global.DBfXOjui.js";const ie=!0,de=Object.freeze(Object.defineProperty({__proto__:null,prerender:ie},Symbol.toStringTag,{value:"Module"}));function ne(A){let n,S="overview",s,l,k=`As an <i>Avionics Software Member</i> on the
    <i>Student Organization for Aerospace Research</i>, I am responsible for
    taking on tasks whether it be related to embedded systems with <i>STM32</i>
    microcontrollers and <i>FreeRTOS</i>, front-end web development in the
    context of our Rocket Control Unit (RCU) GUI with <i>Figma</i> and
    <i>Svelte</i>, or back-end development for the RCU server with <i>Python</i>
    and <i>Pocketbase</i>. Below I will go into more detail about the projects I
    have worked on.`,y,m,j="refactoring",I,u,G=`I came onto the team with years of experience with web development in
    javascript. Upon examining the codebase for our Rocket Control Unit (RCU)
    GUI, I noticed that improvements regarding code quality and modularity could
    be made. I seperated pieces of code that could be reused and abstracted into
    dedicated <i>hooks</i> in order to encapsulate state and logic. The major
    area I refactored was how theme transitions were handled. Instead of having
    a duplicate icon and background for each theme, I created a single icon and
    GUI diagram background that would change based on the theme using
    <i>CSS variables</i>.`,T,p,O=`However, with the introduction of binding CSS variables to specific parts of
    the various SVG elements in the background, it made it harder to make
    changes to the background. To solve this, I wrote an SVG pre-processor in <i>Rust</i> specific to our use case that would take in a base SVG file, a base CSS file,
    and a config file and then output a Svelte component that could replace the unmodified
    Svelte component. This automated the tedious find and replace process and made
    it easier to make changes to the background.`,H,v,q="integrating_qspi",U,b,z=`Currently, my main task is to write an abstraction layer for <i>Quad-SPI</i>
    in anticipation of new microcontrollers that will be used in the future.
    Additionally, the goal is to allow easier integration of new QSPI
    peripherals and to make the codebase more modular. However, since the team
    is currently waiting on the new microcontrollers to arrive, progress has
    been limited as I am solely reliant on the datasheets and the
    <i>STM32 HAL</i> documentation.`,M,g,F="nafe11388_driver",P,C,V=`My secondary task is to write a driver for an <i>Analog Front-End (AFE)</i>
    specifically, the <i>NAFE11388</i>. The primary purpose of it will be to use
    it as an <i>Analog</i> to <i>Digital</i> converter. While we do not have the
    hardware for this component currently either, I feel more confident in
    writing the driver for it as I have some experience with <i>SPI</i> which this
    device uses.`,R,w,E="gui_images",$,x,B=`Below are some images of the Rocket Control Unit (RCU) GUI. The data being
    received from the server is simulated and does not reflect real data.`,L,_,D=`<img class="fade-in" src="/images/soar/dark-theme.png" alt="RCU GUI dark theme"/> <img class="fade-in" src="/images/soar/light-theme.png" alt="RCU GUI light theme"/> <img class="fade-in" src="/images/soar/loadcell-cal.png" alt="RCU GUI loadcell calibration pause"/> <p class="left-bar fade-in">The above image is a screenshot of the loadcell calibration screen. The
      user can pause the calibration process at any time and resume it when they
      are ready. This is a user experience feature that I implemented.</p>`;return{c(){n=r("h2"),n.textContent=S,s=h(),l=r("p"),l.innerHTML=k,y=h(),m=r("h2"),m.textContent=j,I=h(),u=r("p"),u.innerHTML=G,T=h(),p=r("p"),p.innerHTML=O,H=h(),v=r("h2"),v.textContent=q,U=h(),b=r("p"),b.innerHTML=z,M=h(),g=r("h2"),g.textContent=F,P=h(),C=r("p"),C.innerHTML=V,R=h(),w=r("h2"),w.textContent=E,$=h(),x=r("p"),x.textContent=B,L=h(),_=r("div"),_.innerHTML=D,this.h()},l(e){n=o(e,"H2",{class:!0,"data-svelte-h":!0}),c(n)!=="svelte-mht1ex"&&(n.textContent=S),s=f(e),l=o(e,"P",{class:!0,"data-svelte-h":!0}),c(l)!=="svelte-1ut5qpf"&&(l.innerHTML=k),y=f(e),m=o(e,"H2",{class:!0,"data-svelte-h":!0}),c(m)!=="svelte-1erms0y"&&(m.textContent=j),I=f(e),u=o(e,"P",{class:!0,"data-svelte-h":!0}),c(u)!=="svelte-1ses8lz"&&(u.innerHTML=G),T=f(e),p=o(e,"P",{class:!0,"data-svelte-h":!0}),c(p)!=="svelte-1dhkwx1"&&(p.innerHTML=O),H=f(e),v=o(e,"H2",{class:!0,"data-svelte-h":!0}),c(v)!=="svelte-t3x44i"&&(v.textContent=q),U=f(e),b=o(e,"P",{class:!0,"data-svelte-h":!0}),c(b)!=="svelte-9pjf3c"&&(b.innerHTML=z),M=f(e),g=o(e,"H2",{class:!0,"data-svelte-h":!0}),c(g)!=="svelte-gjdmn6"&&(g.textContent=F),P=f(e),C=o(e,"P",{class:!0,"data-svelte-h":!0}),c(C)!=="svelte-mtnsbf"&&(C.innerHTML=V),R=f(e),w=o(e,"H2",{class:!0,"data-svelte-h":!0}),c(w)!=="svelte-s8katq"&&(w.textContent=E),$=f(e),x=o(e,"P",{class:!0,"data-svelte-h":!0}),c(x)!=="svelte-16z4ttp"&&(x.textContent=B),L=f(e),_=o(e,"DIV",{class:!0,"data-svelte-h":!0}),c(_)!=="svelte-1lvzh02"&&(_.innerHTML=D),this.h()},h(){d(n,"class","left-bar fade-in"),d(l,"class","left-bar fade-in"),d(m,"class","left-bar fade-in"),d(u,"class","left-bar fade-in"),d(p,"class","left-bar fade-in"),d(v,"class","left-bar fade-in"),d(b,"class","left-bar fade-in"),d(g,"class","left-bar fade-in"),d(C,"class","left-bar fade-in"),d(w,"class","left-bar fade-in"),d(x,"class","left-bar fade-in"),d(_,"class","image-container")},m(e,t){a(e,n,t),a(e,s,t),a(e,l,t),a(e,y,t),a(e,m,t),a(e,I,t),a(e,u,t),a(e,T,t),a(e,p,t),a(e,H,t),a(e,v,t),a(e,U,t),a(e,b,t),a(e,M,t),a(e,g,t),a(e,P,t),a(e,C,t),a(e,R,t),a(e,w,t),a(e,$,t),a(e,x,t),a(e,L,t),a(e,_,t)},p:N,d(e){e&&(i(n),i(s),i(l),i(y),i(m),i(I),i(u),i(T),i(p),i(H),i(v),i(U),i(b),i(M),i(g),i(P),i(C),i(R),i(w),i($),i(x),i(L),i(_))}}}function se(A){let n,S;return n=new ae({props:{title:"SOAR",category:"experience",hideContributers:!0,repository:["UCSOAR","https://github.com/UCSOAR"],$$slots:{default:[ne]},$$scope:{ctx:A}}}),{c(){K(n.$$.fragment)},l(s){X(n.$$.fragment,s)},m(s,l){Y(n,s,l),S=!0},p(s,[l]){const k={};l&1&&(k.$$scope={dirty:l,ctx:s}),n.$set(k)},i(s){S||(Z(n.$$.fragment,s),S=!0)},o(s){ee(n.$$.fragment,s),S=!1},d(s){te(n,s)}}}class he extends W{constructor(n){super(),J(this,n,null,se,Q,{})}}export{he as component,de as universal};
