(this["webpackJsonpreact-simple-slider-example"]=this["webpackJsonpreact-simple-slider-example"]||[]).push([[0],{327:function(e,t,n){"use strict";n.r(t);n(73);var r=n(0),a=n.n(r),l=n(61),i=n.n(l),o=n(68),c=n(13),s=n(345),d=n(340),u=n(7),m=n(3),p=n(66),v=n(338),x=n(69),g=n(33);function f(e){var t=e.listLength,n=e.size,a=e.reverse,l=e.transition,i=Object(r.useState)(0),o=i[0],c=i[1];return{nextSlide:function(){return c((function(e){return e+1>t-1?0:e+1}))},prevSlide:function(){return c((function(e){return e-1<0?t-1:e-1}))},setSlide:function(e){return e>=0&&e<=t&&c(e)},classes:function(e){var t=e.size,n=e.currentSlide,a=e.reverse,l=e.transition,i=Object(r.useRef)("slider"+Math.random().toString(36).substr(2,9)),o=Object(r.useRef)(document.createElement("style")),c=Object(r.useRef)({card:i.current+"-card",flexBox:i.current+"-flexbox",root:i.current+"-root"});return Object(r.useEffect)((function(){var e=o.current;return document.getElementsByTagName("head")[0].appendChild(e),function(){document.getElementsByTagName("head")[0].removeChild(e)}}),[]),Object(r.useEffect)((function(){var e=c.current,r=(t.element+t.margin)*n;o.current.innerHTML="\n."+e.card+" {\n  width: "+t.element+"px;\n  margin-"+(a?"left":"right")+": "+t.margin+"px;\n  cursor: pointer;\n}\n\n."+e.root+" {\n  overflow: hidden;\n}\n\n."+e.flexBox+" {\n  transition: "+(l||"transform .3s ease-in-out")+";\n  transform: translate("+(a?"+":"-")+r+"px);\n  display: flex;\n  "+(a?"flex-direction: row-reverse":"")+"\n}"}),[c,n,t.element,t.margin,a,l]),c.current}({size:n,currentSlide:o,reverse:a,transition:l})}}var h=a.a.createContext({elementsDatas:[]});function b(e){var t=e.datas,n=e.currentSize,r=e.children,l=e.reverse,i=e.transition,o=f({listLength:t.length,size:n,reverse:l,transition:i}),c=o.classes,s=o.setSlide,d=o.nextSlide,u=o.prevSlide,m=a.a.useMemo((function(){return{nextSlide:d,prevSlide:u,classes:c,setSlide:s,elementsDatas:t}}),[]);return a.a.createElement(h.Provider,{value:m},r)}var E=function(){var e=a.a.useContext(h);if(!e)throw new Error("Context must be used with HorizontalSliderContext.Provider");return e};function y(e){var t=e.children,n=e.rootClassname,r=e.elementBoxClassname,l=E(),i=l.elementsDatas,o=l.classes,c=l.setSlide;return a.a.createElement("div",{className:Object(g.a)(n,null===o||void 0===o?void 0:o.root)},a.a.createElement("div",{className:Object(g.a)(null===o||void 0===o?void 0:o.flexBox,r)},i.map((function(e,n){return a.a.createElement("div",{key:e.id,onClick:function(){return null===c||void 0===c?void 0:c(n)}},a.a.cloneElement(t,{className:Object(g.a)(t.props.className,null===o||void 0===o?void 0:o.card),data:e}))}))))}var w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.forEach((function(e){return e&&e.apply(void 0,n)}))}};function j(e){var t=e.children,n=E().nextSlide;return a.a.cloneElement(t,{onClick:w(n,t.props.onClick)})}function S(e){var t=e.children,n=E().prevSlide;return a.a.cloneElement(t,{onClick:w(n,t.props.onClick)})}var k=[{id:0,text:"McNab",color:"#9b59b6"},{id:1,text:"Pumi",color:"#8e44ad"},{id:2,text:"Huntaway",color:"#273c75"},{id:3,text:"Koolie",color:"#192a56"},{id:4,text:"Kuvasz",color:"#3498db"},{id:5,text:"Mudi",color:"#2980b9"},{id:6,text:"Biard",color:"#7f8c8d"},{id:7,text:"Collies",color:"#95a5a6"},{id:8,text:"Tornjak",color:"#34495e"},{id:9,text:"Lurcher",color:"#2c3e50"},{id:10,text:"Longdog",color:"#e74c3c"},{id:11,text:"Hound",color:"#c0392b"},{id:12,text:"Lurcher",color:"#d35400"}],C=n(20),N=n(336),O=n(344),B=n(339),P=n(343);function z(e){var t=e.props,n=e.setProps,r=Object(N.b)(),l=Object(u.a)(r,2),i=l[0],o=l[1];return a.a.createElement(m.a,{className:i({border:"1px solid ".concat(o.colors.backgroundTertiary),marginRight:"16px"}),padding:"8px"},a.a.createElement("h6",{className:i({fontSize:"20px",margin:"0 0 16px 0",lineHeight:1,color:"white"})},"Interactive Slider Settings"),a.a.createElement(P.a,{checked:t.reverse,onChange:function(e){return n((function(t){return Object(C.a)(Object(C.a)({},t),{},{reverse:e.target.checked})}))},labelPlacement:"right",overrides:{Root:{style:function(){return{marginBottom:"16px"}}}}},"Enable reverse and change flexDirection"),a.a.createElement(P.a,{checked:t.one,onChange:function(e){return n((function(t){return Object(C.a)(Object(C.a)({},t),{},{one:e.target.checked})}))},labelPlacement:"right",overrides:{Root:{style:function(){return{marginBottom:"16px"}}}}},"Display only one card"),a.a.createElement(O.a,{label:"transition",caption:"the transition applied when the elements move"},a.a.createElement(B.a,{value:t.transition,onChange:function(e){return console.log(e)},clearOnEscape:!0})))}var D=n(341),R=n(337);var I=function(e){var t=e.className,n=e.data;return a.a.createElement("div",{className:t},a.a.createElement(m.a,{backgroundColor:null===n||void 0===n?void 0:n.color,color:"colorPrimary",padding:"8px"},a.a.createElement("p",null,null===n||void 0===n?void 0:n.text)))},A=function(){var e=a.a.useState({reverse:!1,transition:"transform .3s ease-in-out",one:!1}),t=Object(u.a)(e,2),n=t[0],r=t[1];return a.a.createElement(m.a,null,a.a.createElement(m.a,{width:"100%",display:"flex",justifyContent:"center"},a.a.createElement(z,{props:n,setProps:r}),a.a.createElement(m.a,{minWidth:["200px","400px","400px"]},a.a.createElement(m.a,{width:n.one?"116px":["200px","400px","400px"]},a.a.createElement(b,{transition:n.transition,reverse:n.reverse,datas:k,currentSize:{element:116,margin:10}},a.a.createElement(y,null,a.a.createElement(I,null)),a.a.createElement(S,null,a.a.createElement("button",null,"Prev")),a.a.createElement(j,null,a.a.createElement("button",null,"Next")))))),a.a.createElement(D.a,{language:"tsx",style:R.a},function(e){return"function Carousel() {\n  return (\n    <div".concat(e.one?" style={{ width: 116px }}":"",'>\n      <CarouselWrapper\n        transition="').concat(e.transition,'"').concat(e.reverse?"\n        reverse":"","\n        datas={datas}\n        currentSize={{ element: 116, margin: 10 }}>\n        <CarouselElement>\n          <Element />\n        </CarouselElement>\n        <PrevSlideAction>\n          <button>Prev</button>\n        </PrevSlideAction>\n        <NextSlideAction>\n          <button>Next</button>\n        </NextSlideAction>\n      </CarouselWrapper>\n    </div>\n  )\n};\n\nconst Element = ({ className, data }: SliderElementProps<DatasTypes>) => {\n  return (\n    <div className={className}>\n      <Block backgroundColor={data?.color}>\n        <p>{data?.text}</p>\n      </Block>\n    </div>\n  )\n}")}(n)))},H=n(342),T=[{id:0,src:"https://lenews.ch/wp-content/uploads/2016/05/Dogs-at-Nestle.jpg"},{id:1,src:"https://www.sbb.ch/content/dam/internet/keyvisual/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"},{id:2,src:"https://fun-dog-garderie.ch/wp-content/uploads/2019/06/Fun-Dog-Garderie-Piscine.jpg"},{id:3,src:"https://www.sbb.ch/content/dam/internet/keyvisual/Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"},{id:4,src:"https://static.secureholiday.net/static/CMS/photos/000/044/000044323.jpg"}],L=function(e){var t=e.className,n=e.data,r=Object(N.b)(),l=Object(u.a)(r,1)[0];return a.a.createElement("div",{className:t},a.a.createElement("div",{style:{backgroundRepeat:"no-repeat",backgroundSize:"cover"},className:l({overflow:"hidden",height:"250px",background:"url(".concat(null===n||void 0===n?void 0:n.src,")")})}))},M=function(){var e=Object(N.b)(),t=Object(u.a)(e,2),n=t[0],r=t[1];return a.a.createElement(m.a,{margin:"8px",display:"flex",alignItems:"center"},a.a.createElement(b,{datas:T,currentSize:{element:400,margin:16}},a.a.createElement(S,null,a.a.createElement(H.a,{overrides:{Root:{style:function(){return{position:"relative",left:"24px",zIndex:2}}}},kind:"secondary",shape:"circle",children:"-"})),a.a.createElement(y,{rootClassname:n({width:"400px",border:"2px solid ".concat(r.colors.buttonSecondaryFill),borderRadius:"4px"})},a.a.createElement(L,null)),a.a.createElement(j,null,a.a.createElement(H.a,{overrides:{Root:{style:function(){return{position:"relative",right:"24px"}}}},kind:"secondary",shape:"circle",children:"+"}))))},_=n(32);function F(e){var t=e.title,n=e.description,r=e.children,l=Object(N.b)(),i=Object(u.a)(l,2),o=i[0],c=i[1];return a.a.createElement(m.a,{className:o({borderBottom:"1px solid ".concat(c.colors.backgroundTertiary)}),padding:["8px","8px","16px","16px"],display:"flex",flexDirection:"column"},a.a.createElement(v.a,{styleLevel:3,className:o({margin:"0",fontSize:"32px",color:c.colors.white})},t),a.a.createElement(_.a,null,n),a.a.createElement(m.a,{display:"flex",justifyContent:"center"},r))}function W(){var e=Object(N.b)(),t=Object(u.a)(e,1)[0];return a.a.createElement(m.a,{margin:"auto",display:"flex",flexDirection:"column",height:"100%",width:["100%","100%","1000px","1000px"]},a.a.createElement(p.b,null,a.a.createElement(v.a,{overrides:{Block:{style:function(){return{margin:"0 0 16px 0",textAlign:"center"}}}}},"react-very-light-carousel"),a.a.createElement(m.a,{marginBottom:"16px",display:"flex",flexDirection:"column",alignItems:"center"},a.a.createElement(_.b,null,"Simple react carousel easy to integrate."),a.a.createElement(m.a,{display:"flex",alignItems:"center"},a.a.createElement(x.a,{href:"https://github.com"},a.a.createElement("img",{src:"https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png",className:t({width:"64px",height:"auto",margin:"8px"}),alt:"github logo"})))),a.a.createElement(F,{title:"Interactive example",description:"Slider with very little basic code. It is possible to see several cards. Try clicking on a card, it will be displayed first."},a.a.createElement(A,null)),a.a.createElement(F,{title:"Exemple 2",description:"Displays only one element. It is easy to display an image, with buttons and custom elements."},a.a.createElement(a.a.Fragment,null,a.a.createElement(M,null)))))}var q=new o.a;function G(){return a.a.createElement(c.a,{value:q},a.a.createElement(s.a,{theme:d.a},a.a.createElement(m.a,{backgroundColor:"backgroundPrimary",display:"flex",minHeight:"100vh",padding:["8px","16px","32px"]},a.a.createElement(W,null))))}i.a.render(a.a.createElement(G,null),document.getElementById("root"))},72:function(e,t,n){e.exports=n(327)},73:function(e,t,n){}},[[72,1,2]]]);
//# sourceMappingURL=main.febcbb20.chunk.js.map