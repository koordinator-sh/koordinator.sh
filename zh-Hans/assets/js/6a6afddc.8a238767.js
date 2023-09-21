"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2761],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>h});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},m=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return n?t.createElement(h,l(l({ref:a},m),{},{components:n})):t.createElement(h,l({ref:a},m))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5500:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const o={},l="Multi Hierarchy Elastic Quota Management",i={unversionedId:"user-manuals/multi-hierarchy-elastic-quota-management",id:"version-v1.3/user-manuals/multi-hierarchy-elastic-quota-management",title:"Multi Hierarchy Elastic Quota Management",description:"Multi Hierarchy ElasticQuota Management is an ability of koord-scheduler to manage different user's resource usage in a shared-cluster.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.3/user-manuals/multi-hierarchy-elastic-quota-management.md",sourceDirName:"user-manuals",slug:"/user-manuals/multi-hierarchy-elastic-quota-management",permalink:"/zh-Hans/docs/user-manuals/multi-hierarchy-elastic-quota-management",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/multi-hierarchy-elastic-quota-management.md",tags:[],version:"v1.3",lastUpdatedBy:"saintube",lastUpdatedAt:1692186595,formattedLastUpdatedAt:"2023\u5e748\u670816\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"GangScheduling",permalink:"/zh-Hans/docs/user-manuals/gang-scheduling"},next:{title:"SLO \u914d\u7f6e",permalink:"/zh-Hans/docs/user-manuals/slo-config"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Use Multi-Hierarchy-ElasticQuota-Management",id:"use-multi-hierarchy-elasticquota-management",level:2},{value:"Quick Start by Label",id:"quick-start-by-label",level:3},{value:"Quick Start by Namespace",id:"quick-start-by-namespace",level:3},{value:"Quota Debug Api.",id:"quota-debug-api",level:3},{value:"Advanced Configurations",id:"advanced-configurations",level:3},{value:"WebHook Verify",id:"webhook-verify",level:3},{value:"used &gt; runtime revoke",id:"used--runtime-revoke",level:3}],m={toc:u},p="wrapper";function c(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-hierarchy-elastic-quota-management"},"Multi Hierarchy Elastic Quota Management"),(0,r.kt)("p",null,"Multi Hierarchy ElasticQuota Management is an ability of koord-scheduler to manage different user's resource usage in a shared-cluster."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"When several users or teams share a cluster, fairness of resource allocation is very important. the Koordinator provides\nmulti-hierarchy elastic quota management mechanism for the scheduler. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It supports configuring quota groups in a tree structure, which is similar to the organizational structure of most companies."),(0,r.kt)("li",{parentName:"ul"},'It supports the borrowing / returning of resources between different quota groups, for better resource utilization efficiency.\nThe busy quota groups can automatically temporarily borrow the resources from the idle quota groups, which can improve the\nutilization of the cluster. At the same time, when the idle quota group turn into the busy quota group, it can also automatically\ntake back the "lent-to" resources.'),(0,r.kt)("li",{parentName:"ul"},"It considers the resource fairness between different quota groups. When the busy quota groups borrow the\nresources from the idle quota groups, the resources can be allocated to the busy quota groups under some fair rules.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,r.kt)("li",{parentName:"ul"},"Koordinator >= 0.71")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"Multi-Hierarchy-ElasticQuota-Management is ",(0,r.kt)("em",{parentName:"p"},"Enabled")," by default. You can use it without any modification on the koord-descheduler config."),(0,r.kt)("h2",{id:"use-multi-hierarchy-elasticquota-management"},"Use Multi-Hierarchy-ElasticQuota-Management"),(0,r.kt)("h3",{id:"quick-start-by-label"},"Quick Start by Label"),(0,r.kt)("p",null,"1.Create a Deployment ",(0,r.kt)("inlineCode",{parentName:"p"},"quota-example")," with the YAML file below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/parent: ""\n    quota.scheduling.koordinator.sh/is-parent: "false"\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n  min:\n    cpu: 10\n    memory: 20Mi\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f quota-example.yaml\n  elasticquota.scheduling.sigs.k8s.io/quota-example created\n\n$ kubectl get eqs -n default\n  NAME     AGE\n  test-d   2s\n")),(0,r.kt)("p",null,"2.Create a pod ",(0,r.kt)("inlineCode",{parentName:"p"},"pod-example")," with the YAML file below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/name: "quota-example"\nspec:\n  schedulerName: koord-scheduler\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: 40m\n        memory: 40Mi\n      requests:\n        cpu: 40m\n        memory: 40Mi\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  restartPolicy: Always\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f pod-example.yaml\n  pod/pod-example created\n")),(0,r.kt)("p",null,"3.Verify ",(0,r.kt)("inlineCode",{parentName:"p"},"quota-example")," has changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get eqs -n default quota-example -o yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ElasticQuota\nmetadata:\n  annotations:\n    quota.scheduling.koordinator.sh/request: \'{"cpu":"40m","memory":"40Mi"}\'\n    quota.scheduling.koordinator.sh/runtime: \'{"cpu":"40m","memory":"40Mi"}\'\n    quota.scheduling.koordinator.sh/shared-weight: \'{"cpu":"40","memory":"40Gi"}\'\n  creationTimestamp: "2022-10-08T09:26:38Z"\n  generation: 2\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: "false"\n    quota.scheduling.koordinator.sh/parent: root\n    manager: koord-scheduler\n    operation: Update\n    time: "2022-10-08T09:26:50Z"\n  name: quota-example\n  namespace: default\n  resourceVersion: "39012008"\nspec:\n  max:\n    cpu: "40"\n    memory: 40Gi\n  min:\n    cpu: "10"\n    memory: 20Mi\nstatus:\n  used:\n    cpu: 40m\n    memory: 40Mi\n')),(0,r.kt)("h3",{id:"quick-start-by-namespace"},"Quick Start by Namespace"),(0,r.kt)("p",null,"1.Create namespace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create ns quota-example\n  namespace/quota-example created\n")),(0,r.kt)("p",null,"2.Create a Deployment ",(0,r.kt)("inlineCode",{parentName:"p"},"quota-example")," with the YAML file below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-example\n  namespace: quota-example\n  labels:\n    quota.scheduling.koordinator.sh/parent: ""\n    quota.scheduling.koordinator.sh/is-parent: "false"\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n  min:\n    cpu: 10\n    memory: 20Mi\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f quota-example.yaml\n  elasticquota.scheduling.sigs.k8s.io/quota-example created\n\n$ kubectl get eqs -n quota-example\n  NAME     AGE\n  test-d   2s\n")),(0,r.kt)("p",null,"2.Create a pod ",(0,r.kt)("inlineCode",{parentName:"p"},"pod-example")," with the YAML file below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-example\n  namespace: quota-example\nspec:\n  schedulerName: koord-scheduler\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: 40m\n        memory: 40Mi\n      requests:\n        cpu: 40m\n        memory: 40Mi\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  restartPolicy: Always\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f pod-example.yaml\n  pod/pod-example created\n")),(0,r.kt)("p",null,"3.Verify ",(0,r.kt)("inlineCode",{parentName:"p"},"quota-example")," has changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get eqs -n quota-example quota-example -o yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ElasticQuota\nmetadata:\n  annotations:\n    quota.scheduling.koordinator.sh/request: \'{"cpu":"40m","memory":"40Mi"}\'\n    quota.scheduling.koordinator.sh/runtime: \'{"cpu":"40m","memory":"40Mi"}\'\n    quota.scheduling.koordinator.sh/shared-weight: \'{"cpu":"40","memory":"40Gi"}\'\n  creationTimestamp: "2022-10-08T09:26:38Z"\n  generation: 2\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: "false"\n    quota.scheduling.koordinator.sh/parent: root\n    manager: koord-scheduler\n    operation: Update\n    time: "2022-10-08T09:26:50Z"\n  name: quota-example\n  namespace: quota-example\n  resourceVersion: "39012008"\nspec:\n  max:\n    cpu: "40"\n    memory: 40Gi\n  min:\n    cpu: "10"\n    memory: 20Mi\nstatus:\n  used:\n    cpu: 40m\n    memory: 40Mi\n')),(0,r.kt)("h3",{id:"quota-debug-api"},"Quota Debug Api."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n koordinator-system get lease koord-scheduler --no-headers | awk '{print $2}' | cut -d'_' -f1 | xargs -I {} kubectl -n koordinator-system get pod {} -o wide --no-headers | awk '{print $6}'\n  10.244.0.64\n\n$ curl 10.244.0.64:10251/apis/v1/plugins/ElasticQuota/quota/quota-example\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "allowLentResource": true,\n    "autoScaleMin": {\n        "cpu": "10",\n        "memory": "20Mi",\n    },\n    "isParent": false,\n    "max": {\n        "cpu": "40",\n        "memory": "40Gi",\n    },\n    "min": {\n        "cpu": "10",\n        "memory": "20Mi",\n    },\n    "name": "quota-example",\n    "parentName": "root",\n    "podCache": {\n        "pod-example": {\n            "isAssigned": true,\n            "resource": {\n                "cpu": "40m",\n                "memory": "40Mi"\n            }\n        }\n    },\n    "request": {\n        "cpu": "40m",\n        "memory": "40Mi"\n    },\n    "runtime": {\n        "cpu": "40m",\n        "memory": "41943040",\n    },\n    "runtimeVersion": 39,\n    "sharedWeight": {\n        "cpu": "40",\n        "memory": "40Gi",\n    },\n    "used": {\n        "cpu": "40m",\n        "memory": "40Mi"\n    }\n}\n')),(0,r.kt)("p",null,"The main different with yaml is that we can find all quota's pods and its status in ",(0,r.kt)("inlineCode",{parentName:"p"},"podCache"),"."),(0,r.kt)("h3",{id:"advanced-configurations"},"Advanced Configurations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: false\n    quota.scheduling.koordinator.sh/parent: "parent"\n    quota.scheduling.koordinator.sh/allow-lent-resource: true\n    quota.scheduling.koordinator.sh/shared-weight: \'{"cpu":"40","memory":"40Gi"}\'\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n  min:\n    cpu: 10\n    memory: 20Mi\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quota.scheduling.koordinator.sh/is-parent"),' is disposed by the user. It reflects the "child\\parent" attribute of the quota group. Default is child.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quota.scheduling.koordinator.sh/parent")," is disposed by the user. It reflects the parent quota name. Default is root."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quota.scheduling.koordinator.sh/shared-weight"),' is disposed by the user. It reflects the ability to share the "lent to" resource. Default equals to "max".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quota.scheduling.koordinator.sh/allow-lent-resource"),' is disposed by the user. It reflects whether quota group allows lent unused "min" to others.')),(0,r.kt)("h3",{id:"webhook-verify"},"WebHook Verify"),(0,r.kt)("p",null,'1.Except for the first level quota group, we require that the sum of "min" of all sub quota groups should be less than or\nequal to the "min" of parent group. '),(0,r.kt)("p",null,"first create parent quota:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-parent-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: true\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n  min:\n    cpu: 10\n    memory: 20Mi\n")),(0,r.kt)("p",null,"then create child quota:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: false\n    quota.scheduling.koordinator.sh/parent: "quota-parent-example"\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n  min:\n    cpu: 20\n    memory: 20Mi\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f quota-example.yaml\nError from server: error when creating "quota-example.yaml": admission webhook "vquota.kb.io" denied the request: checkMinQuotaSum allChildren SumMinQuota > parentMinQuota, parent: quota-parent-example\n')),(0,r.kt)("p",null,"2.Parent and child's min\\max resource key must same.\nfirst create parent quota:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-parent-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: true\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n  min:\n    cpu: 10\n    memory: 20Mi\n")),(0,r.kt)("p",null,"then create child quota:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: false\n    quota.scheduling.koordinator.sh/parent: "quota-parent-example"\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n    test: 200\n  min:\n    cpu: 10\n    memory: 20Mi\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl apply -f quota-example.yaml\n  Error from server: error when creating "quota-example.yaml": admission webhook "vquota.kb.io" denied the request: checkSubAndParentGroupMaxQuotaKeySame failed: quota-parent-example\'s key is not the same with quota-example\n')),(0,r.kt)("p",null,"3.Parent group cannot run pod."),(0,r.kt)("p",null,"first create parent quota:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-parent-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: true\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n  min:\n    cpu: 10\n    memory: 20Mi\n")),(0,r.kt)("p",null,"then create pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/name: "quota-parent-example"\nspec:\n  schedulerName: koord-scheduler\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: 40m\n        memory: 40Mi\n      requests:\n        cpu: 40m\n        memory: 40Mi\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  restartPolicy: Always\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl apply -f pod-example_xb.yaml\n  Error from server: error when creating "pod-example.yaml": admission webhook "vpod.kb.io" denied the request: pod can not be linked to a parentQuotaGroup,quota:quota-parent-example, pod:pod-example\n')),(0,r.kt)("p",null,"4.The parent of node can only be parent group, not child group."),(0,r.kt)("p",null,"first create parent quota:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-parent-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: false\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n  min:\n    cpu: 10\n    memory: 20Mi\n")),(0,r.kt)("p",null,"then create child quota:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: false\n    quota.scheduling.koordinator.sh/parent: "quota-parent-example"\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n    test: 200\n  min:\n    cpu: 10\n    memory: 20Mi\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl apply -f quota-example.yaml\n  Error from server: error when creating "elastic-quota-example_xb.yaml": admission webhook "vquota.kb.io" denied the request: quota-example has parentName quota-parent-example but the parentQuotaInfo\'s IsParent is false\n')),(0,r.kt)("p",null,"5.A quota group can't be converted on the attribute of parent group\\child group."),(0,r.kt)("p",null,"first create parent quota:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: ElasticQuota\nmetadata:\n  name: quota-parent-example\n  namespace: default\n  labels:\n    quota.scheduling.koordinator.sh/is-parent: true\nspec:\n  max:\n    cpu: 40\n    memory: 40Gi\n  min:\n    cpu: 10\n    memory: 20Mi\n")),(0,r.kt)("p",null,"then modify ",(0,r.kt)("inlineCode",{parentName:"p"},"quota.scheduling.koordinator.sh/is-parent:false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl apply -f quota-parent-example.yaml\n  elastic-quota-example_xb_parent.yaml": admission webhook "vquota.kb.io" denied the request: IsParent is forbidden modify now, quotaName:quota-parent-example\n')),(0,r.kt)("h3",{id:"used--runtime-revoke"},"used > runtime revoke"),(0,r.kt)("p",null,"We offer a config to control if quota's used > runtime, we allow the scheduler to delete over-resource-used pod from\nlow priority to high priority. you should follow the below config of ",(0,r.kt)("inlineCode",{parentName:"p"},"koord-scheduler-config.yaml")," in helm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: koord-scheduler-config\n  namespace: {{ .Values.installation.namespace }}\ndata:\n  koord-scheduler-config: |\n    apiVersion: kubescheduler.config.k8s.io/v1beta2\n    kind: KubeSchedulerConfiguration\n    leaderElection:\n      leaderElect: true\n      resourceLock: leases\n      resourceName: koord-scheduler\n      resourceNamespace: {{ .Values.installation.namespace }}\n    profiles:\n      - pluginConfig:\n        - name: ElasticQuota\n          args:\n            apiVersion: kubescheduler.config.k8s.io/v1beta2\n            kind: ElasticQuotaArgs\n            quotaGroupNamespace: {{ .Values.installation.namespace }}\n            monitorAllQuotas: true\n            revokePodInterval: 60s\n            delayEvictTime: 300s\n        plugins:\n          queueSort:\n            disabled:\n              - name: "*"\n            enabled:\n              - name: Coscheduling\n          preFilter:\n            enabled:\n              - name: NodeNUMAResource\n              - name: DeviceShare\n              - name: Reservation\n              - name: Coscheduling\n              - name: ElasticQuota\n          filter:\n              ...\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"monitorAllQuotas"),' enable "used > runtime revoke" logic. Default is false.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"revokePodInterval")," check loop time interval."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delayEvictTime"),' when "used > runtime" continues over ',(0,r.kt)("inlineCode",{parentName:"li"},"delayEvictTime")," will really trigger eviction.")),(0,r.kt)("p",null,"To let scheduler can really delete the pod successfully, you should config the ",(0,r.kt)("inlineCode",{parentName:"p"},"rbac/koord-scheduler.yaml")," as below in helm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: koord-scheduler-role\nrules:\n{{- if semverCompare "<= 1.20-0" .Capabilities.KubeVersion.Version }}\n- apiGroups:\n  - ""\n  resources:\n  - namespaces\n  verbs:\n  - get\n  - list\n  - watch\n{{- end }}\n- apiGroups:\n  - coordination.k8s.io\n  resources:\n  - leases\n  verbs:\n  - create\n  - get\n  - update\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  verbs:\n  - patch\n  - update\n  - delete\n- apiGroups:\n  ...\n')))}c.isMDXComponent=!0}}]);