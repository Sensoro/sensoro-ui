import{s as Ba,z as ia,A as Aa,e as n,a as l,t as Ra,H as ra,c as o,b as v,h as a,d as p,g as M,f as Ia,x as da,i as y,j as x,k as s,n as Ua}from"../chunks/scheduler.4hf8wZ48.js";import{S as Da,i as Pa,c as i,b,m as f,t as m,a as u,d as g}from"../chunks/index.7wBGFR-L.js";import{g as Ya,a as Na}from"../chunks/spread.rEx3vLA9.js";import{M as za}from"../chunks/mdsvex.MYZYtg-Q.js";import{T as $}from"../chunks/Translate.-rDyso_Y.js";function Va(rt){let r,k,L,c,d,_,E,Dt,C,dt,ba='<span class="badge badge-xs bg-green-500"></span> bg-green-500',Pt,it,fa='<span class="badge badge-xs bg-orange-600"></span> bg-orange-600',Yt,bt,ma='<span class="badge badge-xs bg-blue-700"></span> bg-blue-700',zt,$t,q,Vt,j,Gt,w,ft,ua='<span class="badge badge-xs bg-primary"></span> bg-primary',Jt,mt,ga='<span class="badge badge-xs bg-secondary"></span> bg-secondary',Kt,ut,xa='<span class="badge badge-xs bg-accent"></span> bg-accent',Qt,vt,F,Xt,B,Zt,U,O,$a='<span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span>',D,ta,P,aa,Y,Ct,A,H,va='<span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span>',z,wt,V,St,G,gt,J,yt,S,Lt,sa,ht,K,ea,kt,Q,na,_t,X,oa,xt,ya='<tr><td><span class="badge relative top-4 bg-primary"></span></td> <td><span class="font-mono font-bold">primary</span> <br/> <span class="text-xs opacity-60">Primary color</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-primary</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--p))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-primary-content"></span></td> <td><span class="font-mono font-bold">primary-content</span> <br/> <span class="text-xs opacity-60">Foreground content color to use on primary color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a readable tone of primary if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-primary-content</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--pc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-secondary"></span></td> <td><span class="font-mono font-bold">secondary</span> <br/> <span class="text-xs opacity-60">Secondary color</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-secondary</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--s))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-secondary-content"></span></td> <td><span class="font-mono font-bold">secondary-content</span> <br/> <span class="text-xs opacity-60">Foreground content color to use on secondary color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a readable tone of secondary if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-secondary-content</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--sc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-accent"></span></td> <td><span class="font-mono font-bold">accent</span> <br/> <span class="text-xs opacity-60">Accent color</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-accent</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--a))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-accent-content"></span></td> <td><span class="font-mono font-bold">accent-content</span> <br/> <span class="text-xs opacity-60">Foreground content color to use on accent color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a readable tone of accent if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-accent-content</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--ac))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-neutral"></span></td> <td><span class="font-mono font-bold">neutral</span> <br/> <span class="text-xs opacity-60">Neutral color</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-neutral</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--n))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-neutral-content"></span></td> <td><span class="font-mono font-bold">neutral-content</span> <br/> <span class="text-xs opacity-60">Foreground content color to use on neutral color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a readable tone of neutral if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-neutral-content</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--nc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-base-100"></span></td> <td><span class="font-mono font-bold">base-100</span> <br/> <span class="text-xs opacity-60">Base color of page, used for blank backgrounds</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-base-100</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--b1))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-base-200"></span></td> <td><span class="font-mono font-bold">base-200</span> <br/> <span class="text-xs opacity-60">Base color, a little darker</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a darker tone of base-100 if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-base-200</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--b2))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-base-300"></span></td> <td><span class="font-mono font-bold">base-300</span> <br/> <span class="text-xs opacity-60">Base color, even more darker</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a darker tone of base-200 if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-base-300</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--b3))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-base-content"></span></td> <td><span class="font-mono font-bold">base-content</span> <br/> <span class="text-xs opacity-60">Foreground content color to use on base color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a readable tone of base-100 if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-base-content</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--bc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-info"></span></td> <td><span class="font-mono font-bold">info</span> <br/> <span class="text-xs opacity-60">Info color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a default blue color if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-info</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--in))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-info-content"></span></td> <td><span class="font-mono font-bold">info-content</span> <br/> <span class="text-xs opacity-60">Foreground content color to use on info color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a readable tone of info if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-info-content</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--inc))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-success"></span></td> <td><span class="font-mono font-bold">success</span> <br/> <span class="text-xs opacity-60">Success color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a default green color if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-success</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--su))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-success-content"></span></td> <td><span class="font-mono font-bold">success-content</span> <br/> <span class="text-xs opacity-60">Foreground content color to use on success color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a readable tone of success if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-success-content</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--suc))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-warning"></span></td> <td><span class="font-mono font-bold">warning</span> <br/> <span class="text-xs opacity-60">Warning color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a default orange color if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-warning</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--wa))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-warning-content"></span></td> <td><span class="font-mono font-bold">warning-content</span> <br/> <span class="text-xs opacity-60">Foreground content color to use on warning color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a readable tone of warning if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-warning-content</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--wac))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-error"></span></td> <td><span class="font-mono font-bold">error</span> <br/> <span class="text-xs opacity-60">Error color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a default red color if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-error</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--er))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-error-content"></span></td> <td><span class="font-mono font-bold">error-content</span> <br/> <span class="text-xs opacity-60">Foreground content color to use on error color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br/> <span class="text-xs opacity-60">Will be a readable tone of error if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-error-content</code></span> <br/> <span class="text-xs opacity-60 font-mono">CSS variable: <code>oklch(var(--erc))</code></span></td></tr>',Et,R,T,ha='<span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span>',Z,Mt,tt,Ot,at,Ht,st,Tt,qa='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>',At,et,Rt,nt,It,ja='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox checkbox-secondary<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>',Nt,ot,Wt,lt,qt,pt,jt,Fa=`<code class="language-css"><span class="token selector">bg-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">to-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">via-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">from-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">text-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">ring-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">fill-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">caret-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">stroke-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">border-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">divide-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">accent-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">shadow-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">outline-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">decoration-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">placeholder-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">ring-offset-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span></code>`,Ft,ct,Bt;return k=new $({props:{text:"Introduction"}}),d=new $({props:{text:"daisyUI is fully themeable and colorable,"}}),E=new $({props:{text:"So instead of using constant color utility classes like:"}}),q=new $({props:{text:"etc."}}),j=new $({props:{text:"It's suggested to use semantic color utility classes like:"}}),F=new $({props:{text:"etc."}}),B=new $({props:{text:"Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied."}}),D=new $({props:{text:"Benefits"}}),P=new $({props:{text:"Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces."}}),Y=new $({props:{text:"Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables."}}),z=new $({props:{text:"List of all daisyUI color names"}}),V=new $({props:{text:"You can use these color names in your theme or in utility classes."}}),K=new $({props:{text:"Color name + description"}}),Q=new $({props:{text:"Required or optional for themes"}}),X=new $({props:{text:"Example use"}}),Z=new $({props:{text:"How to use"}}),tt=new $({props:{text:"Some daisyUI components come with modifier class names and that modifier class name will apply a color."}}),at=new $({props:{text:"For example"}}),et=new $({props:{text:"Or"}}),ot=new $({props:{text:"You can also use color names in utility classes just like Tailwind's original color names."}}),lt=new $({props:{text:"These are utility classes that can be used with a color name:"}}),ct=new $({props:{text:"So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc."}}),{c(){r=n("h2"),i(k.$$.fragment),L=l(),c=n("div"),i(d.$$.fragment),_=l(),i(E.$$.fragment),Dt=l(),C=n("ul"),dt=n("li"),dt.innerHTML=ba,Pt=l(),it=n("li"),it.innerHTML=fa,Yt=l(),bt=n("li"),bt.innerHTML=ma,zt=l(),$t=n("li"),i(q.$$.fragment),Vt=l(),i(j.$$.fragment),Gt=l(),w=n("ul"),ft=n("li"),ft.innerHTML=ua,Jt=l(),mt=n("li"),mt.innerHTML=ga,Kt=l(),ut=n("li"),ut.innerHTML=xa,Qt=l(),vt=n("li"),i(F.$$.fragment),Xt=l(),i(B.$$.fragment),Zt=l(),U=n("h2"),O=n("a"),O.innerHTML=$a,i(D.$$.fragment),ta=l(),i(P.$$.fragment),aa=l(),i(Y.$$.fragment),Ct=l(),A=n("h2"),H=n("a"),H.innerHTML=va,i(z.$$.fragment),wt=l(),i(V.$$.fragment),St=l(),G=n("div"),gt=n("div"),J=n("table"),yt=n("thead"),S=n("tr"),Lt=n("th"),sa=l(),ht=n("th"),i(K.$$.fragment),ea=l(),kt=n("th"),i(Q.$$.fragment),na=l(),_t=n("th"),i(X.$$.fragment),oa=l(),xt=n("tbody"),xt.innerHTML=ya,Et=l(),R=n("h2"),T=n("a"),T.innerHTML=ha,i(Z.$$.fragment),Mt=l(),i(tt.$$.fragment),Ot=l(),i(at.$$.fragment),Ht=Ra(`:
`),st=n("pre"),Tt=new ra(!1),At=l(),i(et.$$.fragment),Rt=Ra(`:
`),nt=n("pre"),It=new ra(!1),Nt=l(),i(ot.$$.fragment),Wt=l(),i(lt.$$.fragment),qt=l(),pt=n("pre"),jt=new ra(!1),Ft=l(),i(ct.$$.fragment),this.h()},l(t){r=o(t,"H2",{id:!0});var e=v(r);b(k.$$.fragment,e),e.forEach(a),L=p(t),c=o(t,"DIV",{class:!0});var h=v(c);b(d.$$.fragment,h),_=p(h),b(E.$$.fragment,h),Dt=p(h),C=o(h,"UL",{});var I=v(C);dt=o(I,"LI",{"data-svelte-h":!0}),M(dt)!=="svelte-1nvl4mk"&&(dt.innerHTML=ba),Pt=p(I),it=o(I,"LI",{"data-svelte-h":!0}),M(it)!=="svelte-zrn7ms"&&(it.innerHTML=fa),Yt=p(I),bt=o(I,"LI",{"data-svelte-h":!0}),M(bt)!=="svelte-vq1o16"&&(bt.innerHTML=ma),zt=p(I),$t=o(I,"LI",{});var ka=v($t);b(q.$$.fragment,ka),ka.forEach(a),I.forEach(a),Vt=p(h),b(j.$$.fragment,h),Gt=p(h),w=o(h,"UL",{});var N=v(w);ft=o(N,"LI",{"data-svelte-h":!0}),M(ft)!=="svelte-7idjz0"&&(ft.innerHTML=ua),Jt=p(N),mt=o(N,"LI",{"data-svelte-h":!0}),M(mt)!=="svelte-xc8268"&&(mt.innerHTML=ga),Kt=p(N),ut=o(N,"LI",{"data-svelte-h":!0}),M(ut)!=="svelte-1wjjf4i"&&(ut.innerHTML=xa),Qt=p(N),vt=o(N,"LI",{});var _a=v(vt);b(F.$$.fragment,_a),_a.forEach(a),N.forEach(a),Xt=p(h),b(B.$$.fragment,h),Zt=p(h),U=o(h,"H2",{id:!0});var la=v(U);O=o(la,"A",{"aria-hidden":!0,tabindex:!0,href:!0,"data-svelte-h":!0}),M(O)!=="svelte-1trhte2"&&(O.innerHTML=$a),b(D.$$.fragment,la),la.forEach(a),ta=p(h),b(P.$$.fragment,h),aa=p(h),b(Y.$$.fragment,h),h.forEach(a),Ct=p(t),A=o(t,"H2",{id:!0});var pa=v(A);H=o(pa,"A",{"aria-hidden":!0,tabindex:!0,href:!0,"data-svelte-h":!0}),M(H)!=="svelte-les9x9"&&(H.innerHTML=va),b(z.$$.fragment,pa),pa.forEach(a),wt=p(t),b(V.$$.fragment,t),St=p(t),G=o(t,"DIV",{class:!0});var Ca=v(G);gt=o(Ca,"DIV",{class:!0});var wa=v(gt);J=o(wa,"TABLE",{});var Ut=v(J);yt=o(Ut,"THEAD",{});var Sa=v(yt);S=o(Sa,"TR",{});var W=v(S);Lt=o(W,"TH",{}),v(Lt).forEach(a),sa=p(W),ht=o(W,"TH",{});var La=v(ht);b(K.$$.fragment,La),La.forEach(a),ea=p(W),kt=o(W,"TH",{});var Ea=v(kt);b(Q.$$.fragment,Ea),Ea.forEach(a),na=p(W),_t=o(W,"TH",{});var Ma=v(_t);b(X.$$.fragment,Ma),Ma.forEach(a),W.forEach(a),Sa.forEach(a),oa=p(Ut),xt=o(Ut,"TBODY",{"data-svelte-h":!0}),M(xt)!=="svelte-j2qeje"&&(xt.innerHTML=ya),Ut.forEach(a),wa.forEach(a),Ca.forEach(a),Et=p(t),R=o(t,"H2",{id:!0});var ca=v(R);T=o(ca,"A",{"aria-hidden":!0,tabindex:!0,href:!0,"data-svelte-h":!0}),M(T)!=="svelte-10vq208"&&(T.innerHTML=ha),b(Z.$$.fragment,ca),ca.forEach(a),Mt=p(t),b(tt.$$.fragment,t),Ot=p(t),b(at.$$.fragment,t),Ht=Ia(t,`:
`),st=o(t,"PRE",{class:!0});var Oa=v(st);Tt=da(Oa,!1),Oa.forEach(a),At=p(t),b(et.$$.fragment,t),Rt=Ia(t,`:
`),nt=o(t,"PRE",{class:!0});var Ha=v(nt);It=da(Ha,!1),Ha.forEach(a),Nt=p(t),b(ot.$$.fragment,t),Wt=p(t),b(lt.$$.fragment,t),qt=p(t),pt=o(t,"PRE",{class:!0});var Ta=v(pt);jt=da(Ta,!1),Ta.forEach(a),Ft=p(t),b(ct.$$.fragment,t),this.h()},h(){y(r,"id",""),y(O,"aria-hidden","true"),y(O,"tabindex","-1"),y(O,"href","#-1"),y(U,"id","-1"),y(c,"class","max-w-3xl"),y(H,"aria-hidden","true"),y(H,"tabindex","-1"),y(H,"href","#-2"),y(A,"id","-2"),y(gt,"class","whitespace-nowrap"),y(G,"class","overflow-x-auto"),y(T,"aria-hidden","true"),y(T,"tabindex","-1"),y(T,"href","#-3"),y(R,"id","-3"),Tt.a=null,y(st,"class","language-html"),It.a=null,y(nt,"class","language-html"),jt.a=null,y(pt,"class","language-css")},m(t,e){x(t,r,e),f(k,r,null),x(t,L,e),x(t,c,e),f(d,c,null),s(c,_),f(E,c,null),s(c,Dt),s(c,C),s(C,dt),s(C,Pt),s(C,it),s(C,Yt),s(C,bt),s(C,zt),s(C,$t),f(q,$t,null),s(c,Vt),f(j,c,null),s(c,Gt),s(c,w),s(w,ft),s(w,Jt),s(w,mt),s(w,Kt),s(w,ut),s(w,Qt),s(w,vt),f(F,vt,null),s(c,Xt),f(B,c,null),s(c,Zt),s(c,U),s(U,O),f(D,U,null),s(c,ta),f(P,c,null),s(c,aa),f(Y,c,null),x(t,Ct,e),x(t,A,e),s(A,H),f(z,A,null),x(t,wt,e),f(V,t,e),x(t,St,e),x(t,G,e),s(G,gt),s(gt,J),s(J,yt),s(yt,S),s(S,Lt),s(S,sa),s(S,ht),f(K,ht,null),s(S,ea),s(S,kt),f(Q,kt,null),s(S,na),s(S,_t),f(X,_t,null),s(J,oa),s(J,xt),x(t,Et,e),x(t,R,e),s(R,T),f(Z,R,null),x(t,Mt,e),f(tt,t,e),x(t,Ot,e),f(at,t,e),x(t,Ht,e),x(t,st,e),Tt.m(qa,st),x(t,At,e),f(et,t,e),x(t,Rt,e),x(t,nt,e),It.m(ja,nt),x(t,Nt,e),f(ot,t,e),x(t,Wt,e),f(lt,t,e),x(t,qt,e),x(t,pt,e),jt.m(Fa,pt),x(t,Ft,e),f(ct,t,e),Bt=!0},p:Ua,i(t){Bt||(m(k.$$.fragment,t),m(d.$$.fragment,t),m(E.$$.fragment,t),m(q.$$.fragment,t),m(j.$$.fragment,t),m(F.$$.fragment,t),m(B.$$.fragment,t),m(D.$$.fragment,t),m(P.$$.fragment,t),m(Y.$$.fragment,t),m(z.$$.fragment,t),m(V.$$.fragment,t),m(K.$$.fragment,t),m(Q.$$.fragment,t),m(X.$$.fragment,t),m(Z.$$.fragment,t),m(tt.$$.fragment,t),m(at.$$.fragment,t),m(et.$$.fragment,t),m(ot.$$.fragment,t),m(lt.$$.fragment,t),m(ct.$$.fragment,t),Bt=!0)},o(t){u(k.$$.fragment,t),u(d.$$.fragment,t),u(E.$$.fragment,t),u(q.$$.fragment,t),u(j.$$.fragment,t),u(F.$$.fragment,t),u(B.$$.fragment,t),u(D.$$.fragment,t),u(P.$$.fragment,t),u(Y.$$.fragment,t),u(z.$$.fragment,t),u(V.$$.fragment,t),u(K.$$.fragment,t),u(Q.$$.fragment,t),u(X.$$.fragment,t),u(Z.$$.fragment,t),u(tt.$$.fragment,t),u(at.$$.fragment,t),u(et.$$.fragment,t),u(ot.$$.fragment,t),u(lt.$$.fragment,t),u(ct.$$.fragment,t),Bt=!1},d(t){t&&(a(r),a(L),a(c),a(Ct),a(A),a(wt),a(St),a(G),a(Et),a(R),a(Mt),a(Ot),a(Ht),a(st),a(At),a(Rt),a(nt),a(Nt),a(Wt),a(qt),a(pt),a(Ft)),g(k),g(d),g(E),g(q),g(j),g(F),g(B),g(D),g(P),g(Y),g(z),g(V,t),g(K),g(Q),g(X),g(Z),g(tt,t),g(at,t),g(et,t),g(ot,t),g(lt,t),g(ct,t)}}}function Ga(rt){let r,k;const L=[rt[0],Wa];let c={$$slots:{default:[Va]},$$scope:{ctx:rt}};for(let d=0;d<L.length;d+=1)c=ia(c,L[d]);return r=new za({props:c}),{c(){i(r.$$.fragment)},l(d){b(r.$$.fragment,d)},m(d,_){f(r,d,_),k=!0},p(d,[_]){const E=_&1?Ya(L,[_&1&&Na(d[0]),_&0&&Na(Wa)]):{};_&2&&(E.$$scope={dirty:_,ctx:d}),r.$set(E)},i(d){k||(m(r.$$.fragment,d),k=!0)},o(d){u(r.$$.fragment,d),k=!1},d(d){g(r,d)}}}const Wa={title:"Colors",desc:"How to use daisyUI colors?",published:!0};function Ja(rt,r,k){return rt.$$set=L=>{k(0,r=ia(ia({},r),Aa(L)))},r=Aa(r),[r]}class as extends Da{constructor(r){super(),Pa(this,r,Ja,Ga,Ba,{})}}export{as as component};