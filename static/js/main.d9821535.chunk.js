(this["webpackJsonpyellow-notes-frontend"]=this["webpackJsonpyellow-notes-frontend"]||[]).push([[0],{108:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),s=a(19),o=a(24),i=a(112),u=a(8),m=a(120),d=a(113),p=a(121),E=a(76),f=a(6),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{email:null,isLoading:!1,isUserLoggedIn:!1,error:null},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CHECK_TOKEN":return Object(f.a)({},e,{},n);case"LOADING_START":return Object(f.a)({},e,{isLoading:!0});case"REGISTER":return Object(f.a)({},n,{isUserLoggedIn:!0});case"REGISTER_FAILED":return{isUserLoggedIn:!1,error:{type:"REGISTER",message:"This email is already registered!"}};case"LOGIN":return Object(f.a)({},n,{isUserLoggedIn:!0});case"LOGIN_FAILED":return{isUserLoggedIn:!1,error:{type:"LOGIN",message:"Wrong email or password!"}};case"CLEAR_ERROR":return Object(f.a)({},e,{error:null});case"ADD_NOTE":var r=0;return e.notes&&(r=0===e.notes.length?0:e.notes[e.notes.length-1].id+1),Object(f.a)({},e,{notes:[].concat(Object(E.a)(e.notes||[]),[Object(f.a)({},n,{id:r})])});case"LOGOUT":return{isUserLoggedIn:!1};default:return e}},b=a(14),h=a.n(b),v=a(21),w=a(61);var y=a.n(w).a.create({baseURL:"https://api.yellownotes.c1rcle.pl/",timeout:1e4,headers:localStorage.getItem("token")?{Authorization:"Bearer "+localStorage.getItem("token")}:{}}),O=function(){var e=Object(v.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.payload)&&n.password&&n.email&&2===Object.keys(n).length){e.next=3;break}throw new Error("Registration request has invalid parameters!");case 3:return a({type:"LOADING_START"}),e.prev=4,e.next=7,y.post("users/register",Object(f.a)({},n));case 7:r=e.sent,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(4),r={status:400},console.error(e.t0);case 14:if(200===r.status){e.next=16;break}return e.abrupt("return",{type:"REGISTER_FAILED"});case 16:return localStorage.setItem("token",r.data.token),e.abrupt("return",Object(f.a)({},t,{payload:{email:n.email}}));case 18:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(h.a.mark((function e(t,a){var n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[{id:0,content:"Some example text"},{id:1,content:"Some example text"},{id:2,content:"Some example text"},{id:3,content:"Some example text"},{id:4,content:"Multi \nline \ntext"}],(r=t.payload)&&r.password&&r.email&&2===Object.keys(r).length){e.next=4;break}throw new Error("Login request has invalid parameters!");case 4:return a({type:"LOADING_START"}),e.prev=5,e.next=8,y.post("users/authenticate",r);case 8:c=e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),c={status:400},console.error(e.t0);case 15:if(200===c.status){e.next=17;break}return e.abrupt("return",{type:"LOGIN_FAILED"});case 17:return localStorage.setItem("token",c.data.token),e.abrupt("return",Object(f.a)({},t,{payload:{email:r.email,notes:n}}));case 19:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.payload&&t.payload.content&&1===Object.keys(t.payload).length){e.next=2;break}throw new Error("Registration request has invalid parameters!");case 2:e.prev=2,a={status:200,data:{content:t.payload.content}},e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(2),new Error("Add note action has failed! ",a);case 9:if(200===a.status){e.next=11;break}throw new Error("Add note action has failed! ",a);case 11:return e.abrupt("return",Object(f.a)({},t,{payload:a.data}));case 12:case"end":return e.stop()}}),e,null,[[2,6]])})));return function(t){return e.apply(this,arguments)}}(),j=a(62),I=a.n(j),k=function(){var e=Object(v.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token")){e.next=3;break}throw new Error("Token expired");case 3:if((r=I()(n))&&!(r.exp<(new Date).getTime()/1e3)&&r.email){e.next=7;break}throw localStorage.removeItem("token"),new Error("Token expired");case 7:return a({type:"LOADING_START"}),e.abrupt("return",Object(f.a)({},t,{payload:{isUserLoggedIn:!0,email:r.email}}));case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(e){return function(t){switch(t.type){case"CHECK_TOKEN":k(t,e).then((function(t){return e(t)})).catch((function(e){return console.log(e)}));break;case"REGISTER":O(t,e).then((function(t){return e(t)})).catch((function(e){return console.log(e)}));break;case"LOGIN":e({type:"LOADING_START"}),N(t,e).then((function(t){return e(t)})).catch((function(e){return console.log(e)}));break;case"LOGOUT":localStorage.removeItem("token"),e(t);break;case"ADD_NOTE":x(t,e).then((function(t){return e(t)})).catch((function(e){return console.log(e)}));break;default:e(t)}}},L=Object(n.createContext)();function R(e){var t=e.children,a=Object(n.useReducer)(g,{}),c=Object(u.a)(a,2),l=c[0],s=c[1];return r.a.createElement(L.Provider,{value:[l,T(s)]},t)}function C(){var e=r.a.useContext(L);if(void 0===e)throw new Error("useUser must be used within a UserProvider");return e}var S=function(){var e=C(),t=Object(u.a)(e,2),a=t[0],c=a.isUserLoggedIn,l=a.email,o=t[1];return Object(n.useEffect)((function(){!c&&localStorage.getItem("token")&&o({type:"CHECK_TOKEN"})}),[]),r.a.createElement(m.a,{variant:"light",bg:"light",expand:"lg"},r.a.createElement(i.a,{className:"justify-content-center"},r.a.createElement(m.a.Brand,{className:"w-50 mr-auto"},r.a.createElement("i",{className:"fas fa-quote-right"})," ",r.a.createElement("span",{className:"lead"},c?"Hello, ".concat(l.split("@")[0],"!"):"Yellow Notes")),c&&r.a.createElement(d.a,{variant:"outline-success",className:"d-lg-none mr-2"},r.a.createElement("i",{className:"fas fa-bars mr-1"}),"Text"),r.a.createElement(m.a.Toggle,{"aria-controls":"navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"navbar-nav",className:"w-100"},c&&r.a.createElement(p.a,{className:"w-100 justify-content-center"},r.a.createElement(d.a,{variant:"outline-success",className:"d-none d-lg-block"},r.a.createElement("i",{className:"fas fa-bars mr-1"}),"Text")),r.a.createElement(p.a,{className:"w-100 ml-auto justify-content-end mt-2 mt-lg-0 flex-lg-row flex-row-reverse"},c?r.a.createElement(d.a,{variant:"outline-danger",onClick:function(){return o({type:"LOGOUT"})}},r.a.createElement("i",{className:"fas fa-sign-out-alt mr-1"}),"Sign out"):r.a.createElement(s.b,{to:"/",className:"btn btn-outline-primary"},r.a.createElement("i",{className:"fas fa-sign-in-alt mr-1"}),"Sign in")))))},A=a(27),G=a(117),D=a(73),B=a(119),_=a(72),U=a(115),F=a(123),P=a(114),q=function(e){var t=e.children,a=e.text,c=e.show,l=Object(n.useRef)(),s=(Array.isArray(t)?t[0]:t)||r.a.createElement("div",{ref:l});if(null===s.ref)throw new Error("First child has to have a ref defined!");var o=s.ref.current;return r.a.createElement(r.a.Fragment,null,t||s,r.a.createElement(F.a,Object.assign({},e,{target:o,show:c}),r.a.createElement(P.a,e,a)))},K=function(e){var t=e.state,a=e.onTextChanged,c=e.onBlur;return r.a.createElement(_.a,{className:"row justify-content-center"},r.a.createElement(U.a,null,r.a.createElement(U.a.Prepend,null,r.a.createElement(U.a.Text,{className:"bg-white"},r.a.createElement("i",{className:"fas fa-at fa-fw m-auto"}))),r.a.createElement(q,{text:"Enter a valid e-mail address!",show:t.wasBlurred&&t.isInvalid,placement:"right"},r.a.createElement(B.a.Control,{required:!0,id:"email",type:"email",placeholder:"Email address",ref:Object(n.useRef)(),value:t.email,onChange:a,onBlur:c}))))},H=function(e){var t=e.state,a=e.onTextChanged,c=e.onBlur;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{className:"row justify-content-center"},r.a.createElement(U.a,null,r.a.createElement(U.a.Prepend,null,r.a.createElement(U.a.Text,{className:"bg-white"},r.a.createElement("i",{className:"fas fa-hashtag fa-fw m-auto"}))),r.a.createElement(q,{text:"Password must contain at least 1 upper and lower case letter, 1 numeric character and be no less than 5 characters long!",show:t.wasBlurred&&t.isInvalid,placement:"right"},r.a.createElement(B.a.Control,{required:!0,pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$",type:"password",placeholder:"Password",ref:Object(n.useRef)(),value:t.value,onChange:a,onBlur:c})))))},V=a(116),Y=function(){return r.a.createElement(V.a,{animation:"border",role:"status",size:"sm"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},z=function(e){var t=e.disabled,a=e.icon,n=e.title,c=e.isLoading;return r.a.createElement(d.a,{variant:"outline-primary",block:!0,type:"submit",disabled:t||c},c?r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null)," "):r.a.createElement("i",{className:"fas fa-".concat(a," mr-1")}),n)},M=function(e){var t=e.state,a=e.pattern,c=e.onTextChanged,l=e.onBlur;return r.a.createElement(_.a,{className:"row justify-content-center"},r.a.createElement(U.a,null,r.a.createElement(U.a.Prepend,null,r.a.createElement(U.a.Text,{className:"bg-white"},r.a.createElement("i",{className:"fas fa-redo fa-fw m-auto"}))),r.a.createElement(q,{text:"Passwords do not match!",show:t.wasBlurred&&!!t.value&&a!==t.value,placement:"right"},r.a.createElement(B.a.Control,{required:!0,pattern:a,id:"passwordRepeat",type:"password",placeholder:"Repeat Password",ref:Object(n.useRef)(),value:t.value,onChange:c,onBlur:l}))))},W=function(e){var t=e.onClick,a=e.tooltipText,c=e.tooltipEnabled;return r.a.createElement(q,{text:a,show:!!a&&c,placement:"right"},r.a.createElement(_.a,{className:"row justify-content-center my-4",ref:Object(n.useRef)()},r.a.createElement(B.a.Check,{custom:!0,id:"1",type:"checkbox",label:"I agree to the terms and conditions",onClick:t})))},J=function(){var e=Object(n.useState)({email:{value:"",isInvalid:!0},password:{value:"",isInvalid:!0},passwordRepeat:{value:"",isInvalid:!0},termsAccepted:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=C(),s=Object(u.a)(l,2),i=s[0],m=s[1],d=a.email,p=a.password,E=a.passwordRepeat,g=a.termsAccepted,b=function(e){return function(t){var a=t.target,n=a.validity,r=a.value,l=n.patternMismatch||n.typeMismatch;c((function(t){return Object(f.a)({},t,Object(A.a)({},e,{value:r,isInvalid:l}))}))}},h=function(e){return function(){a[e].wasBlurred||c((function(t){return Object(f.a)({},t,Object(A.a)({},e,Object(f.a)({},t[e],{wasBlurred:!0})))}))}},v=!(g||d.isInvalid||p.isInvalid||E.isInvalid);return r.a.createElement(r.a.Fragment,null,i.isUserLoggedIn&&r.a.createElement(o.a,{to:"notes"}),r.a.createElement(G.a,{className:"justify-content-center"},r.a.createElement(D.a,{xs:11,lg:8,className:"my-4"},r.a.createElement("h1",{className:"display-4 text-center"},"Register an account"))),r.a.createElement(G.a,{className:"justify-content-center"},r.a.createElement(D.a,{xs:11,lg:6,className:"my-2"},r.a.createElement(B.a,{onSubmit:function(e){e.preventDefault(),e.target.className+=" was-validated",e.target.checkValidity()&&m({type:"REGISTER",payload:{email:a.email.value,password:a.password.value}})},className:"needs-validation",noValidate:!0},r.a.createElement(K,{onTextChanged:b("email"),onBlur:h("email"),state:d}),r.a.createElement(H,{onTextChanged:b("password"),onBlur:h("password"),state:p}),r.a.createElement(M,{pattern:p.value,onTextChanged:b("passwordRepeat"),onBlur:h("passwordRepeat"),state:E}),r.a.createElement(W,{onClick:function(){c((function(e){return Object(f.a)({},e,{termsAccepted:!g})}))},tooltipText:"You need to accept terms to create an account!",tooltipEnabled:v}),r.a.createElement(z,{disabled:!g,icon:"user-plus",title:"Create new account",isLoading:i.isLoading,tooltipText:"You need to accept terms to create an account!"})))))},Z=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=a.email,i=a.password,m=C(),p=Object(u.a)(m,2),E=p[0],g=p[1],b=function(e){return function(t){var a=t.target;c((function(t){return Object(f.a)({},t,Object(A.a)({},e,a.value))}))}},h=""===l||""===i;return Object(n.useEffect)((function(){E.error&&"LOGIN"===E.error.type&&c((function(e){return Object(f.a)({},e,{password:""})}))}),[E.error]),r.a.createElement(r.a.Fragment,null,E.isUserLoggedIn&&r.a.createElement(o.a,{to:"notes"}),r.a.createElement(G.a,{className:"justify-content-center"},r.a.createElement(D.a,{xs:11,className:"my-4"},r.a.createElement("h1",{className:"display-4 text-center"},"Welcome to Yellow Notes!"))),r.a.createElement(G.a,{className:"justify-content-center"},r.a.createElement(D.a,{xs:11,lg:6,className:"my-2"},r.a.createElement(B.a,{onSubmit:function(e){e.preventDefault(),e.target.checkValidity()?g({type:"LOGIN",payload:Object(f.a)({},a)}):g({type:"LOGIN_FAILED"})},noValidate:!0},r.a.createElement(K,{onTextChanged:b("email"),state:{value:l}}),r.a.createElement(H,{onTextChanged:b("password"),state:{value:i}}),r.a.createElement(z,{disabled:h,icon:"home",title:"Login",isLoading:E.isLoading}),r.a.createElement("hr",null),r.a.createElement("p",{className:"lead text-center"},"Or"," ",r.a.createElement(s.b,{to:"/registration"},r.a.createElement(d.a,{variant:"outline-success"},r.a.createElement("i",{className:"fas fa-user-plus mr-2"}),"Register"))," ","to create new account!")))))},$=a(124),Q=(a(108),function(e){var t=e.content;return r.a.createElement($.a,{className:"shadow-sm"},r.a.createElement($.a.Body,{className:"p-0"},r.a.createElement(B.a.Control,{disabled:!0,as:"textarea",className:"note-item",rows:5,value:t})))}),X=a(118),ee=a(74),te=function(){var e=C(),t=Object(u.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement(G.a,null,t.isUserLoggedIn||r.a.createElement(o.a,{to:"/"}),!t.notes||t.notes.map((function(e){return r.a.createElement(D.a,{lg:4,className:"mt-3",key:e.id},r.a.createElement(Q,e))}))))};function ae(){var e=C(),t=Object(u.a)(e,2)[1],a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],s=c[1];return r.a.createElement(X.a,{className:"mt-3 mb-3 shadow-sm"},r.a.createElement(ee.a,null,r.a.createElement(B.a,{className:"d-flex",onSubmit:function(e){e.preventDefault(),""!==l&&(t({type:"ADD_NOTE",payload:{content:l}}),s(""))}},r.a.createElement(B.a.Control,{type:"text",placeholder:"New note",value:l,onChange:function(e){return s(e.target.value)}}),r.a.createElement(d.a,{variant:"outline-info",type:"submit",className:"ml-3"},r.a.createElement("i",{className:"fas fa-plus"})))))}var ne=a(75),re=a(31),ce={transition:"opacity 0.5s linear"},le=function(e){var t=e.component,a=Object(ne.a)(e,["component"]);return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return r.a.createElement(re.a,{in:!0,appear:!0,style:ce},r.a.createElement("div",null,r.a.createElement(t,e)))}}))},se=a(122),oe=function(){var e=C(),t=Object(u.a)(e,2),a=t[0],n=t[1];return a.error?(setTimeout((function(){return n({type:"CLEAR_ERROR"})}),5e3),r.a.createElement(se.a,{variant:"danger",className:"mt-3 mb-0"},r.a.createElement("strong",null,"We have encountered an error!")," ",a.error.message)):null};var ie=function(){return r.a.createElement(R,null,r.a.createElement(s.a,null,r.a.createElement(S,null),r.a.createElement(i.a,null,r.a.createElement(oe,null),r.a.createElement(o.d,null,r.a.createElement(le,{exact:!0,key:"0",path:"/",component:Z}),r.a.createElement(le,{exact:!0,key:"1",path:"/registration",component:J}),r.a.createElement(le,{exact:!0,key:"2",path:"/notes",component:te})))))};a(109);l.a.render(r.a.createElement(ie,null),document.getElementById("root"))},77:function(e,t,a){e.exports=a(110)}},[[77,1,2]]]);
//# sourceMappingURL=main.d9821535.chunk.js.map