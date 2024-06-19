"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[1547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={},l="\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6",a={unversionedId:"designs/load-aware-scheduling",id:"designs/load-aware-scheduling",title:"\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6",description:"\u6458\u8981",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/designs/load-aware-scheduling.md",sourceDirName:"designs",slug:"/designs/load-aware-scheduling",permalink:"/zh-Hans/docs/next/designs/load-aware-scheduling",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/load-aware-scheduling.md",tags:[],version:"current",lastUpdatedBy:"Frame",lastUpdatedAt:1718775971,formattedLastUpdatedAt:"2024\u5e746\u670819\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Enhanced Scheduler Extension",permalink:"/zh-Hans/docs/next/designs/enhanced-scheduler-extension"},next:{title:"\u7cbe\u7ec6\u5316 CPU \u7f16\u6392",permalink:"/zh-Hans/docs/next/designs/fine-grained-cpu-orchestration"}},s={},d=[{value:"\u6458\u8981",id:"\u6458\u8981",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u975e\u76ee\u6807/\u672a\u6765\u5de5\u4f5c",id:"\u975e\u76ee\u6807\u672a\u6765\u5de5\u4f5c",level:3},{value:"\u7528\u6237\u6545\u4e8b",id:"\u7528\u6237\u6545\u4e8b",level:2},{value:"\u6545\u4e8b 1",id:"\u6545\u4e8b-1",level:3},{value:"\u6545\u4e8b 2",id:"\u6545\u4e8b-2",level:3},{value:"\u6545\u4e8b 3",id:"\u6545\u4e8b-3",level:3},{value:"\u6545\u4e8b 4",id:"\u6545\u4e8b-4",level:3},{value:"\u5b9e\u65bd\u7ec6\u8282",id:"\u5b9e\u65bd\u7ec6\u8282",level:2},{value:"\u8fc7\u6ee4\u4e0d\u5065\u5eb7\u7684\u8282\u70b9",id:"\u8fc7\u6ee4\u4e0d\u5065\u5eb7\u7684\u8282\u70b9",level:3},{value:"\u8bc4\u5206\u7b97\u6cd5",id:"\u8bc4\u5206\u7b97\u6cd5",level:3},{value:"\u63d2\u4ef6\u914d\u7f6e",id:"\u63d2\u4ef6\u914d\u7f6e",level:3},{value:"\u81ea\u5b9a\u4e49\u8282\u70b9\u6307\u6807\u66f4\u65b0\u5468\u671f",id:"\u81ea\u5b9a\u4e49\u8282\u70b9\u6307\u6807\u66f4\u65b0\u5468\u671f",level:3},{value:"\u81ea\u5b9a\u4e49\u8282\u70b9\u4f7f\u7528\u9608\u503c",id:"\u81ea\u5b9a\u4e49\u8282\u70b9\u4f7f\u7528\u9608\u503c",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6"},"\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6"),(0,o.kt)("h2",{id:"\u6458\u8981"},"\u6458\u8981"),(0,o.kt)("p",null,"\u867d\u7136 Koordinator \u901a\u8fc7\u8d85\u5356\u673a\u5236\u8d85\u5356\u8d44\u6e90\u53ef\u4ee5\u63d0\u9ad8\u8282\u70b9\u7684\u5229\u7528\u7387\uff0c\u4f46\u4e5f\u4f1a\u56e0\u4e3a BestEffort \u7c7b\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5e72\u6270\u5ef6\u8fdf\u654f\u611f\u578b\u5e94\u7528\uff0c\u5c24\u5176\u662f\u5f53\u8282\u70b9\u8d1f\u8f7d\u6c34\u4f4d\u8f83\u9ad8\u65f6\uff0c\u8fd9\u79cd\u5e72\u6270\u5e26\u6765\u7684\u5f71\u54cd\u4f1a\u653e\u5927\uff0c\u4e0d\u4ec5\u53ef\u80fd\u5bfc\u81f4\u5ef6\u8fdf\u654f\u611f\u578b\u5e94\u7528\u7684\u670d\u52a1\u8d28\u91cf\uff0c\u4e5f\u53ef\u80fd\u5bfc\u81f4 BestEffort \u7c7b\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u672c\u8eab\u4e5f\u4e0d\u80fd\u5f88\u5feb\u7684\u5b8c\u6210\u4efb\u52a1\u3002"),(0,o.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,o.kt)("p",null,"Koordinator \u901a\u8fc7\u8d85\u5356\u673a\u5236\u8d85\u5356\u4e00\u4e9b\u8d44\u6e90\u3002\u5c3d\u7ba1\u5b83\u53ef\u4ee5\u63d0\u9ad8\u8282\u70b9\u7684\u5229\u7528\u7387\uff0c\u4f46 BestEffort \u5de5\u4f5c\u8d1f\u8f7d\u4e5f\u53ef\u80fd\u4f1a\u5e72\u6270\u5bf9\u5ef6\u8fdf\u654f\u611f\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u53ef\u914d\u7f6e\u7684\u8c03\u5ea6\u63d2\u4ef6\u6765\u5e2e\u52a9\u63a7\u5236\u96c6\u7fa4\u8d44\u6e90\u5229\u7528\u7387\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8d44\u6e90\u5229\u7528\u7387\u63a7\u5236\u673a\u5236\u652f\u6301\u591a\u79cd\u8d44\u6e90\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u8d44\u6e90\u5229\u7528\u7387\u63a7\u5236\u5728\u5b89\u5168\u9608\u503c\u3002")),(0,o.kt)("h3",{id:"\u975e\u76ee\u6807\u672a\u6765\u5de5\u4f5c"},"\u975e\u76ee\u6807/\u672a\u6765\u5de5\u4f5c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5e94\u7528\u753b\u50cf\u5e2e\u52a9\u63d2\u4ef6\u5b9e\u73b0\u66f4\u5408\u7406\u7684\u8bc4\u4f30\u673a\u5236\u5e76\u83b7\u5f97\u66f4\u597d\u7684\u5747\u8861\u6548\u679c\u3002\u8fd9\u662f\u4e00\u9879\u540e\u7eed\u5de5\u4f5c\uff0c\u5c06\u5728\u4e0d\u540c\u7684\u63d0\u6848\u4e0b\u5b8c\u6210\u3002")),(0,o.kt)("h2",{id:"\u7528\u6237\u6545\u4e8b"},"\u7528\u6237\u6545\u4e8b"),(0,o.kt)("h3",{id:"\u6545\u4e8b-1"},"\u6545\u4e8b 1"),(0,o.kt)("p",null,"\u5f53\u8282\u70b9\u7684\u8d44\u6e90\u5229\u7528\u7387\u8fbe\u5230\u9ad8\u9608\u503c\u65f6\uff0c\u8282\u70b9\u4e0a\u6b63\u5728\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e4b\u95f4\u4f1a\u53d1\u751f\u4e25\u91cd\u7684\u8d44\u6e90\u4e89\u7528\u3002\u4f8b\u5982\uff0c\u7531\u4e8e\u66f4\u9ad8\u4f18\u5148\u7ea7\u7684\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u8d44\u6e90\uff0c\u56e0\u6b64\u7ecf\u5e38 BestEffort \u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u7ed3\u679c\uff0cBestEffort \u7684\u5de5\u4f5c\u8d1f\u8f7d\u8d85\u65f6\u751a\u81f3\u88ab\u8feb\u7ed3\u675f\uff1b\u6216\u8005\u5bf9\u5ef6\u8fdf\u654f\u611f\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u5728\u9ad8\u5229\u7528\u7387\u4e0b\u906d\u53d7\u4e25\u91cd\u7684\u6027\u80fd\u4e0b\u964d\uff0c\u65e0\u6cd5\u6ee1\u8db3\u5916\u90e8 SLA\u3002\u5e94\u8be5\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,o.kt)("h3",{id:"\u6545\u4e8b-2"},"\u6545\u4e8b 2"),(0,o.kt)("p",null,"\u6df7\u90e8\u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5177\u6709\u4e0d\u540c\u7684\u8d44\u6e90\u9700\u6c42\u3002\u5178\u578b\u7684 CPU \u5bc6\u96c6\u578b\u5de5\u4f5c\u8d1f\u8f7d\u9884\u8ba1\u4f1a\u4f7f\u7528\u66f4\u591a CPU\uff0c\u800c\u5176\u4ed6\u7c7b\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u80fd\u4f1a\u4f7f\u7528\u66f4\u591a\u5185\u5b58\u3002\u6709\u53ef\u80fd CPU \u8d44\u6e90\u7684\u5229\u7528\u7387\u6bd4\u8f83\u9ad8\uff0c\u800c\u5185\u5b58\u8d44\u6e90\u7684\u5229\u7528\u7387\u6bd4\u8f83\u4f4e\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8d44\u6e90\u7684\u4e0d\u5e73\u8861\u5229\u7528\u4f1a\u5f71\u54cd\u8c03\u5ea6\u7684\u6548\u679c\uff0c\u751a\u81f3\u53ef\u80fd\u5bfc\u81f4\u8d44\u6e90\u7a7a\u95f2\u4f46 Pod \u65e0\u6cd5\u8c03\u5ea6\u7684\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"\u6545\u4e8b-3"},"\u6545\u4e8b 3"),(0,o.kt)("p",null,"Koordinator \u5b9a\u4e49 NodeMetric CRD \u6765\u63cf\u8ff0\u8282\u70b9\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u5e76\u7531 Koordlet \u5b9a\u671f\u66f4\u65b0\u3002\u4f46\u662f\uff0c\u5982\u679c\u5728\u66f4\u65b0\u5468\u671f\u4e2d\u6709\u5f88\u591a Pod \u8c03\u5ea6\u5230\u51b7\u8282\u70b9\uff08\u5373\u8d44\u6e90\u5229\u7528\u7387\u4f4e\u7684\u8282\u70b9\uff09\uff0c\u5f53\u8fd9\u4e9b Pod \u5f00\u59cb\u8fd0\u884c\u65f6\uff0c\u8fd9\u4e9b\u8282\u70b9\u7684\u8d44\u6e90\u5229\u7528\u7387\u53ef\u80fd\u4f1a\u8d85\u8fc7\u9884\u671f\u7684\u9608\u503c\u3002\u7ed3\u679c\uff0c\u8fd9\u4e9b Pod \u7684\u8fd0\u884c\u65f6\u8d28\u91cf\u5e76\u6ca1\u6709\u9884\u671f\u7684\u90a3\u4e48\u597d\u3002"),(0,o.kt)("h3",{id:"\u6545\u4e8b-4"},"\u6545\u4e8b 4"),(0,o.kt)("p",null,"\u7531\u4e8e\u8282\u70b9\u5f02\u5e38\uff0cKoordlet \u53ef\u80fd\u65e0\u6cd5\u62a5\u544a\u6700\u65b0\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002\u5728\u8c03\u5ea6\u8fc7\u7a0b\u4e2d\u5e94\u907f\u514d\u6b64\u7c7b\u8282\u70b9\uff0c\u4ee5\u9632\u6b62\u51fa\u73b0\u610f\u5916\u5f02\u5e38\u3002"),(0,o.kt)("h2",{id:"\u5b9e\u65bd\u7ec6\u8282"},"\u5b9e\u65bd\u7ec6\u8282"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(2503).Z,width:"611",height:"466"})),(0,o.kt)("p",null,"\u8c03\u5ea6\u63d2\u4ef6\u8fc7\u6ee4\u5f02\u5e38\u8282\u70b9\u5e76\u6839\u636e\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5bf9\u5176\u8fdb\u884c\u8bc4\u5206\u3002\u8fd9\u4e2a\u8c03\u5ea6\u63d2\u4ef6\u6269\u5c55\u4e86 Kubernetes \u8c03\u5ea6\u6846\u67b6\u4e2d\u5b9a\u4e49\u7684 Filter/Score/Reserve/Unreserve \u6269\u5c55\u70b9\u3002"),(0,o.kt)("h3",{id:"\u8fc7\u6ee4\u4e0d\u5065\u5eb7\u7684\u8282\u70b9"},"\u8fc7\u6ee4\u4e0d\u5065\u5eb7\u7684\u8282\u70b9"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u8fc7\u6ee4\u5f02\u5e38\u8282\u70b9\uff0c\u4f46\u662f\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u901a\u8fc7\u914d\u7f6e\u6765\u51b3\u5b9a\u662f\u5426\u5f00\u542f\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fc7\u6ee4 Koordlet \u65e0\u6cd5\u66f4\u65b0 NodeMetric \u7684\u8282\u70b9\u3002\u5982\u679c\u914d\u7f6e\u542f\u7528\uff0c\u63d2\u4ef6\u5c06\u6392\u9664 time.Since(nodeMetrics.status.updateTime.Time) >= LoadAwareSchedulingArgs.nodeMetricExpirationSeconds \u7684\u8282\u70b9\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6309\u5229\u7528\u7387\u9608\u503c\u8fc7\u6ee4\u8282\u70b9\u3002\u5982\u679c\u914d\u7f6e\u542f\u7528\uff0c\u63d2\u4ef6\u5c06\u6392\u9664 latestUsageUtilization >= \u5229\u7528\u7387\u9608\u503c\u7684\u8282\u70b9\u3002 \u5728\u8fc7\u6ee4\u9636\u6bb5\uff0c\u4ec5\u4ece\u6700\u65b0\u7684 NodeMetric \u4e2d\u83b7\u53d6\u8d44\u6e90\u5229\u7528\u7387\uff0c\u5df2\u5206\u914d\u4f46\u5c1a\u672a\u7edf\u8ba1\u7684 Pod \u7684\u8d44\u6e90\u5229\u7528\u7387\u4e0d\u53c2\u4e0e\u8ba1\u7b97\uff0c\u4ee5\u4fbf\u4e3a\u65b0\u521b\u5efa\u7684 Pod \u5206\u914d\u8d44\u6e90\uff0c\u907f\u514d\u56e0\u4f30\u7b97\u4e0d\u5408\u7406\u800c\u5bfc\u81f4\u8c03\u5ea6\u5931\u8d25\u3002"))),(0,o.kt)("h3",{id:"\u8bc4\u5206\u7b97\u6cd5"},"\u8bc4\u5206\u7b97\u6cd5"),(0,o.kt)("p",null,"\u8bc4\u5206\u7b97\u6cd5\u7684\u6838\u5fc3\u903b\u8f91\u662f\u9009\u62e9\u8d44\u6e90\u4f7f\u7528\u91cf\u6700\u5c0f\u7684\u8282\u70b9\u3002\u4f46\u662f\u8003\u8651\u5230\u8d44\u6e90\u4f7f\u7528\u4e0a\u62a5\u7684\u5ef6\u8fdf\u548c Pod \u542f\u52a8\u65f6\u95f4\u7684\u5ef6\u8fdf\uff0c\u65f6\u95f4\u7a97\u53e3\u5185\u5df2\u7ecf\u8c03\u5ea6\u7684 Pod \u548c\u5f53\u524d\u6b63\u5728\u8c03\u5ea6\u7684 Pod \u7684\u8d44\u6e90\u8bf7\u6c42\u4e5f\u4f1a\u88ab\u4f30\u7b97\u51fa\u6765\uff0c\u5e76\u4e14\u4f30\u7b97\u503c\u5c06\u53c2\u4e0e\u8ba1\u7b97\u3002"),(0,o.kt)("h3",{id:"\u63d2\u4ef6\u914d\u7f6e"},"\u63d2\u4ef6\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'\ntype LoadAwareSchedulingArgs struct {\n  metav1.TypeMeta\n\n  FilterExpiredNodeMetrics    *bool                          `json:"filterExpiredNodeMetrics,omitempty"`\n  NodeMetricExpirationSeconds *int64                         `json:"nodeMetricExpirationSeconds,omitempty"`\n  ResourceWeights             map[corev1.ResourceName]int64 `json:"resourceWeights,omitempty"`\n  UsageThresholds             map[corev1.ResourceName]int64 `json:"usageThresholds,omitempty"`\n  EstimatedScalingFactors     map[corev1.ResourceName]int64 `json:"estimatedScalingFactors,omitempty"`\n}\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FilterExpiredNodeMetrics")," \u6307\u5b9a\u662f\u5426\u8fc7\u6ee4 Koordlet \u65e0\u6cd5\u66f4\u65b0 NodeMetric \u7684\u8282\u70b9\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NodeMetricExpirationSeconds")," \u8868\u793a NodeMetric \u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff1b\u5f53NodeMetric\u8fc7\u671f\u65f6\uff0c\u8282\u70b9\u88ab\u8ba4\u4e3a\u5f02\u5e38\u3002\u9ed8\u8ba4\u4e3a180\u79d2\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ResourceWeights")," \u8868\u793a\u8d44\u6e90\u7684\u6743\u91cd\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCPU \u548c\u5185\u5b58\u7684\u6743\u91cd\u90fd\u4e3a1\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UsageThresholds")," \u8868\u793a\u8d44\u6e90\u5229\u7528\u7387\u9608\u503c\uff0cCPU \u7684\u9ed8\u8ba4\u503c\u4e3a65%\uff0c\u5185\u5b58\u7684\u9ed8\u8ba4\u503c\u4e3a95%\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EstimatedScalingFactors")," \u8868\u793a\u4f30\u8ba1\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u65f6\u7684\u7cfb\u6570\u3002CPU \u7684\u9ed8\u8ba4\u503c\u4e3a85%\uff0c\u5185\u5b58\u7684\u9ed8\u8ba4\u503c\u4e3a70%\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FilterExpiredNodeMetrics")," \u63a7\u5236 Filter \u884c\u4e3a\uff0c\u5982\u679c\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"NodeMetricExpirationSeconds")," \u5728\u8ba1\u5206\u65f6\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u8282\u70b9\u6307\u6807\u66f4\u65b0\u5468\u671f"},"\u81ea\u5b9a\u4e49\u8282\u70b9\u6307\u6807\u66f4\u65b0\u5468\u671f"),(0,o.kt)("p",null,"\u6b64\u63d2\u4ef6\u4f9d\u8d56\u4e8e NodeMetric \u7684\u62a5\u544a\u5468\u671f\u3002\u9700\u8981\u6839\u636e\u4e0d\u540c\u7684\u573a\u666f\u548c\u5de5\u4f5c\u91cf\u8bbe\u7f6e\u4e0d\u540c\u7684\u62a5\u544a\u5468\u671f\u3002\u5982\u679c\u62a5\u544a\u5468\u671f\u6bd4\u8f83\u957f\uff0cKoordlet \u9700\u8981\u5728\u62a5\u544a\u5468\u671f\u5185\u8fdb\u884c\u6c47\u603b\uff0c\u4ee5\u4fdd\u8bc1\u6307\u6807\u7684\u6548\u679c\u3002\u56e0\u6b64\uff0cNodeMetricSpec \u9700\u8981\u6269\u5c55\u4ee5\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u62a5\u544a\u5468\u671f\u548c\u805a\u5408\u5468\u671f\u3002\u7528\u6237\u53ef\u4ee5\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"slo-controller-config")," \u6765\u5b8c\u6210\u76f8\u5e94\u7684\u914d\u7f6e\uff0cKoord-Manager \u4e2d\u7684\u63a7\u5236\u5668\u4f1a\u8d1f\u8d23\u66f4\u65b0\u76f8\u5173\u8282\u70b9\u7684 NodeMetrics \u7684\u4e0a\u62a5\u5468\u671f\u548c\u805a\u5408\u5468\u671f\u5b57\u6bb5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// NodeMetricSpec defines the desired state of NodeMetric\ntype NodeMetricSpec struct {\n  // CollectPolicy defines the Metric collection policy\n  CollectPolicy *NodeMetricCollectPolicy `json:"metricCollectPolicy,omitempty"`\n}\n\n// NodeMetricCollectPolicy defines the Metric collection policy\ntype NodeMetricCollectPolicy struct {\n  // AggregateDurationSeconds represents the aggregation period in seconds\n  AggregateDurationSeconds *int64 `json:"aggregateDurationSeconds,omitempty"`\n  // ReportIntervalSeconds represents the report period in seconds\n  ReportIntervalSeconds *int64 `json:"reportIntervalSeconds,omitempty"`\n}\n')),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u8282\u70b9\u4f7f\u7528\u9608\u503c"},"\u81ea\u5b9a\u4e49\u8282\u70b9\u4f7f\u7528\u9608\u503c"),(0,o.kt)("p",null,"\u76ee\u524d\uff0c\u8282\u70b9\u7684\u8d44\u6e90\u5229\u7528\u7387\u9608\u503c\u662f\u6839\u636e\u7ecf\u9a8c\u914d\u7f6e\u7684\uff0c\u4ee5\u4fdd\u8bc1\u8282\u70b9\u7684\u8fd0\u884c\u8d28\u91cf\u3002\u4f46\u4e5f\u6709\u4e00\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u8bc4\u4f30\u8282\u70b9\u4e0a\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4ee5\u8fbe\u5230\u66f4\u5408\u9002\u7684\u8d44\u6e90\u5229\u7528\u7387\u9608\u503c\u3002\u4f8b\u5982\uff0c\u5728\u5206\u65f6\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u66f4\u9ad8\u7684\u9608\u503c\u4ee5\u5141\u8bb8\u8c03\u5ea6\u5728\u5ef6\u8fdf\u654f\u611f\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u4f4e\u8c37\u671f\u95f4\u8fd0\u884c\u66f4\u591a\u7684 BestEffort \u5de5\u4f5c\u8d1f\u8f7d\u3002\u5f53\u5bf9\u5ef6\u8fdf\u654f\u611f\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u5cf0\u503c\u51fa\u73b0\u65f6\uff0c\u964d\u4f4e\u9608\u503c\u5e76\u9a71\u9010\u4e00\u4e9b BestEffort \u5de5\u4f5c\u8d1f\u8f7d\u3002\u6b64\u5916\uff0c\u53ef\u4ee5\u4f7f\u7528 3-sigma \u6765\u5206\u6790\u96c6\u7fa4\u4e2d\u7684\u5229\u7528\u7387\u6c34\u5e73\uff0c\u4ee5\u83b7\u5f97\u66f4\u5408\u9002\u7684\u9608\u503c\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u7528\u6237\u901a\u8fc7 Annotation \u81ea\u5b9a\u4e49\u8282\u70b9\u8d44\u6e90\u5229\u7528\u7387\u9608\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'const (\n  AnnotationCustomUsageThresholds = "scheduling.koordinator.sh/usage-thresholds"\n)\n\ntype CustomUsageThresholds struct {\n  UsageThresholds map[corev1.ResourceName]int64 `json:"usageThresholds,omitempty"`\n}\n')))}u.isMDXComponent=!0},2503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/load-aware-scheduling-arch-cfa9bc8e584faf58a3c7807fd699361a.svg"}}]);