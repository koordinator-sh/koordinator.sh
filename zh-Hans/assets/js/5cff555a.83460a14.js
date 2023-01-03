"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[1760],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(k,l(l({ref:e},c),{},{components:n})):r.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2063:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},u="QoS",p={unversionedId:"architecture/qos",id:"version-v1.1/architecture/qos",title:"QoS",description:"QoS \u7528\u4e8e\u8868\u8fbe\u8282\u70b9\u4e0a Pod \u7684\u8fd0\u884c\u8d28\u91cf\uff0c\u5982\u83b7\u53d6\u8d44\u6e90\u7684\u65b9\u5f0f\u3001\u83b7\u53d6\u8d44\u6e90\u7684\u6bd4\u4f8b\u3001QoS \u4fdd\u969c\u7b56\u7565\u7b49\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.1/architecture/qos.md",sourceDirName:"architecture",slug:"/architecture/qos",permalink:"/zh-Hans/docs/architecture/qos",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/qos.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"2023/1/3",frontMatter:{},sidebar:"docs",previous:{title:"\u4f18\u5148\u7ea7",permalink:"/zh-Hans/docs/architecture/priority"},next:{title:"Colocation Profile",permalink:"/zh-Hans/docs/user-manuals/colocation-profile"}},c={},d=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"QoS CPU \u7f16\u6392\u9694\u79bb\u4e0e\u5171\u4eab",id:"qos-cpu-\u7f16\u6392\u9694\u79bb\u4e0e\u5171\u4eab",level:2},{value:"Koordinator QoS\u4e0e Kubernetes QoS \u7684\u5bf9\u6bd4",id:"koordinator-qos\u4e0e-kubernetes-qos-\u7684\u5bf9\u6bd4",level:2}],s={toc:d};function m(t){var e=t.components,i=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"qos"},"QoS"),(0,o.kt)("p",null,"QoS \u7528\u4e8e\u8868\u8fbe\u8282\u70b9\u4e0a Pod \u7684\u8fd0\u884c\u8d28\u91cf\uff0c\u5982\u83b7\u53d6\u8d44\u6e90\u7684\u65b9\u5f0f\u3001\u83b7\u53d6\u8d44\u6e90\u7684\u6bd4\u4f8b\u3001QoS \u4fdd\u969c\u7b56\u7565\u7b49\u3002"),(0,o.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"Koordinator \u8c03\u5ea6\u7cfb\u7edf\u652f\u6301\u7684 QoS \u6709\u4e94\u79cd\u7c7b\u578b:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"QoS"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7279\u70b9"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SYSTEM"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u8fdb\u7a0b\uff0c\u8d44\u6e90\u53d7\u9650"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e DaemonSets \u7b49\u7cfb\u7edf\u670d\u52a1\uff0c\u867d\u7136\u9700\u8981\u4fdd\u8bc1\u7cfb\u7edf\u670d\u52a1\u7684\u5ef6\u8fdf\uff0c\u4f46\u4e5f\u9700\u8981\u9650\u5236\u8282\u70b9\u4e0a\u8fd9\u4e9b\u7cfb\u7edf\u670d\u52a1\u5bb9\u5668\u7684\u8d44\u6e90\u4f7f\u7528\uff0c\u4ee5\u786e\u4fdd\u5176\u4e0d\u5360\u7528\u8fc7\u591a\u7684\u8d44\u6e90")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LSE(Latency Sensitive Exclusive)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u8d44\u6e90\u5e76\u7ec4\u7ec7\u540c QoS \u7684 pod \u5171\u4eab\u8d44\u6e90"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f88\u5c11\u4f7f\u7528\uff0c\u5e38\u89c1\u4e8e\u4e2d\u95f4\u4ef6\u7c7b\u5e94\u7528\uff0c\u4e00\u822c\u5728\u72ec\u7acb\u7684\u8d44\u6e90\u6c60\u4e2d\u4f7f\u7528")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LSR(Latency Sensitive Reserved)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u8d44\u6e90\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u786e\u5b9a\u6027"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7c7b\u4f3c\u4e8e\u793e\u533a\u7684 Guaranteed\uff0cCPU \u6838\u88ab\u7ed1\u5b9a")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LS(Latency Sensitive)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5171\u4eab\u8d44\u6e90\uff0c\u5bf9\u7a81\u53d1\u6d41\u91cf\u6709\u66f4\u597d\u7684\u5f39\u6027"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5fae\u670d\u52a1\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5178\u578bQoS\u7ea7\u522b\uff0c\u5b9e\u73b0\u66f4\u597d\u7684\u8d44\u6e90\u5f39\u6027\u548c\u66f4\u7075\u6d3b\u7684\u8d44\u6e90\u8c03\u6574\u80fd\u529b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BE(Best Effort)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5171\u4eab\u4e0d\u5305\u62ec LSE \u7684\u8d44\u6e90\uff0c\u8d44\u6e90\u8fd0\u884c\u8d28\u91cf\u6709\u9650\uff0c\u751a\u81f3\u5728\u6781\u7aef\u60c5\u51b5\u4e0b\u88ab\u6740\u6b7b"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u4f5c\u4e1a\u7684\u5178\u578b QoS \u6c34\u5e73\uff0c\u5728\u4e00\u5b9a\u65f6\u671f\u5185\u7a33\u5b9a\u7684\u8ba1\u7b97\u541e\u5410\u91cf\uff0c\u4f4e\u6210\u672c\u8d44\u6e90")))),(0,o.kt)("h2",{id:"qos-cpu-\u7f16\u6392\u9694\u79bb\u4e0e\u5171\u4eab"},"QoS CPU \u7f16\u6392\u9694\u79bb\u4e0e\u5171\u4eab"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"img",src:n(9845).Z,width:"1399",height:"445"})),(0,o.kt)("h2",{id:"koordinator-qos\u4e0e-kubernetes-qos-\u7684\u5bf9\u6bd4"},"Koordinator QoS\u4e0e Kubernetes QoS \u7684\u5bf9\u6bd4"),(0,o.kt)("p",null,"\u4ece",(0,o.kt)("a",{parentName:"p",href:"#%E5%AE%9A%E4%B9%89"},"\u5b9a\u4e49"),"\u90e8\u5206\u53ef\u4ee5\u770b\u51fa\uff0cKoordinator \u7684 QoS \u6bd4 Kubernetes \u7684 QoS \u66f4\u590d\u6742\uff0c\u56e0\u4e3a\u5728\u6df7\u90e8\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u5ef6\u8fdf\u654f\u611f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7684 QoS \u8fdb\u884c\u5fae\u8c03\uff0c\u4ee5\u6ee1\u8db3\u6df7\u90e8\u65f6\u6027\u80fd\u7684\u9700\u6c42\u3002"),(0,o.kt)("p",null,"Koordinator \u548c Kubernetes QoS \u4e4b\u95f4\u662f\u6709\u5bf9\u5e94\u5173\u7cfb\u7684:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Koordinator QoS"),(0,o.kt)("th",{parentName:"tr",align:null},"Kubernetes QoS"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SYSTEM"),(0,o.kt)("td",{parentName:"tr",align:null},"---")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LSE"),(0,o.kt)("td",{parentName:"tr",align:null},"Guaranteed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LSR"),(0,o.kt)("td",{parentName:"tr",align:null},"Guaranteed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LS"),(0,o.kt)("td",{parentName:"tr",align:null},"Guaranteed/Burstable")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BE"),(0,o.kt)("td",{parentName:"tr",align:null},"BestEffort")))),(0,o.kt)("p",null,"Koordlet \u6839\u636e Pod \u7684\u4f18\u5148\u7ea7\u548c QoS \u5b9a\u4e49\uff0c\u89e6\u53d1\u76f8\u5e94\u7684\u8d44\u6e90\u9694\u79bb\u548c QoS \u4fdd\u969c\u3002"))}m.isMDXComponent=!0},9845:function(t,e,n){e.Z=n.p+"assets/images/qos-cpu-orchestration-460f5568c67508e791d2f0b8798ac826.png"}}]);