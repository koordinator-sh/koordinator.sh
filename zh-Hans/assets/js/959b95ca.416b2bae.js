"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[3014],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},l="\u8d44\u6e90\u6a21\u578b",i={unversionedId:"architecture/resource-model",id:"version-v1.1/architecture/resource-model",title:"\u8d44\u6e90\u6a21\u578b",description:"\u6df7\u90e8\u662f\u4e00\u5957\u8d44\u6e90\u8c03\u5ea6\u89e3\u51b3\u65b9\u6848\uff0c\u7528\u4e8e\u5bf9\u5ef6\u8fdf\u654f\u611f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e0e\u5927\u6570\u636e\u8ba1\u7b97\u5de5\u4f5c\u8d1f\u8f7d\u8fdb\u884c\u7cbe\u7ec6\u5316\u7f16\u6392\u3002\u5b83\u9700\u8981\u89e3\u51b3\u4e24\u4e2a\u4e3b\u8981\u95ee\u9898:",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.1/architecture/resource-model.md",sourceDirName:"architecture",slug:"/architecture/resource-model",permalink:"/zh-Hans/docs/v1.1/architecture/resource-model",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/resource-model.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/zh-Hans/docs/v1.1/architecture/overview"},next:{title:"\u4f18\u5148\u7ea7",permalink:"/zh-Hans/docs/v1.1/architecture/priority"}},c={},u=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"SLO\u63cf\u8ff0",id:"slo\u63cf\u8ff0",level:2},{value:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48",id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8d44\u6e90\u6a21\u578b"},"\u8d44\u6e90\u6a21\u578b"),(0,o.kt)("p",null,"\u6df7\u90e8\u662f\u4e00\u5957\u8d44\u6e90\u8c03\u5ea6\u89e3\u51b3\u65b9\u6848\uff0c\u7528\u4e8e\u5bf9\u5ef6\u8fdf\u654f\u611f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e0e\u5927\u6570\u636e\u8ba1\u7b97\u5de5\u4f5c\u8d1f\u8f7d\u8fdb\u884c\u7cbe\u7ec6\u5316\u7f16\u6392\u3002\u5b83\u9700\u8981\u89e3\u51b3\u4e24\u4e2a\u4e3b\u8981\u95ee\u9898:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u4f55\u4e3a\u5ef6\u8fdf\u654f\u611f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u8c03\u5ea6\u8d44\u6e90\uff0c\u4ee5\u6ee1\u8db3\u6027\u80fd\u548c\u957f\u5c3e\u5ef6\u8fdf\u7684\u8981\u6c42\u3002",(0,o.kt)("strong",{parentName:"li"},"\u8fd9\u91cc\u6d89\u53ca\u5230\u7684"),"\u5173\u952e\u70b9\u662f\u8d44\u6e90\u8c03\u5ea6\u7b56\u7565\u548c QoS \u611f\u77e5\u7b56\u7565\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u4f55\u8c03\u5ea6\u548c\u7f16\u6392\u5927\u6570\u636e\u8ba1\u7b97\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4ee5\u8f83\u4f4e\u7684\u6210\u672c\u6ee1\u8db3\u4efb\u52a1\u5bf9\u8ba1\u7b97\u8d44\u6e90\u7684\u9700\u6c42\u3002",(0,o.kt)("strong",{parentName:"li"},"\u8fd9\u91cc\u6d89\u53ca\u5230\u7684"),"\u5173\u952e\u662f\u5982\u4f55\u5728\u6781\u7aef\u5f02\u5e38\u60c5\u51b5\u4e0b\u5b9e\u73b0\u5408\u7406\u7684\u8d44\u6e90\u8d85\u989d\u914d\u7f6e\u548c QoS \u4fdd\u969c\u3002")),(0,o.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Resource Model",src:r(8105).Z,width:"1058",height:"353"})),(0,o.kt)("p",null,"\u4e0a\u56fe\u662f Koordinator \u7684\u6df7\u90e8\u8d44\u6e90\u6a21\u578b\uff0c\u5176\u57fa\u672c\u601d\u60f3\u662f\u5229\u7528\u90a3\u4e9b\u5df2\u5206\u914d\u4f46\u672a\u4f7f\u7528\u7684\u8d44\u6e90\u6765\u8fd0\u884c\u4f4e\u4f18\u5148\u7ea7\u7684 pod\u3002\u5982\u56fe\u6240\u793a\uff0c\u6709\u56db\u6761\u7ebf:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"limit\uff1a\u7070\u8272\uff0c\u9ad8\u4f18\u5148\u7ea7 Pod \u6240\u8bf7\u6c42\u7684\u8d44\u6e90\u91cf\uff0c\u5bf9\u5e94\u4e8e Kubernetes \u7684 Pod \u8bf7\u6c42\u3002"),(0,o.kt)("li",{parentName:"ol"},"usage\uff1a\u7ea2\u8272\uff0cPod \u5b9e\u9645\u4f7f\u7528\u7684\u8d44\u6e90\u91cf\uff0c\u6a2a\u8f74\u4e3a\u65f6\u95f4\u7ebf\uff0c\u7ea2\u7ebf\u4e3a Pod \u8d1f\u8f7d\u968f\u65f6\u95f4\u53d8\u5316\u7684\u6ce2\u52a8\u66f2\u7ebf\u3002"),(0,o.kt)("li",{parentName:"ol"},"short-term reservation\uff1a\u6df1\u84dd\u8272\uff0c\u8fd9\u662f\u57fa\u4e8e\u8fc7\u53bb\uff08\u8f83\u77ed\uff09\u65f6\u671f\u5185\u7684\u8d44\u6e90\u4f7f\u7528\u91cf\uff0c\u5bf9\u672a\u6765\u4e00\u6bb5\u65f6\u95f4\u5185\u5176\u8d44\u6e90\u4f7f\u7528\u91cf\u7684\u4f30\u8ba1\u3002\u9884\u7559\u548c\u9650\u5236\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5206\u914d\u7684\u672a\u4f7f\u7528\uff08\u672a\u6765\u4e0d\u4f1a\u4f7f\u7528\u7684\u8d44\u6e90\uff09\u53ef\u4ee5\u7528\u6765\u8fd0\u884c\u77ed\u671f\u6267\u884c\u7684\u6279\u5904\u7406 Pod\u3002"),(0,o.kt)("li",{parentName:"ol"},"long-term reservation\uff1a\u6d45\u84dd\u8272\uff0c\u4e0e short-term reservation \u7c7b\u4f3c\uff0c\u4f46\u4f30\u8ba1\u7684\u5386\u53f2\u4f7f\u7528\u671f\u66f4\u957f\u3002\u4ece\u4fdd\u7559\u5230\u9650\u5236\u7684\u8d44\u6e90\u53ef\u4ee5\u7528\u4e8e\u751f\u547d\u5468\u671f\u8f83\u957f\u7684Pod\uff0c\u4e0e\u77ed\u671f\u7684\u9884\u6d4b\u503c\u76f8\u6bd4\uff0c\u53ef\u7528\u7684\u8d44\u6e90\u8f83\u5c11\uff0c\u4f46\u66f4\u7a33\u5b9a\u3002")),(0,o.kt)("p",null,"\u6574\u4e2a\u6df7\u90e8\u8d44\u6e90\u8c03\u5ea6\u662f\u57fa\u4e8e\u4e0a\u56fe\u6240\u793a\u7684\u8d44\u6e90\u6a21\u578b\u6784\u5efa\u7684\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u6ee1\u8db3\u5404\u79cd\u5de5\u4f5c\u8d1f\u8f7d\u7684\u8d44\u6e90\u9700\u6c42\uff0c\u8fd8\u53ef\u4ee5\u5145\u5206\u5229\u7528\u96c6\u7fa4\u7684\u95f2\u7f6e\u8d44\u6e90\u3002"),(0,o.kt)("h2",{id:"slo\u63cf\u8ff0"},"SLO\u63cf\u8ff0"),(0,o.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684 Pod \u8d44\u6e90 SLO \u7531\u4e24\u4e2a\u6982\u5ff5\u7ec4\u6210\uff0c\u5373\u4f18\u5148\u7ea7\u548c QoS\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f18\u5148\u7ea7\uff0c\u5373\u8d44\u6e90\u7684\u4f18\u5148\u7ea7\uff0c\u4ee3\u8868\u4e86\u8bf7\u6c42\u8d44\u6e90\u88ab\u8c03\u5ea6\u7684\u4f18\u5148\u7ea7\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f18\u5148\u7ea7\u4f1a\u5f71\u54cd Pod \u5728\u8c03\u5ea6\u5668\u5f85\u5b9a\u961f\u5217\u4e2d\u7684\u76f8\u5bf9\u4f4d\u7f6e\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"QoS\uff0c\u4ee3\u8868 Pod \u8fd0\u884c\u65f6\u7684\u670d\u52a1\u8d28\u91cf\u3002\u5982cgroups cpu share\u3001cfs \u914d\u989d\u3001LLC\u3001\u5185\u5b58\u3001OOM \u4f18\u5148\u7ea7\u7b49\u7b49\u3002"))),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cPriority \u548c QoS \u662f\u4e24\u4e2a\u7ef4\u5ea6\u7684\u6982\u5ff5\uff0c\u4f46\u5728\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u4e24\u8005\u4e4b\u95f4\u4f1a\u6709\u4e00\u4e9b\u7ea6\u675f\uff08\u4e0d\u662f\u6240\u6709\u7684\u7ec4\u5408\u90fd\u662f\u5408\u6cd5\u7684\uff09\u3002"),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48"},"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u63a8\u8350\u4e0b\u4e00\u6b65\u9605\u8bfb\u7684\u5185\u5bb9:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,o.kt)("a",{parentName:"li",href:"./priority"},"\u4f18\u5148\u7ea7"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,o.kt)("a",{parentName:"li",href:"/zh-Hans/docs/v1.1/architecture/qos"},"QoS"),"\u3002")))}d.isMDXComponent=!0},8105:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/resource-model-0f6ca53f0a140a2be9705e75758caf22.png"}}]);