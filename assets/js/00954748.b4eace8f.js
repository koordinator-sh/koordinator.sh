"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[174],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2583:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="QoS Management for Out-of-Band Applications on Host",s={unversionedId:"user-manuals/host-application-qos",id:"version-v1.4/user-manuals/host-application-qos",title:"QoS Management for Out-of-Band Applications on Host",description:"Introduction",source:"@site/versioned_docs/version-v1.4/user-manuals/host-application-qos.md",sourceDirName:"user-manuals",slug:"/user-manuals/host-application-qos",permalink:"/docs/v1.4/user-manuals/host-application-qos",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/host-application-qos.md",tags:[],version:"v1.4",lastUpdatedBy:"wangjianyu",lastUpdatedAt:1705567859,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{},sidebar:"docs",previous:{title:"SLO Configuration",permalink:"/docs/v1.4/user-manuals/slo-config"},next:{title:"Performance Collector",permalink:"/docs/v1.4/user-manuals/performance-collector"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Use QoS management for out-of-band applications on host",id:"use-qos-management-for-out-of-band-applications-on-host",level:2}],c={toc:p},u="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"qos-management-for-out-of-band-applications-on-host"},"QoS Management for Out-of-Band Applications on Host"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In a production environment, there could be more than just containerized applications managed by Kubernetes, but also\nout-of-band applications running on hosts. Koordinator has supported\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/proposals/scheduling/20221227-node-resource-reservation.md"},"node resources reservation"),"\nso that koord-scheduler can take them into account during allocation. However, these applications also have various QoS\nlevel during runtime such as LS or BE. So, as for the QoS management, koordlet should also support setting QoS parameters\nfor these processes running on hosts. For example the out-of-band processes could be latency-sensitive types, and koordlet\nshould set them as high-priority in case they got interference for BE pods."),(0,o.kt)("p",null,"Since most QoS strategies relies on cgroup mechanism, koordlet requires these applications must running under its own\ncgroup if they need the QoS management."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(5051).Z,width:"406",height:"241"})),(0,o.kt)("p",null,"Here are the supported QoS levels and strategies for out-of-band applications."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LS (Latency Sensitive)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CPU QoS(Group Identity): applications must run with cpu cgroup subsystem, and ",(0,o.kt)("inlineCode",{parentName:"li"},"koordlet")," will set cpu.bvt_warp_ns according to the ",(0,o.kt)("inlineCode",{parentName:"li"},"resource-qos-config"),". "),(0,o.kt)("li",{parentName:"ul"},"CPUSet Allocation: applications must run with cpuset cgroup subsystem, and ",(0,o.kt)("inlineCode",{parentName:"li"},"koorldet")," will set ",(0,o.kt)("strong",{parentName:"li"},"all cpus")," in share-pools for them."))),(0,o.kt)("li",{parentName:"ul"},"BE (Best-effort)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CPU QoS(Group Identity): applications must run with cpu cgroup subsystem, and ",(0,o.kt)("inlineCode",{parentName:"li"},"koorldet")," will set cpu.bvt_warp_ns according to the ",(0,o.kt)("inlineCode",{parentName:"li"},"resource-qos-config"),".")))),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,o.kt)("p",null,"Host applications should already run with cgroup, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.kernel.org/admin-guide/cgroup-v1/cgroups.html"},"kernel manual"),"\nfor more details."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Version Requirement"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2265v1.18")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"koordinator"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2265v1.4.0")))),(0,o.kt)("h2",{id:"use-qos-management-for-out-of-band-applications-on-host"},"Use QoS management for out-of-band applications on host"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run host application under cgroup ",(0,o.kt)("inlineCode",{parentName:"li"},"host-latency-sensitive/nginx/")," with cpu and cpuset subsystem. It should be noted\nthat ",(0,o.kt)("inlineCode",{parentName:"li"},"cpuset.cpus")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"cpuset.mems")," of each level must be initialized with manually, which could be equal to the cgroup root path.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# init cgroup dir on cgroup v1\n$ mkdir -p /sys/fs/cgroup/cpuset/host-latency-sensitive/nginx/\n$ mkdir -p /sys/fs/cgroup/cpu/host-latency-sensitive/nginx/\n$ cat /sys/fs/cgroup/cpuset/cpuset.cpus > /sys/fs/cgroup/cpuset/host-latency-sensitive/cpuset.cpus\n$ cat /sys/fs/cgroup/cpuset/cpuset.cpus > /sys/fs/cgroup/cpuset/host-latency-sensitive/nginx/cpuset.cpus\n$ cat /sys/fs/cgroup/cpuset/cpuset.mems > /sys/fs/cgroup/cpuset/host-latency-sensitive/cpuset.mems\n$ cat /sys/fs/cgroup/cpuset/cpuset.mems > /sys/fs/cgroup/cpuset/host-latency-sensitive/nginx/cpuset.mems\n\n# bind application to corresponding cgroups \n$ echo ${your-application-pids} > /sys/fs/cgroup/cpuset/host-latency-sensitive/nginx/tasks\n$ echo ${your-application-pids} > /sys/fs/cgroup/cpu/host-latency-sensitive/nginx/tasks\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create a configmap file base on the following ConfigMap content:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\ndata:\n  host-application-config: |\n    {\n      "applications": [\n        {\n          "name": "nginx",\n          "qos": "LS",\n          "cgroupPath": {\n            "base": "CgroupRoot",\n            "parentDir": "host-latency-sensitive/",\n            "relativePath": "nginx/"\n          }\n        }\n      ]\n    }\n  resource-qos-config: |\n    {\n      "clusterStrategy": {\n        "lsClass": {\n          "cpuQOS": {\n            "enable": true,\n            "groupIdentity": 2\n          }\n        },\n        "beClass": {\n          "cpuQOS": {\n            "enable": true,\n            "groupIdentity": -1\n          }\n        }\n      }\n    }\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Valid values"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"applications")),(0,o.kt)("td",{parentName:"tr",align:"left"},"[]HostApplicationSpec"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,o.kt)("td",{parentName:"tr",align:"left"},"spec description of host applications.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,o.kt)("td",{parentName:"tr",align:"left"},"name of the host application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"qos")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"LS/BE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"QoS class of the application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cgroupPath")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CgroupPath"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,o.kt)("td",{parentName:"tr",align:"left"},"cgroup path of the application, the directory equals to ",(0,o.kt)("inlineCode",{parentName:"td"},"${base}/${parentDir}/${relativePath}"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cgroupPath.base")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"CgroupRoot/Kubepods/KubepodsBurstable/KubepodsBesteffort"),(0,o.kt)("td",{parentName:"tr",align:"left"},"cgroup base dir of the application, the format is various across cgroup drivers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cgroupPath.parentDir")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,o.kt)("td",{parentName:"tr",align:"left"},'cgroup parent path under base dir. By default it is "host-latency-sensitive/" for LS and "host-latency-sensitive/" for BE.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cgroupPath.relativePath")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,o.kt)("td",{parentName:"tr",align:"left"},"cgroup relative path under parent dir.")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check whether a ConfigMap named ",(0,o.kt)("inlineCode",{parentName:"li"},"slo-controller-config")," exists in the ",(0,o.kt)("inlineCode",{parentName:"li"},"koordinator-system")," namespace.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If a ConfigMap named  ",(0,o.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"  exists, we commend that you run the kubectl patch command to update the ConfigMap. This avoids changing other settings in the ConfigMap."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch cm -n koordinator-system slo-controller-config --patch "$(cat configmap.yaml)"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If no ConfigMap named ",(0,o.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"  exists, run the kubectl patch command to create a ConfigMap named ack-slo-config:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f configmap.yaml\n")))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check the cgroup value of host application, then you can find the content of ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu.bvt_warp_ns")," equals to the LS class,\nand the cpuset.cpus equals to the LS CPU share pool.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ cat /sys/fs/cgroup/cpu/host-latency-sensitive/nginx/cpu.bvt_warps_ns\n$ 2\n\n$ cat /sys/fs/cgroup/cpuset/host-latency-sensitive/nginx/cpuset.cpus\n$ 1-5,8-23,32-47,50-51,53,56-71,80-103\n\n$ kubectl get noderesourcetopology ${your-node-id} -o yaml | grep node.koordinator.sh/cpu-shared-pools\n    node.koordinator.sh/cpu-shared-pools: \'[{"socket":0,"node":0,"cpuset":"1-5,8-23,53,56-71"},{"socket":1,"node":1,"cpuset":"32-47,50-51,80-103"}]\'\n')))}d.isMDXComponent=!0},5051:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/host-application-101f6caa7664a1a2cc38c6d8cf01a6a1.svg"}}]);