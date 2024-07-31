import{s as te,n as ae}from"../chunks/scheduler.CFpRn4Gx.js";import{S as se,i as ne,k as le,l as ie,m as re,n as oe,o as ue,p as de,e as i,s as d,c as r,q as o,f,r as u,g as a,d as s}from"../chunks/index.DZF8ZFNM.js";import{P as fe}from"../chunks/ProjectPage.OpqICs2g.js";import"../chunks/global.DQDQrwDU.js";const ce=!0,_e=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce},Symbol.toStringTag,{value:"Module"}));function pe(G){let n,g="overview",l,c,k=`This project is an object-oriented <b>MVC</b> PHP framework that can be used to build RESTful APIs and web applications.
        It is designed to be very lightweight and easy to use.
        The main reason I created it was because I wanted to use PHP to create a web app but I did not want to use a bloated framework like Laravel.
        Secondly, I wanted to refresh my knowledge of PHP and learn how to create a framework.
        However, after creating it, I never ended up using it because I don&#39;t have the love for PHP that I used to when it was the only web language I knew.`,M,p,N="features",I,b,V=`Detailed documentation is available on the <b>GitHub</b> repository.
        I will list some of the features here:`,L,m,E="<i>Middlewares</i> are classes that can be used to modify the request and response objects before the controller is called.",$,h,B="<i>Controllers</i> are classes that are used to handle HTTP requests and echo a response.",j,w,F=`<i>Models</i> are classes that are used to interact with the database.
        They can hook into a global database object that is essentially a PDO wrapper.
        Models were more loosely implemented than controllers and middlewares as they were not required to be used.`,q,v,J=`<i>View</i> in this framework is a single directory containing static files to be served as a single page application generated by a frontend framework.
        This part is also optional.`,R,_,K="routing",S,x,Q=`Routing is done by a <i>Router</i> class that could match URI Regex patterns and request methods to controllers.
        Middlewares and controllers are registered to the router and the router calls the middleware before the controller.
        An interesting optimization I made was to seperate static routes from dynamic routes.
        That is, routes registered with a static URI could be mapped in <b>O(1)</b> time while dynamic routes would be mapped in <b>O(n)</b> time.`,O,H,W="testing",z,P,X=`The framework includes comprehensive unit and integration tests including all the features of the framework.
        The tests were written using <b>PHPUnit</b> and are run in a <b>GitHub Actions</b> workflow.`,A,C,Y="final_note",U,y,Z=`I honestly think PHP is an underrated language and should be learned before diving into Node.js.
        It gave me such a foundational understanding of HTTP and web development that is abstracted away in Node.js with its vast ecosystem of libraries.`,D,T,ee=`I would recommend this framework to anyone who is looking to learn how to create a web framework or wants to create a simple web app in PHP.
        I cannot vet how production ready it is because I never used it in production... but it should be fine.`;return{c(){n=i("h2"),n.textContent=g,l=d(),c=i("p"),c.innerHTML=k,M=d(),p=i("h2"),p.textContent=N,I=d(),b=i("p"),b.innerHTML=V,L=d(),m=i("p"),m.innerHTML=E,$=d(),h=i("p"),h.innerHTML=B,j=d(),w=i("p"),w.innerHTML=F,q=d(),v=i("p"),v.innerHTML=J,R=d(),_=i("h2"),_.textContent=K,S=d(),x=i("p"),x.innerHTML=Q,O=d(),H=i("h2"),H.textContent=W,z=d(),P=i("p"),P.innerHTML=X,A=d(),C=i("h2"),C.textContent=Y,U=d(),y=i("p"),y.textContent=Z,D=d(),T=i("p"),T.textContent=ee,this.h()},l(e){n=r(e,"H2",{class:!0,"data-svelte-h":!0}),o(n)!=="svelte-mht1ex"&&(n.textContent=g),l=f(e),c=r(e,"P",{class:!0,"data-svelte-h":!0}),o(c)!=="svelte-1tkmca2"&&(c.innerHTML=k),M=f(e),p=r(e,"H2",{class:!0,"data-svelte-h":!0}),o(p)!=="svelte-1cun1nt"&&(p.textContent=N),I=f(e),b=r(e,"P",{class:!0,"data-svelte-h":!0}),o(b)!=="svelte-1u1q3uv"&&(b.innerHTML=V),L=f(e),m=r(e,"P",{class:!0,"data-svelte-h":!0}),o(m)!=="svelte-y8y16d"&&(m.innerHTML=E),$=f(e),h=r(e,"P",{class:!0,"data-svelte-h":!0}),o(h)!=="svelte-n8skfp"&&(h.innerHTML=B),j=f(e),w=r(e,"P",{class:!0,"data-svelte-h":!0}),o(w)!=="svelte-if8j5h"&&(w.innerHTML=F),q=f(e),v=r(e,"P",{class:!0,"data-svelte-h":!0}),o(v)!=="svelte-1kan9xk"&&(v.innerHTML=J),R=f(e),_=r(e,"H2",{class:!0,"data-svelte-h":!0}),o(_)!=="svelte-1p027da"&&(_.textContent=K),S=f(e),x=r(e,"P",{class:!0,"data-svelte-h":!0}),o(x)!=="svelte-1eft8sn"&&(x.innerHTML=Q),O=f(e),H=r(e,"H2",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-199fv38"&&(H.textContent=W),z=f(e),P=r(e,"P",{class:!0,"data-svelte-h":!0}),o(P)!=="svelte-110v5k5"&&(P.innerHTML=X),A=f(e),C=r(e,"H2",{class:!0,"data-svelte-h":!0}),o(C)!=="svelte-y3jckb"&&(C.textContent=Y),U=f(e),y=r(e,"P",{class:!0,"data-svelte-h":!0}),o(y)!=="svelte-1xwibtu"&&(y.textContent=Z),D=f(e),T=r(e,"P",{class:!0,"data-svelte-h":!0}),o(T)!=="svelte-10i6tzw"&&(T.textContent=ee),this.h()},h(){u(n,"class","left-bar fade-in"),u(c,"class","left-bar fade-in"),u(p,"class","left-bar fade-in"),u(b,"class","left-bar fade-in"),u(m,"class","left-bar fade-in"),u(h,"class","left-bar fade-in"),u(w,"class","left-bar fade-in"),u(v,"class","left-bar fade-in"),u(_,"class","left-bar fade-in"),u(x,"class","left-bar fade-in"),u(H,"class","left-bar fade-in"),u(P,"class","left-bar fade-in"),u(C,"class","left-bar fade-in"),u(y,"class","left-bar fade-in"),u(T,"class","left-bar fade-in")},m(e,t){a(e,n,t),a(e,l,t),a(e,c,t),a(e,M,t),a(e,p,t),a(e,I,t),a(e,b,t),a(e,L,t),a(e,m,t),a(e,$,t),a(e,h,t),a(e,j,t),a(e,w,t),a(e,q,t),a(e,v,t),a(e,R,t),a(e,_,t),a(e,S,t),a(e,x,t),a(e,O,t),a(e,H,t),a(e,z,t),a(e,P,t),a(e,A,t),a(e,C,t),a(e,U,t),a(e,y,t),a(e,D,t),a(e,T,t)},p:ae,d(e){e&&(s(n),s(l),s(c),s(M),s(p),s(I),s(b),s(L),s(m),s($),s(h),s(j),s(w),s(q),s(v),s(R),s(_),s(S),s(x),s(O),s(H),s(z),s(P),s(A),s(C),s(U),s(y),s(D),s(T))}}}function be(G){let n,g;return n=new fe({props:{title:"gratis",category:"learning_projects",repository:["connellr023/gratis","https://github.com/connellr023/gratis"],$$slots:{default:[pe]},$$scope:{ctx:G}}}),{c(){le(n.$$.fragment)},l(l){ie(n.$$.fragment,l)},m(l,c){re(n,l,c),g=!0},p(l,[c]){const k={};c&1&&(k.$$scope={dirty:c,ctx:l}),n.$set(k)},i(l){g||(oe(n.$$.fragment,l),g=!0)},o(l){ue(n.$$.fragment,l),g=!1},d(l){de(n,l)}}}class xe extends se{constructor(n){super(),ne(this,n,null,be,te,{})}}export{xe as component,_e as universal};
