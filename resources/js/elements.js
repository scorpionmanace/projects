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
    var map = L.map('map').setView([36.8, -76],4);

		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 4,
            minZoom: 4,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-20v6611k'
		}).addTo(map);


		// control that shows state info on hover
		var info = L.control();

		info.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info');
			this.update();
			return this._div;
		};

		info.update = function (props) {
			this._div.innerHTML = '<h4>US Superhero Density</h4>' +  (props ?
				'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
				: 'Hover over a points');
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
				mouseover: highlightFeature,
				mouseout: resetHighlight
//				click: zoomToFeature
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
                color=["rgb(90, 90, 239)","rgb(255, 60, 60)","rgb(165, 17, 165)"],
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