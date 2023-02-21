(()=>{var t={533:()=>{var t=document.querySelector("#open-settings"),e=document.querySelector("#close-settings"),n=document.querySelector("#settings-window"),r=document.querySelector(".page");t.addEventListener("click",(function(t){t.preventDefault(),n.classList.remove("modal--closed"),r.classList.add("modal--open")})),e.addEventListener("click",(function(t){t.preventDefault(),n.classList.add("modal--closed"),r.classList.remove("modal--open")}))},962:()=>{document.querySelector("#print-button").addEventListener("click",(function(t){t.preventDefault(),window.print()}))}},e={};function n(r){var l=e[r];if(void 0!==l)return l.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";var t={materialName:["Foundation blocks 2-2-4","Decking board 36x145 mm","Support board 45x195 mm","Support board  45x95 mm","Metal corner 90x90 mm","Screws 4,2x50 mm"],amounts:["0","0","0","0","0","0"],prices:["3.1","2.3","2.1","1.5","1.5","0.2"],units:["pc","m","m","m","pc","pc"],costs:["0","0","0","0","0","0"]};var e=document.querySelector("#error").content.querySelector(".error");const r=function(t,n,r,l){if(1!=t){var o=e.cloneNode(!0);o.querySelector("span").textContent=t,function(t,e,n){t.querySelector("button").addEventListener("click",(function(){t.remove()})),e.addEventListener("click",(function(){t.remove()})),n&&n.addEventListener("click",(function(){t.remove()}))}(o,r,l),document.querySelector("body").appendChild(o);var u=o.getBoundingClientRect(),c=n.getBoundingClientRect();o.style.left=c.x+c.width-u.width+"px",o.style.top=c.y+c.height+18+"px"}};var l=document.querySelector("#settings-table-row").content.querySelector(".table__row"),o=document.querySelector("#settings-table").querySelector("tbody"),u=document.querySelector("#set-settings"),c=document.querySelector("#close-settings"),i=function(t){var e=t.materialName,n=t.prices,r=t.units;o.textContent="",e.forEach((function(t,e){var u=function(t,e,n,r){var o=l.cloneNode(!0);return o.querySelector(".table__col--number").textContent=t+".",o.querySelector(".table__col--name").textContent=e,o.querySelector(".table__col--amount").textContent="1 "+r,o.querySelector(".settings__input").value=n,o.querySelector(".settings__input").id="material-"+t,o}(e+1,t,n[e],r[e]);o.appendChild(u)}))};u.addEventListener("click",(function(e){e.preventDefault(),o.querySelectorAll(".settings__input").forEach((function(e,n){var l,o=e.value,i=(l=o,!!Number.isInteger(1*l)||"Price must be a number");!0===i?t.prices[n]=o:r(i,e,u,c),console.log(i)})),i(t)})),i(t),n(533);var a=function(t){return Math.ceil(t/.6+1)},s=function(t){return Math.ceil(2*a(t)-2)};const d=a,m=s;var S=document.querySelector("#estimate-table-row").content.querySelector(".table__row"),b=document.querySelector("#estimate-table").querySelector("tbody"),v=function(t,e,n,r,l,o){var u=S.cloneNode(!0);return u.querySelector(".table__col--number").textContent=t,u.querySelector(".table__col--name").textContent=e,u.querySelector(".table__col--amount").textContent=n+" "+r,u.querySelector(".table__col--cost").textContent=l+" $",o&&(u.querySelector(".table__col--number").classList.add(o),u.querySelector(".table__col--name").classList.add(o),u.querySelector(".table__col--amount").classList.add(o),u.querySelector(".table__col--cost").classList.add(o)),u};var p=200/3,f=250/3,N=50/3,y="#b79055",h="#c3c3c3",A="#000",q="http://www.w3.org/2000/svg",_=document.querySelector("#side-view"),x=document.querySelector("#front-view"),g=document.createElementNS(q,"svg"),C=document.createElementNS(q,"svg"),w=function(t,e){var n=document.createElementNS(q,"rect");n.setAttributeNS(null,"width",f/1.65),n.setAttributeNS(null,"height",p/5),n.setAttributeNS(null,"x",t),n.setAttributeNS(null,"y",e),n.setAttributeNS(null,"fill",y),n.setAttributeNS(null,"stroke",A),g.appendChild(n)},E=function(t,e,n){var r=document.createElementNS(q,"rect");r.setAttributeNS(null,"width",n+50),r.setAttributeNS(null,"height",p/5),r.setAttributeNS(null,"x",t),r.setAttributeNS(null,"y",e),r.setAttributeNS(null,"fill",y),r.setAttributeNS(null,"stroke",A),C.appendChild(r)},k=function(t){var e=document.createElementNS(q,"polygon");e.setAttributeNS(null,"points",t),e.setAttributeNS(null,"fill",y),e.setAttributeNS(null,"stroke",A),g.appendChild(e)},L=function(t,e){var n=document.createElementNS(q,"rect");n.setAttributeNS(null,"width",N),n.setAttributeNS(null,"height",53.333333333333336),n.setAttributeNS(null,"x",t),n.setAttributeNS(null,"y",e),n.setAttributeNS(null,"fill",y),n.setAttributeNS(null,"stroke",A),C.appendChild(n)},M=function(t,e){var n=document.createElementNS(q,"rect");n.setAttributeNS(null,"width",p),n.setAttributeNS(null,"height",p),n.setAttributeNS(null,"x",t),n.setAttributeNS(null,"y",e),n.setAttributeNS(null,"fill",h),n.setAttributeNS(null,"stroke",A),C.appendChild(n)},D=function(t,e,n,r,l){var o=document.createElementNS(q,"line");o.setAttributeNS(null,"x1",t),o.setAttributeNS(null,"y1",e),o.setAttributeNS(null,"x2",n),o.setAttributeNS(null,"y2",r),o.setAttributeNS(null,"stroke",A),l.appendChild(o)};const F=function(t,e){(function(t){var e,n,r=t*p+200,l=t*f+250,o=[f,r-p];g.textContent="",g.setAttributeNS(null,"viewBox","0 0 "+l+" "+r),_.appendChild(g);var u=o.slice();e=o[0]+","+o[1]+" ";for(var c=0;c<t;c++)u[1]=u[1]-p,e=e+u[0]+","+u[1]+" ",u[0]=u[0]+f,e=e+u[0]+","+u[1]+" ";u[1]=u[1]+p/4,e=e+u[0]+","+u[1]+" ",u[1]=o[1],u[0]=o[0]+f/4,e=e+u[0]+","+u[1]+" ",k(e),(u=o.slice())[0]=u[0]+f/4,n=u[0]+","+u[1]+" ",u[0]=u[0]+f/1.64,n=n+u[0]+","+u[1]+" ",u[0]=o[0]+f*t,u[1]=o[1]-p*t+p/1.17,n=n+u[0]+","+u[1]+" ",u[1]=o[1]-p*t+p/4,n=n+u[0]+","+u[1]+" ",k(n);for(var i,a,s,d=o[0]-f/5,m=o[1]-p-p/5,S=f/1.66,b=0;b<=t;b++){var v=f*b,N=p*b,y=p/5;b!=t?(w(d+v,m-N),w(d+v+S,m-N)):(w(d+v+y,m-N),w(d+v+y+S,m-N))}i=o[0],a=o[1]-p/5,(s=document.createElementNS(q,"rect")).setAttributeNS(null,"width",f/.83),s.setAttributeNS(null,"height",p),s.setAttributeNS(null,"x",i),s.setAttributeNS(null,"y",a),s.setAttributeNS(null,"fill",h),s.setAttributeNS(null,"stroke",A),g.appendChild(s);var x=o[0],C=o[1]+p/20,E=x-f/2,L=C;D(x,C,E,L,g),x=o[0]+f/.83,C=o[1]+p/20,D(x,C,E=x+f*t,L=C,g),x=o[0]+f*t,C=o[1]+p/20,E=x,L=o[1]-p*t-p,D(x,C,E,L,g)})(t),function(t,e){var n=t*p+200,r=e*N*20+100,l=[50,n-p];C.textContent="",C.setAttributeNS(null,"viewBox","0 0 "+r+" "+n),x.appendChild(C);for(var o=l[0]-N,u=l[1]-p-p/5,c=0;c<=t;c++)E(o,u-p*c,e*N*20);for(var i=Math.ceil(e/.6)+1,a=e*N*20/(i-1),s=0;s<i;s++)for(var d=l[0]+a*s,m=0;m<t;m++)L(d,l[1]-p-p*m);for(var S=0;S<i;S++)M(l[0]-p/2+N/2+a*S,l[1]-p/5);for(var b=-1;b<i;b++){var v=l[0]+a*b+p/2+N/2,f=l[1]+p/20;D(v,f,v+a-p,f,C)}var y=l[0],h=y,A=l[1]-p*t-p/5,q=A-p+p/5;D(y,A,h,q,C),D(y=l[0]+e*N*20+N,A=l[1]-p*t-p/5,h=y,q=A-p+p/5,C)}(t,e)};var B,T,I,R,P,$=document.querySelector("#number-of-steps"),j=document.querySelector("#ladder-length"),z=document.querySelector("#parameters-submit");z.addEventListener("click",(function(e){e.preventDefault();var n,l=$.value,o=j.value,u=!!((n=l)>=1&&n<=7&&Number.isInteger(1*n))||"Enter whole number from 1 to 7",c=function(t){return t>=.5&&t<=6||"Length must be a number from 0 to 6"}(o);!0===u&&!0===c?(e.preventDefault(),function(){var t=$.value,e=j.value;B=d(e),T=function(t,e){return Math.ceil(2*t*e)}(e,t),I=function(t,e){return Math.ceil(.3*e*a(t))}(e,t),R=m(e),P=function(t,e){var n=a(t),r=2*e,l=s(t);return Math.ceil(r*n*2+8*l)}(e,t)}(),t.amounts[0]=B,t.amounts[1]=T,t.amounts[2]=I,t.amounts[3]=I,t.amounts[4]=R,t.amounts[5]=P,t.costs.forEach((function(e,n){var r=t.amounts[n]*t.prices[n];t.costs[n]=r.toFixed(1)})),F(l,o),function(t){var e,n=t.materialName,r=t.amounts,l=t.units,o=t.costs;b.textContent="",n.forEach((function(t,n){e=v(n+1,t,r[n],l[n],o[n]),b.appendChild(e)}));var u=t.costs.slice().reduce((function(t,e){return 1*t+1*e}));e=v("","Total by materials","","",u.toFixed(1),"table__col--mat"),b.appendChild(e);var c=Math.ceil(.9*u);e=v("","Total by work","","",c.toFixed(1),"table__col--work"),b.appendChild(e),e=v("","","Total","",(u+c).toFixed(1),"table__col--total"),b.appendChild(e)}(t)):(r(u,$,z),r(c,j,z))})),n(962)})()})();