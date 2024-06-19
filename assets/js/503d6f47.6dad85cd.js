"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[3826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="QoS",l={unversionedId:"architecture/qos",id:"version-v1.5/architecture/qos",title:"QoS",description:"QoS is used to express the running quality of the Pod on the node, such as the way to obtain resources, the proportion of resources obtained, and the QoS guarantee policy.",source:"@site/versioned_docs/version-v1.5/architecture/qos.md",sourceDirName:"architecture",slug:"/architecture/qos",permalink:"/docs/architecture/qos",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/qos.md",tags:[],version:"v1.5",lastUpdatedBy:"Frame",lastUpdatedAt:1718775971,formattedLastUpdatedAt:"Jun 19, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Priority",permalink:"/docs/architecture/priority"},next:{title:"GangScheduling",permalink:"/docs/user-manuals/gang-scheduling"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"QoS CPU Orchestration",id:"qos-cpu-orchestration",level:2},{value:"Koordinator QoS vs. Kubernetes QoS",id:"koordinator-qos-vs-kubernetes-qos",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qos"},"QoS"),(0,a.kt)("p",null,"QoS is used to express the running quality of the Pod on the node, such as the way to obtain resources, the proportion of resources obtained, and the QoS guarantee policy."),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"There are five types of QoS supported by the Koordinator scheduling system:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"QoS"),(0,a.kt)("th",{parentName:"tr",align:null},"feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SYSTEM"),(0,a.kt)("td",{parentName:"tr",align:null},"system process, resource constrained"),(0,a.kt)("td",{parentName:"tr",align:null},"For system services such as DaemonSets, the latency needs to be guaranteed but it needs to limit the resource usage limit of all containers running on the node to ensure that system processes do not occupy too many resources")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LSE(Latency Sensitive Exclusive)"),(0,a.kt)("td",{parentName:"tr",align:null},"reserve resources and organizing co-located pods to share resources"),(0,a.kt)("td",{parentName:"tr",align:null},"Rarely used, common in middleware-type applications, generally in independent resource pools")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LSR(Latency Sensitive Reserved)"),(0,a.kt)("td",{parentName:"tr",align:null},"reserve resources for better certainty"),(0,a.kt)("td",{parentName:"tr",align:null},"Similar to Guaranteed by the community, CPU cores are bound")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LS(Latency Sensitive)"),(0,a.kt)("td",{parentName:"tr",align:null},"share resources for better resilience to burst traffic"),(0,a.kt)("td",{parentName:"tr",align:null},"Typical QoS level for microservice workloads to achieve better resource elasticity and more flexible resource adjustment capabilities")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BE(Best Effort)"),(0,a.kt)("td",{parentName:"tr",align:null},"share resource exclude LSE, the quality of resource operation is limited, or even killed in extreme cases"),(0,a.kt)("td",{parentName:"tr",align:null},"Typical QoS level for batch jobs, stable computing throughput within a certain period, low-cost resources")))),(0,a.kt)("h2",{id:"qos-cpu-orchestration"},"QoS CPU Orchestration"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:r(9845).Z,width:"1399",height:"445"})),(0,a.kt)("h2",{id:"koordinator-qos-vs-kubernetes-qos"},"Koordinator QoS vs. Kubernetes QoS"),(0,a.kt)("p",null,"As seen in the ",(0,a.kt)("a",{parentName:"p",href:"#definition"},"Definition")," section, Koordinator's QoS is more complicated than Kubernetes QoS, because in colocation scenarios, we need to fine-tune the QoS for latency-sensitive workloads to meet the needs of co-located performance."),(0,a.kt)("p",null,"There is a correspondence between Koordinator and Kubernetes QoS:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Koordinator QoS"),(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes QoS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SYSTEM"),(0,a.kt)("td",{parentName:"tr",align:null},"---")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LSE"),(0,a.kt)("td",{parentName:"tr",align:null},"Guaranteed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LSR"),(0,a.kt)("td",{parentName:"tr",align:null},"Guaranteed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LS"),(0,a.kt)("td",{parentName:"tr",align:null},"Guaranteed/Burstable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BE"),(0,a.kt)("td",{parentName:"tr",align:null},"BestEffort")))),(0,a.kt)("p",null,"Koordlet triggers corresponding resource isolation and QoS guarantee according to Pod's Priority and QoS definition."))}p.isMDXComponent=!0},9845:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/qos-cpu-orchestration-460f5568c67508e791d2f0b8798ac826.png"}}]);