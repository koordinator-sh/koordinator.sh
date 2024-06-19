"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[7974],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return t?o.createElement(k,i(i({ref:n},u),{},{components:t})):o.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={},i="NRI Mode Resource Management",l={unversionedId:"designs/nri-mode-resource-management",id:"version-v1.4/designs/nri-mode-resource-management",title:"NRI Mode Resource Management",description:"Glossary",source:"@site/versioned_docs/version-v1.4/designs/nri-mode-resource-management.md",sourceDirName:"designs",slug:"/designs/nri-mode-resource-management",permalink:"/docs/v1.4/designs/nri-mode-resource-management",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/nri-mode-resource-management.md",tags:[],version:"v1.4",lastUpdatedBy:"wangjianyu",lastUpdatedAt:1705567859,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{},sidebar:"docs",previous:{title:"RuntimeProxy",permalink:"/docs/v1.4/designs/runtime-proxy"},next:{title:"Node Prediction",permalink:"/docs/v1.4/designs/node-prediction"}},s={},p=[{value:"Glossary",id:"glossary",level:2},{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals/Future Work",id:"non-goalsfuture-work",level:3},{value:"Proposal",id:"proposal",level:2},{value:"User Stories",id:"user-stories",level:3},{value:"Story 1",id:"story-1",level:4},{value:"Story 2",id:"story-2",level:4},{value:"Story 3",id:"story-3",level:4},{value:"Story 4",id:"story-4",level:4},{value:"Requirements",id:"requirements",level:3},{value:"Functional Requirements",id:"functional-requirements",level:4},{value:"Non-Functional Requirements",id:"non-functional-requirements",level:4},{value:"Implementation Details/Notes/Constraints",id:"implementation-detailsnotesconstraints",level:3},{value:"Risks and Mitigations",id:"risks-and-mitigations",level:3},{value:"Alternatives",id:"alternatives",level:2},{value:"Upgrade Strategy",id:"upgrade-strategy",level:2}],u={toc:p},d="wrapper";function c(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nri-mode-resource-management"},"NRI Mode Resource Management"),(0,r.kt)("h2",{id:"glossary"},"Glossary"),(0,r.kt)("p",null,"NRI, node resource interface. See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containerd/nri"},"https://github.com/containerd/nri")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"We hope to enable NRI mode resource management for koordinator for easy deployment and in-time control. "),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Koordinator as a QoS-based scheduling for efficient orchestration of microservices, AI, and big data workloads on Kubernetes and its runtime hooks support two working ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/design-archive/koordlet-runtime-hooks.md"},"modes")," for different scenarios: ",(0,r.kt)("inlineCode",{parentName:"p"},"Standalone")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy"),". However, both of them have some ",(0,r.kt)("a",{parentName:"p",href:"https://shimo.im/docs/m4kMLdgO1LIma9qD"},"constraints"),". NRI (Node Resource Interface), which is a public interface for controlling node resources is a general framework for CRI-compatible container runtime plug-in extensions. It provides a mechanism for extensions to track the state of pod/containers and make limited modifications to their configuration. We'd like to integrate NRI framework to address ",(0,r.kt)("inlineCode",{parentName:"p"},"Standalone")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy")," constraints based on this community recommend mechanism."),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support NRI mode resource management for koordinator."),(0,r.kt)("li",{parentName:"ul"},"Support containerd container runtime.")),(0,r.kt)("h3",{id:"non-goalsfuture-work"},"Non-Goals/Future Work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support docker runtime")),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("p",null,"Different from standalone and proxy mode, Koodlet will start an NRI plugin to subscribe pod/container lifecycle events from container runtime (e.g. containerd, crio), and then koordlet NRI plugin will call runtime hooks to adjust pod resources or OCI spec. The flow should be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get pod/container lifecycle events and OCI format information from container runtime (e.g. containerd, crio)."),(0,r.kt)("li",{parentName:"ul"},"Transform the OCI format information into internal protocols. (e.g. PodContext, ContainerContext) to re-use existing runtime hook plugins."),(0,r.kt)("li",{parentName:"ul"},"Transform the runtime hook plugins' response into OCI spec format "),(0,r.kt)("li",{parentName:"ul"},"Return OCI spec format response to container runtime(e.g. containerd, crio).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nri-proposal.png",src:t(7836).Z,width:"825",height:"628"})),(0,r.kt)("h3",{id:"user-stories"},"User Stories"),(0,r.kt)("h4",{id:"story-1"},"Story 1"),(0,r.kt)("p",null,"As a cluster administrator, I want to apply QoS policy before pod's status become running."),(0,r.kt)("h4",{id:"story-2"},"Story 2"),(0,r.kt)("p",null,"As a cluster administrator, I want to deploy koordinator cluster without restart."),(0,r.kt)("h4",{id:"story-3"},"Story 3"),(0,r.kt)("p",null,"As a cluster administrator, I want to adjust resources' policies at runtime."),(0,r.kt)("h4",{id:"story-4"},"Story 4"),(0,r.kt)("p",null,"As a GPU user, I want to inject environment before pod running."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Need to upgrade containerd to >= 1.7.0, crio to >= v1.25.0")),(0,r.kt)("h4",{id:"functional-requirements"},"Functional Requirements"),(0,r.kt)("p",null,"NRI mode should support all existing functionalities supported by standalone and Proxy mode."),(0,r.kt)("h4",{id:"non-functional-requirements"},"Non-Functional Requirements"),(0,r.kt)("p",null,"Non-functional requirements are user expectations of the solution. Include\nconsiderations for performance, reliability and security."),(0,r.kt)("h3",{id:"implementation-detailsnotesconstraints"},"Implementation Details/Notes/Constraints"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"koordlet ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/containerd/nri/blob/main/plugins/template/plugin.go"},"NRI plugin"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type nriServer struct {\n    stub    stub.Stub\n    mask    stub.EventMask\n    options Options // server options\n}\n\n// Enable 3 hooks (RunPodSandbox, CreateContainer, UpdateContainer) in NRI \nfunc (p *nriServer) Configure(config, runtime, version string) (stub.EventMask, error) {\n}\n\n// Sync all pods/containers information before koordlet nri plugin run\nfunc (p *nriServer) Synchronize(pods []*api.PodSandbox, containers []*api.Container) ([]*api.ContainerUpdate, error) {\n}\n\nfunc (p *nriServer) RunPodSandbox(pod *api.PodSandbox) error {\n    podCtx.FromNri(pod)\n    RunHooks(...)\n    podCtx.NriDone()\n}\n\nfunc (p *nriServer) CreateContainer(pod *api.PodSandbox, container *api.Container) (*api.ContainerAdjustment, []*api.ContainerUpdate, error) {\n    containerCtx.FromNri(pod, container)\n    RunHooks(...)\n    containCtx.NriDone()\n}\n\nfunc (p *nriServer) UpdateContainer(pod *api.PodSandbox, container *api.Container) ([]*api.ContainerUpdate, error) {\n    containerCtx.FromNri(pod, container)\n    RunHooks(...)\n    containCtx.NriDone()\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"koordlet enhancement for NRI")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PodContext")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// fill PodContext from OCI spec\nfunc (p *PodContext) FromNri(pod *api.PodSandbox) {\n}\n\n// apply QoS resource policies for pod\nfunc (p *PodContext) NriDone() {\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ContainerContext")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// fill ContainerContext from OCI spec\nfunc (c *ContainerContext) FromNri(pod *api.PodSandbox, container *api.Container) {\n}\n\n// apply QoS resource policies for container\nfunc (c *ContainerContext) NriDone() (*api.ContainerAdjustment, []*api.ContainerUpdate, error) {\n}\n")),(0,r.kt)("h3",{id:"risks-and-mitigations"},"Risks and Mitigations"),(0,r.kt)("h2",{id:"alternatives"},"Alternatives"),(0,r.kt)("p",null,"There are several approaches to extending the Kubernetes CRI (Container Runtime Interface) to manage container resources such as ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy"),". Under ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone")," running mode, resource isolation parameters will be injected asynchronously. Under ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," running mode, proxy can hijack CRI requests from kubelet for pods and then apply resource policies in time. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," mode needs to configure and restart kubelet."),(0,r.kt)("p",null,"There are a little difference in execution timing between ",(0,r.kt)("inlineCode",{parentName:"p"},"NRI")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," modes. Hook points (execution timing) are not exactly same. The biggest difference is ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," call koordlet hooks between kubelet and containerd. However, NRI will call NRI plugin (koodlet hooks) in containerd, that means containerd still could do something before or after containerd call NRI plugin (koordlet hooks). For example, under ",(0,r.kt)("inlineCode",{parentName:"p"},"NRI")," running mode, containerd setup pod network first and then call NRI plugin (koordlet hooks) in RunPodSanbox, but under ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," running mode, containerd couldn't do anything before koordlet hooks running when ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," handle RunPodSandbox CRI request. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Standalone"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"kubelet -- CRI Request -> CRI Runtime -- OCI Spec -> OCI compatible runtime -> containers"),(0,r.kt)("li",{parentName:"ul"},"kubelet -> Node Agent -> CRI Runtime / containers")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"standalone.png",src:t(7229).Z,width:"1810",height:"436"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Proxy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"kubelet -- CRI Request -> CRI Proxy -- CRI Request (hooked) -> CRI Runtime -- OCI Spec -> OCI compatible runtime -> containers")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"proxy.png",src:t(2139).Z,width:"1810",height:"302"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NRI"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"kubelet -- CRI Request -> CRI Runtime -- OCI Spec --\x3e OCI compatible runtime -> containers",(0,r.kt)("br",{parentName:"li"}),"","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2198"," ","\u2003"," ","\u2197",(0,r.kt)("br",{parentName:"li"}),"","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","Koordlet NRI plugin")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nri.png",src:t(4566).Z,width:"1810",height:"498"})),(0,r.kt)("h2",{id:"upgrade-strategy"},"Upgrade Strategy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Need to upgrade containerd to 1.7.0+ or CRIO to 1.26.0+"),(0,r.kt)("li",{parentName:"ul"},"Need to enable NRI")))}c.isMDXComponent=!0},7836:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/nri-proposal-472f1a1bde8c4bce268e6fce9c94b8b0.png"},4566:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/nri-96596915289621b8627ab2c3dba19f4e.png"},2139:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/proxy-fa0931e0108b4232f14b433ba97fc0d4.png"},7229:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/standalone-617d6be6564becac6658469b770b8729.png"}}]);