(function(){"use strict";const r=new Map,i=window.getComputedStyle(document.documentElement).direction==="rtl",c={LEFT:37,UP:38,RIGHT:39,DOWN:40},l=t=>{const{currentTarget:e}=t;r.get("last_rover")!=e&&r.has(e)&&(o(e,r.get(e).active),r.set("last_rover",e))},v=t=>{const{currentTarget:e}=t;switch(t.keyCode){case c[i?"LEFT":"RIGHT"]:case c.DOWN:t.preventDefault(),x(e);break;case c[i?"RIGHT":"LEFT"]:case c.UP:t.preventDefault(),f(e)}},g=new MutationObserver((t,e)=>{t.filter(n=>n.removedNodes.length>0).forEach(n=>{[...n.removedNodes].filter(a=>a.nodeType===1).forEach(a=>{r.forEach((d,s)=>{s!=="last_rover"&&a.contains(s)&&(s.removeEventListener("focusin",l),s.removeEventListener("keydown",v),r.delete(s),d.targets.forEach(E=>E.tabIndex=""),(r.size===0||r.size===1&&r.has("last_rover"))&&(r.clear(),g.disconnect()))})})})}),u=({element:t,target:e})=>{const n=t.querySelectorAll(e||":scope *"),a=n[0];t.tabIndex=-1,n.forEach(d=>d.tabIndex=-1),a.tabIndex=0,r.set(t,{targets:n,active:a,index:0}),t.addEventListener("focusin",l),t.addEventListener("keydown",v),g.observe(document,{childList:!0,subtree:!0})},x=t=>{const e=r.get(t);e.index+=1,e.index>e.targets.length-1&&(e.index=e.targets.length-1);let n=e.targets[e.index];n&&o(t,n)},f=t=>{const e=r.get(t);e.index-=1,e.index<1&&(e.index=0);let n=e.targets[e.index];n&&o(t,n)},o=(t,e)=>{const n=r.get(t);n.active.tabIndex=-1,n.active=e,n.active.tabIndex=0,n.active.focus()};document.querySelectorAll(".section-slider").forEach(t=>u({element:t,target:"a"}))})();
