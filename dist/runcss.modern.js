let e,t,r=e=>!isNaN(e),o=e=>!isNaN(parseInt(e)),i=e=>e.split("!"),a=(e,t)=>i(e).indexOf(t),l=(e,t)=>i(e).includes(t),n=e=>r(e)?R+.25*Number(e)+"rem":R+e,s=e=>Object.assign(Object.create(null),e),c=new Map,d=new Map;t=0===document.styleSheets.length?document.head.appendChild(document.createElement("style")).sheet:document.styleSheets[0];let f,p,m=new Map;for(let e of i("sm|@media(min-width:640px){}!md|@media(min-width:768px){}!lg|@media(min-width:1024px){}!xl|@media(min-width:1280px){}"))e=e.split("|"),m.set(e[0],t.cssRules[t.insertRule(e[1],t.cssRules.length)]);let b=e=>{if(e=e.trim(),!c.has(e))for(f of(c.set(e,!0),e=e.replace(/\s\s+/g," ").split(" ")))d.has(f)||(U(),d.set(f,!0))},x=s({p:"padding",m:"margin",h:"height",z:"z-index",w:"width"}),g=s({});for(let e of i('box-border|-webkit-box-sizing:border-box;box-sizing:border-box!box-content|-webkit-box-sizing:content-box;box-sizing:content-box!hidden|display:none!object-scale-down|object-fit:scale-down;-o-object-fit:scale-down!scrolling-touch|-webkit-overflow-scrolling:touch!scrolling-auto|-webkit-overflow-scrolling:auto!visible|visibility:visible!invisible|visibility:hidden!order-first|order:-9999!order-last|order:9999!order-none|order:0!grid-cols-none|grid-template-columns:none!col-auto|grid-column:auto!col-start-auto|-ms-grid-column:auto;grid-column-start:auto!col-end-auto|-ms-grid-column-span:auto;grid-column-end:auto!grid-rows-none|-ms-grid-rows:none;grid-template-rows:none!row-auto|grid-row:auto!row-start-auto|-ms-grid-row:auto;grid-row-start:auto!row-end-auto|-ms-grid-row-span:auto;grid-row-end:auto!gap-px|gap:1px!row-gap-px|row-gap:1px!grid-flow-row|grid-auto-flow:row!grid-flow-col|grid-auto-flow:column!grid-flow-row-dense|grid-auto-flow:row dense!grid-flow-col-dense|grid-auto-flow:column dense!min-w-full|min-width:100%!max-w-full|max-width:100%!max-w-screen-sm|max-width:640px!max-w-screen-md|max-width:768px!max-w-screen-lg|max-width:1024px!max-w-screen-xl|max-width:1280px!max-w-none|max-width:none!min-h-full|min-height:100%!min-h-screen|min-height:100vh!max-h-full|max-height:100%!max-h-screen|max-height:100vh!text-2xl|font-size:1.5rem!text-3xl|font-size:1.875rem!text-4xl|font-size:2.25rem!text-left|text-align:left!text-center|text-align:center!text-right|text-align:right!text-justify|text-align:justify!underline|text-decoration:underline!line-through|text-decoration:line-through!no-underline|text-decoration:none!uppercase|text-transform:uppercase!lowercase|text-transform:lowercase!capitalize|text-transform:capitalize!normal-case|text-transform:none!whitespace-no-wrap|white-space:nowrap!break-normal|word-break:normal;overflow-wrap:normal!break-words|overflow-wrap:break-word!break-all|word-break:break-all!truncate|overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap!h-auto|height:auto!max-w-2xl|max-width:42rem!tracking-tighter|letter-spacing:-0.05em!tracking-tight|letter-spacing:-0.025em!tracking-normal|0!tracking-wide:letter-spacing:0.025em!tracking-wider|letter-spacing:0.05em!tracking-widest|letter-spacing: 0.1em!leading-none|line-height:1!leading-tight|line-height:1.25!leading-snug|line-height:1.375!leading-normal|line-height:1.5!leading-relaxed|line-height:1.625!leading-loose|line-height:2!list-none|list-style-type:none!list-disc|list-style-type:disc!list-decimal|list-style-type:decimal!list-inside|list-style-position:inside!list-outside|list-style-position:outside!border|border-width:1px!border-collapse|border-collapse:collapse!border-separate|border-collapse:separate!table-auto|table-layout:auto!table-fixed|table-layout:fixed!appearance-none|-webkit-appearance:none;-moz-appearance:none;appearance:none!outline-none|outline:0!resize-none|resize:none!resize|resize:both!resize-y|resize:vertical!resize-x|resize:horizontal!fill-current|fill:currentColor!stroke-current|stroke:currentColor!sr-only|position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0!not-sr-only|position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal!font-sans|font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji!font-serif|font-family:Georgia,Cambria,"Times New Roman",Times,serif!font-mono|font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace!sticky|position:-webkit-sticky;position:sticky')){let[t,r]=e.split("|");g[t]=r}for(let e of i("float-right!float-left!float-none!clear-left!clear-right!clear-both!clear-none"))g[e]=e.replace("-",":");for(let e of i("block!flow-root!inline-block!inline!flex!grid!inline-grid!table!table-caption!table-cell!table-column!table-column-group!table-footer-group!table-header-group!table-row-group!table-row")){let t=e;"flex"===e?t="-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex":"inline-flex"===e?t="-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex":"grid"===e?t="-ms-grid;display:grid":"inline-grid"===e&&(t="-ms-inline-grid;display:inline-grid"),g[e]="display:"+t}for(let e of i("static!fixed!absolute!relative"))g[e]="position:"+e;let w,u,h,$,y,k,v,z,R,j,N,S=i("f7fafc!edf2f7!e2e8f0!cbd5e0!a0aec0!718096!4a5568!2d3748!1a202c!fff5f5!fed7d7!feb2b2!fc8181!f56565!e53e3e!c53030!9b2c2c!742a2a!fffaf0!feebc8!fbd38d!f6ad55!ed8936!dd6b20!c05621!9c4221!7b341e!fffff0!fefcbf!faf089!f6e05e!ecc94b!d69e2e!b7791f!975a16!744210!f0fff4!c6f6d5!9ae6b4!68d391!48bb78!38a169!2f855a!276749!22543d!e6fffa!b2f5ea!81e6d9!4fd1c5!38b2ac!319795!2c7a7b!285e61!234e52!ebf8ff!bee3f8!90cdf4!63b3ed!4299e1!3182ce!2b6cb0!2c5282!2a4365!ebf4ff!c3dafe!a3bffa!7f9cf5!667eea!5a67d8!4c51bf!434190!3c366b!faf5ff!e9d8fd!d6bcfa!b794f4!9f7aea!805ad5!6b46c1!553c9a!44337a!fff5f7!fed7e2!fbb6ce!f687b3!ed64a6!d53f8c!b83280!97266d!702459"),C=i("gray!red!orange!yellow!green!teal!blue!indigo!purple!pink"),I=i("none!sm!nm!md!lg!full"),E=s({l:"left",r:"right",t:"top",b:"bottom"}),M=e=>{let t;if($){let o=C.indexOf(h);if(t=S[9*o+(Number($[0])-1)],t){let r=e+`:rgba(${parseInt(t.slice(0,2),16)},${parseInt(t.slice(2,4),16)},${parseInt(t.slice(4,6),16)},var(--${e}-opacity,1))`;j=e+`:#${t};`+r}else"opacity"===h&&r($)&&(j=`--${e}-opacity:`+("100"===$?"1":$/100))}else if(h){let r=h.slice(0,3);r.startsWith("#")||l("rgb!hsl",r)||l("transparent!current",h)?j=e+":"+h:("black"===h?t="#000":"white"===h&&(t="#fff"),t&&(j=e+":"+t))}},O=()=>{if(l("auto!initial!inherit",y)&&!o(y)){let e=R+y;$?"y"===h?j=`top:${e};bottom:`+e:"x"===h&&(j=`left:${e};right:`+e):h&&(j="inset"===u?`top:${e};right:${e};bottom:${e};left:`+e:u+":"+e)}},T=()=>{let e;r(h)?e=h+"ms":o(h)&&(e=h),e&&(j=`-webkit-transition-${u}:${e};-o-transition-${u}:${e};transition-${u}:`+e)},P=s({object:()=>{l("contain!cover!fill!none!bottom",v)?j=`-o-object-fit:${v};object-fit:`+v:l("bottom!center!left!left-bottom!left-top!right!right-bottom!right-top!top",v)&&(v=v.replace("-"," "),j=`-o-object-position:${v};object-position:`+v)},overflow:()=>{j=k+":"+y},clearfix:()=>{p="clearfix::after",j='content:"";display:table;clear:both'},text:()=>{let e=a("xs!sm!base!lg!xl",h);if(e>-1)j=`font-size:${.75+.125*e}rem`;else if(h.endsWith("xl")){let[e]=h.split("x");r(e)&&(j=`font-size:${Number(e)-2}rem`)}else M("color")},font:()=>{let e=a("hairline!thin!light!normal!medium!semibold!bold!extrabold!black",h);e>-1?j="font-weight:"+100*(1+e):r(h)&&(j="font-weight:"+h)},whitespace:()=>{l("normal!pre!pre-line!pre-wrap",v)&&(j="white-space:"+v)},inset:O,top:O,right:O,bottom:O,left:O,flex:()=>{let e=(e,t=1,r="0%")=>`-webkit-box-flex:${e};-ms-flex:${e} ${t} ${r};flex:${e} ${t} `+r;if(l("row!row-reverse!col!col-reverse",v))v=v.replace("col","column"),j=`-webkit-box-orient:${"row"===h?"horizontal":"vertical"};-webkit-box-direction:${"reverse"===$?$:"normal"};-ms-flex-direction:${v};flex-direction:${v}`;else if(l("no-wrap!flex-wrap!wrap-reverse",v))"no-wrap"===v&&(v="nowrap"),j=`-ms-flex-wrap:${v};flex-wrap:${v}`;else if(l("grow!shrink",h)){let e=$||1;j="grow"===h?`-webkit-box-flex:${e};-ms-flex-positive:${e};flex-grow:${e}`:`-ms-flex-negative:${e};flex-shrink:${e}`}else j="initial"===v?e(0,1,"auto"):"auto"===v?e(1,1,"auto"):"none"===v?"-webkit-box-flex:0;-ms-flex:none;flex:none":4===z?e(h,$,w[3]):$?e(h,$):e(h)},order:()=>{if(r(h)){let e=R+h;j=`-webkit-box-ordinal-group:${Number(e)+1};-ms-flex-order:${e};order:`+e}},grid:()=>{r($)&&(j=s({cols:`-ms-grid-columns:(minmax(0,1fr))[${$}];grid-template-columns: repeat(${$}, minmax(0, 1fr))`,span:`-ms-grid-column-span:${$};grid-column: span ${$} / span `+$,start:`-ms-grid-column:${$};grid-column-start:`+$,end:`-ms-grid-column-span:${$};grid-column-end:`+$,rows:`-ms-grid-rows:(minmax(0,1fr))[${$}];grid-template-rows: repeat(${$}, minmax(0, 1fr))`})[h])},row:()=>{o($)&&(j=s({span:`-ms-grid-row-span:${$};grid-row: span ${$} / span ${$}`,start:`-ms-grid-row:${$};grid-row-start:`+$,end:`-ms-grid-row-span:${$};grid-row-end:`+$,gap:"row-gap:"+n($)})[h])},col:()=>{if(r($)&&("span"===h?j=`-ms-grid-column-span:${$};grid-column:span ${$} / span ${$};`:"start"===h?j=`-ms-grid-column:${$};grid-column-start:${$}`:"end"===h&&(j=`-ms-grid-column-span:${$};grid-column-end:${$}`)),o($)&&"gap"===h){let e="px"===$?"1px":n($);j=`-webkit-column-gap:${e};-moz-column-gap:${e}column-gap:`+e}},gap:()=>{o(h)&&(j="gap:"+n(h))},space:()=>{if(N=[">:not(template)~:not(template)"],"px"===$&&($="1px"),$)if(o($)){let e=n($);"x"===h?j=`margin-right:calc(${e}*var(--space-x-reverse,0));margin-left:calc(${e}*(1 - var(--space-x-reverse,0)))`:"y"===h&&(j=`margin-top:calc(${e}*(1 - var(--space-y-reverse,0)));margin-bottom:calc(${e}*var(--space-y-reverse,0))`)}else"reverse"===$&&(j=`--space-${h}-reverse:1`)},divide:()=>{if(N=[">:not(template)~:not(template)"],z<4){let e;r($)?e=$+"px":o($)?e=$:"reverse"===$?j=`--divide-${h}-reverse:1`:h&&(e="1px"),e&&("y"===h?j=`border-top-width:calc(${e}*calc(1 - var(--divide-y-reverse,0)));border-bottom-width:calc(${e}*var(--divide-y-reverse,0)))`:"x"===h&&(j=`border-right-width:calc(${e}*var(--divide-x-reverse,0));border-left-width:calc(${e}*calc(1 - var(--divide-x-reverse,0)))`))}j||M("border-color")},min:()=>{!o($)||"w"!==h&&"h"!==h||(j=`min-${"w"===h?"width":"height"}:`+$)},max:()=>{if("w"===h){let e=a("xs!sm!md!lg!xl",$);e>-1?j=`max-width:${4*e+20}rem`:o($)&&(j=$.endsWith("xl")?`max-width:${8*parseInt($)+24}rem`:"max-width:"+$)}else"h"===h&&o($)&&(j="max-height:"+$)},tracking:()=>{o(h)&&(j="letter-spacing:"+h)},leading:()=>{r(h)?j=`line-height:${.25*Number(h)}rem`:o(h)&&(j="line-height:"+h)},placeholder:()=>{N.push("::placeholder"),M("color")},align:()=>{l("baseline!top!middle!bottom!text-top!text-bottom",v)&&(j="vertical-align:"+v)},bg:()=>{v=v.replace("-"," "),l("bottom!center!left!left bottom!left top!right!right bottom!right top!top",v)?j="background-position:"+v:l("repeat!no-repeat!repeat-x!repeat-y",v)?j="background-repeat:"+v:l("repeat-round!repeat-space",v)?j="background-repeat:"+$:l("auto!cover!contain",v)?j="background-size:"+v:l("fixed!local!scroll",h)?j="background-attachment:"+h:M("background-color")},rounded:()=>{let e,t=I.indexOf(y);if(o(y)?(e=y,t=9):5===t?e="9999px":t>-1?e=.125*t+"rem":(!h||E[h]||l("t!b",h[0])&&l("r!l",h[1]))&&(e="0.25rem"),e){let r=E[h[0]];j=!h||!$&&t>-1?"border-radius:"+e:l("t!b",h)?`border-${r}-left-radius:${e};border-${r}-right-radius:`+e:l("l!r",h)?`border-top-${r}-radius:${e};border-bottom-${r}-radius:`+e:`border-${r}-${E[h[1]]}-radius:`+e}},border:()=>{let e=E[h];$&&e?r($)?j=`border-${e}-width:${$}px`:o($)&&(j=`border-${e}-width:`+$):l("solid!dashed!dotted!double!none",h)?j="border-style:"+h:e?j=`border-${e}-width:1px`:r(h)?j=`border-width:${h}px`:o(h)?j="border-width:"+h:M("border-color")},opacity:()=>{r(h)&&(j="opacity:"+100/h)},transition:()=>{let e=e=>`-webkit-transition-property:${e};-o-transition-property:${e};transition-property:`+e,t=e=>`-webkit-transition-property:-webkit-${e};transition-property:-webkit-${e};-o-transition-property:${e};transition-property:${e};transition-property:${e},-webkit-${e}`;h?"colors"===h?j=e("background-color,border-color,color,fill,stroke"):"shadow"===h?j=t("box-shadow"):"transform"===h?j=t("transform"):h&&(j=e(h)):(j="-webkit-transition-property:S-webkit-box-shadow,-webkit-transform;transition-property:S-webkit-box-shadow,-webkit-transform;-o-transition-property:Sbox-shadow,transform;transition-property:Sbox-shadow,transform;transition-property:Sbox-shadow,transform,-webkit-box-shadow,-webkit-transform",j=j.replace(/S/g,"background-color,border-color,color,fill,stroke,opacity,"))},duration:T,delay:T,ease:()=>{let e=e=>`-webkit-transition-timing-function:${e};-o-transition-timing-function:${e};transition-timing-function:${e}`;"in"===v?j=e("cubic-bezier(0.4,0,1,1)"):"out"===v?j=e("cubic-bezier(0,0,0.2,1)"):"in-out"===v?j=e("cubic-bezier(0.4,0,0.2,1)"):"linear"===v&&(j=e("linear"))},scale:()=>{if(r(y)){let e=y/100;j=l("x!y",h)?`--transform-scale-${h}:`+e:`--transform-scale-x:${e};--transform-scale-y:`+e}},rotate:()=>{r(h)&&(j=`--transform-rotate:${R}${h}deg`)},translate:()=>{if(l("x!y",h)){if("px"===$)$="1px";else if("full"===$)$="100%";else if($.includes("/")){let e=$.split("/");2===e.length&&($=Number(e[0])/Number(e[1])+"%")}o($)&&(j=`--transform-translate-${h}:`+n($))}},skew:()=>{l("x!y",h)&&r($)&&(j=`--transform-skew-${h}:${R+$}deg`)},transform:()=>{let e="translatex(var(--transform-translate-x,0))translatey(var(--transform-translate-y,0))rotate(var(--transform-rotate,0))skewx(var(--transform-skew-x,0))skewy(var(--transform-skew-y,0))scalex(var(--transform-scale-x,1))scaley(var(--transform-scale-y,1))";j=`-webkit-transform:${e};-ms-transform:${e};transform:translatex(var(--transform-translate-x,0))translatey(var(--transform-translate-y,0))rotate(var(--transform-rotate,0))skewx(var(--transform-skew-x,0))skewy(var(--transform-skew-y,0))scalex(var(--transform-scale-x,1))scaley(var(--transform-scale-y,1))`},origin:()=>{l("center!top!top-right!right!bottom-right!bottom!bottom-left!left!top-left",v)&&(v=v.replace("-"," "),j=`-webkit-transform-origin:${v};-ms-transform-origin:${v};transform-origin:`+v)},cursor:()=>{l("auto!default!pointer!wait!text!move!not-allowed",v)&&(j="cursor:"+v)},box:()=>{if("shadow"===h){let e=s({xs:"0 0 0 1pxR.05)",sm:"0 1px 2px 0R.05)","":"0 1px 3px 0R.1), 0 1px 2px 0R.06)",md:"0 4px 6px -1pxR.1), 0 2px 4px -1pxR.06)",lg:"0 10px 15px -3pxR.1), 0 4px 6px -2pxR.05)",xl:"0 20px 25px -5pxR.1), 0 10px 10px -5pxR.04)","2xl":"0 25px 50px -12pxR.25)",inner:"inset 0 2px 4px 0R.06)",outline:"0 0 0 3px rgba(66, 153, 225, 0.5)",none:"none"})[$];e&&(e=e.replace(/R/g," rgba(0, 0, 0, 0"),j=`-webkit-box-shadow:${e};box-shadow:`+e)}},outline:()=>{h&&(j="outline:"+v.replace("-"," "))},pointer:()=>{h&&(j="pointer-events:"+h)},select:()=>{l("none!auto!text!contain!all!inherit!initial!unset",v)&&(j=`-webkit-user-select:${v};-moz-user-select:${v};-ms-user-select:${v};user-select:`+v)},fill:()=>{h&&(j="fill:"+h)},stroke:()=>{r(h)?j="stroke-width:"+h:h&&(j="stroke:"+h)},items:()=>{l("stretch!start!center!end!baseline",v)&&(j=`-webkit-box-align:${v};-ms-flex-align:${v};align-items:`+(l("start,end",v)?"flex-":"")+v)},content:()=>{if(l("start!center!end!between!around")){let e=v;l("start,end",v)?v="flex-"+v:"between"===v?(e="justify",v="space-"+v):"around"===v&&(e="distribute",v="space-"+v),j=`-ms-flex-line-pack:${e};align-content:`+v}},self:()=>{if(l("auto!start!center!end!stretch",v)){let e=`-ms-grid-row-align:${v};`,t=v;l("start!end",v)&&(v="flex-"+v,e=""),j=`-ms-flex-item-align:${t};${e}align-self:`+v}},justify:()=>{if(l("start!center!end!between!around",v)){let e=v;"between"===e?(e="justify",v="space-"+v):l("start!end")&&(v="flex-"+v);let t=`-webkit-box-pack:${e};`;"around"===e&&(e="distribute",v="space-"+v,t=""),j=t+`-ms-flex-pack:${e};justify-content:`+v}}}),W=/[^:]+::?|.+/g;function U(){if(e=t,j="",R="",p=f,N=f.match(W),f=N.pop(),N=N.map(e=>e.endsWith("::")?"::"+e.slice(0,-2):":"+e.slice(0,-1)),N.length>0){let t=m.get(N[0].slice(1));t&&(e=t,N.shift())}let a;if("-"===f[0]&&(R="-",f=f.slice(1)),w=f.split("-"),z=w.length,[u,h="",$=""]=w,y=w[z-1],k=w.slice(0,-1).join("-"),v=w.slice(1).join("-"),!(j=g[f])&&(a=P[u])?a():u.length<3&&function(){let e;if("px"===h)e=R+"1px";else if("full"===h)e="100%";else if("screen"===h)"w"===u?e="100vw":"h"===u&&(e="100vh");else if(r(h))e=R+.25*Number(h)+"rem";else if(h.indexOf("/")>-1){let[t,o]=h.split("/");r(t)&&r(o)&&(e=R+(Number(t)/Number(o)).toFixed(6)+"%")}else o(h)&&(e=R+h);let t=x[u[0]],i=E[u[1]];e&&t&&(j="x"===u[1]?t+`-right:${e};${t}-left:`+e:"y"===u[1]?t+`-top:${e};${t}-bottom:`+e:i?t+`-${i}:`+e:t+":"+e)}(),j)A(j);else if("container"===f){A("width:100%");let t=i("640px!768px!1024px!1280px");m.values().forEach((r,o)=>{e=r,A("max-width:"+t[o])})}else!function(){if(e!==t)for(let t of document.styleSheets)for(let r of t.cssRules)if(r.type===CSSRule.STYLE_RULE&&r.selectorText.split(",").map(e=>e.trim()).includes("."+f))return f=p.replace(/[.:]/g,"\\$&"),void e.insertRule(`.${f}${r.cssText.slice(r.cssText.indexOf("{"))}`,e.length)}()}let L=s({"::placeholder":"::-webkit-input-P!::-moz-P!:-ms-input-P!::-ms-input-P".replace(/P/g,"placeholder"),"::selection":":::-moz-selection"});function A(t){if(f=p.replace(/[.:()%,#]/g,"\\$&"),N.length>0){for(const e of[...N]){let t=L[e];t&&N.push(...i(t))}for(let r of N){l(":first!:last",r)?r+="-child":l(":odd!:even",r)?r=`:nth-child(${r.slice(1)})`:r.startsWith(":group")&&(f=r.slice(1).replace("-",":")+" ."+f,r="");try{e.insertRule(`.${f}${r}{${t}}`,e.length)}catch(e){console.log(e)}}}else try{e.insertRule(`.${f}{${t}}`,e.length)}catch(e){console.log(e)}}export{b as processClasses};
//# sourceMappingURL=runcss.modern.js.map