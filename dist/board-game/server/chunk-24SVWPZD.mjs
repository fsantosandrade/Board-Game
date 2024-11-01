import './polyfills.server.mjs';
import{A as b,B as h,C as x,H as q,K as H,M as U,N as J,Q as K,U as W,X,a as z,b as _,c as C,d as g,e as O,f as G,g as a,h as Q,i as v,j as f,k as P,l as S,m as u,n as w,o as M,p as o,q as r,r as p,s as y,t as m,u as l,v as L,w as B,x as Z,y as c,z as I}from"./chunk-VZCLLVVO.mjs";import{h as k}from"./chunk-5XUXGTUW.mjs";var D=class i{player=0;color="";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-player"]],inputs:{player:"player",color:"color"},standalone:!0,features:[h],decls:3,vars:3,consts:[[1,"container"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"span"),c(2),r()()),t&2&&(a(),P("border-color",n.color),a(),I(n.player))},styles:[".container[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem;width:20px;height:20px;background-color:#fff;padding:0 10px;border-radius:50%;border:5px solid white}"]})};var ie=(i,e)=>e.id;function oe(i,e){if(i&1&&p(0,"app-player",4),i&2){let t=l().$implicit;f("player",t.id)("color",t.color)}}function re(i,e){if(i&1&&v(0,oe,1,2,"app-player",4),i&2){let t=e.$implicit,n=l();u(n.cardNumber===t.position?0:-1)}}var T=class i{cardImg="";color="";players=[];cardNumber=0;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-card-game"]],inputs:{cardImg:"cardImg",color:"color",players:"players",cardNumber:"cardNumber"},standalone:!0,features:[h],decls:6,vars:3,consts:[[1,"container"],[1,"card"],[3,"src"],[1,"players"],[3,"player","color"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1),p(2,"img",2),r(),o(3,"div",3),w(4,re,1,1,null,null,ie),r()()),t&2&&(P("border-color",n.color),a(2),f("src",n.cardImg,G),a(2),M(n.players))},dependencies:[D],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:150px;height:150px;border:10px solid white;border-radius:20px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{position:absolute;z-index:1}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px}.container[_ngcontent-%COMP%]   .players[_ngcontent-%COMP%]{width:150px;position:absolute;z-index:2;display:flex;flex-flow:row wrap;justify-content:center;align-items:center;gap:25px}"]})};function ae(i,e){if(i&1){let t=y();o(0,"div",6),m("click",function(){C(t);let s=l();return g(s.rollDice())}),p(1,"span",7),r()}}function se(i,e){if(i&1){let t=y();o(0,"div",8),m("click",function(){C(t);let s=l();return g(s.rollDice())}),p(1,"span",7)(2,"span",7),r()}}function le(i,e){if(i&1){let t=y();o(0,"div",9),m("click",function(){C(t);let s=l();return g(s.rollDice())}),p(1,"span",7)(2,"span",7)(3,"span",7),r()}}function pe(i,e){if(i&1){let t=y();o(0,"div",10),m("click",function(){C(t);let s=l();return g(s.rollDice())}),o(1,"div",11),p(2,"span",7)(3,"span",7),r(),o(4,"div",11),p(5,"span",7)(6,"span",7),r()()}}function ce(i,e){if(i&1){let t=y();o(0,"div",12),m("click",function(){C(t);let s=l();return g(s.rollDice())}),o(1,"div",11),p(2,"span",7)(3,"span",7),r(),o(4,"div",11),p(5,"span",7),r(),o(6,"div",11),p(7,"span",7)(8,"span",7),r()()}}function de(i,e){if(i&1){let t=y();o(0,"div",13),m("click",function(){C(t);let s=l();return g(s.rollDice())}),o(1,"div",11),p(2,"span",7)(3,"span",7)(4,"span",7),r(),o(5,"div",11),p(6,"span",7)(7,"span",7)(8,"span",7),r()()}}var F=class i{diceFaces=[!0,!1,!1,!1,!1,!1];canRoll=!1;interval;rollDuration=1e3;diceRolled=new O;rollDice(){if(!this.canRoll)return;let e=0;this.interval=setInterval(()=>{this.resetDice(),this.diceFaces[e]=!0,e=(e+1)%6},100),setTimeout(()=>{clearInterval(this.interval),this.showRandomFace()},this.rollDuration)}resetDice(){this.diceFaces.fill(!1)}showRandomFace(){let e=Math.floor(Math.random()*6);this.resetDice(),this.diceFaces[e]=!0,this.diceRolled.emit(e+1)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-dice"]],inputs:{canRoll:"canRoll"},outputs:{diceRolled:"diceRolled"},standalone:!0,features:[h],decls:6,vars:6,consts:[[1,"first-face"],[1,"second-face"],[1,"third-face"],[1,"fourth-face"],[1,"fifth-face"],[1,"sixth-face"],[1,"first-face",3,"click"],[1,"pip"],[1,"second-face",3,"click"],[1,"third-face",3,"click"],[1,"fourth-face",3,"click"],[1,"column"],[1,"fifth-face",3,"click"],[1,"sixth-face",3,"click"]],template:function(t,n){t&1&&v(0,ae,2,0,"div",0)(1,se,3,0,"div",1)(2,le,4,0,"div",2)(3,pe,7,0,"div",3)(4,ce,9,0,"div",4)(5,de,9,0,"div",5),t&2&&(u(n.diceFaces[0]?0:-1),a(),u(n.diceFaces[1]?1:-1),a(),u(n.diceFaces[2]?2:-1),a(),u(n.diceFaces[3]?3:-1),a(),u(n.diceFaces[4]?4:-1),a(),u(n.diceFaces[5]?5:-1))},styles:[".first-face[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.second-face[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.second-face[_ngcontent-%COMP%]   .pip[_ngcontent-%COMP%]:nth-of-type(2){align-self:flex-end}.third-face[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.third-face[_ngcontent-%COMP%]   .pip[_ngcontent-%COMP%]:nth-of-type(2){align-self:center}.third-face[_ngcontent-%COMP%]   .pip[_ngcontent-%COMP%]:nth-of-type(3){align-self:flex-end}.fourth-face[_ngcontent-%COMP%], .sixth-face[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.fourth-face[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%], .sixth-face[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.fifth-face[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.fifth-face[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.fifth-face[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:nth-of-type(2){justify-content:center}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;vertical-align:center;flex-wrap:wrap;align-content:center;font-family:Open Sans,sans-serif;background:linear-gradient(top,#222,#333)}[class$=face][_ngcontent-%COMP%]{margin:0;padding:6px;cursor:pointer;background-color:#e7e7e7;width:54px;height:54px;object-fit:contain;box-shadow:inset 0 5px #fff,inset 0 -5px #bbb,inset 5px 0 #d7d7d7,inset -5px 0 #d7d7d7;border-radius:10%}.pip[_ngcontent-%COMP%]{display:block;width:10px;height:10px;border-radius:50%;margin:2px;background-color:#333;box-shadow:inset 0 3px #111,inset 0 -3px #555}"]})};function me(i,e){return this.optionsValid}function ue(i,e){if(i&1){let t=y();c(0),o(1,"input",5),m("change",function(){C(t);let s=l().$implicit,d=l(3);return g(d.selectOption(s))}),r()}if(i&2){let t=l().$implicit,n=l(3);b(" ",t,": "),a(),f("id",t)("checked",n.selected===t)}}function fe(i,e){if(i&1&&v(0,ue,2,3,"input",4),i&2){let t=e.$implicit;u(t!==0?0:-1)}}function _e(i,e){if(i&1&&(o(0,"div",2),w(1,fe,1,1,null,null,me,!0),r()),i&2){let t=l(2);a(),M(t.optionsValid)}}function Ce(i,e){if(i&1){let t=y();o(0,"div",0)(1,"div",1)(2,"h1"),c(3),r(),o(4,"p"),c(5),r(),v(6,_e,3,0,"div",2),o(7,"button",3),m("click",function(){C(t);let s=l();return g(s.closePopup())}),c(8,"Ok!"),r()()()}if(i&2){let t=l();a(),P("background-color",t.color),a(2),b("Voc\xEA tirou: ",t.card,""),a(2),I(t.description),a(),u(t.options?6:-1)}}var V=class i{close=!1;card="";description="";color="";optionsValid=[];closeEvent=new O;closePopup(){this.close=!1,this.optionSelected.emit(this.selected),this.closeEvent.emit()}optionSelected=new O;selected;options=!1;selectOption(e){this.selected=this.selected===e?void 0:e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-information"]],inputs:{close:"close",card:"card",description:"description",color:"color",optionsValid:"optionsValid",options:"options"},outputs:{closeEvent:"closeEvent",optionSelected:"optionSelected"},standalone:!0,features:[h],decls:1,vars:1,consts:[[1,"container"],[1,"content"],[1,"players"],[3,"click"],["type","checkbox","name","option",3,"id","checked"],["type","checkbox","name","option",3,"change","id","checked"]],template:function(t,n){t&1&&v(0,Ce,9,5,"div",0),t&2&&u(n.close?0:-1)},styles:[".container[_ngcontent-%COMP%]{width:100vw;height:100vh;position:absolute;top:0;right:0;z-index:99;display:flex;flex-flow:column;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{text-align:center;color:#fff;padding:100px;border-radius:10px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;padding:10px 45px;border-radius:20px;transition:.3s ease;cursor:pointer}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#333;color:#fff;font-weight:600}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .players[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:10px 5px;padding:5px 10px;border-radius:15px;transition:.3s ease;cursor:pointer}"]})};var Y=[{img:"",color:"",type:0,position:1,description:"",title:""},{img:"",color:"",type:0,position:2,description:"",title:""},{img:"",color:"",type:0,position:3,description:"",title:""},{img:"",color:"",type:0,position:4,description:"",title:""},{img:"",color:"",type:0,position:5,description:"",title:""},{img:"",color:"",type:0,position:6,description:"",title:""},{img:"",color:"",type:0,position:7,description:"",title:""},{img:"",color:"",type:0,position:8,description:"",title:""},{img:"",color:"",type:0,position:9,description:"",title:""},{img:"",color:"",type:0,position:10,description:"",title:""},{img:"",color:"",type:0,position:11,description:"",title:""},{img:"",color:"",type:0,position:12,description:"",title:""},{img:"",color:"",type:0,position:13,description:"",title:""},{img:"",color:"",type:0,position:14,description:"",title:""},{img:"",color:"",type:0,position:15,description:"",title:""},{img:"",color:"",type:0,position:16,description:"",title:""},{img:"",color:"",type:0,position:17,description:"",title:""},{img:"",color:"",type:0,position:18,description:"",title:""},{img:"",color:"",type:0,position:19,description:"",title:""},{img:"",color:"",type:0,position:20,description:"",title:""},{img:"",color:"",type:0,position:21,description:"",title:""},{img:"",color:"",type:0,position:22,description:"",title:""},{img:"",color:"",type:0,position:23,description:"",title:""},{img:"",color:"",type:0,position:24,description:"",title:""}];var A=class i{cases=Y;maxLucky=11;maxBad=6;maxCoringa=6;lucky=0;bad=0;coringa=0;constructor(){}atributionTypes(){let e=[...Array(11).fill(2),...Array(6).fill(3),...Array(6).fill(4)];for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return this.cases.map((t,n)=>{n===0?t.type=1:t.type=e[n-1],this.setAtributes(t)}),this.cases}setAtributes(e){switch(e.type){case 1:e.color="#546E7A",e.img="imgs/start.png",e.title="Start",e.description="sdsa";break;case 2:e.color="#5BA821",e.img="imgs/lucky.png",e.title="SORTE",e.description="Voc\xEA caiu na casa de sorte e ganhou: ";break;case 3:e.color="#F44336 ",e.img="imgs/bad.png",e.title="AZAR",e.description="Voc\xEA caiu na casa de azar e perdeu:";break;case 4:e.color="#FAC556",e.img="imgs/coringa.png",e.title="ALEAT\xD3RIA",e.description="...";break;default:break}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"})};var ye=["dice"],he=(i,e)=>e.position,j=()=>({color:"green","font-weight":"bold"}),N=()=>({color:"black","font-weight":"normal"});function xe(i,e){if(i&1&&p(0,"app-card-game",2),i&2){let t=e.$implicit,n=l();f("cardImg",t.img)("color",t.color)("cardNumber",t.position)("players",n.players)}}function ve(i,e){i&1&&(o(0,"h1"),c(1,"Loading..."),r())}var $=class i{constructor(e){this.caseService=e}title="board-game";casas=[];turns=[!0,!1,!1,!1];turnoAtual=0;players=[{id:1,color:"red",position:0,points:0},{id:2,color:"purple",position:0,points:0},{id:3,color:"yellow",position:0,points:0},{id:4,color:"orange",position:0,points:0}];playerSelectedOnRandowCard=0;popupIsClosed=!1;titlePopup="";descriptionPopup="";colorPopup="";optionsIsClosed=!1;optionsValid=[];diceComponent;ngOnInit(){this.casas=this.caseService.atributionTypes(),this.players.forEach(e=>{e.position=1})}onPopupClose(){this.popupIsClosed=!1}onRoll(e){return k(this,null,function*(){this.turns.fill(!1),this.players[this.turnoAtual].position+=e,this.players[this.turnoAtual].position>24&&(this.players[this.turnoAtual].position=1+(this.players[this.turnoAtual].position-25)),yield this.popup(this.casas[this.players[this.turnoAtual].position-1],this.players[this.turnoAtual]),this.advanceTurn()})}popup(e,t){let n=Math.floor(Math.random()*6)+1;switch(e.type){case 2:this.titlePopup=e.title,this.descriptionPopup=e.description+` ${n} ponto(s)!`,this.colorPopup=e.color,this.popupIsClosed=!0,this.attPoints(t,n,"sorte");break;case 3:this.titlePopup=e.title,this.descriptionPopup=e.description+` ${n} ponto(s)!`,this.colorPopup=e.color,this.popupIsClosed=!0,this.attPoints(t,n,"azar");break;case 4:let s=Math.floor(Math.random()*10)+1;switch(this.titlePopup=e.title,this.colorPopup=e.color,this.popupIsClosed=!0,1){case 1:this.descriptionPopup=`Escolha alguem para voltar ${n} casas!`,this.attPoints(t,n,"coringa",1);break}break;default:this.popupIsClosed=!1;break}}advanceTurn(){this.turnoAtual===3?this.turnoAtual=0:this.turnoAtual++,this.turns[this.turnoAtual]=!0}attPoints(e,t,n,s){return k(this,null,function*(){if(n==="sorte")e.points+=t;else if(n==="azar")e.points-=t,e.points<0&&(e.points=0);else if(n==="coringa")switch(s){case 1:this.optionsValid.length=0,this.optionsValid=this.players.map(d=>d.id!==e.id?d.id:0),this.optionsIsClosed=!0,yield this.waitForVariableChange(()=>this.playerSelectedOnRandowCard),this.players[this.playerSelectedOnRandowCard-1].position-=t,this.players[this.playerSelectedOnRandowCard-1].position<=0&&(this.players[this.playerSelectedOnRandowCard-1].position=0),this.optionsIsClosed=!1;break;case 2:console.log(2);break;case 3:console.log(3);break}})}onOptionSelected(e){this.playerSelectedOnRandowCard=e}waitForVariableChange(e,t=100){return k(this,null,function*(){let n=e();return new Promise(s=>{let d=setInterval(()=>{e()!==n&&(clearInterval(d),s())},t)})})}static \u0275fac=function(t){return new(t||i)(Q(A))};static \u0275cmp=_({type:i,selectors:[["app-root"]],viewQuery:function(t,n){if(t&1&&L(ye,5),t&2){let s;B(s=Z())&&(n.diceComponent=s.first)}},standalone:!0,features:[h],decls:33,vars:31,consts:[[1,"container"],[1,"cards"],[3,"cardImg","color","cardNumber","players"],[1,"rolls"],[3,"diceRolled","canRoll"],[3,"closeEvent","optionSelected","close","color","card","description","options","optionsValid"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1),w(2,xe,1,4,"app-card-game",2,he,!1,ve,2,0,"h1"),r(),o(5,"div",3)(6,"ul")(7,"li")(8,"span"),c(9,"Player 1"),r(),o(10,"app-dice",4),m("diceRolled",function(d){return n.onRoll(d)}),r(),o(11,"span"),c(12),r()(),o(13,"li")(14,"span"),c(15,"Player 2"),r(),o(16,"app-dice",4),m("diceRolled",function(d){return n.onRoll(d)}),r(),o(17,"span"),c(18),r()(),o(19,"li")(20,"span"),c(21,"Player 3"),r(),o(22,"app-dice",4),m("diceRolled",function(d){return n.onRoll(d)}),r(),o(23,"span"),c(24),r()(),o(25,"li")(26,"span"),c(27,"Player 4"),r(),o(28,"app-dice",4),m("diceRolled",function(d){return n.onRoll(d)}),r(),o(29,"span"),c(30),r()()()()(),o(31,"app-information",5),m("closeEvent",function(){return n.onPopupClose()})("optionSelected",function(d){return n.onOptionSelected(d)}),r(),p(32,"router-outlet")),t&2&&(a(2),M(n.casas),a(6),S(n.turns[0]?x(23,j):x(24,N)),a(2),f("canRoll",n.turns[0]),a(2),b("Pontua\xE7\xE3o: ",n.players[0].points,""),a(2),S(n.turns[1]?x(25,j):x(26,N)),a(2),f("canRoll",n.turns[1]),a(2),b("Pontua\xE7\xE3o: ",n.players[1].points,""),a(2),S(n.turns[2]?x(27,j):x(28,N)),a(2),f("canRoll",n.turns[2]),a(2),b("Pontua\xE7\xE3o: ",n.players[2].points,""),a(2),S(n.turns[3]?x(29,j):x(30,N)),a(2),f("canRoll",n.turns[3]),a(2),b("Pontua\xE7\xE3o: ",n.players[3].points,""),a(),f("close",n.popupIsClosed)("color",n.colorPopup)("card",n.titlePopup)("description",n.descriptionPopup)("options",n.optionsIsClosed)("optionsValid",n.optionsValid))},dependencies:[W,T,F,V],styles:[".container[_ngcontent-%COMP%]{padding:10px;width:98vw}.container[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{margin:auto;display:grid;grid-template-columns:repeat(8,1fr);gap:15px}.container[_ngcontent-%COMP%]   .rolls[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:40px;list-style:none}.container[_ngcontent-%COMP%]   .rolls[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-flow:column;align-items:center;font-size:1.5rem;font-weight:600;gap:10px}"]})};var ee=[];var te={providers:[q({eventCoalescing:!0}),X(ee),J()]};var be={providers:[K()]},ne=H(te,be);var Pe=()=>U($,ne),st=Pe;export{st as a};
