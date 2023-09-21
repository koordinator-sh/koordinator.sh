"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[9437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return r?o.createElement(f,a(a({ref:t},d),{},{components:r})):o.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const i={},a="Koordlet",s={unversionedId:"designs/koordlet-overview",id:"version-v1.3/designs/koordlet-overview",title:"Koordlet",description:"Summary",source:"@site/versioned_docs/version-v1.3/designs/koordlet-overview.md",sourceDirName:"designs",slug:"/designs/koordlet-overview",permalink:"/docs/designs/koordlet-overview",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/koordlet-overview.md",tags:[],version:"v1.3",lastUpdatedBy:"saintube",lastUpdatedAt:1692186595,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Performance Collector",permalink:"/docs/user-manuals/performance-collector"},next:{title:"RuntimeProxy",permalink:"/docs/designs/runtime-proxy"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Modules",id:"modules",level:2},{value:"Metrics Advisor",id:"metrics-advisor",level:3},{value:"Storage",id:"storage",level:3},{value:"States Informer",id:"states-informer",level:3},{value:"QoS Manager",id:"qos-manager",level:3},{value:"Metrics Reporter",id:"metrics-reporter",level:3},{value:"Runtime Hooks",id:"runtime-hooks",level:3},{value:"e.g. LLC Isolation Injections during Pod Lifecycle",id:"eg-llc-isolation-injections-during-pod-lifecycle",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"koordlet"},"Koordlet"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,'Koordlet is a DaemonSet deployed in Kubernetes node, which is used for co-location resource overcommitment, interference\ndetection, QoS guarantee, etc. It is composed of several modules which are responsible for information collection,\ndata profiling and QoS management independent. Some modules also provides a framework scaffold, which provides a set\nof plugin for extension (such as the "QoS Manager"), so that new strategies can be easily added.  '),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(4215).Z,width:"424",height:"251"})),(0,n.kt)("h2",{id:"modules"},"Modules"),(0,n.kt)("h3",{id:"metrics-advisor"},"Metrics Advisor"),(0,n.kt)("p",null,"Metric Advisor provides the basic information of resource usage and performance characteristic of node, pods and containers.\nIt is an independent module that collects, processes and exports resource profile periodically. It also detects the\ninterference of running containers such as CPU scheduling, memory allocation latency and Pressure Stall Information(PSI).\nThe information will be widely used for resource overcommitment and QoS guaranteed plugins."),(0,n.kt)("h3",{id:"storage"},"Storage"),(0,n.kt)("p",null,"Storage manages the information from Metrics Advisor and States Informer, providing APIs for CURD and GC outdated data\nperiodically. There are two types of data: ",(0,n.kt)("inlineCode",{parentName:"p"},"static")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"time-series"),". Time-series type keeps historical data for\nstatistics purpose, such as CPU and memory usage. Static type includes the of status information node, pod and container,\nsuch as CPU info of node, metadata of pod."),(0,n.kt)("h3",{id:"states-informer"},"States Informer"),(0,n.kt)("p",null,"States Informer syncs node and pod status from kube-apiserver and kubelet, and saves data into Storage as ",(0,n.kt)("inlineCode",{parentName:"p"},"static")," type.\nThis module should remain relatively stable over developing iterations compared with others."),(0,n.kt)("h3",{id:"qos-manager"},"QoS Manager"),(0,n.kt)("p",null,'QoS Manager coordinates a set of plugins which are responsible for SLO guarantee by priority, mitigating interference\namong pods. Plugins dynamically tunes the "knobs" of resource parameters on different scenarios, according to resource\nprofiling, interference detection results and SLO configuration. For each plugin, it always produces execution plans for\n"knobs" tuning. QoS Manager also act as an arbitrator among multiple execution plans, consolidating the duplicates and\nresolving the conflicts.'),(0,n.kt)("p",null,'QoS Manager could be the most frequently iterated module, with new plugins extended, strategies algorithm updated and\npolicy execution ways added. A new plugin should implement the interface which contains a series of standard APIs, so\nthat the "core" can be kept simple and maintainable. Advanced plugins such as those for interference detection purpose\nwill get more complex as time goes by, which might becomes an independent module after the incubation has been already\nstabled in QoS Manager. '),(0,n.kt)("h3",{id:"metrics-reporter"},"Metrics Reporter"),(0,n.kt)("p",null,"Metrics Reporter reads historical metric and state data from Storage, then merges and sends them to apiserver,\nwhich will be consumed by Koordinator Manager for resource overcommitment model management. Metrics Reporter also\nsupports multiple processing algorithms for different co-location scenarios."),(0,n.kt)("h3",{id:"runtime-hooks"},"Runtime Hooks"),(0,n.kt)("p",null,"Runtime Hooks act as the back-end server of Runtime Hook Manager. Runtime Hook Manager is a CRI Proxy, which\nintercepting the CRI request, calling back-end server to inject policies, such as setting resource isolation\nparameters by pod priorities, applying resource allocation policies. Runtime Hooks provide a framework to maintain\ndifferent kinds of policies, and provides flexible extension points during the lifecycle of containers."),(0,n.kt)("h4",{id:"eg-llc-isolation-injections-during-pod-lifecycle"},"e.g. LLC Isolation Injections during Pod Lifecycle"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(6229).Z,width:"425",height:"291"})))}p.isMDXComponent=!0},4215:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/koordlet-arch-12f76fe4c21480d3db812a902a853e3b.svg"},6229:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/llc-isolation-ee2864c933cc19aaca13902992d83bca.svg"}}]);