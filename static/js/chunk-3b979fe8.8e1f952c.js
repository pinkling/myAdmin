(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b979fe8"],{"0c9a":function(e,n,t){"use strict";t("deaa")},7802:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("section",{attrs:{id:"container"}})])}],r=t("5a89"),s=t("34ad"),o=t("4721"),c={name:"Index",data:function(){return{camera:null,scene:null,renderer:null,mesh:null}},mounted:function(){this.init(),this.animate()},methods:{init:function(){var e=document.getElementById("container");this.camera=new r["ab"](90,e.clientWidth/e.clientHeight,.1,1e3),this.renderer=new r["Ab"]({antialias:!0}),this.camera.position.set(200,200,400),this.scene=new r["lb"],this.renderer.setClearColor(new r["j"](16249585)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.load3D(),this.loadLight(),e.appendChild(this.renderer.domElement),this.controls=new o["a"](this.camera,this.renderer.domElement),this.controls.target=new r["yb"](0,0,0)},load3D:function(){var e=this,n=new s["a"];n.load("/myAdmin/3D/dalou.gltf",(function(n){e.scene.add(n.scene)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.error(e)}))},loadLight:function(){var e=new r["a"](16777215);this.scene.add(e)},animate:function(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}}},d=c,l=(t("0c9a"),t("2877")),h=Object(l["a"])(d,i,a,!1,null,"1c161d39",null);n["default"]=h.exports},deaa:function(e,n,t){}}]);