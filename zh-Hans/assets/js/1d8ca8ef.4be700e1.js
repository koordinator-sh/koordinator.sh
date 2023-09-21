"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[9184],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={},a="Fine-grained device scheduling",s={unversionedId:"designs/fine-grained-device-scheduling",id:"version-v1.2/designs/fine-grained-device-scheduling",title:"Fine-grained device scheduling",description:"Summary",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.2/designs/fine-grained-device-scheduling.md",sourceDirName:"designs",slug:"/designs/fine-grained-device-scheduling",permalink:"/zh-Hans/docs/v1.2/designs/fine-grained-device-scheduling",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/fine-grained-device-scheduling.md",tags:[],version:"v1.2",lastUpdatedBy:"zwzhang",lastUpdatedAt:1680861757,formattedLastUpdatedAt:"2023\u5e744\u67087\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Descheduler Framework",permalink:"/zh-Hans/docs/v1.2/designs/descheduler-framework"},next:{title:"GangScheduling",permalink:"/zh-Hans/docs/v1.2/designs/gang-scheduling"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-goals/Future work",id:"non-goalsfuture-work",level:3},{value:"Proposal",id:"proposal",level:2},{value:"API",id:"api",level:3},{value:"Device resource dimensions",id:"device-resource-dimensions",level:4},{value:"User apply device resources scenarios",id:"user-apply-device-resources-scenarios",level:4},{value:"Compatible with <code>nvidia.com/gpu</code>",id:"compatible-with-nvidiacomgpu",level:5},{value:"Apply whole resources of GPU or part resources of GPU",id:"apply-whole-resources-of-gpu-or-part-resources-of-gpu",level:5},{value:"Apply <code>kubernetes.io/gpu-core</code> and <code>kubernetes.io/gpu-memory-ratio</code> separately",id:"apply-kubernetesiogpu-core-and-kubernetesiogpu-memory-ratio-separately",level:5},{value:"Apply <code>kubernetes.io/gpu-core</code> and <code>kubernetes.io/gpu-memory</code> separately",id:"apply-kubernetesiogpu-core-and-kubernetesiogpu-memory-separately",level:5},{value:"Apply RDMA",id:"apply-rdma",level:5},{value:"Implementation Details",id:"implementation-details",level:3},{value:"Scheduling",id:"scheduling",level:4},{value:"DeviceAllocation",id:"deviceallocation",level:5},{value:"NodeDevicePlugin",id:"nodedeviceplugin",level:5},{value:"Device Reporter",id:"device-reporter",level:4},{value:"Device CRD Scheme definition",id:"device-crd-scheme-definition",level:4},{value:"Compatible",id:"compatible",level:5},{value:"CRD Example",id:"crd-example",level:4},{value:"koordlet and koord-runtime-proxy",id:"koordlet-and-koord-runtime-proxy",level:4},{value:"Compatibility",id:"compatibility",level:3},{value:"Upgrade strategy",id:"upgrade-strategy",level:3},{value:"Unsolved Problems",id:"unsolved-problems",level:2},{value:"Alternatives",id:"alternatives",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,o.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fine-grained-device-scheduling"},"Fine-grained device scheduling"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This proposal provides a fine-grained mechanism for managing GPUs and other devices such as RDMA and FPGA, defines a set of APIs to describe device information on nodes, including GPU, RDMA, and FPGA, and a new set of resource names to flexibly support users to apply at a finer granularity GPU resources. This mechanism is the basis for subsequent other GPU scheduling capabilities such as GPU Share, GPU Overcommitment, etc."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"GPU devices have very strong computing power, but are expensive. How to make better use of GPU equipment, give full play to the value of GPU and reduce costs is a problem that needs to be solved. In the existing GPU allocation mechanism of the K8s community, the GPU is allocated by the kubelet, and it is a complete device allocation. This method is simple and reliable, but similar to the CPU and memory, the GPU will also be wasted. Therefore, some users expect to use only a portion of the GPU's resources and share the rest with other workloads to save costs. Moreover, GPU has particularities. For example, the NVLink and oversold scenarios supported by NVIDIA GPU mentioned below both require a central decision through the scheduler to obtain globally optimal allocation results."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(9965).Z,width:"2222",height:"828"})),(0,r.kt)("p",null,"From the picture, we can find that although the node has 8 GPU instances whose model is A100/V100, the data transmission speed between GPU instances is different. When a Pod requires multiple GPU instances, we can assign the Pod the GPU instances with the maximum data transfer speed combined relationship. In addition, when we want the GPU instances among a group of Pods to have the maximum data transfer speed combined relationship, the scheduler should batch allocate the best GPU instances to these Pods and assign them to the same node."),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Definition Device CRD and the Resource API. "),(0,r.kt)("li",{parentName:"ol"},"Provides a reporter component in koordlet to report Device information and resource capacities."),(0,r.kt)("li",{parentName:"ol"},"Provides a scheduler plugin to support users to apply at a finer granularity GPU resources."),(0,r.kt)("li",{parentName:"ol"},"Provider a new runtime hook plugin in koordlet to support update the environments of containers with GPUs that be allocated by scheduler.")),(0,r.kt)("h3",{id:"non-goalsfuture-work"},"Non-goals/Future work"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define flexible allocation strategies, such as implementing BinPacking or Spread according to GPU resources")),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("h4",{id:"device-resource-dimensions"},"Device resource dimensions"),(0,r.kt)("p",null,'Due to GPU is complicated, we will introduce GPU first. As we all know there is compute and GPU Memory capability for the GPU device. Generally user apply GPU like "I want 1/2/4/8 GPUs", but if node support GPU level isolation mechanism, user may apply GPU like "I want 0.5/0.25 GPU resources". Moreover, user may set different compute capability and GPU memory capability for best resource utilization, so the user want apply GPU like "I want X percent of "compute capability and Y percent of memory capability".'),(0,r.kt)("p",null,"We abstract GPU resources into different dimensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubernetes.io/gpu-core")," represents the computing capacity of the GPU. Similar to K8s MilliCPU, we abstract the total computing power of GPU into one hundred, and users can apply for the corresponding amount of GPU computing power according to their needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubernetes.io/gpu-memory")," represents the memory capacity of the GPU in bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubernetes.io/gpu-memory-ratio")," represents the percentage of the GPU's memory.")),(0,r.kt)("p",null,"Assuming that node A has 4 GPU instances, and the total memory of each instance is 8GB, when device reporter reports GPU capacity information to ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.Status.Allocatable"),", it no longer reports nvidia.com/gpu=4, but reports the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'status:\n  capacity:\n    kubernetes.io/gpu-core: 400\n    kubernetes.io/gpu-memory: "32GB"\n    kubernetes.io/gpu-memory-ratio: 400\n  allocatable:\n    kubernetes.io/gpu-core: 400\n    kubernetes.io/gpu-memory: "32GB"\n    kubernetes.io/gpu-memory-ratio: 400\n')),(0,r.kt)("p",null,"For the convenience of users, an independent resource name ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu")," is defined. For example, when a user wants to use half of the computing resources and memory resources of a GPU instance, the user can directly declare ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu: 50"),", and the scheduler will convert it to ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-core: 50, kubernetes.io/gpu-memory-ratio: 50")),(0,r.kt)("p",null,"For other devices like RDMA and FPGA, the node has 1 RDMA and 1 FGPA, will report the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"status:\n  capacity:\n    kubernetes.io/rdma: 100\n    kubernetes.io/fpga: 100\n  allocatable:\n    kubernetes.io/rdma: 100\n    kubernetes.io/fpga: 100\n")),(0,r.kt)("p",null,"Why do we need ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-memory-ratio")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-memory")," ?\nWhen user apply 0.5/0.25 GPU, the user don't know the exact memory total bytes per GPU, only wants to use\nhalf or quarter percentage of memory, so user can request the GPU memory with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-memory-ratio"),".\nWhen scheduler assigned Pod on concrete node, scheduler will translate the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-memory-ratio")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-memory")," by the formulas:  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"allocatedMemory = totalMemoryOf(GPU)  ")," ",(0,r.kt)("inlineCode",{parentName:"strong"},"kubernetes.io/gpu-memory-ratio"),"*"),", so that the GPU isolation can work."),(0,r.kt)("p",null,"During the scheduling filter phase, the scheduler will do special processing for ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-memory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-memory-ratio"),". When a Pod specifies ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-memory-ratio"),", the scheduler checks each GPU instance on each node for unallocated or remaining resources to ensure that the remaining memory on each GPU instance meets the ratio requirement."),(0,r.kt)("p",null,"If the user knows exactly or can roughly estimate the specific memory consumption of the workload, he can apply for GPU memory through ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/gpu-memory"),". All details can be seen below."),(0,r.kt)("p",null,"Besides, when dimension's value > 100, means Pod need multi-devices. now only allow the value can be divided by 100."),(0,r.kt)("h4",{id:"user-apply-device-resources-scenarios"},"User apply device resources scenarios"),(0,r.kt)("h5",{id:"compatible-with-nvidiacomgpu"},"Compatible with ",(0,r.kt)("inlineCode",{parentName:"h5"},"nvidia.com/gpu")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n  requests:\n    nvidia.com/gpu: "2"\n    cpu: "4"\n    memory: "8Gi"\n')),(0,r.kt)("p",null,"The scheduler translates the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvida.com/gpu: 2")," to the following spec:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n  requests:\n    kubernetes.io/gpu-core: "200"\n    kubernetes.io/gpu-memory-ratio: "200"\n    kubernetes.io/gpu-memory: "16Gi" # assume 8G memory in bytes per GPU\n    cpu: "4"\n    memory: "8Gi"\n')),(0,r.kt)("h5",{id:"apply-whole-resources-of-gpu-or-part-resources-of-gpu"},"Apply whole resources of GPU or part resources of GPU"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n   requests:\n    kubernetes.io/gpu: "50"\n    cpu: "4"\n    memory: "8Gi"\n')),(0,r.kt)("p",null,"The scheduler translates the ",(0,r.kt)("inlineCode",{parentName:"p"},'kubernetes.io/gpu: "50"')," to the following spec:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n  requests:\n    kubernetes.io/gpu-core: "50"\n    kubernetes.io/gpu-memory-ratio: "50"\n    kubernetes.io/gpu-memory: "4Gi" # assume 8G memory in bytes for the GPU\n    cpu: "4"\n    memory: "8Gi"\n')),(0,r.kt)("h5",{id:"apply-kubernetesiogpu-core-and-kubernetesiogpu-memory-ratio-separately"},"Apply ",(0,r.kt)("inlineCode",{parentName:"h5"},"kubernetes.io/gpu-core")," and ",(0,r.kt)("inlineCode",{parentName:"h5"},"kubernetes.io/gpu-memory-ratio")," separately"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n  requests:\n    kubernetes.io/gpu-core: "50"\n    kubernetes.io/gpu-memory-ratio: "60"\n    cpu: "4"\n    memory: "8Gi"\n')),(0,r.kt)("h5",{id:"apply-kubernetesiogpu-core-and-kubernetesiogpu-memory-separately"},"Apply ",(0,r.kt)("inlineCode",{parentName:"h5"},"kubernetes.io/gpu-core")," and ",(0,r.kt)("inlineCode",{parentName:"h5"},"kubernetes.io/gpu-memory")," separately"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n  requests:\n    kubernetes.io/gpu-core: "60"\n    kubernetes.io/gpu-memory: "4Gi"\n    cpu: "4"\n    memory: "8Gi"\n')),(0,r.kt)("h5",{id:"apply-rdma"},"Apply RDMA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n  requests:\n    kubernetes.io/rdma: "100"\n    cpu: "4"\n    memory: "8Gi"\n')),(0,r.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,r.kt)("h4",{id:"scheduling"},"Scheduling"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Abstract new data structure to describe resources and healthy status per device on the node."),(0,r.kt)("li",{parentName:"ol"},"Implements the Filter/Reserve/PreBind extenstion points."),(0,r.kt)("li",{parentName:"ol"},"Automatically recognize different kind devices. When a new device added, we don't need modify any code")),(0,r.kt)("h5",{id:"deviceallocation"},"DeviceAllocation"),(0,r.kt)("p",null,"In the PreBind stage, the scheduler will update the device (including GPU) allocation results, including the device's Minor and resource allocation information, to the Pod in the form of annotations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'/*\n{\n  "gpu": [\n    {\n      "minor": 0,\n      "resouurces": {\n        "kubernetes.io/gpu-core": 100,\n        "kubernetes.io/gpu-mem-ratio": 100,\n        "kubernetes.io/gpu-mem": "16Gi"\n      }\n    },\n    {\n      "minor": 1,\n      "resouurces": {\n        "kubernetes.io/gpu-core": 100,\n        "kubernetes.io/gpu-mem-ratio": 100,\n        "kubernetes.io/gpu-mem": "16Gi"\n      }\n    }\n  ]\n}\n*/\ntype DeviceAllocation struct {\n    Minor     int32\n    Resources map[string]resource.Quantity\n}\n\ntype DeviceAllocations map[DeviceType][]*DeviceAllocation\n')),(0,r.kt)("h5",{id:"nodedeviceplugin"},"NodeDevicePlugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var (\n    _ framework.PreFilterPlugin = &NodeDevicePlugin{}\n    _ framework.FilterPlugin    = &NodeDevicePlugin{}\n    _ framework.ReservePlugin   = &NodeDevicePlugin{}\n    _ framework.PreBindPlugin   = &NodeDevicePlugin{}\n)\n\ntype NodeDevicePlugin struct {\n    frameworkHandler     framework.Handle\n    nodeDeviceCache      *NodeDeviceCache\n}\n\ntype NodeDeviceCache struct {\n    lock        sync.Mutex\n    nodeDevices map[string]*nodeDevice\n}\n\ntype nodeDevice struct {\n    lock        sync.Mutex\n    DeviceTotal map[DeviceType]deviceResource\n    DeviceFree  map[DeviceType]deviceResource\n    DeviceUsed  map[DeviceType]deviceResource\n    AllocateSet map[DeviceType]*corev1.PodList\n}\n\n// We use `deviceResource` to present resources per device.\n// "0": {kubernetes.io/gpu-core:100, kubernetes.io/gpu-memory-ratio:100, kubernetes.io/gpu-memory: 16GB}\n// "1": {kubernetes.io/gpu-core:100, kubernetes.io/gpu-memory-ratio:100, kubernetes.io/gpu-memory: 16GB}\ntype deviceResources map[int]corev1.ResourceList\n\n')),(0,r.kt)("p",null,"We will register node and device event handler to maintain device account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In Filter, we will make-up each device request by a node(the gpu-memory example), and try compare each device free resource and Pod device request."),(0,r.kt)("li",{parentName:"ul"},"In Reserve/Unreserve, we will update nodeDeviceCache's used/free resource and allocateSet. Now device selection rule just based on device minor id order."),(0,r.kt)("li",{parentName:"ul"},"In PreBind, we will write DeviceAllocations to Pod's annotation."),(0,r.kt)("li",{parentName:"ul"},"In Init stage, we should list all Node/Device/Pods to recover device accounts.")),(0,r.kt)("h4",{id:"device-reporter"},"Device Reporter"),(0,r.kt)("p",null,"Implements a new component called ",(0,r.kt)("inlineCode",{parentName:"p"},"Device Reporter")," in koordlet to create or update ",(0,r.kt)("inlineCode",{parentName:"p"},"Device")," CRD instance with the resources information and healthy status per device including GPU, RDMA and FPGA, etc. This version we only support GPU. It will execution ",(0,r.kt)("inlineCode",{parentName:"p"},"nccl")," commands to get each minor resource just like k8s-gpu-device-plugins. We will apply community health check logic."),(0,r.kt)("h4",{id:"device-crd-scheme-definition"},"Device CRD Scheme definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type DeviceType string\n\nconst (\n    GPU  DeviceType = "gpu"\n    FPGA DeviceType = "fpga"\n    RDMA DeviceType = "rdma"\n)\n\ntype DeviceSpec struct {\n    Devices []DeviceInfo `json:"devices"`\n}\n\ntype DeviceInfo struct {\n    // UUID represents the UUID of device\n    UUID string `json:"id,omitempty"`\n    // Minor represents the Minor number of Device, starting from 0\n    Minor int32 `json:"minor,omitempty"`\n    // Type represents the type of device\n    Type DeviceType `json:"deviceType,omitempty"`\n    // Health indicates whether the device is normal\n    Health bool `json:"health,omitempty"`\n    // Resources represents the total capacity of various resources of the device\n    Resources map[string]resource.Quantity `json:"resource,omitempty"`\n}\n\ntype DeviceStatus struct {}\n\ntype Device struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   DeviceSpec   `json:"spec,omitempty"`\n    Status DeviceStatus `json:"status,omitempty"`\n}\n\ntype DeviceList struct {\n    metav1.TypeMeta `json:",inline"`\n    metav1.ListMeta `json:"metadata,omitempty"`\n\n    Items []Device `json:"items"`\n}\n')),(0,r.kt)("h5",{id:"compatible"},"Compatible"),(0,r.kt)("p",null,"Considering that some users already have many existing GPU Pods in their clusters, it is necessary to ensure that Koordinator GPU Scheduling does not repeatedly allocate the GPU devices held by these GPU Pods. Therefore, koord-scheduler needs to obtain the GPU devices's information held by these existing Pods. These GPU devices are allocated by the kubelet and recorded in the local file ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/kubelet/device-plugins/kubelet_internal_checkpoint"),", so the device reporter will parse the file to obtain the GPU Device ID assigned to each Pod. When parsing, it needs to exclude the Pod that allocates GPU through koord-scheduler, and finally update it to Device CRD in the form of annotation. The corresponding annotation key is ",(0,r.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/devices-checkpoints"),", and the annotation value is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type PodDevicesEntry struct {\n    PodUID        string   `json:"podUID,omitempty"`\n    ContainerName string   `json:"containerName,omitempty"`\n    ResourceName  string   `json:"resourceName,omitempty"`\n    DeviceIDs     []string `json:"deviceIDs,omitempty"`\n    AllocResp     []byte   `json:"allocResp,omitempty"`\n}\n\ntype PodDevicesEntries []PodDevicesEntry\n')),(0,r.kt)("h4",{id:"crd-example"},"CRD Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Device\nmetadata:\n  name: node-1\n  annotations:\n    node.koordinator.sh/gpu-checkpoints: |-\n      [\n        {\n          "podUID": "fa8983dc-bb76-4eeb-8dcc-556fbd44d7ce",\n          "containerName": "cuda-container",\n          "resourceName": "nvidia.com/gpu",\n          "deviceIDs": ["GPU-36b27e44-b086-46f7-f2dc-73c36dc65991"]\n        }\n      ]\nspec:\n  devices:\n  - health: true\n    id: GPU-98583a5c-c155-9cf6-f955-03c189d3dbfb\n    minor: 0\n    resources:\n      kubernetes.io/gpu-core: "100"\n      kubernetes.io/gpu-memory: 15472384Ki\n      kubernetes.io/gpu-memory-ratio: "100"\n    type: gpu\n  - health: true\n    id: GPU-7f6410b9-bdf7-f9a5-de09-aa5ec31a7124\n    minor: 1\n    resources:\n      kubernetes.io/gpu-core: "100"\n      kubernetes.io/gpu-memory: 15472384Ki\n      kubernetes.io/gpu-memory-ratio: "100"\n    type: gpu\nstatus: {}\n')),(0,r.kt)("h4",{id:"koordlet-and-koord-runtime-proxy"},"koordlet and koord-runtime-proxy"),(0,r.kt)("p",null,"Our target is to work compatible with origin k8s kubelet and k8s device plugins, so:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We still allow kubelet and device plugin to allocate concrete device, which means no matter there's a k8s device\nplugin or not, our design can work well.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In koord-runtime-proxy, we will use Pod's ",(0,r.kt)("inlineCode",{parentName:"p"},"DeviceAllocation")," in annotation to replace the step1's result of container's\nargs and envs."))),(0,r.kt)("p",null,"We should modify protocol between koord-runtime-proxy and koordlet to add container env:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type ContainerResourceHookRequest struct {  \n    ....\n    Env map[string]string\n}\n\ntype ContainerResourceHookResponse struct {\n    ....\n    Env map[string]string\n}\n")),(0,r.kt)("p",null,"Then we will add a new ",(0,r.kt)("inlineCode",{parentName:"p"},"gpu-hook")," in koordlet's runtimehooks, registered to ",(0,r.kt)("inlineCode",{parentName:"p"},"PreCreateContainer")," stage.\nWe will generate new GPU env ",(0,r.kt)("inlineCode",{parentName:"p"},"NVIDIA_VISIBLE_DEVICES")," by Pod GPU allocation result in annotation. "),(0,r.kt)("p",null,"The koord-runtime-proxy can see these Pod's env, we need koord-runtime-proxy to pass these environments to koordlet, and koordlet parse the GPU related env to find the concrete device ids."),(0,r.kt)("p",null,"Besides, the koordlet should report GPU model to node labels same as device plugin, this is in-case Koordinator working without device-plugin."),(0,r.kt)("p",null,"Finally, we should modify ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerResourceExecutor"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," function in koord-runtime-proxy, and let new GPU env covering old GPU env."),(0,r.kt)("p",null,"When we handle hot-update processing, we can handle the existing scheduled Pods without device allocation in Pod's annotation. If GPU allocation info is not in annotation, we will find the GPU allocations from ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerResourceHookRequest"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Env"),", and we will update all GPU allocations to Device CRD instance. "),(0,r.kt)("h3",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"As we know, the GPU scheduling in kube-scheduler side has no any different with other scalar resources. The concrete device-level assigning is done by kubelet and GPU device plugin, which will generate container's GPU env. "),(0,r.kt)("p",null,"Our design has no conflict with the above process. Our device reporter reports Koordinator GPU resources for kubelet\nupdating node resources. Then we schedule device request in our new plugin with new device resource account. In pre-bind\nstage, we will update container resources with Koordinator GPU resources, this is for kubelet to check resource limitation.\nWe will also add device allocation information to Pod's annotation. In node side, the k8s device plugin will first patch\ncontainer env, but we will overwrite these envs in runtimeproxy by allocation result in Pod's annotation."),(0,r.kt)("h3",{id:"upgrade-strategy"},"Upgrade strategy"),(0,r.kt)("p",null,"If using Koordinator GPU Scheduling to schedule GPU Pods in a brand new cluster, simply install Koordinator components."),(0,r.kt)("p",null,"However, if you want to upgrade to Koordinator GPU Scheduing in an existing cluster, you need to avoid GPU devices being repeatedly allocated because of switching between different scheduling mechanisms. You need to pay attention to the order when upgrading:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Koordinator components. In particular, make sure that the koordlets are all started successfully."),(0,r.kt)("li",{parentName:"ol"},"Stop the system or platform that creates the new GPU Pod."),(0,r.kt)("li",{parentName:"ol"},"Stop the scheduler currently responsible for the GPU Pod and ensure that there are no pending GPU Pods in the current cluster. "),(0,r.kt)("li",{parentName:"ol"},"Wait a few minutes to ensure that each node's koordlet creates and updates the Device CRD."),(0,r.kt)("li",{parentName:"ol"},"Modify all components that create GPU Pods to switch the schedulerName of the Pod to koord-scheduler"),(0,r.kt)("li",{parentName:"ol"},"Start trying to create a GPU Pod and verify the koord-scheduler GPU Scheduling scheduling result."),(0,r.kt)("li",{parentName:"ol"},"Restore the system or platform that created the GPU Pod and the old scheduler.")),(0,r.kt)("p",null,"In the future Koordinator will provide a webhook to solve the upgrade existing cluster problem. The webhook will identify the GPU Pod and modify the schedulerName of the newly created GPU Pod to koord-scheduler. At the same time, the webhook will take over the Binding operation of the GPU Pod. If the Binding is not initiated by koord-scheduler, it will be rejected. "),(0,r.kt)("h2",{id:"unsolved-problems"},"Unsolved Problems"),(0,r.kt)("h2",{id:"alternatives"},"Alternatives"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User can choose whether use k8s-device plugin. as mentioned above, we can compatible in both cases.")))}p.isMDXComponent=!0},9965:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/nvlink-aa73484f02ad3d5d8d9e5adeb445ad27.jpg"}}]);