(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d8e2"],{d297:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-6"},[o("h1",[t._v("Crear Nota")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.crearNota(t.nota)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"nombre"}},[t._v("Nombre")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.nombre,expression:"nota.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el nombre"},domProps:{value:t.nota.nombre},on:{input:function(e){e.target.composing||t.$set(t.nota,"nombre",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"descripcion"}},[t._v("Descripcion")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.nota.descripcion,expression:"nota.descripcion"}],staticClass:"form-control",attrs:{cols:"30",rows:"2",placeholder:"Ingrese una descripcion"},domProps:{value:t.nota.descripcion},on:{input:function(e){e.target.composing||t.$set(t.nota,"descripcion",e.target.value)}}})]),t._m(0)])])])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group mt-3"},[o("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v(" GUARDAR ")])])}],a=o("5530"),s=o("2f62"),c={name:"Crear",data:function(){return{nota:{nombre:"",descripcion:""}}},computed:Object(a["a"])({},Object(s["d"])(["token"])),methods:{crearNota:function(){var t=this;this.axios.post("/notas/crear",this.nota,{headers:{token:this.token}}).then((function(e){t.$router.push({name:"Notas"}),t.nota.nombre="",t.nota.descripcion=""})).catch((function(t){return console.log(t)}))}}},i=c,l=o("2877"),u=Object(l["a"])(i,n,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21d8e2.20a68041.js.map