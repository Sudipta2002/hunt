"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[509],{4509:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(4165),r=t(5861),s=t(9439),i=t(2791),o=t(7689),u=t(8722),l=t(7976),c=t(1243),p=t(184);var d=function(e){var n=e.setSignup,t=(0,i.useState)(""),d=(0,s.Z)(t,2),m=d[0],h=d[1],f=(0,i.useState)(""),g=(0,s.Z)(f,2),v=g[0],w=g[1],x=(0,i.useState)(!1),j=(0,s.Z)(x,2),b=(j[0],j[1],(0,o.s0)()),S=(0,u.a)().setisAdmin,Z=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log("Form submitted with email: "+m+" and password: "+v),e.prev=2,t={headers:{"Content-type":"application/json"}},e.next=6,c.Z.post("http://localhost:5000/api/v1/signIn",{email:m,password:v},t);case 6:r=e.sent,s=r.data,localStorage.setItem("userInfo",JSON.stringify(s)),"Admin@2023"===s.username&&S(!0),b("/game"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n){return e.apply(this,arguments)}}();return(0,p.jsxs)("form",{className:"login-form",onSubmit:Z,children:[(0,p.jsx)("h2",{children:"Log in"}),(0,p.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,p.jsx)("input",{type:"email",id:"email",name:"email",value:m,onChange:function(e){return h(e.target.value)},required:!0}),(0,p.jsx)("label",{htmlFor:"password",children:"Password:"}),(0,p.jsx)("input",{type:"password",id:"password",name:"password",value:v,onChange:function(e){return w(e.target.value)},required:!0}),(0,p.jsx)("button",{type:"submit",children:"Log in"}),(0,p.jsxs)("p",{children:["Don't have an account ? ",(0,p.jsx)(l.Z,{onClick:function(){return n(!0)},className:"sign",children:"Signup"})]})]})}}}]);
//# sourceMappingURL=509.a0db5ecf.chunk.js.map