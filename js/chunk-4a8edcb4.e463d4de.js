(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a8edcb4"],{5116:function(t,e,a){},"5c74":function(t,e,a){"use strict";a("5116")},"9cab":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v("最新動態")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新餐廳")]),a("NewestRestaurants",{attrs:{restaurants:t.restaurants}})],1),a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新評論")]),a("NewestComments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=(a("4de4"),a("96cf"),a("1da1")),i=a("8bb1"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新餐廳")]),a("div",{staticClass:"card-body"},t._l(t.restaurants,(function(e){return a("div",{key:e.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[t._v(" "+t._s(e.name)+" ")]),a("small",[t._v(t._s(e.Category?e.Category.name:"未分類"))])],1),a("p",[t._v(" "+t._s(e.description)+" ")]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")])})),0)])},o=[],u=a("2708"),d={mixins:[u["b"]],props:{restaurants:{type:Array,required:!0}}},l=d,m=(a("5c74"),a("2877")),v=Object(m["a"])(l,c,o,!1,null,"3748fd88",null),_=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新評論")]),t._l(t.comments,(function(e){return a("div",{key:e.id,staticClass:"card-body"},[a("div",[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.Restaurant.id}}}},[t._v(" "+t._s(e.Restaurant.name)+" ")])],1),a("p",[t._v(t._s(e.text))]),t._v(" by "),a("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v(" "+t._s(e.User.name)+" ")]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")],1)])}))],2)},p=[],h={mixins:[u["b"]],props:{comments:{type:Array,required:!0}}},b=h,w=Object(m["a"])(b,f,p,!1,null,null,null),C=w.exports,y=a("2375"),k=a("c4c3"),x=a("2fa3"),g={components:{NavTabs:i["a"],NewestRestaurants:_,NewestComments:C,Spinner:y["a"]},data:function(){return{restaurants:[],comments:[],isLoading:!0}},created:function(){this.fetcfFeeds()},methods:{fetcfFeeds:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k["a"].getFeeds();case 3:a=e.sent,s=a.data,r=s.restaurants,n=s.comments,t.restaurants=r,t.comments=n.filter((function(t){return t.Restaurant&&t.text})),t.isLoading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.isLoading=!1,x["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}},N=g,R=Object(m["a"])(N,s,r,!1,null,null,null);e["default"]=R.exports}}]);
//# sourceMappingURL=chunk-4a8edcb4.e463d4de.js.map