(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{11:function(e,t,a){"use strict";(function(e){a.d(t,"g",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return j})),a.d(t,"d",(function(){return u})),a.d(t,"h",(function(){return b})),a.d(t,"c",(function(){return d})),a.d(t,"i",(function(){return h}));var n=a(7),r=a.n(n),c=a(9);e.fetch=a(71);var s=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-library-api.herokuapp.com/users/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:a,password:n})});case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,t(s.token),localStorage.setItem("token",s.token),localStorage.setItem("email",a),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-library-api.herokuapp.com/users/create",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-library-api.herokuapp.com/users/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-library-api.herokuapp.com/movies");case 2:return e.next=4,e.sent.json();case 4:a=e.sent,n=a.movies,t(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c,s,i,o,l,j,u,b,d,h,O;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,c=t.subtitle,s=t.genre,i=t.releaseDate,o=t.rate,l=t.description,j=t.cover,u=t.createdBy,b=t.createdAt,(d=new FormData).append("title",n),d.append("subtitle",c),d.append("genre",s),d.append("releaseDate",i),d.append("rate",o),d.append("description",l),d.append("createdAt",b),d.append("createdBy",u),d.append("cover",j),e.next=13,fetch("https://movie-library-api.herokuapp.com/movies/create",{method:"POST",headers:{Authorization:a},body:d});case 13:return h=e.sent,e.next=16,h.json();case 16:return O=e.sent,e.abrupt("return",O);case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-library-api.herokuapp.com/movies/".concat(t));case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,a(n[0]),e.abrupt("return",n[0]);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-library-api.herokuapp.com/movies/update/".concat(t),{method:"PUT",headers:{Authorization:a},body:n});case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-library-api.herokuapp.com/movies/delete/".concat(t),{method:"DELETE",headers:{Authorization:a}});case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-library-api.herokuapp.com/users/validate/".concat(t));case 2:return a=e.sent,n=a.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}).call(this,a(40))},67:function(e,t,a){},72:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(30),c=a.n(r),s=a(19),i=a(3),o=Object(n.createContext)(),l=a(0);function j(e){var t=e.children,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],s=r[1],j=Object(n.useState)(""),u=Object(i.a)(j,2),b={email:c,setEmail:s,token:u[0],setToken:u[1]};return Object(l.jsx)(o.Provider,{value:b,children:t})}var u=Object(n.createContext)();function b(e){var t=e.children,a=Object(n.useState)([]),r=Object(i.a)(a,2),c={movieList:r[0],setMovieList:r[1]};return Object(l.jsx)(u.Provider,{value:c,children:t})}a(67);var d=a(7),h=a.n(d),O=a(9),x=a(91),p=a(57),m=a(96),f=a(56),v=a(95),g=a(8),y=a(24),w=a.n(y),C=a(98),S=a(90);function k(e){var t=e.movie,a=e.setDispatch,r=e.submitNewMovie,c=e.alert,s=Object(n.useState)(),o=Object(i.a)(s,2),j=o[0],u=o[1],b=Object(n.useState)(!1),d=Object(i.a)(b,2),x=d[0],p=d[1],m=Object(n.useState)(!1),g=Object(i.a)(m,2),y=g[0],k=g[1],N=t.title,D=t.subtitle,L=t.genre,T=t.releaseDate,A=t.rate,E=t.description,F=t.cover,I=t.createdBy,z=t.createdAt;Object(n.useEffect)((function(){var e=function(e,t,a){return Object(l.jsxs)(v.a,{variant:"danger",onClose:function(){return p(!1)},dismissible:!0,children:[Object(l.jsx)(v.a.Heading,{as:"h3",children:"".concat(t," -> ").concat(e)}),Object(l.jsx)("p",{children:a})]})};c&&(p(!0),c.error?u(e(c.error,c.code,c.message)):c.success&&u(e(c.success,c.code,c.message)))}),[u,c]);var B=function(){var e=Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u("Loading..."),e.next=3,r();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(C.a,{style:{width:"25rem"},className:"card-preview",children:[Object(l.jsx)(C.a.Img,{variant:"top",src:window.URL.createObjectURL(F),className:"card-preview-img"}),Object(l.jsxs)(C.a.Body,{children:[Object(l.jsx)(C.a.Title,{children:N}),Object(l.jsx)(C.a.Subtitle,{children:D}),Object(l.jsx)(C.a.Text,{children:E}),Object(l.jsxs)(C.a.Body,{className:"card-preview-info",children:[Object(l.jsx)("h4",{children:Object(l.jsx)(S.a,{pill:!0,bg:"dark",children:L})}),Object(l.jsx)("i",{className:"fas fa-question-circle",onClick:function(){k(!y)}})]}),Object(l.jsx)("div",{style:{fontSize:"30px"},children:Object(l.jsx)(w.a,{value:A,starCount:5})}),y&&Object(l.jsxs)("div",{className:"card-preview-more-info",children:[Object(l.jsxs)("p",{children:[" ","Data de Lan\xe7amento: ".concat(T," ")," "]}),Object(l.jsxs)("p",{children:[" ","Filme adicionado por: ".concat(I)," "]}),Object(l.jsxs)("p",{children:[" ","Adicionado em: ".concat(z)," "]})]})]}),Object(l.jsxs)(C.a.Body,{fluid:"md",className:"card-preview-footer",children:[Object(l.jsx)(f.a,{variant:"success",onClick:function(){return B()},children:" Adicionar "}),Object(l.jsx)(f.a,{variant:"danger",onClick:function(){return a()},children:" Cancelar "})]}),x&&Object(l.jsx)(C.a.Footer,{className:"card-preview-alert",children:c&&j})]})}var N=a(11);a(72);function D(){var e=Object(n.useContext)(o),t=e.token,a=e.email;t&&a||(t=localStorage.getItem("token"),a=localStorage.getItem("email"));var r=Object(n.useState)({}),c=Object(i.a)(r,2),s=c[0],j=c[1],u=Object(n.useState)({}),b=Object(i.a)(u,2),d=b[0],y=b[1],C=Object(n.useState)(!1),S=Object(i.a)(C,2),D=S[0],L=S[1],T=Object(n.useState)(!1),A=Object(i.a)(T,2),E=A[0],F=A[1],I=Object(n.useState)({}),z=Object(i.a)(I,2),B=z[0],M=z[1],q=Object(n.useState)(!1),H=Object(i.a)(q,2),P=H[0],R=H[1],_=Object(n.useState)(1),G=Object(i.a)(_,2),U=G[0],J=G[1],W=Object(n.useState)(["Anima\xe7\xe3o","Com\xe9dia","Com\xe9dia Rom\xe2ntica","A\xe7\xe3o","Policial","Document\xe1rio","Drama","Faroeste","Fic\xe7\xe3o Cient\xedfica","Musical","Suspense","Terror / Horror"]),V=Object(i.a)(W,1)[0];Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.f)(a);case 2:t=e.sent,j(t.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var K=function(){var e=Object(O.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.b)(d,t);case 2:a=e.sent,M(a),a.success&&setTimeout((function(){return F(!0)}),1e3);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=(new Date).toLocaleDateString("pt-BR");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x.a,{className:"create-movie-main",children:Object(l.jsxs)("div",{style:{padding:"30px 0"},children:[Object(l.jsx)(p.a,{style:{textAlign:"center"},children:Object(l.jsx)("h1",{children:" Adicionar novo filme "})}),Object(l.jsx)(p.a,{className:"create-movie-form",children:Object(l.jsxs)(m.a,{onSubmit:function(e){e.preventDefault();var t=e.target,a=t.title,n=t.subtitle,r=t.description,c=t.genre,i=t.releaseDate,o=t.rate,l=t.cover;a.value&&n.value&&c.value&&i.value&&o.value&&r.value&&l.files[0]?(y({title:a.value,subtitle:n.value,genre:c.value,releaseDate:i.value,rate:o.value,description:r.value,cover:l.files[0],createdBy:s.username,createdAt:Q}),L(!0)):R(!0)},children:[Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h4",{children:"T\xedtulo"})}),Object(l.jsx)(m.a.Control,{type:"text",name:"title"}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h4",{children:"Subt\xedtulo"})}),Object(l.jsx)(m.a.Control,{type:"text",name:"subtitle"}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h4",{children:"G\xeanero"})}),Object(l.jsx)(m.a.Select,{name:"genre",children:V.map((function(e){return Object(l.jsx)("option",{value:e,children:e})}))}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h4",{children:"Data de lan\xe7amento"})}),Object(l.jsx)(m.a.Control,{type:"date",name:"releaseDate",max:Q,min:"1888-12-12"}),Object(l.jsxs)(m.a.Label,{children:[" ",Object(l.jsx)("h4",{children:"Avalia\xe7\xe3o"})," "]}),Object(l.jsx)(p.a,{style:{fontSize:"30px"},children:Object(l.jsx)(w.a,{name:"rate",value:U,starCount:5,onStarClick:J})}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h4",{children:"Descri\xe7\xe3o"})}),Object(l.jsx)(m.a.Control,{as:"textarea",name:"description",style:{height:"100px"}}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h4",{children:"Capa"})}),Object(l.jsx)(m.a.Control,{type:"file",name:"cover"}),Object(l.jsx)(f.a,{variant:"secondary",type:"submit",children:" Adicionar "})]})}),P&&Object(l.jsx)(v.a,{variant:"warning",onClose:function(){return R(!1)},dismissible:!0,children:Object(l.jsx)(v.a.Heading,{children:" Todos os campos precisam ser preenchidos "})})]})}),D&&Object(l.jsx)("section",{className:"card-preview-box",children:Object(l.jsx)(k,{movie:d,setDispatch:function(){L(!1),M({})},submitNewMovie:K,alert:B})}),E&&Object(l.jsx)(g.a,{to:"/"})]})}var L=a(92);function T(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),j=Object(i.a)(c,2),u=j[0],b=j[1],d=Object(n.useState)(!1),y=Object(i.a)(d,2),w=y[0],C=y[1],S=Object(n.useState)(Object(l.jsx)("p",{children:" aten\xe7\xe3o: "})),k=Object(i.a)(S,2),D=k[0],T=k[1],A=Object(n.useState)(!1),E=Object(i.a)(A,2),F=E[0],I=E[1],z=Object(n.useContext)(o),B=z.setEmail,M=z.setToken,q=function(){var e=Object(O.a)(h.a.mark((function e(t,a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.g)(M,t,a);case 2:(n=e.sent).error&&(T(Object(l.jsxs)(v.a,{variant:"danger",children:[Object(l.jsxs)("h3",{children:["Erro: ",n.error]}),Object(l.jsxs)("p",{children:["C\xf3digo: ",n.code]}),Object(l.jsxs)("p",{children:["Mensagem: ",n.message]})]})),C(!0)),n.success&&(T(Object(l.jsx)(v.a,{variant:"success",children:Object(l.jsxs)("p",{children:[" ",n.message]})})),C(!0),B(t),I(!0)),setTimeout((function(){C(!1)}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(l.jsxs)("main",{children:[Object(l.jsxs)(x.a,{children:[Object(l.jsxs)(p.a,{children:[Object(l.jsx)("h1",{children:" Movie Library "}),Object(l.jsx)(m.a,{children:Object(l.jsxs)(m.a.Group,{controlId:"userLogin",children:[Object(l.jsx)(m.a.Label,{children:"E-mail"}),Object(l.jsx)(m.a.Control,{type:"email",placeholder:"ada_love_1815@betrybe.com",onChange:function(e){return r(e.target.value)}}),Object(l.jsx)(m.a.Label,{children:" Password "}),Object(l.jsx)(m.a.Control,{type:"password",placeholder:"Senha",onChange:function(e){return b(e.target.value)}})]})})]}),Object(l.jsxs)(L.a,{children:[Object(l.jsx)(m.a.Check,{type:"checkbox",label:"Mantenha-me logado"}),Object(l.jsx)(f.a,{variant:"outline-primary",type:"button",onClick:function(){return q(a,u)},children:"Login"}),Object(l.jsx)(s.b,{to:"login/signIn",children:Object(l.jsx)("p",{children:"N\xe3o possuo uma conta :\\ "})})]})]}),w&&D,F&&Object(l.jsx)(g.a,{to:"/"})]})}var A=a(93);function E(e){var t=e.movie,a=t._id,n=t.title,r=t.rate,c=t.genre,i=t.cover;return Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsxs)("div",{className:"card movie-card",children:[Object(l.jsx)("img",{src:i,alt:"cover of ".concat(n)}),Object(l.jsx)("div",{className:"card-content movie-card-content",children:Object(l.jsx)(s.b,{to:"/".concat(a),children:Object(l.jsxs)("div",{className:"movie-card-content-data",children:[Object(l.jsx)("h4",{className:"title",style:{color:"rgb(207, 204, 204)"},children:n}),Object(l.jsx)("h6",{children:c}),Object(l.jsx)("div",{children:Object(l.jsx)(w.a,{starCount:r,value:r})})]})})})]})})}a(78);var F=a(94),I=a(48);function z(e){var t=e.setToken,a=e.setEmail,r=Object(n.useState)({}),c=Object(i.a)(r,2),o=c[0],j=c[1],u=Object(n.useState)(!1),b=Object(i.a)(u,2),d=b[0],x=b[1];return Object(l.jsx)(m.a,{className:"login-form",onSubmit:function(){var e=Object(O.a)(h.a.mark((function e(n){var r,c,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target,c=r.email,s=r.password,e.next=4,Object(N.g)(t,c.value,s.value);case 4:(i=e.sent).error?(j(i),x(!0)):(a(c),window.location.reload());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(l.jsxs)(I.a,{className:"login-form-group",style:{margin:"10px 0"},children:[Object(l.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)(m.a.Control,{className:"input",type:"email",name:"email",placeholder:"adalovelance@betrybe.com"}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-envelope"})}),Object(l.jsx)("p",{style:{fontSize:"10px",margin:"3px"},children:Object(l.jsx)(s.b,{to:"/signIn",style:{textDecoration:"none"},children:"N\xe3o possui conta? Clique aqui! "})})]}),Object(l.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)(m.a.Control,{className:"input",type:"password",name:"password",placeholder:"adalovelance@betrybe.com"}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-lock"})}),Object(l.jsx)("p",{style:{fontSize:"10px",margin:"3px"},children:Object(l.jsx)(s.b,{to:"/reset",style:{textDecoration:"none"},children:" Esqueci minha senha "})})]}),Object(l.jsx)("span",{className:"form-button-box",children:Object(l.jsx)(f.a,{variant:"success",type:"submit",children:" Logar "})}),Object(l.jsx)("div",{children:d&&Object(l.jsxs)(v.a,{variant:"danger",onClose:function(){return x(!1)},style:{width:"100%",textAlign:"center"},dismissible:!0,children:[Object(l.jsx)(v.a.Heading,{children:"Erro ".concat(o.code)}),Object(l.jsx)(v.a.Heading,{children:o.error}),Object(l.jsxs)("p",{children:[" ",o.message," "]})]})})]})})}function B(e){var t=e.user,a=e.loggout;return Object(l.jsxs)("div",{className:"card user-card",children:[Object(l.jsx)("figure",{className:"image is-128x128",children:Object(l.jsx)("img",{src:"https://www.gravatar.com/avatar/".concat(t.emailHash),title:"avatar provided by Gravatar",alt:"From Gravatar"})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("h3",{className:"title is-5",children:t.username}),Object(l.jsx)("p",{className:"title is-6",children:t.email})]}),Object(l.jsx)("footer",{className:"card-footer",children:Object(l.jsx)(f.a,{onClick:function(){return a()},className:"card-footer-item",variant:"danger",children:" Sair "})})]})}function M(){var e=Object(n.useContext)(o),t=e.email,a=e.setToken,r=e.setEmail,c=Object(n.useState)({}),j=Object(i.a)(c,2),u=j[0],b=j[1];Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.f)(t);case 2:a=e.sent,b(a.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);return Object(l.jsxs)("header",{className:"library-header",children:[Object(l.jsx)("div",{className:"logo-conteiner",style:{color:"yellow",fontSize:"30px"},children:Object(l.jsx)("i",{className:"fas fa-play"})}),Object(l.jsx)("div",{style:{color:"white"},children:Object(l.jsx)("h1",{children:" Movie Library "})}),Object(l.jsxs)("nav",{className:"button-group",children:[t&&Object(l.jsx)(s.b,{to:"/create",style:{textDecoration:"none"},children:Object(l.jsx)("h5",{style:{color:"white"},children:Object(l.jsx)("i",{class:"fas fa-plus"})})}),Object(l.jsxs)(F.a,{children:[Object(l.jsx)(F.a.Toggle,{variant:"dark",id:"dropdown-basic",children:Object(l.jsx)("h5",{style:{color:"white"},children:Object(l.jsx)("i",{className:"fas fa-user-circle"})})}),Object(l.jsx)(F.a.Menu,{className:"userMenu",children:t&&u?Object(l.jsx)(B,{user:u,loggout:function(){a(""),r(""),localStorage.clear()}}):Object(l.jsx)(z,{setToken:a,setEmail:r})})]}),Object(l.jsx)(s.b,{to:"/credits",style:{textDecoration:"none"},children:Object(l.jsx)("h5",{style:{color:"white",fontSize:"40px"},children:Object(l.jsx)("i",{className:"fas fa-info-circle"})})})]})]})}function q(){var e=Object(n.useContext)(o),t=e.setToken,a=e.setEmail,r=Object(n.useContext)(u),c=r.movieList,s=r.setMovieList;return Object(n.useEffect)((function(){var e=localStorage.getItem("token"),n=localStorage.getItem("email"),r=function(){var r=Object(O.a)(h.a.mark((function r(){return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(N.i)(e);case 2:r.sent.success?(t(e),a(n)):(t(),a(),localStorage.clear(),window.location.reload());case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();e&&r(),Object(N.e)(s)}),[a,s,t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{}),Object(l.jsx)(x.a,{children:c&&c.length>0?Object(l.jsx)("div",{className:"movie-card-group",children:c.map((function(e){return Object(l.jsx)(E,{movie:e})}))}):Object(l.jsxs)("div",{className:"spinner-box",children:[" ",Object(l.jsx)(A.a,{style:{width:"8rem",height:"8rem"},variant:"danger",animation:"border"})," "]})})]})}function H(e){var t=e.submitFormData,a=e.setDetails,r=e.setAlert,c=e.movie,s=c.title,o=c.subtitle,j=c.genre,u=(c.releaseDate,c.rate),b=c.description,d=Object(n.useState)(["Anima\xe7\xe3o","Com\xe9dia","Com\xe9dia Rom\xe2ntica","Document\xe1rio","Drama","Faroeste","Fic\xe7\xe3o Cient\xedfica","Musical","Suspense","Terror / Horror"]),h=Object(i.a)(d,1)[0],O=Object(n.useState)(u),p=Object(i.a)(O,2),v=p[0],g=p[1],y=(new Date).toLocaleDateString("pt-BR");return Object(l.jsx)(x.a,{className:"update-container",children:Object(l.jsxs)(m.a,{onSubmit:function(e){e.preventDefault();var a=e.target,n=a.newTitle,r=a.newSubtitle,c=a.newGenre,s=a.newReleaseDate,i=a.newRate,o=a.newDescription,l=a.newCover,j=new FormData;j.append("title",n.value),j.append("subtitle",r.value),j.append("genre",c.value),j.append("releaseDate",s.value),j.append("rate",i.value?i.value:u),j.append("description",o.value),j.append("cover",l.files[0]),j.append("lastUpdate",y),t(j)},className:"update-form",children:[Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h3",{children:"T\xedtulo"})}),Object(l.jsx)(m.a.Control,{type:"text",name:"newTitle",value:s,size:"lg"}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h3",{children:"Subt\xedtulo"})}),Object(l.jsx)(m.a.Control,{type:"text",name:"newSubtitle",value:o,size:"lg"}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h3",{children:" G\xeanero "})}),Object(l.jsx)(m.a.Select,{name:"newGenre",value:j,children:h.map((function(e){return Object(l.jsx)("option",{value:e,children:e})}))}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h3",{children:" Data de lan\xe7amento "})}),Object(l.jsx)(m.a.Control,{type:"date",name:"newReleaseDate",max:y,min:"1888-12-12"}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h3",{children:"Avalia\xe7\xe3o"})}),Object(l.jsx)("div",{children:Object(l.jsx)(w.a,{name:"newRate",value:v,starCount:5,onStarClick:g})}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h3",{children:"Descri\xe7\xe3o"})}),Object(l.jsx)(m.a.Control,{as:"textarea",name:"newDescription",style:{height:"100px"},value:b}),Object(l.jsx)(m.a.Label,{children:Object(l.jsx)("h3",{children:"Capa"})}),Object(l.jsx)(m.a.Control,{type:"file",name:"newCover",size:"lg"}),Object(l.jsxs)("div",{className:"update-btn",children:[Object(l.jsx)(f.a,{variant:"info",type:"submit",size:"lg",children:"Confirmar"}),Object(l.jsx)(f.a,{variant:"danger",onClick:function(){a("show"),r(!1)},size:"lg",children:"Cancelar"})]})]})})}var P=a(97);function R(e){var t=e.movie,a=t.title,r=t.subtitle,c=t.description,s=t.rate,o=t.releaseDate,j=t.genre,u=t.createdBy,b=t.createdAt,d=t.lastUpdate,x=t.cover,p=e.showConfirmation,m=e.email,v=e.handleDelete,g=e.setConfirmation,y=e.showDelError,k=e.errorAlert,D=e.setDetailStatus,L=Object(n.useState)({}),T=Object(i.a)(L,2),A=T[0],E=T[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.f)(m);case 2:t=e.sent,E(t.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(C.a,{className:"movie-details-info",children:Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("section",{className:"movie-details-figure",children:Object(l.jsx)("img",{src:x,alt:"Cover of movie ".concat(a)})}),Object(l.jsxs)("section",{className:"movie-details-movie-data",children:[Object(l.jsx)(C.a.Title,{children:a}),Object(l.jsx)(C.a.Subtitle,{children:r}),Object(l.jsx)(C.a.Body,{children:Object(l.jsx)(C.a.Text,{children:c})}),Object(l.jsxs)(P.a,{variant:"info",children:[Object(l.jsx)(P.a.Item,{children:"Data de lan\xe7amento: ".concat(o)}),Object(l.jsx)(P.a.Item,{children:Object(l.jsx)("h3",{children:Object(l.jsx)(w.a,{starCount:s,value:s})})}),Object(l.jsx)(P.a.Item,{children:d?"Ultima atualiza\xe7\xe3o: ".concat(d):"Postado em: ".concat(b)}),Object(l.jsx)(P.a.Item,{children:"Criado por: ".concat(u)}),Object(l.jsx)(P.a.Item,{children:Object(l.jsx)("h4",{children:Object(l.jsx)(S.a,{pill:!0,variant:"dark",children:j})})}),A&&A.username===u&&Object(l.jsxs)(P.a.Item,{children:[Object(l.jsx)(f.a,{style:{margin:"0 5px"},variant:"outline-primary",size:"lg",onClick:function(){return D("update")},children:Object(l.jsx)("i",{class:"far fa-edit"})}),Object(l.jsx)(f.a,{style:{margin:"0 5px"},onClick:function(){return g(!0)},variant:"outline-danger",size:"lg",children:Object(l.jsx)("i",{class:"far fa-trash-alt"})})]})]}),p&&Object(l.jsx)("section",{className:"delete-box",children:Object(l.jsxs)(C.a,{className:"delete-card",children:[Object(l.jsx)(C.a.Header,{className:"delete-card-header",children:Object(l.jsx)(C.a.Title,{children:" Est\xe1 certo em deletar este filme? "})}),Object(l.jsx)(C.a.Body,{children:Object(l.jsx)(C.a.Subtitle,{children:" Esta opera\xe7\xe3o \xe9 irrevers\xedvel! "})}),Object(l.jsxs)(C.a.Footer,{className:"delete-card-footer",children:[Object(l.jsx)(f.a,{onClick:function(){return v()},variant:"danger",children:" Sim "}),Object(l.jsx)(f.a,{onClick:function(){return g(!1)},variant:"info",children:" N\xe3o "})]}),y&&k]})})]})]})})})}a(79);function _(){var e=Object(n.useContext)(o),t=e.token,a=e.email;t||(t=localStorage.getItem("token"),a=localStorage.getItem("email"));var r=Object(n.useState)({}),c=Object(i.a)(r,2),s=c[0],j=c[1],u=Object(n.useState)("show"),b=Object(i.a)(u,2),d=b[0],x=b[1],p=Object(n.useState)(!1),m=Object(i.a)(p,2),f=m[0],y=m[1],w=Object(n.useState)(!1),C=Object(i.a)(w,2),S=C[0],k=C[1],D=Object(n.useState)(Object(l.jsx)(l.Fragment,{})),L=Object(i.a)(D,2),T=L[0],E=L[1],F=Object(n.useState)(!1),I=Object(i.a)(F,2),z=I[0],B=I[1],M=Object(n.useState)(!1),q=Object(i.a)(M,2),P=q[0],_=q[1],G=Object(g.g)().id;Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.d)(G,j);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[G]);var U=function(){var e=Object(O.a)(h.a.mark((function e(a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.h)(G,t,a);case 2:(n=e.sent).success&&(j(n.result),x("show")),n.error&&(E((r=n.error,c=n.code,s=n.message,Object(l.jsx)("div",{className:"error-popup",children:Object(l.jsxs)(v.a,{variant:"danger",onClose:function(){return y(!1)},dismissible:!0,children:[Object(l.jsx)(v.a.Heading,{as:"h3",children:"".concat(c," -> ").concat(r)}),Object(l.jsx)("p",{children:s})]})}))),y(!0));case 5:case"end":return e.stop()}var r,c,s}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(O.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.c)(G,t);case 2:(a=e.sent).error?(E((n=a.error,r=a.code,c=a.message,Object(l.jsxs)(v.a,{variant:"danger",onClose:function(){return B(!1)},dismissible:!0,children:[Object(l.jsx)(v.a.Heading,{as:"h3",children:"".concat(r," -> ").concat(n)}),Object(l.jsx)("p",{children:c})]}))),B(!0)):(E(Object(l.jsx)(v.a,{variant:"success",children:a.success})),B(!0),setTimeout((function(){return _(!0)}),400));case 4:case"end":return e.stop()}var n,r,c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)(l.Fragment,{children:s?Object(l.jsxs)("main",{className:"details-main",children:["show"===d?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("main",{className:"movie-details",children:Object(l.jsx)(R,{movie:s,showConfirmation:S,email:a,handleDelete:J,setConfirmation:k,showDelError:z,errorAlert:T,setDetailStatus:x})})}):Object(l.jsx)(H,{submitFormData:U,setDetails:x,setAlert:y,setError:E,movie:s}),f&&T,P&&Object(l.jsx)(g.a,{to:"/"})]}):Object(l.jsxs)("div",{className:"spinner-box",children:[" ",Object(l.jsx)(A.a,{style:{width:"8rem",height:"8rem"},variant:"danger",animation:"border"})," "]})})}a(80);function G(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),o=s[0],j=s[1],u=Object(n.useState)(Object(l.jsx)(l.Fragment,{})),b=Object(i.a)(u,2),d=b[0],p=b[1],y=function(e,t,a){return Object(l.jsxs)(v.a,{variant:"danger",onClose:function(){return j(!1)},dismissible:!0,children:[Object(l.jsx)(v.a.Heading,{as:"h3",children:"".concat(t," -> ").concat(e)}),Object(l.jsx)("p",{children:a})]})};return Object(l.jsxs)("main",{className:"sign-in-main",children:[Object(l.jsxs)(x.a,{className:"sign-in-conteiner",style:{paddingTop:"20px"},children:[Object(l.jsx)("h1",{style:{textAlign:"center"},children:" Criar usu\xe1rio "}),Object(l.jsxs)(m.a,{onSubmit:function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n,c,s,i,o,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target,n=a.email,c=a.username,s=a.type,i=a.password,n.value&&c.value&&s.value&&i.value){e.next=6;break}alert("todos os campos precisam ser preenchidos"),e.next=11;break;case 6:return o={email:n.value,username:c.value,type:s.value,password:i.value},e.next=9,Object(N.a)(o);case 9:(u=e.sent).error?(p(y(u.error,u.code,u.message)),j(!0)):(p(Object(l.jsxs)(v.a,{variant:"success",onClose:function(){return j(!1)},children:[Object(l.jsx)(v.a.Heading,{children:u.success}),"Id de cria\xe7\xe3o: ".concat(u.insertedId)]})),j(!0),setTimeout((function(){return r(!0)}),500));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(l.jsxs)(m.a.Label,{children:[" ",Object(l.jsx)("h5",{children:"E-mail"})," "]}),Object(l.jsx)(m.a.Control,{type:"email",name:"email",placeholder:"linus_torvalds@windowsucks.gnu.com"}),Object(l.jsxs)(m.a.Label,{children:[" ",Object(l.jsx)("h5",{children:"Nome de usu\xe1rio"})," "]}),Object(l.jsx)(m.a.Control,{type:"text",name:"username",placeholder:"linus_gate_killer_69"}),Object(l.jsxs)(m.a.Label,{children:[" ",Object(l.jsx)("h5",{children:"Tipo"})," "]}),Object(l.jsxs)(m.a.Select,{name:"type",children:[Object(l.jsx)("option",{value:"reader",children:" Leitor "}),Object(l.jsx)("option",{value:"creator",children:" Criador "}),Object(l.jsx)("option",{value:"admin",children:" Administrador "})]}),Object(l.jsxs)(m.a.Label,{children:[" ",Object(l.jsx)("h5",{children:"Senha"})," "]}),Object(l.jsx)(m.a.Control,{type:"password",name:"password"}),Object(l.jsxs)("div",{className:"sign-in-buttonGroup",children:[Object(l.jsx)(f.a,{type:"submit",variant:"success",children:" Concluir "}),Object(l.jsx)(f.a,{type:"button",onClick:function(){return r(!0)},children:" Voltar "})]})]}),o&&d]}),a&&Object(l.jsx)(g.a,{to:"/"})]})}a(81);function U(){return Object(l.jsxs)("main",{className:"not-found-main",children:[Object(l.jsx)("h1",{children:Object(l.jsx)("i",{class:"fas fa-times-circle"})}),Object(l.jsx)("h2",{children:" Caminho n\xe3o encontrado :\\ "}),Object(l.jsx)("h4",{children:" Isto ocorre normalmente quando est\xe1 perdido, mas pode ser falha do programador! "}),Object(l.jsxs)("h6",{children:[" Caso acredite que seja uma falha, ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/alanalbuquerq/",target:"_blank",rel:"noreferrer",children:"d\xea o feedback aqui!"})," "]})]})}a(82);function J(){return Object(l.jsxs)("main",{className:"credits",children:[Object(l.jsx)("h1",{children:" Movie Library "}),Object(l.jsxs)("section",{className:"credits-article",children:[Object(l.jsx)("h5",{children:" Obrigado por testar minha aplica\xe7\xe3o \u2764"}),Object(l.jsx)("article",{children:"Aplica\xe7\xe3o completamente feita por Alan Albuquerque Ferreira Lopes. Esta aplica\xe7\xe3o faz parte de um projeto com intu\xedto did\xe1tico, chama-se Trybe NW+! Resumidamente, Trybe NW+ \xe9 onde farei todos os projetos da Trybe desde o M\xf3dulo de Front-End."})]}),Object(l.jsxs)("nav",{className:"credits-contact",children:[Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/alanalbuquerq/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fab fa-linkedin-in"})})}),Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"http://github.com/offpepe/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fab fa-github"})})})]})]})}function W(){return Object(l.jsxs)(g.d,{children:[Object(l.jsx)(g.b,{exact:!0,path:"/",children:Object(l.jsx)(q,{})}),Object(l.jsx)(g.b,{exact:!0,path:"/login",children:Object(l.jsx)(T,{})}),Object(l.jsx)(g.b,{exact:!0,path:"/signIn",children:Object(l.jsx)(G,{})}),Object(l.jsx)(g.b,{exact:!0,path:"/create",children:Object(l.jsx)(D,{})}),Object(l.jsx)(g.b,{exact:!0,path:"/credits",children:Object(l.jsx)(J,{})}),Object(l.jsx)(g.b,{exact:!0,path:"/:id",children:Object(l.jsx)(_,{})}),Object(l.jsx)(g.b,{path:"*",exact:!0,children:Object(l.jsx)(U,{})})]})}var V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};a(83);c.a.render(Object(l.jsx)(j,{children:Object(l.jsx)(b,{children:Object(l.jsx)(s.a,{basename:"/movie-library",children:Object(l.jsx)(W,{})})})}),document.getElementById("root")),V()}},[[84,1,2]]]);
//# sourceMappingURL=main.33c2c9fd.chunk.js.map