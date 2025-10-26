var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_plr2_1 = new ol.format.GeoJSON();
var features_plr2_1 = format_plr2_1.readFeatures(json_plr2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plr2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plr2_1.addFeatures(features_plr2_1);
var lyr_plr2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plr2_1, 
                style: style_plr2_1,
                popuplayertitle: 'plr2',
                interactive: true,
    title: 'plr2<br />\
    <img src="styles/legend/plr2_1_0.png" /> AICKARAKKONAM<br />\
    <img src="styles/legend/plr2_1_1.png" /> ARAMPUNNA<br />\
    <img src="styles/legend/plr2_1_2.png" /> ASHTAMANGALAM<br />\
    <img src="styles/legend/plr2_1_3.png" /> BHARANIKKAVU<br />\
    <img src="styles/legend/plr2_1_4.png" /> CHALACODU<br />\
    <img src="styles/legend/plr2_1_5.png" /> CHEMMANTHUR<br />\
    <img src="styles/legend/plr2_1_6.png" /> COLLEGE<br />\
    <img src="styles/legend/plr2_1_7.png" /> GRACING BLOCK<br />\
    <img src="styles/legend/plr2_1_8.png" /> HIGH SCHOOL<br />\
    <img src="styles/legend/plr2_1_9.png" /> KAKKODU<br />\
    <img src="styles/legend/plr2_1_10.png" /> KALANGUMMUKAL<br />\
    <img src="styles/legend/plr2_1_11.png" /> KALAYANADU<br />\
    <img src="styles/legend/plr2_1_12.png" /> KALLAR<br />\
    <img src="styles/legend/plr2_1_13.png" /> KANJIRAMALA<br />\
    <img src="styles/legend/plr2_1_14.png" /> KARAKKADU<br />\
    <img src="styles/legend/plr2_1_15.png" /> KELANKAVU<br />\
    <img src="styles/legend/plr2_1_16.png" /> KOMALAMKUNNU<br />\
    <img src="styles/legend/plr2_1_17.png" /> KUTHIRACHIRA<br />\
    <img src="styles/legend/plr2_1_18.png" /> MANIYAR<br />\
    <img src="styles/legend/plr2_1_19.png" /> MUSSAVARI<br />\
    <img src="styles/legend/plr2_1_20.png" /> MYLACKAL<br />\
    <img src="styles/legend/plr2_1_21.png" /> NEDUMKAYAM<br />\
    <img src="styles/legend/plr2_1_22.png" /> NELLIPPALLY<br />\
    <img src="styles/legend/plr2_1_23.png" /> NETHAJI<br />\
    <img src="styles/legend/plr2_1_24.png" /> PAPERMILL<br />\
    <img src="styles/legend/plr2_1_25.png" /> PARAVATTOM<br />\
    <img src="styles/legend/plr2_1_26.png" /> PATHEKKAR<br />\
    <img src="styles/legend/plr2_1_27.png" /> PLACHERY<br />\
    <img src="styles/legend/plr2_1_28.png" /> POWERHOUSE<br />\
    <img src="styles/legend/plr2_1_29.png" /> SASTHAMKONAM<br />\
    <img src="styles/legend/plr2_1_30.png" /> THAMARAPPALLY<br />\
    <img src="styles/legend/plr2_1_31.png" /> THOLIKKODU<br />\
    <img src="styles/legend/plr2_1_32.png" /> THUMPODU<br />\
    <img src="styles/legend/plr2_1_33.png" /> TOWN<br />\
    <img src="styles/legend/plr2_1_34.png" /> VALACKODU<br />\
    <img src="styles/legend/plr2_1_35.png" /> VILAKKUVETTOM<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_plr2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_plr2_1];
lyr_plr2_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_plr2_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_plr2_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - visible with data', 'Lsgd_Type': 'inline label - visible with data', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_plr2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});