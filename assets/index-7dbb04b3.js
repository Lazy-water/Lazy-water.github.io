function o(t,i){var s;const{selectAll:l=!1,scope:e}=i||{},n=((s=e==null?void 0:e.vnode)==null?void 0:s.el)||document;if(!l){let u=n.querySelector(t);return u||(t.startsWith(".")&&n.classList.contains(t.substring(1))||t.startsWith("#")&&n.id===t.substring(1))&&(u=n),u}return n.querySelectorAll(t)}function g(t){return new Promise(i=>{const{el:l,selector:e,selectAll:n=!1,scope:s}=t||{};if(l){i(l.getBoundingClientRect());return}if(!e){i(null);return}if(!n){const r=o(e,{scope:s});i(r==null?void 0:r.getBoundingClientRect());return}const u=o(e,{scope:s,selectAll:n}),c=[];u.forEach(r=>{c.push(r.getBoundingClientRect())}),i(c)})}export{o as a,g};
