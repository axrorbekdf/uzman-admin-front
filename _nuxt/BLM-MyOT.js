import{u as p,_ as h}from"./BmqrhUpv.js";import{_ as y}from"./DmD2pl4u.js";import{L as f,h as L,K as F,I as n,o as s,x as _,c as b,b as k}from"./D-e5Xl1W.js";import{u as a}from"./ADEZgYjw.js";import"./jC18RFQA.js";import"./4w8HwJQ8.js";import"./CqFJUeWa.js";import"./TTmt9t3h.js";const l={index(t){return a()("language/index",{method:"GET",params:t})},forOptions(){return a()("language/for/options",{method:"GET"})},view(t){return a()(`language/view/${t}`,{method:"GET"})},store(t){return a()("language/store",{method:"POST",body:t})},update(t,e){return a()(`language/update/${t}`,{method:"PUT",body:e})},delete(t){return a()(`language/delete/${t}`,{method:"DELETE"})}},v=f("language",{state:()=>({language:null,languages:[],model:{modelForForm:{entity:{id:void 0,name:void 0,slug:void 0},viewEntity:{id:{name:"ID",type:"number"},name:{name:"Nomi",type:"string"},slug:{name:"slug",type:"string"}},formTemplate:[{label:"Nomi",name:"name",relation:null},{label:"Slug",name:"slug",relation:null}],rules:{name:{rule:"required",message:"To'ldirilishi kerak"},slug:{rule:"required",message:"To'ldirilishi kerak"}}},columns:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"slug",label:"Slug",sortable:!0},{key:"date",label:"Sana",sortable:!0},{key:"actions"}]}}),getters:{language:t=>t.language,getList:t=>t.languages},actions:{async getAllList(){try{l.forOptions().then(t=>{this.languages=t.resoult.data}).catch(t=>{console.error("Failed to load posts:",t)})}catch(t){console.error("Failed to load posts:",t)}},async createLanguage(t){try{l.store(t).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}},async updateLanguage(t,e){try{l.update(t,e).then(o=>{this.getAllList()}).catch(o=>{console.error("Failed to load posts:",o)})}catch(o){console.error("Failed to load posts:",o)}},async deleteLanguage(t){try{l.delete(t).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}}}}),S={key:1},G=L({__name:"index",setup(t){const e=p(),o=v();F(async()=>{o.getAllList()});function i(){o.model.modelForForm.entity={id:void 0,name:void 0,slug:void 0}}function d(){e.set(!0),o.createLanguage(o.model.modelForForm.entity).then(r=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function u(){e.set(!0),o.updateLanguage(o.model.modelForForm.entity.id??0,o.model.modelForForm.entity).then(r=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function c(){console.log(o.model.modelForForm.entity.id??0),e.set(!0),o.deleteLanguage(o.model.modelForForm.entity.id??0).then(r=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}return(r,E)=>{const m=h,g=y;return n(e).isLoading?(s(),_(m,{key:0})):(s(),b("div",S,[k(g,{data:n(o).getList,model:n(o).model,"clear-entity":i,"create-model":d,"update-model":u,"delete-model":c},null,8,["data","model"])]))}}});export{G as default};
