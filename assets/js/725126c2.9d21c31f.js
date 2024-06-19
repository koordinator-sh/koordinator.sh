"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[3130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Eviction Strategy base on CPU Satisfaction",s={unversionedId:"user-manuals/cpu-evict",id:"version-v1.5/user-manuals/cpu-evict",title:"Eviction Strategy base on CPU Satisfaction",description:"Introduction",source:"@site/versioned_docs/version-v1.5/user-manuals/cpu-evict.md",sourceDirName:"user-manuals",slug:"/user-manuals/cpu-evict",permalink:"/docs/user-manuals/cpu-evict",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/cpu-evict.md",tags:[],version:"v1.5",lastUpdatedBy:"Frame",lastUpdatedAt:1718775971,formattedLastUpdatedAt:"Jun 19, 2024",frontMatter:{},sidebar:"docs",previous:{title:"CPU Utilization Threshold Management",permalink:"/docs/user-manuals/cpu-suppress"},next:{title:"Eviction Strategy base on Memory Usage",permalink:"/docs/user-manuals/memory-evict"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Use Eviction Strategy base on CPU Satisfaction",id:"use-eviction-strategy-base-on-cpu-satisfaction",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eviction-strategy-base-on-cpu-satisfaction"},"Eviction Strategy base on CPU Satisfaction"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Koordinator supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-manuals/cpu-suppress"},"CPU Suppress")," strategy, which is used for limiting the available\nCPU Cores of low-priority Pods (BE) according to the usage of high-priority Pods (LS) under during co-location. When the\nresource usage of LS Pods increases, ",(0,r.kt)("inlineCode",{parentName:"p"},"Koordlet")," will reduce the CPU cores that can be used by BE Pods. However, when the\nLS Pod utilization increases suddenly, large number of BE Pods could be suppressed on small number of CPUs, resulting in\nthe low resource satisfaction of BE pods, moreover, there might be some additional competition on kernel resources. "),(0,r.kt)("p",null,"In fact, most BE pods are batch computing type, which have well failover abilities, and the eviction is acceptable for\nthem since they can retry with better resource quality on other nodes. ",(0,r.kt)("inlineCode",{parentName:"p"},"Koordlet")," provides an eviction strategy based\non CPU resource satisfaction. When the utilization and resource satisfaction exceed the threshold at the same time,\npods with lower priority and higher CPU utilization will be evicted first until the CPU satisfaction has returned\nabove the threshold."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(6226).Z,width:"1082",height:"281"})),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),".\nBatch resource overcommitment and cpu suppress strategy must be enabled first, see this ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-manuals/cpu-suppress"},"manual"),"\nfor more details."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Version Requirement"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2265v1.18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"koordinator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2265v0.3.0")))),(0,r.kt)("p",null,"The eviction strategy is provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"Koordlet"),", which is disabled by default in feature-gate.\nPlease make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"BECPUEvict=true")," field has been added in the ",(0,r.kt)("inlineCode",{parentName:"p"},"-feature-gates")," arguments of ",(0,r.kt)("inlineCode",{parentName:"p"},"Koordlet"),"\nas the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/blob/main/versions/v1.2.0/templates/koordlet.yaml#L36"},"example"),"\u3002"),(0,r.kt)("h2",{id:"use-eviction-strategy-base-on-cpu-satisfaction"},"Use Eviction Strategy base on CPU Satisfaction"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a configmap.yaml file based on the following ConfigMap content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'#ConfigMap slo-controller-config example\u3002\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config # name should be set as the configuration of koord-manager, e.g. ack-slo-config \n  namespace: koordinator-system # namespace should be set as the configuration of installation, e.g. kube-system\ndata:\n  # enable the eviction strategy base on CPU satisfaction\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": true,\n        "cpuEvictBESatisfactionLowerPercent": 60,\n        "cpuEvictBESatisfactionUpperPercent": 80,\n        "cpuEvictBEUsageThresholdPercent": 90,\n        "CPUEvictTimeWindowSeconds": 60\n      }\n    }\n')),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enable")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true; false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true\uff1aenable the eviction.; false(default): disable the eviction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cpuEvictBESatisfactionLowerPercent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0~60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"eviction threshold percent of BE CPU satisfaction. BE pods will be evicted if the satisfaction less than the threshold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cpuEvictBESatisfactionUpperPercent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cpuEvictBESatisfactionLowerPercent~100"),(0,r.kt)("td",{parentName:"tr",align:"left"},"threshold percent of BE CPU satisfaction. eviction will be stopped if the satisfaction greater than the threshold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cpuEvictBEUsageThresholdPercent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0~100"),(0,r.kt)("td",{parentName:"tr",align:"left"},"threshold of BE CPU utilization. Pods will be evicted if the BE utilization under the suppressed CPU greater than the threshold. default value is 90.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cpuEvictTimeWindowSeconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},">=2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"time window by seconds during calculating the CPU satisfaction and BE CPU utilization."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check whether a ConfigMap named ",(0,r.kt)("inlineCode",{parentName:"p"},"slo-controller-config")," exists in the ",(0,r.kt)("inlineCode",{parentName:"p"},"koordinator-system")," namespace."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a ConfigMap named  ",(0,r.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"  exists, we commend that you run the kubectl patch command to update the ConfigMap. This avoids changing other settings in the ConfigMap."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch cm -n koordinator-system slo-controller-config --patch "$(cat configmap.yaml)"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If no ConfigMap named ",(0,r.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"  exists, run the kubectl patch command to create a ConfigMap named ack-slo-config:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f configmap.yaml\n")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a file named be-pod-demo.yaml based on the following YAML content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: be-pod-demo\n  labels:\n    koordinator.sh/qosClass: 'BE' # set Pod QoS as BE\nspec:\n  containers:\n    - args:\n        - '-c'\n        - '4'\n        - '--vm'\n        - '1'\n      command:\n        - stress\n      image: polinux/stress\n      imagePullPolicy: Always\n      name: stress\n      resources:\n        limits:\n          kubernetes.io/batch-cpu: 4k\n          kubernetes.io/batch-memory: 4Gi\n        requests:\n          kubernetes.io/batch-cpu: 4k\n          kubernetes.io/batch-memory: 4Gi\n  restartPolicy: Always\n  schedulerName: default-scheduler\n  # priorityClassName is required when ColocationProfile enabled (default).\n  priorityClassName: koord-batch\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to deploy the be-pod-demo pod in the cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f be-pod-demo.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to check the be-pod-demo pod in Running state:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod be-pod-demo\nNAME          READY   STATUS    RESTARTS   AGE\nbe-pod-demo   1/1     Running   0          7s\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command through ",(0,r.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/stress"},"stress tool"),"\nmake sure the memory usage of node is above the threshold config, and the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"--cpu"),"\nmeans the process will consume 10 cores, this should be adjusted according to the node capacity."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ stress --cpu 1 --vm 1 --vm-bytes 10G --vm-keep\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the running state of be-pod-demo, then you can find the be-pod-demo pod is not exist,\nand the eviction information can be found in events."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod be-pod-demo\nError from server (NotFound): pods "be-pod-demo" not found\n\n$ kubectl get event\nLAST SEEN   TYPE      REASON            OBJECT              MESSAGE\n44s         Normal    Killing           pod/be-pod-demo                     Stopping container stress\n44s         Warning   evictPodSuccess   ${your-pod-object}   evict Pod:be-pod-demo, reason: EvictPodByBECPUSatisfaction, message: killAndEvictBEPodsRelease for node(${your-node-id}), need realase CPU : 1200\n')))))}m.isMDXComponent=!0},6226:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cpu-evict-2b032557e0eb8d8c0ef853a69c03e592.svg"}}]);