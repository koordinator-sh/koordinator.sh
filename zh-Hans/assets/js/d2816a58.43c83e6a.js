"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2057],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>k});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,k=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return a?t.createElement(k,s(s({ref:n},p),{},{components:a})):t.createElement(k,s({ref:n},p))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},395:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const o={},s="\u8d44\u6e90\u9884\u7559",l={unversionedId:"user-manuals/resource-reservation",id:"version-v1.3/user-manuals/resource-reservation",title:"\u8d44\u6e90\u9884\u7559",description:"\u8d44\u6e90\u9884\u7559\u662fkoord-scheduler\u7684\u4e00\u79cd\u4e3a\u67d0\u4e9b\u7279\u5b9aPod\u6216\u8d1f\u8f7d\u9884\u7559\u8282\u70b9\u8d44\u6e90\u7684\u80fd\u529b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.3/user-manuals/resource-reservation.md",sourceDirName:"user-manuals",slug:"/user-manuals/resource-reservation",permalink:"/zh-Hans/docs/user-manuals/resource-reservation",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/resource-reservation.md",tags:[],version:"v1.3",lastUpdatedBy:"saintube",lastUpdatedAt:1692186595,formattedLastUpdatedAt:"2023\u5e748\u670816\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u7cbe\u7ec6\u5316 CPU \u7f16\u6392",permalink:"/zh-Hans/docs/user-manuals/fine-grained-cpu-orchestration"},next:{title:"PodMigrationJob",permalink:"/zh-Hans/docs/user-manuals/pod-migration-job"}},i={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:3},{value:"\u9ad8\u7ea7\u7279\u6027",id:"\u9ad8\u7ea7\u7279\u6027",level:3},{value:"\u6848\u4f8b\uff1a\u591a\u4e2a\u5c5e\u4e3b\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u9884\u7559\u8d44\u6e90",id:"\u6848\u4f8b\u591a\u4e2a\u5c5e\u4e3b\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u9884\u7559\u8d44\u6e90",level:3}],p={toc:d},m="wrapper";function c(e){let{components:n,...o}=e;return(0,r.kt)(m,(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8d44\u6e90\u9884\u7559"},"\u8d44\u6e90\u9884\u7559"),(0,r.kt)("p",null,"\u8d44\u6e90\u9884\u7559\u662fkoord-scheduler\u7684\u4e00\u79cd\u4e3a\u67d0\u4e9b\u7279\u5b9aPod\u6216\u8d1f\u8f7d\u9884\u7559\u8282\u70b9\u8d44\u6e90\u7684\u80fd\u529b\u3002"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"Pod\u662fkubernetes\u8282\u70b9\u8d44\u6e90\u5206\u914d\u7684\u57fa\u7840\u8f7d\u4f53\uff0c\u4ed6\u6839\u636e\u4e1a\u52a1\u903b\u8f91\u7ed1\u5b9a\u5bf9\u5e94\u7684\u8d44\u6e90\u9700\u6c42\u3002\u4f46\u662f\u6211\u4eec\u53ef\u80fd\u5206\u4e3a\u4e00\u4e9b\u8fd8\u6ca1\u521b\u5efa\u7684\u7279\u5b9aPod\u548c\u8d1f\u8f7d\u5206\u914d\u8d44\u6e90\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u62a2\u5360\uff1a\u5df2\u7ecf\u5b58\u5728\u7684\u62a2\u5360\u89c4\u5219\u4e0d\u80fd\u4fdd\u8bc1\u53ea\u6709\u6b63\u5728\u62a2\u5360\u4e2d\u7684Pod\u624d\u80fd\u5206\u914d\u62a2\u5360\u7684\u8d44\u6e90\uff0c\u6211\u4eec\u671f\u671b\u8c03\u5ea6\u5668\u80fd\u9501\u5b9a\u8d44\u6e90\uff0c\u9632\u6b62\u8fd9\u4e9b\u8d44\u6e90\u88ab\u6709\u76f8\u540c\u6216\u66f4\u9ad8\u4f18\u5148\u7ea7\u7684\u5176\u4ed6Pod\u62a2\u5360\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u8c03\u5ea6\uff1a\u5728\u91cd\u8c03\u5ea6\u573a\u666f\u4e0b\uff0c\u6700\u597d\u80fd\u4fdd\u8bc1\u5728Pod\u88ab\u91cd\u8c03\u5ea6\u4e4b\u524d\u4fdd\u7559\u8db3\u591f\u7684\u8d44\u6e90\u3002\u5426\u5219\uff0c\u88ab\u91cd\u8c03\u5ea6\u7684Pod\u53ef\u80fd\u518d\u4e5f\u6ca1\u6cd5\u8fd0\u884c\uff0c\u7136\u540e\u5bf9\u5e94\u7684\u5e94\u7528\u53ef\u80fd\u5c31\u4f1a\u5d29\u6e83\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6c34\u5e73\u6269\u5bb9\uff1a\u4e3a\u4e86\u80fd\u66f4\u7cbe\u51c6\u5730\u8fdb\u884c\u6c34\u5e73\u6269\u5bb9\uff0c\u6211\u4eec\u5e0c\u671b\u80fd\u4e3a\u6269\u5bb9\u7684Pod\u526f\u672c\u5206\u914d\u8282\u70b9\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8d44\u6e90\u9884\u5206\u914d\uff1a\u5373\u4f7f\u5f53\u524d\u7684\u8d44\u6e90\u8fd8\u4e0d\u53ef\u7528\uff0c\u6211\u4eec\u53ef\u80fd\u60f3\u4e3a\u5c06\u6765\u7684\u8d44\u6e90\u9700\u6c42\u63d0\u524d\u9884\u7559\u8282\u70b9\u8d44\u6e90\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u589e\u5f3akubernetes\u7684\u8d44\u6e90\u8c03\u5ea6\u80fd\u529b\uff0ckoord-scheduler\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u5b57\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"Reservation"),"\u7684\u8c03\u5ea6API,\u5141\u8bb8\u6211\u4eec\u4e3a\u4e00\u4e9b\u5f53\u524d\u8fd8\u672a\u521b\u5efa\u7684\u7279\u5b9a\u7684Pod\u548c\u8d1f\u8f7d\uff0c\u63d0\u524d\u9884\u7559\u8282\u70b9\u8d44\u6e90\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(4462).Z,width:"511",height:"371"})),(0,r.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u770b ",(0,r.kt)("a",{parentName:"p",href:"../designs/resource-reservation"},"\u8bbe\u8ba1\u6587\u6863\uff1a\u8d44\u6e90\u9884\u7559"),"\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,r.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,r.kt)("li",{parentName:"ul"},"Koordinator >= 0.6")),(0,r.kt)("h3",{id:"\u5b89\u88c5\u6b65\u9aa4"},"\u5b89\u88c5\u6b65\u9aa4"),(0,r.kt)("p",null,"\u8bf7\u786e\u4fddKoordinator\u7684\u7ec4\u4ef6\u5df2\u7ecf\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u6b63\u786e\u5b89\u88c5\uff0c\u5982\u679c\u8fd8\u672a\u6b63\u786e\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"\u5b89\u88c5\u8bf4\u660e"),"\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u8d44\u6e90\u9884\u7559\u529f\u80fd\u9ed8\u8ba4",(0,r.kt)("em",{parentName:"p"},"\u542f\u7528"),"\uff0c\u4f60\u65e0\u9700\u5bf9koord-scheduler\u914d\u7f6e\u505a\u4efb\u4f55\u4fee\u6539\uff0c\u5373\u53ef\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,r.kt)("h3",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5982\u4e0byaml\u6587\u4ef6\u9884\u7559\u8d44\u6e90\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"reservation-demo"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo\nspec:\n  template: # set resource requirements\n    namespace: default\n    spec:\n      containers:\n        - args:\n            - '-c'\n            - '1'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources: # reserve 500m cpu and 800Mi memory\n            requests:\n              cpu: 500m\n              memory: 800Mi\n      schedulerName: koord-scheduler # use koord-scheduler\n  owners: # set the owner specifications\n    - object: # owner pods whose name is `default/pod-demo-0`\n        name: pod-demo-0\n        namespace: default\n  ttl: 1h # set the TTL, the reservation will get expired 1 hour later\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f reservation-demo.yaml\nreservation.scheduling.koordinator.sh/reservation-demo created\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u8ddf\u8e2areservation-demo\u7684\u72b6\u6001\uff0c\u76f4\u5230\u5b83\u53d8\u6210\u53ef\u7528\u72b6\u6001\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get reservation reservation-demo -o wide\nNAME               PHASE       AGE   NODE     TTL  EXPIRES\nreservation-demo   Available   88s   node-0   1h\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5982\u4e0bYAML\u6587\u4ef6\u90e8\u7f72\u4e00\u4e2aPod\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Pod-demo-0"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-demo-0 # match the owner spec of `reservation-demo`\nspec:\n  containers:\n    - args:\n        - '-c'\n        - '1'\n      command:\n        - stress\n      image: polinux/stress\n      imagePullPolicy: Always\n      name: stress\n      resources:\n        limits:\n          cpu: '1'\n          memory: 1Gi\n        requests:\n          cpu: 200m\n          memory: 400Mi\n  restartPolicy: Always\n  schedulerName: koord-scheduler # use koord-scheduler\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f pod-demo-0.yaml\npod/pod-demo-0 created\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5",(0,r.kt)("inlineCode",{parentName:"li"},"Pod-demo-0"),"\u7684\u8c03\u5ea6\u72b6\u6001\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod pod-demo-0 -o wide\nNAME         READY   STATUS    RESTARTS   AGE   IP            NODE     NOMINATED NODE   READINESS GATES\npod-demo-0   1/1     Running   0          32s   10.17.0.123   node-0   <none>           <none>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Pod-demo-0"),"\u5c06\u4f1a\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"reservation-demo"),"\u88ab\u8c03\u5ea6\u5230\u540c\u4e00\u4e2a\u8282\u70b9\u3002"),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5",(0,r.kt)("inlineCode",{parentName:"li"},"reservation-demo"),"\u7684\u72b6\u6001\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get reservation reservation-demo -oyaml\napiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo\n  creationTimestamp: "YYYY-MM-DDT05:24:58Z"\n  uid: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n  ...\nspec:\n  owners:\n  - object:\n      name: pod-demo-0\n      namespace: default\n  template:\n    spec:\n      containers:\n      - args:\n        - -c\n        - "1"\n        command:\n        - stress\n        image: polinux/stress\n        imagePullPolicy: Always\n        name: stress\n        resources:\n          requests:\n            cpu: 500m\n            memory: 800Mi\n      schedulerName: koord-scheduler\n  ttl: 1h\nstatus:\n  allocatable: # total reserved\n    cpu: 500m\n    memory: 800Mi\n  allocated: # current allocated\n    cpu: 200m\n    memory: 400Mi\n  conditions:\n  - lastProbeTime: "YYYY-MM-DDT05:24:58Z"\n    lastTransitionTime: "YYYY-MM-DDT05:24:58Z"\n    reason: Scheduled\n    status: "True"\n    type: Scheduled\n  - lastProbeTime: "YYYY-MM-DDT05:24:58Z"\n    lastTransitionTime: "YYYY-MM-DDT05:24:58Z"\n    reason: Available\n    status: "True"\n    type: Ready\n  currentOwners:\n  - name: pod-demo-0\n    namespace: default\n    uid: yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy\n  nodeName: node-0\n  phase: Available\n')),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u770b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"reservation-demo"),"\u9884\u7559\u4e86500m cpu\u548c 800Mi\u5185\u5b58,  ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod-demo-0"),"\u4ece\u9884\u7559\u7684\u8d44\u6e90\u4e2d\u5206\u914d\u4e86200m cpu and 400Mi\u5185\u5b58\u3002"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u6e05\u7406",(0,r.kt)("inlineCode",{parentName:"li"},"reservation-demo"),"\u7684\u9884\u7559\u8d44\u6e90\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl delete reservation reservation-demo\nreservation.scheduling.koordinator.sh "reservation-demo" deleted\n$ kubectl get pod pod-demo-0\nNAME         READY   STATUS    RESTARTS   AGE\npod-demo-0   1/1     Running   0          110s\n')),(0,r.kt)("p",null,"\u5728\u9884\u7559\u8d44\u6e90\u88ab\u5220\u9664\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Pod-demo-0"),"\u4f9d\u7136\u6b63\u5e38\u8fd0\u884c\u3002"),(0,r.kt)("h3",{id:"\u9ad8\u7ea7\u7279\u6027"},"\u9ad8\u7ea7\u7279\u6027"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6700\u65b0\u7684API\u53ef\u4ee5\u5728\u8fd9\u91cc\u67e5\u770b\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/apis/scheduling/v1alpha1/reservation_types.go"},(0,r.kt)("inlineCode",{parentName:"a"},"reservation_types")),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo\nspec:\n  # pod template (required): Reserve resources and play pod/node affinities according to the template.\n  # The resource requirements of the pod indicates the resource requirements of the reservation\n  template:\n    namespace: default\n    spec:\n      containers:\n        - args:\n            - '-c'\n            - '1'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources:\n            requests:\n              cpu: 500m\n              memory: 800Mi\n      # scheduler name (required): use koord-scheduler to schedule the reservation\n      schedulerName: koord-scheduler\n  # owner spec (required): Specify what kinds of pods can allocate resources of this reservation.\n  # Currently support three kinds of owner specifications:\n  # - object: specify the name, namespace, uid of the owner pods\n  # - controller: specify the owner reference of the owner pods, e.g. name, namespace(extended by koordinator), uid, kind\n  # - labelSelector: specify the matching labels are matching expressions of the owner pods\n  owners:\n    - object:\n        name: pod-demo-0\n        namespace: default\n    - labelSelector:\n        matchLabels:\n          app: app-demo\n  # TTL (optional): Time-To-Live duration of the reservation. The reservation will get expired after the TTL period.\n  # If not set, use `24h` as default.\n  ttl: 1h\n  # Expires (optional): Expired timestamp when the reservation is expected to expire.\n  # If both `expires` and `ttl` are set, `expires` is checked first.\n  expires: \"YYYY-MM-DDTHH:MM:SSZ\"\n")),(0,r.kt)("h3",{id:"\u6848\u4f8b\u591a\u4e2a\u5c5e\u4e3b\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u9884\u7559\u8d44\u6e90"},"\u6848\u4f8b\uff1a\u591a\u4e2a\u5c5e\u4e3b\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u9884\u7559\u8d44\u6e90"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u6bcf\u4e2a\u8282\u70b9\u7684\u53ef\u5206\u914d\u8d44\u6e90\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get node -o custom-columns=NAME:.metadata.name,CPU:.status.allocatable.cpu,MEMORY:.status.allocatable.memory\nNAME     CPU     MEMORY\nnode-0   7800m   28625036Ki\nnode-1   7800m   28629692Ki\n...\n$ kubectl describe node node-1 | grep -A 8 "Allocated resources"\n  Allocated resources:\n    (Total limits may be over 100 percent, i.e., overcommitted.)\n    Resource                     Requests     Limits\n    --------                     --------     ------\n    cpu                          780m (10%)   7722m (99%)\n    memory                       1216Mi (4%)  14044Mi (50%)\n    ephemeral-storage            0 (0%)       0 (0%)\n    hugepages-1Gi                0 (0%)       0 (0%)\n    hugepages-2Mi                0 (0%)       0 (0%)\n')),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"node-1"),"\u8282\u70b9\u8fd8\u4fdd\u75597.0 cpu and 26Gi memory\u672a\u5206\u914d\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u7528\u5982\u4e0bYAML\u6587\u4ef6\u9884\u7559\u8d44\u6e90\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"reservation-demo-big"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo-big\nspec:\n  template:\n    namespace: default\n    spec:\n      containers:\n        - args:\n            - '-c'\n            - '1'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources: # reserve 6 cpu and 20Gi memory\n            requests:\n              cpu: 6\n              memory: 20Gi\n      nodeName: node-1 # set the expected node name to schedule at\n      schedulerName: koord-scheduler\n  owners: # set multiple owners\n    - object: # owner pods whose name is `default/pod-demo-0`\n        name: pod-demo-1\n        namespace: default\n    - labelSelector: # owner pods who have label `app=app-demo` can allocate the reserved resources\n        matchLabels:\n          app: app-demo\n  ttl: 1h\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f reservation-demo-big.yaml\nreservation.scheduling.koordinator.sh/reservation-demo-big created\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u8ddf\u8e2a",(0,r.kt)("inlineCode",{parentName:"li"},"reservation-demo-big"),"\u7684\u72b6\u6001\uff0c\u76f4\u5230\u4ed6\u53d8\u6210\u53ef\u7528\u72b6\u6001\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get reservation reservation-demo-big -o wide\nNAME                   PHASE       AGE   NODE     TTL  EXPIRES\nreservation-demo-big   Available   37s   node-1   1h\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reservation-demo-big"),"\u5c06\u88ab\u8c03\u5ea6\u5230Pod\u6a21\u677f\u4e2d\u8bbe\u7f6e\u7684nodeName\u5c5e\u6027\u8282\u70b9:",(0,r.kt)("inlineCode",{parentName:"p"},"node-1"),"\u3002"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u7528\u5982\u4e0bYAML\u6587\u4ef6\u521b\u5efa\u4e00\u6b21\u90e8\u7f72\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"app-demo"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-demo\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: app-demo\n  template:\n    metadata:\n      name: stress\n      labels:\n        app: app-demo # match the owner spec of `reservation-demo-big`\n    spec:\n      schedulerName: koord-scheduler # use koord-scheduler\n      containers:\n      - name: stress\n        image: polinux/stress\n        args:\n          - '-c'\n          - '1'\n        command:\n          - stress\n        resources:\n          requests:\n            cpu: 2\n            memory: 10Gi\n          limits:\n            cpu: 4\n            memory: 20Gi\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f app-demo.yaml\ndeployment.apps/app-demo created\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5",(0,r.kt)("inlineCode",{parentName:"li"},"app-demo"),"\u7684Pod\u8c03\u5ea6\u7ed3\u679c.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k get pod -l app=app-demo -o wide\nNAME                        READY   STATUS    RESTARTS   AGE   IP            NODE     NOMINATED NODE   READINESS GATES\napp-demo-798c66db46-ctnbr   1/1     Running   0          2m    10.17.0.124   node-1   <none>           <none>\napp-demo-798c66db46-pzphc   1/1     Running   0          2m    10.17.0.125   node-1   <none>           <none>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"app-demo"),"\u7684Pod\u5c06\u4f1a\u88ab\u8c03\u5ea6\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"reservation-demo-big"),"\u6240\u5728\u7684\u8282\u70b9\u3002"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5",(0,r.kt)("inlineCode",{parentName:"li"},"reservation-demo-big"),"\u7684\u72b6\u6001\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get reservation reservation-demo-big -oyaml\napiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo-big\n  creationTimestamp: "YYYY-MM-DDT06:28:16Z"\n  uid: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n  ...\nspec:\n  owners:\n  - object:\n      name: pod-demo-0\n      namespace: default\n  template:\n    spec:\n      containers:\n      - args:\n        - -c\n        - "1"\n        command:\n        - stress\n        image: polinux/stress\n        imagePullPolicy: Always\n        name: stress\n        resources:\n          requests:\n            cpu: 500m\n            memory: 800Mi\n      schedulerName: koord-scheduler\n  ttl: 1h\nstatus:\n  allocatable:\n    cpu: 6\n    memory: 20Gi\n  allocated:\n    cpu: 4\n    memory: 20Gi\n  conditions:\n  - lastProbeTime: "YYYY-MM-DDT06:28:17Z"\n    lastTransitionTime: "YYYY-MM-DDT06:28:17Z"\n    reason: Scheduled\n    status: "True"\n    type: Scheduled\n  - lastProbeTime: "YYYY-MM-DDT06:28:17Z"\n    lastTransitionTime: "YYYY-MM-DDT06:28:17Z"\n    reason: Available\n    status: "True"\n    type: Ready\n  currentOwners:\n  - name: app-demo-798c66db46-ctnbr\n    namespace: default\n    uid: yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy\n  - name: app-demo-798c66db46-pzphc\n    namespace: default\n    uid: zzzzzzzz-zzzz-zzzz-zzzzzzzzzzzz\n  nodeName: node-1\n  phase: Available\n')),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u80fd\u770b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"reservation-demo-big"),"\u9884\u7559\u4e866 cpu\u548c20Gi\u5185\u5b58\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"app-demo"),"\u4ece\u9884\u7559\u7684\u8d44\u6e90\u4e2d\u5206\u914d\u4e864 cpu and 20Gi\u5185\u5b58\uff0c\u9884\u7559\u8d44\u6e90\u7684\u5206\u914d\u4e0d\u4f1a\u589e\u52a0\u8282\u70b9\u8d44\u6e90\u7684\u8bf7\u6c42\u5bb9\u91cf\uff0c\u5426\u5219",(0,r.kt)("inlineCode",{parentName:"p"},"node-1"),"\u7684\u8bf7\u6c42\u8d44\u6e90\u603b\u5bb9\u91cf\u5c06\u4f1a\u8d85\u8fc7\u53ef\u5206\u914d\u7684\u8d44\u6e90\u5bb9\u91cf\u3002\u800c\u4e14\u5f53\u6709\u8db3\u591f\u7684\u672a\u5206\u914d\u7684\u9884\u7559\u8d44\u6e90\u65f6\uff0c\u8fd9\u4e9b\u9884\u7559\u8d44\u6e90\u53ef\u4ee5\u88ab\u540c\u65f6\u5206\u914d\u7ed9\u591a\u4e2a\u5c5e\u4e3b\u3002"))}c.isMDXComponent=!0},4462:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/resource-reservation-0c5a187530dd5e3dc9c6e96f97add1ba.svg"}}]);