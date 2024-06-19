"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,m=u["".concat(d,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={},l="Load Aware Descheduling",i={unversionedId:"user-manuals/load-aware-descheduling",id:"version-v1.4/user-manuals/load-aware-descheduling",title:"Load Aware Descheduling",description:"The load-aware scheduling supported in the scheduler can select nodes with lower loads to run new Pods during scheduling, but as time, cluster environment changes, and changes in traffic/requests faced by workloads, the utilization of nodes will change dynamically Changes in the cluster will break the original load balance between nodes in the cluster, and even extreme load imbalance may occur, affecting the runtime quality of the workload.",source:"@site/versioned_docs/version-v1.4/user-manuals/load-aware-descheduling.md",sourceDirName:"user-manuals",slug:"/user-manuals/load-aware-descheduling",permalink:"/docs/v1.4/user-manuals/load-aware-descheduling",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/load-aware-descheduling.md",tags:[],version:"v1.4",lastUpdatedBy:"wangjianyu",lastUpdatedAt:1705567859,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Load Aware Scheduling",permalink:"/docs/v1.4/user-manuals/load-aware-scheduling"},next:{title:"CPU Orchestration",permalink:"/docs/v1.4/user-manuals/fine-grained-cpu-orchestration"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Global Configuration via plugin args",id:"global-configuration-via-plugin-args",level:3},{value:"Use Load Aware Descheduling",id:"use-load-aware-descheduling",level:2}],c={toc:s},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load-aware-descheduling"},"Load Aware Descheduling"),(0,o.kt)("p",null,"The load-aware scheduling supported in the scheduler can select nodes with lower loads to run new Pods during scheduling, but as time, cluster environment changes, and changes in traffic/requests faced by workloads, the utilization of nodes will change dynamically Changes in the cluster will break the original load balance between nodes in the cluster, and even extreme load imbalance may occur, affecting the runtime quality of the workload."),(0,o.kt)("p",null,"koord-descheduler perceives changes in the load of nodes in the cluster, automatically optimizes nodes that exceed the safety load to prevents extreme load imbalance."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The LowNodeLoad plugin in the koord-descheduler is responsible for sensing the load of the node, and reducing the load hotspot by evict/migrate Pod. The ",(0,o.kt)("inlineCode",{parentName:"p"},"LowNodeLoad")," plugin is different from the Kubernetes native descheduler plugin LowNodeUtilization in that ",(0,o.kt)("inlineCode",{parentName:"p"},"LowNodeLoad")," decides to deschedule based on the actual utilization of nodes, while LowNodeUtilization decides to deschedule based on the resource allocation."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LowNodeLoad")," plugin has two most important parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"highThresholds")," defines the target usage threshold of resources. The Pods on nodes exceeding this threshold will be evicted/migrated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lowThresholds")," defines the low usage threshold of resources. The Pods on nodes below this threshold will not be evicted/migrated.")),(0,o.kt)("p",null,"Take the following figure as an example, ",(0,o.kt)("inlineCode",{parentName:"p"},"lowThresholds")," is 45%, ",(0,o.kt)("inlineCode",{parentName:"p"},"highThresholds")," is 70%, we can classify nodes into three categories:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Idle Node. Nodes with resource utilization below lowThresholds(45%);"),(0,o.kt)("li",{parentName:"ol"},"Normal Node. For nodes whose resource utilization is higher than lowThresholds but lower than highThresholds(70%), this load water level range is a reasonable range we expect"),(0,o.kt)("li",{parentName:"ol"},"Hotspot Node. If the node resource utilization rate is higher than highThresholds, the node will be judged as unsafe and belongs to the hotspot node, and some pods should be expelled to reduce the load level so that it does not exceed 70%.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(8609).Z,width:"2828",height:"926"})),(0,o.kt)("p",null,"After identifying which nodes are hotspots, descheduler will perform a eviction/migration operation to evict some Pods from hotspot nodes to idle nodes. If the number of ",(0,o.kt)("inlineCode",{parentName:"p"},"Idle Node`````` is 0 or the number of "),"Hotspot Node`````` is 0, the descheduler does nothing."),(0,o.kt)("p",null,"If the total number of idle nodes in a cluster is not many, descheduling will be terminated. This can be helpful in large clusters where some nodes may be underutilized frequently or for short periods of time. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"numberOfNodes")," is set to zero. This capability can be enabled by setting the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"numberOfNodes"),".\nBefore migration, descheduler will calculate the actual free capacity to ensure that the sum of the actual utilization of the Pods to be migrated does not exceed the total free capacity in the cluster. These actual free capacities come from idle nodes, and the actual free capacity of an idle node = ",(0,o.kt)("inlineCode",{parentName:"p"},"(highThresholds - current load of the node) * total capacity of the node"),". Suppose the load level of node A is 20%, the highThresholds is 70%, and the total CPU of node A is 96C, then ",(0,o.kt)("inlineCode",{parentName:"p"},"(70%-20%) * 96 = 48C"),", and this 48C is the free capacity that can be carried."),(0,o.kt)("p",null,"In addition, when migrating hotspot nodes, the Pods on the nodes will be filtered. Currently, descheduler supports multiple filtering parameters, which can avoid migration and expulsion of very important Pods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Filter by namespace. Can be configured to filter only certain namespaces or filter out certain namespaces"),(0,o.kt)("li",{parentName:"ul"},"Filter by pod selector. Pods can be filtered out through the label selector, or Pods with certain Labels can be excluded"),(0,o.kt)("li",{parentName:"ul"},"Configure ",(0,o.kt)("inlineCode",{parentName:"li"},"nodeFit")," to check whether the scheduling rules have candidate nodes. When enabled, descheduler checks whether there is a matching Node in the cluster according to the Node Affinity/Node Selector/Toleration corresponding to the candidate Pod. If not, the Pod will not be evicted for migration. If you set ",(0,o.kt)("inlineCode",{parentName:"li"},"nodeFit")," to false, the migration controller in the descheduler will complete the capacity reservation at this time, and start the migration after ensuring that there are resources.")),(0,o.kt)("p",null,"After the Pods are filtered out, these Pods are sorted from multiple dimensions such as QoSClass, Priority, actual usage, and creation time."),(0,o.kt)("p",null,"After pods have been filtered and sorted, the migration operation begins. Before migration, it will check whether the remaining free capacity is satisfied and whether the load the current node is higher than the target safety threshold. If one of these two conditions cannot be met, descheduling will stop. Every time a Pod is migrated, the remaining free capacity will be withheld, and the load of the current node will be adjusted at the same time until the remaining capacity is insufficient or the load reaches the safety threshold."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,o.kt)("li",{parentName:"ul"},"Koordinator >= 1.1.1")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,o.kt)("h3",{id:"global-configuration-via-plugin-args"},"Global Configuration via plugin args"),(0,o.kt)("p",null,"Load-aware descheduling is ",(0,o.kt)("em",{parentName:"p"},"Disabled")," by default. You can modify the ConfigMap ",(0,o.kt)("inlineCode",{parentName:"p"},"koord-descheduler-config")," to enable the plugin."),(0,o.kt)("p",null,"For users who need deep insight, please configure the rules of load-aware descheduling by modifying the ConfigMap\n",(0,o.kt)("inlineCode",{parentName:"p"},"koord-descheduler-config")," in the helm chart. New configurations will take effect after the koord-descheduler restarts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: koord-descheduler-config\n  ...\ndata:\n  koord-descheduler-config: |\n    apiVersion: descheduler/v1alpha2\n    kind: DeschedulerConfiguration\n    ...\n    # Execute the LowNodeLoad plugin every 60s\n    deschedulingInterval: 60s  \n    profiles:\n      - name: koord-descheduler\n        plugins:\n          deschedule:\n            disabled:\n              - name: "*"\n          balance:\n            enabled:\n              - name: LowNodeLoad  # Configure to enable the LowNodeLoad plugin\n          ....\n        pluginConfig:\n        - name: LowNodeLoad\n          args:\n            apiVersion: descheduler/v1alpha2\n            kind: LowNodeLoadArgs\n            evictableNamespaces:\n            # include and exclude are mutually exclusive, only one of them can be configured.\n            # include indicates that only the namespace configured below will be processed\n            # include:\n            #   - test-namespace\n              # exclude means to only process namespaces other than those configured below\n              exclude:\n                - "kube-system"\n                - "koordinator-system"\n            # lowThresholds defines the low usage threshold of resources\n            lowThresholds:\n              cpu: 20\n              memory: 30\n            # highThresholds defines the target usage threshold of resources\n            highThresholds:\n              cpu: 50\n              memory: 60\n        ....\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"paused"),(0,o.kt)("td",{parentName:"tr",align:null},"Paused indicates whether the LowNodeLoad should to work or not."),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dryRun"),(0,o.kt)("td",{parentName:"tr",align:null},"DryRun means only execute the entire deschedule logic but don't migrate Pod"),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"numberOfNodes"),(0,o.kt)("td",{parentName:"tr",align:null},"NumberOfNodes can be configured to activate the strategy only when the number of under utilized nodes are above the configured value. This could be helpful in large clusters where a few nodes could go under utilized frequently or for a short period of time. By default, NumberOfNodes is set to zero."),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"evictableNamespaces"),(0,o.kt)("td",{parentName:"tr",align:null},"Naming this one differently since namespaces are still considered while considering resources used by pods but then filtered out before eviction."),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nodeSelector"),(0,o.kt)("td",{parentName:"tr",align:null},"NodeSelector selects the nodes that matched labelSelector."),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"podSelectors"),(0,o.kt)("td",{parentName:"tr",align:null},"PodSelectors selects the pods that matched labelSelector."),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nodeFit"),(0,o.kt)("td",{parentName:"tr",align:null},"NodeFit if enabled, it will check whether the candidate Pods have suitable nodes, including NodeAffinity, TaintTolerance, and whether resources are sufficient. By default, NodeFit is set to true."),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"useDeviationThresholds"),(0,o.kt)("td",{parentName:"tr",align:null},"If UseDeviationThresholds is set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the thresholds are considered as percentage deviations from mean resource usage. ",(0,o.kt)("inlineCode",{parentName:"td"},"lowThresholds")," will be deducted from the mean among all nodes and ",(0,o.kt)("inlineCode",{parentName:"td"},"highThresholds")," will be added to the mean. A resource consumption above (resp. below) this window is considered as overutilization (resp. underutilization)."),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"highThresholds"),(0,o.kt)("td",{parentName:"tr",align:null},"HighThresholds defines the target usage threshold of resources"),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lowThresholds"),(0,o.kt)("td",{parentName:"tr",align:null},"LowThresholds defines the low usage threshold of resources"),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.1")))),(0,o.kt)("h2",{id:"use-load-aware-descheduling"},"Use Load Aware Descheduling"),(0,o.kt)("p",null,"The example cluster in this article has three 4-core 16GiB nodes."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy two ",(0,o.kt)("inlineCode",{parentName:"li"},"stress")," pod with the YAML file below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: stress-demo\n  namespace: default\n  labels:\n    app: stress-demo\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: stress-demo\n  template:\n    metadata:\n      name: stress-demo\n      labels:\n        app: stress-demo\n    spec:\n      containers:\n        - args:\n            - '--vm'\n            - '2'\n            - '--vm-bytes'\n            - '1600M'\n            - '-c'\n            - '2'\n            - '--vm-hang'\n            - '2'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources:\n            limits:\n              cpu: '2'\n              memory: 4Gi\n            requests:\n              cpu: '2'\n              memory: 4Gi\n      restartPolicy: Always\n      schedulerName: koord-scheduler # use the koord-scheduler\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f stress-demo.yaml\ndeployment.apps/stress-demo created\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Watch the pod status util they become running.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -o wide\nNAME                           READY   STATUS    RESTARTS   AGE     IP          NODE                   NOMINATED NODE   READINESS GATES\nstress-demo-7fdd89cc6b-lml7k   1/1     Running   0          21m     10.0.2.83   cn-beijing.10.0.2.54   <none>           <none>\nstress-demo-7fdd89cc6b-xr5dl   1/1     Running   0          4m40s   10.0.2.77   cn-beijing.10.0.2.53   <none>           <none>\n")),(0,o.kt)("p",null,"The stress pods are scheduled on ",(0,o.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.2.53")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.2.54"),"."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check the load of each node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl top node\nNAME                   CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%\ncn-beijing.10.0.2.53   3825m        98%    4051Mi          31%\ncn-beijing.10.0.2.54   2155m        55%    4500Mi          35%\ncn-beijing.10.0.2.58   182m         4%     1367Mi          10%\n")),(0,o.kt)("p",null,"In above order, ",(0,o.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.2.53")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.2.54")," have the highest load, while ",(0,o.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.2.58")," has the lowest load."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"koord-descheduler-config")," to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"LowNodeLoad")," plugin.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Observe the Pod changes and wait for the koord-descheduler to execute the eviction/migration operation."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -w\nNAME                           READY   STATUS              RESTARTS   AGE\nstress-demo-7fdd89cc6b-lml7k   1/1     Running             0          22m\nstress-demo-7fdd89cc6b-xr5dl   1/1     Running             0          5m45s\nstress-demo-7fdd89cc6b-xr5dl   1/1     Terminating         0          5m59s\nstress-demo-7fdd89cc6b-8k8wq   0/1     Pending             0          0s\nstress-demo-7fdd89cc6b-8k8wq   0/1     Pending             0          0s\nstress-demo-7fdd89cc6b-8k8wq   0/1     ContainerCreating   0          0s\nstress-demo-7fdd89cc6b-8k8wq   0/1     ContainerCreating   0          1s\nstress-demo-7fdd89cc6b-8k8wq   1/1     Running             0          3s\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Observe the Event, you can see the following migration records")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get event |grep stress-demo-7fdd89cc6b-xr5dl\n74s         Normal   Evicting             podmigrationjob/e54863dc-b651-47e3-9ffd-08b6b4ff64d5   Pod "default/stress-demo-7fdd89cc6b-xr5dl" evicted from node "cn-beijing.10.0.2.53" by the reason "node is overutilized, cpu usage(56.13%)>threshold(50.00%)"\n41s         Normal   EvictComplete        podmigrationjob/e54863dc-b651-47e3-9ffd-08b6b4ff64d5   Pod "default/stress-demo-7fdd89cc6b-xr5dl" has been evicted\n7m12s       Normal   Scheduled            pod/stress-demo-7fdd89cc6b-xr5dl                       Successfully assigned default/stress-demo-7fdd89cc6b-xr5dl to cn-beijing.10.0.2.53\n7m12s       Normal   AllocIPSucceed       pod/stress-demo-7fdd89cc6b-xr5dl                       Alloc IP 10.0.2.77/24\n7m12s       Normal   Pulling              pod/stress-demo-7fdd89cc6b-xr5dl                       Pulling image "polinux/stress"\n6m59s       Normal   Pulled               pod/stress-demo-7fdd89cc6b-xr5dl                       Successfully pulled image "polinux/stress" in 12.685405843s\n6m59s       Normal   Created              pod/stress-demo-7fdd89cc6b-xr5dl                       Created container stress\n6m59s       Normal   Started              pod/stress-demo-7fdd89cc6b-xr5dl                       Started container stress\n74s         Normal   Descheduled          pod/stress-demo-7fdd89cc6b-xr5dl                       Pod evicted from node "cn-beijing.10.0.2.53" by the reason "node is overutilized, cpu usage(56.13%)>threshold(50.00%)"\n73s         Normal   Killing              pod/stress-demo-7fdd89cc6b-xr5dl                       Stopping container stress\n7m13s       Normal   SuccessfulCreate     replicaset/stress-demo-7fdd89cc6b                      Created pod: stress-demo-7fdd89cc6b-xr5dl\n')))}h.isMDXComponent=!0},8609:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/low-node-load-3482df7bbffd96dc550f617ed99ff389.png"}}]);