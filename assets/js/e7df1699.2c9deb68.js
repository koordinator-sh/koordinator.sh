"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[8344],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9123:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={sidebar_position:1},s="Colocation Profile",c={unversionedId:"user-manuals/colocation-profile",id:"user-manuals/colocation-profile",title:"Colocation Profile",description:"Motivation",source:"@site/docs/user-manuals/colocation-profile.md",sourceDirName:"user-manuals",slug:"/user-manuals/colocation-profile",permalink:"/docs/next/user-manuals/colocation-profile",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/colocation-profile.md",tags:[],version:"current",lastUpdatedBy:"Joseph",lastUpdatedAt:1671169917,formattedLastUpdatedAt:"12/16/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"QoS",permalink:"/docs/next/architecture/qos"},next:{title:"Load Aware Scheduling",permalink:"/docs/next/user-manuals/load-aware-scheduling"}},p={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"feature-gates",id:"feature-gates",level:2},{value:"Spec definition",id:"spec-definition",level:2},{value:"Example",id:"example",level:2},{value:"Create ClusterColocationProfile",id:"create-clustercolocationprofile",level:3},{value:"Verify ClusterColocationProfile works",id:"verify-clustercolocationprofile-works",level:3}],u={toc:d};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colocation-profile"},"Colocation Profile"),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"If the workloads in the existing cluster want to be co-located through Koordinator, you need to modify the existing Controller/Operator to support protocols such as the QoS class, priority, and resource model defined by Koordinator.\nIn order to avoid repeated construction and make it easier for everyone to obtain the benefits of co-location technology, Koordinator defines ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterColocationProfile")," CRD, and implements webhook modify and verify newly created Pods, inject the fields described in ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterColocationProfile"),"."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image",src:o(1502).Z,width:"2386",height:"1318"})),(0,a.kt)("h2",{id:"feature-gates"},"feature-gates"),(0,a.kt)("p",null,"ClusterColocationProfile mutating/validating feature is turned on by default, if you want to turn it off set feature-gates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install koordinator https://... --set featureGates="PodMutatingWebhook=false\\,PodValidatingWebhook=false"\n')),(0,a.kt)("h2",{id:"spec-definition"},"Spec definition"),(0,a.kt)("p",null,"If you are not familiar with Kubernetes resources please refer to the page ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/"},"Understanding Kubernetes Objects"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"namespaceSelector"),": decides whether to mutate/validate Pods if the namespace matches the selector. Default to the empty LabelSelector,  which will match everything.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"selector"),": decides whether to mutate/validate Pods if the Pod matches the selector. Default to the empty LabelSelector, which will match everything.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"qosClass")," (",(0,a.kt)("em",{parentName:"p"},"required"),"): describes the type of Koordinator QoS that the Pod is running. The value will be injected into Pod as label koordinator.sh/qosClass. Options are ",(0,a.kt)("inlineCode",{parentName:"p"},"LSE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LSR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BE"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"SYSTEM"),". For more information, please check ",(0,a.kt)("a",{parentName:"p",href:"../architecture/qos"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"priorityClassName")," (",(0,a.kt)("em",{parentName:"p"},"required"),"): the priorityClassName and the priority value defined in PriorityClass will be injected into the Pod. Options are ",(0,a.kt)("inlineCode",{parentName:"p"},"koord-prod"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"koord-mid"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"koord-batch"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"koord-free"),". For more information, please check ",(0,a.kt)("a",{parentName:"p",href:"../architecture/priority"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"koordinatorPriority"),": defines the Pod sub-priority in Koordinator. The priority value will be injected into Pod as label koordinator.sh/priority. Various Koordinator components determine the priority of the Pod in the Koordinator through KoordinatorPriority and the priority value in PriorityClassName. Higher the value, higher the priority.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"labels"),": describes the k/v pair that needs to inject into ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod.Labels"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"annotations"),": describes the k/v pair that needs to inject into ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod.Annotations"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"schedulerName"),": if specified, the pod will be dispatched by specified scheduler.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"patch"),": indicates Pod Template patching that user would like to inject into the Pod."))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"create-clustercolocationprofile"},"Create ClusterColocationProfile"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"profile.yaml")," file below describes to modify Pod in Namepspace with label ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/enable-colocation=true")," and inject Koordinator QoS, Koordinator Priority etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.koordinator.sh/v1alpha1\nkind: ClusterColocationProfile\nmetadata:\n  name: colocation-profile-example\nspec:\n  namespaceSelector:\n    matchLabels:\n      koordinator.sh/enable-colocation: "true"\n  selector:\n    matchLabels:\n      koordinator.sh/enable-colocation: "true"\n  qosClass: BE\n  priorityClassName: koord-batch\n  koordinatorPriority: 1000\n  schedulerName: koord-scheduler\n  labels:\n    koordinator.sh/mutated: "true"\n  annotations: \n    koordinator.sh/intercepted: "true"\n  patch:\n    spec:\n      terminationGracePeriodSeconds: 30\n')),(0,a.kt)("p",null,"Create a ClusterColocationProfile based on the YAML file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f profile.yaml\n")),(0,a.kt)("h3",{id:"verify-clustercolocationprofile-works"},"Verify ClusterColocationProfile works"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    koordinator.sh/enable-colocation: "true"\n  name: test-pod\nspec:\n  containers:\n  - name: app\n    image: nginx:1.15.1\n    resources:\n        limits:\n          cpu: "1"\n          memory: "3456Mi"\n        requests:\n          cpu: "1"\n          memory: "3456Mi"\n')),(0,a.kt)("p",null,"Create this pod and now you will find it's injected with Koordinator QoS, Koordinator Priority etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod test-pod -o yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  annotations: \n    koordinator.sh/intercepted: true\n  labels:\n    koordinator.sh/qosClass: BE\n    koordinator.sh/priority: 1000\n    koordinator.sh/mutated: true\n  ...\nspec:\n  terminationGracePeriodSeconds: 30\n  priority: 5000\n  priorityClassName: koord-batch\n  schedulerName: koord-scheduler\n  containers:\n  - name: app\n    image: nginx:1.15.1\n    resources:\n        limits:\n          kubernetes.io/batch-cpu: "1000"\n          kubernetes.io/batch-memory: 3456Mi\n        requests:\n          kubernetes.io/batch-cpu: "1000"\n          kubernetes.io/batch-memory: 3456Mi\n')))}m.isMDXComponent=!0},1502:function(e,t,o){t.Z=o.p+"assets/images/clustercolocationprofile-arch-47abebb6e9a88c95ebce20227485a785.png"}}]);