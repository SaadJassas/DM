ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([3839911.423700, 1814998.785400, 6196706.517000, 3783330.798400]);
var wms_layers = [];

var format_Areas_0 = new ol.format.GeoJSON();
var features_Areas_0 = format_Areas_0.readFeatures(json_Areas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_0.addFeatures(features_Areas_0);
var lyr_Areas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_0, 
                style: style_Areas_0,
                popuplayertitle: "Areas",
                interactive: true,
    title: 'Areas<br />\
    <img src="styles/legend/Areas_0_0.png" /> 174172 - 260492<br />\
    <img src="styles/legend/Areas_0_1.png" /> 260492 - 416126<br />\
    <img src="styles/legend/Areas_0_2.png" /> 416126 - 786617<br />\
    <img src="styles/legend/Areas_0_3.png" /> 786617 - 1869515<br />\
    <img src="styles/legend/Areas_0_4.png" /> 1869515 - 3983358<br />'
        });

lyr_Areas_0.setVisible(true);
var layersList = [lyr_Areas_0];
lyr_Areas_0.set('fieldAliases', {'PROV_NAME_': 'PROV_NAME_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'men': 'men', 'women': 'women', 'م': 'م', 'men2': 'men2', 'women_1': 'women_1', 'area': 'area', });
lyr_Areas_0.set('fieldImages', {'PROV_NAME_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'men': 'TextEdit', 'women': 'TextEdit', 'م': 'TextEdit', 'men2': 'TextEdit', 'women_1': 'TextEdit', 'area': 'TextEdit', });
lyr_Areas_0.set('fieldLabels', {'PROV_NAME_': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'men': 'inline label - always visible', 'women': 'inline label - always visible', 'م': 'hidden field', 'men2': 'hidden field', 'women_1': 'hidden field', 'area': 'inline label - always visible', });
lyr_Areas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});