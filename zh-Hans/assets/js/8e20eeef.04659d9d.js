"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[3964],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3120:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i="CPU Suppress",u={unversionedId:"user-manuals/cpu-suppress",id:"version-v1.0/user-manuals/cpu-suppress",title:"CPU Suppress",description:"Introduction",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.0/user-manuals/cpu-suppress.md",sourceDirName:"user-manuals",slug:"/user-manuals/cpu-suppress",permalink:"/zh-Hans/docs/v1.0/user-manuals/cpu-suppress",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/cpu-suppress.md",tags:[],version:"v1.0",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1667999289,formattedLastUpdatedAt:"2022/11/9",frontMatter:{}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Configurations",id:"configurations",level:3},{value:"(Optional) Advanced Settings",id:"optional-advanced-settings",level:4},{value:"Use CPU Suppress",id:"use-cpu-suppress",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cpu-suppress"},"CPU Suppress"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In order to ensure the runtime quality of different workloads in co-located scenarios, Koordinator uses the CPU Suppress\nmechanism provided by koordlet on the node side to suppress workloads of the Best Effort type when the load increases.\nOr increase the resource quota for Best Effort type workloads when the load decreases."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/zh-Hans/docs/v1.0/architecture/resource-model"},"Dynamic resource overcommitment model")," that is provided by\nKoordinator, the total amount of reclaimed resources dynamically changes based on the actual amount of resources used\nby latency-sensitive (LS/LSR/LSE) pods. Reclaimed resources can be used by BE pods. You can use the dynamic resource\novercommitment feature to improve the resource utilization of a cluster by deploying both LS pods and BE pods in the\ncluster. To ensure sufficient CPU resources for the LS pods on a node, you can use koordinator to limit the CPU\nusage of the BE pods on the node. The elastic resource limit feature can maintain the resource utilization of a node\nbelow a specified threshold and limit the amount of CPU resources that can be used by BE pods. This ensures the\nstability of the containers on the node."),(0,o.kt)("p",null,"CPU Threshold indicates the CPU utilization threshold of a node. Pod (LS).Usage indicates the CPU usage of LS pods.\nCPU Restriction for BE indicates the CPU usage of BE pods. The amount of CPU resources that can be used by BE pods\nis adjusted based on the increase or decrease of the CPU usage of LS pods. We recommend that you use the same value\nfor CPU Threshold and the reserved CPU watermark in the dynamic resource overcommitment model.\nThis ensures a consistent level of CPU resource utilization."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"CPU-Suppress",src:n(8545).Z,width:"731",height:"212"})),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,o.kt)("li",{parentName:"ul"},"Koordinator >= 0.6")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,o.kt)("h3",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"When installing through the helm chart, the ConfigMap slo-controller-config will be created in the koordinator-system\nnamespace, and the CPU Suppress mechanism is enabled by default. If it needs to be closed, refer to the configuration\nbelow, and modify the configuration of the resource-threshold-config section to take effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: {{ .Values.installation.namespace }}\ndata:\n  ...\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": true,\n        "cpuSuppressThresholdPercent": 65\n      }\n    }\n')),(0,o.kt)("h4",{id:"optional-advanced-settings"},"(Optional) Advanced Settings"),(0,o.kt)("p",null,"Also, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CPU Suppress")," feature allows you to configure the CPU utilization threshold in a fine-grained manner.\nThe following table describes the parameters."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Data type"),(0,o.kt)("th",{parentName:"tr",align:null},"Valid value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"enable"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true; false"),(0,o.kt)("td",{parentName:"tr",align:null},"true: enables the elastic resource limit feature; false: disables the elastic resource limit feature.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cpuSuppressThresholdPercent"),(0,o.kt)("td",{parentName:"tr",align:null},"Int"),(0,o.kt)("td",{parentName:"tr",align:null},"0~100"),(0,o.kt)("td",{parentName:"tr",align:null},"The CPU utilization threshold of the node. Unit: %. Default value: 65.")))),(0,o.kt)("h2",{id:"use-cpu-suppress"},"Use CPU Suppress"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a configmap.yaml file based on the following ConfigMap content:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  # Enable the elastic resource limit feature. \n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": true   \n      }\n    }\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Run the following command to update the ConfigMap.\nTo avoid changing other settings in the ConfigMap, we commend that you run the kubectl patch command to update the ConfigMap.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch cm -n koordinator-system slo-controller-config --patch "$(cat configmap.yaml)"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Run the following command to query the CPU cores that are allocated to the BE pods on the node:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /sys/fs/cgroup/cpuset/kubepods.slice/kubepods-besteffort.slice/cpuset.cpus\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"10-25,35-51,62-77,87-103 \n")),(0,o.kt)("p",null,"The output shows that the following CPU cores are allocated to the BE pods on the node: 10-25, 35-51, 62-77, and 87-103,\nwhich will be changed dynamically according to the load of latency-sensitve pods."))}h.isMDXComponent=!0},8545:function(e,t,n){t.Z=n.p+"assets/images/cpu-suppress-demo-cb563497d58bcee0e9b38996fc9e4f17.svg"}}]);