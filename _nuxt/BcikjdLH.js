import{u as p,_ as h}from"./r1xUzUwn.js";import{_ as f}from"./DRdkdGpI.js";import{L as y,h as L,K as F,I as s,o as n,x as _,c as k,b}from"./qDZVs_zL.js";import{u as a}from"./CkKw5vfm.js";import"./lals4Z0I.js";import"./BfCwIDr9.js";import"./CGZlEfa_.js";import"./DB5mCrBQ.js";const l={index(t){return a()("language/index",{method:"GET",params:t})},forOptions(){return a()("language/for/options",{method:"GET"})},view(t){return a()(`language/view/${t}`,{method:"GET"})},store(t){return a()("language/store",{method:"POST",body:t})},update(t,e){return a()(`language/update/${t}`,{method:"PUT",body:e})},delete(t){return a()(`language/delete/${t}`,{method:"DELETE"})}},v=y("language",{state:()=>({language:null,languages:[],model:{modelForForm:{entity:{id:void 0,name:void 0,slug:void 0},formTemplate:[{label:"Nomi",name:"name"},{label:"Slug",name:"slug"}],rules:{name:{rule:"required",message:"To'ldirilishi kerak"},slug:{rule:"required",message:"To'ldirilishi kerak"}}},columns:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"slug",label:"Slug",sortable:!0},{key:"date",label:"Sana",sortable:!0},{key:"actions"}]}}),getters:{language:t=>t.language,getList:t=>t.languages},actions:{async getAllList(){try{l.forOptions().then(t=>{this.languages=t.resoult.data}).catch(t=>{console.error("Failed to load posts:",t)})}catch(t){console.error("Failed to load posts:",t)}},async createLanguage(t){try{l.store(t).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}},async updateLanguage(t,e){try{l.update(t,e).then(o=>{this.getAllList()}).catch(o=>{console.error("Failed to load posts:",o)})}catch(o){console.error("Failed to load posts:",o)}},async deleteLanguage(t){try{l.delete(t).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}}}}),S={key:1},q=L({__name:"index",setup(t){const e=p(),o=v();F(async()=>{o.getAllList()});function d(){o.model.modelForForm.entity={id:void 0,name:void 0,slug:void 0}}function i(){e.set(!0),o.createLanguage(o.model.modelForForm.entity).then(r=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function u(){e.set(!0),o.updateLanguage(o.model.modelForForm.entity.id??0,o.model.modelForForm.entity).then(r=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function c(){console.log(o.model.modelForForm.entity.id??0),e.set(!0),o.deleteLanguage(o.model.modelForForm.entity.id??0).then(r=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}return(r,T)=>{const g=h,m=f;return s(e).isLoading?(n(),_(g,{key:0})):(n(),k("div",S,[b(m,{data:s(o).getList,model:s(o).model,"clear-entity":d,"create-model":i,"update-model":u,"delete-model":c},null,8,["data","model"])]))}}});export{q as default};
