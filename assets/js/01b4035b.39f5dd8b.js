"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p}});var a=n(3117),l=(n(7294),n(3905));const r={},s="Namespaces",i={unversionedId:"namespaces",id:"namespaces",title:"Namespaces",description:"All types in the Fleet manager are namespaced.  The namespaces of the manager types do not correspond to the namespaces",source:"@site/docs/namespaces.md",sourceDirName:".",slug:"/namespaces",permalink:"/namespaces",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/namespaces.md",tags:[],version:"current",lastUpdatedAt:1666019838,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Cluster Groups",permalink:"/cluster-group"},next:{title:"Adding a GitRepo",permalink:"/gitrepo-add"}},o={},p=[{value:"GitRepos, Bundles, Clusters, ClusterGroups",id:"gitrepos-bundles-clusters-clustergroups",level:2},{value:"Namespace Creation Behavior in Bundles",id:"namespace-creation-behavior-in-bundles",level:2},{value:"Special Namespaces",id:"special-namespaces",level:2},{value:"fleet-local",id:"fleet-local",level:3},{value:"cattle-fleet-system",id:"cattle-fleet-system",level:3},{value:"cattle-fleet-clusters-system",id:"cattle-fleet-clusters-system",level:3},{value:"Cluster namespaces",id:"cluster-namespaces",level:3},{value:"Cross namespace deployments",id:"cross-namespace-deployments",level:2},{value:"Restricting GitRepos",id:"restricting-gitrepos",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"namespaces"},"Namespaces"),(0,l.kt)("p",null,"All types in the Fleet manager are namespaced.  The namespaces of the manager types do not correspond to the namespaces\nof the deployed resources in the downstream cluster. Understanding how namespaces are use in the Fleet manager is\nimportant to understand the security model and how one can use Fleet in a multi-tenant fashion."),(0,l.kt)("h2",{id:"gitrepos-bundles-clusters-clustergroups"},"GitRepos, Bundles, Clusters, ClusterGroups"),(0,l.kt)("p",null,"The primary types are all scoped to a namespace. All selectors for ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo")," targets will be evaluated against\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"Clusters")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterGroups")," in the same namespaces. This means that if you give ",(0,l.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"update")," privileges\nto a the ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo")," type in a namespace, that end user can modify the selector to match any cluster in that namespace.\nThis means in practice if you want to have two teams self manage their own ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo")," registrations but they should\nnot be able to target each others clusters, they should be in different namespaces."),(0,l.kt)("h2",{id:"namespace-creation-behavior-in-bundles"},"Namespace Creation Behavior in Bundles"),(0,l.kt)("p",null,"When deploying a Fleet bundle, the specified namespace will automatically be created if it does not already exist."),(0,l.kt)("h2",{id:"special-namespaces"},"Special Namespaces"),(0,l.kt)("h3",{id:"fleet-local"},"fleet-local"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"fleet-local")," namespace is a special namespace used for the single cluster use case or to bootstrap\nthe configuration of the Fleet manager."),(0,l.kt)("p",null,"When fleet is installed the ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-local")," namespace is created along with one ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster")," called ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," and one\n",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterGroup")," called ",(0,l.kt)("inlineCode",{parentName:"p"},"default"),".  If no targets are specified on a ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo"),", it is by default targeted to the\n",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterGroup")," named ",(0,l.kt)("inlineCode",{parentName:"p"},"default"),".  This means that all ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos")," created in ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-local")," will\nautomatically target the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster"),".  The ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster")," refers to the cluster the Fleet manager is running\non."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," If you would like to migrate your cluster from ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-local")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"default"),", please see this ",(0,l.kt)("a",{parentName:"p",href:"/troubleshooting#migrate-the-local-cluster-to-the-fleet-default-cluster"},"documentation"),"."),(0,l.kt)("h3",{id:"cattle-fleet-system"},"cattle-fleet-system"),(0,l.kt)("p",null,"The Fleet controller and Fleet agent run in this namespace. All service accounts referenced by ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos")," are expected\nto live in this namespace in the downstream cluster."),(0,l.kt)("h3",{id:"cattle-fleet-clusters-system"},"cattle-fleet-clusters-system"),(0,l.kt)("p",null,"This namespace holds secrets for the cluster registration process. It should contain no other resources in it,\nespecially secrets."),(0,l.kt)("h3",{id:"cluster-namespaces"},"Cluster namespaces"),(0,l.kt)("p",null,"For every cluster that is registered a namespace is created by the Fleet manager for that cluster.\nThese namespaces have are named in the form ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-${namespace}-${cluster}-${random}"),".  The purpose of this\nnamespace is that all ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleDeployments")," for that cluster are put into this namespace and\nthen the downstream cluster is given access to watch and update ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleDeployments")," in that namespace only."),(0,l.kt)("h2",{id:"cross-namespace-deployments"},"Cross namespace deployments"),(0,l.kt)("p",null,"It is possible to create a GitRepo that will deploy across namespaces. The primary purpose of this is so that a\ncentral privileged team can manage common configuration for many clusters that are managed by different teams. The way\nthis is accomplished is by creating a ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," resource in a cluster."),(0,l.kt)("p",null,"If you are creating a ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," resource it is best to do it in a namespace that only contains ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos"),"\nand no ",(0,l.kt)("inlineCode",{parentName:"p"},"Clusters"),".  It seems to get confusing if you have Clusters in the same repo as the cross namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos")," will still\nalways be evaluated against the current namespace.  So if you have clusters in the same namespace you may wish to make them\ncanary clusters."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," has only two fields.  Which are as below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: BundleNamespaceMapping\napiVersion: {{fleet.apiVersion}}\nmetadata:\n  name: not-important\n  namespace: typically-unique\n\n# Bundles to match by label.  The labels are defined in the fleet.yaml\n# labels field or from the GitRepo metadata.labels field\nbundleSelector:\n  matchLabels:\n   foo: bar\n\n# Namespaces to match by label\nnamespaceSelector:\n  matchLabels:\n   foo: bar\n")),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleNamespaceMappings")," ",(0,l.kt)("inlineCode",{parentName:"p"},"bundleSelector")," field matches a ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundles")," labels then that ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundle")," target criteria will\nbe evaluated against all clusters in all namespaces that match ",(0,l.kt)("inlineCode",{parentName:"p"},"namespaceSelector"),". One can specify labels for the created\nbundles from git by putting labels in the ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," file or on the ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.labels")," field on the ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo"),"."),(0,l.kt)("h2",{id:"restricting-gitrepos"},"Restricting GitRepos"),(0,l.kt)("p",null,"A namespace can contain multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepoRestriction")," resources. All ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos"),"\ncreated in that namespace will be checked against the list of restrictions.\nIf a ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo")," violates one of the constraints its ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleDeployment")," will be\nin an error state and won't be deployed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kind: GitRepoRestriction\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: restriction\n  namespace: typically-unique\nspec:\n  defaultServiceAccount: ""\n  allowedServiceAccounts: []\n  allowedRepoPatterns: []\n  defaultClientSecretName: ""\n  allowedClientSecretNames: []\n')))}m.isMDXComponent=!0}}]);