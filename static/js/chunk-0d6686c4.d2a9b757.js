(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d6686c4"],{"6a2d":function(e,n,t){},e30b:function(e,n,t){"use strict";t("6a2d")},fa07:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"cesiumContainer"}})},r=[],o=null,a={name:"Index",data:function(){return{viewer:null}},mounted:function(){this.init(),this.addRotate()},methods:{init:function(){o=new this.Cesium.Viewer("cesiumContainer",{terrainProvider:new this.Cesium.CesiumTerrainProvider({url:this.Cesium.IonResource.fromAssetId(1),requestWaterMask:!0,requestVertexNormals:!0}),geocoder:!1,homeButton:!1,timeline:!1,navigationHelpButton:!1,fullscreenButton:!1,scene3DOnly:!0,baseLayerPicker:!1,CreditsDisplay:!1,animation:!1}),o._cesiumWidget._creditContainer.style.display="none"},addRotate:function(){var e=Date.now(),n=t("ec35");function i(){var t=.1,i=Date.now(),r=(i-e)/1e3;e=i,o.scene.camera.rotate(n.Cartesian3.UNIT_Z,-t*r)}o.clock.onTick.addEventListener(i),setTimeout((function(){o.clock.onTick.removeEventListener(i)}),999e3)}}},s=a,c=(t("e30b"),t("2877")),u=Object(c["a"])(s,i,r,!1,null,"26963c38",null);n["default"]=u.exports}}]);