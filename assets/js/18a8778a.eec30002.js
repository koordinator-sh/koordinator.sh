"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,p=h["".concat(l,".").concat(m)]||h[m]||d[m]||a;return n?o.createElement(p,i(i({ref:t},u),{},{components:n})):o.createElement(p,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="SLO Configuration",s={unversionedId:"user-manuals/slo-config",id:"version-v1.3/user-manuals/slo-config",title:"SLO Configuration",description:"Introduction",source:"@site/versioned_docs/version-v1.3/user-manuals/slo-config.md",sourceDirName:"user-manuals",slug:"/user-manuals/slo-config",permalink:"/docs/user-manuals/slo-config",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/slo-config.md",tags:[],version:"v1.3",lastUpdatedBy:"saintube",lastUpdatedAt:1692186595,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Multi Hierarchy Elastic Quota Management",permalink:"/docs/user-manuals/multi-hierarchy-elastic-quota-management"},next:{title:"CPU Suppress",permalink:"/docs/user-manuals/cpu-suppress"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration Levels",id:"configuration-levels",level:3},{value:"NodeSLO",id:"nodeslo",level:3},{value:"Configurations",id:"configurations",level:2},{value:"Quick Start",id:"quick-start",level:2}],u={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slo-configuration"},"SLO Configuration"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Koordinator uses a ConfigMap to manage the SLO configurations. The ConfigMap is used by the slo-controller, whose name\nand namespace can be specified via the startup arguments of the koord-manager\n(",(0,r.kt)("inlineCode",{parentName:"p"},"koordinator-system/slo-controller-config")," by default). It has the following keys respectively:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"colocation-config"),": The configuration for colocation. For example, whether to enable the colocated batch resources or not, the colocated watermark."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resource-threshold-config"),": The configuration for threshold-based suppression or eviction. For example, the threshold for cpu suppression, the threshold for memory eviction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resource-qos-config"),": The configuration for QoS-based features. For example, Group Identity for BE pods, Memory QoS for LS pods, Last-Level-Cache partitioning for BE pods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cpu-burst-config"),": The configuration for the CPU Burst feature. For example, maximum burst ratio of the pod."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"system-config"),": The configuration for system-level settings. For example, the global minimum memory free factor (",(0,r.kt)("inlineCode",{parentName:"li"},"min_free_kbytes"),").")),(0,r.kt)("h3",{id:"configuration-levels"},"Configuration Levels"),(0,r.kt)("p",null,"Each config is defined in a pattern of both the cluster-level and the node-level."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type ColocationCfg struct {\n    ColocationStrategy `json:",inline"`\n    NodeConfigs        []NodeColocationCfg `json:"nodeConfigs,omitempty"`\n}\n\ntype ResourceQOSCfg struct {\n    ClusterStrategy *slov1alpha1.ResourceQOSStrategy `json:"clusterStrategy,omitempty"`\n    NodeStrategies  []NodeResourceQOSStrategy        `json:"nodeStrategies,omitempty"`\n}\n')),(0,r.kt)("p",null,"The cluster-level config is for setting the global configurations, while the node-level is for users to adjust the\nconfigurations of some nodes, especially for a gray-scale deployment."),(0,r.kt)("p",null,"Please note that most configured fields have default values inside the components (koordlet, koord-manager), so editing\nthe changed parameters is usually enough."),(0,r.kt)("h3",{id:"nodeslo"},"NodeSLO"),(0,r.kt)("p",null,"The data in SLO config is parsed by the koord-manager. The koord-manager checks if the config data is legal, and then\nupdates the parsed configs into NodeSLO objects for every node. If the parsing fails, the koord-manager records events\nto the ConfigMap object to warn the unmarshal errors. For the agent component koordlet, it watches the specifications\nin the NodeSLO and reconciles the node QoS features."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: slo.koordinator.sh/v1alpha1\nkind: NodeSLO\nmetadata:\n  name: test-node\nspec:\n  cpuBurstStrategy: {}\n  extensions: {}\n  resourceQOSStrategy: {}\n  systemStrategy: {}\n  # parsed from the `resource-threshold-config` data\n  resourceUsedThresholdWithBE:\n    cpuSuppressPolicy: cpuset\n    cpuSuppressThresholdPercent: 65\n    enable: true\n    memoryEvictThresholdPercent: 70\n\n")),(0,r.kt)("h2",{id:"configurations"},"Configurations"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Referred version: Koordinator v1.2")),(0,r.kt)("p",null,"The SLO Config template is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  # colocation-config is the configuration for colocation.\n  # Related features: Dynamic resource over-commitment, Load-aware scheduling, Load-aware descheduling.\n  # - enable: whether to enable the colocation. If false, the reclaimed resources of the node allocatable (e.g. `kubernetes.io/batch-cpu`) will be removed.\n  # - metricAggregateDurationSeconds: the aggregated duration of node metrics reporting.\n  # - metricReportIntervalSeconds: the reporting interval of the node metrics.\n  # - metricAggregatePolicy: policies of reporting node metrics in different durations.\n  # - cpuReclaimThresholdPercent: the reclaim threshold for calculating the reclaimed cpu resource. Basically, the reclaimed resource cannot reclaim the unused resources which are exceeding the threshold.\n  # - memoryReclaimThresholdPercent: the reclaim threshold for calculating the reclaimed memory resource. Basically, the reclaimed resource cannot reclaim the unused resources which are exceeding the threshold.\n  # - memoryCalculatePolicy: the policy for calculating the reclaimable memory resource. If set to `request`, only unallocated memory resource of high-priority pods are reclaimable, and no allocated memory can be reclaimed.\n  # - degradeTimeMinutes: the threshold duration to degrade the colocation for which the node metrics has not been updated.\n  # - updateTimeThresholdSeconds: the threshold duration to force updating the reclaimed resources with the latest calculated result.\n  # - resourceDiffThreshold: the threshold to update the reclaimed resources than which the calculated reclaimed resources is different from the current.\n  # - nodeConfigs: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  colocation-config: |\n    {\n      "enable": false,\n      "metricAggregateDurationSeconds": 300,\n      "metricReportIntervalSeconds": 60,\n      "metricAggregatePolicy": {\n        "durations": [\n          "5m",\n          "10m",\n          "15m"\n        ]\n      },\n      "cpuReclaimThresholdPercent": 60,\n      "memoryReclaimThresholdPercent": 65,\n      "memoryCalculatePolicy": "usage",\n      "degradeTimeMinutes": 15,\n      "updateTimeThresholdSeconds": 300,\n      "resourceDiffThreshold": 0.1,\n      "nodeConfigs": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "updateTimeThresholdSeconds": 360,\n          "resourceDiffThreshold": 0.2\n        }\n      ]\n    }\n  # The configuration for threshold-based strategies.\n  # Related features: BECPUSuppress, BEMemoryEvict, BECPUEvict.\n  # - clusterStrategy: the cluster-level configuration.\n  # - nodeStrategies: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  # - enable: whether to enable the threshold-based strategies or not. If false, all threshold-based strategies are disabled. If set to true, CPU Suppress and Memory Evict are enabled by default.\n  # - cpuSuppressThresholdPercent: the node cpu utilization threshold to suppress BE pods\' usage.\n  # - cpuSuppressPolicy: the policy of cpu suppression. If set to `cpuset`, the BE pods\' `cpuset.cpus` will be reconciled when suppression. If set to `cfsQuota`, the BE pods\' `cpu.cfs_quota_us` will be reconciled.\n  # - memoryEvictThresholdPercent: the node memory utilization threshold to evict BE pods.\n  # - memoryEvictLowerPercent: the node memory utilization threshold to stop the memory eviction. By default, `lowerPercent = thresholdPercent - 2`.\n  # - cpuEvictBESatisfactionLowerPercent: the cpu satisfaction threshold to start the cpu eviction (also require to meet the BE util threshold).\n  # - cpuEvictBEUsageThresholdPercent: the BE utilization (BEUsage / BERealLimit) threshold to start the cpu eviction (also require to meet the cpu satisfaction threshold).\n  # - cpuEvictBESatisfactionUpperPercent: the cpu satisfaction threshold to stop the cpu eviction.\n  # - cpuEvictTimeWindowSeconds: the time window of the cpu metrics for the cpu eviction.\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": false,\n        "cpuSuppressThresholdPercent": 65,\n        "cpuSuppressPolicy": "cpuset",\n        "memoryEvictThresholdPercent": 70,\n        "memoryEvictLowerPercent": 65,\n        "cpuEvictBESatisfactionUpperPercent": 90,\n        "cpuEvictBESatisfactionLowerPercent": 60,\n        "cpuEvictBEUsageThresholdPercent": 90\n      },\n      "nodeStrategies": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "cpuEvictBEUsageThresholdPercent": 80\n        }\n      ]\n    }\n  # The configuration for QoS-based features.\n  # Related features: CPUQoS (GroupIdentity), MemoryQoS (CgroupReconcile), ResctrlQoS.\n  # - clusterStrategy: the cluster-level configuration.\n  # - nodeStrategies: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  # - lsrClass/lsClass/beClass: the configuration for pods of QoS LSR/LS/BE respectively. \n  # - cpuQOS: the configuration of CPU QoS.\n  #   - enable: whether to enable CPU QoS. If set to `false`, the related cgroup configs will be reset to the system default.\n  #   - groupIdentity: the priority level of the Group Identity ([-1, 2]). `2` means the highest priority, while `-1` means the lowest priority. Anolis OS required.\n  # - memoryQOS: the configuration of Memory QoS.\n  #   - enable: whether to enable Memory QoS. If set to `false`, the related cgroup configs will be reset to the system default.\n  #   - minLimitPercent: the scale percentage for setting the `memory.min` based on the container\'s request. It enables the memory protection from the Linux memory reclaim.\n  #   - lowLimitPercent: the scale percentage for setting the `memory.low` based on the container\'s request. It enables the memory soft protection from the Linux memory reclaim.\n  #   - throttlingPercent: the scale percentage for setting the `memory.high` based on the container\'s limit. It enables the memory throttling in cgroup level.\n  #   - wmarkRatio: the ratio of container-level asynchronous memory reclaim based on the container\'s limit. Anolis OS required.\n  #   - wmarkScalePermill: the per-mill of container memory to reclaim in once asynchronous memory reclaim. Anolis OS required.\n  #   - wmarkMinAdj: the adjustment percentage of global memory min watermark. It affects the reclaim priority when the node memory free is quite a few. Anolis OS required.\n  # - resctrlQOS: the configuration of Resctrl (Intel RDT) QoS.\n  #   - enable: whether to enable Resctrl QoS.\n  #   - catRangeStartPercent: the starting percentage of the L3 Cache way partitioning. L3 CAT required.\n  #   - catRangeEndPercent: the ending percentage of the L3 Cache way partitioning. L3 CAT required.\n  #   - mbaPercent: the allocation percentage of the memory bandwidth. MBA required.\n  resource-qos-config: |\n    {\n      "clusterStrategy": {\n        "lsrClass": {\n          "cpuQOS": {\n            "enable": false,\n            "groupIdentity": 2\n          },\n          "memoryQOS": {\n            "enable": false,\n            "minLimitPercent": 0,\n            "lowLimitPercent": 0,\n            "throttlingPercent": 0,\n            "wmarkRatio": 95,\n            "wmarkScalePermill": 20,\n            "wmarkMinAdj": -25,\n            "priorityEnable": 0,\n            "priority": 0,\n            "oomKillGroup": 0\n          },\n          "resctrlQOS": {\n            "enable": false,\n            "catRangeStartPercent": 0,\n            "catRangeEndPercent": 100,\n            "mbaPercent": 100\n          }\n        },\n        "lsClass": {\n          "cpuQOS": {\n            "enable": false,\n            "groupIdentity": 2\n          },\n          "memoryQOS": {\n            "enable": false,\n            "minLimitPercent": 0,\n            "lowLimitPercent": 0,\n            "throttlingPercent": 0,\n            "wmarkRatio": 95,\n            "wmarkScalePermill": 20,\n            "wmarkMinAdj": -25,\n            "priorityEnable": 0,\n            "priority": 0,\n            "oomKillGroup": 0\n          },\n          "resctrlQOS": {\n            "enable": false,\n            "catRangeStartPercent": 0,\n            "catRangeEndPercent": 100,\n            "mbaPercent": 100\n          }\n        },\n        "beClass": {\n          "cpuQOS": {\n            "enable": false,\n            "groupIdentity": -1\n          },\n          "memoryQOS": {\n            "enable": false,\n            "minLimitPercent": 0,\n            "lowLimitPercent": 0,\n            "throttlingPercent": 0,\n            "wmarkRatio": 95,\n            "wmarkScalePermill": 20,\n            "wmarkMinAdj": 50,\n            "priorityEnable": 0,\n            "priority": 0,\n            "oomKillGroup": 0\n          },\n          "resctrlQOS": {\n            "enable": false,\n            "catRangeStartPercent": 0,\n            "catRangeEndPercent": 30,\n            "mbaPercent": 100\n          }\n        }\n      },\n      "nodeStrategies": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "beClass": {\n            "memoryQOS": {\n              "wmarkRatio": 90\n            }\n          }\n        }\n      ]\n    }\n  # The configuration for the CPU Burst.\n  # Related features: CPUBurst.\n  # - clusterStrategy: the cluster-level configuration.\n  # - nodeStrategies: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  # - policy: the policy of CPU Burst. If set to `none`, the CPU Burst is disabled. If set to `auto`, the CPU Burst is fully enabled. If set to `cpuBurstOnly`, only the Linux CFS Burst feature is enabled.\n  # - cpuBurstPercent: the percentage of Linux CFS Burst. It affects the value of `cpu.cfs_burst_us` of pod/container cgroups. It specifies the percentage to which the CPU limit can be increased by CPU Burst.\n  # - cfsQuotaBurstPercent: the percentage of cfs quota burst. It affects the scaled ratio of `cpu.cfs_quota_us` of pod/container cgroups. It specifies the maximum percentage to which the value of cfs_quota in the cgroup parameters can be increased.\n  # - cfsQuotaBurstPeriodSeconds: the maximum period of once cfs quota burst. It indicates that the time period in which the container can run with an increased CFS quota is unlimited.\n  # - sharePoolThresholdPercent: the threshold of share pool utilization. If the share pool utilization is too high, CPU Burst will be stopped and reset to avoid machine overload.\n  cpu-burst-config: |\n    {\n      "clusterStrategy": {\n        "policy": "none",\n        "cpuBurstPercent": 1000,\n        "cfsQuotaBurstPercent": 300,\n        "cfsQuotaBurstPeriodSeconds": -1,\n        "sharePoolThresholdPercent": 50\n      },\n      "nodeStrategies": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "policy": "cfsQuotaBurstOnly",\n          "cfsQuotaBurstPercent": 400\n        }\n      ]\n    }\n  # The configuration for system-level settings.\n  # Related features: SystemConfig.\n  # - clusterStrategy: the cluster-level configuration.\n  # - nodeStrategies: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  # - minFreeKbytesFactor: the factor for calculating the global minimum memory free watermark `/proc/sys/vm/min_free_kbytes`. `min_free_kbytes = minFreeKbytesFactor * nodeTotalMemory / 10000`.\n  # - watermarkScaleFactor: the reclaim factor `/proc/sys/vm/watermark_scale_factor` in once global memory reclaim.\n  # - memcgReapBackGround: whether to enable the reaper for orphan memory cgroups.\n  system-config: |-\n    {\n      "clusterStrategy": {\n        "minFreeKbytesFactor": 100,\n        "watermarkScaleFactor": 150,\n        "memcgReapBackGround": 0\n      }\n      "nodeStrategies": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "minFreeKbytesFactor": 100,\n          "watermarkScaleFactor": 150\n        }\n      ]\n    }\n')),(0,r.kt)("p",null,"For more information, please check the user manuals and designs of the related features."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check the current SLO configurations via the ConfigMap ",(0,r.kt)("inlineCode",{parentName:"li"},"koordinator-system/slo-controller-config"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get configmap -n koordinator-system slo-controller-config -o yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: koordinator\n    meta.helm.sh/release-namespace: default\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  colocation-config: |\n    {\n      "enable": false,\n      "metricAggregateDurationSeconds": 300,\n      "metricReportIntervalSeconds": 60,\n      "cpuReclaimThresholdPercent": 60,\n      "memoryReclaimThresholdPercent": 65,\n      "memoryCalculatePolicy": "usage",\n      "degradeTimeMinutes": 15,\n      "updateTimeThresholdSeconds": 300,\n      "resourceDiffThreshold": 0.1\n    }\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": false\n      }\n    }\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Edit the ConfigMap ",(0,r.kt)("inlineCode",{parentName:"li"},"koordinator-system/slo-controller-config")," to change the SLO config.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit configmap -n koordinator-system slo-controller-config\n")),(0,r.kt)("p",null,"For example, the configmap is edited as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'data:\n  # ...\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": true,\n        "cpuSuppressThresholdPercent": 60,\n        "cpuSuppressPolicy": "cpuset",\n        "memoryEvictThresholdPercent": 60\n      }\n    }\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Verify if the NodeSLO is successfully dispatched.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The default values will be omitted in the NodeSLO.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodeslo.slo.koordinator.sh test-node -o yaml\napiVersion: slo.koordinator.sh/v1alpha1\nkind: NodeSLO\nmetadata:\n  name: test-node\nspec:\n  # ...\n  extensions: {}\n  resourceUsedThresholdWithBE:\n    cpuSuppressPolicy: cpuset\n    cpuSuppressThresholdPercent: 60\n    enable: true\n    memoryEvictThresholdPercent: 60\n")))}d.isMDXComponent=!0}}]);