(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{6230:function(e){e.exports="object"==typeof self?self.FormData:window.FormData},559:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/addcar",function(){return t(8385)}])},8385:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),a=t(7294),i=t(7568),o=t(4924),p=t(6042),u=t(9396),c=t(4051),s=t.n(c),m=t(6154),d=t(6230),g=t.n(d);function f(){var e=(0,a.useState)({name:"",year:"",color:"",price:"",driving:"",image:null,mainimage:"",secondimage:"",thirdimage:"",country:"",mileage:"",description:"",equipment:""}),n=e[0],t=e[1],c=function(e){var n=e.target,r=n.name,a=n.value,i=n.files,c=new(g());i&&c.append("image",i[0]),c.append(r,a),t((function(e){return(0,u.Z)((0,p.Z)({},e),(0,o.Z)({},r,i?i[0]:a))}))};console.log(n);var d=function(){var e=(0,i.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(r=new(g())).append("name",n.name),r.append("year",n.year),r.append("color",n.color),r.append("price",n.price),r.append("driving",n.driving),r.append("image",n.image),r.append("mainimage",n.mainimage),r.append("secondimage",n.secondimage),r.append("thirdimage",n.thirdimage),r.append("country",n.country),r.append("mileage",n.mileage),r.append("description",n.description),r.append("equipment",n.equipment),e.prev=15,e.next=18,m.Z.post("http://localhost:5000/api/post",r,{headers:{"Content-Type":"multipart/form-data"}});case 18:a=e.sent,console.log(a.data),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(15),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[15,22]])})));return function(n){return e.apply(this,arguments)}}();return(0,r.jsxs)("form",{onSubmit:d,enctype:"multipart/form-data",children:[(0,r.jsx)("input",{type:"text",name:"name",onChange:c}),(0,r.jsx)("input",{type:"number",name:"year",onChange:c}),(0,r.jsx)("input",{type:"text",name:"color",onChange:c}),(0,r.jsx)("input",{type:"number",name:"price",onChange:c}),(0,r.jsx)("input",{type:"text",name:"driving",onChange:c}),(0,r.jsx)("input",{type:"file",name:"image",onChange:c}),(0,r.jsx)("input",{type:"text",name:"mainimage",onChange:c}),(0,r.jsx)("input",{type:"text",name:"secondimage",onChange:c}),(0,r.jsx)("input",{type:"text",name:"thirdimage",onChange:c}),(0,r.jsx)("input",{type:"text",name:"country",onChange:c}),(0,r.jsx)("input",{type:"number",name:"mileage",onChange:c}),(0,r.jsx)("input",{type:"text",name:"description",onChange:c}),(0,r.jsx)("input",{type:"text",name:"equipment",onChange:c}),(0,r.jsx)("button",{type:"submit",children:"Submit"})]})}function l(){return(0,r.jsx)(f,{})}},7568:function(e,n,t){"use strict";function r(e,n,t,r,a,i,o){try{var p=e[i](o),u=p.value}catch(c){return void t(c)}p.done?n(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,i){var o=e.apply(n,t);function p(e){r(o,a,i,p,u,"next",e)}function u(e){r(o,a,i,p,u,"throw",e)}p(void 0)}))}}t.d(n,{Z:function(){return a}})},9396:function(e,n,t){"use strict";function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[876,154,774,888,179],(function(){return n=559,e(e.s=n);var n}));var n=e.O();_N_E=n}]);