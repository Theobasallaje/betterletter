(this["webpackJsonpbetter-letter"]=this["webpackJsonpbetter-letter"]||[]).push([[0],{107:function(e,t,n){e.exports=n(216)},112:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(37),c=n.n(r),l=(n(112),n(22)),i=n(23),u=n(25),d=n(24),s=n(63),h=n(6),p=n(17),m=n(31),b=(n(50),function(e){return{type:"FAB_ICON",payload:e}}),f=(n(211),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState({editorState:t})},e.handleClick=function(){console.log("handleClick ran!"),e.props.handlePlaceHolder(!1),e.props.handleFabIcon("clipboard"),e.textInput.current.focus()},e.handleKeyCommand=function(t){var n=m.RichUtils.handleKeyCommand(e.state.editorState,t);return n?(e.onChange(n),"handled"):"not-handled"},e.onUnderlineClick=function(){e.onChange(m.RichUtils.toggleInlineStyle(e.state.editorState,"UNDERLINE"))},e.onToggleCode=function(){e.onChange(m.RichUtils.toggleCode(e.state.editorState))},e.state={editorState:m.EditorState.createEmpty()},e.textInput=o.a.createRef(),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"editorCoontainer",onClick:this.handleClick},o.a.createElement(m.Editor,{editorState:this.state.editorState,placeholder:this.props.placeHolder?"|  Tap anywhere":"",handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,ref:this.textInput}))}}]),n}(a.Component)),E=Object(p.b)((function(e){return{placeHolder:e.placeHolder.placeHolderShow}}),{handlePlaceHolder:function(e){return{type:"PLACE_HOLDER_SHOW",payload:e}},handleFabIcon:b})(f),O=n(62),v=n(51),C=(n(212),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"fabContainer"},o.a.createElement("button",{disabled:!0,class:"infoFabButton"},o.a.createElement(O.a,{className:"icon",icon:"clipboard"==this.props.fabIcon?v.b:"back"==this.props.fabIcon?v.a:v.c,size:"xs"}))))}}]),n}(a.Component)),j=Object(p.b)((function(e){return{fabIcon:e.fab.fabIcon}}),{handleFabIcon:b})(C),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement(j,null))}}]),n}(a.Component),g=Object(p.b)((function(e){return{}}),{})(y);n(213);var I=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"aboutContainer"},o.a.createElement("div",{className:"aboutContent"},o.a.createElement("div",null,o.a.createElement("p",null,"Better Letter is a simple, mobile-optimized text editor for the web."),o.a.createElement("p",null,"Type distraction free and then move your text to other apps.")),o.a.createElement("div",null,o.a.createElement("p",{className:"authors"},"Made by:"),o.a.createElement("p",{className:"authors"},"Jonathan and Theo Basallaje")))),o.a.createElement(j,null))},S=(n(214),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(h.a,{path:"/",exact:!0,component:g}),o.a.createElement(h.a,{path:"/about",exact:!0,component:I})))}}]),n}(a.Component)),w=Object(p.b)((function(e){return{}}),{})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(26),H=n(106),_=n(32),N={placeHolderShow:!0},F={fabIcon:""},x=Object(k.c)({placeHolder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLACE_HOLDER_SHOW":return Object(_.a)(Object(_.a)({},e),{},{placeHolderShow:t.payload});default:return e}},fab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAB_ICON":return Object(_.a)(Object(_.a)({},e),{},{fabIcon:t.payload});default:return e}}});"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,B=Object(k.e)(x,R(Object(k.a)(H.a)));c.a.render(o.a.createElement(p.a,{store:B},o.a.createElement(w,null)),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.277ad8e7.chunk.js.map