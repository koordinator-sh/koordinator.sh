"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[3242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={},a="Resource Reservation",s={unversionedId:"designs/resource-reservation",id:"version-v1.1/designs/resource-reservation",title:"Resource Reservation",description:"Summary",source:"@site/versioned_docs/version-v1.1/designs/resource-reservation.md",sourceDirName:"designs",slug:"/designs/resource-reservation",permalink:"/docs/v1.1/designs/resource-reservation",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/resource-reservation.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Fine-grained CPU orchestration",permalink:"/docs/v1.1/designs/fine-grained-cpu-orchestration"},next:{title:"PodMigrationJob",permalink:"/docs/v1.1/designs/pod-migration-job"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals/Future Work",id:"non-goalsfuture-work",level:3},{value:"Proposal",id:"proposal",level:2},{value:"User Stories",id:"user-stories",level:3},{value:"Story 1",id:"story-1",level:4},{value:"Story 2",id:"story-2",level:4},{value:"Story 3",id:"story-3",level:4},{value:"Story 4",id:"story-4",level:4},{value:"API",id:"api",level:3},{value:"Implementation Details",id:"implementation-details",level:3},{value:"Reservation Plugin",id:"reservation-plugin",level:4},{value:"Schedule Reservations",id:"schedule-reservations",level:5},{value:"Allocate Reserved Resources",id:"allocate-reserved-resources",level:5},{value:"Expiration and Cleanup",id:"expiration-and-cleanup",level:5},{value:"Use Cases",id:"use-cases",level:4},{value:"Usage in Preemption",id:"usage-in-preemption",level:5},{value:"Usage in Descheduling",id:"usage-in-descheduling",level:5},{value:"Usage in Pre-allocation",id:"usage-in-pre-allocation",level:5},{value:"Risks and Mitigations",id:"risks-and-mitigations",level:3},{value:"Unsolved Problems",id:"unsolved-problems",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Use a <code>pause</code> pod with a low priority to reserve resources",id:"use-a-pause-pod-with-a-low-priority-to-reserve-resources",level:3},{value:"References",id:"references",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"resource-reservation"},"Resource Reservation"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"A scheduling mechanism and its API is provided to reserve node resources for pods may not be created yet."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Pods are fundamental units for allocating node resources in Kubernetes, which bind resource requirements with business logic. The scheduler is not able to reserve node resources for specific pods or workloads. We may try using a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-can-i-configure-overprovisioning-with-cluster-autoscaler"},"fake pod")," to prepare resources by the preemption mechanism. However, fake pods can be preempted by any scheduled pods with higher priorities, which make resources get scrambled unexpectedly."),(0,r.kt)("p",null,"In Koordinator, a resource reservation mechanism is proposed to enhance scheduling and especially benefits scenarios below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Preemption: Existing preemption does not guarantee that only preempting pods can allocate preempted resources. With a reservation, the scheduler should be able to "lock" resources preventing from allocation of other pods with the same or higher priority.'),(0,r.kt)("li",{parentName:"ol"},"De-scheduling: For the descheduler, it is better to ensure sufficient resources with the reservation before pods get rescheduled. Otherwise, rescheduled pods may not be runnable anymore and make the belonging application disrupted."),(0,r.kt)("li",{parentName:"ol"},"Horizontal scaling: Using reservation to achieve more deterministic horizontal scaling. e.g. Submit a reservation and make sure it is available before scaling up replicas."),(0,r.kt)("li",{parentName:"ol"},"Resource Pre-allocation: Sometimes we want to pre-allocate node resources for future resource demands even if the resources are not currently allocatable. Reservation can help with this and it should make no physical cost.")),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define the basic API of resource reservation for ",(0,r.kt)("em",{parentName:"li"},"Motivations<1,2,3>"),", extensible for supporting ",(0,r.kt)("em",{parentName:"li"},"Motivation<4>")," in the future."),(0,r.kt)("li",{parentName:"ul"},"Provide a scheduler plugin that implements above reservation mechanism.")),(0,r.kt)("h3",{id:"non-goalsfuture-work"},"Non-Goals/Future Work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Detailed design of reservative preemption/descheduler/horizontal scaler/pre-allocation."),(0,r.kt)("li",{parentName:"ul"},"Modify kubelet admission control for reservation objects.")),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("h3",{id:"user-stories"},"User Stories"),(0,r.kt)("h4",{id:"story-1"},"Story 1"),(0,r.kt)("p",null,"As a Kubernetes developer, I want to enhance the current ",(0,r.kt)("strong",{parentName:"p"},"preemption")," mechanism since preempted resources may be allocated by pods other than the preemptor. The scheduler can create a reservation for the preempting pods, so the ownership of preempted resources can be guaranteed, making the preemption more reliable."),(0,r.kt)("h4",{id:"story-2"},"Story 2"),(0,r.kt)("p",null,"As a cluster administrator, I want to use ",(0,r.kt)("strong",{parentName:"p"},"descheduler"),' to migrate pods that are placed abnormally to somewhere they could "live better" and fulfill orchestration requirements of the app. e.g. Move pods on a over-utilized node to idler nodes and bind CPUs of same NUMA node. Reservations can be created before rescheduling pods, helping ensure there are sufficient resources and well placement.'),(0,r.kt)("h4",{id:"story-3"},"Story 3"),(0,r.kt)("p",null,"As an application administrator, I want to make the ",(0,r.kt)("strong",{parentName:"p"},"horizontal scaling")," of my app more deterministic by submitting reservations before a scale-up. Besides, I can also reserve resources after a scale-down for future demands. It is useful especially when we want a guaranteed scale-up of applications for the coming business peak."),(0,r.kt)("h4",{id:"story-4"},"Story 4"),(0,r.kt)("p",null,"As a cluster administrator, I want to ",(0,r.kt)("strong",{parentName:"p"},"pre-allocate")," node resources for future usage no matter whether they are available now or not. I want to allocate the future free resources but do not disrupt the running of scheduled pods. Reservation can be made to pre-allocate resources since it makes no physical cost to the node. It may be in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Waiting")," state. When there is enough space for the reservation, it will become ",(0,r.kt)("inlineCode",{parentName:"p"},"Available")," for the owner pods' scheduling."),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("p",null,"In this section, a Custom Resource Definition (CRD) named ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," is proposed to allow the scheduler to reserve node resources for specific pods."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(4462).Z,width:"511",height:"371"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Reservation objects are non-namespaced.\n// It can reserve resources for pods of any namespace. Any affinity/anti-affinity of reservation scheduling can be\n// specified in the pod template.\ntype Reservation struct {\n    metav1.TypeMeta `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n    Spec              ReservationSpec   `json:"spec,omitempty"`\n    Status            ReservationStatus `json:"status,omitempty"`\n}\n\ntype ReservationSpec struct {\n    // Template defines the scheduling requirements (resources, affinities, images, ...) processed by the scheduler just\n    // like a normal pod.\n    // If the `template.spec.nodeName` is specified, the scheduler will not choose another node but reserve resources on\n    // the specified node.\n    Template *corev1.PodTemplateSpec `json:"template,omitempty"`\n    // Specify the owners who can allocate the reserved resources.\n    // Multiple owner selectors and ORed.\n    Owners []ReservationOwner `json:"owners,omitempty"`\n    // By default, the resources requirements of reservation (specified in `template.spec`) is filtered by whether the\n    // node has sufficient free resources (i.e. ReservationRequest <  NodeFree).\n    // When `preAllocation` is set, the scheduler will skip this validation and allow overcommitment. The scheduled\n    // reservation would be waiting to be available until free resources are sufficient.\n    // NOTE: Not supported in v0.6.\n    PreAllocation bool `json:"preAllocation,omitempty"`\n    // Time-to-Live period for the reservation.\n    // `expires` and `ttl` are mutually exclusive. If both `ttl` and `expires` are not specified, a very\n    // long TTL will be picked as default. Set 0 to disable the expiration.\n    TTL *metav1.Duration `json:"ttl,omitempty"`\n    // Expired timestamp when the reservation expires.\n    // `expires` and `ttl` are mutually exclusive. Defaults to being set dynamically at runtime based on the `ttl`.\n    Expires *metav1.Time `json:"expires,omitempty"`\n}\n\ntype ReservationStatus struct {\n    // The `phase` indicates whether is reservation is waiting for process (`Pending`), available to allocate\n    // (`Available`) or timeout/expired to get cleanup (Failed).\n    Phase ReservationPhase `json:"phase,omitempty"`\n    // The `conditions` indicate the messages of reason why the reservation is still pending.\n    Conditions []ReservationCondition `json:"conditions,omitempty"`\n    // Current resource owners which allocated the reservation resources.\n    CurrentOwners []corev1.ObjectReference `json:"currentOwners,omitempty"`\n    // Name of node the reservation is scheduled on.\n    NodeName string `json:"nodeName,omitempty"`\n    // Resource reserved and allocatable for owners.\n    Allocatable corev1.ResourceList `json:"allocatable,omitempty"`\n    // Resource allocated by current owners.\n    Allocated corev1.ResourceList `json:"allocated,omitempty"`\n}\n\ntype ReservationOwner struct {\n    // Multiple field selectors are ANDed.\n    Object        *corev1.ObjectReference         `json:"object,omitempty"`\n    Controller    *ReservationControllerReference `json:"controller,omitempty"`\n    LabelSelector *metav1.LabelSelector           `json:"labelSelector,omitempty"`\n}\n\ntype ReservationControllerReference struct {\n    // Extend with a `namespace` field for reference different namespaces.\n    metav1.OwnerReference `json:",inline"`\n    Namespace             string `json:"namespace,omitempty"`\n}\n\ntype ReservationPhase string\n\nconst (\n    // ReservationPending indicates the Reservation has not been processed by the scheduler or is unschedulable for\n    // some reasons (e.g. the resource requirements cannot get satisfied).\n    ReservationPending ReservationPhase = "Pending"\n    // ReservationAvailable indicates the Reservation is both scheduled and available for allocation.\n    ReservationAvailable ReservationPhase = "Available"\n    // ReservationWaiting indicates the Reservation is scheduled, but the resources to reserve are not ready for\n    // allocation (e.g. in pre-allocation for running pods).\n    ReservationWaiting ReservationPhase = "Waiting"\n    // ReservationFailed indicates the Reservation is failed to reserve resources, due to expiration or marked as\n    // unavailable, which the object is not available to allocate and will get cleaned in the future.\n    ReservationFailed ReservationPhase = "Failed"\n)\n\ntype ReservationCondition struct {\n    Type               ReservationConditionType `json:"type,omitempty"`\n    Status             ConditionStatus          `json:"status,omitempty"`\n    Reason             string                   `json:"reason,omitempty"`\n    Message            string                   `json:"message,omitempty"`\n    LastProbeTime      metav1.Time              `json:"lastProbeTime,omitempty"`\n    LastTransitionTime metav1.Time              `json:"lastTransitionTime,omitempty"`\n}\n\ntype ReservationConditionType string\n\nconst (\n    ReservationConditionScheduled ReservationConditionType = "Scheduled"\n    ReservationConditionReady     ReservationConditionType = "Ready"\n)\n\ntype ConditionStatus string\n\nconst (\n    ConditionStatusTrue    ConditionStatus = "True"\n    ConditionStatusFalse   ConditionStatus = "False"\n    ConditionStatusUnknown ConditionStatus = "Unknown"\n)\n\nconst (\n    ReasonReservationScheduled     = "Scheduled"\n    ReasonReservationUnschedulable = "Unschedulable"\n    ReasonReservationAvailable     = "Available"\n    ReasonReservationExpired       = "Expired"\n)\n')),(0,r.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,r.kt)("h4",{id:"reservation-plugin"},"Reservation Plugin"),(0,r.kt)("h5",{id:"schedule-reservations"},"Schedule Reservations"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," object has its scheduling requirements like a pod. Ideally, A ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," object should get processed directly by the scheduler like a pod. However, it can require a series of modifications on ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/"},"scheduling framework"),", losing the compatibility with standard kube-scheduler, kubelet, autoscaler, etc. In the reservation plugin, we fake one ",(0,r.kt)("em",{parentName:"p"},"reservation pod")," for one ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," inside the scheduler to fulfill general scheduling plugins (noderesources, nodeaffinity, tainttolerations, ...). The scheduling framework can handle ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," objects by processing fake pods in both ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/#scheduling-cycle-binding-cycle"},"scheduling cycle and binding cycle"),"."),(0,r.kt)("p",null,"A fake pod inside the scheduler can construct the same affinity/anti-affinity constraints as owner pods, which may change the reservation result. To handle this problem, koord-scheduler extends the framework to skip check of pod affinity for existing reservations in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," phase."),(0,r.kt)("p",null,"A reservation specified ",(0,r.kt)("inlineCode",{parentName:"p"},"PreAllocation")," intends to pre-allocate resources on nodes. The scheduler will skip its filtering of node resources in the scheduling cycle. However, the scheduled reservation will be ",(0,r.kt)("inlineCode",{parentName:"p"},"Waiting")," to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Available")," until there are enough resources to fulfill its requests."),(0,r.kt)("p",null,"If all nodes are unscheduled for the reservation, the scheduler keeps its status as ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending")," and sets ",(0,r.kt)("inlineCode",{parentName:"p"},"Conditions")," with the failure message."),(0,r.kt)("p",null,"Once the scheduling decision has been made, the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," object is updated with a new status indicating whether the reservation succeeded or not. The fake pod does not expose to other components, and the kubelet without modification does not perceive a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," assigned. Fortunately, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," does not need to be executable on the node, so existing containers can keep running as usual without additional admissions."),(0,r.kt)("p",null,"If a reservation has set the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeName")," (inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," field), the scheduler is responsible for checking if the node can fulfill the reservation since kubelet does not do admissions for the reservation."),(0,r.kt)("h5",{id:"allocate-reserved-resources"},"Allocate Reserved Resources"),(0,r.kt)("p",null,"Let's call the reservation is ",(0,r.kt)("em",{parentName:"p"},"allocatable")," for a pod if:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The reservation is available."),(0,r.kt)("li",{parentName:"ol"},"The pod matches the reservation owner spec."),(0,r.kt)("li",{parentName:"ol"},"There are sufficient free resources in the reservation to fulfill the pod.")),(0,r.kt)("p",null,"When the reservation plugin is enabled, the scheduler checks for every scheduling pod if there are allocatable reservations on a node. With a ",(0,r.kt)("inlineCode",{parentName:"p"},"Score")," plugin implemented, the scheduler prefers pods to schedule on nodes which have more allocatable reserved resources."),(0,r.kt)("p",null,"When a pod is scheduled on a node with allocatable reservations, it allocates resources belonging to one of reservations. To pick one of reservations, we choose the one which can get most reserved resources allocated (i.e. MostAllocated). And the scheduler also annotates the pod with the reservation info."),(0,r.kt)("h5",{id:"expiration-and-cleanup"},"Expiration and Cleanup"),(0,r.kt)("p",null,"When a reservation has been created for a long time exceeding the ",(0,r.kt)("inlineCode",{parentName:"p"},"TTL")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Expires"),", the scheduler updates its status as ",(0,r.kt)("inlineCode",{parentName:"p"},"Expired"),". For expired reservations, the scheduler will cleanup them with a custom garbage collection period."),(0,r.kt)("p",null,"When a node is deleted, the available and waiting reservations on the node should be marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"Failed")," since they are not allocatable any more."),(0,r.kt)("h4",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"To generally reserve node resources, submit a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," and set the pod template in the field ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template"),". Then the koord-scheduler will update this ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," with the scheduling result and the resources will get reserved."),(0,r.kt)("p",null,"To be more specific,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spec.template")," specifies the fundamental resource requirements of a reservation. The scheduler will schedule the fake pod based on the template."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spec.owners")," specifies which kinds of pods can use the reservation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spec.ttl")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"expires")," specifies the expiration for the reservation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spec.preAllocation")," indicates whether the scheduler should filter with its resource requirements. Otherwise, the pre-allocation of node resources is allowed, and the reservation will become available until there are sufficient resources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.phase")," is marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"Pending")," when the Reservation is created. And it is marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"Available")," when the Reservation is successfully scheduled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.conditions")," shows why the reservation is unscheduled or failed."),(0,r.kt)("li",{parentName:"ul"},"When a Reservation is ",(0,r.kt)("inlineCode",{parentName:"li"},"Available")," on the node, only specified pods can allocate the reserved resources.")),(0,r.kt)("h5",{id:"usage-in-preemption"},"Usage in Preemption"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#preemption"},"Priority Preemption")," happens in the PostFilter phase trying to make preemptive pods schedulable by evicting low-priority pods. When a pod succeeds the preemption, the pod ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," will be patched with a ",(0,r.kt)("em",{parentName:"p"},"nominated node")," where the scheduler do the eviction. However, the preemptor's nominated node is not always the same as the scheduled node, since the scheduler does not reserve resources for the preemptor.\nTo ensure the preemptive resources are for the preemptor, firstly the scheduler can create a reservation that both sets ",(0,r.kt)("inlineCode",{parentName:"p"},"owners")," with the preemptor pod and relevant affinity rules for reserving resources of the preempts. Then the scheduler evict pods, and the reservation will become ",(0,r.kt)("inlineCode",{parentName:"p"},"Available")," once the resources are released. Finally, the preemptor pods can get scheduled on the nodes with preemptive resource reserved."),(0,r.kt)("h5",{id:"usage-in-descheduling"},"Usage in Descheduling"),(0,r.kt)("p",null,"Before a pod is rescheduled, the descheduler can create a reservation that sets ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"owners")," for the candidate. When the reservation becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"Available"),", the descheduler can assign the pod to allocate the reserved resources. This solves the problem in which the rescheduled pod has stopped at the old node but cannot run on the new node. Moreover, the descheduler can migrate resources between pods by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"preAllocation")," field."),(0,r.kt)("h5",{id:"usage-in-pre-allocation"},"Usage in Pre-allocation"),(0,r.kt)("p",null,"Reservations with ",(0,r.kt)("inlineCode",{parentName:"p"},"preAllocation")," specified allow users to pre-allocate the node resources from running pods. The ",(0,r.kt)("inlineCode",{parentName:"p"},"status.phase")," of the reservation is set as ",(0,r.kt)("inlineCode",{parentName:"p"},"Waiting")," until the resources are released, indicating that its availability is conditional. Once the referenced pods have terminated, the ",(0,r.kt)("inlineCode",{parentName:"p"},"phase")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Available")," for owners, and the pre-allocation succeeds."),(0,r.kt)("h3",{id:"risks-and-mitigations"},"Risks and Mitigations"),(0,r.kt)("p",null,"Kubelet without any modification possibly ignore ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," objects in predicate admission, which increases the chance of unexpected overcommitment at nodes. ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," does not require any physical resources to be executable, so the overcommitment is mainly a problem only when pods get scheduled with ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," and start to run, which is somewhat easier to mitigate since Kubelet do admit these pods. To further descrease the possibility of unexpected overcommitment or pods admit failures, we could use resource estimation for in-flight pods, balance pods to the nodes with less reserved resources, etc."),(0,r.kt)("h2",{id:"unsolved-problems"},"Unsolved Problems"),(0,r.kt)("p",null,"As stated above, ",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," can generate the same pod affinity/anti-affinity rules as the owner pods. The problem gets resolved in the koord-scheduler by extending scheduling framework, but it still limits the standard kube-scheduler."),(0,r.kt)("h2",{id:"alternatives"},"Alternatives"),(0,r.kt)("h3",{id:"use-a-pause-pod-with-a-low-priority-to-reserve-resources"},"Use a ",(0,r.kt)("inlineCode",{parentName:"h3"},"pause")," pod with a low priority to reserve resources"),(0,r.kt)("p",null,"Reserving resources with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-can-i-configure-overprovisioning-with-cluster-autoscaler"},(0,r.kt)("inlineCode",{parentName:"a"},"pause")," pods with very low assigned priority")," does work when the preemption can be precisely enabled for specific pods. In the example of cluster autoscaler, ",(0,r.kt)("inlineCode",{parentName:"p"},"pause")," pods are helpful when we need to overprovision resources to prevent idle nodes from scaling down by CA. However, a ",(0,r.kt)("inlineCode",{parentName:"p"},"pause")," pod has no reservation guarantee except ",(0,r.kt)("inlineCode",{parentName:"p"},"priority"),". As declared above, many scenarios require reservations to rely on other pod characteristics (e.g. names, namespaces, labels, priorityClass), where ",(0,r.kt)("inlineCode",{parentName:"p"},"pause")," pods cannot meet the demands."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1sbFUA_9qWtorJkcukNULr12FKX6lMvISiINxAURHNFo"},"Kueue Pod Resource Reservation"))))}u.isMDXComponent=!0},4462:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/resource-reservation-0c5a187530dd5e3dc9c6e96f97add1ba.svg"}}]);