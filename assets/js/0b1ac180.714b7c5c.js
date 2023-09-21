"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2872],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>h});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),c=function(e){var o=r.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},d=function(e){var o=c(e.components);return r.createElement(s.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(h,i(i({ref:o},d),{},{components:t})):r.createElement(h,i({ref:o},d))}));function h(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1215:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const a={},i="Overview",l={unversionedId:"architecture/overview",id:"architecture/overview",title:"Overview",description:"This topic describes the architecture, components, and core concepts associated with Koordinator deployments to Kubernetes. Koordinator consists of two control planes (Koordinator Scheduler/Koordinator Manager) and one DaemonSet component (Koordlet).",source:"@site/docs/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/docs/next/architecture/overview",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/overview.md",tags:[],version:"current",lastUpdatedBy:"Fansong Zeng",lastUpdatedAt:1685949930,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/installation"},next:{title:"Resource Model",permalink:"/docs/next/architecture/resource-model"}},s={},c=[{value:"Koord-Scheduler",id:"koord-scheduler",level:2},{value:"Koord-Descheduler",id:"koord-descheduler",level:2},{value:"Koord-Manager",id:"koord-manager",level:2},{value:"Koordlet",id:"koordlet",level:2},{value:"Koord-RuntimeProxy",id:"koord-runtimeproxy",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],d={toc:c},u="wrapper";function p(e){let{components:o,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This topic describes the architecture, components, and core concepts associated with Koordinator deployments to Kubernetes. Koordinator consists of two control planes (",(0,n.kt)("a",{parentName:"p",href:"#koordinator-scheduler"},"Koordinator Scheduler"),"/",(0,n.kt)("a",{parentName:"p",href:"#koordinator-manager"},"Koordinator Manager"),") and one DaemonSet component (",(0,n.kt)("a",{parentName:"p",href:"#koordlet"},"Koordlet"),").\nKoordinator adds co-location capabilities on top of the original kubernetes, and maintains the compatibility of the original kubernetes workloads."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture",src:t(5109).Z,width:"2192",height:"1482"})),(0,n.kt)("h2",{id:"koord-scheduler"},"Koord-Scheduler"),(0,n.kt)("p",null,"The Koordinator Scheduler is deployed as a ",(0,n.kt)("inlineCode",{parentName:"p"},"Deployment"),", which is used to enhance the resource scheduling capabilities of kubernetes in QoS-aware, differentiated SLO management, and job scheduling. Specifically including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"QoS-aware scheduling, including load-aware scheduling to make node load more balanced, resource overcommitment to run more computing workloads with low priority. "),(0,n.kt)("li",{parentName:"ul"},"Differentiated SLO management, including fine-grained CPU orchestration, different QoS policy(cfs/LLC/memory bw/net bw/blkio) for diffenent workloads. "),(0,n.kt)("li",{parentName:"ul"},"Job scheduling, including elastic quota scheduling, gang scheduling, heterogeneous resource scheduling, to support big-data and AI workloads.")),(0,n.kt)("p",null,"In order to better support diffenent workloads, the scheduler also provides a series of general capability enhancements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reservation, an ability for reserving node resources for specific pods or workloads, which is widely used in descheduling, resource preemption and fragmentation optimization."),(0,n.kt)("li",{parentName:"ul"},"Node reservation, an ability for reserving node resources for workloads out of kubernetes, which is typically used for non-containerized workloads.")),(0,n.kt)("h2",{id:"koord-descheduler"},"Koord-Descheduler"),(0,n.kt)("p",null,"The Koordinator Descheduler is deployed as a ",(0,n.kt)("inlineCode",{parentName:"p"},"Deployment"),", which is an enhanced version of the community descheduler:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Framework, a descheduling framework with better scalability, determinism and security, for more ",(0,n.kt)("a",{parentName:"li",href:"../designs/descheduler-framework"},"details"),"."),(0,n.kt)("li",{parentName:"ul"},"Load-aware descheduling, a descheduling plugins to support node load rebalancing, which supports user-defined CPU load level of nodes to avoids hotspot nodes.")),(0,n.kt)("h2",{id:"koord-manager"},"Koord-Manager"),(0,n.kt)("p",null,"The Koordinator Manager is deployed as a ",(0,n.kt)("inlineCode",{parentName:"p"},"Deployment"),", usually consists of two instances, one leader and one backup. The Koordinator Manager consists of several controllers and webhooks, which are used to orchestrate co-located workloads and support resource overcommitment scheduling and SLO management."),(0,n.kt)("p",null,"Currently, three components are provided:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Colocation Profile, which used to support colocation without requiring modification of workloads. Users only need to do a small amount of configuration in the cluster, and the original workload can be run in a colocation mode, learn more about ",(0,n.kt)("a",{parentName:"li",href:"/docs/next/user-manuals/colocation-profile"},"Colocation Profile"),"."),(0,n.kt)("li",{parentName:"ul"},"SLO Controller, which is used for resource overcommitment model management, and dynamically adjusts the overcommitment ratio of the cluster according to the running status of the node co-location. The core responsibility of this controller is to manage co-located SLOs, such as intelligently identifying abnormal nodes in the cluster and lowering their weights, and dynamically adjusting the water level and suppression strategy of co-located, so as to ensure the stability and efficiency of Pods in the cluster."),(0,n.kt)("li",{parentName:"ul"},"Recommender(coming soon), it uses histograms to count and predict the resource usage details of the workloads, which are used to estimate the peak resource requirements of the workloads, thereby supporting better hotspot dispersion and improving the efficiency of co-location. In addition, resource profiling will also be used to simplify the complexity of user resource specification configuration, such as to support automatic specification hosting (VPA).")),(0,n.kt)("h2",{id:"koordlet"},"Koordlet"),(0,n.kt)("p",null,"The Koordlet is deployed as a ",(0,n.kt)("inlineCode",{parentName:"p"},"DaemonSet")," in kubernetes cluster, which is used to support colocation resource overcommitment, interference detection, QoS guarantee, etc."),(0,n.kt)("p",null,"Inside Koordlet, it mainly includes the following modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Resource Profiling, which estimates the actual usage of Pod resources, and reclaims allocated but unused resources for overcommit low-priority pods according to the reclaimed resource."),(0,n.kt)("li",{parentName:"ul"},"Resource Isolation, set resource isolation parameters for different types of Pods to avoid low-priority pods affecting the stability and performance of high-priority pods."),(0,n.kt)("li",{parentName:"ul"},"Interference detection, for running Pods, dynamically detect resource contention, including CPU scheduling, memory allocation delay, network, disk IO delay, etc."),(0,n.kt)("li",{parentName:"ul"},"QoS Manager, which dynamically adjusts the water level of node colocation based on resource profiling, interference detection results and SLO configuration, suppressing Pods that affect service quality."),(0,n.kt)("li",{parentName:"ul"},"Resource Tuning, container resource tuning for co-located scenarios, optimize the container's CPU Throttle, OOM, etc., to improve the quality of service operation.")),(0,n.kt)("h2",{id:"koord-runtimeproxy"},"Koord-RuntimeProxy"),(0,n.kt)("p",null,"The Koord-RuntimeProxy is deployed as a ",(0,n.kt)("inlineCode",{parentName:"p"},"systemd service")," in kubernetes node, which is designed to intercept CRI request, and apply some resource management policies, such as setting different cgroup parameters by pod priorities under hybrid workload orchestration scenario, applying new isolation policies for latest Linux kernel, CPU architecture, and etc."),(0,n.kt)("h2",{id:"whats-next"},"What's Next"),(0,n.kt)("p",null,"Here are some recommended next steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,n.kt)("a",{parentName:"li",href:"./resource-model"},"Resource Model"),"."),(0,n.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,n.kt)("a",{parentName:"li",href:"./priority"},"Priority"),"."),(0,n.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,n.kt)("a",{parentName:"li",href:"./qos"},"QoS"),".")))}p.isMDXComponent=!0},5109:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/architecture-2a3a51f8633a297967b41258e30a353f.png"}}]);