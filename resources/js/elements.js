var web = {};
web.data = "" || {};
web.items= "" || {};


$("document").ready(function(){
    web.handlers();
    web.initialise();
})

web.initialise = function(){
web.items.makeMap();
web.items.sliders();
web.items.drawChart();

}

web.handlers=function(){


}


web.items.sliders = function(){
      $(function () {
                    $("#range0").ionRangeSlider({
                        hide_min_max: true,
                        keyboard: true,
                        min: 0,
                        max: 100,
                        from: 0,
                        to: 100,
                        type: 'double',
                        step: 1,
                        prefix: "",
                        grid: true
                    });

                });
                $(function () {
                    $("#range1").ionRangeSlider({
                        hide_min_max: true,
                        keyboard: true,
                        min: 0,
                        max: 100,
                        from: 0,
                        to: 100,
                        type: 'double',
                        step: 1,
                        prefix: "",
                        grid: true
                    });

                });
                  $(function () {
                    $("#range2").ionRangeSlider({
                        hide_min_max: true,
                        keyboard: true,
                        min: 0,
                        max: 100,
                        from: 0,
                        to: 100,
                        type: 'double',
                        step: 1,
                        prefix: "",
                        grid: true
                    });

                });
                  $(function () {
                    $("#range3").ionRangeSlider({
                        hide_min_max: true,
                        keyboard: true,
                        min: 0,
                        max: 100,
                        from: 0,
                        to: 100,
                        type: 'double',
                        step: 1,
                        prefix: "",
                        grid: true
                    });

                });
                  $(function () {
                    $("#range4").ionRangeSlider({
                        hide_min_max: true,
                        keyboard: true,
                        min: 0,
                        max: 100,
                        from: 0,
                        to: 100,
                        type: 'double',
                        step: 1,
                        prefix: "",
                        grid: true
                    });

                });
                  $(function () {
                    $("#range5").ionRangeSlider({
                        hide_min_max: true,
                        keyboard: true,
                        min: 0,
                        max: 100,
                        from: 0,
                        to: 100,
                        type: 'double',
                        step: 1,
                        prefix: "",
                        grid: true
                    });

                });
                  $(function () {
                    $("#range6").ionRangeSlider({
                        hide_min_max: true,
                        keyboard: true,
                        min: 0,
                        max: 100,
                        from: 0,
                        to: 100,
                        type: 'double',
                        step: 1,
                        prefix: "",
                        grid: true
                    });

                });
}


web.items.makeMap = function(){
    var map = L.map('map').setView([38.8, -70],4);

		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 4,
            minZoom: 4,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-20v6611k'
		}).addTo(map);

            $.each(superheroData,function(key,value){
                console.log(key + " " + value);
            var _count='<div>'+20+'</div>';
            var icon=L.divIcon({html:_count,className:"circle hero-sm icon point"});
            
            L.marker([value.Lat,value.Long], {icon: icon}).addTo(map);
            });
    
//            L.circle([33.7712,-111.3877], 100, {
//                color: 'red',
//                fillColor: 'red',
//                fillOpacity: 1.0,
//                content: "9"
//            }).bindPopup("karan").addTo(map);
//        L.marker([33.7712,-111.3877]).bindPopup($("#popparent").html()).addTo(map);
//        var style={};
//            style.margin_top=$('.leaflet-marker-pane').children('img').css("marginTop");
//            style.margin_left=$('.leaflet-marker-pane').children('img').css("margin-left");
//            style.transform_point=$('.leaflet-marker-pane').children('img').css("transform");
//        $('.leaflet-marker-pane').html("<div class='circle hero-sm icon point'>1</div>");
//        $('.leaflet-marker-pane').children('.point').css({"margin-top":style.margin_top,"margin-left":style.margin_left,"transform":style.transform_point});
		// control that shows state info on hover
		var info = L.control();

		info.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info');
			this.update();
			return this._div;
		};

		info.update = function (props) {
            if(props != undefined){
            $("#popparent").find("._location").html(props.name);
            }
            this._div.innerHTML = $("#popparent").html();
//			this._div.innerHTML = '<h4>US Superhero Density</h4>' +  (props ?
//				'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
//				: 'Hover over a points');
		};

		info.addTo(map);


		// get color depending on population density value
		function getColor(d) {
//			return d > 1000 ? 'red' :
//			       d > 500  ? 'red' :
//			       d > 200  ? 'red' :
//			       d > 100  ? 'red' :
//			       d > 50   ? 'red' :
//			       d > 20   ? 'red' :
			       return d > 10   ? 'orange' :
			                  'orange';
		}

		function style(feature) {
			return {
				weight: 2,
				opacity: 1,
				color: 'white',
				dashArray: '3',
				fillOpacity: 0.55,
				fillColor: getColor(feature.properties.density)
			};
		}

		function highlightFeature(e) {
			var layer = e.target;

			layer.setStyle({
				weight: 5,
				color: '#fff',
				dashArray: '',
				fillOpacity: 0.7
			});

			if (!L.Browser.ie && !L.Browser.opera) {
				layer.bringToFront();
			}

			info.update(layer.feature.properties);
		}

		var geojson;

		function resetHighlight(e) {
			geojson.resetStyle(e.target);
			info.update();
		}

		function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
		}

		function onEachFeature(feature, layer) {
			layer.on({
//				mouseover: highlightFeature,
//				mouseout: resetHighlight,
//				click: highlightFeature
			});
		}

		geojson = L.geoJson(statesData, {
			style: style,
			onEachFeature: onEachFeature
		}).addTo(map);

		map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');


		var legend = L.control({position: 'bottomleft'});

		legend.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
//				grades = [0, 10, 20, 50, 100, 200, 500, 1000],
                categories= ["Hero", "Villian", "Both"],
				labels = [],
                color=["rgb(27, 97, 249)","rgb(255, 60, 60)","rgb(165, 17, 165)"],
				from, to;
            
			for (var i = 0; i < categories.length; i++) {
//				from = grades[i];
//				to = grades[i + 1];
                labels.push('<i class="circle" style="background:' + color[i] + '"> </i><label>' + categories[i]+'</label>');
//				labels.push(
//					'<i style="background:' + getColor(from + 1) + '"></i> ' +
//					from + (to ? '&ndash;' + to : '+'));
			}
            div.innerHTML = "<div class='lead'>INDEX</div>";
			div.innerHTML = div.innerHTML+labels.join('<br>');

			return div;
		};

		legend.addTo(map);
}

web.items.drawChart = function(){

        $('.chart').horizBarChart({
          selector: '.bar2',
          speed: 1000
        });
}


//function css(a) {
//    var sheets = document.styleSheets, o = {};
//    for (var i in sheets) {
//        var rules = sheets[i].rules || sheets[i].cssRules;
//        for (var r in rules) {
//            if (a.is(rules[r].selectorText)) {
//                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
//            }
//        }
//    }
//    return o;
//}

//function css2json(css) {
//    var s = {};
//    if (!css) return s;
//    if (css instanceof CSSStyleDeclaration) {
//        for (var i in css) {
//            if ((css[i]).toLowerCase) {
//                s[(css[i]).toLowerCase()] = (css[css[i]]);
//            }
//        }
//    } else if (typeof css == "string") {
//        css = css.split("; ");
//        for (var i in css) {
//            var l = css[i].split(": ");
//            s[l[0].toLowerCase()] = (l[1]);
//        }
//    }
//    return s;
//}