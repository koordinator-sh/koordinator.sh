"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[8071],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return h}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(o),h=n,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||a;return o?r.createElement(m,i(i({ref:t},s),{},{components:o})):r.createElement(m,i({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7246:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],l={slug:"release-v1.0.0",title:"Koordinator v1.0: \u6b63\u5f0f\u53d1\u5e03",authors:["joseph"],tags:["release"]},u=void 0,d={permalink:"/blog/release-v1.0.0",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/blog/2022-11-03-release/index.md",source:"@site/blog/2022-11-03-release/index.md",title:"Koordinator v1.0: \u6b63\u5f0f\u53d1\u5e03",description:"Koordinator \u4eca\u5e743\u6708\u4efd\u5f00\u6e90\u4ee5\u6765\uff0c\u5148\u540e\u53d1\u5e03\u4e867\u4e2a\u7248\u672c\uff0c\u9010\u6b65\u7684\u628a\u963f\u91cc\u5df4\u5df4&\u963f\u91cc\u4e91\u5185\u90e8\u7684\u6df7\u90e8\u7cfb\u7edf\u7684\u6838\u5fc3\u80fd\u529b\u8f93\u51fa\u5230\u5f00\u6e90\u793e\u533a\uff0c\u5e76\u5728\u4e2d\u95f4\u8fc7\u7a0b\u4e2d\u9010\u6e10\u7684\u88ab Kubernetes\u3001\u5927\u6570\u636e\u3001\u9ad8\u6027\u80fd\u8ba1\u7b97\u3001\u673a\u5668\u5b66\u4e60\u9886\u57df\u6216\u8005\u793e\u533a\u7684\u5173\u6ce8\uff0cKoordinator \u793e\u533a\u4e5f\u9010\u6b65\u83b7\u5f97\u4e86\u4e00\u4e9b\u8d21\u732e\u8005\u7684\u652f\u6301\uff0c\u5e76\u6709\u4e00\u4e9b\u4f01\u4e1a\u5f00\u59cb\u9010\u6b65\u7684\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Koordinator \u89e3\u51b3\u5b9e\u9645\u751f\u4ea7\u4e2d\u9047\u5230\u7684\u6210\u672c\u95ee\u9898\u3001\u6df7\u90e8\u95ee\u9898\u7b49\u3002 \u7ecf\u8fc7 Koordinator \u793e\u533a\u7684\u52aa\u529b\uff0c\u6211\u4eec\u6000\u7740\u5341\u5206\u6fc0\u52a8\u7684\u5fc3\u60c5\u5411\u5927\u5bb6\u5ba3\u5e03 Koordinator 1.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\u3002",date:"2022-11-03T00:00:00.000Z",formattedDate:"November 3, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:6.575,truncated:!1,authors:[{name:"Joseph",title:"Koordinator maintainer",url:"https://github.com/eahydra",imageURL:"https://github.com/eahydra.png",key:"joseph"}],frontMatter:{slug:"release-v1.0.0",title:"Koordinator v1.0: \u6b63\u5f0f\u53d1\u5e03",authors:["joseph"],tags:["release"]},prevItem:{title:"Koordinator v1.1: \u8ba9\u8c03\u5ea6\u611f\u77e5\u8d1f\u8f7d\u4e0e\u5e72\u6270\u68c0\u6d4b\u91c7\u96c6",permalink:"/blog/release-v1.1.0"},nextItem:{title:"Koordinator v0.7: \u4e3a\u4efb\u52a1\u8c03\u5ea6\u9886\u57df\u6ce8\u5165\u65b0\u6d3b\u529b",permalink:"/blog/release-v0.7.0"}},s={authorsImageUrls:[void 0]},c=[{value:"\u4f7f\u7528 Helm \u5b89\u88c5",id:"\u4f7f\u7528-helm-\u5b89\u88c5",level:2},{value:"\u72ec\u7acb API Repo",id:"\u72ec\u7acb-api-repo",level:2},{value:"\u65b0\u589e ElasticQuota Webhook",id:"\u65b0\u589e-elasticquota-webhook",level:2},{value:"\u8fdb\u4e00\u6b65\u5b8c\u5584 ElasticQuota Scheduling",id:"\u8fdb\u4e00\u6b65\u5b8c\u5584-elasticquota-scheduling",level:2},{value:"\u8fdb\u4e00\u6b65\u5b8c\u5584 Device Share Scheduling",id:"\u8fdb\u4e00\u6b65\u5b8c\u5584-device-share-scheduling",level:2},{value:"Koordinator Runtime Proxy \u589e\u5f3a\u517c\u5bb9\u6027",id:"koordinator-runtime-proxy-\u589e\u5f3a\u517c\u5bb9\u6027",level:2},{value:"\u5176\u4ed6\u6539\u52a8",id:"\u5176\u4ed6\u6539\u52a8",level:2}],p={toc:c};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Koordinator \u4eca\u5e743\u6708\u4efd\u5f00\u6e90\u4ee5\u6765\uff0c\u5148\u540e\u53d1\u5e03\u4e867\u4e2a\u7248\u672c\uff0c\u9010\u6b65\u7684\u628a\u963f\u91cc\u5df4\u5df4&\u963f\u91cc\u4e91\u5185\u90e8\u7684\u6df7\u90e8\u7cfb\u7edf\u7684\u6838\u5fc3\u80fd\u529b\u8f93\u51fa\u5230\u5f00\u6e90\u793e\u533a\uff0c\u5e76\u5728\u4e2d\u95f4\u8fc7\u7a0b\u4e2d\u9010\u6e10\u7684\u88ab Kubernetes\u3001\u5927\u6570\u636e\u3001\u9ad8\u6027\u80fd\u8ba1\u7b97\u3001\u673a\u5668\u5b66\u4e60\u9886\u57df\u6216\u8005\u793e\u533a\u7684\u5173\u6ce8\uff0cKoordinator \u793e\u533a\u4e5f\u9010\u6b65\u83b7\u5f97\u4e86\u4e00\u4e9b\u8d21\u732e\u8005\u7684\u652f\u6301\uff0c\u5e76\u6709\u4e00\u4e9b\u4f01\u4e1a\u5f00\u59cb\u9010\u6b65\u7684\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Koordinator \u89e3\u51b3\u5b9e\u9645\u751f\u4ea7\u4e2d\u9047\u5230\u7684\u6210\u672c\u95ee\u9898\u3001\u6df7\u90e8\u95ee\u9898\u7b49\u3002 \u7ecf\u8fc7 Koordinator \u793e\u533a\u7684\u52aa\u529b\uff0c\u6211\u4eec\u6000\u7740\u5341\u5206\u6fc0\u52a8\u7684\u5fc3\u60c5\u5411\u5927\u5bb6\u5ba3\u5e03 Koordinator 1.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\u3002"),(0,a.kt)("p",null,"Koordinator \u9879\u76ee\u65e9\u671f\u7740\u91cd\u5efa\u8bbe\u6838\u5fc3\u6df7\u90e8\u80fd\u529b -- \u5dee\u5f02\u5316 SLO\uff0c\u5e76\u4e14\u4e3a\u4e86\u8ba9\u7528\u6237\u66f4\u5bb9\u6613\u7684\u4f7f\u7528 Koordinator \u7684\u6df7\u90e8\u80fd\u529b\uff0cKoordinator \u63d0\u4f9b\u4e86 ClusterColocationProfile \u673a\u5236\u5e2e\u52a9\u7528\u6237\u53ef\u4ee5\u4e0d\u7528\u4fee\u6539\u5b58\u91cf\u4ee3\u7801\u5b8c\u6210\u4e0d\u540c\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6df7\u90e8\uff0c\u8ba9\u7528\u6237\u9010\u6b65\u7684\u719f\u6089\u6df7\u90e8\u6280\u672f\u3002\u968f\u540e Koordinaor \u9010\u6b65\u5728\u8282\u70b9\u4fa7 QoS \u4fdd\u969c\u673a\u5236\u4e0a\u505a\u4e86\u589e\u5f3a\uff0c\u63d0\u4f9b\u4e86\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e CPU Suppress\u3001CPU Burst\u3001 Memory QoS\u3001L3 Cache/MBA \u8d44\u6e90\u9694\u79bb\u673a\u5236\u548c\u57fa\u4e8e\u6ee1\u8db3\u5ea6\u9a71\u9010\u673a\u5236\u7b49\u591a\u79cd\u80fd\u529b\uff0c\u89e3\u51b3\u4e86\u5927\u90e8\u5206\u8282\u70b9\u4fa7\u5de5\u4f5c\u8d1f\u8f7d\u7684\u7a33\u5b9a\u6027\u95ee\u9898\u3002\u914d\u5408\u4f7f\u7528 Koordinator Runtime Proxy \u7ec4\u4ef6\uff0c\u53ef\u4ee5\u66f4\u597d\u7684\u517c\u5bb9 Kubernetes kubelet \u539f\u751f\u7ba1\u7406\u673a\u5236\u3002"),(0,a.kt)("p",null,"\u5e76\u4e14 Koordinator \u5728\u4efb\u52a1\u8c03\u5ea6\u548c QoS \u611f\u77e5\u8c03\u5ea6\u4ee5\u53ca\u91cd\u8c03\u5ea6\u7b49\u65b9\u9762\u4e5f\u90fd\u63d0\u4f9b\u4e86\u4e00\u4e9b\u521b\u65b0\u65b9\u6848\uff0c\u5efa\u8bbe\u4e86\u5168\u9762\u517c\u5bb9 Kubernetes CPU \u7ba1\u7406\u673a\u5236\u7684\u7cbe\u7ec6\u5316 CPU \u8c03\u5ea6\u80fd\u529b\uff0c\u9762\u5411\u8282\u70b9\u5b9e\u9645\u8d1f\u8f7d\u7684\u5747\u8861\u8c03\u5ea6\u80fd\u529b\u3002\u4e3a\u4e86\u66f4\u597d\u7684\u8ba9\u7528\u6237\u7ba1\u7406\u597d\u8d44\u6e90\uff0c Koordinator \u8fd8\u63d0\u4f9b\u4e86\u8d44\u6e90\u9884\u7559\u80fd\u529b\uff08Reservation)\uff0c\u5e76\u4e14 Koordinator \u57fa\u4e8e Kubernetes \u793e\u533a\u5df2\u6709\u7684Coscheduling\u3001ElasticQuota Scheduling \u80fd\u529b\u505a\u4e86\u8fdb\u4e00\u6b65\u7684\u589e\u5f3a\uff0c\u4e3a\u4efb\u52a1\u8c03\u5ea6\u9886\u57df\u6ce8\u5165\u4e86\u65b0\u7684\u6d3b\u529b\u3002Koordinator \u63d0\u4f9b\u4e86\u5168\u65b0\u7684\u91cd\u8c03\u5ea6\u5668\u6846\u67b6\uff0c\u7740\u91cd\u5efa\u8bbe Descheduler \u7684\u6269\u5c55\u6027\u548c\u5b89\u5168\u6027\u95ee\u9898\u3002"),(0,a.kt)("h1",{id:"\u5b89\u88c5\u6216\u5347\u7ea7-koordinator-v100"},"\u5b89\u88c5\u6216\u5347\u7ea7 Koordinator v1.0.0"),(0,a.kt)("h2",{id:"\u4f7f\u7528-helm-\u5b89\u88c5"},"\u4f7f\u7528 Helm \u5b89\u88c5"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 helm v3.5+ \u975e\u5e38\u65b9\u4fbf\u7684\u5b89\u88c5 Koordinator\uff0cHelm \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"\u8fd9\u91cc")," \u83b7\u53d6\u5b83\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install koordinator koordinator-sh/koordinator --version 1.0.0\n")),(0,a.kt)("h1",{id:"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb"},"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb"),(0,a.kt)("p",null,"Koordinator v1.0 \u6574\u4f53\u65b0\u589e\u7684\u7279\u6027\u5e76\u4e0d\u591a\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u4e00\u4e9b\u53d8\u5316"),(0,a.kt)("h2",{id:"\u72ec\u7acb-api-repo"},"\u72ec\u7acb API Repo"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u65b9\u4fbf\u96c6\u6210\u548c\u4f7f\u7528 Koordiantor \u5b9a\u4e49\u7684 API\uff0c\u5e76\u907f\u514d\u56e0\u4f9d\u8d56 Koordiantor \u5f15\u5165\u989d\u5916\u7684\u4f9d\u8d56\u6216\u8005\u4f9d\u8d56\u51b2\u7a81\u95ee\u9898\uff0c\u6211\u4eec\u5efa\u7acb\u4e86\u72ec\u7acb\u7684 API Repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/apis"},"koordinator-sh/apis")),(0,a.kt)("h2",{id:"\u65b0\u589e-elasticquota-webhook"},"\u65b0\u589e ElasticQuota Webhook"),(0,a.kt)("p",null,"\u5728 Koordinator v0.7 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u57fa\u4e8e Kubernetes sig-scheduler \u63d0\u4f9b\u7684 ElasticQuota \u505a\u4e86\u8bf8\u591a\u589e\u5f3a\uff0c\u63d0\u4f9b\u4e86\u6811\u5f62\u7ba1\u7406\u673a\u5236\uff0c\u5e76\u63d0\u4f9b\u4e86\u516c\u5e73\u6027\u4fdd\u969c\u673a\u5236\u7b49\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u5e2e\u52a9\u60a8\u89e3\u51b3\u4f7f\u7528 ElasticQuota \u9047\u5230\u7684\u95ee\u9898\u3002\u5728 Koordinator v1.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u8fdb\u4e00\u6b65\u63d0\u4f9b\u4e86 ElasticQuota Webhook\uff0c\u5e2e\u52a9\u60a8\u5728\u4f7f\u7528 ElasticQuota \u6811\u5f62\u7ba1\u7406\u673a\u5236\u65f6\uff0c\u4fdd\u969c\u65b0\u7684 ElasticQuota \u5bf9\u8c61\u9075\u5faa Koordinator \u5b9a\u4e49\u7684\u89c4\u8303\u6216\u7ea6\u675f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9664\u4e86\u6839\u8282\u70b9\uff0c\u5176\u4ed6\u6240\u6709\u5b50\u8282\u70b9\u7684 min \u4e4b\u548c\u8981\u5c0f\u4e8e\u7236\u8282\u70b9\u7684 min\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u9650\u5236\u5b50\u8282\u70b9 max\uff0c\u5141\u8bb8\u5b50\u8282\u70b9\u7684 max \u5927\u4e8e\u7236\u8282\u70b9\u7684 max\u3002\u8003\u8651\u4ee5\u4e0b\u573a\u666f\uff0c\u96c6\u7fa4\u4e2d\u6709 2 \u4e2a ElasticQuota \u5b50\u6811\uff1adev-parent \u548c production-parent\uff0c\u6bcf\u4e2a\u5b50\u6811\u90fd\u6709\u51e0\u4e2a\u5b50 ElasticQuota\u3002 \u5f53 production-parent \u5fd9\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u53ea\u964d\u4f4e dev-parent \u7684 max \u9650\u5236  dev-parent \u6574\u9897\u5b50\u6811\u7684\u8d44\u6e90\u4f7f\u7528\u91cf\uff0c\u800c\u4e0d\u662f\u964d\u4f4e dev-parent \u5b50\u6811\u7684\u6bcf\u4e2a\u5b50 ElasticQuota \u7684max\u9650\u5236\u7528\u91cf\u3002"),(0,a.kt)("li",{parentName:"ol"},"Pod \u4e0d\u80fd\u4f7f\u7528\u7236\u8282\u70b9ElasticQuota\u3002\u5982\u679c\u653e\u5f00\u8fd9\u4e2a\u9650\u5236\uff0c\u4f1a\u5bfc\u81f4\u6574\u4e2a\u5f39\u6027 Quota \u7684\u673a\u5236\u53d8\u7684\u5f02\u5e38\u590d\u6742\uff0c\u6682\u65f6\u4e0d\u8003\u8651\u652f\u6301\u8fd9\u79cd\u573a\u666f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ea\u6709\u7236\u8282\u70b9\u53ef\u4ee5\u6302\u5b50\u8282\u70b9\uff0c\u4e0d\u5141\u8bb8\u5b50\u8282\u70b9\u6302\u5b50\u8282\u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u6682\u65f6\u4e0d\u5141\u8bb8\u6539\u53d8 ElasticQuota \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"quota.scheduling.koordinator.sh/is-parent"),"\u5c5e\u6027")),(0,a.kt)("h2",{id:"\u8fdb\u4e00\u6b65\u5b8c\u5584-elasticquota-scheduling"},"\u8fdb\u4e00\u6b65\u5b8c\u5584 ElasticQuota Scheduling"),(0,a.kt)("p",null,"\u5728 Koordinator v0.7 \u7248\u672c\u4e2d\uff0ckoord-scheduler \u7684\u4e3b\u526f Pod \u90fd\u4f1a\u542f\u52a8 ElasticQuota Controller \u5e76\u90fd\u4f1a\u66f4\u65b0 ElasticQuota \u5bf9\u8c61\u3002\u5728 Koordinator v1.0 \u4e2d\u6211\u4eec\u4fee\u590d\u4e86\u8be5\u95ee\u9898\uff0c\u786e\u4fdd\u53ea\u6709\u4e3b Pod \u53ef\u4ee5\u542f\u52a8 Controller \u5e76\u66f4\u65b0 ElasticQuota \u5bf9\u8c61\u3002 \u8fd8\u4f18\u5316\u4e86 ElasticQuota Controller \u6f5c\u5728\u7684\u9891\u7e41\u66f4\u65b0 ElasticQuota \u5bf9\u8c61\u7684\u95ee\u9898\uff0c\u5f53\u68c0\u67e5\u5230 ElasticQuota \u5404\u7ef4\u5ea6\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\u624d\u4f1a\u66f4\u65b0\uff0c\u964d\u4f4e\u9891\u7e41\u66f4\u65b0\u7ed9 APIServer \u5e26\u6765\u7684\u538b\u529b\u3002"),(0,a.kt)("h2",{id:"\u8fdb\u4e00\u6b65\u5b8c\u5584-device-share-scheduling"},"\u8fdb\u4e00\u6b65\u5b8c\u5584 Device Share Scheduling"),(0,a.kt)("p",null,"Koordinator v1.0 \u4e2d koordlet \u4f1a\u4e0a\u62a5 GPU \u7684\u578b\u53f7\u548c\u9a71\u52a8\u7248\u672c\u5230 Device CRD \u5bf9\u8c61\u4e2d\uff0c\u5e76\u4f1a\u7531 koord-manager \u540c\u6b65\u66f4\u65b0\u5230 Node \u5bf9\u8c61\uff0c\u8ffd\u52a0\u76f8\u5e94\u7684\u6807\u7b7e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Node\nmetadata:\n  labels:\n    kubernetes.io/gpu-driver: 460.91.03\n    kubernetes.io/gpu-model: Tesla-T4\n    ...\n  name: cn-hangzhou.10.0.4.164\nspec:\n  ...\nstatus:\n  ...\n")),(0,a.kt)("h2",{id:"koordinator-runtime-proxy-\u589e\u5f3a\u517c\u5bb9\u6027"},"Koordinator Runtime Proxy \u589e\u5f3a\u517c\u5bb9\u6027"),(0,a.kt)("p",null,"\u5728 Koordinator \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0ckoord-runtime-proxy \u548c koordlet \u4e00\u8d77\u5b89\u88c5\u540e\uff0c\u5982\u679c koordlet \u5f02\u5e38\u6216\u8005 koordlet \u5378\u8f7d/\u91cd\u88c5\u7b49\u573a\u666f\u4e0b\uff0c\u4f1a\u9047\u5230\u65b0\u8c03\u5ea6\u5230\u8282\u70b9\u7684 Pod \u65e0\u6cd5\u521b\u5efa\u5bb9\u5668\u7684\u95ee\u9898\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0ckoord-runtime-proxy \u4f1a\u611f\u77e5 Pod \u662f\u5426\u5177\u6709\u7279\u6b8a\u7684 label ",(0,a.kt)("inlineCode",{parentName:"p"},"runtimeproxy.koordinator.sh/skip-hookserver=true"),"\uff0c\u5982\u679c Pod \u5b58\u5728\u8be5\u6807\u7b7e\uff0ckoord-runtime-proxy \u4f1a\u76f4\u63a5\u628a CRI \u8bf7\u6c42\u8f6c\u53d1\u7ed9 containerd/docker \u7b49 runtime\u3002"),(0,a.kt)("h2",{id:"\u5176\u4ed6\u6539\u52a8"},"\u5176\u4ed6\u6539\u52a8"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/releases/tag/v1.0.0"},"Github release")," \u9875\u9762\uff0c\u6765\u67e5\u770b\u66f4\u591a\u7684\u6539\u52a8\u4ee5\u53ca\u5b83\u4eec\u7684\u4f5c\u8005\u4e0e\u63d0\u4ea4\u8bb0\u5f55\u3002"))}h.isMDXComponent=!0}}]);