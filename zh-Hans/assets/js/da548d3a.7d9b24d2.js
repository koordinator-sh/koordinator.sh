"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[5075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={},a="Enhanced Scheduler Extension",l={unversionedId:"designs/enhanced-scheduler-extension",id:"version-v1.5/designs/enhanced-scheduler-extension",title:"Enhanced Scheduler Extension",description:"Summary",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.5/designs/enhanced-scheduler-extension.md",sourceDirName:"designs",slug:"/designs/enhanced-scheduler-extension",permalink:"/zh-Hans/docs/designs/enhanced-scheduler-extension",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/enhanced-scheduler-extension.md",tags:[],version:"v1.5",lastUpdatedBy:"Frame",lastUpdatedAt:1718775971,formattedLastUpdatedAt:"2024\u5e746\u670819\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Node Prediction",permalink:"/zh-Hans/docs/designs/node-prediction"},next:{title:"\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6",permalink:"/zh-Hans/docs/designs/load-aware-scheduling"}},s={},d=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals/Future Work",id:"non-goalsfuture-work",level:3},{value:"Proposal",id:"proposal",level:2},{value:"User stories",id:"user-stories",level:3},{value:"Story 1",id:"story-1",level:4},{value:"Story 2",id:"story-2",level:4},{value:"Story 3",id:"story-3",level:4},{value:"Design Details",id:"design-details",level:3},{value:"Enhancement Kubernetes Scheduling Framework principles",id:"enhancement-kubernetes-scheduling-framework-principles",level:4},{value:"Custom Extension Overview",id:"custom-extension-overview",level:4},{value:"ExtendedHandle",id:"extendedhandle",level:4},{value:"Intercept plugin initialization process",id:"intercept-plugin-initialization-process",level:4},{value:"Expose the internal state of plugins",id:"expose-the-internal-state-of-plugins",level:4},{value:"Support plugin to create Controllers",id:"support-plugin-to-create-controllers",level:4},{value:"Debug Scoring Result",id:"debug-scoring-result",level:4},{value:"Custom Hook Extend Points to Support Reservation Scheduling",id:"custom-hook-extend-points-to-support-reservation-scheduling",level:4},{value:"Alternatives",id:"alternatives",level:2},{value:"Use Filter instead of Filter Hook",id:"use-filter-instead-of-filter-hook",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enhanced-scheduler-extension"},"Enhanced Scheduler Extension"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This proposal describes how to extend the kubernetes scheduling framework without modify upstream codes to support the scheduling features that  Koordinator needs to develop."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Although Kubernetes Scheduler provides the scheduling framework to help developer to extend scheduling features. However, it cannot support the features that Koordinator needs to develop, such as Reservation, problem diagnosis and analysis, etc. "),(0,i.kt)("h3",{id:"goals"},"Goals"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provides scheduling extension point hook mechanism"),(0,i.kt)("li",{parentName:"ol"},"Provides scheduling plugins expose state mechanism to help diagnose analysis problems")),(0,i.kt)("h3",{id:"non-goalsfuture-work"},"Non-Goals/Future Work"),(0,i.kt)("h2",{id:"proposal"},"Proposal"),(0,i.kt)("h3",{id:"user-stories"},"User stories"),(0,i.kt)("h4",{id:"story-1"},"Story 1"),(0,i.kt)("p",null,"Koordinator supports users to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Reservation")," CRD to reserve resources. We expect Reservation CRD objects to be scheduled like Pods. In this way, the native scheduling capabilities of Kubernetes and other extended scheduling capabilities can be reused. This requires a mechanism to disguise the Reservation CRD object as a Pod, and to extend some scheduling framework extension points to support updating the Reservation Status. "),(0,i.kt)("h4",{id:"story-2"},"Story 2"),(0,i.kt)("p",null,"Koordinator provides some scheduling plugins, such as Fine-grained CPU Scheduling, Device Share Scheduling, Coscheduling, ElasticQuota, etc. These plugins are brand new, and the supported scenarios are relatively rich, and the internal logic and state of the plugins are also a bit complicated. When we may encounter some problems in the production environment and need to be diagnosed and analyzed, we need to confirm the cause of the problem based on the internal status of the plugin. But currently the kubernetes scheduling framework does not provide a mechanism to export the internal state of the plugin."),(0,i.kt)("h4",{id:"story-3"},"Story 3"),(0,i.kt)("p",null,"The scheduler provides many plugins, and most plugins implement Scoring Extension Point. How to configure the weights of these plugins needs to be decided in combination with specific problems. When the optimal node is selected according to the scoring results, the results may not meet expectations. At this point we need to be able to trace or debug these scoring results in some way. But there is currently no good way."),(0,i.kt)("h3",{id:"design-details"},"Design Details"),(0,i.kt)("h4",{id:"enhancement-kubernetes-scheduling-framework-principles"},"Enhancement Kubernetes Scheduling Framework principles"),(0,i.kt)("p",null,"At present, the kube-scheduler provided by Kubernetes can be divided into several parts. The outermost layer is ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.io/kubernetes/cmd/kube-scheduler"),", which is the entrance of kube-scheduler; ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.io/kubernetes/pkg/scheduler")," is responsible for integrating the framework And execute scheduling workflow, including initializing framework and plugins, scheduling Pod, etc. The core module is ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.io/kubernetes/pkg/scheduler/framwork"),", which is the ",(0,i.kt)("strong",{parentName:"p"},"Kubernetes Scheduling Framework"),"."),(0,i.kt)("p",null,"Each layer provides some interfaces or methods to support developers to extend some capabilities, and the evolution speed of each layer is also different. Generally speaking, the evolution speed of the more core modules should be slower, and the evolution of core modules tends to extend rather than modify the existing interface or extension mechanism, otherwise it will bring very large cost and reliability to external dependencies. question. But each layer does not support implementing some features for some reason. But as far as the problems Koordinator is currently experiencing, there are still some workarounds. However, some principles need to be followed to reduce future conflicts with the evolution of the upstream Kubernetes community."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"DO NOT modify the Kubernetes Scheduling Framework. The scheduling framework is the core module of kube-scheduler and is still evolving. In order to avoid conflict with the upstream community between Koordinator's enhanced capabilities."),(0,i.kt)("li",{parentName:"ol"},"DO NOT modify the ",(0,i.kt)("inlineCode",{parentName:"li"},"k8s.io/kubernetes/pkg/scheduler")," but can implements supported interfaces or high-order functions, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ScheduleAlgorithm"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"NextPod"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Error")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Profiles"),".  The ",(0,i.kt)("inlineCode",{parentName:"li"},"Profiles")," contains an instance of the Framework interface corresponding to each KubeSchedulerProfile. We can implement the Framework and replace the instances in Profiles to get the opportunity to participate in the scheduling process to do something."),(0,i.kt)("li",{parentName:"ol"},"Extend ",(0,i.kt)("inlineCode",{parentName:"li"},"k8s.io/kubernetes/cmd/kube-scheduler")," as simply as possible. ")),(0,i.kt)("h4",{id:"custom-extension-overview"},"Custom Extension Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(4061).Z,width:"2706",height:"1226"})),(0,i.kt)("h4",{id:"extendedhandle"},"ExtendedHandle"),(0,i.kt)("p",null,"ExtendedHandle extends the k8s scheduling framework ",(0,i.kt)("inlineCode",{parentName:"p"},"Handle")," interface to facilitate plugins to access Koordinator's resources and states.\nBefore constructs the ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.io/kubernetes/pkg/scheduler.Scheduler")," object, we should build an ExtendedHandle object and pass the object to each custom plugins."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type ExtendedHandle interface {\n    framework.Handle\n    KoordinatorClientSet() koordinatorclientset.Interface\n    KoordinatorSharedInformerFactory() koordinatorinformers.SharedInformerFactory\n    SnapshotSharedLister() framework.SharedLister\n}\n")),(0,i.kt)("h4",{id:"intercept-plugin-initialization-process"},"Intercept plugin initialization process"),(0,i.kt)("p",null,"In order to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedHandle")," object to each custom plugins, we should intercept the plugin initialization process.\nAnd we expect that any customized plugins can be directly and seamlessly integrated into the koordinator scheduler, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginFactory")," of the plugin will not be changed. Therefore, we can modify the prototype of ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.io/kubernetes/cmd/kube-scheduler/app.Option")," and the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.io/kubernetes/cmd/kube-scheduler/app.WithPlugin")," as the follows to get the opportunity to intercept the plugin initialization process."),(0,i.kt)("p",null,"When the custom plugin is registered to the out-of registry using ",(0,i.kt)("inlineCode",{parentName:"p"},"WithPlugin"),", it will use ",(0,i.kt)("inlineCode",{parentName:"p"},"frameworkext.PluginFactoryProxy")," to wrap the plugin's original ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginFactory"),". We finally complete the interception of the plugin initialization process in ",(0,i.kt)("inlineCode",{parentName:"p"},"frameworkext.PluginFactoryProxy"),"."),(0,i.kt)("p",null,"Of course, we will not modify ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.io/kubernetes/cmd/kube-scheduler")," directly. Considering that the logic of ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.io/kubernetes/cmd/kube-scheduler")," itself is not complicated, it will basically not bring us additional maintenance costs, so we will copy the relevant code to Koordinator for separate maintenance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"\n// Option configures a framework.Registry.\ntype Option func(frameworkext.ExtendedHandle, runtime.Registry) error\n\n// WithPlugin creates an Option based on plugin name and factory. Please don't remove this function: it is used to register out-of-tree plugins,\n// hence there are no references to it from the kubernetes scheduler code base.\nfunc WithPlugin(name string, factory runtime.PluginFactory) Option {\n    return func(handle frameworkext.ExtendedHandle, registry runtime.Registry) error {\n        return registry.Register(name, frameworkext.PluginFactoryProxy(handle, factory))\n    }\n}\n\n// frameworkext.PluginFactoryProxy\nfunc PluginFactoryProxy(extendHandle ExtendedHandle, factoryFn frameworkruntime.PluginFactory) frameworkruntime.PluginFactory {\n  return func(args runtime.Object, handle framework.Handle) (framework.Plugin, error) {\n        impl := extendHandle.(*frameworkExtendedHandleImpl)\n        impl.once.Do(func() {\n            impl.Handle = handle\n        })\n        return factoryFn(args, extendHandle)\n    }\n}\n")),(0,i.kt)("h4",{id:"expose-the-internal-state-of-plugins"},"Expose the internal state of plugins"),(0,i.kt)("p",null,"We will define a new extension interface to help the plugin expose the internal state through the Restful API, and provide some built-in Restful APIs to query which APIs are exposed by the current scheduler and some commonly used internal data, such as NodeInfo, etc."),(0,i.kt)("p",null,"The new extension interface named ",(0,i.kt)("inlineCode",{parentName:"p"},"APIServiceProvider"),". The plugins can implement this interface to register the API to be exposed as needed. When the plugin is initialized, ",(0,i.kt)("inlineCode",{parentName:"p"},"frameworkext.PluginFactoryProxy")," will check whether the newly constructed plugin implements ",(0,i.kt)("inlineCode",{parentName:"p"},"APIServiceProvider"),", and if so, it will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterEndpoints")," method of the interface to register the API. The Restful APIs exposed by these plugins will be bound to the URL path ",(0,i.kt)("inlineCode",{parentName:"p"},"/apis/v1/plugins/")," and will be prefixed with the name of each plugin. For example, the API ",(0,i.kt)("inlineCode",{parentName:"p"},"/availableCPUs/:nodeName")," exposed by the plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeNUMAResource")," will be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"/apis/v1/plugins/NodeNUMAResource/availableCPUs/:nodeName"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type APIServiceProvider interface {\n    RegisterEndpoints(group *gin.RouterGroup)\n}\n\ntype ErrorMessage struct {\n    Message string `json:"message,omitempty"`\n}\n\nfunc ResponseErrorMessage(c *gin.Context, statusCode int, format string, args ...interface{}) {\n    var e ErrorMessage\n    e.Message = fmt.Sprintf(format, args...)\n    c.JSON(statusCode, e)\n}\n')),(0,i.kt)("p",null,"Users can use the built-in API ",(0,i.kt)("inlineCode",{parentName:"p"},"/apis/v1/__services__")," to query how many Restful APIs are provided by the current scheduler.  The response as the follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "GET": [\n        "/apis/v1/__services__",\n        "/apis/v1/nodes/:nodeName",\n        "/apis/v1/plugins/Coscheduling/gang/:namespace/:name",\n        "/apis/v1/plugins/Coscheduling/gangs",\n        "/apis/v1/plugins/NodeNUMAResource/availableCPUs/:nodeName",\n        "/apis/v1/plugins/NodeNUMAResource/cpuTopologyOptions/:nodeName"\n    ]\n}\n')),(0,i.kt)("p",null,"Koordinator scheduler also provides ",(0,i.kt)("inlineCode",{parentName:"p"},"/apis/v1/nodes/:nodeNa")," to expose internal ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeInfo")," to developers. "),(0,i.kt)("h4",{id:"support-plugin-to-create-controllers"},"Support plugin to create Controllers"),(0,i.kt)("p",null,"Similar to Coscheduling/ElasticQuota Scheduling, these scheduling plugins have a matching Controller to synchronize the status of the related CRD. The most common way is to deploy these controllers independently of the scheduler. This method will not only bring additional maintenance costs and resource costs, but also if there are more states in the scheduling plugin that need to be synchronized to the CRD Status, the logic in the Controller and the logic in the plugin need to be more closely coordinated. The best way is that the Controller and the scheduling plugin are in the same process."),(0,i.kt)("p",null,"We can define a new interface called ",(0,i.kt)("inlineCode",{parentName:"p"},"ControllerProvider"),". When the plugin is initialized, ",(0,i.kt)("inlineCode",{parentName:"p"},"frameworkext.PluginFactoryProxy")," will check whether the newly constructed plugin implements ",(0,i.kt)("inlineCode",{parentName:"p"},"ControllerProvider"),", and if so, it will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"NewControllers")," method of the interface to get the instances of Controllers, and save these instances in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedHandle"),". When the scheduler gets the leader role, it can trigger the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedHandle")," to start these controllers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type ControllerProvider interface {\n    NewControllers() ([]Controller, error)\n}\n\ntype Controller interface {\n    Start()\n    Name() string\n}\n")),(0,i.kt)("h4",{id:"debug-scoring-result"},"Debug Scoring Result"),(0,i.kt)("p",null,"If we want to support debug scoring results, the easiest way is to directly modify ",(0,i.kt)("inlineCode",{parentName:"p"},"Framework.RunScorePlugins")," and print the results after scoring. But this goes against the extend principles we laid out earlier. But we can think differently. When ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduler.Scheduler")," executes ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleOne"),", it obtains an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"framework.Framework")," interface from ",(0,i.kt)("inlineCode",{parentName:"p"},"Profiles")," and calls the method ",(0,i.kt)("inlineCode",{parentName:"p"},"RunScorePlugins"),". At the same time, considering that we have maintained the initialization code of scheduler separately, then we can customize the implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"framework.Framework")," interface, implement the method ",(0,i.kt)("inlineCode",{parentName:"p"},"RunScorePlugins")," and take over the ",(0,i.kt)("inlineCode",{parentName:"p"},"Profiles")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduler.Scheduler"),". In this way, we can first call the ",(0,i.kt)("inlineCode",{parentName:"p"},"RunScorePlugins")," method of the original ",(0,i.kt)("inlineCode",{parentName:"p"},"framework.Framework")," interface instance in the custom implemented ",(0,i.kt)("inlineCode",{parentName:"p"},"RunScorePlugins"),", and then print the result. "),(0,i.kt)("p",null,"For the processing of the results, we can simply print it to the log in markdown format. When needed, enable Scoring Result debugging capability through the HTTP interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/debug/flags/s")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"/debug/flags/v"),". The developers also enable the capability via flags ",(0,i.kt)("inlineCode",{parentName:"p"},"--debug-scores"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# print top 100 score results.\n$ curl -X POST schedulerIP:10251/debug/flags/s --data '100' \nsuccessfully set debugTopNScores to 100\n")),(0,i.kt)("p",null,"The following are the specific scoring results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"| # | Pod | Node | Score | ImageLocality | InterPodAffinity | LoadAwareScheduling | NodeAffinity | NodeNUMAResource | NodeResourcesBalancedAllocation | NodeResourcesFit | PodTopologySpread | Reservation | TaintToleration |\n| --- | --- | --- | ---:| ---:| ---:| ---:| ---:| ---:| ---:| ---:| ---:| ---:| ---:|\n| 0 | default/curlimage-545745d8f8-rngp7 | cn-hangzhou.10.0.4.51 | 577 | 0 | 0 | 87 | 0 | 0 | 96 | 94 | 200 | 0 | 100 |\n| 1 | default/curlimage-545745d8f8-rngp7 | cn-hangzhou.10.0.4.50 | 574 | 0 | 0 | 85 | 0 | 0 | 96 | 93 | 200 | 0 | 100 |\n| 2 | default/curlimage-545745d8f8-rngp7 | cn-hangzhou.10.0.4.19 | 541 | 0 | 0 | 55 | 0 | 0 | 95 | 91 | 200 | 0 | 100 |\n| 3 | default/curlimage-545745d8f8-rngp7 | cn-hangzhou.10.0.4.18 | 487 | 0 | 0 | 15 | 0 | 0 | 90 | 82 | 200 | 0 | 100 |\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"#"),(0,i.kt)("th",{parentName:"tr",align:null},"Pod"),(0,i.kt)("th",{parentName:"tr",align:null},"Node"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Score"),(0,i.kt)("th",{parentName:"tr",align:"right"},"ImageLocality"),(0,i.kt)("th",{parentName:"tr",align:"right"},"InterPodAffinity"),(0,i.kt)("th",{parentName:"tr",align:"right"},"LoadAwareScheduling"),(0,i.kt)("th",{parentName:"tr",align:"right"},"NodeAffinity"),(0,i.kt)("th",{parentName:"tr",align:"right"},"NodeNUMAResource"),(0,i.kt)("th",{parentName:"tr",align:"right"},"NodeResourcesBalancedAllocation"),(0,i.kt)("th",{parentName:"tr",align:"right"},"NodeResourcesFit"),(0,i.kt)("th",{parentName:"tr",align:"right"},"PodTopologySpread"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Reservation"),(0,i.kt)("th",{parentName:"tr",align:"right"},"TaintToleration"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"default/curlimage-545745d8f8-rngp7"),(0,i.kt)("td",{parentName:"tr",align:null},"cn-hangzhou.10.0.4.51"),(0,i.kt)("td",{parentName:"tr",align:"right"},"577"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"87"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"96"),(0,i.kt)("td",{parentName:"tr",align:"right"},"94"),(0,i.kt)("td",{parentName:"tr",align:"right"},"200"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"default/curlimage-545745d8f8-rngp7"),(0,i.kt)("td",{parentName:"tr",align:null},"cn-hangzhou.10.0.4.50"),(0,i.kt)("td",{parentName:"tr",align:"right"},"574"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"85"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"96"),(0,i.kt)("td",{parentName:"tr",align:"right"},"93"),(0,i.kt)("td",{parentName:"tr",align:"right"},"200"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"default/curlimage-545745d8f8-rngp7"),(0,i.kt)("td",{parentName:"tr",align:null},"cn-hangzhou.10.0.4.19"),(0,i.kt)("td",{parentName:"tr",align:"right"},"541"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"55"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"95"),(0,i.kt)("td",{parentName:"tr",align:"right"},"91"),(0,i.kt)("td",{parentName:"tr",align:"right"},"200"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"default/curlimage-545745d8f8-rngp7"),(0,i.kt)("td",{parentName:"tr",align:null},"cn-hangzhou.10.0.4.18"),(0,i.kt)("td",{parentName:"tr",align:"right"},"487"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"15"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"90"),(0,i.kt)("td",{parentName:"tr",align:"right"},"82"),(0,i.kt)("td",{parentName:"tr",align:"right"},"200"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"100")))),(0,i.kt)("h4",{id:"custom-hook-extend-points-to-support-reservation-scheduling"},"Custom Hook Extend Points to Support Reservation Scheduling"),(0,i.kt)("p",null,"If we want to schedule the Reservation CRD object in the form of Pod, we need to solve several problems:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Before calling ",(0,i.kt)("inlineCode",{parentName:"li"},"PreFilter"),", check whether the Pod has a matching Reservation. If there is a matching Reservation, and if the Pod is set with ",(0,i.kt)("inlineCode",{parentName:"li"},"Pod Affinity/AntiAffinity")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"TopologySpreadConstraints"),", we need to modify the Pod to remove these fields. The reason is that when the Reservation CRD object is created, the user generally sets these fields, and expects to find suitable nodes to reserve resources according to these scheduling constraints. Therefore, if the Pod is scheduled with the same fields, it will cause the scheduling to fail. To do this, it cannot be achieved by implementing the ",(0,i.kt)("inlineCode",{parentName:"li"},"PreFilter")," extension point, because the scheduler has already obtained the appropriate Pod to start executing when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"PreFilter"),", and we have lost the opportunity to modify the Pod to affect other plugins."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Filter")," phase, we also need to update the NodeInfo. If there is a Reservation CRD object on NodeInfo, and the current Pod matches the Reservation CRD object, then the resources applied for by the Reservation CRD object should be returned to NodeInfo. Only in this way can it pass the resource check of the scheduler, including the network port check.")),(0,i.kt)("p",null,"To solve these problems, we define the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hook")," interface. The plugin can be implemented on demand, and the Pod or NodeInfo can be modified when the PreFilter/Filter is executed. Similar to the custom implementation method ",(0,i.kt)("inlineCode",{parentName:"p"},"RunScorePlugins")," mentioned above, we can customize the implementation methods ",(0,i.kt)("inlineCode",{parentName:"p"},"RunPreFilterPlugins")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RunFilterPluginsWithNominatedPods"),". Before executing the real extension point logic, first execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hook")," interface and modify the Pod and NodeInfo."),(0,i.kt)("p",null,"If necessary, you can modify the Pod or Node before executing the Score Extension Point by implementing ScorePhaseHook."),(0,i.kt)("p",null,"Considering that there may be multiple different Hooks to modify the Pod or NodeInfo requirements, when the Hook is called, the Hook will be called cyclically, and the modification result of the previous Hook and the input of the next Hook will continue to be executed."),(0,i.kt)("p",null,"Here are some additional explanations for the scenarios in which these new extension points should be used. If you can complete the scheduling function through the extension points such as Filter/Score provided by the K8s Scheduling Framework without modifying the incoming NodeInfo/Pod and other objects, you do not need to use these new extension points."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type SchedulingPhaseHook interface {\n    Name() string\n}\n\ntype PreFilterPhaseHook interface {\n    SchedulingPhaseHook\n    PreFilterHook(handle ExtendedHandle, state *framework.CycleState, pod *corev1.Pod) (*corev1.Pod, bool)\n}\n\ntype FilterPhaseHook interface {\n    SchedulingPhaseHook\n    FilterHook(handle ExtendedHandle, cycleState *framework.CycleState, pod *corev1.Pod, nodeInfo *framework.NodeInfo) (*corev1.Pod, *framework.NodeInfo, bool)\n}\n\ntype ScorePhaseHook interface {\n    SchedulingPhaseHook\n    ScoreHook(handle ExtendedHandle, cycleState *framework.CycleState, pod *corev1.Pod, nodes []*corev1.Node) (*corev1.Pod, []*corev1.Node, bool)\n}\n\n")),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("h3",{id:"use-filter-instead-of-filter-hook"},"Use Filter instead of Filter Hook"),(0,i.kt)("p",null,"We can change the order of Filter plugins to support Reservation Scheduling to update NodeInfo earlier, which can replace Filter Hook. Subsequent implementations can be implemented as an optimization."))}u.isMDXComponent=!0},4061:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scheduler-extension-ee92dec5c616c3d21b1ff5c095cbacb6.jpg"}}]);