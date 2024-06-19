"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[4967],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},l="\u57fa\u4e8eCPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u9a71\u9010\u7b56\u7565",p={unversionedId:"user-manuals/cpu-evict",id:"version-v1.5/user-manuals/cpu-evict",title:"\u57fa\u4e8eCPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u9a71\u9010\u7b56\u7565",description:"\u7b80\u4ecb",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.5/user-manuals/cpu-evict.md",sourceDirName:"user-manuals",slug:"/user-manuals/cpu-evict",permalink:"/zh-Hans/docs/user-manuals/cpu-evict",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/cpu-evict.md",tags:[],version:"v1.5",lastUpdatedBy:"Frame",lastUpdatedAt:1718775971,formattedLastUpdatedAt:"2024\u5e746\u670819\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"CPU Suppress",permalink:"/zh-Hans/docs/user-manuals/cpu-suppress"},next:{title:"\u57fa\u4e8e\u5185\u5b58\u7528\u91cf\u7684\u9a71\u9010\u7b56\u7565",permalink:"/zh-Hans/docs/user-manuals/memory-evict"}},i={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u57fa\u4e8ecpu\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u9a71\u9010\u7b56\u7565"},"\u57fa\u4e8eCPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u9a71\u9010\u7b56\u7565"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"Koordinator\u63d0\u4f9b\u4e86CPU\u7684",(0,r.kt)("a",{parentName:"p",href:"/docs/user-manuals/cpu-suppress"},"\u52a8\u6001\u538b\u5236\u80fd\u529b"),"\uff0c\u5728\u6df7\u90e8\u573a\u666f\u4e0b\u53ef\u4ee5\u6839\u636e\u9ad8\u4f18\u5148\u7ea7Pod\uff08LS\uff09\u7684\u8d44\u6e90\u7528\u91cf\u60c5\u51b5\uff0c\n\u52a8\u6001\u8c03\u6574\u4f4e\u4f18\u5148\u7ea7Pod\uff08BE\uff09\u53ef\u4ee5\u4f7f\u7528\u7684CPU\u8d44\u6e90\u4e0a\u9650\uff0c\u5f53LS Pod\u7684\u8d44\u6e90\u7528\u91cf\u4e0a\u5347\u65f6\uff0ckoordlet\u5c06\u7f29\u51cfBE Pod\u53ef\u4f7f\u7528\u7684CPU\u6838\u5fc3\u3002\u7136\u800c\uff0c\u5f53LS Pod\u8d1f\u8f7d\u7a81\u589e\u65f6\uff0c\n\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5927\u91cfBE Pod\u88ab\u538b\u5236\u5728\u5c11\u91cfCPU\u4e0a\uff0c\u4f7f\u5f97\u8fd9\u90e8\u5206Pod\u7684\u8d44\u6e90\u6ee1\u8db3\u5ea6\u8f83\u4f4e\uff0c\u5e94\u7528\u8fd0\u884c\u53ca\u5176\u7f13\u6162\uff0c\u751a\u81f3\u989d\u5916\u5f15\u5165\u4e00\u4e9b\u5185\u6838\u8d44\u6e90\u7684\u7ade\u4e89\u3002"),(0,r.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u5927\u90e8\u5206BE Pod\u7684\u79bb\u7ebf\u4efb\u52a1\u90fd\u6709\u8f83\u597d\u7684\u91cd\u8bd5\u80fd\u529b\uff0c\u53ef\u4ee5\u63a5\u53d7\u4e00\u5b9a\u7a0b\u5ea6\u7684\u9a71\u9010\u800c\u6362\u53d6\u66f4\u9ad8\u7684\u8d44\u6e90\u8d28\u91cf\u3002Koordlet\u63d0\u4f9b\u4e86\u57fa\u4e8eCPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u9a71\u9010\u7b56\u7565\uff0c\n\u8ba1\u7b97\u88ab\u538b\u5236\u90e8\u5206\u7684CPU\u5229\u7528\u7387\u548c\u8d44\u6e90\u6ee1\u8db3\u5ea6\uff0c\u5f53\u5229\u7528\u7387\u548c\u8d44\u6e90\u6ee1\u8db3\u5ea6\u540c\u65f6\u8d85\u8fc7\u914d\u7f6e\u7684\u9608\u503c\u65f6\uff0c\u4f1a\u4f9d\u6b21\u6309\u66f4\u4f4e\u4f18\u5148\u7ea7\u3001\u66f4\u9ad8\u7684Pod CPU\u5229\u7528\u7387\u5bf9BE Pod\u8fdb\u884c\u9a71\u9010\uff0c\n\u76f4\u81f3CPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u6062\u590d\u5230\u9608\u503c\u4ee5\u4e0a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(6226).Z,width:"1082",height:"281"})),(0,r.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.kt)("p",null,"\u8bf7\u786e\u4fddKoordinator\u5df2\u6b63\u786e\u5b89\u88c5\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002\u82e5\u672a\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://koordinator.sh/docs/installation"},"\u5b89\u88c5\u6587\u6863"),"\u3002\n\u8be5\u529f\u80fd\u9700\u5f00\u542fBatch\u8d44\u6e90\u52a8\u6001\u8d85\u5356\uff0c\u5e76\u548cCPU\u52a8\u6001\u538b\u5236\u80fd\u529b\u914d\u5408\u4f7f\u7528\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/user-manuals/cpu-suppress"},"\u4f7f\u7528\u6587\u6863"),"\u3002\u6240\u9700\u7684\u7248\u672c\u8981\u6c42\u60c5\u51b5\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u8981\u6c42"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2265v1.18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"koordinator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2265v0.4.0")))),(0,r.kt)("p",null,"\u8be5\u529f\u80fd\u7531\u5355\u673a\u7ec4\u4ef6Koordlet\u63d0\u4f9b\uff0c\u5bf9\u5e94\u7684feature-gate\u9ed8\u8ba4\u5173\u95ed\uff0c\u4f7f\u7528\u524d\u8bf7\u786e\u4fddkoordlet\u7684\u542f\u52a8\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"-feature-gates"),"\u4e2d\u5df2\u7ecf\u6dfb\u52a0\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"BECPUEvict=true"),",\n\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/blob/main/versions/v1.2.0/templates/koordlet.yaml#L36"},"\u53c2\u8003\u793a\u4f8b"),"\u3002"),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0bConfigMap\uff0c\u521b\u5efaconfigmap.yaml\u6587\u4ef6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'#ConfigMap slo-controller-config \u6837\u4f8b\u3002\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config # \u4ee5koord-manager\u5b9e\u9645\u914d\u7f6e\u7684\u540d\u5b57\u4e3a\u51c6\uff0c\u4f8b\u5982ack-slo-config\n  namespace: koordinator-system # \u547d\u540d\u7a7a\u95f4\u4ee5\u73af\u5883\u4e2d\u5b9e\u9645\u5b89\u88c5\u7684\u60c5\u51b5\u4e3a\u51c6\uff0c\u4f8b\u5982kube-system\ndata:\n  # \u5f00\u542f\u57fa\u4e8eCPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u9a71\u9010\u529f\u80fd\u3002\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": true,\n        "cpuEvictBESatisfactionLowerPercent": 60,\n        "cpuEvictBESatisfactionUpperPercent": 80,\n        "cpuEvictBEUsageThresholdPercent": 90,\n        "CPUEvictTimeWindowSeconds": 60\n      }\n    }\n')),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enable")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true; false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true\uff1a\u96c6\u7fa4\u5168\u5c40\u5f00\u542fCPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u9a71\u9010\u7b56\u7565\u3002false\uff08\u9ed8\u8ba4\u503c\uff09\uff1a\u96c6\u7fa4\u5168\u5c40\u5173\u95ed\u7b56\u7565\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cpuEvictBESatisfactionLowerPercent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0~60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BE CPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u9a71\u9010\u9608\u503c\uff0c\u4f4e\u4e8e\u8be5\u503c\u65f6\u5c06\u89e6\u53d1\u5bf9BE Pod\u7684\u9a71\u9010\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cpuEvictBESatisfactionUpperPercent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cpuEvictBESatisfactionLowerPercent~100"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BE CPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u5b89\u5168\u9608\u503c\uff0c\u9ad8\u4e8e\u8be5\u503c\u65f6\u5c06\u505c\u6b62\u5bf9BE Pod\u7684\u9a71\u9010\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cpuEvictBEUsageThresholdPercent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0~100"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BE CPU\u5229\u7528\u7387\u9608\u503c\uff0c\u5f53BE Pod\u5728CPU\u88ab\u538b\u5236\u8303\u56f4\u5185\u7684\u5229\u7528\u7387\u9ad8\u4e8e\u8be5\u503c\u65f6\uff0c\u624d\u4f1a\u89e6\u53d1\u9a71\u9010\uff0c\u9ed8\u8ba4\u503c\u4e3a90\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cpuEvictTimeWindowSeconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},">=2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u548cBE CPU\u5229\u7528\u7387\u8ba1\u7b97\u7684\u65f6\u95f4\u7a97\u53e3\uff0c\u5355\u4f4d\u4e3a\u79d2"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5b89\u88c5\u7684\u547d\u540d\u7a7a\u95f4\u4e0b\u662f\u5426\u5b58\u5728ConfigMap\uff0c\u4ee5\u547d\u540d\u7a7a\u95f4",(0,r.kt)("inlineCode",{parentName:"p"},"koordinator-system"),"\u548cConfigMap\u540d\u5b57",(0,r.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"\u4e3a\u4f8b\uff0c\u5177\u4f53\u4ee5\u5b9e\u9645\u5b89\u88c5\u914d\u7f6e\u4e3a\u51c6\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82e5\u5b58\u5728ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"\uff0c\u8bf7\u4f7f\u7528PATCH\u65b9\u5f0f\u8fdb\u884c\u66f4\u65b0\uff0c\u907f\u514d\u5e72\u6270ConfigMap\u4e2d\u5176\u4ed6\u914d\u7f6e\u9879\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch cm -n koordinator-system slo-controller-config --patch "$(cat configmap.yaml)"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82e5\u4e0d\u5b58\u5728ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u521b\u5efaConfigMap\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f configmap.yaml\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0bYAML\u5185\u5bb9\uff0c\u521b\u5efabe-pod-demo.yaml\u6587\u4ef6\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: be-pod-demo\n  labels:\n    koordinator.sh/qosClass: 'BE' #\u6307\u5b9aPod\u7684QoS\u7ea7\u522b\u4e3aBE\u3002\nspec:\n  containers:\n    - args:\n        - '-c'\n        - '4'\n        - '--vm'\n        - '1'\n      command:\n        - stress\n      image: polinux/stress\n      imagePullPolicy: Always\n      name: stress\n      resources:\n        limits:\n          kubernetes.io/batch-cpu: 4k\n          kubernetes.io/batch-memory: 4Gi\n        requests:\n          kubernetes.io/batch-cpu: 4k\n          kubernetes.io/batch-memory: 4Gi\n  restartPolicy: Always\n  schedulerName: default-scheduler\n  # \u5f53ColocationProfile\u529f\u80fd\u5f00\u542f\u65f6\uff08\u9ed8\u8ba4\u542f\u7528\uff09\uff0cpriorityClassName\u662f\u5fc5\u586b\u7684\n  priorityClassName: koord-batch\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06be-pod-demo\u90e8\u7f72\u5230\u96c6\u7fa4\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f be-pod-demo.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770bbe-pod-demo\u72b6\u6001\uff0c\u7b49\u5f85Pod\u542f\u52a8\u5b8c\u6210\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod be-pod-demo\nNAME          READY   STATUS    RESTARTS   AGE\nbe-pod-demo   1/1     Running   0          7s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8282\u70b9\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/stress"},"stress\u5de5\u5177"),"\u542f\u52a8\u8fdb\u7a0b\uff0c\n\u786e\u4fdd\u6574\u673a\u5185\u5b58\u8d44\u6e90\u7528\u91cf\u88ab\u63d0\u5347\u5230\u9a71\u9010\u6c34\u4f4d\u4ee5\u4e0a\uff0c\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"--cpu"),"\u53c2\u6570\u8868\u793astress\u8fdb\u7a0b\u5360\u7528\u7684CPU\u8d44\u6e90\u91cf10\u6838\uff0c\u6d4b\u8bd5\u65f6\u53ef\u6839\u636e\u5b9e\u9645\u673a\u578b\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ stress --cpu 10 --vm 1\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u89c2\u5bdfbe-pod-demo\u8fd0\u884c\u60c5\u51b5\uff0c\u53ef\u4ee5\u53d1\u73b0be-pod-demo\u5df2\u7ecf\u4e0d\u5b58\u5728\uff0c\u9a71\u9010\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7event\u67e5\u770b\u5230\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod be-pod-demo\nError from server (NotFound): pods "be-pod-demo" not found\n\n$ kubectl get event\nLAST SEEN   TYPE      REASON            OBJECT              MESSAGE\n44s         Normal    Killing           pod/be-pod-demo                     Stopping container stress\n44s         Warning   evictPodSuccess   ${your-pod-object}   evict Pod:be-pod-demo, reason: EvictPodByBECPUSatisfaction, message: killAndEvictBEPodsRelease for node(${your-node-id}), need realase CPU : 1200\n')))))}d.isMDXComponent=!0},6226:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cpu-evict-2b032557e0eb8d8c0ef853a69c03e592.svg"}}]);