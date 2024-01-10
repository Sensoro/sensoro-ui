import{s as Ea,z as ra,A as Pa,e as o,a as l,H as la,c as p,g as i,d as c,b as ca,x as ia,h as t,i as y,j as s,n as Ra}from"../chunks/scheduler.4hf8wZ48.js";import{S as za,i as Fa,c as Ya,b as Na,m as Da,t as Ba,a as Ga,d as Ja}from"../chunks/index.7wBGFR-L.js";import{g as Ka,a as ja}from"../chunks/spread.rEx3vLA9.js";import{M as Oa}from"../chunks/mdsvex-blog.YlKgMX-o.js";function Qa(E){let e,h="daisyUI provides semantic color names. These color names are used in all daisyUI components and the can have different values in different themes.",k,u,r='<a aria-hidden="true" tabindex="-1" href="#the-problem-with-constant-color-names"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>The problem with constant color names',d,m,ua="Using Tailwind CSS color names, you should use constant color names for everything. For example, to set a light background and dark text we you have to use <code>bg-white text-black</code> and then again for a dark mode, you would have to set <code>dark:bg-black dark:text-white</code>",R,_,da="That is not efficient because not only you should use more class names for each element to set the colors, having a dark mode would require you to decide on the colors for each element again. Imaging how hard it would be to add more themes to your project.",z,f,ka='<a aria-hidden="true" tabindex="-1" href="#solution-semantic-color-names-and-css-variables"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Solution: Semantic color names and CSS variables',F,x,ma=`daisyUI solves this problem by providing semantic color names. For example, you can use <code>bg-base-100 text-base-content</code> and then set the background and foreground colors.That’s it. It would be dark color on a light background when you use a light theme, It would be light color on a dark background when a dark theme is used.<br/>
daisyUI semantic color names (<code>base</code>, <code>primary</code>, etc) are using CSS variables for the color values. So you can easily change the theme of your entire site by changing the value of these variables.
You can also have multiple themes at the same time without adding a single class name. Light mode, dark mode, or any other theme you want.`,Y,H,ha=`These are the daisyUI color names:
<img src="/images/blog/daisyui-colors.jpg" alt="Mary UI form"/>
Read more about <a href="https://daisyui.com/docs/colors" rel="nofollow" target="_blank">daisyUI color system</a> and <a href="https://daisyui.com/docs/themes/" rel="nofollow" target="_blank">daisyUI themes</a>`,N,v,ya='<a aria-hidden="true" tabindex="-1" href="#how-using-a-color-palette-can-help"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How using a color palette can help',D,T,fa=`In a design system, you should have a color palette. A color palette is a set of colors that you use in your design system. This helps you to have a consistent look and feel across your entire site.<br/>
A common practice is to have:`,B,C,va="<li>A set of brand colors (<code>primary</code>, <code>secondary</code>, <code>accent</code>)</li> <li>A set of state colors (<code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>)</li> <li>A set of neutral colors for the background and content</li>",G,L,ga="These names are enough for almost all design systems. Most successful design even need less colors. More than that would make the design complicated for the users and also for the developers.",J,g,wa='<a aria-hidden="true" tabindex="-1" href="#how-to-add-new-colors-to-daisyui-themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to add new colors to daisyUI themes',K,M,ba="However just because daisyUI is offering these color names, it doesn’t mean you’re limited to these colors. You can add new color names and use them in daisyUI themes.",O,S,_a="daisyUI has <code>primary</code> and <code>primary-content</code> but let’s say you need a new shade of your primary color.",Q,w,xa='<a aria-hidden="true" tabindex="-1" href="#step-1-lets-add-a-new-color-called-primary-muted-to-tailwind-css"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 1: Let’s add a new color called <code>primary-muted</code> to Tailwind CSS',V,I,Ha="This allows us to use this new color name with all Tailwind CSS color utilities. For example, <code>bg-primary-muted</code> would set the background color to the new color.",W,P,X,Ua=`<code class="language-js"><span class="token comment">// tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token string-property property">"primary-muted"</span><span class="token operator">:</span> <span class="token string">"oklch(var(--primary-muted) / &lt;alpha-value>)"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,Z,b,Ta='<a aria-hidden="true" tabindex="-1" href="#step-2-lets-use-the-new-primary-muted-color-in-daisyui-light-themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 2: Let’s use the new <code>primary-muted</code> color in daisyUI <code>light</code> themes.',aa,j,Ca="Now we add the new color to a theme and set color values for it.",na,q,ta,$a=`<code class="language-js"><span class="token comment">// tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token string-property property">"primary-muted"</span><span class="token operator">:</span> <span class="token string">"oklch(var(--primary-muted) / &lt;alpha-value>)"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token comment">// importing the built-in 'light' theme</span>
          <span class="token comment">// and setting the color values for '--primary-muted'</span>
          <span class="token comment">// (numbers are HSL values)</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"[data-theme=light]"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">"--primary-muted"</span><span class="token operator">:</span> <span class="token string">"338 83% 66%"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,sa,U,La=`You can set a different value for the new color in themes as well.<br/>
Let’s add the new color name to <code>cupcake</code> and <code>dark</code> theme:`,ea,$,oa,Aa=`<code class="language-js"><span class="token comment">// tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token string-property property">"primary-muted"</span><span class="token operator">:</span> <span class="token string">"oklch(var(--primary-muted) / &lt;alpha-value>)"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// light theme</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"[data-theme=light]"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">"--primary-muted"</span><span class="token operator">:</span> <span class="token string">"259 94% 71%"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token comment">// cupcake theme</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">cupcake</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"[data-theme=cupcake]"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">"--primary-muted"</span><span class="token operator">:</span> <span class="token string">"183 47% 79%"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token comment">// dark theme</span>
      <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"[data-theme=dark]"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">"--primary-muted"</span><span class="token operator">:</span> <span class="token string">"262 80% 30%"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,pa,A,Ma="Now you can simply use <code>bg-primary-muted</code> (or other Tailwind CSS color utilities) wherever you want and it will have different colors on each theme.";return{c(){e=o("p"),e.textContent=h,k=l(),u=o("h2"),u.innerHTML=r,d=l(),m=o("p"),m.innerHTML=ua,R=l(),_=o("p"),_.textContent=da,z=l(),f=o("h2"),f.innerHTML=ka,F=l(),x=o("p"),x.innerHTML=ma,Y=l(),H=o("p"),H.innerHTML=ha,N=l(),v=o("h2"),v.innerHTML=ya,D=l(),T=o("p"),T.innerHTML=fa,B=l(),C=o("ul"),C.innerHTML=va,G=l(),L=o("p"),L.textContent=ga,J=l(),g=o("h2"),g.innerHTML=wa,K=l(),M=o("p"),M.textContent=ba,O=l(),S=o("p"),S.innerHTML=_a,Q=l(),w=o("h3"),w.innerHTML=xa,V=l(),I=o("p"),I.innerHTML=Ha,W=l(),P=o("pre"),X=new la(!1),Z=l(),b=o("h3"),b.innerHTML=Ta,aa=l(),j=o("p"),j.textContent=Ca,na=l(),q=o("pre"),ta=new la(!1),sa=l(),U=o("p"),U.innerHTML=La,ea=l(),$=o("pre"),oa=new la(!1),pa=l(),A=o("p"),A.innerHTML=Ma,this.h()},l(a){e=p(a,"P",{"data-svelte-h":!0}),i(e)!=="svelte-14qxr3x"&&(e.textContent=h),k=c(a),u=p(a,"H2",{id:!0,"data-svelte-h":!0}),i(u)!=="svelte-1ltqeiq"&&(u.innerHTML=r),d=c(a),m=p(a,"P",{"data-svelte-h":!0}),i(m)!=="svelte-1bpaos0"&&(m.innerHTML=ua),R=c(a),_=p(a,"P",{"data-svelte-h":!0}),i(_)!=="svelte-mgctgl"&&(_.textContent=da),z=c(a),f=p(a,"H2",{id:!0,"data-svelte-h":!0}),i(f)!=="svelte-vw4bzq"&&(f.innerHTML=ka),F=c(a),x=p(a,"P",{"data-svelte-h":!0}),i(x)!=="svelte-gqw5lv"&&(x.innerHTML=ma),Y=c(a),H=p(a,"P",{"data-svelte-h":!0}),i(H)!=="svelte-sgqedb"&&(H.innerHTML=ha),N=c(a),v=p(a,"H2",{id:!0,"data-svelte-h":!0}),i(v)!=="svelte-yxn7ax"&&(v.innerHTML=ya),D=c(a),T=p(a,"P",{"data-svelte-h":!0}),i(T)!=="svelte-1gu69s0"&&(T.innerHTML=fa),B=c(a),C=p(a,"UL",{"data-svelte-h":!0}),i(C)!=="svelte-1un100g"&&(C.innerHTML=va),G=c(a),L=p(a,"P",{"data-svelte-h":!0}),i(L)!=="svelte-1x1muze"&&(L.textContent=ga),J=c(a),g=p(a,"H2",{id:!0,"data-svelte-h":!0}),i(g)!=="svelte-o544ki"&&(g.innerHTML=wa),K=c(a),M=p(a,"P",{"data-svelte-h":!0}),i(M)!=="svelte-194ni27"&&(M.textContent=ba),O=c(a),S=p(a,"P",{"data-svelte-h":!0}),i(S)!=="svelte-dvc6he"&&(S.innerHTML=_a),Q=c(a),w=p(a,"H3",{id:!0,"data-svelte-h":!0}),i(w)!=="svelte-7n3jgw"&&(w.innerHTML=xa),V=c(a),I=p(a,"P",{"data-svelte-h":!0}),i(I)!=="svelte-k3jnq9"&&(I.innerHTML=Ha),W=c(a),P=p(a,"PRE",{class:!0});var n=ca(P);X=ia(n,!1),n.forEach(t),Z=c(a),b=p(a,"H3",{id:!0,"data-svelte-h":!0}),i(b)!=="svelte-1v8q6ny"&&(b.innerHTML=Ta),aa=c(a),j=p(a,"P",{"data-svelte-h":!0}),i(j)!=="svelte-103rfty"&&(j.textContent=Ca),na=c(a),q=p(a,"PRE",{class:!0});var Sa=ca(q);ta=ia(Sa,!1),Sa.forEach(t),sa=c(a),U=p(a,"P",{"data-svelte-h":!0}),i(U)!=="svelte-1cp1mm2"&&(U.innerHTML=La),ea=c(a),$=p(a,"PRE",{class:!0});var Ia=ca($);oa=ia(Ia,!1),Ia.forEach(t),pa=c(a),A=p(a,"P",{"data-svelte-h":!0}),i(A)!=="svelte-1meuskg"&&(A.innerHTML=Ma),this.h()},h(){y(u,"id","the-problem-with-constant-color-names"),y(f,"id","solution-semantic-color-names-and-css-variables"),y(v,"id","how-using-a-color-palette-can-help"),y(g,"id","how-to-add-new-colors-to-daisyui-themes"),y(w,"id","step-1-lets-add-a-new-color-called-primary-muted-to-tailwind-css"),X.a=null,y(P,"class","language-js"),y(b,"id","step-2-lets-use-the-new-primary-muted-color-in-daisyui-light-themes"),ta.a=null,y(q,"class","language-js"),oa.a=null,y($,"class","language-js")},m(a,n){s(a,e,n),s(a,k,n),s(a,u,n),s(a,d,n),s(a,m,n),s(a,R,n),s(a,_,n),s(a,z,n),s(a,f,n),s(a,F,n),s(a,x,n),s(a,Y,n),s(a,H,n),s(a,N,n),s(a,v,n),s(a,D,n),s(a,T,n),s(a,B,n),s(a,C,n),s(a,G,n),s(a,L,n),s(a,J,n),s(a,g,n),s(a,K,n),s(a,M,n),s(a,O,n),s(a,S,n),s(a,Q,n),s(a,w,n),s(a,V,n),s(a,I,n),s(a,W,n),s(a,P,n),X.m(Ua,P),s(a,Z,n),s(a,b,n),s(a,aa,n),s(a,j,n),s(a,na,n),s(a,q,n),ta.m($a,q),s(a,sa,n),s(a,U,n),s(a,ea,n),s(a,$,n),oa.m(Aa,$),s(a,pa,n),s(a,A,n)},p:Ra,d(a){a&&(t(e),t(k),t(u),t(d),t(m),t(R),t(_),t(z),t(f),t(F),t(x),t(Y),t(H),t(N),t(v),t(D),t(T),t(B),t(C),t(G),t(L),t(J),t(g),t(K),t(M),t(O),t(S),t(Q),t(w),t(V),t(I),t(W),t(P),t(Z),t(b),t(aa),t(j),t(na),t(q),t(sa),t(U),t(ea),t($),t(pa),t(A))}}}function Va(E){let e,h;const k=[E[0],qa];let u={$$slots:{default:[Qa]},$$scope:{ctx:E}};for(let r=0;r<k.length;r+=1)u=ra(u,k[r]);return e=new Oa({props:u}),{c(){Ya(e.$$.fragment)},l(r){Na(e.$$.fragment,r)},m(r,d){Da(e,r,d),h=!0},p(r,[d]){const m=d&1?Ka(k,[d&1&&ja(r[0]),d&0&&ja(qa)]):{};d&2&&(m.$$scope={dirty:d,ctx:r}),e.$set(m)},i(r){h||(Ba(e.$$.fragment,r),h=!0)},o(r){Ga(e.$$.fragment,r),h=!1},d(r){Ja(e,r)}}}const qa={title:"How to add a new color to daisyUI themes",desc:"Do you want to add new color names to daisyUI color palette? Here is how you can do it.",published:!0,date:"2023-9-18",author:"Pouya Saadeghi",thumbnail:"/images/blog/how-to-add-new-colors-to-daisyui.jpg",tags:["Colors"]};function Wa(E,e,h){return E.$$set=k=>{h(0,e=ra(ra({},e),Pa(k)))},e=Pa(e),[e]}class tn extends za{constructor(e){super(),Fa(this,e,Wa,Va,Ea,{})}}export{tn as component};
