(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,t,n){e.exports=n.p+"static/media/forkplayer.85212ff6.svg"},176:function(e,t,n){e.exports=n(203)},181:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),l=n.n(o),c=(n(181),n(50)),i=n(37),u=n(60),s=n(51),h=n(39),p=n(59),m=n(45),d=n(42),b=Object(d.withFocusable)(function(e){e.setFocus;return r.a.createElement(m.TextField,{inputProps:{contenteditable:!0},label:"URL",style:{margin:8},placeholder:"http://",helperText:"Enter URL to load",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})}),f=Object(d.withFocusable)(function(e){e.setFocus;return r.a.createElement(m.Button,{href:"#",variant:"contained",size:"large",color:"primary"},"Open URL")}),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={url:null},n.handleChangeURL=n.handleChangeURL.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleChangeURL",value:function(e){this.setState({url:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement(b,{focusPath:"item-input",value:this.state.url,onChange:this.props.handleChangeURL}),r.a.createElement(f,{focusPath:"button",onEnterPress:function(){return e.props.handleOpenURL(e.state.url)}}))}}]),t}(r.a.Component),v=n(173),E=n.n(v),j=Object(d.withFocusable)(function(e){e.setFocus;return r.a.createElement(m.Button,{href:"#",variant:"contained",size:"large",color:"primary"},r.a.createElement("div",null,r.a.createElement("img",{src:E.a,alt:"ForkPlayer"})),r.a.createElement("div",null,"ForkPlayer"))}),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m.Box,null,r.a.createElement(m.Typography,{variant:"h5",component:"h2"},"Applications"),r.a.createElement(j,{focusPath:"button-forkPlayer",onEnterPress:function(){return e.props.handleOpenURL("http://operatv.obovse.ru/2.5/")}}))}}]),t}(r.a.Component),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleOpenURL=n.handleOpenURL.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleOpenURL",value:function(e){try{document.location.href=e}catch(t){console.log(t.message)}}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(O,{handleOpenURL:this.handleOpenURL}),r.a.createElement("hr",null),r.a.createElement(g,{handleOpenURL:this.handleOpenURL})))}}]),t}(r.a.Component);var L=Object(d.withNavigation)(function(){return r.a.createElement(y,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[176,1,2]]]);
//# sourceMappingURL=main.fd85dff5.chunk.js.map