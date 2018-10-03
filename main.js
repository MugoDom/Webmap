var map;

require(["esri/map", "dojo/domReady!"], function(Map) {
map = new Map("map", {
  basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
  center: [32.969565, 0.0649221], // longitude, latitude
  zoom: 6
});
});
