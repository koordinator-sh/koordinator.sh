"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[4560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={slug:"release-v1.5.0",title:"Koordinator v1.5: continuous optimization, join CNCF Sandbox",authors:["saintube","ZiMengSheng"],tags:["release"]},i=void 0,l={permalink:"/blog/release-v1.5.0",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/blog/2024-06-18-release/index.md",source:"@site/blog/2024-06-18-release/index.md",title:"Koordinator v1.5: continuous optimization, join CNCF Sandbox",description:"Background",date:"2024-06-18T00:00:00.000Z",formattedDate:"June 18, 2024",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:11.34,hasTruncateMarker:!1,authors:[{name:"Rougang Han",title:"Koordinator member",url:"https://github.com/saintube",imageURL:"https://github.com/saintube.png",key:"saintube"},{name:"Jianyu Wang",title:"Koordinator member",url:"https://github.com/ZiMengSheng",imageURL:"https://github.com/ZiMengSheng.png",key:"ZiMengSheng"}],frontMatter:{slug:"release-v1.5.0",title:"Koordinator v1.5: continuous optimization, join CNCF Sandbox",authors:["saintube","ZiMengSheng"],tags:["release"]},nextItem:{title:"Koordinator v1.4: more types of computing workloads and more flexible resource management mechanisms",permalink:"/blog/release-v1.4.0"}},s={authorsImageUrls:[void 0,void 0]},d=[{value:"Background",id:"background",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Pod-level NUMA Policy",id:"pod-level-numa-policy",level:3},{value:"Terway Net QoS",id:"terway-net-qos",level:3},{value:"Core Scheduling",id:"core-scheduling",level:3},{value:"Runtime Isolation of Physical Core",id:"runtime-isolation-of-physical-core",level:4},{value:"Next-Gen CPU QoS Policy",id:"next-gen-cpu-qos-policy",level:4},{value:"Other Changes",id:"other-changes",level:3},{value:"Contributors",id:"contributors",level:2},{value:"Future Plan",id:"future-plan",level:2},{value:"Acknowledgement",id:"acknowledgement",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://koordinator.sh/"},(0,a.kt)("em",{parentName:"a"},"Koordinator"))," is an open source project, born from the accumulated experience of the container scheduling industry in Alibaba for more than two years. It has been iterating continuously to provide comprehensive solutions for workload consolidation, co-located resource scheduling, mixed resource isolation and mixed performance tuning.\nIt aims to help users optimize container performance and improve the efficiency of cluster resource usage and management and optimization of latency-sensitive workloads and batch jobs."),(0,a.kt)("p",null,"Today, Koordinator v1.5.0 is released. It is the 13th major release of Koordinator since its officially open-sourced in April 2022. The Koordinator community is grateful to involve all the excellent engineers from Alibaba, Ant Technology Group, Intel, XiaoHongShu, Xiaomi, iQiyi, 360, YouZan, etc., who have contributed great ideas, code, and various scenarios.\nIn v1.5.0, Koordinator brings a lot of feature improvements, including Pod-level NUMA alignment strategy, network QoS, Core Scheduling, etc."),(0,a.kt)("p",null,"Besides, Koordinator has been accepted by the CNCF TOC members as a Sandbox project. CNCF (Cloud Native Computing Foundation) is an independent, non-profit organization that supports and promotes cloud native software like Kubernetes, Prometheus, and etc."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"koordinator-aboard-cncf-sandbox-img",src:n(556).Z,width:"1848",height:"492"}),"\nVote address: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cncf/sandbox/issues/51"},"https://github.com/cncf/sandbox/issues/51"))),(0,a.kt)("h2",{id:"key-features"},"Key Features"),(0,a.kt)("h3",{id:"pod-level-numa-policy"},"Pod-level NUMA Policy"),(0,a.kt)("p",null,"In the past version of v1.4.0, Koordinator supports users to set different NUMA alignment policies for different nodes in the cluster.\nHowever, this means that users need to pre-split the nodes into different node pools with different NUMA alignment policies, which cause additional overhead of the node operations."),(0,a.kt)("p",null,"In v1.5.0, Koordinator introduces Pod-level NUMA alignment policies to solve this problem. For example, we can set ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleNUMANode")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-1"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-1\n  annotations:\n    scheduling.koordinator.sh/numa-topology-spec: |-\n      {\n        \"numaTopologyPolicy\": \"SingleNUMANode\",\n      }\nspec:\n  containers:\n    - name: container-1\n      resources:\n        requests:\n          cpu: '1'\n        limits:\n          cpu: '1'\n")),(0,a.kt)("p",null,"After introducing Pod-level NUMA policies, it is possible that there are multiple NUMA policies on the same node.\nFor example, ",(0,a.kt)("inlineCode",{parentName:"p"},"node-1")," has two NUMA nodes, ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-1")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleNUMANode")," policy on ",(0,a.kt)("inlineCode",{parentName:"p"},"numa-0"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-2")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Restricted")," policy on ",(0,a.kt)("inlineCode",{parentName:"p"},"numa-0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"numa-1"),"."),(0,a.kt)("p",null,"Since setting the resource requirements for the Pods can only limit the maximum resources they can use on the machines, it cannot limit the resources they can use on a NUMA node.\nSo ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-2")," may use more resources than the resources allocated on ",(0,a.kt)("inlineCode",{parentName:"p"},"numa-0"),". This leads to resource contention between ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-1")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"numa-0"),"."),(0,a.kt)("p",null,"To solve this problem, Koordinator supports configuring the exclusive policy for Pods with ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleNUMANode")," policy.\nFor example, we can configure ",(0,a.kt)("inlineCode",{parentName:"p"},"pod-1")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleNUMANode")," policy and not co-exist with other Pods on the same machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-1\n  annotations:\n    scheduling.koordinator.sh/numa-topology-spec: |-\n      {\n        "numaTopologyPolicy": "SingleNUMANode",\n        "singleNUMANodeExclusive": "Required", # Required or Preferred\n      }\nspec:\n  containers:\n    - name: container-1\n      resources:\n        requests:\n          cpu: \'1\'\n        limits:\n          cpu: \'1\'\n')),(0,a.kt)("p",null,"Moreover, the introduction of Pod-level NUMA policies does not mean that the Node-level NUMA policies will be deprecated. Instead, they are compatible.\nIf the Pod and Node-level NUMA policies are different, the Pod will not be scheduled to the node; if the Node-level NUMA policy is ",(0,a.kt)("inlineCode",{parentName:"p"},'""'),", it means that the node can place any Pod; if the Pod-level NUMA policy is ",(0,a.kt)("inlineCode",{parentName:"p"},'""'),", it means that the Pod can be scheduled to any node."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"SingleNUMANode node"),(0,a.kt)("th",{parentName:"tr",align:null},"Restricted node"),(0,a.kt)("th",{parentName:"tr",align:null},"BestEffort node"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SingleNUMANode pod"),(0,a.kt)("td",{parentName:"tr",align:null},"[\u2713]"),(0,a.kt)("td",{parentName:"tr",align:null},"[x]"),(0,a.kt)("td",{parentName:"tr",align:null},"[x]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Restricted pod"),(0,a.kt)("td",{parentName:"tr",align:null},"[x]"),(0,a.kt)("td",{parentName:"tr",align:null},"[\u2713]"),(0,a.kt)("td",{parentName:"tr",align:null},"[x]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BestEffort pod"),(0,a.kt)("td",{parentName:"tr",align:null},"[x]"),(0,a.kt)("td",{parentName:"tr",align:null},"[x]"),(0,a.kt)("td",{parentName:"tr",align:null},"[\u2713]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'""'),(0,a.kt)("td",{parentName:"tr",align:null},"[\u2713]"),(0,a.kt)("td",{parentName:"tr",align:null},"[\u2713]"),(0,a.kt)("td",{parentName:"tr",align:null},"[\u2713]")))),(0,a.kt)("p",null,"For more information about Pod-level NUMA policies, please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/proposals/scheduling/20240131-pod-level-numa-policy.md"},"Proposal: Pod-level NUMA Policy"),"."),(0,a.kt)("h3",{id:"terway-net-qos"},"Terway Net QoS"),(0,a.kt)("p",null,"In v1.5.0, Koordinator cooperates with the ",(0,a.kt)("em",{parentName:"p"},"Terway")," community to build the Network QoS."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AliyunContainerService/terway-qos"},"Terway QoS")," is born to solve the network bandwidth contention problem in workload consolidation and co-location scenarios.\nIt supports limiting the bandwidth of Pods or QoS classes, which is different from other solutions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It supports limiting the bandwidth according to the business type, which is suitable for workload consolidation scenarios where multiple applications can be co-located at the same node."),(0,a.kt)("li",{parentName:"ol"},"It supports dynamic adjustment of Pod bandwidth limits."),(0,a.kt)("li",{parentName:"ol"},"It can limit the whole machine bandwidth, supporting multiple network cards, supporting to limit the container network and HostNetwork Pods.")),(0,a.kt)("p",null,"Terway QoS has 3 types of network bandwidth priority, and the corresponding Koordinator default QoS mapping is as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Koordinator QoS"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Kubernetes QoS"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Terway Net QoS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SYSTEM"),(0,a.kt)("td",{parentName:"tr",align:"center"},"--"),(0,a.kt)("td",{parentName:"tr",align:"center"},"L0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LSE"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Guaranteed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"L1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LSR"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Guaranteed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"L1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Guaranteed/Burstable"),(0,a.kt)("td",{parentName:"tr",align:"center"},"L1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"BE"),(0,a.kt)("td",{parentName:"tr",align:"center"},"BestEffort"),(0,a.kt)("td",{parentName:"tr",align:"center"},"L2")))),(0,a.kt)("p",null,"In the co-location scenario, we want to ensure the maximum bandwidth of online applications to avoid contention.\nWhen the node is idle, offline jobs can also fully utilize all bandwidth resources."),(0,a.kt)("p",null,"Therefore, users can define business traffic as 3 priorities, from high to low, respectively as L0, L1, and L2.\nWe define the contention scenario as: when the sum of the bandwidth of L0, L1, and L2 exceeds the whole machine bandwidth."),(0,a.kt)("p",null,'L0\'s maximum bandwidth will be dynamically adjusted according to the real-time bandwidth of L1 and L2.\nIt can be high to the total machine bandwidth and low to "total machine bandwidth - L1 minimum bandwidth - L2 minimum bandwidth".\nIn any case, the bandwidth of L1 and L2 will not exceed their upper limits.\nIn the contention scenario, the bandwidth of L1 and L2 will not be lower than their lower limits, and the bandwidth will be limited in the order of L2, L1, and L0.\nSince Terway QoS only has three priorities, only the total machine bandwidth limit can be set for LS and BE. The remaining of L0 can be calculated according to the upper bandwidth limit of the whole machine.'),(0,a.kt)("p",null,"Here is an example of the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# unit: bps\nresource-qos-config: |\n  {\n    "clusterStrategy": {\n      "policies": {"netQOSPolicy":"terway-qos"},\n      "lsClass": {\n        "networkQOS": {\n          "enable": true,\n          "ingressRequest": "50M",\n          "ingressLimit": "100M",\n          "egressRequest": "50M",\n          "egressLimit": "100M"\n        }\n      },\n      "beClass": {\n        "networkQOS": {\n          "enable": true,\n          "ingressRequest": "10M",\n          "ingressLimit": "200M",\n          "egressRequest": "10M",\n          "egressLimit": "200M"\n        }\n      }\n    }\n  }\nsystem-config: |-\n  {\n    "clusterStrategy": {\n      "totalNetworkBandwidth": "600M"\n    }\n  }\n')),(0,a.kt)("p",null,"Besides, Koordinator supports Pod-level bandwidth limits through the following annotations:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"koordinator.sh/networkQOS"),(0,a.kt)("td",{parentName:"tr",align:null},'\'{"IngressLimit": "10M", "EgressLimit": "20M"}\'')))),(0,a.kt)("p",null,"For more information about the Network QoS, please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/best-practices/network-qos-with-terwayqos"},"Network Bandwidth Limitation Using Terway QoS")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AliyunContainerService/terway"},"Terway Community"),"."),(0,a.kt)("h3",{id:"core-scheduling"},"Core Scheduling"),(0,a.kt)("p",null,"In v1.5.0, Koordinator provides container-level Core Scheduling ability. It reduces the risk of Side Channel Attacks (SCA) in multi-tenant scenarios, and can be used as a CPU QoS enhancement for the co-location scenarios."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.kernel.org/admin-guide/hw-vuln/core-scheduling.html"},"Linux Core Scheduling")," supports defining a task group in user space that can share physical cores.\nTasks belonging to the same group are assigned the same cookie as an identifier. And only tasks of one cookie will be run on a physical core (SMT dimension) at the same time.\nBy applying this mechanism to security or performance scenarios, we can achieve the following things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Isolate physical cores for tasks of different tenants."),(0,a.kt)("li",{parentName:"ol"},"Avoid the contention between offline jobs and online services.")),(0,a.kt)("p",null,"Koordinator enables the kernel mechanism Core Scheduling to achieve container-level group isolation policies, and finally forms the following two capabilities:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Runtime isolation of physical core: Pods can be grouped by the tenants, so pods in different groups cannot share physical cores at the same time for multi-tenant isolation."),(0,a.kt)("li",{parentName:"ol"},"Next-gen CPU QoS policy: It can achieve a new CPU QoS policy which ensures both the CPU performance and the security.")),(0,a.kt)("h4",{id:"runtime-isolation-of-physical-core"},"Runtime Isolation of Physical Core"),(0,a.kt)("p",null,"Koordinator provides Pod Label protocol to identify the Core Scheduling group of Pods."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"koordinator.sh/coreSchedulingGroup"),(0,a.kt)("td",{parentName:"tr",align:null},'"xxx-group"')))),(0,a.kt)("p",null,"Different groups of Pods are running exclusively at the physical core level, which can avoid some side channel attacks on the physical cores, L1 cache or L2 cache for multi-tenant scenarios."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"container-core-scheduling-img",src:n(5147).Z,width:"771",height:"501"})),(0,a.kt)("p",null,"Different from the cpuset scheduling, the scope of the running cpus of Pods is not fixed.\nThe physical cores can run Pods of different groups at different moments. Thus, the physical cores can be shared by time-division multiplexing."),(0,a.kt)("h4",{id:"next-gen-cpu-qos-policy"},"Next-Gen CPU QoS Policy"),(0,a.kt)("p",null,"Koordinator build a new CPU QoS policy based on the Core Scheduling and CGroup Idle mechanism provided by the ",(0,a.kt)("a",{parentName:"p",href:"https://openanolis.cn/anolisos"},"Anolis OS")," kernel."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BE containers enable the CGroup Idle feature to lower scheduling weights and priorities."),(0,a.kt)("li",{parentName:"ul"},"LSR/LS containers enable Core Scheduling feature to expel BE tasks of the same group on the physical cores.")),(0,a.kt)("p",null,"Users can enable the Core Scheduling policy by specifying ",(0,a.kt)("inlineCode",{parentName:"p"},'cpuPolicy="coreSched"')," in the slo-controller-config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Example of the slo-controller-config ConfigMap.\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  resource-qos-config: |\n    {\n      "clusterStrategy": {\n        "policies": {\n          "cpuPolicy": "coreSched"\n        },\n        "lsClass": {\n          "cpuQOS": {\n            "enable": true,\n            "coreExpeller": true,\n            "schedIdle": 0\n          }\n        },\n        "beClass": {\n          "cpuQOS": {\n            "enable": true,\n            "coreExpeller": false,\n            "schedIdle": 1\n          }\n        }\n      }\n    }\n')),(0,a.kt)("p",null,"For more information about the Core Scheduling, please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-manuals/cpu-qos"},"CPU QoS"),"."),(0,a.kt)("h3",{id:"other-changes"},"Other Changes"),(0,a.kt)("p",null,"Koordinator v1.5.0 also includes the following enhancements and reliability improvements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enhancements: Reservation Restricted mode supports controlling which resources strictly follow the Restricted semantic through Annotation. NUMA align policy adapts upstream; Coscheduling implements the fair scheduling queuing to ensure that Pods in the same GangGroup are dequeued together, and different Gangs and bare Pods are sorted by last scheduling time. NRI mode supports reconnection mechanism. Koordlet improves the monitoring metrics and adds performance metrics. BlkioReconcile updates the configurations."),(0,a.kt)("li",{parentName:"ol"},"BugFixes: Fix the memory leak of koordlet CPUSuppress feature. Fix the panic problem of runtimeproxy. Revise the calculation logic of CPICollector, BECPUEvict, and CPUBurst modules."),(0,a.kt)("li",{parentName:"ol"},"Environment compatibility: All components are upgraded to K8S 1.28. koordlet supports to run on a non-CUDA images. Koordlet adapts the kubelet 1.28 configuration and optimizes the compatibility logic for the cpu manager. Koordlet adapts cri-o runtime."),(0,a.kt)("li",{parentName:"ol"},"Refactoring and improvement: Koordlet improves the resctrl updating logic. Koordlet improves the eviction logic. Revise the GPU resources and card model reporting. Revise the Batch resource calculation logic."),(0,a.kt)("li",{parentName:"ol"},"CI/CD: Fix some flaky tests.")),(0,a.kt)("p",null,"For more information about the v1.5.0 changes, please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/releases/tag/v1.5.0"},"v1.5.0 Release"),"."),(0,a.kt)("h2",{id:"contributors"},"Contributors"),(0,a.kt)("p",null,"Koordinator is an open source community. In v1.5.0, there are 10 new developers who contributed to Koordinator main repo. They are\n@georgexiang, @googs1025, @l1b0k, @ls-2018, @PeterChg, @sjtufl, @testwill, @yangfeiyu20102011, @zhifanggao, @zwForrest."),(0,a.kt)("p",null,"Koordinator community now has many enterprise contributors, some of which became Maintainers and Members.\nDuring the v1.5.0 release, the new Maintainers are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@songzh215"),(0,a.kt)("li",{parentName:"ul"},"@j4ckstraw"),(0,a.kt)("li",{parentName:"ul"},"@lucming"),(0,a.kt)("li",{parentName:"ul"},"@kangclzjc")),(0,a.kt)("p",null,"Thanks for the elders for their consistent efforts and the newbies for their active contributions.\nWe welcome more contributors to join the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator"},(0,a.kt)("em",{parentName:"a"},"Koordinator community")),"."),(0,a.kt)("h2",{id:"future-plan"},"Future Plan"),(0,a.kt)("p",null,"In next versions, Koordinator plans the following works:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scheduling performance optimization: The scheduling performance is the key indicator of whether the scheduler can handle large-scale clusters. In the next version, Koordinator will provide a setup guide of the basic benchmark environment and common benchmark scenarios, and start to improve the scheduling performance of Koord-Scheduler."),(0,a.kt)("li",{parentName:"ul"},"Device union allocation: In the LLC distributed training of AI scenarios, GPUs of different machines usually need to communicate with each other through high-performance network card, and GPU and high-performance network card are allocated near each other for better performance. Koordinator is working on the support of union allocation for multiple heterogeneous resources. The union allocation has been supported on the protocol and the scheduling logic. The single-node logic for reporting network card resources is being explored."),(0,a.kt)("li",{parentName:"ul"},"Job-level quota preemption: In the large-scale cluster scenario, some quotas can be busy, while other quotas can be idle. In the ElasticQuota plugin, we have supported borrowing resources from the idle quotas. But the scheduler has not considered the Job information when the borrowed quotas expect to take back resources. For the Pods belonging to the same Job, the scheduler should do preempt in the Job-level to ensure the job scheduling and improve the efficiency."),(0,a.kt)("li",{parentName:"ul"},"Load-aware scheduling for in-flight pods: Currently, the load-aware scheduling filters and scores nodes based on the resource utilization. It can improve the distribution of utilization to nodes, reduce the risks of scheduling pods to overload nodes. However, the accuracy of the utilization can be affected by the in-flight pods since the node metrics reporting has a lag. In the coming version, the load-aware scheduling will take consideration of the in-flight pods, guarantee pods not to schedule to overload nodes, and further improve the distribution of utilization to nodes."),(0,a.kt)("li",{parentName:"ul"},"Fine-grained isolation strategy for last-level cache and memory bandwidth: Contention of the last-level cache and memory bandwidth between containers can cause performance degradation of the memory access. By isolating the last-level cache and memory bandwidth in the QoS-level without exceeding the capacity of the RDT groups, koordlet provides the Resctrl QoS to reduce the contention between the offline workloads with the online services. In the next version, koordlet will enhance the isolation strategy based on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/proposals/20230608-nri-mode-resource-management.md"},"NRI (Node Resource Interface) mode")," introduced in v1.3. It will provide the pod-level isolation capability, which greatly improves the feature's flexibility and timeliness.")),(0,a.kt)("h2",{id:"acknowledgement"},"Acknowledgement"),(0,a.kt)("p",null,"Since the project was open-sourced, Koordinator has been released for more than 19 versions, getting 80+ contributors involved to contribute.\nThe community is growing and has been continuously improving. We thank all the community members for their active participation and valuable feedback.\nWe also want to thank the CNCF organization and related community members for supporting the project."),(0,a.kt)("p",null,"Welcome more developers and end users to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator?tab=readme-ov-file#community"},(0,a.kt)("strong",{parentName:"a"},"join us")),"! It is your participation and feedback that make Koordinator keep improving.\nWhether you are a beginner or an expert in the Cloud Native communities, we look forward to hearing your voice!"))}u.isMDXComponent=!0},5147:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/container-core-scheduling-8058c0b2c1e3cb1630406d4eddeae658.svg"},556:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/koordinator-aboard-cncf-sandbox-20aa4d22ea2730f897dfe0c9c7286dae.jpg"}}]);