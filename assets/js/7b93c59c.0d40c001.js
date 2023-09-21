"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[6391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={slug:"release-v1.3.0",title:"Koordinator v1.3: \u589e\u5f3a\u8d44\u6e90\u9884\u7559\uff0c\u652f\u6301 NRI\uff0c\u63d0\u4f9b\u8282\u70b9\u753b\u50cf\u7684 Mid \u8d44\u6e90\u8d85\u5356",authors:["saintube"],tags:["release"]},l=void 0,i={permalink:"/blog/release-v1.3.0",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/blog/2023-08-16-release/index.md",source:"@site/blog/2023-08-16-release/index.md",title:"Koordinator v1.3: \u589e\u5f3a\u8d44\u6e90\u9884\u7559\uff0c\u652f\u6301 NRI\uff0c\u63d0\u4f9b\u8282\u70b9\u753b\u50cf\u7684 Mid \u8d44\u6e90\u8d85\u5356",description:"\u80cc\u666f",date:"2023-08-16T00:00:00.000Z",formattedDate:"August 16, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:11.97,hasTruncateMarker:!1,authors:[{name:"Rougang Han",title:"Koordinator member",url:"https://github.com/saintube",imageURL:"https://github.com/saintube.png",key:"saintube"}],frontMatter:{slug:"release-v1.3.0",title:"Koordinator v1.3: \u589e\u5f3a\u8d44\u6e90\u9884\u7559\uff0c\u652f\u6301 NRI\uff0c\u63d0\u4f9b\u8282\u70b9\u753b\u50cf\u7684 Mid \u8d44\u6e90\u8d85\u5356",authors:["saintube"],tags:["release"]},nextItem:{title:"Koordinator v1.2: \u652f\u6301\u8282\u70b9\u8d44\u6e90\u9884\u7559\uff0c\u517c\u5bb9\u793e\u533a\u91cd\u8c03\u5ea6\u7b56\u7565",permalink:"/blog/release-v1.2.0"}},d={authorsImageUrls:[void 0]},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb",id:"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb",level:2},{value:"\u8d44\u6e90\u9884\u7559\u589e\u5f3a",id:"\u8d44\u6e90\u9884\u7559\u589e\u5f3a",level:3},{value:"\u5176\u4ed6\u8c03\u5ea6\u589e\u5f3a",id:"\u5176\u4ed6\u8c03\u5ea6\u589e\u5f3a",level:3},{value:"NRI \u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f",id:"nri-\u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f",level:3},{value:"\u8282\u70b9\u753b\u50cf\u548c Mid \u8d44\u6e90\u8d85\u5356",id:"\u8282\u70b9\u753b\u50cf\u548c-mid-\u8d44\u6e90\u8d85\u5356",level:3},{value:"\u5176\u4ed6\u529f\u80fd",id:"\u5176\u4ed6\u529f\u80fd",level:3},{value:"\u672a\u6765\u8ba1\u5212",id:"\u672a\u6765\u8ba1\u5212",level:2},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,o.kt)("p",null,"Koordinator \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u65e8\u5728\u57fa\u4e8e\u963f\u91cc\u5df4\u5df4\u5728\u5bb9\u5668\u8c03\u5ea6\u9886\u57df\u7684\u591a\u5e74\u7ecf\u9a8c\uff0c\u63d0\u4f9b\u4e00\u4e2a\u5b8c\u6574\u7684\u6df7\u90e8\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u542b\u6df7\u90e8\u5de5\u4f5c\u8d1f\u8f7d\u7f16\u6392\u3001\u8d44\u6e90\u8c03\u5ea6\u3001\u8d44\u6e90\u9694\u79bb\u53ca\u6027\u80fd\u8c03\u4f18\u7b49\u591a\u65b9\u9762\u80fd\u529b\uff0c\u6765\u5e2e\u52a9\u7528\u6237\u4f18\u5316\u5bb9\u5668\u6027\u80fd\uff0c\u5145\u5206\u53d1\u6398\u7a7a\u95f2\u7269\u7406\u8d44\u6e90\uff0c\u63d0\u5347\u8d44\u6e90\u6548\u7387\uff0c\u589e\u5f3a\u5ef6\u8fdf\u654f\u611f\u578b\u5de5\u4f5c\u8d1f\u8f7d\u548c\u6279\u5904\u7406\u4f5c\u4e1a\u7684\u8fd0\u884c\u6548\u7387\u548c\u53ef\u9760\u6027\u3002"),(0,o.kt)("p",null,"\u5728\u6b64\uff0c\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5411\u5404\u4f4d\u5ba3\u5e03 Koordinator v1.3.0 \u7248\u672c\u7684\u53d1\u5e03\u3002\u81ea 2022 \u5e74 4 \u6708\u53d1\u5e03 v0.1.0 \u7248\u672c\u4ee5\u6765\uff0cKoordinator \u8fc4\u4eca\u8fed\u4ee3\u53d1\u5e03\u4e86\u5171 11 \u4e2a\u7248\u672c\uff0c\u5438\u5f15\u4e86\u4e86\u5305\u62ec\u963f\u91cc\u5df4\u5df4\u3001Intel\u3001\u5c0f\u7c73\u3001\u5c0f\u7ea2\u4e66\u3001\u7231\u5947\u827a\u3001360\u3001\u6709\u8d5e\u7b49\u4f01\u4e1a\u5728\u5185\u7684\u5927\u91cf\u4f18\u79c0\u5de5\u7a0b\u5e08\u53c2\u4e0e\u8d21\u732e\u3002\u5728 v1.3.0 \u7248\u672c\u4e2d\uff0cKoordinator \u5e26\u6765\u4e86 NRI (Node Resource Interface) \u652f\u6301\u3001Mid \u8d44\u6e90\u8d85\u5356\u7b49\u65b0\u7279\u6027\uff0c\u5e76\u5728\u8d44\u6e90\u9884\u7559\u3001\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6\u3001DeviceShare \u8c03\u5ea6\u3001\u8d1f\u8f7d\u611f\u77e5\u91cd\u8c03\u5ea6\u3001\u8c03\u5ea6\u5668\u6846\u67b6\u3001\u5355\u673a\u6307\u6807\u91c7\u96c6\u548c\u8d44\u6e90\u8d85\u5356\u6846\u67b6\u7b49\u7279\u6027\u4e0a\u8fdb\u884c\u4e86\u7a33\u5b9a\u6027\u4fee\u590d\u3001\u6027\u80fd\u4f18\u5316\u4e0e\u529f\u80fd\u589e\u5f3a\u3002"),(0,o.kt)("p",null,"\u5728 v1.3.0 \u7248\u672c\u4e2d\uff0c\u5171\u6709 12 \u4f4d\u65b0\u52a0\u5165\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u5230\u4e86 Koordinator \u793e\u533a\u7684\u5efa\u8bbe\uff0c\u4ed6\u4eec\u662f @bowen-intel\uff0c@BUPT-wxq\uff0c@Gala-R\uff0c@haoyann\uff0c@kangclzjc\uff0c@Solomonwisdom\uff0c@stulzq\uff0c@TheBeatles1994\uff0c@Tiana2018\uff0c@VinceCui\uff0c@wenchezhao\uff0c@zhouzijiang\uff0c\u611f\u8c22\u671f\u95f4\u5404\u4f4d\u793e\u533a\u540c\u5b66\u7684\u79ef\u6781\u53c2\u4e0e\u548c\u8d21\u732e\uff0c\u4e5f\u611f\u8c22\u6240\u6709\u540c\u5b66\u5728\u793e\u533a\u7684\u6301\u7eed\u6295\u5165\u3002"),(0,o.kt)("h2",{id:"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb"},"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb"),(0,o.kt)("h3",{id:"\u8d44\u6e90\u9884\u7559\u589e\u5f3a"},"\u8d44\u6e90\u9884\u7559\u589e\u5f3a"),(0,o.kt)("p",null,"\u8d44\u6e90\u9884\u7559\uff08Reservation\uff09\u80fd\u529b\u81ea v0.5.0 \u7248\u672c\u63d0\u51fa\u540e\uff0c\u7ecf\u5386\u4e86\u4e00\u5e74\u7684\u6253\u78e8\u548c\u8fed\u4ee3\uff0c\u5728 v1.3.0 \u7248\u672c\u4e2d\u9488\u5bf9\u62a2\u5360\u3001\u8bbe\u5907\u9884\u7559\u3001Coscheduling \u7b49\u573a\u666f\u589e\u5f3a\u4e86\u9884\u7559\u673a\u5236\uff0c\u65b0\u589e allocatePolicy \u5b57\u6bb5\u7528\u4e8e\u5b9a\u4e49\u4e0d\u540c\u7684\u9884\u7559\u8d44\u6e90\u5206\u914d\u7b56\u7565\u3002\u6700\u65b0\u7684\u8d44\u6e90\u9884\u7559 API \u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo\nspec:\n  # template\u5b57\u6bb5\u586b\u5199reservation\u5bf9\u8c61\u7684\u8d44\u6e90\u9700\u6c42\u548caffinity\u4fe1\u606f\uff0c\u5c31\u50cf\u8c03\u5ea6pod\u4e00\u6837.\n  template:\n    namespace: default\n    spec:\n      containers:\n        - args:\n            - '-c'\n            - '1'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources:\n            requests:\n              cpu: 500m\n              memory: 1Gi\n      nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n         nodeSelectorTerms:\n            - matchExpressions:\n                 - key: topology.kubernetes.io/zone\n                   operator: In\n                   values:\n                      - cn-hangzhou-i\n      schedulerName: koord-scheduler # \u6307\u5b9akoord-scheduler\u6765\u8d1f\u8d23reservation\u5bf9\u8c61\u7684\u8c03\u5ea6.\n  # \u6307\u5b9a\u53ef\u5206\u914d\u9884\u7559\u8d44\u6e90\u7684owners.\n  owners:\n    - labelSelector:\n        matchLabels:\n          app: app-demo\n  ttl: 1h\n  # \u6307\u5b9a\u9884\u7559\u8d44\u6e90\u662f\u5426\u4ec5\u652f\u6301\u4e00\u6b21\u6027\u7684\u5206\u914d.\n  allocateOnce: true\n  # \u6307\u5b9a\u9884\u7559\u8d44\u6e90\u7684\u5206\u914d\u7b56\u7565,\u5f53\u524d\u652f\u6301\u4ee5\u4e0b\u7b56\u7565:\n  # - Default: \u7f3a\u7701\u914d\u7f6e\uff0c\u4e0d\u9650\u5236\u5bf9\u9884\u7559\u8d44\u6e90\u7684\u5206\u914d\uff0cpod\u4f18\u5148\u5206\u914d\u81ea\u8282\u70b9\u4e0a\u7684\u9884\u7559\u8d44\u6e90\uff1b\u5982\u679c\u9884\u7559\u8d44\u6e90\u4e0d\u8db3\uff0c\u5219\u7ee7\u7eed\u5206\u914d\u8282\u70b9\u7a7a\u95f2\u8d44\u6e90\u3002\n  # - Aligned: pod\u4f18\u5148\u5206\u914d\u81ea\u8282\u70b9\u4e0a\u7684\u9884\u7559\u8d44\u6e90\uff1b\u5982\u679c\u9884\u7559\u8d44\u6e90\u4e0d\u8db3\uff0c\u5219\u7ee7\u7eed\u5206\u914d\u8282\u70b9\u7a7a\u95f2\u8d44\u6e90\uff0c\u4f46\u8981\u6c42\u8fd9\u90e8\u5206\u8d44\u6e90\u6ee1\u8db3Pod\u9700\u6c42\u3002\u8be5\u7b56\u7565\u53ef\u7528\u4e8e\u89c4\u907fpod\u540c\u65f6\u5206\u914d\u591a\u4e2areservation\u7684\u8d44\u6e90\u3002\n  # - Restricted: \u5bf9\u4e8e\u9884\u7559\u8d44\u6e90\u5305\u542b\u7684\u5404\u4e2a\u8d44\u6e90\u7ef4\u5ea6\uff0cpod\u5fc5\u987b\u5206\u914d\u81ea\u9884\u7559\u8d44\u6e90\uff1b\u5176\u4f59\u8d44\u6e90\u7ef4\u5ea6\u53ef\u4ee5\u5206\u914d\u8282\u70b9\u7a7a\u95f2\u8d44\u6e90\u3002\u5305\u542b\u4e86Aligned\u7b56\u7565\u7684\u8bed\u4e49\u3002\n  # \u540c\u4e00\u8282\u70b9\u5c1a\u4e0d\u652f\u6301Default\u7b56\u7565\u548cAligned\u7b56\u7565\u6216Restricted\u7b56\u7565\u5171\u5b58\u3002\n  allocatePolicy: \"Aligned\"\n  # \u63a7\u5236\u9884\u7559\u8d44\u6e90\u662f\u5426\u53ef\u4ee5\u4f7f\u7528\n  unschedulable: false\n")),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u8d44\u6e90\u9884\u7559\u5728 v1.3.0 \u4e2d\u8fd8\u5305\u542b\u4e86\u5982\u4e0b\u517c\u5bb9\u6027\u548c\u6027\u80fd\u4f18\u5316\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u589e\u5f3a Reservation \u7684\u62a2\u5360\uff0c\u5141\u8bb8 Reservation \u5185\u7684 Pod \u95f4\u62a2\u5360\uff0c\u62d2\u7edd Reservation \u5916\u7684 Pod \u62a2\u5360 Reservation \u5185\u7684 Pod\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u589e\u5f3a\u8bbe\u5907\u9884\u7559\u573a\u666f\uff0c\u5982\u679c\u8282\u70b9\u4e0a\u8bbe\u5907\u8d44\u6e90\u88ab\u90e8\u5206\u9884\u7559\u5e76\u88ab pod \u4f7f\u7528\uff0c\u652f\u6301\u5269\u4f59\u8d44\u6e90\u7684\u5206\u914d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u652f\u6301 Reservation \u4f7f\u7528 Coscheduling\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u65b0\u589e Reservation Affinity\u534f\u8bae\uff0c\u5141\u8bb8\u7528\u6237\u4e00\u5b9a\u4eceReservation\u5185\u5206\u914d\u8d44\u6e90\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4f18\u5316 Reservation \u517c\u5bb9\u6027\uff0c\u4fee\u590d\u56e0 Reservation \u5bfc\u81f4\u539f\u751f\u6253\u5206\u63d2\u4ef6\u5931\u6548\u7684\u95ee\u9898\u3002 "),(0,o.kt)("li",{parentName:"ol"},"\u4f18\u5316\u56e0\u5f15\u5165 Reservation \u5bfc\u81f4\u7684\u8c03\u5ea6\u6027\u80fd\u56de\u5f52\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4fee\u590d Reservation \u9884\u7559\u7aef\u53e3\u8bef\u5220\u9664\u7684\u95ee\u9898\u3002")),(0,o.kt)("p",null,"\u5173\u4e8e\u8d44\u6e90\u9884\u7559\u7684\u8bbe\u8ba1\uff0c\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"/docs/designs/resource-reservation"},"Designs - Resource Reservation"),"\u3002"),(0,o.kt)("h3",{id:"\u5176\u4ed6\u8c03\u5ea6\u589e\u5f3a"},"\u5176\u4ed6\u8c03\u5ea6\u589e\u5f3a"),(0,o.kt)("p",null,"\u5728 v1.3.0 \u4e2d\uff0ckoordinator \u5728\u8c03\u5ea6\u548c\u91cd\u8c03\u5ea6\u65b9\u9762\u8fd8\u5305\u542b\u5982\u4e0b\u589e\u5f3a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"DeviceShare \u8c03\u5ea6"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u66f4\u6539 GPU \u8d44\u6e90\u4f7f\u7528\u65b9\u5f0f\uff0c\u4f7f\u7528 GPU Share API \u65f6\uff0c\u5fc5\u987b\u58f0\u660e",(0,o.kt)("inlineCode",{parentName:"li"},"koordinator.sh/gpu-memory"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"koordinator.sh/gpu-memory-ratio"),"\uff0c\u5141\u8bb8\u4e0d\u58f0\u660e",(0,o.kt)("inlineCode",{parentName:"li"},"koordinator.sh/gpu-core"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u6253\u5206\uff0c\u53ef\u7528\u4e8e\u5b9e\u73b0 GPU Share \u573a\u666f\u548c\u6574\u5361\u5206\u914d\u573a\u666f\u7684 bin-packing \u6216 spread\uff0c\u5e76\u652f\u6301\u5361\u7c92\u5ea6 binpacking \u6216 spread\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u590d\u7528\u6237\u8bef\u5220\u9664 Device CRD \u5bfc\u81f4\u8c03\u5ea6\u5668\u5185\u90e8\u72b6\u6001\u5f02\u5e38\u91cd\u590d\u5206\u914d\u8bbe\u5907\u7684\u95ee\u9898\u3002"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6\uff1a\u4fee\u590d\u5bf9\u4ec5\u586b\u5199 Request \u7684 Pod \u7684\u8c03\u5ea6\u903b\u8f91\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8c03\u5ea6\u5668\u6846\u67b6\uff1a\u4f18\u5316 PreBind \u9636\u6bb5\u7684 Patch \u64cd\u4f5c\uff0c\u5c06\u591a\u4e2a\u63d2\u4ef6\u7684 Patch \u64cd\u4f5c\u5408\u5e76\u4e3a\u4e00\u6b21\u63d0\u4ea4\uff0c\u63d0\u5347\u64cd\u4f5c\u6548\u7387\uff0c\u964d\u4f4e APIServer \u538b\u529b\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u91cd\u8c03\u5ea6"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"LowNodeLoad \u652f\u6301\u6309\u8282\u70b9\u6c60\u8bbe\u7f6e\u4e0d\u540c\u7684\u8d1f\u8f7d\u6c34\u4f4d\u548c\u53c2\u6570\u7b49\u3002\u81ea\u52a8\u517c\u5bb9\u539f\u6709\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8df3\u8fc7 schedulerName \u4e0d\u662f koord-scheduler \u7684Pod\uff0c\u652f\u6301\u914d\u7f6e\u4e0d\u540c\u7684 schedulerName\u3002")))),(0,o.kt)("h3",{id:"nri-\u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f"},"NRI \u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f"),(0,o.kt)("p",null,"Koordinator \u7684 runtime hooks \u652f\u6301\u4e24\u79cd\u6a21\u5f0f\uff0cstandalone \u548c CRI proxy\uff0c\u7136\u800c\u8fd9\u4e24\u79cd\u6a21\u5f0f\u5404\u81ea\u6709\u7740\u4e00\u4e9b\u9650\u5236\u3002\u5f53\u524d\uff0c\u5c3d\u7ba1\u5728 standalone \u6a21\u5f0f\u505a\u4e86\u5f88\u591a\u4f18\u5316\uff0c\u4f46\u5f53\u60f3\u83b7\u5f97\u66f4\u52a0\u53ca\u65f6\u7684 Pod \u6216\u5bb9\u5668\u7684\u4e8b\u4ef6\u6216\u8005\u73af\u5883\u53d8\u91cf\u7684\u6ce8\u5165\u65f6\u8fd8\u662f\u9700\u8981\u4f9d\u8d56 proxy \u6a21\u5f0f\u3002\u7136\u800c\uff0c proxy \u6a21\u5f0f\u8981\u6c42\u5355\u72ec\u90e8\u7f72 koord-runtime-proxy \u7ec4\u4ef6\u6765\u4ee3\u7406 CRI (Container Runtime Interface) \u8bf7\u6c42, \u540c\u65f6\u9700\u8981\u66f4\u6539 Kubelet \u7684\u542f\u52a8\u53c2\u6570\u5e76\u91cd\u542f Kubelet\u3002"),(0,o.kt)("p",null,"NRI\uff08Node Resource Interface\uff09\uff0c\u5373\u8282\u70b9\u8d44\u6e90\u63a5\u53e3\uff0c\u662f CRI \u517c\u5bb9\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u63d2\u4ef6\u6269\u5c55\u7684\u901a\u7528\u6846\u67b6\uff0c\u72ec\u7acb\u4e8e\u5177\u4f53\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff08e.g. containerd, cri-o\uff09, \u63d0\u4f9b\u4e0d\u540c\u751f\u547d\u5468\u671f\u4e8b\u4ef6\u7684\u63a5\u53e3\uff0c\u5141\u8bb8\u7528\u6237\u5728\u4e0d\u4fee\u6539\u5bb9\u5668\u8fd0\u884c\u65f6\u6e90\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u6dfb\u52a0\u81ea\u5b9a\u4e49\u903b\u8f91\u3002\u7279\u522b\u7684\u662f\uff0c2.0 \u7248\u672c NRI \u53ea\u9700\u8981\u8fd0\u884c\u4e00\u4e2a\u63d2\u4ef6\u5b9e\u4f8b\u7528\u4e8e\u5904\u7406\u6240\u6709 NRI \u4e8b\u4ef6\u548c\u8bf7\u6c42\uff0c\u5bb9\u5668\u8fd0\u884c\u65f6\u901a\u8fc7 Unix-Domain Socket \u4e0e\u63d2\u4ef6\u901a\u4fe1\uff0c\u4f7f\u7528\u57fa\u4e8e Protobuf \u7684\u534f\u8bae\u6570\u636e\uff0c\u548c 1.0 \u7248\u672c NRI \u76f8\u6bd4\u62e5\u6709\u66f4\u9ad8\u7684\u6027\u80fd\uff0c\u80fd\u591f\u5b9e\u73b0\u6709\u72b6\u6001\u7684 NRI \u63d2\u4ef6\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7 NRI \u7684\u5f15\u5165\uff0c\u65e2\u80fd\u53ca\u65f6\u7684\u8ba2\u9605 Pod \u6216\u8005\u5bb9\u5668\u7684\u751f\u547d\u5468\u671f\u4e8b\u4ef6\uff0c\u53c8\u907f\u514d\u4e86\u5bf9 Kubelet \u7684\u4fb5\u5165\u4fee\u6539\u3002\u5728 Koordinator v1.3.0 \u4e2d\uff0c\u6211\u4eec\u5f15\u5165 NRI \u8fd9\u79cd\u793e\u533a\u63a8\u8350\u7684\u65b9\u5f0f\u6765\u7ba1\u7406 runtime hooks \u6765\u89e3\u51b3\u4e4b\u524d\u7248\u672c\u9047\u5230\u7684\u95ee\u9898\uff0c\u5927\u5927\u63d0\u5347\u4e86 Koordinator \u90e8\u7f72\u7684\u7075\u6d3b\u6027\u548c\u5904\u7406\u7684\u65f6\u6548\u6027\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f18\u96c5\u7684\u4e91\u539f\u751f\u7cfb\u7edf\u7684\u8d44\u6e90\u7ba1\u7406\u6807\u51c6\u5316\u6a21\u5f0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"nri",src:n(7836).Z,width:"825",height:"628"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1aNRI \u6a21\u5f0f\u4e0d\u652f\u6301 docker \u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u4f7f\u7528 docker \u7684\u7528\u6237\u8bf7\u7ee7\u7eed\u4f7f\u7528 standalone \u6a21\u5f0f\u6216 proxy \u6a21\u5f0f\u3002")),(0,o.kt)("p",null,"\u5173\u4e8e Koordinator \u542f\u7528 NRI \u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u8bf7\u89c1",(0,o.kt)("a",{parentName:"p",href:"/docs/installation#enable-nri-mode-resource-management"},"Installation - Enable NRI Mode Resource Management"),"\u3002"),(0,o.kt)("h3",{id:"\u8282\u70b9\u753b\u50cf\u548c-mid-\u8d44\u6e90\u8d85\u5356"},"\u8282\u70b9\u753b\u50cf\u548c Mid \u8d44\u6e90\u8d85\u5356"),(0,o.kt)("p",null,"Koordinator \u4e2d\u5c06\u8282\u70b9\u8d44\u6e90\u5206\u4e3a4\u79cd\u8d44\u6e90\u4f18\u5148\u7ea7\u6a21\u578b Prod\u3001Mid\u3001Batch \u548c Free\uff0c\u4f4e\u4f18\u5148\u7ea7\u8d44\u6e90\u53ef\u4ee5\u590d\u7528\u9ad8\u4f18\u5148\u7ea7\u5df2\u5206\u914d\u4f46\u672a\u4f7f\u7528\u7684\u7269\u7406\u8d44\u6e90\uff0c\u4ee5\u63d0\u5347\u7269\u7406\u8d44\u6e90\u5229\u7528\u7387\uff1b\u540c\u65f6\uff0c\u8d44\u6e90\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff0c\u63d0\u4f9b\u7684\u8d44\u6e90\u4e5f\u8d8a\u7a33\u5b9a\uff0c\u4f8b\u5982 Batch \u8d44\u6e90\u91c7\u7528\u9ad8\u4f18\u5148\u7ea7\u8d44\u6e90\u77ed\u671f\uff08short-term\uff09\u5df2\u5206\u914d\u4f46\u672a\u4f7f\u7528\u7684\u8d85\u5356\u8d44\u6e90\uff0c\u800c Mid \u8d44\u6e90\u91c7\u7528\u9ad8\u4f18\u5148\u7ea7\u8d44\u6e90\u957f\u5468\u671f\uff08long-term\uff09\u5df2\u5206\u914d\u4f46\u672a\u4f7f\u7528\u7684\u8d85\u5356\u8d44\u6e90\u3002\u4e0d\u540c\u8d44\u6e90\u4f18\u5148\u7ea7\u6a21\u578b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"resource-priority-model",src:n(8105).Z,width:"1058",height:"353"})),(0,o.kt)("p",null,"Koordinator v1.3.0 \u65b0\u589e\u4e86\u8282\u70b9\u753b\u50cf\u80fd\u529b\uff0c\u57fa\u4e8e Prod \u7684\u5386\u53f2\u8d44\u6e90\u7528\u91cf\u8fdb\u884c\u5cf0\u503c\u9884\u6d4b\uff0c\u4ee5\u652f\u6301 Mid-tier \u7684\u8d44\u6e90\u8d85\u5356\u8c03\u5ea6\u3002Mid \u8d44\u6e90\u7684\u8d85\u5356\u8ba1\u7b97\u516c\u5f0f\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MidAllocatable := min(ProdReclaimable, NodeAllocatable * thresholdRatio)\nProdReclaimable := max(0, ProdAllocated - ProdPeak * (1 + safeMargin))\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ProdPeak"),"\uff1a\u901a\u8fc7\u8282\u70b9\u753b\u50cf\uff0c\u9884\u4f30\u7684\u8282\u70b9\u4e0a\u5df2\u8c03\u5ea6 Prod Pod \u5728\u4e2d\u957f\u5468\u671f\u5185\uff08e.g. 12h\uff09\u7684\u7528\u91cf\u5cf0\u503c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ProdReclaimable"),"\uff1a\u57fa\u4e8e\u8282\u70b9\u753b\u50cf\u7ed3\u679c\uff0c\u9884\u4f30\u5728\u4e2d\u957f\u5468\u671f\u5185\u53ef\u590d\u7528\u7684 Prod \u8d44\u6e90\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MidAllocatable"),"\uff1a\u8282\u70b9\u4e0a\u53ef\u5206\u914d\u7684 Mid \u8d44\u6e90\u3002")),(0,o.kt)("p",null,"\u6b64\u5916\uff0cMid \u8d44\u6e90\u7684\u5355\u673a\u9694\u79bb\u4fdd\u969c\u5c06\u5728\u4e0b\u4e2a\u7248\u672c\u5f97\u5230\u5b8c\u5584\uff0c\u76f8\u5173\u52a8\u6001\u656c\u8bf7\u5173\u6ce8",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/issues/1442"},"Issue #1442"),"\u3002\n\u5728 v1.3.0 \u7248\u672c\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u67e5\u770b\u548c\u63d0\u4ea4 Mid-tier \u7684\u8d85\u5356\u8d44\u6e90\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b Prometheus metrics \u6765\u89c2\u6d4b\u8282\u70b9\u753b\u50cf\u7684\u8d8b\u52bf\u53d8\u5316\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u67e5\u770b\u8282\u70b9\u7684CPU\u8d44\u6e90\u753b\u50cf\uff0creclaimable\u6307\u6807\u8868\u793a\u9884\u6d4b\u7684\u53ef\u56de\u6536\u8d44\u6e90\u91cf\uff0cpredictor\u5bf9\u5e94\u4e0d\u540c\u7684\u9884\u6d4b\u6a21\u578b\nkoordlet_node_predicted_resource_reclaimable{node="test-node", predictor="minPredictor", resource="cpu", unit="core"}\n# \u67e5\u770b\u8282\u70b9\u7684\u5185\u5b58\u8d44\u6e90\u753b\u50cf\uff0creclaimable\u6307\u6807\u8868\u793a\u9884\u6d4b\u7684\u53ef\u56de\u6536\u8d44\u6e90\u91cf\uff0cpredictor\u5bf9\u5e94\u4e0d\u540c\u7684\u9884\u6d4b\u6a21\u578b\nkoordlet_node_predicted_resource_reclaimable{node="test-node", predictor="minPredictor", resource="memory", unit="byte"}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get node test-node -o yaml\napiVersion: v1\nkind: Node\nmetadata:\n  name: test-node\nstatus:\n  # ...\n  allocatable:\n    cpu: '32'\n    memory: 129636240Ki\n    pods: '110'\n    kubernetes.io/mid-cpu: '16000' # allocatable cpu milli-cores for Mid-tier pods\n    kubernetes.io/mid-memory: 64818120Ki # allocatable memory bytes for Mid-tier pods\n  capacity:\n    cpu: '32'\n    memory: 129636240Ki\n    pods: '110'\n    kubernetes.io/mid-cpu: '16000'\n    kubernetes.io/mid-memory: 64818120Ki\n")),(0,o.kt)("p",null,"\u5173\u4e8e Koordinator \u8282\u70b9\u753b\u50cf\u7684\u8bbe\u8ba1\uff0c\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"/docs/designs/node-prediction"},"Design - Node Prediction"),"\u3002"),(0,o.kt)("h3",{id:"\u5176\u4ed6\u529f\u80fd"},"\u5176\u4ed6\u529f\u80fd"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/releases/tag/v1.3.0"},"v1.3.0 Release")," \u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230\u66f4\u591a\u5305\u542b\u5728 v1.3.0 \u7248\u672c\u7684\u65b0\u589e\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u672a\u6765\u8ba1\u5212"},"\u672a\u6765\u8ba1\u5212"),(0,o.kt)("p",null,"\u5728\u63a5\u4e0b\u6765\u7684\u7248\u672c\u4e2d\uff0cKoordinator \u76ee\u524d\u89c4\u5212\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u786c\u4ef6\u62d3\u6251\u611f\u77e5\u8c03\u5ea6\uff0c\u7efc\u5408\u8003\u8651\u8282\u70b9 CPU\u3001\u5185\u5b58\u3001GPU \u7b49\u591a\u4e2a\u8d44\u6e90\u7ef4\u5ea6\u7684\u62d3\u6251\u5173\u7cfb\uff0c\u5728\u96c6\u7fa4\u8303\u56f4\u5185\u8fdb\u884c\u8c03\u5ea6\u4f18\u5316\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u8282\u70b9\u53ef\u5206\u914d\u8d44\u6e90\u7684\u653e\u5927\u673a\u5236\u3002"),(0,o.kt)("li",{parentName:"ul"},"NRI \u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f\u7684\u5b8c\u5584\u548c\u589e\u5f3a\u3002")),(0,o.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\uff0c\u656c\u8bf7\u5173\u6ce8 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/milestone/12"},"Milestone v1.4.0"),"\u3002"),(0,o.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,o.kt)("p",null,"\u6700\u540e\uff0cKoordinator \u662f\u4e00\u4e2a\u5f00\u653e\u7684\u793e\u533a\uff0c\u6b22\u8fce\u5e7f\u5927\u4e91\u539f\u751f\u7231\u597d\u8005\u4eec\u968f\u65f6\u901a\u8fc7\u5404\u79cd\u65b9\u5f0f\u53c2\u4e0e\u5171\u5efa\uff0c\u65e0\u8bba\u60a8\u5728\u4e91\u539f\u751f\u9886\u57df\u662f\u521d\u5b66\u4e4d\u5230\u8fd8\u662f\u9a7e\u8f7b\u5c31\u719f\uff0c\u6211\u4eec\u90fd\u975e\u5e38\u671f\u5f85\u542c\u5230\u60a8\u7684\u58f0\u97f3\uff01"))}c.isMDXComponent=!0},7836:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nri-proposal-472f1a1bde8c4bce268e6fce9c94b8b0.png"},8105:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resource-model-0f6ca53f0a140a2be9705e75758caf22.png"}}]);