(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),o=n.n(c),s=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))}),a=(n(13),n(2)),i=n(3),h=n(5),l=n(4),u=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robot"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(b,{name:t[n].name,email:t[n].email,id:t[n].id},n)}))})},j=function(e){var t=e.searchChanged;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"pa2 ba b--green bg-lightest-blue",type:"text",placeholder:"Search Robot",onInput:t})})},f=(n(15),function(e){return Object(u.jsx)("div",{style:{margin:"20px",overflowY:"scroll",border:"1px solid black",height:"600px"},children:e.children})}),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Ooooops something went wrong !"}):this.props.children}}]),n}(r.Component),g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChanged=function(t){e.setState({searchfield:t.target.value.trim()})},e.state={searchfield:"",currentRobots:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()}));t.then((function(t){return e.setState({currentRobots:t})})),console.log(t)}},{key:"render",value:function(){var e=this.state,t=e.searchfield,n=e.currentRobots,r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f2",children:"Robofriends"}),Object(u.jsx)(j,{searchChanged:this.onSearchChanged}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(d,{robots:r})})})]}):Object(u.jsx)("h1",{className:"tc",children:"Loading state......"})}}]),n}(r.Component);o.a.render(Object(u.jsx)(g,{}),document.getElementById("root")),s()}},[[16,1,2]]]);
//# sourceMappingURL=main.b6220eb1.chunk.js.map