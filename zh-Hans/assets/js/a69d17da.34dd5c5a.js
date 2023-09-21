"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2018],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),d=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=d(e.components);return o.createElement(u.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,k=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return t?o.createElement(k,l(l({ref:r},c),{},{components:t})):o.createElement(k,l({ref:r},c))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8656:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(7462),n=(t(7294),t(3905));const a={},l="\u6982\u8ff0",i={unversionedId:"architecture/overview",id:"version-v1.3/architecture/overview",title:"\u6982\u8ff0",description:"\u672c\u8282\u63cf\u8ff0\u4e86 Koordinator \u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u76f8\u5173\u7684\u67b6\u6784\u3001\u7ec4\u4ef6\u548c\u6838\u5fc3\u6982\u5ff5\u3002Koordinator \u7531\u4e24\u4e2a\u63a7\u5236\u9762\uff08Koordinator Scheduler/Koordinator Manager\uff09\u548c\u4e00\u4e2a DaemonSet \u7ec4\u4ef6(Koordlet)\u7ec4\u6210\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.3/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/zh-Hans/docs/architecture/overview",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/overview.md",tags:[],version:"v1.3",lastUpdatedBy:"saintube",lastUpdatedAt:1692186595,formattedLastUpdatedAt:"2023\u5e748\u670816\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u5b89\u88c5",permalink:"/zh-Hans/docs/installation"},next:{title:"\u8d44\u6e90\u6a21\u578b",permalink:"/zh-Hans/docs/architecture/resource-model"}},u={},d=[{value:"Koord-Scheduler",id:"koord-scheduler",level:2},{value:"Koord-Descheduler",id:"koord-descheduler",level:2},{value:"Koord-Manager",id:"koord-manager",level:2},{value:"Koordlet",id:"koordlet",level:2},{value:"Koord-RuntimeProxy",id:"koord-runtimeproxy",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],c={toc:d},p="wrapper";function s(e){let{components:r,...a}=e;return(0,n.kt)(p,(0,o.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u4e86 Koordinator \u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u76f8\u5173\u7684\u67b6\u6784\u3001\u7ec4\u4ef6\u548c\u6838\u5fc3\u6982\u5ff5\u3002Koordinator \u7531\u4e24\u4e2a\u63a7\u5236\u9762\uff08",(0,n.kt)("a",{parentName:"p",href:"#koordinator-scheduler"},"Koordinator Scheduler"),"/",(0,n.kt)("a",{parentName:"p",href:"#koordinator-manager"},"Koordinator Manager"),"\uff09\u548c\u4e00\u4e2a DaemonSet \u7ec4\u4ef6(",(0,n.kt)("a",{parentName:"p",href:"#koordlet"},"Koordlet"),")\u7ec4\u6210\u3002\nKoordinator \u5728 Kubernetes \u539f\u6709\u7684\u80fd\u529b\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u6df7\u90e8\u529f\u80fd\uff0c\u5e76\u517c\u5bb9\u4e86 Kubernetes \u539f\u6709\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u67b6\u6784",src:t(5109).Z,width:"2192",height:"1482"})),(0,n.kt)("h2",{id:"koord-scheduler"},"Koord-Scheduler"),(0,n.kt)("p",null,"Koord-Scheduler \u4ee5 Deployment \u7684\u5f62\u5f0f\u90e8\u7f72\u5728\u96c6\u7fa4\u4e2d\uff0c\u7528\u4e8e\u589e\u5f3a Kubernetes \u5728 QoS-aware\uff0c\u5dee\u5f02\u5316 SLO \u4ee5\u53ca\u4efb\u52a1\u8c03\u5ea6\u573a\u666f\u7684\u8d44\u6e90\u8c03\u5ea6\u80fd\u529b\uff0c\u5177\u4f53\u5305\u62ec:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"QoS-aware \u8c03\u5ea6\uff0c\u5305\u62ec\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6\u8ba9\u8282\u70b9\u95f4\u8d1f\u8f7d\u66f4\u4f73\u5e73\u8861\uff0c\u8d44\u6e90\u8d85\u5356\u7684\u65b9\u5f0f\u652f\u6301\u8fd0\u884c\u66f4\u591a\u7684\u4f4e\u4f18\u5148\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5dee\u5f02\u5316 SLO\uff0c\u5305\u62ec CPU \u7cbe\u7ec6\u5316\u7f16\u6392\uff0c\u4e3a\u4e0d\u540c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u63d0\u4f9b\u4e0d\u540c\u7684 QoS \u9694\u79bb\u7b56\u7565\uff08cfs\uff0cLLC\uff0cmemory \u5e26\u5bbd\uff0c\u7f51\u7edc\u5e26\u5bbd\uff0c\u78c1\u76d8io\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u8c03\u5ea6\uff0c\u5305\u62ec\u5f39\u6027\u989d\u5ea6\u7ba1\u7406\uff0cGang \u8c03\u5ea6\uff0c\u5f02\u6784\u8d44\u6e90\u8c03\u5ea6\u7b49\uff0c\u4ee5\u652f\u6301\u66f4\u597d\u7684\u8fd0\u884c\u5927\u6570\u636e\u548c AI \u5de5\u4f5c\u8d1f\u8f7d\u3002")),(0,n.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u652f\u6301\u4e0d\u540c\u7c7b\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0cKoord-scheduler \u8fd8\u5305\u62ec\u4e86\u4e00\u4e9b\u901a\u7528\u6027\u7684\u80fd\u529b\u589e\u5f3a\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reservation\uff0c\u652f\u6301\u4e3a\u7279\u5b9a\u7684 Pod \u6216\u8005\u5de5\u4f5c\u8d1f\u8f7d\u9884\u7559\u8282\u70b9\u8d44\u6e90\u3002\u8d44\u6e90\u9884\u7559\u7279\u6027\u5e7f\u6cdb\u5e94\u7528\u4e8e\u91cd\u8c03\u5ea6\uff0c\u8d44\u6e90\u62a2\u5360\u4ee5\u53ca\u8282\u70b9\u788e\u7247\u6574\u7406\u7b49\u76f8\u5173\u4f18\u5316\u8fc7\u7a0b\u3002"),(0,n.kt)("li",{parentName:"ul"},"Node Reservation\uff0c\u652f\u6301\u4e3a kubernetes \u4e4b\u5916\u7684\u5de5\u4f5c\u8d1f\u8f7d\u9884\u7559\u8282\u70b9\u8d44\u6e90\uff0c\u4e00\u822c\u5e94\u7528\u4e8e\u8282\u70b9\u4e0a\u8fd0\u884c\u7740\u975e\u5bb9\u5668\u5316\u7684\u8d1f\u8f7d\u573a\u666f\u3002")),(0,n.kt)("h2",{id:"koord-descheduler"},"Koord-Descheduler"),(0,n.kt)("p",null,"Koord-Decheduler \u4ee5 Deployment \u7684\u5f62\u5f0f\u90e8\u7f72\u5728\u96c6\u7fa4\u4e2d\uff0c\u5b83\u662f kubernetes \u4e0a\u6e38\u793e\u533a\u7684\u589e\u5f3a\u7248\u672c\uff0c\u5f53\u524d\u5305\u542b:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u91cd\u8c03\u5ea6\u6846\u67b6, Koord-Decheduler \u91cd\u65b0\u8bbe\u8ba1\u4e86\u5168\u65b0\u91cd\u8c03\u5ea6\u6846\u67b6\uff0c\u5728\u53ef\u6269\u5c55\u6027\u3001\u8d44\u6e90\u786e\u5b9a\u6027\u4ee5\u53ca\u5b89\u5168\u6027\u4e0a\u589e\u52a0\u4e86\u8bf8\u591a\u7684\u52a0\u5f3a\uff0c\u66f4\u591a\u7684",(0,n.kt)("a",{parentName:"li",href:"../designs/descheduler-framework"},"\u7ec6\u8282"),"."),(0,n.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u611f\u77e5\u91cd\u8c03\u5ea6\uff0c\u57fa\u4e8e\u65b0\u6846\u67b6\u5b9e\u73b0\u7684\u4e00\u4e2a\u8d1f\u8f7d\u611f\u77e5\u91cd\u8c03\u5ea6\u63d2\u4ef6\uff0c\u652f\u6301\u7528\u6237\u914d\u7f6e\u8282\u70b9\u7684\u5b89\u5168\u6c34\u4f4d\uff0c\u4ee5\u9a71\u52a8\u91cd\u8c03\u5ea6\u5668\u6301\u7eed\u4f18\u5316\u96c6\u7fa4\u7f16\u6392\uff0c\u4ece\u800c\u89c4\u907f\u96c6\u7fa4\u4e2d\u51fa\u73b0\u5c40\u90e8\u8282\u70b9\u70ed\u70b9.")),(0,n.kt)("h2",{id:"koord-manager"},"Koord-Manager"),(0,n.kt)("p",null,"Koord-Manager \u4ee5 Deployment \u7684\u5f62\u5f0f\u90e8\u7f72\uff0c\u901a\u5e38\u7531\u4e24\u4e2a\u5b9e\u4f8b\u7ec4\u6210\uff0c\u4e00\u4e2a leader \u5b9e\u4f8b\u548c\u4e00\u4e2a backup \u5b9e\u4f8b\u3002Koordinator Manager \u7531\u51e0\u4e2a\u63a7\u5236\u5668\u548c webhooks \u7ec4\u6210\uff0c\u7528\u4e8e\u534f\u8c03\u6df7\u90e8\u573a\u666f\u4e0b\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u8d44\u6e90\u8d85\u5356(resource overcommitment)\u548c SLO \u7ba1\u7406\u3002"),(0,n.kt)("p",null,"\u76ee\u524d\uff0c\u63d0\u4f9b\u4e86\u4e09\u4e2a\u7ec4\u4ef6:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Colocation Profile\uff0c\u7528\u4e8e\u652f\u6301\u6df7\u90e8\u800c\u4e0d\u9700\u8981\u4fee\u6539\u5de5\u4f5c\u8d1f\u8f7d\u3002\u7528\u6237\u53ea\u9700\u8981\u5728\u96c6\u7fa4\u4e2d\u505a\u5c11\u91cf\u7684\u914d\u7f6e\uff0c\u539f\u6765\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5c31\u53ef\u4ee5\u5728\u6df7\u90e8\u6a21\u5f0f\u4e0b\u8fd0\u884c\uff0c\u4e86\u89e3\u66f4\u591a\u5173\u4e8e",(0,n.kt)("a",{parentName:"li",href:"/zh-Hans/docs/user-manuals/colocation-profile"},"Colocation Profile"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"SLO \u63a7\u5236\u5668\uff0c\u7528\u4e8e\u8d44\u6e90\u8d85\u5356(resource overcommitment)\u7ba1\u7406\uff0c\u6839\u636e\u8282\u70b9\u6df7\u90e8\u65f6\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u52a8\u6001\u8c03\u6574\u96c6\u7fa4\u7684\u8d85\u53d1(overcommit)\u914d\u7f6e\u6bd4\u4f8b\u3002\u8be5\u63a7\u5236\u5668\u7684\u6838\u5fc3\u804c\u8d23\u662f\u7ba1\u7406\u6df7\u90e8\u65f6\u7684 SLO\uff0c\u5982\u667a\u80fd\u8bc6\u522b\u51fa\u96c6\u7fa4\u4e2d\u7684\u5f02\u5e38\u8282\u70b9\u5e76\u964d\u4f4e\u5176\u6743\u91cd\uff0c\u52a8\u6001\u8c03\u6574\u6df7\u90e8\u65f6\u7684\u6c34\u4f4d\u548c\u538b\u529b\u7b56\u7565\uff0c\u4ece\u800c\u4fdd\u8bc1\u96c6\u7fa4\u4e2d pod \u7684\u7a33\u5b9a\u6027\u548c\u541e\u5410\u91cf\u3002"),(0,n.kt)("li",{parentName:"ul"},"Recommender\uff08\u5373\u5c06\u63a8\u51fa\uff09\uff0c\u5b83\u4f7f\u7528 histograms \u6765\u7edf\u8ba1\u548c\u9884\u6d4b\u5de5\u4f5c\u8d1f\u8f7d\u7684\u8d44\u6e90\u4f7f\u7528\u7ec6\u8282\uff0c\u7528\u6765\u9884\u4f30\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5cf0\u503c\u8d44\u6e90\u9700\u6c42\uff0c\u4ece\u800c\u652f\u6301\u66f4\u597d\u5730\u5206\u6563\u70ed\u70b9\uff0c\u63d0\u9ad8\u6df7\u90e8\u7684\u6548\u7387\u3002\u6b64\u5916\uff0c\u8d44\u6e90 profiling \u8fd8\u5c06\u7528\u4e8e\u7b80\u5316\u7528\u6237\u8d44\u6e90\u89c4\u8303\u5316\u914d\u7f6e\u7684\u590d\u6742\u6027\uff0c\u5982\u652f\u6301 VPA\u3002")),(0,n.kt)("h2",{id:"koordlet"},"Koordlet"),(0,n.kt)("p",null,"Koordlet \u4ee5 DaemonSet \u7684\u5f62\u5f0f\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u4e2d\uff0c\u7528\u4e8e\u652f\u6301\u6df7\u90e8\u573a\u666f\u4e0b\u7684\u8d44\u6e90\u8d85\u5356(resource overcommitment)\u3001\u5e72\u6270\u68c0\u6d4b\u3001QoS \u4fdd\u8bc1\u7b49\u3002"),(0,n.kt)("p",null,"\u5728Koordlet\u5185\u90e8\uff0c\u5b83\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u6a21\u5757:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90 Profiling\uff0c\u4f30\u7b97 Pod \u8d44\u6e90\u7684\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\uff0c\u56de\u6536\u5df2\u5206\u914d\u4f46\u672a\u4f7f\u7528\u7684\u8d44\u6e90\uff0c\u7528\u4e8e\u4f4e\u4f18\u5148\u7ea7 Pod \u7684 overcommit\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u9694\u79bb\uff0c\u4e3a\u4e0d\u540c\u7c7b\u578b\u7684 Pod \u8bbe\u7f6e\u8d44\u6e90\u9694\u79bb\u53c2\u6570\uff0c\u907f\u514d\u4f4e\u4f18\u5148\u7ea7\u7684 Pod \u5f71\u54cd\u9ad8\u4f18\u5148\u7ea7 Pod \u7684\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5e72\u6270\u68c0\u6d4b\uff0c\u5bf9\u4e8e\u8fd0\u884c\u4e2d\u7684 Pod\uff0c\u52a8\u6001\u68c0\u6d4b\u8d44\u6e90\u4e89\u593a\uff0c\u5305\u62ec CPU \u8c03\u5ea6\u3001\u5185\u5b58\u5206\u914d\u5ef6\u8fdf\u3001\u7f51\u7edc\u3001\u78c1\u76d8 IO \u5ef6\u8fdf\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"QoS \u7ba1\u7406\u5668\uff0c\u6839\u636e\u8d44\u6e90\u5256\u6790\u3001\u5e72\u6270\u68c0\u6d4b\u7ed3\u679c\u548c SLO \u914d\u7f6e\uff0c\u52a8\u6001\u8c03\u6574\u6df7\u90e8\u8282\u70b9\u7684\u6c34\u4f4d\uff0c\u6291\u5236\u5f71\u54cd\u670d\u52a1\u8d28\u91cf\u7684 Pod\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u8c03\u4f18\uff0c\u9488\u5bf9\u6df7\u90e8\u573a\u666f\u8fdb\u884c\u5bb9\u5668\u8d44\u6e90\u8c03\u4f18\uff0c\u4f18\u5316\u5bb9\u5668\u7684 CPU Throttle\u3001OOM \u7b49\uff0c\u63d0\u9ad8\u670d\u52a1\u8fd0\u884c\u8d28\u91cf\u3002")),(0,n.kt)("h2",{id:"koord-runtimeproxy"},"Koord-RuntimeProxy"),(0,n.kt)("p",null,"Koord-RuntimeProxy \u4ee5 systemd service \u7684\u5f62\u5f0f\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u7684\u8282\u70b9\u4e0a\uff0c\u7528\u4e8e\u4ee3\u7406 Kubelet \u4e0e containerd/docker \u4e4b\u95f4\u7684 CRI \u8bf7\u6c42\u3002\u8fd9\u4e00\u4e2a\u4ee3\u7406\u88ab\u8bbe\u8ba1\u6765\u652f\u6301\u7cbe\u7ec6\u5316\u7684\u8d44\u6e90\u7ba1\u7406\u7b56\u7565\uff0c\u6bd4\u5982\u4e3a\u4e0d\u540c QoS Pod \u8bbe\u7f6e\u4e0d\u540c\u7684 cgroup \u53c2\u6570\uff0c\u5305\u62ec\u5185\u6838 cfs quota\uff0cresctl \u7b49\u7b49\u6280\u672f\u7279\u6027\uff0c\u4ee5\u6539\u8fdb Pod \u7684\u8fd0\u884c\u65f6\u8d28\u91cf\u3002\u3002"),(0,n.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u63a8\u8350\u4e0b\u4e00\u6b65\u9605\u8bfb\u7684\u5185\u5bb9:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,n.kt)("a",{parentName:"li",href:"./resource-model"},"\u8d44\u6e90\u6a21\u578b"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,n.kt)("a",{parentName:"li",href:"./priority"},"Priority"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,n.kt)("a",{parentName:"li",href:"./qos"},"QoS"),"\u3002")))}s.isMDXComponent=!0},5109:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/architecture-2a3a51f8633a297967b41258e30a353f.png"}}]);