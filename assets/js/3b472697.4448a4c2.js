"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[3620],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(t),g=i,h=p["".concat(s,".").concat(g)]||p[g]||c[g]||o;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=g;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const o={},l="GangScheduling",r={unversionedId:"designs/gang-scheduling",id:"version-v1.4/designs/gang-scheduling",title:"GangScheduling",description:"Summary",source:"@site/versioned_docs/version-v1.4/designs/gang-scheduling.md",sourceDirName:"designs",slug:"/designs/gang-scheduling",permalink:"/docs/v1.4/designs/gang-scheduling",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/gang-scheduling.md",tags:[],version:"v1.4",lastUpdatedBy:"wangjianyu",lastUpdatedAt:1705567859,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Fine-grained device scheduling",permalink:"/docs/v1.4/designs/fine-grained-device-scheduling"},next:{title:"Multi Hierarchy Elastic Quota Management",permalink:"/docs/v1.4/designs/multi-hierarchy-elastic-quota-management"}},s={},d=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Compared with competitors",id:"compared-with-competitors",level:3},{value:"Coscheduling",id:"coscheduling",level:4},{value:"Goals",id:"goals",level:3},{value:"Non Goals and Future Work",id:"non-goals-and-future-work",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Key concept",id:"key-concept",level:3},{value:"Strict and NonStrict",id:"strict-and-nonstrict",level:4},{value:"GangGroup",id:"ganggroup",level:4},{value:"After Gang",id:"after-gang",level:4},{value:"API",id:"api",level:3},{value:"Definition",id:"definition",level:4},{value:"CRD way",id:"crd-way",level:4},{value:"Example",id:"example",level:5},{value:"Annotation way",id:"annotation-way",level:4},{value:"Example",id:"example-1",level:5},{value:"Implementation Details",id:"implementation-details",level:3},{value:"QueueSortPlugin",id:"queuesortplugin",level:4},{value:"GangSchedulingPlugin",id:"gangschedulingplugin",level:4},{value:"Data-Structure",id:"data-structure",level:5},{value:"Gang",id:"gang",level:6},{value:"GangPlugin",id:"gangplugin",level:5},{value:"<strong>PreFilter</strong>",id:"prefilter",level:6},{value:"<strong>PostFilter</strong>",id:"postfilter",level:6},{value:"<strong>Permit</strong>",id:"permit",level:6},{value:"<strong>Un-reserve</strong>",id:"un-reserve",level:6},{value:"<strong>Init</strong>",id:"init",level:6},{value:"Unsolved Problems",id:"unsolved-problems",level:2},{value:"Alternatives",id:"alternatives",level:2}],u={toc:d},p="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gangscheduling"},"GangScheduling"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This proposal provides Gang mechanism for the scheduler to control pods binding opportunity. User can declare a resource-collection-minimum number,\nonly when assigned-resources reach the given limitation can trigger the binding. We provide ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NonStrict")," to\ncontrol the resource-accumulation-process by a configuration. We also provide a two-level Gang description for better matching\nthe real scenario, which is different from community."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"In AI scenarios, lots of jobs need Gang scheduling. The community have lots of related implements such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Coscheduling")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"vocalno"),".\nWe received lots of inspirations in the design process from them."),(0,i.kt)("h3",{id:"compared-with-competitors"},"Compared with competitors"),(0,i.kt)("h4",{id:"coscheduling"},"Coscheduling"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Coscheduling")," implement a new queue-sort interface and other methods to let one Gang's pods get out of the queue in order as much as possible.\nIf a pod failed to be scheduled, the requests that have been successfully scheduled in this round of Gang scheduling cycle will be rolled back,\nand the remaining pods waiting for scheduling will be rejected in PreFilter check until this scheduling cycle passed.\nFor example, there is a Gang requires 10 tasks to be scheduled, if first 5 tasks allocated, the 6th task failed to be scheduled,\n",(0,i.kt)("inlineCode",{parentName:"p"},"Coscheduling")," will roll-back first 5 tasks and ignore the remaining 4 tasks in this Gang scheduling cycle. ",(0,i.kt)("inlineCode",{parentName:"p"},"Coscheduling")," simply use a\nglobal time interval to control the Gang scheduling cycle. The first defect is that the uniform time interval will cause\nsome problems. If the time configuration is too long, it will lead to useless waiting; If the time configuration is too short,\nit will lead to useless scheduling. Secondly, it is very difficult for a large job to meet all resource requests at one time.\nThis mechanism will lead to a very low probability of full resources, and eventually make the job starve to death. We call this process as ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Some jobs have complex Gang requirements. For example, a job has several roles. Each role will have several pods\nand its own Gang conditions. Jobs also need different roles to form different GangGroups. All pods in a GangGroup can\ntrigger the bind process only after all roles in a GangGroup meet their Gang conditions. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Coscheduling")," can't meet\nthis requirement."))),(0,i.kt)("h3",{id:"goals"},"Goals"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Define API to announce Gang scheduling configuration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Provides a scheduler plugin to achieve Gang scheduling ability."))),(0,i.kt)("h3",{id:"non-goals-and-future-work"},"Non Goals and Future Work"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provide ability to solve Gang resource deadlock problems with ",(0,i.kt)("inlineCode",{parentName:"li"},"NonStrict"),".")),(0,i.kt)("h2",{id:"proposal"},"Proposal"),(0,i.kt)("h3",{id:"key-concept"},"Key concept"),(0,i.kt)("h4",{id:"strict-and-nonstrict"},"Strict and NonStrict"),(0,i.kt)("p",null,"As mentioned above, in ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict"),", if a pod failed to be scheduled, the pods that have been successfully scheduled in\nthis scheduling cycle will be rolled back, and the remaining pods waiting for scheduling will be rejected in\nPreFilter check util this scheduling cycle passed. We call this mode is ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict"),"."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"NonStrict"),", if a pod failed to be scheduled, it has no impact on any other pod. We will continue to accumulate\nthe allocated pod until the condition of Gang is met. This process is friendly to Gangs with large number of pods, but it\nwill increase the risk of resource deadlock between Gangs. For example, the quota of the quota group is 10(quota will be proposed later),\nand the user submits three Gangs with 5 pods. Due to various plugin constraints, Gang1\\2\\3 may allocate resources of 3\\3\\4 respectively.\nSince the quota group's quota is full, there will be no new resource scheduling. We call this is resource deadlock of resource Gang.\nIn future proposal, we will try to fix this problem."),(0,i.kt)("h4",{id:"ganggroup"},"GangGroup"),(0,i.kt)("p",null,"As mentioned above, Some jobs have complex Gang requirements. For example, a job has several roles. Each role will have several pods\nand its own Gang conditions. Jobs also need different roles to form different GangGroups. All pods in a GangGroup can\ntrigger the bind process only after all roles in a GangGroup meet their Gang conditions. So we introduce ",(0,i.kt)("inlineCode",{parentName:"p"},"GangGroup")," concept,\nwhich allow user to bundle different Gangs together."),(0,i.kt)("h4",{id:"after-gang"},"After Gang"),(0,i.kt)("p",null,"It should be noted that, if the resource accumulation conditions of Gang are met, then some pods failed in the process of binding,\nor some bound pods are preempted\\rescheduled, should the constraints of Gang still be effective in the process of resource reallocation?\nBecause the initial purpose of Gang is to require pods to be pulled up at the same time, if some pods have been pulled up,\nthen the subsequent Gang behavior is meaningless. Therefore, when once Gang has been satisfied, all subsequent resource allocations\nare no longer constrained by Gang rules, and their performance is similar to ordinary pod."),(0,i.kt)("p",null,"As mentioned above, ",(0,i.kt)("inlineCode",{parentName:"p"},"WaitTime")," is the max wait time since first pod comes to permit stage. If ",(0,i.kt)("inlineCode",{parentName:"p"},"WaitTime")," is timeout,\nscheduler will roll back all assumed pods, update each pod's annotation with ",(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/timeout=true"),", and\nwon't schedule these pods anymore. User should pay attention to this status and delete pods timely."),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Our original intention is to improve and enhance the ability of the community's original ",(0,i.kt)("inlineCode",{parentName:"p"},"PodGroup"),", so we will be\ncompatible with the way the community declares the ",(0,i.kt)("inlineCode",{parentName:"p"},"PodGroup"),". We also provide a lighting way to just use annotations to\nuse Gang feature."),(0,i.kt)("h4",{id:"crd-way"},"CRD way"),(0,i.kt)("p",null,"User can use ",(0,i.kt)("inlineCode",{parentName:"p"},"PodGroup")," CRD in community to declare a gang:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type PodGroup struct {\n    metav1.TypeMeta `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n    Spec PodGroupSpec `json:"spec,omitempty"`\n    Status PodGroupStatus `json:"status,omitempty"`\n}\ntype PodGroupSpec struct {\n    MinMember int32 `json:"minMember,omitempty"`\n    MinResources *v1.ResourceList `json:"minResources,omitempty"`\n    \n    ScheduleTimeoutSeconds *int32 `json:"scheduleTimeoutSeconds,omitempty"`\n}\n')),(0,i.kt)("p",null,"Pod should use ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-group.scheduling.sigs.k8s.io")," in label to associate with ",(0,i.kt)("inlineCode",{parentName:"p"},"PodGroup"),"."),(0,i.kt)("p",null,"Also, we introduce some optional definitions as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"gang.scheduling.koordinator.sh/total-number\ngang.scheduling.koordinator.sh/mode        \ngang.scheduling.koordinator.sh/groups\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/name")," indicates the gang's name, it should be emphasized that the name should be in the form of RFC 1123 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/total-number")," helps to calculate Gang scheduling cycle in ",(0,i.kt)("inlineCode",{parentName:"p"},"strict mode"),", you can\nfind more detail in ",(0,i.kt)("inlineCode",{parentName:"p"},"Data-Structure")," chapter. Default equals to ",(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/min-available"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/mode")," determines ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"NonStrict"),". Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/groups")," describes GangGroups. Default is empty, which means don't need to form a ",(0,i.kt)("inlineCode",{parentName:"p"},"GangGroup")," with others,\nand the gangs in one gangGroup can from different namespaces."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/total-number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/mode"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/gang-groups")," should be found in\n",(0,i.kt)("inlineCode",{parentName:"p"},"PodGroup"),"'s annotation if needed."),(0,i.kt)("h5",{id:"example"},"Example"),(0,i.kt)("p",null,"When user apply a basic gang, the example is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1alpha1\nkind: PodGroup\nmetadata:\n  creationTimestamp: "2022-07-11T18:26:33Z"\n  name: gang-a\n  namespace: default\nspec:\n  minMember: 5\n  minResources:\n    cpu: "5"\n    memory: "2048Mi"\n  scheduleTimeoutSeconds: 600\n')),(0,i.kt)("p",null,"Let's assume a job has two roles: A and B, each role has several pods. podA belongs to roleA, podB belongs to roleB.\nroleA and roleB belongs to one GangGroup, the example is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1alpha1\nkind: PodGroup\nmetadata:\n  creationTimestamp: "2022-07-11T18:26:33Z"\n  name: gang-a\n  namespace: namespaceA\n  annotations:\n    gang.scheduling.koordinator.sh/total-number: 5\n    gang.scheduling.koordinator.sh/mode: Strict\n    gang.scheduling.koordinator.sh/groups: ["namespaceA/gang-a", "namespaceB/gang-b"]\nspec:\n  minMember: 5\n  minResources:\n    cpu: "5"\n    memory: "2048Mi"\n  scheduleTimeoutSeconds: 600\n')),(0,i.kt)("p",null,"It should be noted that, if use Gang feature by ",(0,i.kt)("inlineCode",{parentName:"p"},"CRD way"),", user should let high level operator maintain Gang CRD life circle\nlike handling ",(0,i.kt)("inlineCode",{parentName:"p"},"update/create/delete")," events. Also, from a Scheduler perspective, scheduler should handle receive-order-issue's\nbetween Gang CRD and pod. For example, if pods arrive to scheduler before Gang CRD, we have to build a fake Gang data structure\ntemporarily to collect all related pods, and need to suspend the scheduling of pods until parse the configuration from real Gang CRD."),(0,i.kt)("h4",{id:"annotation-way"},"Annotation way"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"gang.scheduling.koordinator.sh/name           \ngang.scheduling.koordinator.sh/min-available\n")),(0,i.kt)("p",null,"The upper definitions are indispensable. We are compatible with ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-group.scheduling.sigs.k8s.io"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-group.scheduling.sigs.k8s.io/name"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-group.scheduling.sigs.k8s.io/min-available")," in community. We also support new definitions to declare Gang's name and minimum number."),(0,i.kt)("p",null,"Also, we introduce some optional definitions as below, most are mentioned above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"gang.scheduling.koordinator.sh/waiting-time\ngang.scheduling.koordinator.sh/total-number\ngang.scheduling.koordinator.sh/mode        \ngang.scheduling.koordinator.sh/groups\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/waiting-time")," represents max wait time since first pod comes to permit stage. Default is a global config.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/total-number")," helps to calculate Gang scheduling cycle in ",(0,i.kt)("inlineCode",{parentName:"p"},"strict mode"),", you can\nfind more detail in ",(0,i.kt)("inlineCode",{parentName:"p"},"Data-Structure")," chapter. Default equals to ",(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/min-available"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/mode")," determines ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"NonStrict"),". Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/groups")," describes GangGroups. Default is empty, which means don't need to form a ",(0,i.kt)("inlineCode",{parentName:"p"},"GangGroup")," with others."))),(0,i.kt)("p",null,'It should be noted that, the annotation mode\'s parameter will overwrite CRD\'s mode if both exist.\nAnd gangGroup should be announced with " gangNamespace" + "/" + "gangName "'),(0,i.kt)("h5",{id:"example-1"},"Example"),(0,i.kt)("p",null,"When user apply a basic gang, the example is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n   annotations:\n    gang.scheduling.koordinator.sh/name: gang-a\n    gang.scheduling.koordinator.sh/min-available: 5\n")),(0,i.kt)("p",null,"Let's assume a job has two roles: A and B, each role has several pods. PodA belongs to roleA, podB belongs to roleB.\nroleA and roleB belongs to one GangGroup, the example is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n   annotations:\n     gang.scheduling.koordinator.sh/name: gang-a\n     gang.scheduling.koordinator.sh/waiting-time: 3600s \n     gang.scheduling.koordinator.sh/min-available: 5\n     gang.scheduling.koordinator.sh/total-number: 5\n     gang.scheduling.koordinator.sh/mode: Strict\n     gang.scheduling.koordinator.sh/groups: ["namespaceA/gang-a", "namespaceB/gang-b"]\nmetadata:\n   annotations:\n     gang.scheduling.koordinator.sh/name: gang-b\n     gang.scheduling.koordinator.sh/waiting-time: 3600s \n     gang.scheduling.koordinator.sh/min-available: 5\n     gang.scheduling.koordinator.sh/total-number: 5\n     gang.scheduling.koordinator.sh/mode: Strict\n     gang.scheduling.koordinator.sh/groups: ["namespaceA/gang-a", "namespaceB/gang-b"]\n')),(0,i.kt)("p",null,"Assuming a job has two roles: A and B, each role has several pods. podA belongs to roleA, podB belongs to roleB.\nroleA and roleB belongs to different GangGroup, the example as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  annotations:\n     gang.scheduling.koordinator.sh/name: gang-a\n     gang.scheduling.koordinator.sh/waiting-time: 3600s \n     gang.scheduling.koordinator.sh/min-available: 5\n     gang.scheduling.koordinator.sh/total-number: 5\n     gang.scheduling.koordinator.sh/mode: Strict\n     gang.scheduling.koordinator.sh/groups: ""\nmetadata:\n   annotations:\n     gang.scheduling.koordinator.sh/name: gang-b\n     gang.scheduling.koordinator.sh/waiting-time: 3600s \n     gang.scheduling.koordinator.sh/min-available: 5\n     gang.scheduling.koordinator.sh/total-number: 5\n     gang.scheduling.koordinator.sh/mode: Strict\n     gang.scheduling.koordinator.sh/groups: ""\n')),(0,i.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,i.kt)("h4",{id:"queuesortplugin"},"QueueSortPlugin"),(0,i.kt)("p",null,"We design an independent plugin to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"QueueSort")," extension point separately, so that we can integrate\nqueue sort logic of all plugins, and register them at one time."),(0,i.kt)("p",null,"In this proposal, we implement the Less function to gather pods belong to same Gang. The specific queuing rule is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Firstly, compare the priorities of the two pods, the higher priority is at the front of the queue.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Secondly, compare creationTimestamp of two pods, if pod belongs to a Gang, then we compare creationTimestamp of the Gang,\nthe one created first will be at the front of the queue.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, compare pod's namespace, if pod belongs to a Gang, then we compare Gang name. "))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type QueueSortPlugin interface{\n    QueueSort(*QueuedPodInfo, *QueuedPodInfo) bool\n}\n")),(0,i.kt)("h4",{id:"gangschedulingplugin"},"GangSchedulingPlugin"),(0,i.kt)("h5",{id:"data-structure"},"Data-Structure"),(0,i.kt)("h6",{id:"gang"},"Gang"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Gang struct {\n    Name                         string                \n    WaitTime                     time.Duration                       \n    Mode                         string                 //Strict or NonStrict\n    GangGroup                    []string               \n    MinRequiredNumber            int                    \n    TotalChildrenNum             int\n    Children                     map[string]*PodInfo  \n    BoundChildren                map[string]*PodInfo\n    WaitingForBindChildren       map[string]*PodInfo\n    ResourceSatisfied            bool \n    ScheduleCycle                int\n    ScheduleCycleValid           bool\n    ChildrenScheduleRoundMap     map[string]int\n}\n")),(0,i.kt)("p",null,'We design the Gang to record Gang status in scheduler memory. We can get the children pods from "Children" field, and the\n',(0,i.kt)("inlineCode",{parentName:"p"},"BoundChildren, WaitingForBindChildren")," store the pods binding status, which is used to check if the pods can pass permit stage."),(0,i.kt)("p",null,"Once Permit stage passed, we will set ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceSatisfied=true"),", as mentioned above in ",(0,i.kt)("inlineCode",{parentName:"p"},"After Gang")," chapter, this variable is\nused for judging whether gang has been satisfied. when handle failover case, if any pod in Gang has been bound, we set ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceSatisfied=true"),"."),(0,i.kt)("p",null,"We especially explain ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenScheduleRoundMap")," field. These fields control Gang's scheduling cycle. For example,\nat the beginning, ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycle")," is 1, and each pod's cycle in ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenScheduleRoundMap")," is 0. When each pod comes to PreFilter,\nwe will check if the pod's value in ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenScheduleRoundMap")," is smaller than Gang's ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycle"),", If result is positive,\nwe set the pod's cycle in ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenScheduleRoundMap")," equal with ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycle")," and pass the check. If result is negative, means\nthe pod has been scheduled in this cycle, so we should reject it. With ",(0,i.kt)("inlineCode",{parentName:"p"},"totalChildrenNum"),"'s help, when the last pod comes to make all\n",(0,i.kt)("inlineCode",{parentName:"p"},"childrenScheduleRoundMap"),"'s values equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycle"),", Gang's ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycle")," will be added by 1, which means a new schedule cycle."),(0,i.kt)("p",null,"We continue to explain ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycleValid"),' field, during the scheduling,  When a pod failed at Filter stage, we will set ScheduleCycleValid to\nfalse in PostFilter stage, which means any pod in this Gang shouldn\'t be scheduled until it is set to "true",\nand the remaining pods should be rejected in PreFilter stage. Only When ',(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycle")," added by 1, we will reset the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycleValid")," to true."),(0,i.kt)("p",null,"It should be emphasized that ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycle\\scheduleCycleValid\\childrenScheduleRoundMap")," only work in ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict"),". "),(0,i.kt)("h5",{id:"gangplugin"},"GangPlugin"),(0,i.kt)("p",null,"this is the framework of the Plugin,we cache the Gang info above in the gangCache."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type GangPlugin struct {\n    frameworkHandler            framework.Handle\n    gangClient                  gangClient.Interface\n    podLister                   listerv1.PodLister\n    snapshotSharedLister        framework.SharedLister\n    gangCache                   map[string]*Gang\n}\n")),(0,i.kt)("p",null,"during the whole kubernetes shceduling process,we only need to realize our logic into four extention points as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var(\n    _ framework.PreFilterPlugin = &GangScheduling{}\n    _ framework.PostFilterPlugin = &GangScheduling{}\n    _ framework.PermitPlugin = &GangScheduling{}\n    _ framework.ReservePlugin = &Coscheduling{}\n)\ntype GangScheduling interface{\n    ActiveGang(pod *corev1.Pod, state *framework.CycleState)\n    PreFilter(context.Context, *corev1.Pod) error\n    PostFilter(ctx context.Context, state *CycleState, pod *v1.Pod, filteredNodeStatusMap NodeToStatusMap) (*PostFilterResult, *Status)\n    Permit(context.Context, *corev1.Pod) Status\n    Unreserve(ctx context.Context, state *framework.CycleState, pod *v1.Pod, nodeName string)\n}\n")),(0,i.kt)("h6",{id:"prefilter"},(0,i.kt)("strong",{parentName:"h6"},"PreFilter")),(0,i.kt)("p",null,"if ",(0,i.kt)("inlineCode",{parentName:"p"},"NonStrict"),", we only do step1 and step2:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check whether childes in Gang has met the requirements of minimum number under each Gang, and reject the pod if negative.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check whether the Gang has been timeout(check the pod's annotation,later introduced at Permit section), and reject the pod if positive.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check whether the Gang has met the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycleValid")," check, and reject the pod if negative.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Try update ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycleValid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenScheduleRoundMap")," as mentioned above."))),(0,i.kt)("h6",{id:"postfilter"},(0,i.kt)("strong",{parentName:"h6"},"PostFilter")),(0,i.kt)("p",null,"At this point means the pod didn't pass the Filter Plugin, we should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict"),", we will set ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleCycleValid")," to false and release all assumed pods.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"NonStrict"),", we will do nothing."))),(0,i.kt)("h6",{id:"permit"},(0,i.kt)("strong",{parentName:"h6"},"Permit")),(0,i.kt)("p",null,"Any pod passes Filter stage will come to this stage. Scheduler will calculate all Gangs in GangGroup whether the current\nnumber of assumed-pods in each Gang meets the Gang's minimum requirement."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'If Gang don\'t meet the bind-condition, we will give the pod a "Wait" Status with a timeout duration, and the bind\ngoroutine will keep waiting until the wait is timeout or passed. Then we will run the ',(0,i.kt)("inlineCode",{parentName:"li"},"ActiveGang")," method, it can put all\nthe pods belong to the Gang which in ",(0,i.kt)("inlineCode",{parentName:"li"},"schedulableQueue")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"backoffQueue")," back to ",(0,i.kt)("inlineCode",{parentName:"li"},"activeQueue"),", so that the pod of Gang\ncan be continuously scheduled as much as possible. ")),(0,i.kt)("p",null,"It should be noted that, in community, scheduler limit maximum timeout value under 15 min, we may need to hook RunPermitPlugins\nto enlarge the timeout when 15 minutes is not enough. Now we record as a known-issue."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'If Gang meet the bind-condition, we will give every waiting pod a "Success" status, which will let the bind goroutine of\neach pod leave the waiting status and continue to run. Also, as mentioned above, we will set Gang\'s ',(0,i.kt)("inlineCode",{parentName:"li"},"ResourceSatisfied")," to true.")),(0,i.kt)("h6",{id:"un-reserve"},(0,i.kt)("strong",{parentName:"h6"},"Un-reserve")),(0,i.kt)("p",null,'Both permit stage is timeout and binding failed will lead the pod to un-reserve stage, we can distinguish from Gang\'s "ResourceSatisfied" field,\nif the field is true means binding failed, else means the Gang is timeout.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When permit stage is timeout, we will give an annotation like ",(0,i.kt)("inlineCode",{parentName:"p"},"gang.scheduling.koordinator.sh/timeout=true")," to all the pods\nbelong to the Gang and will release the resource of all the assumed pods. The Gang will not be scheduled anymore,\nuser should manually handle the timeout event.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When binding failed, as mentioned above, the collection of Gang's resource is over, we will do nothing except roll back\nthe failed pod resource."))),(0,i.kt)("h6",{id:"init"},(0,i.kt)("strong",{parentName:"h6"},"Init")),(0,i.kt)("p",null,"We will register pod's event handler to watch pod event for updating Gang."),(0,i.kt)("h2",{id:"unsolved-problems"},"Unsolved Problems"),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"User can choose use Gang by ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NonStrict")," case by case."))}c.isMDXComponent=!0}}]);