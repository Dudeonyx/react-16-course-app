(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports={App:"App_App__2ezK2","D-flex-c":"App_D-flex-c__3yx8Q"}},11:function(e,n,t){e.exports={Red:"Cockpit_Red__3G4IL",Bigger:"Cockpit_Bigger__OsfZo"}},12:function(e,n,t){e.exports={btn:"FancyButton_btn__p7-2P",Green:"FancyButton_Green__2kNlr",Orange:"FancyButton_Orange__quC8N",Red:"FancyButton_Red__3QP3F",Black:"FancyButton_Black__2Ec1n"}},13:function(e,n,t){e.exports={Person:"Person_Person__2Rq-e"}},16:function(e,n,t){e.exports=t(27)},21:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t.n(o),a=t(9),r=t.n(a),c=(t(21),t(7)),i=t(14),l=t(2),u=t(3),p=t(5),d=t(4),h=t(6),g=t(10),m=t.n(g),f=t(1),v=t.n(f),P=t(11),j=t.n(P),_=s.a.createContext({authenticated:!1,handler:function(){}}),b=function(e){return e.children},w=t(15),k=t(12),O=t.n(k),E=v()(O.a),C=s.a.forwardRef(function(e,n){var t=e.children,o=e.className,a=Object(w.a)(e,["children","className"]);return s.a.createElement("button",Object.assign({className:E("btn",o)},a,{ref:n}),t)}),y=v()(j.a),I=s.a.memo(function(e){var n="",t=e.persons.length;e.showPersons&&(n=t<1?"Black":t<2?"Red":t<3?"Orange":"Green");var o=[];return e.persons.length<=1&&o.push("Red"),e.persons.length<=0&&o.push("Bigger"),s.a.createElement(b,null,s.a.createElement("h1",null,e.title),s.a.createElement("p",{className:y(o)},"This is really working!!!"),s.a.createElement("div",null,s.a.createElement(C,{className:n,onClick:e.toggleShowPersons},"Toggle Persons!"),s.a.createElement(_.Consumer,null,function(e){var n=e.authenticated,t=e.handler,o=n?"Red":"Green";return s.a.createElement(C,{onClick:t,className:o},"Log ",n?"Out":"In")})))}),x=t(13),R=t.n(x),B=v()(R.a),A=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).componentDidMount=function(){console.log("[Person.js] Inside componentDidMount()"),0===t.props.position&&t.focusInput()},t.focusInput=function(){t.inputElement.current.focus()},t.componentDidUpdate=function(e,n,o){console.log("[UPDATE Person.js] Inside componentDidUpdate",e,n,o),0===t.props.position&&t.focusInput()},console.log("[Person.js] Inside constructor",e),t.inputElement=s.a.createRef(),t}return Object(h.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return console.log("[Person.js] Inside render()"),s.a.createElement("div",{className:B("Person")},s.a.createElement("p",{onClick:this.props.clicked},"I'm ",this.props.name," and I am ",this.props.age," years old!"),this.context.authenticated?s.a.createElement("p",null,"I'm logged in!!!"):null,s.a.createElement("p",null,this.props.children),s.a.createElement("input",{ref:this.inputElement,type:"text",onChange:this.props.changed,value:this.props.name}))}}]),n}(o.Component);A.contextType=_;var S=A,D=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).personRef=s.a.createRef(),t}return Object(h.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("[Persons.js] Inside componentDidMount()")}},{key:"render",value:function(){var e=this;return console.log("[Persons.js] Inside render()"),this.props.persons.map(function(n,t){return s.a.createElement(S,{ref:e.personRef,clicked:function(){return e.props.clicked(t)},name:n.name,age:n.age,key:n.id,position:t,changed:function(t){return e.props.changed(t,n.id)}},e.props.children)})}}]),n}(o.Component),N=v()(m.a),F=function(e){function n(){var e,t;Object(l.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(t=Object(p.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(s)))).state={persons:[{id:"gsfhgh",name:"Max",age:29},{id:"sfgdshgh",name:"Manu",age:28},{id:"rgjjyt",name:"Stephanie",age:26}],showPersons:!1,toggleClickedCount:0,isAuthenticated:!1},t.nameChangedHandler=function(e,n){var o=t.state.persons.findIndex(function(e){return e.id===n}),s=Object(i.a)({},t.state.persons[o]);s.name=e.target.value;var a=Object(c.a)(t.state.persons.slice(0,o)).concat([s],Object(c.a)(t.state.persons.slice(o+1)));t.setState({persons:a})},t.toggleShowPersons=function(){t.setState(function(e,n){return{showPersons:!e.showPersons,toggleClickedCount:e.toggleClickedCount+1}})},t.deletePersonHandler=function(e){var n=t.state.persons,o=Object(c.a)(n.slice(0,e)).concat(Object(c.a)(n.slice(e+1)));t.setState({persons:o})},t.toggleLoginHandler=function(){t.setState(function(e){return{isAuthenticated:!e.isAuthenticated}})},t}return Object(h.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;console.log("[App.js] Inside render()");var n=null;return this.state.showPersons&&(n=s.a.createElement(D,{persons:this.state.persons,clicked:this.deletePersonHandler,changed:this.nameChangedHandler})),s.a.createElement("div",{className:N("App","D-flex-c")},s.a.createElement(C,{onClick:function(){return e.setState({showPersons:!0})}},"Show Persons"),s.a.createElement(_.Provider,{value:{authenticated:this.state.isAuthenticated,handler:this.toggleLoginHandler}},s.a.createElement(I,{title:this.props.title,toggleShowPersons:this.toggleShowPersons,persons:this.state.persons,showPersons:this.state.showPersons}),n))}}]),n}(o.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(F,{title:"Relevant People"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.521a00b9.chunk.js.map