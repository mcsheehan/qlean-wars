(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(e,n,t){},227:function(e,n,t){},255:function(e,n,t){"use strict";t.r(n);var a=t(5),r=t(0),i=t.n(r),o=t(15),c=t(12),u=t(6),l=t(2),s=t(11),d=t(26),m=t(27),p=t(30),g=t(28),v=t(32),h=(t(225),new Audio("".concat("/qlean-wars","/sounds/theme.mp3"))),f=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(p.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(r)))).skipOnboarding=function(){Object(c.b)("".concat("/qlean-wars","/hunters"))},t}return Object(v.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.autoplay=setTimeout(function(){h.play()},9e3),this.redirectToHunters=setTimeout(function(){e.skipOnboarding()},65e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.autoplay),clearTimeout(this.redirectToHunters),h.pause(),h.currentTime=0}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"skip-onboarding",onClick:this.skipOnboarding},"Skip >"),i.a.createElement("section",{className:"intro"},i.a.createElement("p",null,"A long time ago, in a galaxy far,",i.a.createElement("br",null),"far away....")),i.a.createElement("section",{className:"logo"},i.a.createElement("svg",{width:"738px",height:"341px",viewBox:"0 0 738 341",version:"1.1"},i.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",fontFamily:"SFDistantGalaxyOutline",fontSize:"200",fontWeight:"normal"},i.a.createElement("text",{id:"QLEAN-WARS",fill:"#FFE81F"},i.a.createElement("tspan",{x:"-1.30078125",y:"135"},"QLEAN"),i.a.createElement("tspan",{x:"32.8300781",y:"339"},"WARS"))))),i.a.createElement("div",{id:"board"},i.a.createElement("div",{id:"content"},i.a.createElement("p",{id:"title"},"Episode I"),i.a.createElement("p",{id:"subtitle"},"THE PHANTOM MENACE"),i.a.createElement("br",null),i.a.createElement("p",null,"Turmoil has engulfed the Earth. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a moving to another office, Qlean has lost all frontend developers among the galaxy.",i.a.createElement("br",null),i.a.createElement("br",null),"While the congress of the Republic endlessly debates this alarming chain of events, escunk has secretly gave a task to Jabba the Hutt, a powerful crime lord within the galaxy, to regain the loss...."))))}}]),n}(r.Component),b=(t(227),t(31)),E=t(17),y=t(29),w=t.n(y),x=t(80),H=t.n(x),k=t(44),j="hardcore",O={1:{id:1,name:"Boba Fett",image:"".concat("/qlean-wars","/images/fett.png"),accuracy:10,speed:8,tracing:6},2:{id:2,name:"Bossk",image:"".concat("/qlean-wars","/images/bossk.png"),accuracy:8,speed:6,tracing:10},3:{id:3,name:"Dengar",image:"".concat("/qlean-wars","/images/dengar.png"),accuracy:8,speed:8,tracing:8},4:{id:4,name:"Greedo",image:"".concat("/qlean-wars","/images/greedo.png"),accuracy:6,speed:8,tracing:10},5:{id:5,name:"IG-88",image:"".concat("/qlean-wars","/images/ig-88.png"),accuracy:10,speed:7,tracing:7},6:{id:6,name:"4-LOM",image:"".concat("/qlean-wars","/images/4-lom.png"),accuracy:7,speed:9,tracing:8}},A={1:{id:1,name:"8of",escaping:8,avoiding:10,hiding:6},2:{id:2,name:"alextewpin",escaping:6,avoiding:9,hiding:9},3:{id:3,name:"delch",escaping:10,avoiding:8,hiding:6},4:{id:4,name:"filonovaa",escaping:9,avoiding:8,hiding:7},5:{id:5,name:"itslooklike",escaping:7,avoiding:9,hiding:8},6:{id:6,name:"janealter",escaping:8,avoiding:9,hiding:7},7:{id:7,name:"hose314",escaping:9,avoiding:9,hiding:6},8:{id:8,name:"mlnchk",escaping:9,avoiding:6,hiding:9},9:{id:9,name:"morozzzko",escaping:8,avoiding:8,hiding:8},10:{id:10,name:"pigarevaoks",escaping:10,avoiding:6,hiding:8},11:{id:11,name:"ustasjs",escaping:7,avoiding:9,hiding:8},12:{id:12,name:"vadimshvetsov",escaping:8,avoiding:7,hiding:9},13:{id:13,name:"lamdadelta34",escaping:6,avoiding:8,hiding:10}},L=new H.a(w.a);L.onGet("/bounty_hunters").reply(function(){return new Promise(function(e){setTimeout(function(){e([200,Object.values(O).map(function(e){return{id:e.id,name:e.name}})])},2e3)})}),L.onGet(/\/bounty_hunters\/\d+/).reply(function(e){var n=e.url.split("/").pop();return O[n]?new Promise(function(e){setTimeout(function(){e([200,O[n]])},2e3)}):[404]}),L.onDelete(/\/bounty_hunters\/\d+/).reply(function(e){var n=e.url.split("/").pop();return O[n]?[200,(O=Object(k.a)([n],O))[n]]:[404]}),L.onGet("/developers").reply(function(){return new Promise(function(e){setTimeout(function(){e([200,Object.values(A).map(function(e){return{id:e.id,name:e.name}})])},2e3)})}),L.onGet(/\/developers\/\d+/).reply(function(e){var n=e.url.split("/").pop();return A[n]?new Promise(function(e){setTimeout(function(){e([200,A[n]])},2e3)}):[404]}),L.onDelete(/\/developers\/\d+/).reply(function(e){var n=e.url.split("/").pop();return A[n]?[200,(A=Object(k.a)([n],A))[n]]:[404]});var P=w.a,B=Object(E.createCache)(),C=Object(E.createResource)(function(){return P.get("/bounty_hunters")}),T=Object(E.createResource)(function(e){return P.get("/bounty_hunters/".concat(e))}),D=Object(E.createResource)(function(){return P.get("/developers")}),S=Object(E.createResource)(function(e){return P.get("/developers/".concat(e))}),I=B,q=function(e){return(0,e.children)({bountyHunters:C.read(I).data})},F=function(e){return function(){Object(c.b)("".concat("/qlean-wars","/hunters/").concat(e))}},N=function(e){var n=e.children,t=e.renderLoader;return i.a.createElement(r.Suspense,{fallback:t()},i.a.createElement(q,null,function(e){return n(Object(b.a)({},e,{onBountyHunterClick:F}))}))},_=function(e){var n=e.bountyHunters,t=e.onClick;return n.length>0?n.map(function(e){var n=e.id,a=e.name;return i.a.createElement(l.Heading,{node:"h3",key:n,onClick:t(n)},i.a.createElement(l.Link,null,a))}):i.a.createElement("div",null,i.a.createElement(l.Heading,{node:"h1"},"You Lost"),i.a.createElement(l.Heading,{node:"h3"},"All Bounty Hunters were eliminated when they had tried to catch Qlean Frontend Developers"),i.a.createElement(l.Image,{resources:"/images/jabba_dissapointed.png"}))},R=Object(l.withStyles)(function(){return{container:{maxWidth:"320px",margin:"0 auto"}}})(function(e){var n=e.classes;return i.a.createElement(l.Project,{animate:!0,header:"Jabba's the Hutt Communicator",className:n.container},i.a.createElement(N,{renderLoader:function(){return i.a.createElement(l.Loading,{animate:!0})}},function(e){var n=e.bountyHunters,t=e.onBountyHunterClick;return i.a.createElement(_,{bountyHunters:n,onClick:t})}))}),G=t(82),W=t(41),M=t.n(W),Q=M.a.mark(V),z=[{name:"tracing",hunterAttribute:"tracing",developerAttribute:"hiding"},{name:"chasing",hunterAttribute:"speed",developerAttribute:"escaping"},{name:"catching",hunterAttribute:"accuracy",developerAttribute:"avoiding"}],J={easy:-6,medium:-4,hard:-2,hardcore:-1},Y=function(e){return Math.ceil(Math.random()*e)},U=function(e){var n=e.iteration,t=e.bountyHunter,a=e.developer,r=Y(t[n.hunterAttribute]),i=Y(a[n.developerAttribute]);return{difference:r-i,bountyHunterPoints:r,developerPoints:i}},K=function(e){var n=e.iteration,t=e.bountyHunter,a=e.developer,r=e.bountyHunterPoints,i=e.developerPoints;return e.isBountyHunterEliminated?"".concat(t.name," was elimanted by ").concat(a.name," with ").concat(r," points against ").concat(i," points"):"".concat(t.name," ").concat(r-i>=0?"succeed":"failed"," in ").concat(n.name," ").concat(a.name," with ").concat(r," points against ").concat(i," points")};function V(e){var n,t,a,r,i,o,c,u,l,s;return M.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:n=e.bountyHunter,t=e.developer,a=0;case 2:if(!(a<z.length)){d.next=14;break}return r=z[a],i=U({iteration:r,bountyHunter:n,developer:t}),o=i.difference,c=i.bountyHunterPoints,u=i.developerPoints,l=o<=J[j]&&"catching"===r.name,s=K({iteration:r,bountyHunter:n,developer:t,bountyHunterPoints:c,developerPoints:u,isBountyHunterEliminated:l}),d.next=9,{log:s};case 9:if(!(o<0)){d.next=11;break}return d.abrupt("return",{isDeveloperCaught:!1,isBountyHunterEliminated:l});case 11:a++,d.next=2;break;case 14:return d.abrupt("return",{isDeveloperCaught:!0,isBountyHunterEliminated:!1});case 15:case"end":return d.stop()}},Q,this)}var X=function(e){var n=e.bountyHunter,t=e.developer,a=e.updateLogs,r=e.onHuntingFinish,i=V({bountyHunter:n,developer:t}),o=setInterval(function(){var e=i.next(),n=e.value;if(e.done){clearInterval(o);var t=n.isDeveloperCaught,c=n.isBountyHunterEliminated;r({isDeveloperCaught:t,isBountyHunterEliminated:c})}else{var u=n.log;a(u)}},1e3)},Z=function(e){var n=e.children,t=e.id;return n(T.read(I,t).data)},$=function(e){var n=e.id,t=e.children,a=e.renderLoader;return i.a.createElement(r.Suspense,{fallback:a()},i.a.createElement(Z,{id:n},t))},ee=function(e){return(0,e.children)(D.read(I).data)},ne=function(e){var n=e.renderLoader,t=e.children;return i.a.createElement(r.Suspense,{fallback:n()},i.a.createElement(ee,null,t))},te=function(e){var n=e.id;return(0,e.children)(S.read(I,n).data)},ae=function(e){var n=e.id,t=e.renderLoader,a=e.children;return i.a.createElement(r.Suspense,{fallback:t()},i.a.createElement(te,{id:n},a))};function re(){var e=Object(a.a)(["\n  min-width: 250px;\n  @media (max-width: 500px) {\n    min-width: 200px;\n  }\n"]);return re=function(){return e},e}function ie(){var e=Object(a.a)(["\n  min-width: 100px;\n  max-width: 200px;\n  margin-right: 30px;\n  @media (max-width: 500px) {\n    max-width: 400px;\n    margin-right: 0;\n  }\n"]);return ie=function(){return e},e}function oe(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: left;\n\n  @media (max-width: 500px) {\n    flex-direction: column;\n  }\n"]);return oe=function(){return e},e}var ce=u.a.div(oe()),ue=u.a.div(ie()),le=Object(u.a)(l.Table)(re()),se=function(e){var n=e.bountyHunter,t=n.name,a=n.image,r=n.accuracy,o=n.speed,c=n.tracing,u=e.renderDeveloper;return i.a.createElement(ce,null,i.a.createElement(ue,null,i.a.createElement(l.Image,{animate:!0,resources:a},t)),i.a.createElement("div",null,i.a.createElement(l.Heading,{node:"h3"},"".concat(t," Skills")),i.a.createElement(le,{animate:!0,headers:["Attributes","Points"],dataset:[["Tracing",c],["Speed",o],["Accuracy",r]]}),u()))};function de(){var e=Object(a.a)(["\n  min-width: 250px;\n  @media (max-width: 500px) {\n    min-width: 200px;\n  }\n"]);return de=function(){return e},e}var me=Object(u.a)(l.Table)(de()),pe=function(e){var n=e.developer,t=n.name,a=n.escaping,r=n.avoiding,o=n.hiding;return i.a.createElement("div",null,i.a.createElement(l.Heading,{node:"h3"},"".concat(t," Skills")),i.a.createElement(me,{animate:!0,headers:["Attributes","Points"],dataset:[["Hiding",o],["Escaping",a],["Avoiding",r]]}))};function ge(){var e=Object(a.a)(["\n  padding: 5px 10px;\n"]);return ge=function(){return e},e}function ve(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n\n  @media (max-width: 450px) {\n    grid-template-columns: 1fr;\n  }\n"]);return ve=function(){return e},e}var he=u.a.div(ve()),fe=u.a.div(ge()),be=function(e){var n=e.developers,t=e.onClick,a=e.selectedDeveloperId;return n.length>0?i.a.createElement("div",null,i.a.createElement(l.Heading,{node:"h3"},"Select target"),i.a.createElement(he,null,n.map(function(e){var n=e.id,r=e.name;return i.a.createElement(l.Frame,{key:n,show:n===a,animate:!0,level:3,corners:2,onClick:t(n)},i.a.createElement(fe,null,i.a.createElement(l.Link,{key:n},r)))}))):i.a.createElement("div",null,i.a.createElement(l.Heading,{node:"h1"},"You Win"),i.a.createElement(l.Heading,{node:"h3"},"Congratulations, bounty hunters have catched all Qlean frontend developers in the Galaxy"),i.a.createElement(l.Image,{resources:"/images/jabba_satisfied.png"}))};function Ee(){var e=Object(a.a)(["\n  margin-top: 20px;\n"]);return Ee=function(){return e},e}function ye(){var e=Object(a.a)(["\n  margin-top: 20px;\n"]);return ye=function(){return e},e}function we(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"]);return we=function(){return e},e}function xe(){var e=Object(a.a)(["\n  margin: 0 auto;\n  max-width: 992px;\n"]);return xe=function(){return e},e}var He=function(e){return P.delete("/bounty_hunters/".concat(e))},ke=function(e){return P.delete("/developers/".concat(e))},je=u.a.div(xe()),Oe=u.a.div(we()),Ae=u.a.div(ye()),Le=u.a.div(Ee()),Pe=function(){Object(c.b)("".concat("/qlean-wars","/hunters"))},Be=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(p.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(r)))).state={selectedDeveloperId:null,isHuntingInProgress:!1,logs:[]},t.selectDeveloper=function(e){return function(){t.setState({selectedDeveloperId:e})}},t.beginHunting=function(e){var n=e.bountyHunter,a=e.developer;return function(){t.setState({isHuntingInProgress:!0,logs:[]}),X({bountyHunter:n,developer:a,updateLogs:t.updateLogs,onHuntingFinish:t.onHuntingFinish,interval:1e3})}},t.updateLogs=function(e){t.setState(function(n){var t=n.logs;return{logs:Object(G.a)(t).concat([e])}})},t.onHuntingFinish=function(e){var n=e.isDeveloperCaught,a=e.isBountyHunterEliminated,r=t.props.id;n&&ke(t.state.selectedDeveloperId),a&&(He(r),Pe()),t.setState(Object(b.a)({isHuntingInProgress:!1},n&&{selectedDeveloperId:null}))},t}return Object(v.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.id,a=n.classes,r=this.state,o=r.selectedDeveloperId,c=r.isHuntingInProgress,u=r.logs;return i.a.createElement(je,null,i.a.createElement(l.Button,{animate:!0,onClick:Pe,className:a.backButton},"Back to Bounty Hunters"),i.a.createElement($,{id:t,renderLoader:function(){return i.a.createElement(l.Loading,{animate:!0,full:!0})}},function(n){return i.a.createElement(l.Project,{animate:!0,header:n.name},i.a.createElement(Oe,null,i.a.createElement("div",null,i.a.createElement(se,{bountyHunter:n,renderDeveloper:function(){return o&&i.a.createElement(ae,{id:o,renderLoader:function(){return i.a.createElement(l.Loading,{animate:!0})}},function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(pe,{developer:t}),i.a.createElement(l.Button,{className:a.huntButton,disabled:c,onClick:e.beginHunting({bountyHunter:n,developer:t})},"Start Hunting"))})}}),(c||u.length>0)&&i.a.createElement(Ae,null,i.a.createElement(l.List,null,u.map(function(e){return i.a.createElement("div",{key:e},i.a.createElement(l.Paragraph,null,e),i.a.createElement(l.Line,{animate:!0,layer:"secondary",className:a.line}))}),c&&i.a.createElement(Le,null,i.a.createElement(l.Loading,{animate:!0,small:!0}))))),i.a.createElement(ne,{renderLoader:function(){return i.a.createElement(l.Loading,{animate:!0})}},function(n){return i.a.createElement(be,{developers:n,onClick:e.selectDeveloper,selectedDeveloperId:o})})))}))}}]),n}(r.Component),Ce=Object(l.withStyles)(function(){return{line:{marginTop:"10px"},backButton:{marginBottom:"30px"},huntButton:{margin:"20px 20px 0 0"}}})(Be);function Te(){var e=Object(a.a)(["\n  margin: 30px;\n"]);return Te=function(){return e},e}var De=u.a.div(Te()),Se={shared:{volume:1},players:{click:{sound:{src:["".concat("/qlean-wars","/sounds/click.mp3")]}},typing:{sound:{src:["".concat("/qlean-wars","/sounds/typing.mp3")]},settings:{oneAtATime:!0}},deploy:{sound:{src:["".concat("/qlean-wars","/sounds/deploy.mp3")]},settings:{oneAtATime:!0}}}},Ie=function(){return i.a.createElement(l.ThemeProvider,{theme:Object(l.createTheme)({})},i.a.createElement(s.SoundsProvider,{sounds:Object(s.createSounds)(Se)},i.a.createElement(l.Arwes,{animate:!0,background:"".concat("/qlean-wars","/images/background.jpg"),pattern:"".concat("/qlean-wars","/images/glow.png")},i.a.createElement(De,null,i.a.createElement(c.a,null,i.a.createElement(R,{path:"/"}),i.a.createElement(Ce,{path:"/:id"}))))))};var qe=document.getElementById("root");Object(o.unstable_createRoot)(qe).render(i.a.createElement(r.unstable_ConcurrentMode,null,i.a.createElement(function(){return i.a.createElement(c.a,null,i.a.createElement(f,{path:"".concat("/qlean-wars","/")}),i.a.createElement(Ie,{path:"".concat("/qlean-wars","/hunters/*")}))},null)))},84:function(e,n,t){e.exports=t(255)}},[[84,2,1]]]);
//# sourceMappingURL=main.bf6d1eef.chunk.js.map