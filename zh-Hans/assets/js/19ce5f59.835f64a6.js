"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[7328],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),c=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return o.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},s=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=n,f=s["".concat(u,".").concat(m)]||s[m]||p[m]||a;return t?o.createElement(f,i(i({ref:r},d),{},{components:t})):o.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9433:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],l={},u="\u6982\u8ff0",c={unversionedId:"architecture/overview",id:"version-v1.1/architecture/overview",title:"\u6982\u8ff0",description:"\u672c\u8282\u63cf\u8ff0\u4e86 Koordinator \u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u76f8\u5173\u7684\u67b6\u6784\u3001\u7ec4\u4ef6\u548c\u6838\u5fc3\u6982\u5ff5\u3002Koordinator \u7531\u4e24\u4e2a\u63a7\u5236\u9762\uff08Koordinator Scheduler/Koordinator Manager\uff09\u548c\u4e00\u4e2a DaemonSet \u7ec4\u4ef6(Koordlet)\u7ec4\u6210\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.1/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/zh-Hans/docs/architecture/overview",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/overview.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"2023/1/3",frontMatter:{},sidebar:"docs",previous:{title:"\u5b89\u88c5",permalink:"/zh-Hans/docs/installation"},next:{title:"\u8d44\u6e90\u6a21\u578b",permalink:"/zh-Hans/docs/architecture/resource-model"}},d={},p=[{value:"Koordinator Scheduler",id:"koordinator-scheduler",level:2},{value:"Koordinator Manager",id:"koordinator-manager",level:2},{value:"Koordlet",id:"koordlet",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],s={toc:p};function m(e){var r=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u4e86 Koordinator \u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u76f8\u5173\u7684\u67b6\u6784\u3001\u7ec4\u4ef6\u548c\u6838\u5fc3\u6982\u5ff5\u3002Koordinator \u7531\u4e24\u4e2a\u63a7\u5236\u9762\uff08",(0,a.kt)("a",{parentName:"p",href:"#koordinator-scheduler"},"Koordinator Scheduler"),"/",(0,a.kt)("a",{parentName:"p",href:"#koordinator-manager"},"Koordinator Manager"),"\uff09\u548c\u4e00\u4e2a DaemonSet \u7ec4\u4ef6(",(0,a.kt)("a",{parentName:"p",href:"#koordlet"},"Koordlet"),")\u7ec4\u6210\u3002\nKoordinator \u5728 Kubernetes \u539f\u6709\u7684\u80fd\u529b\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u6df7\u90e8\u529f\u80fd\uff0c\u5e76\u517c\u5bb9\u4e86 Kubernetes \u539f\u6709\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"\u67b6\u6784",src:t(5109).Z,width:"2032",height:"1312"})),(0,a.kt)("h2",{id:"koordinator-scheduler"},"Koordinator Scheduler"),(0,a.kt)("p",null,"Koordinator Scheduler\u4ee5 Deployment \u7684\u5f62\u5f0f\u90e8\u7f72\uff0c\u7528\u4e8e\u589e\u5f3a Kubernetes \u5728\u6df7\u90e8\u573a\u666f\u4e0b\u7684\u8d44\u6e90\u8c03\u5ea6\u80fd\u529b\uff0c\u5305\u62ec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u591a\u7684\u573a\u666f\u652f\u6301\uff0c\u5305\u62ec\u5f39\u6027\u914d\u989d\u8c03\u5ea6\u3001\u8d44\u6e90\u8d85\u5356(resource overcommitment)\u3001\u8d44\u6e90\u9884\u7559(resource reservation)\u3001Gang \u8c03\u5ea6\u3001\u5f02\u6784\u8d44\u6e90\u8c03\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u6027\u80fd\uff0c\u5305\u62ec\u52a8\u6001\u7d22\u5f15\u4f18\u5316\u3001\u7b49\u4ef7 class \u8c03\u5ea6\u3001\u968f\u673a\u7b97\u6cd5\u4f18\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5b89\u5168\u7684 descheduling\uff0c\u5305\u62ec\u5de5\u4f5c\u8d1f\u8f7d\u611f\u77e5\u3001\u786e\u5b9a\u6027\u7684 pod \u8fc1\u79fb\u3001\u7ec6\u7c92\u5ea6\u7684\u6d41\u91cf\u63a7\u5236\u548c\u53d8\u66f4\u5ba1\u8ba1\u652f\u6301\u3002")),(0,a.kt)("h2",{id:"koordinator-manager"},"Koordinator Manager"),(0,a.kt)("p",null,"Koordinator Manager \u4ee5 Deployment \u7684\u5f62\u5f0f\u90e8\u7f72\uff0c\u901a\u5e38\u7531\u4e24\u4e2a\u5b9e\u4f8b\u7ec4\u6210\uff0c\u4e00\u4e2a leader \u5b9e\u4f8b\u548c\u4e00\u4e2a backup \u5b9e\u4f8b\u3002Koordinator Manager \u7531\u51e0\u4e2a\u63a7\u5236\u5668\u548c webhooks \u7ec4\u6210\uff0c\u7528\u4e8e\u534f\u8c03\u6df7\u90e8\u573a\u666f\u4e0b\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u8d44\u6e90\u8d85\u5356(resource overcommitment)\u548c SLO \u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\uff0c\u63d0\u4f9b\u4e86\u4e09\u4e2a\u7ec4\u4ef6:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Colocation Profile\uff0c\u7528\u4e8e\u652f\u6301\u6df7\u90e8\u800c\u4e0d\u9700\u8981\u4fee\u6539\u5de5\u4f5c\u8d1f\u8f7d\u3002\u7528\u6237\u53ea\u9700\u8981\u5728\u96c6\u7fa4\u4e2d\u505a\u5c11\u91cf\u7684\u914d\u7f6e\uff0c\u539f\u6765\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5c31\u53ef\u4ee5\u5728\u6df7\u90e8\u6a21\u5f0f\u4e0b\u8fd0\u884c\uff0c\u4e86\u89e3\u66f4\u591a\u5173\u4e8e",(0,a.kt)("a",{parentName:"li",href:"/zh-Hans/docs/user-manuals/colocation-profile"},"Colocation Profile"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"SLO \u63a7\u5236\u5668\uff0c\u7528\u4e8e\u8d44\u6e90\u8d85\u5356(resource overcommitment)\u7ba1\u7406\uff0c\u6839\u636e\u8282\u70b9\u6df7\u90e8\u65f6\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u52a8\u6001\u8c03\u6574\u96c6\u7fa4\u7684\u8d85\u53d1(overcommit)\u914d\u7f6e\u6bd4\u4f8b\u3002\u8be5\u63a7\u5236\u5668\u7684\u6838\u5fc3\u804c\u8d23\u662f\u7ba1\u7406\u6df7\u90e8\u65f6\u7684 SLO\uff0c\u5982\u667a\u80fd\u8bc6\u522b\u51fa\u96c6\u7fa4\u4e2d\u7684\u5f02\u5e38\u8282\u70b9\u5e76\u964d\u4f4e\u5176\u6743\u91cd\uff0c\u52a8\u6001\u8c03\u6574\u6df7\u90e8\u65f6\u7684\u6c34\u4f4d\u548c\u538b\u529b\u7b56\u7565\uff0c\u4ece\u800c\u4fdd\u8bc1\u96c6\u7fa4\u4e2d pod \u7684\u7a33\u5b9a\u6027\u548c\u541e\u5410\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"Recommender\uff08\u5373\u5c06\u63a8\u51fa\uff09\uff0c\u5b83\u4f7f\u7528 histograms \u6765\u7edf\u8ba1\u548c\u9884\u6d4b\u5de5\u4f5c\u8d1f\u8f7d\u7684\u8d44\u6e90\u4f7f\u7528\u7ec6\u8282\uff0c\u7528\u6765\u9884\u4f30\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5cf0\u503c\u8d44\u6e90\u9700\u6c42\uff0c\u4ece\u800c\u652f\u6301\u66f4\u597d\u5730\u5206\u6563\u70ed\u70b9\uff0c\u63d0\u9ad8\u6df7\u90e8\u7684\u6548\u7387\u3002\u6b64\u5916\uff0c\u8d44\u6e90 profiling \u8fd8\u5c06\u7528\u4e8e\u7b80\u5316\u7528\u6237\u8d44\u6e90\u89c4\u8303\u5316\u914d\u7f6e\u7684\u590d\u6742\u6027\uff0c\u5982\u652f\u6301 VPA\u3002")),(0,a.kt)("h2",{id:"koordlet"},"Koordlet"),(0,a.kt)("p",null,"Koordlet \u4ee5 DaemonSet \u7684\u5f62\u5f0f\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u4e2d\uff0c\u7528\u4e8e\u652f\u6301\u6df7\u90e8\u573a\u666f\u4e0b\u7684\u8d44\u6e90\u8d85\u5356(resource overcommitment)\u3001\u5e72\u6270\u68c0\u6d4b\u3001QoS \u4fdd\u8bc1\u7b49\u3002"),(0,a.kt)("p",null,"\u5728Koordlet\u5185\u90e8\uff0c\u5b83\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u6a21\u5757:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8d44\u6e90 Profiling\uff0c\u4f30\u7b97 Pod \u8d44\u6e90\u7684\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\uff0c\u56de\u6536\u5df2\u5206\u914d\u4f46\u672a\u4f7f\u7528\u7684\u8d44\u6e90\uff0c\u7528\u4e8e\u4f4e\u4f18\u5148\u7ea7 Pod \u7684 overcommit\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u9694\u79bb\uff0c\u4e3a\u4e0d\u540c\u7c7b\u578b\u7684 Pod \u8bbe\u7f6e\u8d44\u6e90\u9694\u79bb\u53c2\u6570\uff0c\u907f\u514d\u4f4e\u4f18\u5148\u7ea7\u7684 Pod \u5f71\u54cd\u9ad8\u4f18\u5148\u7ea7 Pod \u7684\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e72\u6270\u68c0\u6d4b\uff0c\u5bf9\u4e8e\u8fd0\u884c\u4e2d\u7684 Pod\uff0c\u52a8\u6001\u68c0\u6d4b\u8d44\u6e90\u4e89\u593a\uff0c\u5305\u62ec CPU \u8c03\u5ea6\u3001\u5185\u5b58\u5206\u914d\u5ef6\u8fdf\u3001\u7f51\u7edc\u3001\u78c1\u76d8 IO \u5ef6\u8fdf\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"QoS \u7ba1\u7406\u5668\uff0c\u6839\u636e\u8d44\u6e90\u5256\u6790\u3001\u5e72\u6270\u68c0\u6d4b\u7ed3\u679c\u548c SLO \u914d\u7f6e\uff0c\u52a8\u6001\u8c03\u6574\u6df7\u90e8\u8282\u70b9\u7684\u6c34\u4f4d\uff0c\u6291\u5236\u5f71\u54cd\u670d\u52a1\u8d28\u91cf\u7684 Pod\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u8c03\u4f18\uff0c\u9488\u5bf9\u6df7\u90e8\u573a\u666f\u8fdb\u884c\u5bb9\u5668\u8d44\u6e90\u8c03\u4f18\uff0c\u4f18\u5316\u5bb9\u5668\u7684 CPU Throttle\u3001OOM \u7b49\uff0c\u63d0\u9ad8\u670d\u52a1\u8fd0\u884c\u8d28\u91cf\u3002")),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u63a8\u8350\u4e0b\u4e00\u6b65\u9605\u8bfb\u7684\u5185\u5bb9:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,a.kt)("a",{parentName:"li",href:"./resource-model"},"\u8d44\u6e90\u6a21\u578b"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,a.kt)("a",{parentName:"li",href:"./priority"},"Priority"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,a.kt)("a",{parentName:"li",href:"./qos"},"QoS"),"\u3002")))}m.isMDXComponent=!0},5109:function(e,r,t){r.Z=t.p+"assets/images/architecture-c845f380c9948d615e708ee12d465e27.png"}}]);