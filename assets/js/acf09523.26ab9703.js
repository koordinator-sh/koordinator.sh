"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[3072],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1300:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:1},i="Colocation Profile",l={unversionedId:"user-manuals/colocation-profile",id:"version-v1.5/user-manuals/colocation-profile",title:"Colocation Profile",description:"Motivation",source:"@site/versioned_docs/version-v1.5/user-manuals/colocation-profile.md",sourceDirName:"user-manuals",slug:"/user-manuals/colocation-profile",permalink:"/docs/user-manuals/colocation-profile",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/colocation-profile.md",tags:[],version:"v1.5",lastUpdatedBy:"Frame",lastUpdatedAt:1718775971,formattedLastUpdatedAt:"Jun 19, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Memory QoS",permalink:"/docs/user-manuals/memory-qos"},next:{title:"CPU Utilization Threshold Management",permalink:"/docs/user-manuals/cpu-suppress"}},s={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"feature-gates",id:"feature-gates",level:2},{value:"Spec definition",id:"spec-definition",level:2},{value:"Example",id:"example",level:2},{value:"Create ClusterColocationProfile",id:"create-clustercolocationprofile",level:3},{value:"Verify ClusterColocationProfile works",id:"verify-clustercolocationprofile-works",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"colocation-profile"},"Colocation Profile"),(0,n.kt)("h2",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"If the workloads in the existing cluster want to be co-located through Koordinator, you need to modify the existing Controller/Operator to support protocols such as the QoS class, priority, and resource model defined by Koordinator.\nIn order to avoid repeated construction and make it easier for everyone to obtain the benefits of co-location technology, Koordinator defines ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterColocationProfile")," CRD, and implements webhook modify and verify newly created Pods, inject the fields described in ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterColocationProfile"),"."),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(1502).Z,width:"2386",height:"1318"})),(0,n.kt)("h2",{id:"feature-gates"},"feature-gates"),(0,n.kt)("p",null,"ClusterColocationProfile mutating/validating feature is turned on by default, if you want to turn it off set feature-gates:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install koordinator https://... --set featureGates="PodMutatingWebhook=false\\,PodValidatingWebhook=false"\n')),(0,n.kt)("h2",{id:"spec-definition"},"Spec definition"),(0,n.kt)("p",null,"If you are not familiar with Kubernetes resources please refer to the page ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/"},"Understanding Kubernetes Objects"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"namespaceSelector"),": decides whether to mutate/validate Pods if the namespace matches the selector. Default to the empty LabelSelector,  which will match everything.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"selector"),": decides whether to mutate/validate Pods if the Pod matches the selector. Default to the empty LabelSelector, which will match everything.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"qosClass")," (",(0,n.kt)("em",{parentName:"p"},"required"),"): describes the type of Koordinator QoS that the Pod is running. The value will be injected into Pod as label koordinator.sh/qosClass. Options are ",(0,n.kt)("inlineCode",{parentName:"p"},"LSE"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"LSR"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"LS"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BE"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"SYSTEM"),". For more information, please check ",(0,n.kt)("a",{parentName:"p",href:"../architecture/qos"},"here"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"priorityClassName")," (",(0,n.kt)("em",{parentName:"p"},"required"),"): the priorityClassName and the priority value defined in PriorityClass will be injected into the Pod. Options are ",(0,n.kt)("inlineCode",{parentName:"p"},"koord-prod"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"koord-mid"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"koord-batch"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"koord-free"),". For more information, please check ",(0,n.kt)("a",{parentName:"p",href:"../architecture/priority"},"here"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"koordinatorPriority"),": defines the Pod sub-priority in Koordinator. The priority value will be injected into Pod as label koordinator.sh/priority. Various Koordinator components determine the priority of the Pod in the Koordinator through KoordinatorPriority and the priority value in PriorityClassName. Higher the value, higher the priority.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"labels"),": describes the k/v pair that needs to inject into ",(0,n.kt)("inlineCode",{parentName:"p"},"Pod.Labels"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"annotations"),": describes the k/v pair that needs to inject into ",(0,n.kt)("inlineCode",{parentName:"p"},"Pod.Annotations"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"schedulerName"),": if specified, the pod will be dispatched by specified scheduler.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"patch"),": indicates Pod Template patching that user would like to inject into the Pod."))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"create-clustercolocationprofile"},"Create ClusterColocationProfile"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"profile.yaml")," file below describes to modify Pod in Namepspace with label ",(0,n.kt)("inlineCode",{parentName:"p"},"koordinator.sh/enable-colocation=true")," and inject Koordinator QoS, Koordinator Priority etc."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.koordinator.sh/v1alpha1\nkind: ClusterColocationProfile\nmetadata:\n  name: colocation-profile-example\nspec:\n  namespaceSelector:\n    matchLabels:\n      koordinator.sh/enable-colocation: "true"\n  selector:\n    matchLabels:\n      koordinator.sh/enable-colocation: "true"\n  qosClass: BE\n  priorityClassName: koord-batch\n  koordinatorPriority: 1000\n  schedulerName: koord-scheduler\n  labels:\n    koordinator.sh/mutated: "true"\n  annotations: \n    koordinator.sh/intercepted: "true"\n  patch:\n    spec:\n      terminationGracePeriodSeconds: 30\n')),(0,n.kt)("p",null,"Create a ClusterColocationProfile based on the YAML file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f profile.yaml\n")),(0,n.kt)("h3",{id:"verify-clustercolocationprofile-works"},"Verify ClusterColocationProfile works"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    koordinator.sh/enable-colocation: "true"\n  name: test-pod\nspec:\n  containers:\n  - name: app\n    image: nginx:1.15.1\n    resources:\n        limits:\n          cpu: "1"\n          memory: "3456Mi"\n        requests:\n          cpu: "1"\n          memory: "3456Mi"\n')),(0,n.kt)("p",null,"Create this pod and now you will find it's injected with Koordinator QoS, Koordinator Priority etc."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod test-pod -o yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  annotations: \n    koordinator.sh/intercepted: true\n  labels:\n    koordinator.sh/qosClass: BE\n    koordinator.sh/priority: 1000\n    koordinator.sh/mutated: true\n  ...\nspec:\n  terminationGracePeriodSeconds: 30\n  priority: 5000\n  priorityClassName: koord-batch\n  schedulerName: koord-scheduler\n  containers:\n  - name: app\n    image: nginx:1.15.1\n    resources:\n        limits:\n          kubernetes.io/batch-cpu: "1000"\n          kubernetes.io/batch-memory: 3456Mi\n        requests:\n          kubernetes.io/batch-cpu: "1000"\n          kubernetes.io/batch-memory: 3456Mi\n')))}u.isMDXComponent=!0},1502:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/clustercolocationprofile-arch-47abebb6e9a88c95ebce20227485a785.png"}}]);