"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[9034],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},i="Device Scheduling",s={unversionedId:"user-manuals/fine-grained-device-scheduling",id:"version-v1.2/user-manuals/fine-grained-device-scheduling",title:"Device Scheduling",description:"We provide a fine-grained mechanism for managing GPUs and other devices such as RDMA and FPGA, defines a set of APIs to",source:"@site/versioned_docs/version-v1.2/user-manuals/fine-grained-device-scheduling.md",sourceDirName:"user-manuals",slug:"/user-manuals/fine-grained-device-scheduling",permalink:"/docs/v1.2/user-manuals/fine-grained-device-scheduling",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/fine-grained-device-scheduling.md",tags:[],version:"v1.2",lastUpdatedBy:"zwzhang",lastUpdatedAt:1680861757,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{},sidebar:"docs",previous:{title:"PodMigrationJob",permalink:"/docs/v1.2/user-manuals/pod-migration-job"},next:{title:"GangScheduling",permalink:"/docs/v1.2/user-manuals/gang-scheduling"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Use DeviceScheduling",id:"use-devicescheduling",level:2},{value:"Quick Start",id:"quick-start",level:3}],c={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"device-scheduling"},"Device Scheduling"),(0,a.kt)("p",null,"We provide a fine-grained mechanism for managing GPUs and other devices such as RDMA and FPGA, defines a set of APIs to\ndescribe device information on nodes, including GPU, RDMA, and FPGA, and a new set of resource names to flexibly support\nusers to apply at a finer granularity GPU resources. This mechanism is the basis for subsequent other GPU scheduling\ncapabilities such as GPU Share, GPU Overcommitment, etc."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"GPU devices have very strong computing power, but are expensive. How to make better use of GPU equipment, give full play\nto the value of GPU and reduce costs is a problem that needs to be solved. In the existing GPU allocation mechanism of\nthe K8s community, the GPU is allocated by the kubelet, and it is a complete device allocation. This method is simple\nand reliable, but similar to the CPU and memory, the GPU will also be wasted. Therefore, some users expect to use only\na portion of the GPU's resources and share the rest with other workloads to save costs. Moreover, GPU has particularities.\nFor example, the NVLink and oversold scenarios supported by NVIDIA GPU mentioned below both require a central decision\nthrough the scheduler to obtain globally optimal allocation results."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,a.kt)("li",{parentName:"ul"},"Koordinator >= 0.71")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,a.kt)("h3",{id:"configurations"},"Configurations"),(0,a.kt)("p",null,"DeviceScheduling is ",(0,a.kt)("em",{parentName:"p"},"Enabled")," by default. You can use it without any modification on the koord-scheduler config."),(0,a.kt)("h2",{id:"use-devicescheduling"},"Use DeviceScheduling"),(0,a.kt)("h3",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"1.check device crd:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get device host04 -o yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Device\nmetadata:\n  creationTimestamp: "2022-10-08T09:26:42Z"\n  generation: 1\n  managedFields:\n  - apiVersion: scheduling.koordinator.sh/v1alpha1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:metadata:\n        f:ownerReferences: {}\n      f:spec:\n        .: {}\n        f:devices: {}\n      f:status: {}\n    manager: koordlet\n    operation: Update\n    time: "2022-10-08T09:26:42Z"\n  name: host04\n  ownerReferences:\n  - apiVersion: v1\n    blockOwnerDeletion: true\n    controller: true\n    kind: Node\n    name: host04\n    uid: 09c4f912-6026-467a-85d2-6b2147c9557e\n  resourceVersion: "39011943"\n  selfLink: /apis/scheduling.koordinator.sh/v1alpha1/devices/host04\n  uid: 5a498e1f-1357-4518-b74c-cab251d6c18c\nspec:\n  devices:\n  - health: true\n    id: GPU-04cea5cd-966f-7116-1d58-1ac34421541b\n    minor: 0\n    resources:\n      kubernetes.io/gpu-core: "100"\n      kubernetes.io/gpu-memory: 16Gi\n      kubernetes.io/gpu-memory-ratio: "100"\n    type: gpu\n  - health: true\n    id: GPU-3680858f-1753-371e-3c1a-7d8127fc7113\n    minor: 1\n    resources:\n      kubernetes.io/gpu-core: "100"\n      kubernetes.io/gpu-memory: 16Gi\n      kubernetes.io/gpu-memory-ratio: "100"\n    type: gpu\nstatus: {}\n')),(0,a.kt)("p",null,"We can find this node has two gpu cards, we can find the detail info of each gpu card here."),(0,a.kt)("p",null,"2.check node allocatable resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get node host04 -o yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Node\nmetadata:\n  annotations:\n    flannel.alpha.coreos.com/backend-data: \'{"VtepMAC":"5a:69:48:10:29:25"}\'\n  creationTimestamp: "2022-08-29T09:12:55Z"\n  labels:\n    beta.kubernetes.io/os: linux\n  status:\n    addresses:\n    - address: 10.15.0.37\n      type: InternalIP\n    - address: host04\n      type: Hostname\n    allocatable:\n      cpu: "6"\n      ephemeral-storage: "200681483926"\n      kubernetes.io/gpu: "200"\n      kubernetes.io/gpu-core: "200"\n      kubernetes.io/gpu-memory: 32Gi\n      kubernetes.io/gpu-memory-ratio: "200"\n      memory: 59274552Ki\n      nvidia.com/gpu: "2"\n      pods: "220"\n    capacity:\n      cpu: "8"\n      kubernetes.io/gpu: "200"\n      kubernetes.io/gpu-core: "200"\n      kubernetes.io/gpu-memory: 32Gi\n      kubernetes.io/gpu-memory-ratio: "200"\n      memory: 61678904Ki\n      nvidia.com/gpu: "2"\n      pods: "220"\n')),(0,a.kt)("p",null,"We can find the node allocatable resource has merged each gpu card resource."),(0,a.kt)("p",null,"3.apply pod:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-example\n  namespace: default\nspec:\n  schedulerName: koord-scheduler\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: 40m\n        memory: 40Mi\n      requests:\n        cpu: 40m\n        memory: 40Mi\n        kubernetes.io/gpu: "100"\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  restartPolicy: Always\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n default pod-example -o yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    scheduling.koordinator.sh/device-allocated: \'{"gpu":[{"minor":0,"resources":{"kubernetes.io/gpu-core":"100","kubernetes.io/gpu-memory":"12508288Ki","kubernetes.io/gpu-memory-ratio":"100"}}]}\'\n  creationTimestamp: "2022-10-08T09:33:07Z"\n  name: pod-example\n  namespace: default\n  resourceVersion: "39015044"\n  selfLink: /api/v1/namespaces/xlf/pods/gpu-pod7\n  uid: 6bf1ac3c-0c9f-472a-8b86-de350bbfa795\nspec:\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: "1"\n        kubernetes.io/gpu: "100"\n        memory: 256Mi\n      requests:\n        cpu: "1"\n        kubernetes.io/gpu: "100"\n        memory: 256Mi\nstatus:\n  conditions:\n  ...\n  hostIP: 10.0.0.149\n  phase: Running\n  podIP: 10.244.2.45\n  podIPs:\n  - ip: 10.244.2.45\n  qosClass: Guaranteed\n  startTime: "2022-10-08T09:33:07Z"\n')),(0,a.kt)("p",null,"You can find the concrete device allocate result through annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduling.koordinator.sh/device-allocated"),"."),(0,a.kt)("p",null,"4.more apply protocol:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\n...\nspec:\n    ...\n    resources:\n      requests:\n        cpu: 40m\n        memory: 40Mi\n        nvidia.com/gpu: "100"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\n...\nspec:\n    ...\n    resources:\n      requests:\n        cpu: 40m\n        memory: 40Mi\n        kubernetes.io/gpu-core: "100"\n        kubernetes.io/gpu-memory-ratio: "100"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\n...\nspec:\n    ...\n    resources:\n      requests:\n        cpu: 40m\n        memory: 40Mi\n        kubernetes.io/gpu-core: "100"\n        kubernetes.io/gpu-memory: "16Mi"\n')),(0,a.kt)("p",null,"4.device resource debug api:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n koordinator-system get lease koord-scheduler --no-headers | awk '{print $2}' | cut -d'_' -f1 | xargs -I {} kubectl -n koordinator-system get pod {} -o wide --no-headers | awk '{print $6}'\n  10.244.0.64\n\n$ curl 10.244.0.64:10251/apis/v1/plugins/DeviceShare/nodeDeviceSummaries\n$ curl 10.244.0.64:10251/apis/v1/plugins/DeviceShare/nodeDeviceSummaries/host04\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "allocateSet": {\n        "gpu": {\n            "xlf/gpu-pod7": {\n                "0": {\n                    "kubernetes.io/gpu-core": "100",\n                    "kubernetes.io/gpu-memory": "12508288Ki",\n                    "kubernetes.io/gpu-memory-ratio": "100"\n                }\n            }\n        }\n    },\n    "deviceFree": {\n        "kubernetes.io/gpu-core": "0",\n        "kubernetes.io/gpu-memory": "0",\n        "kubernetes.io/gpu-memory-ratio": "0"\n    },\n    "deviceFreeDetail": {\n        "gpu": {\n            "0": {\n                "kubernetes.io/gpu-core": "0",\n                "kubernetes.io/gpu-memory": "0",\n                "kubernetes.io/gpu-memory-ratio": "0"\n            }\n        }\n    },\n    "deviceTotal": {\n        "kubernetes.io/gpu-core": "100",\n        "kubernetes.io/gpu-memory": "12508288Ki",\n        "kubernetes.io/gpu-memory-ratio": "100"\n    },\n    "deviceTotalDetail": {\n        "gpu": {\n            "0": {\n                "kubernetes.io/gpu-core": "100",\n                "kubernetes.io/gpu-memory": "12508288Ki",\n                "kubernetes.io/gpu-memory-ratio": "100"\n            }\n        }\n    },\n    "deviceUsed": {\n        "kubernetes.io/gpu-core": "100",\n        "kubernetes.io/gpu-memory": "12508288Ki",\n        "kubernetes.io/gpu-memory-ratio": "100"\n    },\n    "deviceUsedDetail": {\n        "gpu": {\n            "0": {\n                "kubernetes.io/gpu-core": "100",\n                "kubernetes.io/gpu-memory": "12508288Ki",\n                "kubernetes.io/gpu-memory-ratio": "100"\n            }\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);