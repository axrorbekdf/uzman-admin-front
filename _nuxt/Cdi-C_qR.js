import{u as h,_ as b}from"./r1xUzUwn.js";import{_ as y}from"./DRdkdGpI.js";import{L as k,h as _,K as v,I as s,o as l,x as g,c as f,b as F}from"./qDZVs_zL.js";import{u as a}from"./CkKw5vfm.js";import"./lals4Z0I.js";import"./BfCwIDr9.js";import"./CGZlEfa_.js";import"./DB5mCrBQ.js";const o={index(r){return a()("master/index",{method:"GET",params:r})},forOptions(){return a()("master/for/options",{method:"GET"})},view(r){return a()(`master/view/${r}`,{method:"GET"})},store(r){return a()("master/store",{method:"POST",body:r})},update(r,e){return a()(`master/update/${r}`,{method:"PUT",body:e})},delete(r){return a()(`master/delete/${r}`,{method:"DELETE"})}},T=k("master",{state:()=>({master:null,masters:[],model:{modelForForm:{entity:{id:void 0,name:void 0,phone:void 0,price:void 0,time:void 0,verify:void 0,experience:void 0,image:void 0,pasport_image:void 0,about:void 0,level_id:void 0,specialist_id:void 0,user_id:void 0},formTemplate:[{label:"Nomi",name:"name"},{label:"Telefon",name:"phone"},{label:"Narxi",name:"price"},{label:"Vaqt",name:"time"},{label:"Status",name:"verify"},{label:"Ish staji",name:"experience"},{label:"Rasm",name:"image"},{label:"Pasport image",name:"pasport_image"},{label:"Haqida",name:"about"},{label:"Level",name:"level_id"},{label:"Musaxasisligi",name:"specialist_id"},{label:"Login",name:"user_id"}],rules:{name:{rule:"required",message:"To'ldirilishi kerak"},phone:{rule:"required",message:"To'ldirilishi kerak"},price:{rule:"required",message:"To'ldirilishi kerak"},time:{rule:"required",message:"To'ldirilishi kerak"},verify:{rule:"required",message:"To'ldirilishi kerak"},experience:{rule:"required",message:"To'ldirilishi kerak"},image:{rule:"required",message:"To'ldirilishi kerak"},pasport_image:{rule:"required",message:"To'ldirilishi kerak"},about:{rule:"required",message:"To'ldirilishi kerak"},level_id:{rule:"required",message:"To'ldirilishi kerak"},specialist_id:{rule:"required",message:"To'ldirilishi kerak"},user_id:{rule:"required",message:"To'ldirilishi kerak"}}},columns:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"phone",label:"Telefoni",sortable:!0},{key:"price",label:"Narxi",sortable:!0},{key:"time",label:"Vaqt",sortable:!0},{key:"verify",label:"Status",sortable:!0},{key:"experience",label:"Ish tajribasi",sortable:!0},{key:"image",label:"Rasm",sortable:!0},{key:"pasport_image",label:"Pasport rasm",sortable:!0},{key:"about",label:"Haqida",sortable:!0},{key:"level_id",label:"Daraja",sortable:!0},{key:"specialist_id",label:"Mutaxasisligi",sortable:!0},{key:"Login",label:"user_id",sortable:!0},{key:"date",label:"Sana",sortable:!0},{key:"actions"}]}}),getters:{master:r=>r.master,getList:r=>r.masters},actions:{async getAllList(){try{o.forOptions().then(r=>{this.masters=r.resoult.data}).catch(r=>{console.error("Failed to load posts:",r)})}catch(r){console.error("Failed to load posts:",r)}},async createMaster(r){try{o.store(r).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}},async updateMaster(r,e){try{o.update(r,e).then(t=>{this.getAllList()}).catch(t=>{console.error("Failed to load posts:",t)})}catch(t){console.error("Failed to load posts:",t)}},async deleteMaster(r){try{o.delete(r).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}}}}),q={key:1},$=_({__name:"index",setup(r){const e=h(),t=T();v(async()=>{t.getAllList()});function d(){t.model.modelForForm.entity={id:void 0,name:void 0,phone:void 0,price:void 0,time:void 0,verify:void 0,experience:void 0,image:void 0,pasport_image:void 0,about:void 0,level_id:void 0,specialist_id:void 0,user_id:void 0}}function n(){e.set(!0),t.createMaster(t.model.modelForForm.entity).then(i=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function m(){e.set(!0),t.updateMaster(t.model.modelForForm.entity.id??0,t.model.modelForForm.entity).then(i=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function c(){console.log(t.model.modelForForm.entity.id??0),e.set(!0),t.deleteMaster(t.model.modelForForm.entity.id??0).then(i=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}return(i,x)=>{const u=b,p=y;return s(e).isLoading?(l(),g(u,{key:0})):(l(),f("div",q,[F(p,{data:s(t).getList,model:s(t).model,"clear-entity":d,"create-model":n,"update-model":m,"delete-model":c},null,8,["data","model"])]))}}});export{$ as default};
