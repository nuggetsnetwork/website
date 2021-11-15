(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{131:function(e,a,t){"use strict";var l=t(28),n=t(9),r=t(4),c=t.n(r),m=t(2),s=t.n(m),o=(t(19),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),i=function(e){var a,t=e.tag,r=e.className,m=e.type,i=Object(n.a)(e,["tag","className","type"]),E=c()(Object(l.a)({},m,!!m),r);return a=t||(!t&&o[m]?o[m]:"p"),s.a.createElement(a,Object.assign({},i,{className:E}))};i.defaultProps={type:"p"},a.a=i},134:function(e,a,t){"use strict";var l=t(9),n=t(2),r=t.n(n),c=(t(19),t(24)),m=t(171),s=t(172),o=t(131),i=c.a.create("page"),E=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,c=e.className,E=e.children,p=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),u=i.b("px-3",c);return r.a.createElement(n,Object.assign({className:u},p),r.a.createElement("div",{className:i.e("header")},a&&"string"===typeof a?r.a.createElement(o.a,{type:"h1",className:i.e("title")},a):a,t&&r.a.createElement(m.a,{className:i.e("breadcrumb")},r.a.createElement(s.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return r.a.createElement(s.a,{key:a,active:l},t)}))),E)};E.defaultProps={tag:"div",title:""},a.a=E},171:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(2),c=t.n(r),m=t(1),s=t.n(m),o=t(4),i=t.n(o),E=t(3),p={tag:E.p,listTag:E.p,className:s.a.string,listClassName:s.a.string,cssModule:s.a.object,children:s.a.node,"aria-label":s.a.string},u=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,m=e.children,s=e.tag,o=e.listTag,p=e["aria-label"],u=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),d=Object(E.l)(i()(a),r),h=Object(E.l)(i()("breadcrumb",t),r);return c.a.createElement(s,Object(l.a)({},u,{className:d,"aria-label":p}),c.a.createElement(o,{className:h},m))};u.propTypes=p,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},172:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(2),c=t.n(r),m=t(1),s=t.n(m),o=t(4),i=t.n(o),E=t(3),p={tag:E.p,active:s.a.bool,className:s.a.string,cssModule:s.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.active,m=e.tag,s=Object(n.a)(e,["className","cssModule","active","tag"]),o=Object(E.l)(i()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(m,Object(l.a)({},s,{className:o,"aria-current":r?"page":void 0}))};u.propTypes=p,u.defaultProps={tag:"li"},a.a=u},978:function(e,a,t){"use strict";t.r(a);var l=t(134),n=t(2),r=t.n(n),c=t(119),m=t(120),s=t(104),o=t(109),i=t(105),E=t(97),p=t(33),u=t(34),d=t(35),h=t(5),b=t(6),x=t(1),f=t.n(x),g=t(4),y=t.n(g),w=t(3),v={children:f.a.node,inline:f.a.bool,tag:w.p,color:f.a.string,className:f.a.string,cssModule:f.a.object},k=function(e){var a=e.className,t=e.cssModule,l=e.inline,n=e.color,c=e.tag,m=Object(b.a)(e,["className","cssModule","inline","color","tag"]),s=Object(w.l)(y()(a,!l&&"form-text",!!n&&"text-"+n),t);return r.a.createElement(c,Object(h.a)({},m,{className:s}))};k.propTypes=v,k.defaultProps={tag:"small",color:"muted"};var N=k,S=t(62),O={children:f.a.node,tag:w.p,className:f.a.string,cssModule:f.a.object,valid:f.a.bool,tooltip:f.a.bool},j={tag:"div",valid:void 0},T=function(e){var a=e.className,t=e.cssModule,l=e.valid,n=e.tooltip,c=e.tag,m=Object(b.a)(e,["className","cssModule","valid","tooltip","tag"]),s=n?"tooltip":"feedback",o=Object(w.l)(y()(a,l?"valid-"+s:"invalid-"+s),t);return r.a.createElement(c,Object(h.a)({},m,{className:o}))};T.propTypes=O,T.defaultProps=j;var M=T;a.default=function(){return r.a.createElement(l.a,{title:"Forms",breadcrumbs:[{name:"Forms",active:!0}]},r.a.createElement(c.a,null,r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(s.a,null,r.a.createElement(o.a,null,"Input Types"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail"},"Plain Text (Static)"),r.a.createElement(d.a,{plaintext:!0,value:"Some plain text/ static value",readOnly:!0})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail"},"Email"),r.a.createElement(d.a,{type:"email",name:"email",placeholder:"with a placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"examplePassword"},"Password"),r.a.createElement(d.a,{type:"password",name:"password",placeholder:"password placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleUrl"},"Url"),r.a.createElement(d.a,{type:"url",name:"url",id:"exampleUrl",placeholder:"url placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleNumber"},"Number"),r.a.createElement(d.a,{type:"number",name:"number",id:"exampleNumber",placeholder:"number placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleDatetime"},"Datetime"),r.a.createElement(d.a,{type:"datetime",name:"datetime",id:"exampleDatetime",placeholder:"datetime placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleDate"},"Date"),r.a.createElement(d.a,{type:"date",name:"date",id:"exampleDate",placeholder:"date placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleTime"},"Time"),r.a.createElement(d.a,{type:"time",name:"time",id:"exampleTime",placeholder:"time placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleColor"},"Color"),r.a.createElement(d.a,{type:"color",name:"color",id:"exampleColor",placeholder:"color placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleSearch"},"Search"),r.a.createElement(d.a,{type:"search",name:"search",id:"exampleSearch",placeholder:"search placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleSelect"},"Select"),r.a.createElement(d.a,{type:"select",name:"select"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleSelectMulti"},"Select Multiple"),r.a.createElement(d.a,{type:"select",name:"selectMulti",multiple:!0},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleText"},"Text Area"),r.a.createElement(d.a,{type:"textarea",name:"text"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleFile"},"File"),r.a.createElement(d.a,{type:"file",name:"file"}),r.a.createElement(N,{color:"muted"},"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.")),r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"radio"})," Option one is this and that\u2014be sure to include why it's great")),r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"checkbox"})," Check me out")))))),r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(s.a,null,r.a.createElement(o.a,null,"Form Grid"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleEmail",sm:2},"Email"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"email",name:"email",placeholder:"with a placeholder"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"examplePassword",sm:2},"Password"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"password",name:"password",placeholder:"password placeholder"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleSelect",sm:2},"Select"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"select",name:"select"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleSelectMulti",sm:2},"Select Multiple"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"select",name:"selectMulti",multiple:!0}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleText",sm:2},"Text Area"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"textarea",name:"text"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleFile",sm:2},"File"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"file",name:"file"}),r.a.createElement(N,{color:"muted"},"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."))),r.a.createElement(p.a,{tag:"fieldset",row:!0},r.a.createElement(u.a,{for:"checkbox2",sm:2},"Radio"),r.a.createElement(m.a,{sm:10},r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"radio",name:"radio2"})," Option one is this and that\u2014be sure to include why it's great")),r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"radio",name:"radio2"})," Option two can be something else and selecting it will deselect option one")),r.a.createElement(p.a,{check:!0,disabled:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"radio",name:"radio2",disabled:!0})," Option three is disabled")))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"checkbox2",sm:2},"Checkbox"),r.a.createElement(m.a,{sm:{size:10}},r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"checkbox",id:"checkbox2"})," Check me out")))),r.a.createElement(p.a,{check:!0,row:!0},r.a.createElement(m.a,{sm:{size:10,offset:2}},r.a.createElement(S.a,null,"Submit")))))))),r.a.createElement(c.a,null,r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(s.a,null,r.a.createElement(o.a,null,"Form Validation"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail"},"Input with success"),r.a.createElement(d.a,{valid:!0}),r.a.createElement(M,null,r.a.createElement("a",{href:"https://github.com/twbs/bootstrap/issues/23372"},"A bug")," ","fixed in (the currently unreleased) (",r.a.createElement("a",{href:"https://github.com/twbs/bootstrap/pull/23377"},"PR"),") bootstrap"," ",r.a.createElement("a",{href:"https://github.com/twbs/bootstrap/issues/23278"},"v4 beta-2")," ","shows invalid-feedback with is-valid inputs."),r.a.createElement(N,null,"Example help text that remains unchanged.")),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"examplePassword"},"Input with danger"),r.a.createElement(d.a,{valid:!1}),r.a.createElement(M,null,"Oh noes! that name is already taken"),r.a.createElement(N,null,"Example help text that remains unchanged.")))))),r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(s.a,null,r.a.createElement(o.a,null,"Hidden Labels"),r.a.createElement(i.a,null,r.a.createElement(E.a,{inline:!0},r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail",hidden:!0},"Email"),r.a.createElement(d.a,{type:"email",name:"email",placeholder:"Email"}))," ",r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"examplePassword",hidden:!0},"Password"),r.a.createElement(d.a,{type:"password",name:"password",placeholder:"Password"}))," ",r.a.createElement(S.a,null,"Submit")))))),r.a.createElement(c.a,null,r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(s.a,null,r.a.createElement(o.a,null,"Inline Form"),r.a.createElement(i.a,null,r.a.createElement(E.a,{inline:!0},r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail"},"Email")," ",r.a.createElement(d.a,{type:"email",name:"email",placeholder:"something@idk.cool"}))," ",r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"examplePassword"},"Password")," ",r.a.createElement(d.a,{type:"password",name:"password",placeholder:"don't tell!"}))," ",r.a.createElement(S.a,null,"Submit"))))),r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(s.a,null,r.a.createElement(o.a,null,"Inline Checkboxes"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,{check:!0,inline:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"checkbox"})," Some input")),r.a.createElement(p.a,{check:!0,inline:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"checkbox"})," Some other input"))))))),r.a.createElement(c.a,null,r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(s.a,null,r.a.createElement(o.a,null,"Input Sizing"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,{className:"mb-2",placeholder:"lg",bsSize:"lg"}),r.a.createElement(d.a,{className:"mb-2",placeholder:"default"}),r.a.createElement(d.a,{className:"mb-2",placeholder:"sm",bsSize:"sm"}),r.a.createElement(d.a,{className:"mb-2",type:"select",bsSize:"lg"},r.a.createElement("option",null,"Large Select")),r.a.createElement(d.a,{className:"mb-2",type:"select"},r.a.createElement("option",null,"Default Select")),r.a.createElement(d.a,{className:"mb-2",type:"select",bsSize:"sm"},r.a.createElement("option",null,"Small Select")))))),r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(s.a,null,r.a.createElement(o.a,null,"Input Grid Sizing"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleEmail",sm:2,size:"lg"},"Email"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"email",name:"email",placeholder:"lg",bsSize:"lg"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleEmail2",sm:2},"Email"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"email",name:"email",id:"exampleEmail2",placeholder:"default"})))))))))}}}]);
//# sourceMappingURL=21.3cb2214f.chunk.js.map