(this["webpackJsonpbetter-letter"]=this["webpackJsonpbetter-letter"]||[]).push([[0],{107:function(e,t,n){e.exports=n(216)},112:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(38),c=n.n(r),l=(n(112),n(23)),i=n(24),u=n(26),s=n(25),d=n(32),p=n(6),h=n(17),b=n(33),f=(n(52),function(e){return{type:"FAB_ICON",payload:e}}),m=(n(211),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState({editorState:t})},e.handleClick=function(){console.log("handleClick ran!"),e.props.placeHolder&&(e.props.handlePlaceHolder(!1),e.props.handleFabIcon("clipboard"),e.props.handleEditorRef(e.textInput)),e.textInput.current.focus()},e.handleKeyCommand=function(t){var n=b.RichUtils.handleKeyCommand(e.state.editorState,t);return n?(e.onChange(n),"handled"):"not-handled"},e.onUnderlineClick=function(){e.onChange(b.RichUtils.toggleInlineStyle(e.state.editorState,"UNDERLINE"))},e.onToggleCode=function(){e.onChange(b.RichUtils.toggleCode(e.state.editorState))},e.state={editorState:b.EditorState.createEmpty()},e.textInput=o.a.createRef(),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"editorCoontainer",onClick:this.handleClick},o.a.createElement(b.Editor,{editorState:this.state.editorState,placeholder:this.props.placeHolder&&"|  Tap anywhere",handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,ref:this.textInput}))}}]),n}(a.Component)),E=Object(h.b)((function(e){return{placeHolder:e.placeHolder.placeHolderShow}}),{handlePlaceHolder:function(e){return{type:"PLACE_HOLDER_SHOW",payload:e}},handleFabIcon:f,handleEditorRef:function(e){return{type:"EDITOR_TEXT",payload:e}}})(m),O=n(40),v=n(53),C=(n(212),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleFabIcon=function(t){switch(t){case"back":e.props.handleFabIcon("back");break;case"clipboard":e.props.handleFabIcon("clipboard");break;case"info":default:e.props.handleFabIcon("info")}},e.handleClipBoard=function(t){var n=e.props.editorRef.current.props.editorState.getCurrentContent().getPlainText();navigator.clipboard.writeText(n).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})),e.props.editorRef.current.focus()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"fabContainer"},"info"==this.props.fabIcon&&o.a.createElement(d.b,{onClick:function(){return e.handleFabIcon("back")},className:"icon noSelect",to:"/about"},o.a.createElement("button",{class:"infoFabButton"},o.a.createElement(O.a,{className:"icon",icon:v.c,size:"xs"}))),"back"==this.props.fabIcon&&o.a.createElement(d.b,{onClick:function(){return e.handleFabIcon("info")},className:"icon noSelect",to:"/"},o.a.createElement("button",{class:"infoFabButton"},o.a.createElement(O.a,{className:"icon",icon:v.a,size:"xs"}))),"clipboard"==this.props.fabIcon&&o.a.createElement(d.b,{onClick:this.handleClipBoard,className:"icon noSelect",to:"/"},o.a.createElement("button",{class:"infoFabButton"},o.a.createElement(O.a,{className:"icon",icon:v.b,size:"xs"})))))}}]),n}(a.Component)),y=Object(h.b)((function(e){return{fabIcon:e.fab.fabIcon,editorRef:e.textEditor.ref}}),{handleFabIcon:f})(C),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement(y,null))}}]),n}(a.Component),j=Object(h.b)((function(e){return{}}),{})(g);n(214);var I=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"aboutContainer"},o.a.createElement("div",{className:"aboutContent"},o.a.createElement("div",null,o.a.createElement("p",null,"Better Letter is a simple, mobile-optimized text editor for the web."),o.a.createElement("p",null,"Type distraction free and then move your text to other apps.")),o.a.createElement("div",null,o.a.createElement("p",{className:"authors"},"Made by:"),o.a.createElement("p",{className:"authors"},"Jonathan and Theo Basallaje")))),o.a.createElement(y,null))},k=(n(215),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null,o.a.createElement(p.a,{path:"/",exact:!0,component:j}),o.a.createElement(p.a,{path:"/about",component:I})))}}]),n}(a.Component)),w=Object(h.b)((function(e){return{}}),{})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(27),F=n(106),x=n(20),N={hasText:null,ref:null},R={placeHolderShow:!0},T={fabIcon:"info"},_=Object(S.c)({textEditor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDITOR_TEXT":return Object(x.a)(Object(x.a)({},e),{},{ref:t.payload});default:return e}},placeHolder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLACE_HOLDER_SHOW":return Object(x.a)(Object(x.a)({},e),{},{placeHolderShow:t.payload});default:return e}},fab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAB_ICON":return Object(x.a)(Object(x.a)({},e),{},{fabIcon:t.payload});default:return e}}});"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.d,B=Object(S.e)(_,H(Object(S.a)(F.a)));c.a.render(o.a.createElement(h.a,{store:B},o.a.createElement(w,null)),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.a6da90f7.chunk.js.map