"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[4453],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=i.createContext({}),s=function(e){var t=i.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(o),h=n,u=p["".concat(d,".").concat(h)]||p[h]||m[h]||r;return o?i.createElement(u,a(a({ref:t},c),{},{components:o})):i.createElement(u,a({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<r;s++)a[s]=o[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8165:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=o(7462),n=(o(7294),o(3905));const r={},a="Node Prediction",l={unversionedId:"designs/node-prediction",id:"version-v1.4/designs/node-prediction",title:"Node Prediction",description:"Summary",source:"@site/versioned_docs/version-v1.4/designs/node-prediction.md",sourceDirName:"designs",slug:"/designs/node-prediction",permalink:"/docs/v1.4/designs/node-prediction",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/node-prediction.md",tags:[],version:"v1.4",lastUpdatedBy:"wangjianyu",lastUpdatedAt:1705567859,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{},sidebar:"docs",previous:{title:"NRI Mode Resource Management",permalink:"/docs/v1.4/designs/nri-mode-resource-management"},next:{title:"Enhanced Scheduler Extension",permalink:"/docs/v1.4/designs/enhanced-scheduler-extension"}},d={},s=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals/Future Work",id:"non-goalsfuture-work",level:3},{value:"User Stories",id:"user-stories",level:2},{value:"Story 1",id:"story-1",level:3},{value:"Story 2",id:"story-2",level:3},{value:"Design",id:"design",level:2},{value:"Design Principles",id:"design-principles",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Workflow",id:"workflow",level:4},{value:"Scheduling Optimization",id:"scheduling-optimization",level:4},{value:"API",id:"api",level:3},{value:"Node Prediction",id:"node-prediction-1",level:4},{value:"Predict Policy",id:"predict-policy",level:5},{value:"Predicted Result",id:"predicted-result",level:5},{value:"Mid Overcommitment",id:"mid-overcommitment",level:4},{value:"Colocation Strategy",id:"colocation-strategy",level:5},{value:"Extended Resources",id:"extended-resources",level:5},{value:"Theoretical Model",id:"theoretical-model",level:3},{value:"Node Peak Prediction",id:"node-peak-prediction",level:4},{value:"N-sigma Prediction",id:"n-sigma-prediction",level:4},{value:"Mid-tier Overcommitment",id:"mid-tier-overcommitment",level:4},{value:"Alternatives",id:"alternatives",level:2},{value:"Peak Prediction Models",id:"peak-prediction-models",level:3},{value:"References",id:"references",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"node-prediction"},"Node Prediction"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"node prediction")," is proposed to both improve the node utilization and avoid overloading. By profiling the\ntendency of the node metrics, we can estimate the peak usage and implement more efficient over-commitment policy."),(0,n.kt)("h2",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"Scheduling pods with setting appropriate resource requirements is truly hard to follow. Underestimating requests can\nbring performance issues. However, overvaluing requests is likely to cause resource waste and low efficiency. One\ncommon approach is using Vertical Pod Autoscaler (VPA) to autopilot the resource requirements for the pods of the same\nworkload. The VPA optimizes the resource requirements of the pod according to the pod metrics of the same workload. It\nestimates the pod usage and specifies proper resource requirements. It works well when we want to optimize the resource\nrequirements of workloads. However, most VPA approaches try to abandon the time series attribute from the pod metrics\nand generate a relatively static requests/limits that should guarantee to make no bad ignoring the timing. It leaves\nthe usage-to-limit gap, i.e. the gap between the recommended pod request with the real-time pod usage, and the\nwell-known pooling effect, i.e. the gap between the sum of the pod usages with the node usage. Inspired by\n",(0,n.kt)("a",{parentName:"p",href:"#references"},"Google's work")," in the EuroSys'21, we propose the node prediction in Koordinator to conquer these two\ngaps."),(0,n.kt)("h3",{id:"goals"},"Goals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Define the node prediction API."),(0,n.kt)("li",{parentName:"ul"},"Propose an online history-based-optimized (HBO) prediction model."),(0,n.kt)("li",{parentName:"ul"},"Clarify how the Mid-tier resources are calculated with the prediction.")),(0,n.kt)("h3",{id:"non-goalsfuture-work"},"Non-Goals/Future Work"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Propose a time-series-forecasting-based or offline prediction model.")),(0,n.kt)("h2",{id:"user-stories"},"User Stories"),(0,n.kt)("h3",{id:"story-1"},"Story 1"),(0,n.kt)("p",null,"As a cluster administrator, there are many web service pods allocating almost node resources. Whereas, the node\nutilization is low since most allocated resources are not actually used. To improve node utilization, I want to reclaim\nthe unused resources to submit some low-priority online-service pods and Flink jobs. However, I am concerned with the\nrisks of over-utilization bringing machine overload which may cause the performance degradation and hurt the pod QoS."),(0,n.kt)("h3",{id:"story-2"},"Story 2"),(0,n.kt)("p",null,"As a Kubernetes developer, I want to support the long-term load balancing in the scheduler. Thus, I need the information\nthat which nodes should be idle for a long time."),(0,n.kt)("h2",{id:"design"},"Design"),(0,n.kt)("h3",{id:"design-principles"},"Design Principles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The node prediction is low-cost and can be implemented in the Koordlet."),(0,n.kt)("li",{parentName:"ul"},"The node prediction is pluggable. Users can replace the default model to customize the prediction.")),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The node prediction is implemented mainly in the Koordlet and Koord-Manager. The architecture is as below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(9765).Z,width:"734",height:"361"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Koordlet: The agent runs on the node. It implements the metrics collection, metrics storage, and predict server.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Metrics Advisor: It collects the cpu/memory usage of the node and running pods. It stores the collected metrics in the Metric Cache."),(0,n.kt)("li",{parentName:"ul"},"Metric Cache: It stores the node and pod metrics in a TSDB, which allows other modules to query the metrics later."),(0,n.kt)("li",{parentName:"ul"},"Predict Server: With the node and pod metrics retrieved from the Metric Cache, it calculates and checkpoints the predicted result based on the prediction model."),(0,n.kt)("li",{parentName:"ul"},"States Informer: It maintains the metadata of the node and the pods. It also reports the latest prediction periodically to the kube-apiserver."))),(0,n.kt)("li",{parentName:"ul"},"Koord-Manager: The controller runs on a master node.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Configuration delivery: It maintains the prediction and colocation strategies and distributes the node strategy onto the NodeMetric."),(0,n.kt)("li",{parentName:"ul"},"Resource Calculator: It fetches the node prediction result, and calculates the resource allocatable of the reclaimed resources (i.e. Mid-tier resource)."))),(0,n.kt)("li",{parentName:"ul"},"Koord-Scheduler: It schedules the pod with different priority bands (e.g. Prod, Mid, Batch). It can enable load-aware scheduling to balance the over-committed nodes' utilization.")),(0,n.kt)("h4",{id:"workflow"},"Workflow"),(0,n.kt)("p",null,"In the koordlet, stages to update the node prediction are as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Histogram initialization: The predict server initializes a set of histograms for CPU and memory. For implementing ",(0,n.kt)("inlineCode",{parentName:"li"},"N-Sigma_v1"),", it initializes decayed histograms only for the node and priority classes. While implementing ",(0,n.kt)("inlineCode",{parentName:"li"},"N-Sigma_v2"),", it initializes histograms both for the node and every running pod."),(0,n.kt)("li",{parentName:"ol"},"Metrics collection: The metrics advisor collects the usage statistics of node and pods and stores them as metric points into the metric cache every CollectInterval (e.g. 1s)."),(0,n.kt)("li",{parentName:"ol"},"Histogram updating: The predict server fetches the node metrics and pod metrics of latest HistogramUpdateInterval (e.g. 30s). Then it uses the aggregated result to update the decayed histograms."),(0,n.kt)("li",{parentName:"ol"},"Periodical reporting: The states informer fetches node metrics and the last histograms for the node and priority classes every ReportingInterval (e.g. 60s). Then it reports the complete NodeMetric status with last node prediction info to the kube-apiserver."),(0,n.kt)("li",{parentName:"ol"},"Fast reporting: The states informer fetches the last histograms every CheckPredictionInterval (e.g. 20s). It checks if the predicted result is too small or too larger than the last updated prediction exceeding the ResourceDiffThreshold (e.g. 5%), or the updated duration is longer than ForceUpdateInterval (e.g. 600s). If the check result is true, It updates the latest node prediction to the kube-apiserver.")),(0,n.kt)("p",null,"In the koord-manager, stages to update the Mid-tier resources allocatable are as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"NodeMetric lifecycle management: The koord-manager list-watches the Node and the ConfigMap slo-controller-config, and maintains the lifecycle of the NodeMetric CR. Once the colocation strategy in the slo-controller-config updated, the koord-manager parses the config data and updates the node prediction policy and mid colocation policy into the NodeMetric.Spec."),(0,n.kt)("li",{parentName:"ol"},"Mid resource updating: The koord-manager list-watches the NodeMetric. Once the NodeMetric status is updated, the koord-manager gets the latest node metrics and node prediction, and calculates the Mid allocatable resources based on the Mid over-commitment formula. Finally, it updates the Mid allocatable resources into the Node status as the extended resources (",(0,n.kt)("inlineCode",{parentName:"li"},"kubernetes.io/mid-cpu"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"kubernetes.io/mid-memory"),").")),(0,n.kt)("h4",{id:"scheduling-optimization"},"Scheduling Optimization"),(0,n.kt)("p",null,'The results of the node prediction on the NodeMetric, the Mid extended resources on the Node and the scheduling Pod\nin the scheduler are updated in different time. It is inevitable to find that the scheduler schedules a pod with an\nolder version of the node prediction, which may cause the schedule result "lagged".'),(0,n.kt)("p",null,"To relief the lagged prediction, the koordlet and koord-manager try both updating earlier when the\nprediction/NodeMetric differs from the previous result than a threshold and set a resource buffer which should\ntolerant most of the result changes between synchronizations."),(0,n.kt)("p",null,"For the worst case in which the prediction could be lagged too much (e.g. 1 hour), we can maintain a lower bound of\nthe real Mid allocatable resources inside the scheduler. This part is not planned in the first version of the Mid-tier\nover-commitment."),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("h4",{id:"node-prediction-1"},"Node Prediction"),(0,n.kt)("h5",{id:"predict-policy"},"Predict Policy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// ColocationStrategy defines the colocation strategy in slo-controller-config ConfigMap.\ntype ColocationStrategy struct {\n    // ...\n    NodePredictPolicy *slov1alpha1.PredictPolicy `json:"nodePredictPolicy,omitempty"`\n}\n\ntype NodeMetricSpec struct {\n    // ...\n    PredictPolicy *PredictPolicy `json:"predictPolicy,omitempty"`\n}\n\n// PredictPolicy defines the policy for the node prediction.\ntype PredictPolicy struct {\n    ResourceDiffThresholdPercent *int64 `json:"resourceDiffThresholdPercent,omitempty"`\n    ColdStartPeriodSeconds       *int64 `json:"coldStartPeriodSeconds,omitempty"`\n}\n')),(0,n.kt)("h5",{id:"predicted-result"},"Predicted Result"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'type NodeMetricStatus struct {\n    // ...\n    // ProdReclaimableMetric is the estimated reclaimable resources for the Prod-type pods.\n    ProdReclaimableMetric *ReclaimableMetric `json:"prodReclaimableMetric,omitempty"`\n}\n\ntype ReclaimableMetric struct {\n    // Resource is the resource usage of the prediction.\n    Resource ResourceMap `json:"resource,omitempty"`\n}\n')),(0,n.kt)("h4",{id:"mid-overcommitment"},"Mid Overcommitment"),(0,n.kt)("h5",{id:"colocation-strategy"},"Colocation Strategy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'type ColocationStrategy struct {\n    // ...\n    // MidCPUThresholdPercent defines the maximum percentage of the Mid-tier cpu resource dividing the node allocatable.\n    // MidCPUAllocatable <= NodeCPUAllocatable * MidCPUThresholdPercent / 100.\n    MidCPUThresholdPercent *int64 `json:"midCPUThresholdPercent,omitempty" validate:"omitempty,min=0,max=100"`\n    // MidMemoryThresholdPercent defines the maximum percentage of the Mid-tier memory resource dividing the node allocatable.\n    // MidMemoryAllocatable <= NodeMemoryAllocatable * MidMemoryThresholdPercent / 100.\n    MidMemoryThresholdPercent *int64 `json:"midMemoryThresholdPercent,omitempty" validate:"omitempty,min=0,max=100"`\n}\n')),(0,n.kt)("h5",{id:"extended-resources"},"Extended Resources"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Node\nmetadata:\n  name: test-node\nstatus:\n  allocatable:\n    cpu: '32'\n    memory: 129636240Ki\n    pods: '213'\n    kubernetes.io/mid-cpu: '16000' # allocatable cpu milli-cores for Mid-tier pods\n    kubernetes.io/mid-memory: 64818120Ki # allocatable memory bytes for Mid-tier pods\n  capacity:\n    cpu: '32'\n    memory: 129636240Ki\n    pods: '213'\n    kubernetes.io/mid-cpu: '16000'\n    kubernetes.io/mid-memory: 64818120Ki\n")),(0,n.kt)("h3",{id:"theoretical-model"},"Theoretical Model"),(0,n.kt)("h4",{id:"node-peak-prediction"},"Node Peak Prediction"),(0,n.kt)("p",null,"Before elaborating the peak prediction algorithm, let's formalize the node peak prediction problem."),(0,n.kt)("p",null,"Let's denote the usage of a Pod ",(0,n.kt)("inlineCode",{parentName:"p"},"p")," at the time ",(0,n.kt)("inlineCode",{parentName:"p"},"t")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"U(p, t)"),"."),(0,n.kt)("p",null,"Then the usage of a Node ",(0,n.kt)("inlineCode",{parentName:"p"},"M")," which schedules a set of Pods is ",(0,n.kt)("inlineCode",{parentName:"p"},"MU(Pods, t) = sum[p in Pods](U(p, t))"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that the non-Pod usage of the node can be regarded as the usage of a special pod ",(0,n.kt)("inlineCode",{parentName:"p"},"S"),".")),(0,n.kt)("p",null,"When we want to predict the node peak at the time ",(0,n.kt)("inlineCode",{parentName:"p"},"T"),", we are calculating\n",(0,n.kt)("inlineCode",{parentName:"p"},"Peak(Pods, T) = max[t >= T](sum[p in Pods](U(p, t)))"),"."),(0,n.kt)("p",null,"The predicted peak ",(0,n.kt)("inlineCode",{parentName:"p"},"Peak(Pods, T)")," is our node prediction result at ",(0,n.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,n.kt)("h4",{id:"n-sigma-prediction"},"N-sigma Prediction"),(0,n.kt)("p",null,"There are several ",(0,n.kt)("a",{parentName:"p",href:"#alternatives"},"statistical peak prediction models")," which are practical to implement in the online\nscheduler. ",(0,n.kt)("a",{parentName:"p",href:"#references"},(0,n.kt)("em",{parentName:"a"},"N-sigma"))," is the picked peak prediction model in the current implementation. It assumes the\ntiming node metrics follow the Gaussian distribution, which allows us to estimate the node peak with the mean and\nstandard deviation (stdev):"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Peak_N-Sigma_v1(Pods, T) = mean[T0 <= t <= T](MU(Pods, t)) + N * stdev[T0 <= t <= T](MU(Pods, t))")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Peak_N-Sigma_v1")," is the predicted node peak. It is implemented as the first version of node prediction, which is\ncalculated based on node-level metrics."),(0,n.kt)("p",null,"Moreover, we can calculate with the pods' metrics:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Peak_Pods-N-Sigma'(Pods, T) = sum[p in Pods](mean[T0 <= t <= T](U(p, t)) + N * stdev[T0 <= t <= T](U(p, t)))")),(0,n.kt)("p",null,"A more conservative is derived from their maximal. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Peak_N-sigma_v2")," is the second version of node prediction,\nwhich also considers the pod-level metrics."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Peak_N-Sigma_v2(Pods, T) = max(Peak_N-Sigma_v1(Pods, T), Peak_Pods-N-Sigma(Pods, T))"),"."),(0,n.kt)("h4",{id:"mid-tier-overcommitment"},"Mid-tier Overcommitment"),(0,n.kt)("p",null,"In the first version, the Mid-tier resource contains the reclaimable resources which are probably unused in the\nlong-term by the high-priority (i.e. Prod) pods.\nThe resource calculation for the Mid-tier resources can be described as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Allocatable[Mid] := min(Reclaimable[Mid], NodeAllocatable * thresholdRatio)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Reclaimable[Mid] := max(0, reclaimRatio * Allocated[Prod] - Peak[Prod])"),". The peak prediction model is used for estimating the future usage of the running Prod pods. The Mid pods can allocate a proportion of reclaimed resources from running Prod pods."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NodeAllocatable * thresholdRatio")," is the maximal co-located Mid-tier resource setting from a ratio of the node allocatable.")),(0,n.kt)("p",null,"In next versions, the Mid-tier resource is planned to mix with the default node allocatable (i.e. the Prod allocatable),\nwhich means a Mid pod can allocate the unallocated node allocatable resource, and an idle node is able to schedule Mid\npods. The Prod pods can preempt the Mid pods when the mixed allocatable is exhausted by the Mid pods, so that the\nProd-tier resource is still more stable and guaranteed than the Mid-tier.\nThen the resource calculation for the mixed Mid-tier resources can be described as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Allocatable[Mid]' := min(Reclaimable[Mid], NodeAllocatable * thresholdRatio) + Unallocated[Mid]\nUnallocated[Mid] = max(NodeAllocatable - Allocated[Prod], 0)\n")),(0,n.kt)("h2",{id:"alternatives"},"Alternatives"),(0,n.kt)("h3",{id:"peak-prediction-models"},"Peak Prediction Models"),(0,n.kt)("p",null,"There are several different peak prediction and time series forecasting models which can estimate the future peak\nbased on the historical node metrics, including statistical methods and machine learning methods. In this proposal,\nstatistical peak prediction models are preferred since they are practical to implement in the online scheduling system,\nhave less overhead of metrics collection than the ML approaches, and more simple to analyze and debug."),(0,n.kt)("p",null,"Here are some common statistical peak prediction models:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#references"},"Borg-default"))),(0,n.kt)("p",null,"Borg-default simply over-commits the machine resources in a fixed rate ",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", which means the peak usage is regarded as\nthe result of the requests dividing ",(0,n.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,n.kt)("p",null,"Let's denote the resource request of the Pod ",(0,n.kt)("inlineCode",{parentName:"p"},"p")," at the time ",(0,n.kt)("inlineCode",{parentName:"p"},"t")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"R(p, t)"),", where ",(0,n.kt)("inlineCode",{parentName:"p"},"R(p, t) = 0")," when ",(0,n.kt)("inlineCode",{parentName:"p"},"p")," is not\nrunning. Then we have,"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Peak_Borg-default(Pods, T) = 1/a * sum[p in Pods](R(p, T))"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"a = 1.1")," by default."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#references"},"Resource Central"))),(0,n.kt)("p",null,"Resource Central considers the peak of the machine as the sum of the peak of individual pods (or VMs). And a simple\npeak prediction of a pod is the percentile of the historical usages, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"percentile[t in [T-C, T]](U(p, t))"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Peak_ResourceCentral(Pods, T) = sum[p in Pods](percentile[t in [T-C, T]](U(p, t)))")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#references"},"Max"))),(0,n.kt)("p",null,"The Max prediction model does not use the historical metrics directly, but takes the maximal of any known peak results.\nIt gets the more conservative result than the input models. For example, we have a ",(0,n.kt)("inlineCode",{parentName:"p"},"Max_Borg-default_ResourceCentral"),"\nmodel calculated from the Borg-default and Resource Central models:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Peak_Max_Borg-default_ResourceCentral(Pods, T) = max(Peak_Borg-default(Pods, T), Peak_ResourceCentral(Pods, T))")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Vertical Pod Autoscaler: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler"},"https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler")),(0,n.kt)("li",{parentName:"ol"},'Bashir, Noman, et al. "Take it to the limit: peak prediction-driven resource overcommitment in datacenters." Proceedings of the Sixteenth European Conference on Computer Systems. 2021.'),(0,n.kt)("li",{parentName:"ol"},'Cortez, Eli, et al. "Resource central: Understanding and predicting workloads for improved resource management in large cloud platforms." Proceedings of the 26th Symposium on Operating Systems Principles. 2017.')))}m.isMDXComponent=!0},9765:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/node-prediction-d4858c8d7c31eae03583763d43178dbc.svg"}}]);