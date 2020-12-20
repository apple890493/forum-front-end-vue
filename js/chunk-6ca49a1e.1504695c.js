(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ca49a1e"],{"571a":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container py-5"},[e("NavTabs"),t.isLoading?e("Spinner"):[e("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),e("hr"),t._l(t.restaurants,(function(a){return e("div",{key:a.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-4"},[e("router-link",{attrs:{to:{name:"restaurant",params:{id:a.id}}}},[e("img",{staticClass:"card-img",attrs:{src:t._f("emptyImage")(a.image)}})])],1),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.name))]),e("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(a.FavoriteCount))]),e("p",{staticClass:"card-text"},[t._v(" "+t._s(a.description)+" ")]),e("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant",params:{id:a.id}}}},[t._v(" Show ")]),a.isFavorited?e("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFavor(a.id)}}},[t._v(" 移除最愛 ")]):e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavor(a.id)}}},[t._v(" 加到最愛 ")])],1)])])])}))]],2)},n=[],s=(e("d81d"),e("5530")),i=(e("96cf"),e("1da1")),o=e("8bb1"),c=e("2375"),u=e("2708"),d=e("c4c3"),v=e("4cce"),p=e("2fa3"),l={components:{NavTabs:o["a"],Spinner:c["a"]},mixins:[u["a"]],data:function(){return{restaurants:[],isLoading:!0}},created:function(){this.fetchTopRestaurants()},methods:{fetchTopRestaurants:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d["a"].getTopRestaurants();case 3:if(e=a.sent,r=e.data,"error"!==r.status){a.next=7;break}throw new Error(r.message);case 7:t.restaurants=r.restaurants,t.isLoading=!1,a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),t.isLoading=!1,p["a"].fire({icon:"error",title:"無法取得人氣餐廳，請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()},addFavor:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v["a"].addFavorite({restaurantId:t});case 3:if(r=e.sent,n=r.data,"success"===n.status){e.next=7;break}throw new Error(n.message);case 7:a.restaurants=a.restaurants.map((function(a){return a.id===t?Object(s["a"])(Object(s["a"])({},a),{},{isFavorited:!0,FavoriteCount:a.FavoriteCount+1}):a})).sort((function(t,a){return a.FavoriteCount-t.FavoriteCount})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),p["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},deleteFavor:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v["a"].deleteFavorite({restaurantId:t});case 3:if(r=e.sent,n=r.data,"success"===n.status){e.next=7;break}throw new Error(n.message);case 7:a.restaurants=a.restaurants.map((function(a){return a.id===t?Object(s["a"])(Object(s["a"])({},a),{},{isFavorited:!1,FavoriteCount:a.FavoriteCount-1}):a})).sort((function(t,a){return a.FavoriteCount-t.FavoriteCount})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),p["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},m=l,f=e("2877"),b=Object(f["a"])(m,r,n,!1,null,null,null);a["default"]=b.exports},d81d:function(t,a,e){"use strict";var r=e("23e7"),n=e("b727").map,s=e("1dde"),i=e("ae40"),o=s("map"),c=i("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6ca49a1e.1504695c.js.map