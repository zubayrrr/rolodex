(this.webpackJsonprolodex=this.webpackJsonprolodex||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n(3),o=n.n(c),a=(n(13),n(4)),i=n(5),h=n(7),l=n(6),d=(n(14),n(15),n(16),function(e){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:e.monster.name}),Object(r.jsx)("h2",{children:e.monster.name}),Object(r.jsx)("p",{children:e.monster.email})]})}),u=function(e){return Object(r.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(r.jsx)(d,{monster:e},e.id)}))})},j=(n(17),function(e){var t=e.placeholder,n=e.handleSearch;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"search",className:"search-box",placeholder:t,onChange:n})})}),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleSearch=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{style:{color:"#95dada"},children:"Monsters Rolodex"}),Object(r.jsx)(j,{placeholder:"Search Monsters",handleSearch:this.handleSearch}),Object(r.jsx)(u,{monsters:s})]})}}]),n}(s.Component);o.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.e76a0c04.chunk.js.map