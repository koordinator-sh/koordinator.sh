"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[1886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={},r="Coordinated sharing of CPU resources in Colocation Scenarios - Fine-grained CPU Orchestration",s={unversionedId:"best-practices/fine-grained-cpu-orchestration",id:"version-v1.4/best-practices/fine-grained-cpu-orchestration",title:"Coordinated sharing of CPU resources in Colocation Scenarios - Fine-grained CPU Orchestration",description:"Introduction",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.4/best-practices/fine-grained-cpu-orchestration.md",sourceDirName:"best-practices",slug:"/best-practices/fine-grained-cpu-orchestration",permalink:"/zh-Hans/docs/v1.4/best-practices/fine-grained-cpu-orchestration",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/best-practices/fine-grained-cpu-orchestration.md",tags:[],version:"v1.4",lastUpdatedBy:"wangjianyu",lastUpdatedAt:1705567859,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Anolis Plugsched",permalink:"/zh-Hans/docs/v1.4/best-practices/anolis_plugsched"},next:{title:"\u4f7f\u7528 Koordinator \u5c06 Hadoop YARN\u4e0eK8s\u6df7\u90e8",permalink:"/zh-Hans/docs/v1.4/best-practices/colocation-of-hadoop-yarn"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Problem Description",id:"problem-description",level:2},{value:"Solutions",id:"solutions",level:2},{value:"Application-Oriented CPU Orchestration QoS Semantics",id:"application-oriented-cpu-orchestration-qos-semantics",level:3},{value:"Rich CPU scheduling strategies",id:"rich-cpu-scheduling-strategies",level:3},{value:"Enhanced CPU Scheduling Capabilities",id:"enhanced-cpu-scheduling-capabilities",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Environemnt",id:"environemnt",level:3},{value:"Online application deployment",id:"online-application-deployment",level:3},{value:"Load Test",id:"load-test",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coordinated-sharing-of-cpu-resources-in-colocation-scenarios---fine-grained-cpu-orchestration"},"Coordinated sharing of CPU resources in Colocation Scenarios - Fine-grained CPU Orchestration"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In a cloud-native environment, users often deploy different types of workloads in the same cluster, leveraging different peak effects of different services to achieve time-sharing multiplexing of resources and avoid resource waste. However, colocation of different types of workloads often leads to resource competition and mutual interference. The most typical scenario is the colocation  of online and offline workloads. When more computing resources are occupied by offline workloads, the response time of online loads will be affected; when more computing resources are occupied by online workloads for a long time, the task completion time of offline workloads cannot be guaranteed. This phenomenon belongs to the Noisy Neighbor problem. "),(0,o.kt)("p",null,"Depending on the degree of colocation and resource types, there are many different ways to solve this problem. Quota management can limit the resource usage of loads from the entire cluster dimension, and Koordinator provides multi-level elastic quota management functions in this regard. From the single-node level, CPU, memory, disk IO, and network resources may be shared by different loads. Koordinator has provided some resource isolation and guarantee capabilities on CPU and memory, and related capabilities on disk IO and network resources are under construction. "),(0,o.kt)("p",null,"This article mainly introduces how Koordinator helps loads (online and online, online and offline) share CPU resources collaboratively when different types of workloads are colocated on the same node."),(0,o.kt)("h2",{id:"problem-description"},"Problem Description"),(0,o.kt)("p",null,"The essence of CPU resource Noisy Neighbor is that different workloads share CPU resources without coordination."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The default resource model of Kubernetes uses cgroup (cfs quota) to limit the access of different loads to CPU resources in terms of CPU time usage. In this case, some workloads may be switched to CPU cores by the operating system scheduler. Since different CPU cores have different memory access time to different physical locations, switching cpu cores will result in longer memory access time, thus affecting load performance, thereby affecting load performance."),(0,o.kt)("li",{parentName:"ol"},"In NUMA architecture, SMT threads (logical cores) share execution units and L2 cache of physical cores.\nWhen there are multiple workloads on the same physical core, resource contention will happen between different workloads, resulting in load performance degradation.")),(0,o.kt)("p",null,"Kubernetes provides topology manager and CPU manager on node level to solve the above problems. However, this feature will only attempt to take effect after the Pod has been scheduled on the machine. This may lead to the situation where Pods are scheduled to nodes with sufficient CPU resources but topology requirements are not met."),(0,o.kt)("h2",{id:"solutions"},"Solutions"),(0,o.kt)("h3",{id:"application-oriented-cpu-orchestration-qos-semantics"},"Application-Oriented CPU Orchestration QoS Semantics"),(0,o.kt)("p",null,"In response to the above problems and deficiencies, Koordinator designed an application-oriented QoS semantics and CPU orchestration protocol, as shown in the figure below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(9845).Z,width:"1399",height:"445"})),(0,o.kt)("p",null,"LS (Latency Sensitive) is applied to typical microservice loads, and Koordinator isolates it from other latency-sensitive loads to ensure its performance. LSR (Latency Sensitive Reserved) is similar to Kubernetes' Guaranteed. On the basis of LS, it adds the semantics that applications require reserved binding cores. LSE (Latency Sensitive Exclusive) is common in applications that are particularly sensitive to CPU, such as middleware. In addition to satisfying its semantics similar to LSR's requirement to bind cores, Koordinator also ensures that the allocated CPU is not shared with any other load."),(0,o.kt)("p",null,"Also, to improve resource utilization, BE workloads can share CPU with LSR and LS. To ensure that latency-sensitive applications shared with BE are not disturbed by it, Koordinator provides strategies such as interference detection and BE suppression. The focus of this article is not here, readers can pay attention to follow-up articles."),(0,o.kt)("h3",{id:"rich-cpu-scheduling-strategies"},"Rich CPU scheduling strategies"),(0,o.kt)("p",null,"For LSE applications, when the machine is a hyper-threaded architecture, only logical cores can be guaranteed to be exclusive to the load. In this way, when there are other loads on the same physical core, application performance will still be disturbed.\nTo this end, Koordinator supports users to configure rich CPU scheduling policies on pod annotation to improve performance."),(0,o.kt)("p",null,"CPU orchestration policies are divided into CPU-binding policies and CPU-exclusive policies. The CPU binding strategy determines the distribution of logical cores assigned to the application among physical cores, which can be spread or stacked among physical cores. Stacking (FullPCPU) refers to allocating complete physical cores to applications, which can effectively alleviate the Noisy Neighbor problem. SpreadByPCPU is mainly used in some delay-sensitive applications with different peak and valley characteristics, allowing the application to fully use the CPU at a specific time. The CPU exclusive policy determines the exclusive level of logical cores assigned to the application, and it can try to avoid physical cores or NUMANodes that have been applied for with the exclusive policy."),(0,o.kt)("h3",{id:"enhanced-cpu-scheduling-capabilities"},"Enhanced CPU Scheduling Capabilities"),(0,o.kt)("p",null,"Koordinator supports the configuration of NUMA allocation strategies to determine how to select satisfactory NUMA nodes during scheduling. MostAllocated indicates allocation from the NUMA node with the least available resources, which can reduce fragmentation as much as possible and leave more allocation space for subsequent loads. However, this approach may cause the performance of parallel code that relies on Barriers to suffer. DistributeEvenly means that evenly distributing CPUs on NUMA nodes can improve the performance of the above parallel code. LeastAllocated indicates allocation from the NUMA node with the most available resources."),(0,o.kt)("p",null,"In addition, Koordinator's CPU allocation logic is completed in the central scheduler. In this way, there will be a global perspective, avoiding the dilemma of single-node solution, where CPU resources may be sufficient but topology requirements are not met."),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"As can be seen from the above, Koordinator's fine-grained CPU orchestration capability can significantly improve the performance of CPU-sensitive workloads in multi-application colocation scenarios. In order to allow readers to use Koordinator\u2019s fine-grained CPU scheduling capabilities more clearly and intuitively, this article deploys online applications to clusters in different ways, and observes the latency of services in stress testing to judge the effect of CPU scheduling capabilities."),(0,o.kt)("p",null,"In this article, multiple online applications will be deployed on the same machine and pressure tested for 10 minutes to fully simulate the CPU core switching scenarios that may occur in production practice. For the colocation of online and offline applications, Koordinator provides strategies such as interference detection and BE suppression. The focus of this article is not here, and readers can pay attention to the practice in subsequent articles."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Group Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deployment Mode"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Scenarios"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},"10 online applications are deployed on the nodes, and each node applies for 4 CPUs, all using kubernetes guaranteed QoS"),(0,o.kt)("td",{parentName:"tr",align:null},"Koordinator does not provide fine-grained CPU orchestration capabilities for applications"),(0,o.kt)("td",{parentName:"tr",align:null},"Due to CPU core switching, applications share logical cores, application performance will be affected, and it is not recommended to use")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"B"),(0,o.kt)("td",{parentName:"tr",align:null},"Deploy 10 online applications on the nodes, each application node has 4 CPUs, all adopt LSE QoS, CPU binding strategy adopts physical core binpacking(FullPCPUs)"),(0,o.kt)("td",{parentName:"tr",align:null},"Koordinator provides CPU core binding capability for LSE Pod and online applications will not share physical cores"),(0,o.kt)("td",{parentName:"tr",align:null},"Particularly sensitive online scenarios, application cannot accept CPU sharing at the physical core level")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"C"),(0,o.kt)("td",{parentName:"tr",align:null},"Deploy 10 online applications on the node, each application node has 4 CPUs, all adopt LSR QoS, CPU binding strategy adopts physical core split (SpreadByPCPUs), use CPU exclusively by physical cpu level"),(0,o.kt)("td",{parentName:"tr",align:null},"Koordinator provides CPU binding core capability for LSR Pod and online application logical core can use more physical core capacity"),(0,o.kt)("td",{parentName:"tr",align:null},"It is often used to share physical cores with offline Pods and implement time-sharing multiplexing at the physical core level. This article does not focus on the mixed deployment of online and offline applications, so it only tests the overuse of online applications")))),(0,o.kt)("p",null,"This experiment uses the following performance indicators to evaluate the performance of Nginx applications under different deployment methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RT (Response Time) quantile value: RT is a performance indicator that online applications usually focus on. The lower the RT, the better the online service performance. The RT indicator is obtained by collecting the information printed after the wrk pressure tests. In the experiment, it reflects the time it takes for the Nginx application to respond to the wrk request. For example, RT-p50 indicates the maximum time (median) it takes for Nginx to respond to the first 50% of wrk requests, and RT-p90 indicates the maximum time it takes for Nginx to respond to the first 90% of wrk requests."),(0,o.kt)("li",{parentName:"ul"},"RPS (Request Per Second): RPS is the number of requests served by an online application per second. The more RPS a service bears, the better the performance of the online service.")),(0,o.kt)("p",null,"The experimental results are as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Performance Indicators/Deployment Mode"),(0,o.kt)("th",{parentName:"tr",align:null},"A\uff08colocation of two online applications, Guaranteed\uff09"),(0,o.kt)("th",{parentName:"tr",align:null},"B\uff08colocation of two online applications, LSE\u3001FullPCPU\uff09"),(0,o.kt)("th",{parentName:"tr",align:null},"C\uff08colocation of two online applications, LSR\u3001SpreadByPCPU\u3001PCPULevel"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RPS"),(0,o.kt)("td",{parentName:"tr",align:null},"114778.29"),(0,o.kt)("td",{parentName:"tr",align:null},"114648.19"),(0,o.kt)("td",{parentName:"tr",align:null},"115268.50")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RT-avg (ms)"),(0,o.kt)("td",{parentName:"tr",align:null},"3.46 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"3.33 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"3.25 ms")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RT-p90 (ms)"),(0,o.kt)("td",{parentName:"tr",align:null},"5.27 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"5.11 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"5.06 ms")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RT-p99 (ms)"),(0,o.kt)("td",{parentName:"tr",align:null},"15.22 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"12.61 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"12.14 ms")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comparing B and A, it can be found that after adopting LSE QoS to bind the core, the service response time P99 is significantly reduced, and the long tail phenomenon is well alleviated"),(0,o.kt)("li",{parentName:"ul"},"Comparing C and B, it can be found that after using LSR QoS to bind cores and allowing logical cores to occupy more physical core resources, more requests can be tolerated with better service response time")),(0,o.kt)("p",null,"In summary, in the scenario where online services are deployed on the same machine, using Koordinator to refine the CPU arrangement can effectively suppress the Noisy Neighbor problem and reduce the performance degradation caused by CPU core switching."),(0,o.kt)("h3",{id:"environemnt"},"Environemnt"),(0,o.kt)("p",null,"First, prepare a Kubernetes cluster and install Koordinator. This article chooses two nodes of a Kubernetes cluster to do the experiment, one of the nodes is used as a test machine, which will run the Nginx online server; the other node is used as a pressure test machine, which will run the client's wrk, request the Nginx online server, and make pressure test requests ."),(0,o.kt)("h3",{id:"online-application-deployment"},"Online application deployment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inject fine-grained CPU orchestration protocols into applications using ColocationProfile"),(0,o.kt)("p",{parentName:"li"},"Group B fine-grained CPU orchestration protocol"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.koordinator.sh/v1alpha1\nkind: ClusterColocationProfile\nmetadata:\n  name: colocation-profile-example\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  # \u91c7\u7528 LSE QoS\n  qosClass: LSE\n  annotations:\n  # \u91c7\u7528\u7269\u7406\u6838\u95f4\u5806\u53e0\n    scheduling.koordinator.sh/resource-spec: \'{"preferredCPUBindPolicy":"FullPCPUs"}\'\n  priorityClassName: koord-prod\n')),(0,o.kt)("p",{parentName:"li"},"Group C fine-grained CPU orchestration protocol"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.koordinator.sh/v1alpha1\nkind: ClusterColocationProfile\nmetadata:\n  name: colocation-profile-example\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  # \u91c7\u7528 LSR QoS\n  qosClass: LSR\n  annotations:\n  # \u91c7\u7528\u7269\u7406\u6838\u95f4\u6253\u6563\u4e14\u72ec\u5360\u7269\u7406\u6838\n    scheduling.koordinator.sh/resource-spec: \'{"preferredCPUBindPolicy":"SpreadByPCPUs", "preferredCPUExclusivePolicy":"PCPULevel"}\'\n  priorityClassName: koord-prod\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"This article uses Nginx server as Online Service , Pod YAML is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n# nginx\u5e94\u7528\u914d\u7f6e\napiVersion: v1\ndata:\n  config: |-\n    user  nginx;\n    worker_processes  4; # Nginx\u7684Worker\u4e2a\u6570\uff0c\u5f71\u54cdNginx Server\u7684\u5e76\u53d1\u3002\n\n    events {\n        worker_connections  1024;  # \u9ed8\u8ba4\u503c\u4e3a1024\u3002\n    }\n\n    http {\n        server {\n            listen  8000;\n\n            gzip off;\n            gzip_min_length 32;\n            gzip_http_version 1.0;\n            gzip_comp_level 3;\n            gzip_types *;\n        }\n    }\n\n    #daemon off;\nkind: ConfigMap\nmetadata:\n  name: nginx-conf-0\n---\n# Nginx\u5b9e\u4f8b\uff0c\u4f5c\u4e3a\u5728\u7ebf\u7c7b\u578b\u670d\u52a1\u5e94\u7528\u3002\napiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: nginx\n  name: nginx-0\n  namespace: default\nspec:\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n        - matchExpressions:\n          - key: kubernetes.io/hostname\n            operator: In\n            values:\n            - \"${node_name}\"    \n  schedulerName: koord-scheduler\n  priorityClassName: koord-prod\n  containers:\n    - image: 'koordinatorsh/nginx:v1.18-koord-exmaple'\n      imagePullPolicy: IfNotPresent\n      name: nginx\n      ports:\n        - containerPort: 8000\n          hostPort: 8000 # \u538b\u6d4b\u8bf7\u6c42\u8bbf\u95ee\u7684\u7aef\u53e3\u3002\n          protocol: TCP\n      resources:\n        limits:\n          cpu: '4'\n          memory: 8Gi\n        requests:\n          cpu: '4'\n          memory: 8Gi\n      volumeMounts:\n        - mountPath: /apps/nginx/conf\n          name: config\n  hostNetwork: true\n  restartPolicy: Never\n  volumes:\n    - configMap:\n        items:\n          - key: config\n            path: nginx.conf\n        name: nginx-conf-0\n      name: config\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following command to deploy the Nginx application."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f nginx.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following command to view the Pod status of the Nginx application."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -l app=nginx -o wide\n")),(0,o.kt)("p",{parentName:"li"},"You can see output similar to the following, indicating that the Nginx application has been running normally on the test machine."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAME      READY   STATUS    RESTARTS   AGE     IP           NODE                    NOMINATED NODE   READINESS GATES\nnginx-0   1/1     Running   0          2m46s   10.0.0.246   test-machine-name           <none>          \n<none>\n")))),(0,o.kt)("h3",{id:"load-test"},"Load Test"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the testing machine, execute the following command to deploy the stress testing tool wrk."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O wrk-4.2.0.tar.gz https://github.com/wg/wrk/archive/refs/tags/4.2.0.tar.gz && tar -xvf wrk-4.2.0.tar.gz\ncd wrk-4.2.0 && make && chmod +x ./wrk\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the testing machine, execute the following command to deploy the load testing tool wrk"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# node_ip\u586b\u5199\u6d4b\u8bd5\u673a\u7684IP\u5730\u5740\uff0c\u7528\u4e8ewrk\u5411\u6d4b\u8bd5\u673a\u53d1\u8d77\u538b\u6d4b\uff1b8000\u662fNginx\u66b4\u9732\u5230\u6d4b\u8bd5\u673a\u7684\u7aef\u53e3\u3002\ntaskset -c 32-45 ./wrk -t120 -c400 -d600s --latency http://${node_ip}:8000/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After waiting for wrk to finish running, obtain the pressure test results of wrk. The output format of wrk is as follows. Repeat the test several times to obtain relatively stable results."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Running 10m test @ http://192.168.0.186:8000/\n  120 threads and 400 connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency     3.29ms    2.49ms 352.52ms   91.07%\n    Req/Sec     0.96k   321.04     3.28k    62.00%\n  Latency Distribution\n     50%    2.60ms\n     75%    3.94ms\n     90%    5.55ms\n     99%   12.40ms\n  68800242 requests in 10.00m, 54.46GB read\nRequests/sec: 114648.19\nTransfer/sec:     92.93MB\n")))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In a Kubernetes cluster, there may be competition for resources such as CPU and memory among different business loads, which affects the performance and stability of the business. In the face of the Noisy Neighbor phenomenon, users can use Koordinator to configure more refined CPU scheduling policies for applications, so that different applications can share CPU resources collaboratively. We have shown through experiments that Koordinator's fine-grained CPU scheduling capability can effectively suppress the competition for CPU resources and improve application performance."))}u.isMDXComponent=!0},9845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/qos-cpu-orchestration-460f5568c67508e791d2f0b8798ac826.png"}}]);