(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b4e062b"],{6432:function(e,i,t){"use strict";t("64b7")},"64b7":function(e,i,t){},e405:function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"cesiumContainer"}})},s=[],a=null,c=null,o=null,r={name:"Index",data:function(){return{viewer:null}},mounted:function(){this.init(),this.addModel(),this.change(-122.34931,47.62051),this.addClick()},methods:{init:function(){a=new this.Cesium.Viewer("cesiumContainer",{terrainProvider:new this.Cesium.CesiumTerrainProvider({url:this.Cesium.IonResource.fromAssetId(1),requestWaterMask:!0,requestVertexNormals:!0}),geocoder:!1,homeButton:!1,timeline:!1,navigationHelpButton:!1,fullscreenButton:!1,scene3DOnly:!0,baseLayerPicker:!1,CreditsDisplay:!1,animation:!1}),a._cesiumWidget._creditContainer.style.display="none",a.scene.camera.setView({destination:this.Cesium.Cartesian3.fromDegrees(-122.3472,47.598,370),orientation:{heading:this.Cesium.Math.toRadians(10),pitch:this.Cesium.Math.toRadians(-10)}})},addModel:function(){c=this.Cesium.createOsmBuildings(),a.scene.primitives.add(c)},change:function(e,i){c.style=new this.Cesium.Cesium3DTileStyle({defines:{distance:"distance(vec2(${feature['cesium#longitude']}, ${feature['cesium#latitude']}), vec2("+e+","+i+"))"},color:{conditions:[["${distance} > 0.014","color('blue')"],["${distance} > 0.010","color('green')"],["${distance} > 0.006","color('yellow')"],["${distance} > 0.0001","color('red')"],["true","color('white')"]]}})},addClick:function(){var e=this;o=new this.Cesium.ScreenSpaceEventHandler(a.scene.canvas),o.setInputAction((function(i){a.selectedEntity=void 0;var t=a.scene.pick(i.position);if(t){var n=t.getProperty("cesium#latitude"),s=t.getProperty("cesium#longitude");e.change(s,n)}}),this.Cesium.ScreenSpaceEventType.LEFT_CLICK)}}},u=r,d=(t("6432"),t("2877")),l=Object(d["a"])(u,n,s,!1,null,"3873a1e4",null);i["default"]=l.exports}}]);