'use strict';

const e=new Map,t=({element:t,target:o})=>{const d=t.querySelectorAll(o||":scope *"),r=d[0];t.tabIndex=-1,d.forEach(e=>e.tabIndex=-1),r.tabIndex=0,e.set(t,{targets:d,active:r,index:0});const c=n=>{e.get("last_rover")!=t&&(s(t,e.get(t).active),e.set("last_rover",t));};t.addEventListener("focusin",c);const i=e=>{switch(e.keyCode){case 39:case 40:e.preventDefault(),n(t);break;case 37:case 38:e.preventDefault(),a(t);}};t.addEventListener("keydown",i);const v=n=>{t.removeEventListener("focusin",c),t.removeEventListener("keydown",i),t.removeEventListener("DOMNodeRemoved",v),e.delete(t),d.forEach(e=>e.tabIndex="");};t.addEventListener("DOMNodeRemovedFromDocument",v);},n=t=>{const n=e.get(t);n.index+=1,n.index>n.targets.length-1&&(n.index=n.targets.length-1);let a=n.targets[n.index];a&&s(t,a);},a=t=>{const n=e.get(t);n.index-=1,n.index<1&&(n.index=0);let a=n.targets[n.index];a&&s(t,a);},s=(t,n)=>{const a=e.get(t);a.active.tabIndex=-1,a.active=n,a.active.tabIndex=0,a.active.focus();};

document.querySelectorAll(".scroll-slider").forEach((scroller) =>
    t({
        element: scroller,
        target: "a",
    })
);
