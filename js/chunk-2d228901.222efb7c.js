(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[e._v("Image")]),e.user.image?a("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.user.image,width:"200",height:"200"}}):e._e(),a("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"資料更新中...":"Submit")+" ")])])])},s=[],n=(a("b0c0"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),i=a("5530"),o=a("2f62"),u=a("4cce"),c=a("2fa3"),m={data:function(){return{user:{id:-1,name:"",image:"",email:"",isProcessing:!1}}},computed:Object(i["a"])({},Object(o["b"])(["currentUser"])),watch:{currentUser:function(){this.setUser()}},created:function(){var e=this.$route.params.id;e.toString()===this.currentUser.id.toString()?this.setUser():this.$router.push({name:"not-found"})},methods:{setUser:function(){var e=this.currentUser,t=e.id,a=e.name,r=e.email,s=e.image;this.user={id:t,name:a,email:r,image:s}},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.user.image="";else{var a=window.URL.createObjectURL(t[0]);this.user.image=a}},handleSubmit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,s,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,t.isProcessing=!0,console.log(t.user.name),t.user.name){a.next=6;break}return c["a"].fire({icon:"warning",title:"您尚未填寫姓名"}),a.abrupt("return");case 6:return r=e.target,s=new FormData(r),console.log("formData",s),a.next=11,u["a"].update({userId:t.user.id,formData:s});case 11:if(n=a.sent,i=n.data,"success"===i.status){a.next=15;break}throw new Error(i.message);case 15:t.$router.push({name:"user",params:{id:t.user.id}}),a.next=22;break;case 18:a.prev=18,a.t0=a["catch"](0),t.isProcessing=!1,c["a"].fire({icon:"error",title:"無法更新使用者資料，請稍後再試"});case 22:case"end":return a.stop()}}),a,null,[[0,18]])})))()}}},l=m,d=a("2877"),g=Object(d["a"])(l,r,s,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d228901.222efb7c.js.map