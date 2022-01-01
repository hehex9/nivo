"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[6128],{10995:function(e,o,t){t.d(o,{wp:function(){return B},gL:function(){return T},yI:function(){return K},_3:function(){return U},lG:function(){return F}});var n=t(27378),r=t(52770),i=t(84054),l=t(30454),a=t.n(l),u=t(95099),d=t.n(u),s=t(45638),c=t(89193),v=t(24246),f=t(58679);function h(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function b(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?b(Object(t),!0).forEach((function(o){h(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function y(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=e[t];return n}function g(e,o){if(e){if("string"==typeof e)return y(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,o):void 0}}function C(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,i=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done)&&(t.push(l.value),!o||t.length!==o);n=!0);}catch(u){r=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}}(e,o)||g(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M,k=function(e){var o,t=e.data,n=e.id,l=e.value,u=e.valueFormat,c=e.width,v=e.height,f=e.padding,h=e.leavesOnly,b=e.colors,m=e.colorBy,p=e.inheritColorFromParent,y=e.childColor,g=(0,r.LR)(n),C=(0,r.LR)(l),M=(0,r.O_)(u),k=(0,s.U)(b,m),j=(0,r.Fg)(),w=(0,s.Bf)(y,j),O=a()(t),E=(0,i.bT)(O).sum(C),F=(0,i.P2)().size([c,v]).padding(f)(E),I=h?F.leaves():F.descendants(),L=d()(I,"depth"),S=null!==(o=E.value)&&void 0!==o?o:0;return L.reduce((function(e,o){var t,n=g(o.data),r=o.value,i=100*r/S,l=o.ancestors().map((function(e){return g(e.data)}));o.parent&&(t=e.find((function(e){return e.id===g(o.parent.data)})));var a={id:n,path:l,value:r,percentage:i,formattedValue:u?M(r):"".concat(i.toFixed(2),"%"),x:o.x,y:o.y,radius:o.r,color:"",data:o.data,depth:o.depth,height:o.height};return p&&t&&a.depth>1?a.color=w(t):a.color=k(a),[].concat(x(e),[a])}),[])},j=function(e,o,t,r){return(0,n.useMemo)((function(){if(!o)return e;var n=e.find((function(e){return e.id===o}));if(!n)return e;var i=Math.min(t,r)/(2*n.radius),l=t/2-n.x*i,a=r/2-n.y*i;return e.map((function(e){return m(m({},e),{},{x:e.x*i+l,y:e.y*i+a,radius:e.radius*i})}))}),[e,o,t,r])},w=function(e){var o=e.nodes,t=e.label,i=e.filter,l=e.skipRadius,a=e.textColor,u=(0,r.LR)(t),d=(0,r.Fg)(),c=(0,s.Bf)(a,d),v=(0,n.useMemo)((function(){return o.filter((function(e){return e.radius>=l})).map((function(e){return{label:u(e),textColor:c(e),node:e}}))}),[o,l,u,c]);return(0,n.useMemo)((function(){return i?v.filter(i):v}),[v,i])},O=function(e,o){var t=o.onMouseEnter,r=o.onMouseMove,i=o.onMouseLeave,l=o.onClick;return(0,n.useMemo)((function(){return{onMouseEnter:t?function(o){t(e,o)}:void 0,onMouseMove:r?function(o){r(e,o)}:void 0,onMouseLeave:i?function(o){i(e,o)}:void 0,onClick:l?function(o){l(e,o)}:void 0}}),[e,t,r,i,l])},E=function(e){var o=e.nodes;return(0,n.useMemo)((function(){return{nodes:o}}),[o])},F={id:"id",value:"value",padding:0,leavesOnly:!1,layers:["circles","labels"],colors:{scheme:"nivo"},colorBy:"depth",inheritColorFromParent:!1,childColor:{from:"color",modifiers:[["darker",.3]]},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]},defs:[],fill:[],enableLabels:!1,label:"id",labelTextColor:{from:"color",modifiers:[["darker",1.6]]},labelsSkipRadius:8,isInteractive:!0,tooltip:function(e){var o=e.id,t=e.formattedValue,n=e.color;return(0,v.jsx)(c._5,{id:o,value:t,enableChip:!0,color:n})},animate:!0,motionConfig:"gentle",role:"img",pixelRatio:"undefined"!=typeof window&&null!==(M=window.devicePixelRatio)&&void 0!==M?M:1},I=function(e){return(0,f.to)([e],(function(e){return Math.max(0,e)}))},L=function(e){var o=e.nodes,t=e.borderWidth,i=e.borderColor,l=e.component,a=e.isInteractive,u=e.onMouseEnter,d=e.onMouseMove,h=e.onMouseLeave,b=e.onClick,p=e.tooltip,y=(0,c.lL)(),g=y.showTooltipFromEvent,C=y.hideTooltip,x=(0,n.useMemo)((function(){if(a)return function(e,o){g((0,n.createElement)(p,e),o),null==u||u(e,o)}}),[a,g,p,u]),M=(0,n.useMemo)((function(){if(a)return function(e,o){g((0,n.createElement)(p,e),o),null==d||d(e,o)}}),[a,g,p,d]),k=(0,n.useMemo)((function(){if(a)return function(e,o){C(),null==h||h(e,o)}}),[a,C,h]),j=(0,n.useMemo)((function(){if(a)return function(e,o){null==b||b(e,o)}}),[a,b]),w=(0,r.tf)(),O=w.animate,E=w.config,F=(0,r.Fg)(),L=(0,s.Bf)(i,F),S=(0,n.useMemo)((function(){return function(e){return{enter:function(o){return{x:o.x,y:o.y,radius:0,color:o.color,borderColor:e(o),opacity:0}},update:function(o){return{x:o.x,y:o.y,radius:o.radius,color:o.color,borderColor:e(o),opacity:1}},leave:function(o){return{x:o.x,y:o.y,radius:0,color:o.color,borderColor:e(o),opacity:0}}}}(L)}),[L]),P=(0,f.useTransition)(o,{keys:function(e){return e.id},initial:S.update,from:S.enter,enter:S.update,update:S.update,leave:S.leave,config:E,immediate:!O});return(0,v.jsx)(v.Fragment,{children:P((function(e,o){return(0,n.createElement)(l,{key:o.id,node:o,style:m(m({},e),{},{radius:I(e.radius),borderWidth:t}),onMouseEnter:x,onMouseMove:M,onMouseLeave:k,onClick:j})}))})},S=function(e){var o=e.node,t=e.style,n=e.onMouseEnter,r=e.onMouseMove,i=e.onMouseLeave,l=e.onClick,a=O(o,{onMouseEnter:n,onMouseMove:r,onMouseLeave:i,onClick:l});return(0,v.jsx)(f.q.circle,{cx:t.x,cy:t.y,r:t.radius,fill:o.fill||t.color,stroke:t.borderColor,strokeWidth:t.borderWidth,opacity:t.opacity,onMouseEnter:a.onMouseEnter,onMouseMove:a.onMouseMove,onMouseLeave:a.onMouseLeave,onClick:a.onClick},o.id)},P=function(e){var o=e.nodes,t=e.label,i=e.filter,l=e.skipRadius,a=e.textColor,u=e.component,d=(0,r.tf)(),s=d.animate,c=d.config,h=w({nodes:o,label:t,filter:i,skipRadius:l,textColor:a}),b=(0,n.useMemo)((function(){return{enter:function(e){return{x:e.node.x,y:e.node.y,radius:e.node.radius,textColor:e.textColor,opacity:0}},update:function(e){return{x:e.node.x,y:e.node.y,radius:e.node.radius,textColor:e.textColor,opacity:1}},leave:function(e){return{x:e.node.x,y:e.node.y,radius:e.node.radius,textColor:e.textColor,opacity:0}}}}),[]),p=(0,f.useTransition)(h,{keys:function(e){return e.node.id},initial:b.update,from:b.enter,enter:b.update,update:b.update,leave:b.leave,config:c,immediate:!s});return(0,v.jsx)(v.Fragment,{children:p((function(e,o){return(0,n.createElement)(u,{key:o.node.id,label:o.label,style:m(m({},e),{},{radius:I(e.radius)}),node:o.node})}))})},W=function(e){var o=e.node,t=e.label,n=e.style,i=(0,r.Fg)();return(0,v.jsx)(f.q.text,{x:n.x,y:n.y,textAnchor:"middle",dominantBaseline:"central",style:m(m({},i.labels.text),{},{fill:n.textColor,opacity:n.opacity,pointerEvents:"none"}),children:t},o.id)},R=function(e){var o=e.data,t=e.id,i=void 0===t?F.id:t,l=e.value,a=void 0===l?F.value:l,u=e.valueFormat,d=e.width,s=e.height,c=e.margin,f=e.padding,h=void 0===f?F.padding:f,b=e.leavesOnly,m=void 0===b?F.leavesOnly:b,p=e.colors,y=void 0===p?F.colors:p,g=e.colorBy,C=void 0===g?F.colorBy:g,x=e.inheritColorFromParent,M=void 0===x?F.inheritColorFromParent:x,w=e.childColor,O=void 0===w?F.childColor:w,I=e.borderWidth,R=void 0===I?F.borderWidth:I,B=e.borderColor,T=void 0===B?F.borderColor:B,A=e.circleComponent,z=void 0===A?S:A,H=e.defs,_=void 0===H?F.defs:H,q=e.fill,D=void 0===q?F.fill:q,U=e.enableLabels,V=void 0===U?F.enableLabels:U,G=e.label,K=void 0===G?F.label:G,$=e.labelsFilter,J=e.labelsSkipRadius,N=void 0===J?F.labelsSkipRadius:J,Q=e.labelTextColor,X=void 0===Q?F.labelTextColor:Q,Y=e.labelComponent,Z=void 0===Y?W:Y,ee=e.layers,oe=void 0===ee?F.layers:ee,te=e.isInteractive,ne=e.onMouseEnter,re=e.onMouseMove,ie=e.onMouseLeave,le=e.onClick,ae=e.tooltip,ue=void 0===ae?F.tooltip:ae,de=e.zoomedId,se=e.role,ce=void 0===se?F.role:se,ve=(0,r.Bs)(d,s,c),fe=ve.outerWidth,he=ve.outerHeight,be=ve.margin,me=ve.innerWidth,pe=ve.innerHeight,ye=k({data:o,id:i,value:a,valueFormat:u,width:me,height:pe,padding:h,leavesOnly:m,colors:y,colorBy:C,inheritColorFromParent:M,childColor:O}),ge=j(ye,de,me,pe),Ce=(0,n.useMemo)((function(){return(0,r.yU)(_,ge,D,{targetKey:"fill"})}),[_,ge,D]),xe={circles:null,labels:null};oe.includes("circles")&&(xe.circles=(0,v.jsx)(L,{nodes:ge,borderWidth:R,borderColor:T,isInteractive:te,onMouseEnter:ne,onMouseMove:re,onMouseLeave:ie,onClick:le,component:z,tooltip:ue},"circles")),V&&oe.includes("labels")&&(xe.labels=(0,v.jsx)(P,{nodes:ge,label:K,filter:$,skipRadius:N,textColor:X,component:Z},"labels"));var Me=E({nodes:ye});return(0,v.jsx)(r.tM,{width:fe,height:he,margin:be,defs:Ce,role:ce,children:oe.map((function(e,o){return void 0!==xe[e]?xe[e]:"function"==typeof e?(0,v.jsx)(n.Fragment,{children:(0,n.createElement)(e,Me)},o):null}))})},B=function(e){var o=e.theme,t=e.isInteractive,n=void 0===t?F.isInteractive:t,i=e.animate,l=void 0===i?F.animate:i,a=e.motionConfig,u=void 0===a?F.motionConfig:a,d=p(e,["theme","isInteractive","animate","motionConfig"]);return(0,v.jsx)(r.W2,{isInteractive:n,animate:l,motionConfig:u,theme:o,children:(0,v.jsx)(R,m({isInteractive:n},d))})},T=function(e){return(0,v.jsx)(r.d,{children:function(o){var t=o.width,n=o.height;return(0,v.jsx)(B,m({width:t,height:n},e))}})},A=function(e,o){return(0,f.to)([e,o],(function(e,o){return e-o}))},z=function(e){return(0,f.to)([e],(function(e){return 2*e}))},H=function(e){var o,t,n=e.node,r=e.style,i=e.onMouseEnter,l=e.onMouseMove,a=e.onMouseLeave,u=e.onClick,d=z(r.radius),s=O(n,{onMouseEnter:i,onMouseMove:l,onMouseLeave:a,onClick:u});return(0,v.jsx)(f.q.div,{style:{position:"absolute",top:A(r.y,r.radius),left:A(r.x,r.radius),height:d,width:d,borderRadius:r.radius,backgroundColor:r.color,borderWidth:(o=r.borderWidth,t=r.radius,(0,f.to)([t],(function(e){return Math.min(o,e)}))),borderStyle:"solid",borderColor:r.borderColor,boxSizing:"border-box"},onMouseEnter:s.onMouseEnter,onMouseMove:s.onMouseMove,onMouseLeave:s.onMouseLeave,onClick:s.onClick})},_=function(e){var o=e.node,t=e.label,n=e.style,i=(0,r.Fg)(),l=z(n.radius);return(0,v.jsx)(f.q.div,{style:m(m({},i.labels.text),{},{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:A(n.y,n.radius),left:A(n.x,n.radius),width:l,height:l,color:n.textColor,opacity:n.opacity,pointerEvents:"none"}),children:t},o.id)},q=function(e){var o=e.data,t=e.id,i=void 0===t?F.id:t,l=e.value,a=void 0===l?F.value:l,u=e.valueFormat,d=e.width,s=e.height,c=e.margin,f=e.padding,h=void 0===f?F.padding:f,b=e.leavesOnly,m=void 0===b?F.leavesOnly:b,p=e.colors,y=void 0===p?F.colors:p,g=e.colorBy,C=void 0===g?F.colorBy:g,x=e.inheritColorFromParent,M=void 0===x?F.inheritColorFromParent:x,w=e.childColor,O=void 0===w?F.childColor:w,I=e.borderWidth,S=void 0===I?F.borderWidth:I,W=e.borderColor,R=void 0===W?F.borderColor:W,B=e.circleComponent,T=void 0===B?H:B,A=e.enableLabels,z=void 0===A?F.enableLabels:A,q=e.label,D=void 0===q?F.label:q,U=e.labelsFilter,V=e.labelsSkipRadius,G=void 0===V?F.labelsSkipRadius:V,K=e.labelTextColor,$=void 0===K?F.labelTextColor:K,J=e.labelComponent,N=void 0===J?_:J,Q=e.layers,X=void 0===Q?F.layers:Q,Y=e.isInteractive,Z=e.onMouseEnter,ee=e.onMouseMove,oe=e.onMouseLeave,te=e.onClick,ne=e.tooltip,re=void 0===ne?F.tooltip:ne,ie=e.zoomedId,le=e.role,ae=void 0===le?F.role:le,ue=(0,r.Bs)(d,s,c),de=ue.outerWidth,se=ue.outerHeight,ce=ue.margin,ve=ue.innerWidth,fe=ue.innerHeight,he=k({data:o,id:i,value:a,valueFormat:u,width:ve,height:fe,padding:h,leavesOnly:m,colors:y,colorBy:C,inheritColorFromParent:M,childColor:O}),be=j(he,ie,ve,fe),me={circles:null,labels:null};X.includes("circles")&&(me.circles=(0,v.jsx)(L,{nodes:be,borderWidth:S,borderColor:R,isInteractive:Y,onMouseEnter:Z,onMouseMove:ee,onMouseLeave:oe,onClick:te,component:T,tooltip:re},"circles")),z&&X.includes("labels")&&(me.labels=(0,v.jsx)(P,{nodes:be,label:D,filter:U,skipRadius:G,textColor:$,component:N},"labels"));var pe=E({nodes:he});return(0,v.jsx)("div",{role:ae,style:{position:"relative",overflow:"hidden",width:de,height:se},children:(0,v.jsx)("div",{style:{position:"absolute",top:ce.top,left:ce.left},children:X.map((function(e,o){return void 0!==me[e]?me[e]:"function"==typeof e?(0,v.jsx)(n.Fragment,{children:(0,n.createElement)(e,pe)},o):null}))})})},D=function(e){var o=e.theme,t=e.isInteractive,n=void 0===t?F.isInteractive:t,i=e.animate,l=void 0===i?F.animate:i,a=e.motionConfig,u=void 0===a?F.motionConfig:a,d=p(e,["theme","isInteractive","animate","motionConfig"]);return(0,v.jsx)(r.W2,{isInteractive:n,animate:l,motionConfig:u,theme:o,children:(0,v.jsx)(q,m({isInteractive:n},d))})},U=function(e){return(0,v.jsx)(r.d,{children:function(o){var t=o.width,n=o.height;return(0,v.jsx)(D,m({width:t,height:n},e))}})},V=function(e){var o=e.data,t=e.id,i=void 0===t?F.id:t,l=e.value,a=void 0===l?F.value:l,u=e.valueFormat,f=e.width,h=e.height,b=e.margin,m=e.padding,p=void 0===m?F.padding:m,y=e.leavesOnly,g=void 0===y?F.leavesOnly:y,x=e.colors,M=void 0===x?F.colors:x,O=e.colorBy,E=void 0===O?F.colorBy:O,I=e.inheritColorFromParent,L=void 0===I?F.inheritColorFromParent:I,S=e.childColor,P=void 0===S?F.childColor:S,W=e.borderWidth,R=void 0===W?F.borderWidth:W,B=e.borderColor,T=void 0===B?F.borderColor:B,A=e.enableLabels,z=void 0===A?F.enableLabels:A,H=e.label,_=void 0===H?F.label:H,q=e.labelsFilter,D=e.labelsSkipRadius,U=void 0===D?F.labelsSkipRadius:D,V=e.labelTextColor,G=void 0===V?F.labelTextColor:V,K=e.isInteractive,$=e.onMouseMove,J=e.onClick,N=e.tooltip,Q=void 0===N?F.tooltip:N,X=e.zoomedId,Y=e.role,Z=void 0===Y?F.role:Y,ee=e.pixelRatio,oe=void 0===ee?F.pixelRatio:ee,te=(0,n.useRef)(null),ne=(0,r.Fg)(),re=(0,r.Bs)(f,h,b),ie=re.margin,le=re.innerWidth,ae=re.innerHeight,ue=re.outerWidth,de=re.outerHeight,se=k({data:o,id:i,value:a,valueFormat:u,width:le,height:ae,padding:p,leavesOnly:g,colors:M,colorBy:E,inheritColorFromParent:L,childColor:P}),ce=j(se,X,le,ae),ve=w({nodes:ce,label:_,filter:q,skipRadius:U,textColor:G}),fe=(0,s.Bf)(T,ne);(0,n.useEffect)((function(){if(te.current){te.current.width=ue*oe,te.current.height=de*oe;var e=te.current.getContext("2d");e.scale(oe,oe),e.fillStyle=ne.background,e.fillRect(0,0,ue,de),e.save(),e.translate(ie.left,ie.top),ce.forEach((function(o){R>0&&(e.strokeStyle=fe(o),e.lineWidth=R),e.beginPath(),e.arc(o.x,o.y,o.radius,0,2*Math.PI),e.fillStyle=o.color,e.fill(),R>0&&e.stroke()})),z&&(e.textAlign="center",e.textBaseline="middle",e.font="".concat(ne.labels.text.fontSize,"px ").concat(ne.labels.text.fontFamily),ve.forEach((function(o){e.fillStyle=o.textColor,e.fillText("".concat(o.label),o.node.x,o.node.y)})))}}),[te,le,ae,ue,de,ie.top,ie.left,ne,oe,ce,z,ve,R,fe]);var he=function(e){var o=e.nodes,t=e.canvasEl,i=e.margin,l=(0,n.useMemo)((function(){return d()(o,"height")}),[o]);return(0,n.useCallback)((function(e){if(!t.current)return null;var o=C((0,r.P6)(t.current,e),2),n=o[0],a=o[1];return l.find((function(e){return(0,r.Sp)(e.x,e.y,n-i.left,a-i.top)<=e.radius}))}),[t,i,l])}({nodes:ce,canvasEl:te,margin:ie}),be=(0,c.lL)(),me=be.showTooltipFromEvent,pe=be.hideTooltip,ye=(0,n.useCallback)((function(e){var o=he(e);o?(null==$||$(o,e),me((0,n.createElement)(Q,o),e)):pe()}),[he,me,Q,pe]),ge=(0,n.useCallback)((function(){pe()}),[pe]),Ce=(0,n.useCallback)((function(e){if(J){var o=he(e);o&&J(o,e)}}),[he,J]);return(0,v.jsx)("canvas",{ref:te,width:ue*oe,height:de*oe,style:{width:ue,height:de,cursor:K?"auto":"normal"},role:Z,onMouseEnter:K?ye:void 0,onMouseMove:K?ye:void 0,onMouseLeave:K?ge:void 0,onClick:K?Ce:void 0})},G=function(e){var o=e.isInteractive,t=void 0===o?F.isInteractive:o,n=e.theme,i=p(e,["isInteractive","theme"]);return(0,v.jsx)(r.W2,{isInteractive:t,theme:n,children:(0,v.jsx)(V,m({isInteractive:t},i))})},K=function(e){return(0,v.jsx)(r.d,{children:function(o){var t=o.width,n=o.height;return(0,v.jsx)(G,m({width:t,height:n},e))}})}}}]);
//# sourceMappingURL=012a0d7f220f502d08e25bfb12749a8ab15b25b0-85d9530447de8625bdd7.js.map