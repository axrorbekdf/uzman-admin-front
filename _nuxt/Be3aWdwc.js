import{u,_ as p}from"./BmqrhUpv.js";import{_ as g}from"./DmD2pl4u.js";import{L as f,h,K as F,I as l,o as s,x as _,c as C,b as k}from"./D-e5Xl1W.js";import{C as r}from"./CqAFBoCC.js";import"./jC18RFQA.js";import"./4w8HwJQ8.js";import"./CqFJUeWa.js";import"./TTmt9t3h.js";import"./ADEZgYjw.js";const b=f("category",{state:()=>({category:null,categories:[],model:{modelForForm:{entity:{id:void 0,name:void 0,icon:void 0},viewEntity:{id:{name:"ID",type:"number"},name:{name:"Nomi",type:"string"},icon:{name:"Icon",type:"file"}},formTemplate:[{label:"Category nomi",name:"name",relation:null},{label:"Category icon",name:"icon",relation:null}],rules:{name:{rule:"required",message:"To'ldirilishi kerak"},icon:{rule:"required",message:"To'ldirilishi kerak"}}},columns:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"icon",label:"Icon",sortable:!0},{key:"date",label:"Sana",sortable:!0},{key:"actions"}]}}),getters:{category:t=>t.category,getList:t=>t.categories},actions:{async getAllList(){try{r.forOptions().then(t=>{this.categories=t.resoult.data}).catch(t=>{console.error("Failed to load posts:",t)})}catch(t){console.error("Failed to load posts:",t)}},async createCategory(t){try{r.store(t).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}},async updateCategory(t,e){try{r.update(t,e).then(o=>{this.getAllList()}).catch(o=>{console.error("Failed to load posts:",o)})}catch(o){console.error("Failed to load posts:",o)}},async deleteCategory(t){try{r.delete(t).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}}}}),L={key:1},D=h({__name:"index",setup(t){const e=u(),o=b();F(async()=>{o.getAllList()});function n(){o.model.modelForForm.entity={id:void 0,name:void 0,icon:void 0}}function i(){e.set(!0),o.createCategory(o.model.modelForForm.entity).then(a=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function c(){e.set(!0),o.updateCategory(o.model.modelForForm.entity.id??0,o.model.modelForForm.entity).then(a=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function d(){console.log(o.model.modelForForm.entity.id??0),e.set(!0),o.deleteCategory(o.model.modelForForm.entity.id??0).then(a=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}return(a,v)=>{const m=p,y=g;return l(e).isLoading?(s(),_(m,{key:0})):(s(),C("div",L,[k(y,{data:l(o).getList,model:l(o).model,"clear-entity":n,"create-model":i,"update-model":c,"delete-model":d},null,8,["data","model"])]))}}});export{D as default};
