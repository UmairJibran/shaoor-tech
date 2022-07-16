(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["authors"],{9411:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"author"},[e("div",{staticClass:"home mx-8 w-auto"},[e("div",{staticClass:"grid grid-col-1"},[e("AuthorProfile",{directives:[{name:"show",rawName:"v-show",value:t.articlesLoaded,expression:"articlesLoaded"}],attrs:{author:t.authorDetails}}),e("div",{staticClass:"my-4 md:grid md:grid-cols-8 md:gap-8"},[e("div",{staticClass:"md:col-span-1"}),e("div",{staticClass:"md:col-span-4"},[e("ArticleBlockLoading",{directives:[{name:"show",rawName:"v-show",value:!t.articlesLoaded,expression:"!articlesLoaded"}]}),t._l(t.articles,(function(a){return e("ArticleBlock",{directives:[{name:"show",rawName:"v-show",value:t.articlesLoaded,expression:"articlesLoaded"}],key:a._id,attrs:{article:a}})}))],2),e("div",{staticClass:"mt-8 md:col-span-2"},[e("h4",{staticClass:"text-lg uppercase font-bold"},[t._v("Top Tags")]),e("TenTags"),e("div",{staticClass:"block no-phone"},[e("h4",{staticClass:"block text-lg uppercase font-bold mt-4"},[t._v(" Latest Articles by "+t._s(t.authorName)+" ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.articlesLoaded,expression:"!articlesLoaded"}],staticClass:"animate-pulse"},[e("div",{staticClass:"block mt-2 h-4 w-10/12 opacity-30 dark:bg-blueGray-50 bg-blueGray-800 rounded"}),e("div",{staticClass:"block mt-2 h-4 w-5/12 opacity-30 dark:bg-blueGray-50 bg-blueGray-800 rounded"})]),t._l(t.articles,(function(a){return e("LatestArticles",{directives:[{name:"show",rawName:"v-show",value:t.articlesLoaded,expression:"articlesLoaded"}],key:a._id,attrs:{title:a.title,slug:a.slug,authorName:a.author.authorName,authorUsername:a.author.authorUsername}})}))],2),t._m(0)],1)])],1)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"block no-phone"},[e("h4",{staticClass:"block text-lg uppercase font-bold mt-4"},[t._v(" Categories ")])])}],o=e("bc3a"),i=e.n(o),l=e("68f1"),c=e("cae8"),d=e("ed9b"),n=e("27a8"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"author-profile"},[e("figure",{staticClass:"md:flex bg-blueGray-200 dark:bg-blueGray-700 rounded-xl p-8 md:p-0"},[e("img",{staticClass:"w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto",attrs:{src:t.author.authorImageUrl,alt:t.author.authorName+"'s Photo",width:"384",height:"512"}}),e("div",{staticClass:"pt-6 md:p-8 bg-blueGray-200 dark:bg-blueGray-700 text-center md:text-left space-y-4"},[e("blockquote",[e("p",{staticClass:"text-lg font-semibold bg-blueGray-200 dark:bg-blueGray-700"},[t._v(" "+t._s(t.author.authorIntro)+" ")])]),e("figcaption",{staticClass:"font-medium "},[e("div",{staticClass:"text-cyan-600 bg-blueGray-200 dark:bg-blueGray-700"},[t._v(" "+t._s(t.author.authorName)+" ")]),e("div",{staticClass:"text-gray-500 bg-blueGray-200 dark:bg-blueGray-700"},[t._v(" "+t._s(t.author.authorPosition)+" ")])])])])])},h=[],m={name:"AuthorProfile",props:{author:Object}},b=m,p=e("2877"),v=Object(p["a"])(b,u,h,!1,null,"2ecc1a7b",null),g=v.exports,f={name:"Home",data:function(){return{articles:[],articlesLoaded:!1,authorDetails:{}}},props:{authorName:{required:!0,type:String},authorUsername:{required:!0,type:String}},components:{ArticleBlock:l["a"],ArticleBlockLoading:c["a"],TenTags:d["a"],LatestArticles:n["a"],AuthorProfile:g},created:function(){this.fetchAllArticles()},methods:{fetchAllArticles:function(){var t=this,a="https://shaoor-api.azurewebsites.net/api/",e="".concat(a,"authors/").concat(this.authorUsername),s="".concat(a,"authorDetails/").concat(this.authorUsername);i.a.get(s).then((function(a){t.authorDetails=a.data})),i.a.get(e).then((function(a){t.articles=a.data,t.articlesLoaded=!0}))}}},w=f,y=(e("ade0"),Object(p["a"])(w,s,r,!1,null,"4384ce41",null));a["default"]=y.exports},ade0:function(t,a,e){"use strict";e("dae0")},dae0:function(t,a,e){}}]);
//# sourceMappingURL=authors.f914c082.js.map