(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[4623],{69997:function(e,n,t){"use strict";function r(e){return null==e?null:o(e)}function o(e){if("function"!=typeof e)throw new Error;return e}t.d(n,{j:function(){return r},C:function(){return o}})},45228:function(e,n,t){"use strict";function r(){return 0}function o(e){return function(){return e}}t.d(n,{G:function(){return r},Z:function(){return o}})},65591:function(e,n,t){"use strict";function r(e){var n=0,t=e.children,r=t&&t.length;if(r)for(;--r>=0;)n+=t[r].value;else n=1;e.value=n}function o(e,n){var t,r,o,a,s,c=new u(e),d=+e.value&&(c.value=e.value),h=[c];for(null==n&&(n=i);t=h.pop();)if(d&&(t.value=+t.data.value),(o=n(t.data))&&(s=o.length))for(t.children=new Array(s),a=s-1;a>=0;--a)h.push(r=t.children[a]=new u(o[a])),r.parent=t,r.depth=t.depth+1;return c.eachBefore(l)}function i(e){return e.children}function a(e){e.data=e.data.data}function l(e){var n=0;do{e.height=n}while((e=e.parent)&&e.height<++n)}function u(e){this.data=e,this.depth=this.height=0,this.parent=null}t.d(n,{ZP:function(){return o}}),u.prototype=o.prototype={constructor:u,count:function(){return this.eachAfter(r)},each:function(e){var n,t,r,o,i=this,a=[i];do{for(n=a.reverse(),a=[];i=n.pop();)if(e(i),t=i.children)for(r=0,o=t.length;r<o;++r)a.push(t[r])}while(a.length);return this},eachAfter:function(e){for(var n,t,r,o=this,i=[o],a=[];o=i.pop();)if(a.push(o),n=o.children)for(t=0,r=n.length;t<r;++t)i.push(n[t]);for(;o=a.pop();)e(o);return this},eachBefore:function(e){for(var n,t,r=this,o=[r];r=o.pop();)if(e(r),n=r.children)for(t=n.length-1;t>=0;--t)o.push(n[t]);return this},sum:function(e){return this.eachAfter((function(n){for(var t=+e(n.data)||0,r=n.children,o=r&&r.length;--o>=0;)t+=r[o].value;n.value=t}))},sort:function(e){return this.eachBefore((function(n){n.children&&n.children.sort(e)}))},path:function(e){for(var n=this,t=function(e,n){if(e===n)return e;var t=e.ancestors(),r=n.ancestors(),o=null;e=t.pop(),n=r.pop();for(;e===n;)o=e,e=t.pop(),n=r.pop();return o}(n,e),r=[n];n!==t;)n=n.parent,r.push(n);for(var o=r.length;e!==t;)r.splice(o,0,e),e=e.parent;return r},ancestors:function(){for(var e=this,n=[e];e=e.parent;)n.push(e);return n},descendants:function(){var e=[];return this.each((function(n){e.push(n)})),e},leaves:function(){var e=[];return this.eachBefore((function(n){n.children||e.push(n)})),e},links:function(){var e=this,n=[];return e.each((function(t){t!==e&&n.push({source:t.parent,target:t})})),n},copy:function(){return o(this).eachBefore(a)}}},15050:function(e,n,t){"use strict";t.d(n,{Ym:function(){return r},yB:function(){return o},Y2:function(){return i},UD:function(){return a},iM:function(){return l}});var r=1e3,o=6e4,i=36e5,a=864e5,l=6048e5},61904:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=new Date,o=new Date;function i(e,n,t,a){function l(n){return e(n=0===arguments.length?new Date:new Date(+n)),n}return l.floor=function(n){return e(n=new Date(+n)),n},l.ceil=function(t){return e(t=new Date(t-1)),n(t,1),e(t),t},l.round=function(e){var n=l(e),t=l.ceil(e);return e-n<t-e?n:t},l.offset=function(e,t){return n(e=new Date(+e),null==t?1:Math.floor(t)),e},l.range=function(t,r,o){var i,a=[];if(t=l.ceil(t),o=null==o?1:Math.floor(o),!(t<r&&o>0))return a;do{a.push(i=new Date(+t)),n(t,o),e(t)}while(i<t&&t<r);return a},l.filter=function(t){return i((function(n){if(n>=n)for(;e(n),!t(n);)n.setTime(n-1)}),(function(e,r){if(e>=e)if(r<0)for(;++r<=0;)for(;n(e,-1),!t(e););else for(;--r>=0;)for(;n(e,1),!t(e););}))},t&&(l.count=function(n,i){return r.setTime(+n),o.setTime(+i),e(r),e(o),Math.floor(t(r,o))},l.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?l.filter(a?function(n){return a(n)%e==0}:function(n){return l.count(0,n)%e==0}):l:null}),l}},78077:function(e,n,t){"use strict";t.d(n,{X:function(){return u}});var r=t(76173),o=t(80169),i=t(18907),a=["svg","html","canvas","api"],l=[{key:"data",group:"Base",help:"Chart data, which should be immutable.",flavors:a,description:"\n            Chart data, which must conform to this structure\n            if using the default `id` and `value` accessors:\n\n            ```\n            {\n                // must be unique for the whole dataset\n                id: string | number\n                value: number\n                children: {\n                    id: string | number\n                    value: number\n                    children: ...\n                }[]\n            }\n            ```\n\n            If using a different data structure, you must make sure\n            to adjust both `id` and `value`. Meaning you can provide\n            a completely different data structure as long as `id` and `value`\n            return the appropriate values.\n\n            Immutability of the data is important as re-computations\n            depends on it.\n        ",type:"object",required:!0},{key:"id",group:"Base",flavors:a,help:"Id accessor.",description:"\n            define id accessor, if string given,\n            will use `node[value]`,\n            if function given, it will be invoked\n            for each node and will receive the node as\n            first argument, it must return the node\n            id (string | number).\n        ",type:"string | Function",required:!1,defaultValue:r.lG.id},{key:"value",group:"Base",flavors:a,help:"Value accessor",description:"\n            define value accessor, if string given,\n            will use `node[value]`,\n            if function given, it will be invoked\n            for each node and will receive the node as\n            first argument, it must return the node\n            value (number).\n        ",type:"string | Function",required:!1,defaultValue:r.lG.value},{key:"valueFormat",group:"Base",flavors:a,help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,type:"string | (value: number) => string | number",control:{type:"valueFormat"}},{key:"padding",help:"Padding between each circle.",flavors:a,description:"\n            Padding between adjacent circles.\n            Please be aware that when zoomed\n            this value will be affected by the zooming factor\n            and is expressed in pixels. See the\n            [official d3 documentation](https://github.com/d3/d3-hierarchy#pack_padding).\n        ",type:"number",required:!1,defaultValue:r.lG.padding,group:"Base",control:{type:"range",unit:"px",min:0,max:32}},{key:"leavesOnly",help:"Only render leaf nodes (skip parent nodes).",flavors:a,type:"boolean",required:!1,defaultValue:r.lG.leavesOnly,group:"Base",control:{type:"switch"}}].concat((0,i.nk)(a),[(0,o.JR)(["svg","html","canvas"]),(0,i.at)({flavors:a,defaultValue:{scheme:"nivo"}}),{key:"colorBy",help:"Define the property to use to assign a color to circles.",description:"\n            When using `id`, each node will get a new color,\n            and when using `depth` the nodes' color will depend on their depth.\n        ",type:"'id' | 'depth'",required:!1,defaultValue:r.lG.colorBy,flavors:a,group:"Style",control:{type:"radio",choices:[{label:"id",value:"id"},{label:"depth",value:"depth"}]}},{key:"inheritColorFromParent",help:"Inherit color from parent node starting from 2nd level.",type:"boolean",required:!1,flavors:a,defaultValue:r.lG.inheritColorFromParent,control:{type:"switch"},group:"Style"},{key:"childColor",help:"Defines how to compute child nodes color, only used when inheritColorFromParent is enabled.",flavors:a,type:"string | object | Function",required:!1,defaultValue:r.lG.childColor,control:{type:"inheritedColor"},group:"Style"},{key:"borderWidth",help:"Width of circle border.",flavors:a,type:"number",required:!1,defaultValue:r.lG.borderWidth,control:{type:"lineWidth"},group:"Style"},{key:"borderColor",help:"Method to compute border color.",flavors:a,description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.lG.borderColor,control:{type:"inheritedColor"},group:"Style"}],(0,o.uE)("Style",["svg"]),[{key:"circleComponent",help:"Custom circle component.",type:"Component",flavors:["svg"],group:"Style",required:!1},{key:"enableLabels",help:"Enable/disable labels.",flavors:a,type:"boolean",required:!1,defaultValue:r.lG.enableLabels,control:{type:"switch"},group:"Labels"},{key:"label",help:"Label accessor.",flavors:a,description:"\n            Defines how to get label text,\n            can be a string (used to access current node data property)\n            or a function which will receive the actual node data.\n        ",type:"string | Function",required:!1,defaultValue:r.lG.label,group:"Labels",control:{type:"choices",choices:["id","value","formattedValue","d => `${d.id}: ${d.value}`"].map((function(e){return{label:e,value:e}}))}},{key:"labelsFilter",help:"Filter labels using custom conditions.",flavors:a,description:"\n            Please note that at this stage, nodes are already excluded\n            according to `labelsSkipRadius`.\n            \n            This can be used to only show labels at a certain depth for example:\n            \n            ```\n            <CirclePacking\n                labelsFilter={label => label.node.depth == 2}\n                {...props}\n            />\n            ```\n        ",type:"(label) => boolean",required:!1,group:"Labels"},{key:"labelsSkipRadius",help:"Skip label rendering if node radius is lower than given value, 0 to disable.",type:"number",required:!1,flavors:a,defaultValue:r.lG.labelsSkipRadius,group:"Labels",control:{type:"range",unit:"px",min:0,max:32}},{key:"labelTextColor",help:"Method to compute label text color.",flavors:a,description:"\n            how to compute label text color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.lG.labelTextColor,control:{type:"inheritedColor"},group:"Labels"},{key:"labelComponent",help:"Custom label component.",type:"Component",flavors:a,group:"Labels",required:!1},(0,i.y1)({flavors:["svg","html","canvas"],defaultValue:r.lG.isInteractive}),{key:"onMouseEnter",flavors:["svg","html"],group:"Interactivity",help:"onMouseEnter handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseMove",flavors:["svg","html","canvas"],group:"Interactivity",help:"onMouseMove handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseLeave",flavors:["svg","html"],group:"Interactivity",help:"onMouseLeave handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onClick",flavors:["svg","html","canvas"],group:"Interactivity",help:"onClick handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"zoomedId",flavors:["svg","html","canvas"],help:"Zoom on a specific node.",description:"\n            If provided, zoom on the node having the provided ID,\n            this can be used to build a zoomable circle packing chart\n            when used in conjunction with the `onClick` property.  \n        ",type:"string | null",required:!1,group:"Interactivity"}],(0,o.$j)(["svg","html"],r.lG,"react-spring")),u=(0,o.R2)(l)},55566:function(e,n,t){"use strict";var r=t(62370);n.Z=(0,r.h8)({valueFormat:r.Ld,label:function(e){return"d => `${d.id}: ${d.value}`"===e?function(e){return e.id+": "+e.value}:e}})},42401:function(e,n,t){"use strict";t.r(n);t(27378);var r=t(38681),o=t(95546),i=t(73447),a=t(78077),l=t(55566),u=t(12875),s=t(24246),c=(0,r.UE)();n.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{title:"CirclePacking HTTP API",keywords:[].concat(u.wp.tags,["HTTP API"])}),(0,s.jsx)(i.Z,{componentName:"CirclePacking",chartClass:"circle-packing",apiPath:"/charts/circle_packing",flavors:u.Kk,dataProperty:"root",controlGroups:a.X,propsMapper:l.Z,defaultProps:{width:600,height:600,margin:{top:20,right:20,bottom:20,left:20},data:JSON.stringify(c,null,"  "),id:"name",value:"loc",valueFormat:{format:"",enabled:!1},colors:{scheme:"nivo"},colorBy:"depth",inheritColorFromParent:!1,childColor:{from:"color",modifiers:[["darker",.3]]},padding:1,enableLabels:!0,leavesOnly:!1,label:"id",labelsSkipRadius:8,labelTextColor:{from:"color",modifiers:[["darker",.8]]},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]}}})]})}},30454:function(e,n,t){var r=t(40699);e.exports=function(e){return r(e,5)}}}]);
//# sourceMappingURL=component---src-pages-circle-packing-api-js-feccfc8f918ec2b8fbb5.js.map