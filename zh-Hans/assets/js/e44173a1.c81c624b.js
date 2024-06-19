"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[313],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=o,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const r={},i="PodMigrationJob",l={unversionedId:"user-manuals/pod-migration-job",id:"version-v1.4/user-manuals/pod-migration-job",title:"PodMigrationJob",description:"Koordinator\u5b9a\u4e49\u4e86\u4e00\u4e2a\u57fa\u4e8e CRD \u7684 Pod \u8fc1\u79fb API\uff0c\u79f0\u4e3a PodMigrationJob\uff0c\u901a\u8fc7\u6b64 API\uff0c\u91cd\u8c03\u5ea6\u5668\uff08descheduler\uff09\u6216\u5176\u4ed6\u81ea\u52a8\u6545\u969c\u6062\u590d\u7ec4\u4ef6\u53ef\u4ee5\u66f4\u5b89\u5168\u5730\u5c06 Pod \u9a71\u9010\u6216\u5220\u9664\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.4/user-manuals/pod-migration-job.md",sourceDirName:"user-manuals",slug:"/user-manuals/pod-migration-job",permalink:"/zh-Hans/docs/v1.4/user-manuals/pod-migration-job",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/pod-migration-job.md",tags:[],version:"v1.4",lastUpdatedBy:"wangjianyu",lastUpdatedAt:1705567859,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u8d44\u6e90\u9884\u7559",permalink:"/zh-Hans/docs/v1.4/user-manuals/resource-reservation"},next:{title:"Koordlet",permalink:"/zh-Hans/docs/v1.4/designs/koordlet-overview"}},d={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"Installation",id:"installation",level:3},{value:"Configurations",id:"configurations",level:3},{value:"\u4f7f\u7528 PodMigrationJob",id:"\u4f7f\u7528-podmigrationjob",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:3},{value:"\u9ad8\u7ea7\u914d\u7f6e",id:"\u9ad8\u7ea7\u914d\u7f6e",level:3},{value:"\u793a\u4f8b: \u624b\u52a8\u786e\u8ba4\u662f\u5426\u5141\u8bb8\u8fc1\u79fb",id:"\u793a\u4f8b-\u624b\u52a8\u786e\u8ba4\u662f\u5426\u5141\u8bb8\u8fc1\u79fb",level:3},{value:"\u793a\u4f8b: \u53ea\u60f3\u9a71\u9010 Pods, \u65e0\u9700\u9884\u7559\u8d44\u6e90",id:"\u793a\u4f8b-\u53ea\u60f3\u9a71\u9010-pods-\u65e0\u9700\u9884\u7559\u8d44\u6e90",level:3},{value:"\u793a\u4f8b: \u5728\u8fc1\u79fb\u4e2d\u4f7f\u7528\u9884\u7559\u8d44\u6e90",id:"\u793a\u4f8b-\u5728\u8fc1\u79fb\u4e2d\u4f7f\u7528\u9884\u7559\u8d44\u6e90",level:3},{value:"\u793a\u4f8b: \u4f18\u96c5\u9a71\u9010 Pods",id:"\u793a\u4f8b-\u4f18\u96c5\u9a71\u9010-pods",level:3},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:3}],p={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"podmigrationjob"},"PodMigrationJob"),(0,o.kt)("p",null,"Koordinator\u5b9a\u4e49\u4e86\u4e00\u4e2a\u57fa\u4e8e CRD \u7684 Pod \u8fc1\u79fb API\uff0c\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"PodMigrationJob"),"\uff0c\u901a\u8fc7\u6b64 API\uff0c\u91cd\u8c03\u5ea6\u5668\uff08descheduler\uff09\u6216\u5176\u4ed6\u81ea\u52a8\u6545\u969c\u6062\u590d\u7ec4\u4ef6\u53ef\u4ee5\u66f4\u5b89\u5168\u5730\u5c06 Pod \u9a71\u9010\u6216\u5220\u9664\u3002"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u8fc1\u79fb Pods \u662f\u8bb8\u591a\u7ec4\u4ef6\uff08\u5982descheduler\uff09\u4f9d\u8d56\u7684\u91cd\u8981\u80fd\u529b\uff0c\u53ef\u7528\u4e8e\u4f18\u5316\u8c03\u5ea6\u6216\u5e2e\u52a9\u89e3\u51b3\u5de5\u4f5c\u8d1f\u8f7d\u8fd0\u884c\u65f6\u8d28\u91cf\u95ee\u9898\u3002\u6211\u4eec\u8ba4\u4e3a\uff0cPod \u8fc1\u79fb\u662f\u4e00\u4e2a\u590d\u6742\u7684\u8fc7\u7a0b\uff0c\u6d89\u53ca\u8bf8\u5982\u5ba1\u8ba1\uff08auditing\uff09\u3001\u8d44\u6e90\u5206\u914d\u548c\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u7b49\u6b65\u9aa4\uff0c\u5e76\u4e0e\u5e94\u7528\u7a0b\u5e8f\u5347\u7ea7\u3001\u4f38\u7f29\u7b49\u573a\u666f\u4ee5\u53ca\u96c6\u7fa4\u7ba1\u7406\u5458\u7684\u8d44\u6e90\u64cd\u4f5c\u548c\u7ef4\u62a4\u64cd\u4f5c\u6df7\u5408\u5728\u4e00\u8d77\u3002\u56e0\u6b64\uff0c\u5982\u4f55\u7ba1\u7406\u6b64\u8fc7\u7a0b\u7684\u7a33\u5b9a\u6027\u98ce\u9669\uff0c\u4ee5\u786e\u4fdd\u5e94\u7528\u7a0b\u5e8f\u4e0d\u4f1a\u56e0\u4e3a Pod \u8fc1\u79fb\u800c\u5931\u8d25\uff0c\u662f\u5fc5\u987b\u89e3\u51b3\u7684\u5173\u952e\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u57fa\u4e8e PodMigrationJob CRD \u7684\u6700\u7ec8\u72b6\u6001\u5bfc\u5411\u8fc1\u79fb\u80fd\u529b\uff0c\u6211\u4eec\u53ef\u4ee5\u8ddf\u8e2a\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u6bcf\u4e2a\u8fc7\u7a0b\u7684\u72b6\u6001\uff0c\u611f\u77e5\u5e94\u7528\u7a0b\u5e8f\u5347\u7ea7\u548c\u6269\u5c55\u7b49\u573a\u666f\uff0c\u4ee5\u786e\u4fdd\u5de5\u4f5c\u8d1f\u8f7d\u7684\u7a33\u5b9a\u6027\u3002"),(0,o.kt)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,o.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,o.kt)("li",{parentName:"ul"},"Koordinator >= 0.6")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"\u8bf7\u786e\u4fddKoordinator\u7ec4\u4ef6\u5df2\u6b63\u786e\u5b89\u88c5\u5728\u60a8\u7684\u96c6\u7fa4\u4e2d\u3002\u5982\u679c\u672a\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"\u5b89\u88c5"),"."),(0,o.kt)("h3",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"PodMigrationJob \u5df2\u9ed8\u8ba4\u542f\u7528\u3002\u60a8\u53ef\u4ee5\u5728koord-descheduler\u914d\u7f6e\u4e2d\u65e0\u9700\u4efb\u4f55\u4fee\u6539\u5373\u53ef\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-podmigrationjob"},"\u4f7f\u7528 PodMigrationJob"),(0,o.kt)("h3",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e0b\u9762\u7684YAML\u6587\u4ef6\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"pod-demo"),"\u7684Deployment")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: pod-demo\n  namespace: default\nspec:\n  progressDeadlineSeconds: 600\n  replicas: 1\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      app: pod-demo\n  strategy:\n    rollingUpdate:\n      maxSurge: 25%\n      maxUnavailable: 25%\n    type: RollingUpdate\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app: pod-demo\n      name: stress\n    spec:\n      containers:\n      - args:\n        - -c\n        - "1"\n        command:\n        - stress\n        image: polinux/stress\n        imagePullPolicy: Always\n        name: stress\n        resources:\n          limits:\n            cpu: "2"\n            memory: 4Gi\n          requests:\n            cpu: 200m\n            memory: 400Mi\n      restartPolicy: Always\n      schedulerName: koord-scheduler\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f pod-demo.yaml\ndeployment.apps/pod-demo created\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u68c0\u67e5Pod ",(0,o.kt)("inlineCode",{parentName:"li"},"pod-demo-0")," \u7684\u8c03\u5ea6\u7ed3\u679c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -o wide\nNAME                        READY   STATUS    RESTARTS   AGE   IP            NODE     NOMINATED NODE   READINESS GATES\npod-demo-5f9b977566-c7lvk   1/1     Running   0          41s   10.17.0.9     node-0   <none>           <none>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pod-demo-5f9b977566-c7lvk")," \u88ab\u8c03\u5ea6\u5728\u8282\u70b9 ",(0,o.kt)("inlineCode",{parentName:"p"},"node-0"),"\u4e0a"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e0b\u9762\u7684YAML\u6587\u4ef6\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"PodMigrationJob")," \u6765\u8fc1\u79fb ",(0,o.kt)("inlineCode",{parentName:"li"},"pod-demo-0"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: PodMigrationJob\nmetadata:\n  name: migrationjob-demo\nspec:\n  paused: false\n  ttl: 5m\n  mode: ReservationFirst\n  podRef:\n    namespace: default\n    name: pod-demo-5f9b977566-c7lvk\nstatus:\n  phase: Pending\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f migrationjob-demo.yaml\npodmigrationjob.scheduling.koordinator.sh/migrationjob-demo created\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8fc1\u79fb\u72b6\u6001")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get podmigrationjob migrationjob-demo\nNAME                PHASE     STATUS     AGE   NODE     RESERVATION                            PODNAMESPACE   POD                         NEWPOD                      TTL\nmigrationjob-demo   Succeed   Complete   37s   node-1   d56659ab-ba16-47a2-821d-22d6ba49258e   default        pod-demo-5f9b977566-c7lvk   pod-demo-5f9b977566-nxjdf   5m0s\n")),(0,o.kt)("p",null,"\u4ece\u4e0a\u8ff0\u7ed3\u679c\u53ef\u4ee5\u89c2\u5bdf\u5230\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PHASE")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"Succeed"),", ",(0,o.kt)("strong",{parentName:"li"},"STATUS")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"Complete"),", \u8868\u660e\u8fc1\u79fb\u6210\u529f\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NODE")," ",(0,o.kt)("inlineCode",{parentName:"li"},"node-1")," \u8868\u793a\u8fc1\u79fb\u540e\u65b0Pod\u6240\u8c03\u5ea6\u7684\u8282\u70b9\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RESERVATION")," ",(0,o.kt)("inlineCode",{parentName:"li"},"d56659ab-ba16-47a2-821d-22d6ba49258e")," \u662f\u5728\u8fc1\u79fb\u671f\u95f4\u521b\u5efa\u7684 Reservation\u3002PodMigrationJob Controller \u5c06\u5728\u5f00\u59cb\u9a71\u9010 Pod \u4e4b\u524d\u5c1d\u8bd5\u4e3a Reservation \u521b\u5efa\u9884\u7559\u8d44\u6e90\u3002\u5728\u6210\u529f\u9884\u7559\u8d44\u6e90\u540e\uff0c\u5c06\u542f\u52a8\u9a71\u9010\u64cd\u4f5c\uff0c\u8fd9\u53ef\u4ee5\u786e\u4fdd\u65b0 Pod \u5fc5\u987b\u88ab\u9a71\u9010\uff0c\u56e0\u4e3a\u5df2\u6709\u8d44\u6e90\u53ef\u7528\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PODNAMESPACE")," ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," \u8868\u793a\u5f85\u8fc1\u79fb Pod \u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"POD")," ",(0,o.kt)("inlineCode",{parentName:"li"},"pod-demo-5f9b977566-c7lvk")," \u8868\u793a\u5f85\u8fc1\u79fb\u7684 Pod\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NEWPOD")," ",(0,o.kt)("inlineCode",{parentName:"li"},"pod-demo-5f9b977566-nxjdf")," \u8868\u793a\u8fc1\u79fb\u540e\u65b0\u521b\u5efa\u7684 Pod\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TTL")," \u8868\u793a\u5f53\u524d\u4f5c\u4e1a\u7684 TTL \u5468\u671f\u3002")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8fc1\u79fb\u4e8b\u4ef6")),(0,o.kt)("p",null,"PodMigrationJob Controller \u5c06\u5728\u8fc1\u79fb\u8fc7\u7a0b\u7684\u91cd\u8981\u6b65\u9aa4\u4e2d\u521b\u5efa\u4e8b\u4ef6\uff0c\u4ee5\u5e2e\u52a9\u7528\u6237\u8bca\u65ad\u8fc1\u79fb\u95ee\u9898"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl describe podmigrationjob migrationjob-demo\n...\nEvents:\n  Type    Reason                Age    From               Message\n  ----    ------                ----   ----               -------\n  Normal  ReservationCreated    8m33s  koord-descheduler  Successfully create Reservation "d56659ab-ba16-47a2-821d-22d6ba49258e"\n  Normal  ReservationScheduled  8m33s  koord-descheduler  Assigned Reservation "d56659ab-ba16-47a2-821d-22d6ba49258e" to node "node-1"\n  Normal  Evicting              8m33s  koord-descheduler  Try to evict Pod "default/pod-demo-5f9b977566-c7lvk"\n  Normal  EvictComplete         8m     koord-descheduler  Pod "default/pod-demo-5f9b977566-c7lvk" has been evicted\n  Normal  Complete              8m     koord-descheduler  Bind Pod "default/pod-demo-5f9b977566-nxjdf" in Reservation "d56659ab-ba16-47a2-821d-22d6ba49258e"\n')),(0,o.kt)("h3",{id:"\u9ad8\u7ea7\u914d\u7f6e"},"\u9ad8\u7ea7\u914d\u7f6e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6700\u65b0\u7684API\u53ef\u4ee5\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/apis/scheduling/v1alpha1/pod_migration_job_types.go"},(0,o.kt)("inlineCode",{parentName:"a"},"pod_migration_job_types.go")),".")),(0,o.kt)("h3",{id:"\u793a\u4f8b-\u624b\u52a8\u786e\u8ba4\u662f\u5426\u5141\u8bb8\u8fc1\u79fb"},"\u793a\u4f8b: \u624b\u52a8\u786e\u8ba4\u662f\u5426\u5141\u8bb8\u8fc1\u79fb"),(0,o.kt)("p",null,"\u9a71\u9010\u6216\u8fc1\u79fb\u64cd\u4f5c\u4f1a\u5e26\u6765\u7a33\u5b9a\u6027\u98ce\u9669\uff0c\u56e0\u6b64\u5e0c\u671b\u5728\u542f\u52a8\u8fc1\u79fb\u64cd\u4f5c\u4e4b\u524d\u624b\u52a8\u68c0\u67e5\u548c\u786e\u8ba4\u6ca1\u6709\u9519\u8bef\uff0c\u7136\u540e\u518d\u542f\u52a8\u8fc1\u79fb\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u521b\u5efa PodMigrationJob \u65f6\uff0c\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.paused")," \u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u624b\u52a8\u786e\u8ba4\u5141\u8bb8\u6267\u884c\u540e\u518d\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.paused")," \u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u5982\u679c\u62d2\u7edd\u6267\u884c\uff0c\u5219\u53ef\u4ee5\u66f4\u65b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"status.phase=Failed")," \u7acb\u5373\u7ec8\u6b62PodMigrationJob \u7684\u6267\u884c\uff0c\u6216\u8005\u7b49\u5f85 PodMigrationJob \u81ea\u52a8\u8fc7\u671f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: PodMigrationJob\nmetadata:\n  name: migrationjob-demo\nspec:\n  # paused indicates whether the PodMigrationJob should to work or not.\n  paused: true\n  # ttl controls the PodMigrationJob timeout duration.\n  ttl: 5m\n  mode: ReservationFirst\n  podRef:\n    namespace: default\n    name: pod-demo-5f9b977566-c7lvk\nstatus:\n  phase: Pending\n")),(0,o.kt)("h3",{id:"\u793a\u4f8b-\u53ea\u60f3\u9a71\u9010-pods-\u65e0\u9700\u9884\u7559\u8d44\u6e90"},"\u793a\u4f8b: \u53ea\u60f3\u9a71\u9010 Pods, \u65e0\u9700\u9884\u7559\u8d44\u6e90"),(0,o.kt)("p",null,"PodMigrationJob \u63d0\u4f9b\u4e24\u79cd\u8fc1\u79fb\u6a21\u5f0f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EvictDirectly")," \u76f4\u63a5\u9a71\u9010 Pod\uff0c\u65e0\u9700\u9884\u7559\u8d44\u6e90, "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ReservationFirst")," \u5148\u9884\u7559\u8d44\u6e90\uff0c\u4ee5\u786e\u4fdd\u5728\u5f00\u59cb\u9a71\u9010\u4e4b\u524d\u53ef\u4ee5\u5206\u914d\u8d44\u6e90\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u9a71\u9010 Pod\uff0c\u53ea\u9700\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.mode")," \u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"EvictDirectly"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: PodMigrationJob\nmetadata:\n  name: migrationjob-demo\nspec:\n  paused: false\n  ttl: 5m\n  mode: EvictDirectly\n  podRef:\n    namespace: default\n    name: pod-demo-5f9b977566-c7lvk\nstatus:\n  phase: Pending\n")),(0,o.kt)("h3",{id:"\u793a\u4f8b-\u5728\u8fc1\u79fb\u4e2d\u4f7f\u7528\u9884\u7559\u8d44\u6e90"},"\u793a\u4f8b: \u5728\u8fc1\u79fb\u4e2d\u4f7f\u7528\u9884\u7559\u8d44\u6e90"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u9996\u5148\u9884\u7559\u8d44\u6e90\uff0c\u7136\u540e\u5728\u6210\u529f\u540e\u521b\u5efa\u4e00\u4e2a PodMigrationJob\uff0c\u4ee5\u91cd\u590d\u4f7f\u7528 PodMigrationJob Controller \u63d0\u4f9b\u7684\u4ef2\u88c1\u673a\u5236\uff08\u5728v0.7\u4e2d\u5b9e\u73b0\uff09\u4ee5\u786e\u4fdd\u5de5\u4f5c\u8d1f\u8f7d\u7684\u7a33\u5b9a\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: PodMigrationJob\nmetadata:\n  name: migrationjob-demo\nspec:\n  paused: false\n  ttl: 5m\n  mode: ReservationFirst\n  podRef:\n    namespace: default\n    name: pod-demo-5f9b977566-c7lvk\n  reservationOptions:\n    # the reservation-0 created before creating PodMigrationJob\n    reservationRef:\n      name: reservation-0\nstatus:\n  phase: Pending\n")),(0,o.kt)("h3",{id:"\u793a\u4f8b-\u4f18\u96c5\u9a71\u9010-pods"},"\u793a\u4f8b: \u4f18\u96c5\u9a71\u9010 Pods"),(0,o.kt)("p",null,"PodMigrationJob \u652f\u6301 Pod \u7684\u4f18\u96c5\u9a71\u9010\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: PodMigrationJob\nmetadata:\n  name: migrationjob-demo\nspec:\n  paused: true\n  ttl: 5m\n  mode: ReservationFirst\n  podRef:\n    namespace: default\n    name: pod-demo-5f9b977566-c7lvk\n  deleteOptions:\n    # The duration in seconds before the object should be deleted. Value must be non-negative integer.\n    # The value zero indicates delete immediately. If this value is nil, the default grace period for the\n    # specified type will be used.\n    # Defaults to a per object value if not specified. zero means delete immediately.\n    gracePeriodSeconds: 60\nstatus:\n  phase: Pending\n")),(0,o.kt)("h3",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f53\u524d\u4e0d\u652f\u6301",(0,o.kt)("a",{parentName:"li",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/proposals/scheduling/20220701-pod-migration-job.md#filter-podmigrationjob"},"Arbitration mechanism"),"\uff0cv0.6\u7248\u672c\u4ec5\u5b9e\u73b0\u4e86\u57fa\u4e8e\u8d44\u6e90\u9884\u7559\u7684\u8fc1\u79fb\u80fd\u529b\u3002 "),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301",(0,o.kt)("a",{parentName:"li",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/proposals/scheduling/20220701-pod-migration-job.md#basic-migration-api"},"Basic Migration API")," \u3002")))}u.isMDXComponent=!0}}]);