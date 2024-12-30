import{s as Y,n as Z}from"../chunks/scheduler.CFpRn4Gx.js";import{S as ee,i as te,k as ae,l as ne,m as se,n as le,o as ie,p as re,e as i,s as m,c as r,q as o,f as p,r as c,g as a,d as n}from"../chunks/index.DZF8ZFNM.js";import{P as oe}from"../chunks/ProjectPage.CzrV-WF5.js";import"../chunks/global.DBfXOjui.js";const ce=!0,ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce},Symbol.toStringTag,{value:"Module"}));function he(O){let s,H="overview",l,h,M=`This project is a variation of a previous project, Chatter, re-implemented
    in the Gleam programming language. This version is essentially just the text
    chat aspect of Omegle (which no longer exists). It allows users to speed
    chat with random strangers in real-time.`,L,f,V="why",$,u,A="I chose to re-implement this project in Gleam for the following reasions:",j,d,D=`<i>Learning functional programming</i> was something I wanted to do for a while,
    and Gleam seemed like a good language to start with.`,k,v,F=`<i>Type safety</i> is very important to me when programing, and Gleam is a statically
    typed language unlike Erlang and Elixir.`,P,g,N=`<i>Familiar syntax</i> was also a factor in choosing Gleam. It has a syntax similar
    to Rust, which I have really enjoyed using.`,I,b,W=`<i>Concurrency</i> is a big part of the Erlang ecosystem, and I wanted to see
    how it was implemented in Gleam.`,G,x,B=`What is interesting about this approach, is that the webserver can scale to
    handle many users at once because of the way the Erlang VM handles
    concurrency. This is in contrast to single-threaded servers like those in
    Node.js which will hit a limit on the number of users they can handle at
    some point.`,q,_,J="challenges",R,C,K=`The concept of socket programming was not new to me at this point but I
    typically used libraries like Socket.io to handle the heavy lifting. Thus,
    in this version, I had to implement the socket server from scratch with the
    help of a small library called <b>mist</b>.`,S,w,Q=`This was difficult at first because Gleam is a new language and the
    documentation is not as extensive as other languages. Additionally, at the
    time of writing this, <b>mist</b> had almost no documentation on how to use sockets
    for anything more than a basic echo server. I ended up reading the source code
    of the library to figure out how to use it.`,E,y,U="images",z,T,X='<img class="fade-in" src="/images/chatter-reborn/1.png" alt="Chatter Reborn start view"/> <img class="fade-in" src="/images/chatter-reborn/2.png" alt="Chatter Reborn queue view"/> <img class="fade-in" src="/images/chatter-reborn/3.png" alt="Chatter Reborn chat view"/>';return{c(){s=i("h2"),s.textContent=H,l=m(),h=i("p"),h.textContent=M,L=m(),f=i("h2"),f.textContent=V,$=m(),u=i("p"),u.textContent=A,j=m(),d=i("p"),d.innerHTML=D,k=m(),v=i("p"),v.innerHTML=F,P=m(),g=i("p"),g.innerHTML=N,I=m(),b=i("p"),b.innerHTML=W,G=m(),x=i("p"),x.textContent=B,q=m(),_=i("h2"),_.textContent=J,R=m(),C=i("p"),C.innerHTML=K,S=m(),w=i("p"),w.innerHTML=Q,E=m(),y=i("h2"),y.textContent=U,z=m(),T=i("div"),T.innerHTML=X,this.h()},l(e){s=r(e,"H2",{class:!0,"data-svelte-h":!0}),o(s)!=="svelte-mht1ex"&&(s.textContent=H),l=p(e),h=r(e,"P",{class:!0,"data-svelte-h":!0}),o(h)!=="svelte-1xz1pk4"&&(h.textContent=M),L=p(e),f=r(e,"H2",{class:!0,"data-svelte-h":!0}),o(f)!=="svelte-rp5lye"&&(f.textContent=V),$=p(e),u=r(e,"P",{class:!0,"data-svelte-h":!0}),o(u)!=="svelte-1lqurk8"&&(u.textContent=A),j=p(e),d=r(e,"P",{class:!0,"data-svelte-h":!0}),o(d)!=="svelte-11o142x"&&(d.innerHTML=D),k=p(e),v=r(e,"P",{class:!0,"data-svelte-h":!0}),o(v)!=="svelte-tvaxa3"&&(v.innerHTML=F),P=p(e),g=r(e,"P",{class:!0,"data-svelte-h":!0}),o(g)!=="svelte-1dv4gp6"&&(g.innerHTML=N),I=p(e),b=r(e,"P",{class:!0,"data-svelte-h":!0}),o(b)!=="svelte-1aofwij"&&(b.innerHTML=W),G=p(e),x=r(e,"P",{class:!0,"data-svelte-h":!0}),o(x)!=="svelte-1dq0fpr"&&(x.textContent=B),q=p(e),_=r(e,"H2",{class:!0,"data-svelte-h":!0}),o(_)!=="svelte-lgnmbi"&&(_.textContent=J),R=p(e),C=r(e,"P",{class:!0,"data-svelte-h":!0}),o(C)!=="svelte-1hvdcbg"&&(C.innerHTML=K),S=p(e),w=r(e,"P",{class:!0,"data-svelte-h":!0}),o(w)!=="svelte-7zh42j"&&(w.innerHTML=Q),E=p(e),y=r(e,"H2",{class:!0,"data-svelte-h":!0}),o(y)!=="svelte-1usk35e"&&(y.textContent=U),z=p(e),T=r(e,"DIV",{class:!0,"data-svelte-h":!0}),o(T)!=="svelte-13cepxp"&&(T.innerHTML=X),this.h()},h(){c(s,"class","left-bar fade-in"),c(h,"class","left-bar fade-in"),c(f,"class","left-bar fade-in"),c(u,"class","left-bar fade-in"),c(d,"class","left-bar fade-in"),c(v,"class","left-bar fade-in"),c(g,"class","left-bar fade-in"),c(b,"class","left-bar fade-in"),c(x,"class","left-bar fade-in"),c(_,"class","left-bar fade-in"),c(C,"class","left-bar fade-in"),c(w,"class","left-bar fade-in"),c(y,"class","left-bar fade-in"),c(T,"class","image-container")},m(e,t){a(e,s,t),a(e,l,t),a(e,h,t),a(e,L,t),a(e,f,t),a(e,$,t),a(e,u,t),a(e,j,t),a(e,d,t),a(e,k,t),a(e,v,t),a(e,P,t),a(e,g,t),a(e,I,t),a(e,b,t),a(e,G,t),a(e,x,t),a(e,q,t),a(e,_,t),a(e,R,t),a(e,C,t),a(e,S,t),a(e,w,t),a(e,E,t),a(e,y,t),a(e,z,t),a(e,T,t)},p:Z,d(e){e&&(n(s),n(l),n(h),n(L),n(f),n($),n(u),n(j),n(d),n(k),n(v),n(P),n(g),n(I),n(b),n(G),n(x),n(q),n(_),n(R),n(C),n(S),n(w),n(E),n(y),n(z),n(T))}}}function me(O){let s,H;return s=new oe({props:{title:"Chatter Reborn",category:"learning_projects",deployment:["chatter-5dkr.onrender.com","https://chatter-5dkr.onrender.com"],repository:["connellr023/chatter-reborn","https://github.com/connellr023/chatter-reborn"],$$slots:{default:[he]},$$scope:{ctx:O}}}),{c(){ae(s.$$.fragment)},l(l){ne(s.$$.fragment,l)},m(l,h){se(s,l,h),H=!0},p(l,[h]){const M={};h&1&&(M.$$scope={dirty:h,ctx:l}),s.$set(M)},i(l){H||(le(s.$$.fragment,l),H=!0)},o(l){ie(s.$$.fragment,l),H=!1},d(l){re(s,l)}}}class ge extends ee{constructor(s){super(),te(this,s,null,me,Y,{})}}export{ge as component,ve as universal};