import{s as re,n as oe}from"../chunks/scheduler.CFpRn4Gx.js";import{S as ce,i as ue,k as pe,l as he,m as fe,n as me,o as de,p as ve,e as l,s as u,c as i,q as r,f as p,r as o,g as s,d as a}from"../chunks/index.DZF8ZFNM.js";import{P as be}from"../chunks/ProjectPage.CzrV-WF5.js";import"../chunks/global.DBfXOjui.js";const ge=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,prerender:ge},Symbol.toStringTag,{value:"Module"}));function ye(F){let n,M="overview",c,h,L=`<i>SNESK</i> is a re-implementation of snake with additions required for an
    assignment in the course <b>CPSC 359</b>. It runs on a bare-metal (no
    underlying operating system) <b>Raspberry Pi 4</b> and is controlled using a
    <b>SNES controller</b> (the driver for it was written in a previous assignment).`,P,f,V="gameplay_mechanics",j,m,J=`The game consists of <b>2</b> rounds: <b>collect</b> and <b>hunt</b>. The
    collect rounds requires the player to collect every flag on the screen
    before the time runs out while new ghosts periodically spawn throughout the
    map. The hunt rounds requires the player to eliminate every ghost on the
    screen before the time runs out. Around the map, there are <b>power-ups</b> that
    are generated frequently and can be collected to help the player.`,$,d,Q="<i>Grow power-up</i> increases the length of the snake and is the colour purple.",E,v,U=`<i>Shrink power-up</i> decreases the length of the snake by and is the colour
    orange.`,N,b,W=`<i>Portal power-up</i> allows the snake to go through one side of the screen
    and come out the other side. It is the colour blue.`,K,g,X=`<i>Ghost power-up</i> allows the snake to eat exactly one ghost. It is the colour
    red.`,q,y,Y="implementation_details",z,_,Z=`Creating a game without an operating system introduced challenges such as
    lack of dynamic memory allocation and no async runtime. Additionally,
    running on Raspberri Pi 4 meant the game had to be highly optimized to run
    at a reasonable speed. Below are some of the implementation details that
    were used to overcome these challenges.`,I,x,ee=`<i>Fixed size arrays</i> were used to store the snake and other entity positions.
    Specifically, the snake was stored as an array of a lot of structs (~100) that
    represented each segment of the snake. This array acted as a circular buffer
    where the head and tail indicies rotated around the array each move. The snake
    was able to grow by simply not moving the tail index.`,A,w,te=`<i>Surgical re-rendering</i> was implemented to only update the parts of the
    screen that changed. This was straightforward since Snake operates on a grid
    and only a few cells change each frame.`,B,C,se=`<i>Custom font/sprite engine</i> was created to render text on the screen. Every
    character (and sprite) is hardcoded as an 8x8 byte array. However, this representation
    of characters could have been improved by using a single 64-bit integer to represent
    each character instead.`,G,T,ae=`<i>Event loop</i> was used to handle input from the SNES controller, update the
    game state, and render everything on the screen to make the game feel responsive.
    The game would tick a certain number of times per second and the event loop would
    run as fast as possible by subtracting the time it took to run from the time
    it was supposed to run using the Pi&#39;s internal clock.`,O,S,ne="images",R,H,le="Below is some images taken of the game.",D,k,ie='<img class="fade-in" src="/images/snesk/menu.jpg" alt="SNESK menu"/> <img class="fade-in" src="/images/snesk/collect.jpg" alt="SNESK collect round gameplay"/> <img class="fade-in" src="/images/snesk/hunt.jpg" alt="SNESK hunt round gameplay"/> <img class="fade-in" src="/images/snesk/pause.jpg" alt="SNESK pause menu"/> <img class="fade-in" src="/images/snesk/lose.jpg" alt="SNESK lose screen"/> <img class="fade-in" src="/images/snesk/win.jpg" alt="SNESK win screen"/>';return{c(){n=l("h2"),n.textContent=M,c=u(),h=l("p"),h.innerHTML=L,P=u(),f=l("h2"),f.textContent=V,j=u(),m=l("p"),m.innerHTML=J,$=u(),d=l("p"),d.innerHTML=Q,E=u(),v=l("p"),v.innerHTML=U,N=u(),b=l("p"),b.innerHTML=W,K=u(),g=l("p"),g.innerHTML=X,q=u(),y=l("h2"),y.textContent=Y,z=u(),_=l("p"),_.textContent=Z,I=u(),x=l("p"),x.innerHTML=ee,A=u(),w=l("p"),w.innerHTML=te,B=u(),C=l("p"),C.innerHTML=se,G=u(),T=l("p"),T.innerHTML=ae,O=u(),S=l("h2"),S.textContent=ne,R=u(),H=l("p"),H.textContent=le,D=u(),k=l("div"),k.innerHTML=ie,this.h()},l(e){n=i(e,"H2",{class:!0,"data-svelte-h":!0}),r(n)!=="svelte-mht1ex"&&(n.textContent=M),c=p(e),h=i(e,"P",{class:!0,"data-svelte-h":!0}),r(h)!=="svelte-hezusm"&&(h.innerHTML=L),P=p(e),f=i(e,"H2",{class:!0,"data-svelte-h":!0}),r(f)!=="svelte-18bz3j8"&&(f.textContent=V),j=p(e),m=i(e,"P",{class:!0,"data-svelte-h":!0}),r(m)!=="svelte-1q4nhh4"&&(m.innerHTML=J),$=p(e),d=i(e,"P",{class:!0,"data-svelte-h":!0}),r(d)!=="svelte-1cwfau3"&&(d.innerHTML=Q),E=p(e),v=i(e,"P",{class:!0,"data-svelte-h":!0}),r(v)!=="svelte-ff9ely"&&(v.innerHTML=U),N=p(e),b=i(e,"P",{class:!0,"data-svelte-h":!0}),r(b)!=="svelte-4i0r5h"&&(b.innerHTML=W),K=p(e),g=i(e,"P",{class:!0,"data-svelte-h":!0}),r(g)!=="svelte-1ydhmol"&&(g.innerHTML=X),q=p(e),y=i(e,"H2",{class:!0,"data-svelte-h":!0}),r(y)!=="svelte-xcn2md"&&(y.textContent=Y),z=p(e),_=i(e,"P",{class:!0,"data-svelte-h":!0}),r(_)!=="svelte-t69j2i"&&(_.textContent=Z),I=p(e),x=i(e,"P",{class:!0,"data-svelte-h":!0}),r(x)!=="svelte-ai66b8"&&(x.innerHTML=ee),A=p(e),w=i(e,"P",{class:!0,"data-svelte-h":!0}),r(w)!=="svelte-p4l2lo"&&(w.innerHTML=te),B=p(e),C=i(e,"P",{class:!0,"data-svelte-h":!0}),r(C)!=="svelte-1v2glir"&&(C.innerHTML=se),G=p(e),T=i(e,"P",{class:!0,"data-svelte-h":!0}),r(T)!=="svelte-1so15m2"&&(T.innerHTML=ae),O=p(e),S=i(e,"H2",{class:!0,"data-svelte-h":!0}),r(S)!=="svelte-1usk35e"&&(S.textContent=ne),R=p(e),H=i(e,"P",{class:!0,"data-svelte-h":!0}),r(H)!=="svelte-gkzcn2"&&(H.textContent=le),D=p(e),k=i(e,"DIV",{class:!0,"data-svelte-h":!0}),r(k)!=="svelte-9z0eoj"&&(k.innerHTML=ie),this.h()},h(){o(n,"class","left-bar fade-in"),o(h,"class","left-bar fade-in"),o(f,"class","left-bar fade-in"),o(m,"class","left-bar fade-in"),o(d,"class","left-bar fade-in"),o(v,"class","left-bar fade-in"),o(b,"class","left-bar fade-in"),o(g,"class","left-bar fade-in"),o(y,"class","left-bar fade-in"),o(_,"class","left-bar fade-in"),o(x,"class","left-bar fade-in"),o(w,"class","left-bar fade-in"),o(C,"class","left-bar fade-in"),o(T,"class","left-bar fade-in"),o(S,"class","left-bar fade-in"),o(H,"class","left-bar fade-in"),o(k,"class","image-container")},m(e,t){s(e,n,t),s(e,c,t),s(e,h,t),s(e,P,t),s(e,f,t),s(e,j,t),s(e,m,t),s(e,$,t),s(e,d,t),s(e,E,t),s(e,v,t),s(e,N,t),s(e,b,t),s(e,K,t),s(e,g,t),s(e,q,t),s(e,y,t),s(e,z,t),s(e,_,t),s(e,I,t),s(e,x,t),s(e,A,t),s(e,w,t),s(e,B,t),s(e,C,t),s(e,G,t),s(e,T,t),s(e,O,t),s(e,S,t),s(e,R,t),s(e,H,t),s(e,D,t),s(e,k,t)},p:oe,d(e){e&&(a(n),a(c),a(h),a(P),a(f),a(j),a(m),a($),a(d),a(E),a(v),a(N),a(b),a(K),a(g),a(q),a(y),a(z),a(_),a(I),a(x),a(A),a(w),a(B),a(C),a(G),a(T),a(O),a(S),a(R),a(H),a(D),a(k))}}}function _e(F){let n,M;return n=new be({props:{title:"SNESK",category:"school_projects",extraContributers:["Hillary Nguyen"],$$slots:{default:[ye]},$$scope:{ctx:F}}}),{c(){pe(n.$$.fragment)},l(c){he(n.$$.fragment,c)},m(c,h){fe(n,c,h),M=!0},p(c,[h]){const L={};h&1&&(L.$$scope={dirty:h,ctx:c}),n.$set(L)},i(c){M||(me(n.$$.fragment,c),M=!0)},o(c){de(n.$$.fragment,c),M=!1},d(c){ve(n,c)}}}class He extends ce{constructor(n){super(),ue(this,n,null,_e,re,{})}}export{He as component,Se as universal};
