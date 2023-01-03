"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2792],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=p(n),s=r,c=k["".concat(d,".").concat(s)]||k[s]||u[s]||o;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={},d="Installation",p={unversionedId:"installation",id:"version-v1.1/installation",title:"Installation",description:"Koordinator requires Kubernetes version >= 1.18.",source:"@site/versioned_docs/version-v1.1/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/installation.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"1/3/2023",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Overview",permalink:"/docs/architecture/overview"}},m={},u=[{value:"Install with helms",id:"install-with-helms",level:2},{value:"Upgrade with helm",id:"upgrade-with-helm",level:2},{value:"Optional: download charts manually",id:"optional-download-charts-manually",level:2},{value:"Install koord-runtime-proxy",id:"install-koord-runtime-proxy",level:2},{value:"1\u3001Get binary",id:"1get-binary",level:3},{value:"2\u3001Setup koord-runtime-proxy",id:"2setup-koord-runtime-proxy",level:3},{value:"3\u3001Setup Kubelet",id:"3setup-kubelet",level:3},{value:"Options",id:"options",level:2},{value:"Optional: chart parameters",id:"optional-chart-parameters",level:3},{value:"Optional: feature-gate",id:"optional-feature-gate",level:3},{value:"Optional: the local image for China",id:"optional-the-local-image-for-china",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Installation parameters for AWS EKS",id:"installation-parameters-for-aws-eks",level:3},{value:"Uninstall",id:"uninstall",level:2}],k={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Koordinator requires ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.18"),"."),(0,o.kt)("p",null,"Koordinator need collect metrics from kubelet read-only port(default is disabled).\nyou can get more info form ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"here"),"."),(0,o.kt)("p",null,"For the best experience, koordinator recommands ",(0,o.kt)("strong",{parentName:"p"},"linux kernel 4.19")," or higher."),(0,o.kt)("h2",{id:"install-with-helms"},"Install with helms"),(0,o.kt)("p",null,"Koordinator can be simply installed by helm v3.5+, which is a simple command-line tool and you can get it from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install koordinator koordinator-sh/koordinator --version 1.1.0\n")),(0,o.kt)("h2",{id:"upgrade-with-helm"},"Upgrade with helm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Upgrade the latest version.\n$ helm upgrade koordinator koordinator-sh/koordinator --version 1.1.0 [--force]\n")),(0,o.kt)("p",null,"Note that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Before upgrade, you ",(0,o.kt)("strong",{parentName:"li"},"must")," firstly read the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/koordinator-sh/koordinator/blob/master/CHANGELOG.md"},"Change Log"),"\nto make sure that you have understand the breaking changes in the new version."),(0,o.kt)("li",{parentName:"ol"},"If you want to drop the chart parameters you configured for the old release or set some new parameters,\nit is recommended to add ",(0,o.kt)("inlineCode",{parentName:"li"},"--reset-values")," flag in ",(0,o.kt)("inlineCode",{parentName:"li"},"helm upgrade")," command.\nOtherwise you should use ",(0,o.kt)("inlineCode",{parentName:"li"},"--reuse-values")," flag to reuse the last release's values.")),(0,o.kt)("h2",{id:"optional-download-charts-manually"},"Optional: download charts manually"),(0,o.kt)("p",null,"If you have problem with connecting to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://koordinator-sh.github.io/charts/")," in production, you might need to download the chart from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/releases"},"here")," manually and install or upgrade with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install/upgrade koordinator /PATH/TO/CHART\n")),(0,o.kt)("h2",{id:"install-koord-runtime-proxy"},"Install koord-runtime-proxy"),(0,o.kt)("p",null,"koord-runtime-proxy acts as a proxy between kubelet and containerd(dockerd under dockershim scenario), which is designed to intercept CRI request, and apply some resource management policies, such as setting different cgroup parameters by pod priorities under hybrid workload orchestration scenario, applying new isolation policies for latest Linux kernel, CPU architecture, and etc.\nFor pods that do not want hook servers processing (such as addon pods), you can skip them by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"runtimeproxy.koordinator.sh/skip-hookserver=true")," to the pod label."),(0,o.kt)("h3",{id:"1get-binary"},"1\u3001Get binary"),(0,o.kt)("p",null,"Download from github releases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ # select the version\n$ wget https://github.com/koordinator-sh/koordinator/releases/download/v1.1.0/koord-runtime-proxy_1.1.0_linux_x86_64 -O koord-runtime-proxy\n$ chmod +x koord-runtime-proxy\n")),(0,o.kt)("p",null,"Or you can build from source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/koordinator-sh/koordinator.git\n$ cd koordinator\n$ make build-koord-runtime-proxy\n")),(0,o.kt)("h3",{id:"2setup-koord-runtime-proxy"},"2\u3001Setup koord-runtime-proxy"),(0,o.kt)("p",null,"Firstly, please make sure your runtime backend is containerd or dockerd."),(0,o.kt)("p",null,"Under containerd scenario, if your containerd listening CRI request on default ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/run/containerd/containerd.sock"),", koord-runtime-proxy can be setup by(no need to set any parameters):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"koord-runtime-proxy\n")),(0,o.kt)("p",null,"Or koord-runtime-proxy can be setup with command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"koord-runtime-proxy \\\n   --remote-runtime-service-endpoint=<runtime socketFile path> \\\n   --remote-image-service-endpoint=<image socketFile path>\n")),(0,o.kt)("p",null,"Under docker scenario, koord-runtime-proxy should be setup with the additional parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--backend-runtime-mode Docker"),", and without ",(0,o.kt)("inlineCode",{parentName:"p"},"remote-image-service-endpoint"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"koord-runtime-proxy \\\n   --backend-runtime-mode=Docker \\\n   --remote-runtime-service-endpoint=<runtime socketFile path>\n")),(0,o.kt)("p",null,"koord-runtime-proxy will listen on ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/run/koord-runtimeproxy/runtimeproxy.sock"),"."),(0,o.kt)("h3",{id:"3setup-kubelet"},"3\u3001Setup Kubelet"),(0,o.kt)("p",null,"To make koord-runtime-proxy a proxy between kubelet and containerd, kubelet parameters should be altered as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubelet <other options> \\\n   --container-runtime=remote \\\n   --container-runtime-endpoint=unix:///var/run/koord-runtimeproxy/runtimeproxy.sock\n")),(0,o.kt)("p",null,"Under docker scenario, to make koord-runtime-proxy a proxy between kubelet and dockerd, kubelet parameters should be altered as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubelet <other options> --docker-endpoint=unix:///var/run/koord-runtimeproxy/runtimeproxy.sock\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"Note that installing this chart directly means it will use the default template values for Koordinator."),(0,o.kt)("p",null,"You may have to set your specific configurations if it is deployed into a production cluster, or you want to configure feature-gates."),(0,o.kt)("h3",{id:"optional-chart-parameters"},"Optional: chart parameters"),(0,o.kt)("p",null,"The following table lists the configurable parameters of the chart and their default values."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"featureGates")),(0,o.kt)("td",{parentName:"tr",align:null},"Feature gates for Koordinator, empty string means all by default"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"}," "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,o.kt)("td",{parentName:"tr",align:null},"namespace for Koordinator installation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordinator-system"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"installation.createNamespace")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to create the installation.namespace"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"imageRepositoryHost")),(0,o.kt)("td",{parentName:"tr",align:null},"Image repository host"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ghcr.io"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.log.level")),(0,o.kt)("td",{parentName:"tr",align:null},"Log level that koord-manager printed"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"4"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.replicas")),(0,o.kt)("td",{parentName:"tr",align:null},"Replicas of koord-manager deployment"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.image.repository")),(0,o.kt)("td",{parentName:"tr",align:null},"Repository for koord-manager image"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koord-manager"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.image.tag")),(0,o.kt)("td",{parentName:"tr",align:null},"Tag for koord-manager image"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v1.1.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.cpu")),(0,o.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koord-manager container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1000m"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.memory")),(0,o.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koord-manager container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.cpu")),(0,o.kt)("td",{parentName:"tr",align:null},"CPU resource request of koord-manager container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"500m"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.memory")),(0,o.kt)("td",{parentName:"tr",align:null},"Memory resource request of koord-manager container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.metrics.port")),(0,o.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8080"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.webhook.port")),(0,o.kt)("td",{parentName:"tr",align:null},"Port of webhook served"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"9443"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.nodeAffinity")),(0,o.kt)("td",{parentName:"tr",align:null},"Node affinity policy for koord-manager pod"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.nodeSelector")),(0,o.kt)("td",{parentName:"tr",align:null},"Node labels for koord-manager pod"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.tolerations")),(0,o.kt)("td",{parentName:"tr",align:null},"Tolerations for koord-manager pod"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.resyncPeriod")),(0,o.kt)("td",{parentName:"tr",align:null},"Resync period of informer koord-manager, defaults no resync"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"manager.hostNetwork")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether koord-manager pod should run with hostnetwork"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.log.level")),(0,o.kt)("td",{parentName:"tr",align:null},"Log level that koord-scheduler printed"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"4"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.replicas")),(0,o.kt)("td",{parentName:"tr",align:null},"Replicas of koord-scheduler deployment"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.image.repository")),(0,o.kt)("td",{parentName:"tr",align:null},"Repository for koord-scheduler image"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koord-scheduler"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.image.tag")),(0,o.kt)("td",{parentName:"tr",align:null},"Tag for koord-scheduler image"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v1.1.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.resources.limits.cpu")),(0,o.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koord-scheduler container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1000m"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.resources.limits.memory")),(0,o.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koord-scheduler container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.resources.requests.cpu")),(0,o.kt)("td",{parentName:"tr",align:null},"CPU resource request of koord-scheduler container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"500m"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.resources.requests.memory")),(0,o.kt)("td",{parentName:"tr",align:null},"Memory resource request of koord-scheduler container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.port")),(0,o.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"10251"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.nodeAffinity")),(0,o.kt)("td",{parentName:"tr",align:null},"Node affinity policy for koord-scheduler pod"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.nodeSelector")),(0,o.kt)("td",{parentName:"tr",align:null},"Node labels for koord-scheduler pod"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.tolerations")),(0,o.kt)("td",{parentName:"tr",align:null},"Tolerations for koord-scheduler pod"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scheduler.hostNetwork")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether koord-scheduler pod should run with hostnetwork"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordlet.log.level")),(0,o.kt)("td",{parentName:"tr",align:null},"Log level that koordlet printed"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"4"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordlet.image.repository")),(0,o.kt)("td",{parentName:"tr",align:null},"Repository for koordlet image"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koordlet"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordlet.image.tag")),(0,o.kt)("td",{parentName:"tr",align:null},"Tag for koordlet image"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v1.1.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordlet.resources.limits.cpu")),(0,o.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koordlet container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"500m"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordlet.resources.limits.memory")),(0,o.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koordlet container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordlet.resources.requests.cpu")),(0,o.kt)("td",{parentName:"tr",align:null},"CPU resource request of koordlet container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordlet.resources.requests.memory")),(0,o.kt)("td",{parentName:"tr",align:null},"Memory resource request of koordlet container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"koordlet.enableServiceMonitor")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to enable ServiceMonitor for koordlet"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.failurePolicy.pods")),(0,o.kt)("td",{parentName:"tr",align:null},"The failurePolicy for pods in mutating webhook configuration"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Ignore"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.timeoutSeconds")),(0,o.kt)("td",{parentName:"tr",align:null},"The timeoutSeconds for all webhook configuration"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"30"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"crds.managed")),(0,o.kt)("td",{parentName:"tr",align:null},"Koordinator will not install CRDs with chart if this is false"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"imagePullSecrets")),(0,o.kt)("td",{parentName:"tr",align:null},"The list of image pull secrets for koordinator image"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))))),(0,o.kt)("p",null,"Specify each parameter using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"."),(0,o.kt)("h3",{id:"optional-feature-gate"},"Optional: feature-gate"),(0,o.kt)("p",null,"Feature-gate controls some influential features in Koordinator:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Effect (if closed)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PodMutatingWebhook")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to open a mutating webhook for Pod ",(0,o.kt)("strong",{parentName:"td"},"create")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"Don't inject koordinator.sh/qosClass, koordinator.sh/priority and don't replace koordinator extend resources ad so on")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PodValidatingWebhook")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to open a validating webhook for Pod ",(0,o.kt)("strong",{parentName:"td"},"create/update")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"It is possible to create some Pods that do not conform to the Koordinator specification, causing some unpredictable problems")))),(0,o.kt)("p",null,"If you want to configure the feature-gate, just set the parameter when install or upgrade. Such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install koordinator https://... --set featureGates="PodMutatingWebhook=true\\,PodValidatingWebhook=true"\n')),(0,o.kt)("p",null,"If you want to enable all feature-gates, set the parameter as ",(0,o.kt)("inlineCode",{parentName:"p"},"featureGates=AllAlpha=true"),"."),(0,o.kt)("h3",{id:"optional-the-local-image-for-china"},"Optional: the local image for China"),(0,o.kt)("p",null,"If you are in China and have problem to pull image from official DockerHub, you can use the registry hosted on Alibaba Cloud:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install koordinator https://... --set imageRepositoryHost=registry.cn-beijing.aliyuncs.com\n")),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("h3",{id:"installation-parameters-for-aws-eks"},"Installation parameters for AWS EKS"),(0,o.kt)("p",null,"When using a custom CNI (such as Weave or Calico) on EKS, the webhook cannot be reached by default. This happens because the control plane cannot be configured to run on a custom CNI on EKS, so the CNIs differ between control plane and worker nodes."),(0,o.kt)("p",null,"To address this, the webhook can be run in the host network so it can be reached, by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"--set manager.hostNetwork=true")," when use helm install or upgrade."),(0,o.kt)("h2",{id:"uninstall"},"Uninstall"),(0,o.kt)("p",null,"Note that this will lead to all resources created by Koordinator, including webhook configurations, services, namespace, CRDs and CR instances managed by Koordinator controller, to be deleted!"),(0,o.kt)("p",null,"Please do this ONLY when you fully understand the consequence."),(0,o.kt)("p",null,"To uninstall koordinator if it is installed with helm charts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall koordinator\nrelease "koordinator" uninstalled\n')))}s.isMDXComponent=!0}}]);