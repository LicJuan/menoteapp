(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b5988"],{"1a24":function(t,a,n){"use strict";n.r(a);var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-6"},[n("h1",[t._v("Editar")]),n("form",{on:{submit:function(a){return a.preventDefault(),t.actualizarData(t.nota)}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"nombre"}},[t._v("Nombre")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.nombre,expression:"nota.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el nombre"},domProps:{value:t.nota.nombre},on:{input:function(a){a.target.composing||t.$set(t.nota,"nombre",a.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"descripcion"}},[t._v("Descripcion")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.nota.descripcion,expression:"nota.descripcion"}],staticClass:"form-control",attrs:{cols:"30",rows:"2",placeholder:"Ingrese una descripcion"},domProps:{value:t.nota.descripcion},on:{input:function(a){a.target.composing||t.$set(t.nota,"descripcion",a.target.value)}}})]),t._m(0)])])])])},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"form-group mt-3"},[n("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v(" GUARDAR ")])])}],r={name:"Editar",data:function(){return{nota:{nombre:"",descripcion:""}}},methods:{obtenerData:function(){var t=this,a=this.$route.params.id;this.axios.get("notas/".concat(a)).then((function(a){var n=a.data,o=n.nombre,e=n.descripcion;n._id;t.nota.nombre=o,t.nota.descripcion=e})).catch((function(t){return console.log(t)}))},actualizarData:function(){var t=this,a=this.$route.params.id;this.axios.put("notas/".concat(a,"/editar"),this.nota).then((function(a){t.$swal("Actualizado","","success"),t.$router.push({name:"Notas"})})).catch((function(t){return console.log(t)}))}},created:function(){this.obtenerData()}},s=r,i=n("2877"),c=Object(i["a"])(s,o,e,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b5988.0a9f502e.js.map