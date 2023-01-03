"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2531],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},l="Koordlet",c={unversionedId:"designs/koordlet-overview",id:"version-v1.0/designs/koordlet-overview",title:"Koordlet",description:"Summary",source:"@site/versioned_docs/version-v1.0/designs/koordlet-overview.md",sourceDirName:"designs",slug:"/designs/koordlet-overview",permalink:"/docs/v1.0/designs/koordlet-overview",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/koordlet-overview.md",tags:[],version:"v1.0",lastUpdatedBy:"Fansong Zeng",lastUpdatedAt:1667483216,formattedLastUpdatedAt:"11/3/2022",frontMatter:{},sidebar:"docs",previous:{title:"Multi Hierarchy Elastic Quota Management",permalink:"/docs/v1.0/user-manuals/multi-hierarchy-elastic-quota-management"},next:{title:"RuntimeProxy",permalink:"/docs/v1.0/designs/runtime-proxy"}},d={},u=[{value:"Summary",id:"summary",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Modules",id:"modules",level:2},{value:"Metrics Advisor",id:"metrics-advisor",level:3},{value:"Storage",id:"storage",level:3},{value:"States Informer",id:"states-informer",level:3},{value:"QoS Manager",id:"qos-manager",level:3},{value:"Metrics Reporter",id:"metrics-reporter",level:3},{value:"Runtime Hooks",id:"runtime-hooks",level:3},{value:"e.g. LLC Isolation Injections during Pod Lifecycle",id:"eg-llc-isolation-injections-during-pod-lifecycle",level:4}],p={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"koordlet"},"Koordlet"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,'Koordlet is a DaemonSet deployed in Kubernetes node, which is used for co-location resource overcommitment, interference\ndetection, QoS guarantee, etc. It is composed of several modules which are responsible for information collection,\ndata profiling and QoS management independent. Some modules also provides a framework scaffold, which provides a set\nof plugin for extension (such as the "QoS Manager"), so that new strategies can be easily added.  '),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:n(4215).Z,width:"424",height:"251"})),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("h3",{id:"metrics-advisor"},"Metrics Advisor"),(0,i.kt)("p",null,"Metric Advisor provides the basic information of resource usage and performance characteristic of node, pods and containers.\nIt is an independent module that collects, processes and exports resource profile periodically. It also detects the\ninterference of running containers such as CPU scheduling, memory allocation latency and Pressure Stall Information(PSI).\nThe information will be widely used for resource overcommitment and QoS guaranteed plugins."),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Storage manages the information from Metrics Advisor and States Informer, providing APIs for CURD and GC outdated data\nperiodically. There are two types of data: ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"time-series"),". Time-series type keeps historical data for\nstatistics purpose, such as CPU and memory usage. Static type includes the of status information node, pod and container,\nsuch as CPU info of node, metadata of pod."),(0,i.kt)("h3",{id:"states-informer"},"States Informer"),(0,i.kt)("p",null,"States Informer syncs node and pod status from kube-apiserver and kubelet, and saves data into Storage as ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," type.\nThis module should remain relatively stable over developing iterations compared with others."),(0,i.kt)("h3",{id:"qos-manager"},"QoS Manager"),(0,i.kt)("p",null,'QoS Manager coordinates a set of plugins which are responsible for SLO guarantee by priority, mitigating interference\namong pods. Plugins dynamically tunes the "knobs" of resource parameters on different scenarios, according to resource\nprofiling, interference detection results and SLO configuration. For each plugin, it always produces execution plans for\n"knobs" tuning. QoS Manager also act as an arbitrator among multiple execution plans, consolidating the duplicates and\nresolving the conflicts.'),(0,i.kt)("p",null,'QoS Manager could be the most frequently iterated module, with new plugins extended, strategies algorithm updated and\npolicy execution ways added. A new plugin should implement the interface which contains a series of standard APIs, so\nthat the "core" can be kept simple and maintainable. Advanced plugins such as those for interference detection purpose\nwill get more complex as time goes by, which might becomes an independent module after the incubation has been already\nstabled in QoS Manager. '),(0,i.kt)("h3",{id:"metrics-reporter"},"Metrics Reporter"),(0,i.kt)("p",null,"Metrics Reporter reads historical metric and state data from Storage, then merges and sends them to apiserver,\nwhich will be consumed by Koordinator Manager for resource overcommitment model management. Metrics Reporter also\nsupports multiple processing algorithms for different co-location scenarios."),(0,i.kt)("h3",{id:"runtime-hooks"},"Runtime Hooks"),(0,i.kt)("p",null,"Runtime Hooks act as the back-end server of Runtime Hook Manager. Runtime Hook Manager is a CRI Proxy, which\nintercepting the CRI request, calling back-end server to inject policies, such as setting resource isolation\nparameters by pod priorities, applying resource allocation policies. Runtime Hooks provide a framework to maintain\ndifferent kinds of policies, and provides flexible extension points during the lifecycle of containers."),(0,i.kt)("h4",{id:"eg-llc-isolation-injections-during-pod-lifecycle"},"e.g. LLC Isolation Injections during Pod Lifecycle"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:n(6229).Z,width:"425",height:"291"})))}m.isMDXComponent=!0},4215:function(e,t,n){t.Z=n.p+"assets/images/koordlet-arch-12f76fe4c21480d3db812a902a853e3b.svg"},6229:function(e,t,n){t.Z=n.p+"assets/images/llc-isolation-ee2864c933cc19aaca13902992d83bca.svg"}}]);