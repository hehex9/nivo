"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[7606],{44365:function(e,t,n){n.d(t,{dk:function(){return q},RD:function(){return b},rj:function(){return G},VT:function(){return O},DZ:function(){return V},RN:function(){return S},FA:function(){return B}});var r=n(27378),o=n(58679),i=n(52770),a=n(18693),l=n(82171),s=n(6914),c=n(24246),u=n(23615),d=n.n(u);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t,n=e.axis,r=e.scale,o=e.ticksPosition,a=e.tickValues,l=e.tickSize,c=e.tickPadding,u=e.tickRotation,d=e.engine,f=void 0===d?"svg":d,m=(0,s.xX)(r,a),g=i.a6[f],y="bandwidth"in r?(0,s.Gv)(r):r,x={lineX:0,lineY:0},h={textX:0,textY:0},v="object"==typeof document&&"rtl"===document.dir,k=g.align.center,b=g.baseline.center;return"x"===n?(t=function(e){var t;return{x:null!==(t=y(e))&&void 0!==t?t:0,y:0}},x.lineY=l*("after"===o?1:-1),h.textY=(l+c)*("after"===o?1:-1),b="after"===o?g.baseline.top:g.baseline.bottom,0===u?k=g.align.center:"after"===o&&u<0||"before"===o&&u>0?(k=g.align[v?"left":"right"],b=g.baseline.center):("after"===o&&u>0||"before"===o&&u<0)&&(k=g.align[v?"right":"left"],b=g.baseline.center)):(t=function(e){var t;return{x:0,y:null!==(t=y(e))&&void 0!==t?t:0}},x.lineX=l*("after"===o?1:-1),h.textX=(l+c)*("after"===o?1:-1),k="after"===o?g.align.left:g.align.right),{ticks:m.map((function(e){return p(p(p({key:"number"==typeof e||"string"==typeof e?e:"".concat(e),value:e},t(e)),x),h)})),textAlign:k,textBaseline:b}},y=function(e,t){if(void 0===e||"function"==typeof e)return e;if("time"===t.type){var n=(0,a.i$)(e);return function(e){return n(e instanceof Date?e:new Date(e))}}return(0,l.WU)(e)},x=function(e){var t,n=e.width,r=e.height,o=e.scale,i=e.axis,a=e.values,l=(t=a,Array.isArray(t)?a:void 0)||(0,s.xX)(o,a),c="bandwidth"in o?(0,s.Gv)(o):o;return"x"===i?l.map((function(e){var t,n;return{key:"".concat(e),x1:null!==(t=c(e))&&void 0!==t?t:0,x2:null!==(n=c(e))&&void 0!==n?n:0,y1:0,y2:r}})):l.map((function(e){var t,r;return{key:"".concat(e),x1:0,x2:n,y1:null!==(t=c(e))&&void 0!==t?t:0,y2:null!==(r=c(e))&&void 0!==r?r:0}}))},h=function(e){var t,n=e.value,a=e.format,l=e.lineX,s=e.lineY,u=e.onClick,d=e.textBaseline,f=e.textAnchor,m=e.animatedProps,g=(0,i.Fg)(),y=null!==(t=null==a?void 0:a(n))&&void 0!==t?t:n,x=(0,r.useMemo)((function(){var e={opacity:m.opacity};return u?{style:p(p({},e),{},{cursor:"pointer"}),onClick:function(e){return u(e,y)}}:{style:e}}),[m.opacity,u,y]);return(0,c.jsxs)(o.q.g,p(p({transform:m.transform},x),{},{children:[(0,c.jsx)("line",{x1:0,x2:l,y1:0,y2:s,style:g.axis.ticks.line}),(0,c.jsx)(o.q.text,{dominantBaseline:d,textAnchor:f,transform:m.textTransform,style:g.axis.ticks.text,children:y})]}))},v=(0,r.memo)(h),k=function(e){var t=e.axis,n=e.scale,a=e.x,l=void 0===a?0:a,s=e.y,u=void 0===s?0:s,d=e.length,f=e.ticksPosition,m=e.tickValues,x=e.tickSize,h=void 0===x?5:x,k=e.tickPadding,b=void 0===k?5:k,C=e.tickRotation,O=void 0===C?0:C,T=e.format,q=e.renderTick,w=void 0===q?v:q,P=e.legend,G=e.legendPosition,S=void 0===G?"end":G,V=e.legendOffset,B=void 0===V?0:V,j=e.onClick,R=e.ariaHidden,W=(0,i.Fg)(),z=(0,r.useMemo)((function(){return y(T,n)}),[T,n]),F=g({axis:t,scale:n,ticksPosition:f,tickValues:m,tickSize:h,tickPadding:b,tickRotation:O}),A=F.ticks,M=F.textAlign,X=F.textBaseline,Y=null;if(void 0!==P){var D,E=0,H=0,I=0;"y"===t?(I=-90,E=B,"start"===S?(D="start",H=d):"middle"===S?(D="middle",H=d/2):"end"===S&&(D="end")):(H=B,"start"===S?D="start":"middle"===S?(D="middle",E=d/2):"end"===S&&(D="end",E=d)),Y=(0,c.jsx)("text",{transform:"translate(".concat(E,", ").concat(H,") rotate(").concat(I,")"),textAnchor:D,style:p({dominantBaseline:"central"},W.axis.legend.text),children:P})}var N=(0,i.tf)(),Z=N.animate,$=N.config,_=(0,o.useSpring)({transform:"translate(".concat(l,",").concat(u,")"),lineX2:"x"===t?d:0,lineY2:"x"===t?0:d,config:$,immediate:!Z}),J=(0,o.useTransition)(A,{keys:function(e){return e.key},initial:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(O,")")}},from:function(e){return{opacity:0,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(O,")")}},enter:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(O,")")}},update:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(O,")")}},leave:{opacity:0},config:$,immediate:!Z});return(0,c.jsxs)(o.q.g,{transform:_.transform,"aria-hidden":R,children:[J((function(e,t,n,o){return(0,r.createElement)(w,p(p({tickIndex:o,format:z,rotate:O,textBaseline:X,textAnchor:M,animatedProps:e},t),j?{onClick:j}:{}))})),(0,c.jsx)(o.q.line,{style:W.axis.domain.line,x1:0,x2:_.lineX2,y1:0,y2:_.lineY2}),Y]})},b=(0,r.memo)(k),C={ticksPosition:d().oneOf(["before","after"]),tickValues:d().oneOfType([d().number,d().arrayOf(d().oneOfType([d().number,d().string,d().instanceOf(Date)])),d().string]),tickSize:d().number,tickPadding:d().number,tickRotation:d().number,format:d().oneOfType([d().func,d().string]),renderTick:d().func,legend:d().node,legendPosition:d().oneOf(["start","middle","end"]),legendOffset:d().number,ariaHidden:d().bool},O=d().shape(C),T=["top","right","bottom","left"],q=(0,r.memo)((function(e){var t=e.xScale,n=e.yScale,r=e.width,o=e.height,i={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return(0,c.jsx)(c.Fragment,{children:T.map((function(e){var a=i[e];if(!a)return null;var l="top"===e||"bottom"===e,s="top"===e||"left"===e?"before":"after";return(0,c.jsx)(b,p(p({},a),{},{axis:l?"x":"y",x:"right"===e?r:0,y:"bottom"===e?o:0,scale:l?t:n,length:l?r:o,ticksPosition:s}),e)}))})})),w=(0,r.memo)((function(e){var t=e.animatedProps,n=(0,i.Fg)();return(0,c.jsx)(o.q.line,p(p({},t),n.grid.line))})),P=(0,r.memo)((function(e){var t=e.lines,n=(0,i.tf)(),a=n.animate,l=n.config,s=(0,o.useTransition)(t,{keys:function(e){return e.key},initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:l,immediate:!a});return(0,c.jsx)("g",{children:s((function(e,t){return(0,r.createElement)(w,p(p({},t),{},{key:t.key,animatedProps:e}))}))})})),G=(0,r.memo)((function(e){var t=e.width,n=e.height,o=e.xScale,i=e.yScale,a=e.xValues,l=e.yValues,s=(0,r.useMemo)((function(){return!!o&&x({width:t,height:n,scale:o,axis:"x",values:a})}),[o,a,t,n]),u=(0,r.useMemo)((function(){return!!i&&x({width:t,height:n,scale:i,axis:"y",values:l})}),[n,t,i,l]);return(0,c.jsxs)(c.Fragment,{children:[s&&(0,c.jsx)(P,{lines:s}),u&&(0,c.jsx)(P,{lines:u})]})})),S=function(e,t){var n,r=t.axis,o=t.scale,a=t.x,l=void 0===a?0:a,s=t.y,c=void 0===s?0:s,u=t.length,d=t.ticksPosition,f=t.tickValues,m=t.tickSize,p=void 0===m?5:m,y=t.tickPadding,x=void 0===y?5:y,h=t.tickRotation,v=void 0===h?0:h,k=t.format,b=t.legend,C=t.legendPosition,O=void 0===C?"end":C,T=t.legendOffset,q=void 0===T?0:T,w=t.theme,P=g({axis:r,scale:o,ticksPosition:d,tickValues:f,tickSize:p,tickPadding:x,tickRotation:v,engine:"canvas"}),G=P.ticks,S=P.textAlign,V=P.textBaseline;e.save(),e.translate(l,c),e.textAlign=S,e.textBaseline=V,e.font="".concat(w.axis.ticks.text.fontWeight?"".concat(w.axis.ticks.text.fontWeight," "):"").concat(w.axis.ticks.text.fontSize,"px ").concat(w.axis.ticks.text.fontFamily),(null!==(n=w.axis.domain.line.strokeWidth)&&void 0!==n?n:0)>0&&(e.lineWidth=Number(w.axis.domain.line.strokeWidth),e.lineCap="square",w.axis.domain.line.stroke&&(e.strokeStyle=w.axis.domain.line.stroke),e.beginPath(),e.moveTo(0,0),e.lineTo("x"===r?u:0,"x"===r?0:u),e.stroke());var B="function"==typeof k?k:function(e){return"".concat(e)};if(G.forEach((function(t){var n;(null!==(n=w.axis.ticks.line.strokeWidth)&&void 0!==n?n:0)>0&&(e.lineWidth=Number(w.axis.ticks.line.strokeWidth),e.lineCap="square",w.axis.ticks.line.stroke&&(e.strokeStyle=w.axis.ticks.line.stroke),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var r=B(t.value);e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate((0,i.Ht)(v)),w.axis.ticks.text.fill&&(e.fillStyle=w.axis.ticks.text.fill),e.fillText(String(r),0,0),e.restore()})),void 0!==b){var j=0,R=0,W=0,z="center";"y"===r?(W=-90,j=q,"start"===O?(z="start",R=u):"middle"===O?(z="center",R=u/2):"end"===O&&(z="end")):(R=q,"start"===O?z="start":"middle"===O?(z="center",j=u/2):"end"===O&&(z="end",j=u)),e.translate(j,R),e.rotate((0,i.Ht)(W)),e.font="".concat(w.axis.legend.text.fontWeight?"".concat(w.axis.legend.text.fontWeight," "):"").concat(w.axis.legend.text.fontSize,"px ").concat(w.axis.legend.text.fontFamily),w.axis.legend.text.fill&&(e.fillStyle=w.axis.legend.text.fill),e.textAlign=z,e.textBaseline="middle",e.fillText(b,0,0)}e.restore()},V=function(e,t){var n=t.xScale,r=t.yScale,o=t.width,i=t.height,a=t.top,l=t.right,s=t.bottom,c=t.left,u=t.theme,d={top:a,right:l,bottom:s,left:c};T.forEach((function(t){var a=d[t];if(!a)return null;var l="top"===t||"bottom"===t,s="top"===t||"left"===t?"before":"after",c=l?n:r,f=y(a.format,c);S(e,p(p({},a),{},{axis:l?"x":"y",x:"right"===t?o:0,y:"bottom"===t?i:0,scale:c,format:f,length:l?o:i,ticksPosition:s,theme:u}))}))},B=function(e,t){var n=t.width,r=t.height,o=t.scale,i=t.axis,a=t.values;x({width:n,height:r,scale:o,axis:i,values:a}).forEach((function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()}))}},23217:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(27378),o=n(19193),i=n.n(o),a=n(11791),l=n(38681),s=n(69857),c=n(4193),u=n(79201),d=n(80169),f=[{key:"data",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n            ```\n            Array<{\n                id:        {string|number}\n                title?:    {ReactNode}\n                subtitle?: {ReactNode}\n                data: Array<{\n                    ranges:   number[]\n                    measures: number[]\n                    markers?: number[]\n                }>\n            }>\n            ```\n\n            If `title` is `undefined`, `id` will be used for\n            `title`.\n        ",type:"object[]",required:!0},{key:"minValue",help:"Minimum value.",description:"\n            Minimum value, if 'auto',\n            will use min value from\n            the provided data.\n        ",required:!1,defaultValue:a.lG.minValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:0,min:0,max:10}},{key:"maxValue",help:"Maximum value.",description:"\n            Maximum value, if 'auto',\n            will use max value from\n            the provided data.\n        ",required:!1,defaultValue:a.lG.maxValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:100,min:50,max:100}},{key:"width",enableControlForFlavors:["api"],group:"Base",help:"Chart width.",description:"not required if using `ResponsiveBullet`.",type:"number",required:!0,controlType:"range",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],group:"Base",help:"Chart height.",description:"not required if using `ResponsiveBullet`.",type:"number",required:!0,controlType:"range",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"layout",group:"Base",help:"How to display items.",type:"string",required:!1,defaultValue:a.lG.layout,controlType:"radio",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"reverse",group:"Base",help:"Reverse chart.",description:"\n            Reverse chart, starts on top instead of bottom\n            for vertical layout and right instead of left\n            for horizontal one.\n        ",type:"boolean",required:!1,defaultValue:a.lG.reverse,controlType:"switch"},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},{key:"spacing",help:"define spacing between items.",type:"number",required:!1,defaultValue:a.lG.spacing,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:100}},{key:"measureSize",help:"define size of measure related to item size, expressed as a ratio.",type:"number",required:!1,defaultValue:a.lG.measureSize,controlType:"range",group:"Base",controlOptions:{min:0,max:1,step:.05}},{key:"markerSize",help:"define size of markers related to item size, expressed as a ratio.",type:"number",required:!1,defaultValue:a.lG.markerSize,controlType:"range",group:"Base",controlOptions:{min:0,max:2,step:.05}},(0,d.JR)(["svg"]),{key:"rangeBorderColor",flavors:["svg"],group:"Style",help:"Method to compute range border color.",description:"\n            how to compute range border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",controlType:"inheritedColor",required:!1,defaultValue:a.lG.rangeBorderColor},{key:"rangeBorderWidth",flavors:["svg"],group:"Style",help:"Width of range border.",type:"number",controlType:"lineWidth",required:!1,defaultValue:a.lG.rangeBorderWidth},{key:"rangeComponent",flavors:["svg"],group:"Style",help:"Custom component for ranges.",type:"Function",required:!1},{key:"rangeColors",help:"Ranges colors",description:"\n            Defines colors for ranges,\n            you can either use categorical colors:\n            `greens` or sequential form: `seq:green`.\n        ",type:"string | Function | string[]",required:!1,defaultValue:a.lG.rangeColors,controlType:"colors",group:"Style",controlOptions:{includeSequential:!0}},{key:"measureBorderColor",flavors:["svg"],group:"Style",help:"Method to compute measure border color.",description:"\n            how to compute measure border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",controlType:"inheritedColor",required:!1,defaultValue:a.lG.measureBorderColor},{key:"measureBorderWidth",flavors:["svg"],group:"Style",help:"Width of measure border.",type:"number",controlType:"lineWidth",required:!1,defaultValue:a.lG.measureBorderWidth},{key:"measureComponent",flavors:["svg"],group:"Style",help:"Custom component for measures.",type:"Function",required:!1},{key:"measureColors",help:"Measures colors.",description:"\n            Defines colors for measures,\n            you can either use categorical colors:\n            `greens` or sequential form: `seq:green`.\n        ",type:"string | Function | string[]",required:!1,defaultValue:a.lG.measureColors,controlType:"colors",group:"Style",controlOptions:{includeSequential:!0}},{key:"markerComponent",flavors:["svg"],group:"Style",help:"Custom component for markers.",type:"Function",required:!1},{key:"markerColors",help:"Markers colors.",description:"\n            Defines colors for markers,\n            you can either use categorical colors:\n            `greens` or sequential form: `seq:green`.\n        ",type:"string | Function| string[]",required:!1,defaultValue:a.lG.markerColors,controlType:"colors",group:"Style",controlOptions:{includeSequential:!0}},{key:"axisPosition",help:"Where to put axis.",type:"string",required:!1,defaultValue:a.lG.axisPosition,controlType:"radio",group:"Axes",controlOptions:{choices:[{label:"before",value:"before"},{label:"after",value:"after"}]}},{key:"titlePosition",help:"Where to put title.",type:"string",required:!1,defaultValue:a.lG.titlePosition,controlType:"radio",group:"Title",controlOptions:{choices:[{label:"before",value:"before"},{label:"after",value:"after"}]}},{key:"titleAlign",help:"title alignment.",type:"string",required:!1,defaultValue:a.lG.titleAlign,controlType:"choices",group:"Title",controlOptions:{choices:[{label:"start",value:"start"},{label:"middle",value:"middle"},{label:"end",value:"end"}]}},{key:"titleOffsetX",help:"title x offset from bullet edge.",type:"number",required:!1,defaultValue:a.lG.titleOffset,controlType:"range",group:"Title",controlOptions:{min:-100,max:100,unit:"px"}},{key:"titleOffsetY",help:"title y offset from bullet edge.",type:"number",required:!1,defaultValue:a.lG.titleOffset,controlType:"range",group:"Title",controlOptions:{min:-100,max:100,unit:"px"}},{key:"titleRotation",help:"title rotation.",type:"number",required:!1,defaultValue:a.lG.titleRotation,controlType:"angle",group:"Title",controlOptions:{start:90,min:-360,max:360,step:5}},{key:"onRangeClick",flavors:["svg"],type:"(range, event) => void",group:"Interactivity",required:!1,help:"onClick handler for ranges.",description:"\n            onClick handler for ranges, will receive range\n            data as first argument & event as second one.\n\n            The data has the following shape:\n            ```\n            {\n                id:    string,\n                v0:    number,\n                v1:    number,\n                index: number,\n                color: string,\n            }\n            ```\n\n            `v1` is the value of the range while\n            `v0` is the value of previous range.\n        "},{key:"onMeasureClick",flavors:["svg"],type:"(measure, event) => void",group:"Interactivity",required:!1,help:"onClick handler for measures.",description:"\n            onClick handler for measures, will receive measure\n            data as first argument & event as second one.\n\n            The data has the following shape:\n            ```\n            {\n                id:    string,\n                v0:    number,\n                v1:    number,\n                index: number,\n                color: string,\n            }\n            ```\n\n            `v1` is the value of the measure while\n            `v0` is the value of previous measure.\n        "},{key:"onMarkerClick",flavors:["svg"],type:"(marker, event) => void",group:"Interactivity",required:!1,help:"onClick handler for markers.",description:"\n            onClick handler for markers, will receive marker\n            data as first argument & event as second one.\n\n            The data has the following shape:\n            ```\n            {\n                id:    string,\n                value: number,\n                index: number,\n                color: string,\n            }\n            ```\n        "}].concat((0,u.Z)((0,d.$j)(["svg"],a.lG,"react-spring"))),m=(0,d.R2)(f),p=function(){return[(0,l.j2)("temp.",i()([100,120,140])[0]),(0,l.j2)("power",2,{float:!0,measureCount:2}),(0,l.j2)("volume",i()([40,60,80])[0],{rangeCount:8}),(0,l.j2)("cost",5e5,{measureCount:2}),(0,l.j2)("revenue",i()([9,11,13])[0],{markerCount:2})]},g={minValue:a.lG.minValue,maxValue:a.lG.maxValue,margin:{top:50,right:90,bottom:50,left:90},layout:a.lG.layout,reverse:a.lG.reverse,spacing:46,titlePosition:a.lG.titlePosition,titleAlign:"start",titleOffsetX:-70,titleOffsetY:a.lG.titleOffsetY,titleRotation:a.lG.titleRotation,rangeBorderColor:a.lG.rangeBorderColor,rangeBorderWidth:a.lG.rangeBorderWidth,measureBorderColor:a.lG.measureBorderColor,measureBorderWidth:a.lG.measureBorderWidth,measureSize:.2,markerSize:.6,axisPosition:a.lG.axisPosition,rangeColors:a.lG.rangeColors,measureColors:a.lG.measureColors,markerColors:a.lG.markerColors,animate:a.lG.animate,motionConfig:a.lG.motionConfig},y=function(){return r.createElement(s.T,{name:"Bullet",meta:c.g,icon:"bullet",flavors:c.K,currentFlavor:"svg",properties:m,initialProperties:g,defaultProperties:a.lG,generateData:p},(function(e,t,n,o){return r.createElement(a.Mh,Object.assign({data:t},e,{theme:n,onRangeClick:function(e){o({type:"click",label:"[range] "+e.id+": ["+e.v0+", "+e.v1+"]",color:e.color,data:e})},onMeasureClick:function(e){o({type:"click",label:"[measure] "+e.id+": ["+e.v0+", "+e.v1+"]",color:e.color,data:e})},onMarkerClick:function(e){o({type:"click",label:"[marker] "+e.id+": "+e.value,color:e.color,data:e})}}))}))}}}]);
//# sourceMappingURL=component---src-pages-bullet-index-js-8e027df97a215201657f.js.map