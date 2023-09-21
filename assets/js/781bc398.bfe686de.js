"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[5434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="Performance Collector",i={unversionedId:"user-manuals/performance-collector",id:"user-manuals/performance-collector",title:"Performance Collector",description:"Motivation",source:"@site/docs/user-manuals/performance-collector.md",sourceDirName:"user-manuals",slug:"/user-manuals/performance-collector",permalink:"/docs/next/user-manuals/performance-collector",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/performance-collector.md",tags:[],version:"current",lastUpdatedBy:"songtao98",lastUpdatedAt:1672820177,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{},sidebar:"docs",previous:{title:"QoS Management for Out-of-Band Applications on Host",permalink:"/docs/next/user-manuals/host-application-qos"},next:{title:"Resource Reservation",permalink:"/docs/next/user-manuals/resource-reservation"}},c={},s=[{value:"Motivation",id:"motivation",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Feature-gates",id:"feature-gates",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Overhead",id:"overhead",level:2},{value:"Testing Context",id:"testing-context",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Case 1\uff1aOverhead comparison of Koordlet container before and after enabling Performance Collector",id:"case-1overhead-comparison-of-koordlet-container-before-and-after-enabling-performance-collector",level:4},{value:"Case 2\uff1aOverhead comparison of Node before and after enabling Performance Collector",id:"case-2overhead-comparison-of-node-before-and-after-enabling-performance-collector",level:4},{value:"Example",id:"example",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performance-collector"},"Performance Collector"),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,'In real production environment, the runtime state of a node is a "chaotic system", and application interference caused by resource contention cannot be absolutely avoided. Koordinator is building interference detection and optimization capabilities. By extracting metrics of application running status, real-time analysis and detection are carried out, and more targeted strategies are adopted for target applications and interference sources after interference is discovered.\nKoordinator implements a series of ',(0,a.kt)("inlineCode",{parentName:"p"},"Performance Collectors")," to collect low-level metrics highly correlated with application running status on one node, and expose them through ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus")," to provide support for interference detection capabilities and cluster application scheduling."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Kubernetes >= 1.18")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Koordinator >= 1.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To use CPI Collector, make sure your node machine supports Cycles and Instructions Kernel PMU(Performance Monitoring Unit) events. "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Use belowing command to check. ")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ perf list\nList of pre-defined events (to be used in -e):\n\n  branch-instructions OR branches                    [Hardware event]\n  branch-misses                                      [Hardware event]\n  bus-cycles                                         [Hardware event]\n  ...\n\n  cpu-cycles OR cpu/cpu-cycles/                      [Kernel PMU event]\n  ...\n  instructions OR cpu/instructions/                  [Kernel PMU event]\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To use PSI Collector, your Anolis OS needs to enable PSI feature. Please refer to this ",(0,a.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/elastic-compute-service/latest/enable-the-psi-feature-for-cgroup-v1"},"document"),". "))),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://koordinator.sh/zh-Hans/docs/installation"},"Installation"),"."),(0,a.kt)("h3",{id:"feature-gates"},"Feature-gates"),(0,a.kt)("p",null,"Performance Collector is managed by several feature-gates. Koordinator currently supports following collectors: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CPICollector"),": manages CPI collector. CPI: Cycles Per Instruction. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PSICollector"),"\uff1amanages PSI collector. PSI: Pressure Stall Information. ")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Performance Collectors are ",(0,a.kt)("em",{parentName:"p"},"Disabled")," currently by default. To enable them, just edit Koordlet's ",(0,a.kt)("inlineCode",{parentName:"p"},"feature-gates")," args. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit ds koordlet -n koordinator-system\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"spec:\n  ...\n    spec:\n      containers:\n      - args:\n        ...\n        # modify here\n        # - -feature-gates=BECPUEvict=true,BEMemoryEvict=true,CgroupReconcile=true,Accelerators=true\n        - -feature-gates=BECPUEvict=true,BEMemoryEvict=true,CgroupReconcile=true,Accelerators=true,CPICollector=true,PSICollector=true\n        ...\n")),(0,a.kt)("h2",{id:"overhead"},"Overhead"),(0,a.kt)("p",null,"Koordinator Performance Collector is an important tool for interference detection, and one of its core goals is to collect relevant indicators at low cost. The following shows the system overhead introduced by Koordinator before and after enabling Performance Collector. Users can refer to this test result to use the Performance Collector feature."),(0,a.kt)("h3",{id:"testing-context"},"Testing Context"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Alibaba Cloud Container Service for Kubernetes (ACK) Managed Kubernetes Cluster: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Kubernetes version\uff1a1.24.6-aliyun.1"),(0,a.kt)("li",{parentName:"ul"},"Container Runtime\uff1acontainerd 1.5.13"),(0,a.kt)("li",{parentName:"ul"},"Node Spec\uff1aecs.ebmg6.26xlarge\uff0c104 vCPU 384 GiB, OS: Alibaba Cloud Linux 2.1903"))),(0,a.kt)("li",{parentName:"ul"},"Node pressure\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test Pod image\uff1anginx:1.14.2"),(0,a.kt)("li",{parentName:"ul"},"Number of Pods on single Node\uff1a100 test Pod + 50 system Pod"),(0,a.kt)("li",{parentName:"ul"},"Number of Containers on single Node\uff1a150"),(0,a.kt)("li",{parentName:"ul"},"Node CPU usage: about 25%, use lookbusy-1.4 to generate on each CPU"))),(0,a.kt)("li",{parentName:"ul"},"Others\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"100 nginx Pods are managed by a Linux cronjob, which is deleted every five minutes. The Deployment controller rebuild these Pods in time."),(0,a.kt)("li",{parentName:"ul"},"CPI Collector runs in a window of 10 seconds every 60 seconds."),(0,a.kt)("li",{parentName:"ul"},"PSI Collector runs every 10 seconds. "),(0,a.kt)("li",{parentName:"ul"},"The test lasts for 1 hour before and after Performance Collector is enabled. ")))),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("h4",{id:"case-1overhead-comparison-of-koordlet-container-before-and-after-enabling-performance-collector"},"Case 1\uff1aOverhead comparison of Koordlet container before and after enabling Performance Collector"),(0,a.kt)("p",null,"Performance Collector runs on the Koordlet component of Koordinator, and the cost of the component is compared as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No significant increase in overall overhead: "),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Metrics"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Disable"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Enable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"RSS Memory usage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"341MiB"),(0,a.kt)("td",{parentName:"tr",align:"center"},"366MiB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CPU usage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.5 core"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.6 core")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Network I/O"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no significant change"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Possible cause of the overhead: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The new CPI data table of per Container dimension, and new PSI data table of both per Container and per Pod dimension. "),(0,a.kt)("li",{parentName:"ul"},"The consumption caused by the collector's goroutine per cgroup."),(0,a.kt)("li",{parentName:"ul"},"The consumption caused by Prometheus Gauge. ")))),(0,a.kt)("h4",{id:"case-2overhead-comparison-of-node-before-and-after-enabling-performance-collector"},"Case 2\uff1aOverhead comparison of Node before and after enabling Performance Collector"),(0,a.kt)("p",null,"Performance Collector uses the perf_event_open(2) system call, and its impact on the node is compared as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No significant increase in overall overhead: "),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Metrics"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Disable"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Enable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"System Mode CPU usage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.94%"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.96%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"User Mode CPU usage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"24.51%"),(0,a.kt)("td",{parentName:"tr",align:"center"},"25.19%"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Possible cause of the overhead: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Usage of perf_event_open(2)"),(0,a.kt)("li",{parentName:"ul"},"Enabling of PSI feature on OS")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To enable Performance Collector: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'helm install koordinator https://... --set featureGates="CPICollector=true,PSICollector=true"\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use belowing flags to config collectors' time window or collect intervals: "),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Flag"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-cpi-collector-interval-seconds"),(0,a.kt)("td",{parentName:"tr",align:"center"},"60"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Collect cpi interval by seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-collect-cpi-timewindow-seconds"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Collect cpi time window by seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-psi-collector-interval-seconds"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Collect psi interval by seconds"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We can see reported metric values at Prometheus port(9316 as default), the API path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/metrics"),",  e.g., CPI is shown as two records of ",(0,a.kt)("em",{parentName:"p"},"cycles")," and ",(0,a.kt)("em",{parentName:"p"},"instructions"),": "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://localhost:9316/metrics\n\n# HELP koordlet_container_cpi Container cpi collected by koordlet\n# TYPE koordlet_container_cpi gauge\nkoordlet_container_cpi{container_id="containerd://498de02ddd3ad7c901b3c80f96c57db5b3ed9a817dbfab9d16b18be7e7d2d047",container_name="koordlet",cpi_field="cycles",node="your-node-name",pod_name="koordlet-x8g2j",pod_namespace="koordinator-system",pod_uid="3440fb9c-423b-48e9-8850-06a6c50f633d"} 2.228107503e+09\nkoordlet_container_cpi{container_id="containerd://498de02ddd3ad7c901b3c80f96c57db5b3ed9a817dbfab9d16b18be7e7d2d047",container_name="koordlet",cpi_field="instructions",node="your-node-name",pod_name="koordlet-x8g2j",pod_namespace="koordinator-system",pod_uid="3440fb9c-423b-48e9-8850-06a6c50f633d"} 4.1456092e+09\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Notice that we also provide ServiceMonitor for Koordlet to evict those metrics: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    koord-app: koordlet\n  name: koordlet\n  namespace: koordinator-system\nspec:\n  clusterIP: None\n  ports:\n  - name: koordlet-service\n    port: 9316\n    targetPort: 9316\n  selector:\n    koord-app: koordlet\n---    \napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  labels:\n    koord-app: koordlet\n  name: koordlet\n  namespace: koordinator-system\nspec:\n  endpoints:\n  - interval: 30s\n    port: koordlet-service\n    scheme: http\n  jobLabel: koord-app\n  selector:\n    matchLabels:\n      koord-app: koordlet\n")),(0,a.kt)("p",{parentName:"li"},"You can find it in Promethues Targets: "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"koordlet-servicemonitor-prometheus",src:r(634).Z,width:"3276",height:"564"})))))}m.isMDXComponent=!0},634:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/koordlet-servicemonitor-prometheus-f9dd8c0071d3b2bad20437419eb8973c.png"}}]);