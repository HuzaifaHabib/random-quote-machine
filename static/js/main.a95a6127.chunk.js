(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,o){e.exports=o(30)},23:function(e,t,o){},24:function(e,t,o){},30:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),u=o(17),r=o(14),c=o.n(r),s=(o(23),o(3)),l=o(4),i=o(6),m=o(5),d=o(7),h=(o(24),o(1)),b=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],f=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={allquotes:"",quotetext:"",author:"",error:null},o.newQuote=o.newQuote.bind(Object(h.a)(o)),o.getRandomQuote=o.getRandomQuote.bind(Object(h.a)(o)),o.setRandomQuote=o.setRandomQuote.bind(Object(h.a)(o)),o.customQuote=o.customQuote.bind(Object(h.a)(o)),o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){var o=t.quotes;console.log(o);var a=o[Math.floor(Math.random()*o.length)];e.setState({allquotes:o,quotetext:a.quote,author:a.author})}).catch(function(t){e.setState({allquotes:"",quotetext:t.message,author:"Server",error:t});prompt("Would You like to Enter Custom Quote");e.customQuote()})}},{key:"customQuote",value:function(){var e=prompt("Enter Your Custom Quote"),t=prompt("Enter the custom author name");""==e||void 0==e?alert("No Quote recieved"):this.setState({quotetext:e,author:t})}},{key:"getRandomQuote",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"setRandomQuote",value:function(){console.log("set Random Quote Triggered");var e=this.state.allquotes,t=this.getRandomQuote(e);this.setState({quotetext:t.quote,author:t.author})}},{key:"newQuote",value:function(e){console.log("NewQuote Triggered"),null!=this.state.error?(console.log(this.state.error.message),this.customQuote()):this.setRandomQuote(e);var t=Math.floor(Math.random()*b.length);document.body.style.backgroundColor=b[t],document.getElementById("quote-text").style.color=b[t],document.getElementById("new-quote").style.backgroundColor=b[t],document.getElementById("tumblr-quote").style.backgroundColor=b[t],document.getElementById("tweet-quote").style.backgroundColor=b[t]}},{key:"render",value:function(){return n.a.createElement("div",{id:"wrapper"},n.a.createElement("div",{id:"quote-box"},n.a.createElement("div",{id:"quote-text"},n.a.createElement("div",{className:"quote-text"},n.a.createElement("i",{className:"fa fa-quote-left"}," "),n.a.createElement("span",{id:"quote-text"},this.state.quotetext))),n.a.createElement("div",{className:"quote-author"},"-- ",n.a.createElement("span",{id:"author"},this.state.author)),n.a.createElement("div",{className:"buttons-div"},n.a.createElement("a",{className:"button",id:"tweet-quote",title:"Tweet this quote!",target:"_blank"},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("a",{className:"button",id:"tumblr-quote",title:"Post this quote on tumblr!",target:"_blank"},n.a.createElement("i",{className:"fa fa-tumblr"})),n.a.createElement("button",{className:"button",id:"new-quote",onClick:this.newQuote},"New quote"))),n.a.createElement("div",{class:"footer"}," by ",n.a.createElement("a",{href:"https://facebook.com/hero.huzaifahabib"},"Hero")))}}]),t}(n.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null))}}]),t}(a.Component);o(25);c.a.render(n.a.createElement(u.a,null,n.a.createElement(E,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a95a6127.chunk.js.map