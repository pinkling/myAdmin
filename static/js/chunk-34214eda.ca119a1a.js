(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34214eda"],{"8fba":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"cesiumContainer"},on:{mousemove:e.mouseMove}})},s=[],a=null,r={name:"Index",data:function(){return{viewer:null,timer:null,time:1}},mounted:function(){this.init(),this.addRotate()},methods:{init:function(){a=new this.Cesium.Viewer("cesiumContainer",{terrainProvider:new this.Cesium.CesiumTerrainProvider({url:this.Cesium.IonResource.fromAssetId(1),requestWaterMask:!0,requestVertexNormals:!0}),geocoder:!1,homeButton:!1,timeline:!1,navigationHelpButton:!1,fullscreenButton:!1,scene3DOnly:!0,baseLayerPicker:!1,CreditsDisplay:!1,animation:!1}),a._cesiumWidget._creditContainer.style.display="none";var e=this.Cesium.Cartesian3.fromDegrees(-74.01881302800248,40.69114333714821,7530),t=new this.Cesium.HeadingPitchRoll.fromDegrees(21.27879878293835,-21.34390550872461,.0716951918898415);a.scene.camera.setView({destination:e,orientation:t,endTransform:this.Cesium.Matrix4.IDENTITY})},mouseMove:function(){var e=this;this.time&&a.camera.lookAtTransform(this.Cesium.Matrix4.IDENTITY),this.time=0,clearTimeout(this.timer),this.timer=setTimeout((function(){e.time=1}),3e3)},addRotate:function(){var e=this,t=this.Cesium.Cartesian3.fromDegrees(-74.01881302800248,40.69114333714821),i=this.Cesium.Math.toRadians(50),n=this.Cesium.Math.toRadians(-20),s=5e3,r=50;a.scene.postRender.addEventListener((function(){e.time&&(r+=.05,i=e.Cesium.Math.toRadians(r),a.camera.lookAt(t,new e.Cesium.HeadingPitchRange(i,n,s)))}))}}},o=r,u=(i("9486"),i("2877")),m=Object(u["a"])(o,n,s,!1,null,"6d00cb70",null);t["default"]=m.exports},9486:function(e,t,i){"use strict";i("cec8")},cec8:function(e,t,i){}}]);