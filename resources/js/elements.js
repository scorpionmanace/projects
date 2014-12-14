var web = {};
web.initialise = "" || {};
web.handlers = "" || {};
web.action = "" || {};
web.data = "" || {};
web.items= "" || {};


$("document").ready(function(){
    web.handlers();
    web.initialise();
})

web.initialise = function(){
    
web.data.superherodata=superheroData;
web.items.makeMap();
web.items.sliders();
web.items.drawChart();

}

web.handlers=function() {
             var $aaa = $("#heroChar");


            $aaa.on("change", function () {
                var $this = $(this);

               if($('._check_hero').is(":checked")) {
                    console.log($('._check_hero').val());

               }
                else{
                   console.log("hero is unchecked");
               }
            });

      var $bbb = $("#villainChar");


            $bbb.on("change", function () {
                var $this = $(this);

               if($('._check_villain').is(":checked")) {
                    console.log($('._check_villain').val());

               }
                else{
                   console.log("villain is unchecked");
               }
            });
    
    
        $('body').delegate('.point','click',web.action.showStats);


}




web.items.sliders = function(){

          var $range = $("#range0");

            $range.ionRangeSlider({
                type: "double",
                min: 0,
                max: 100,
                from: 20,
                to: 80,
                grid:true
            });

            $range.on("change", function () {
                var $this = $(this),
                    from = $this.data("from"),
                    to = $this.data("to");

               if($('._check_durability').is(":checked")) {
                    console.log($('._check_durability').val());
                   console.log("durability: " + from + " - " + to);
               }
                else{
                   console.log("durability is unchecked");
               }
            });


            var $range = $("#range1");
            $range.ionRangeSlider({
                type: "double",
                min: 0,
                max: 100,
                from: 20,
                to: 80,
                grid:true
            });

            $range.on("change", function () {
                var $this = $(this),
                    from = $this.data("from"),
                    to = $this.data("to");
                if($('._check_fighting').is(":checked")) {
                    console.log($('._check_fighting').val());
                    console.log("fighting: " + from + " - " + to);
                  }
                  else{
                   console.log("fighting is unchecked");
                    }

            });

          var $range = $("#range2");

            $range.ionRangeSlider({
                type: "double",
                min: 0,
                max: 100,
                from: 20,
                to: 80,
                grid:true
            });

            $range.on("change", function () {
                var $this = $(this),
                    from = $this.data("from"),
                    to = $this.data("to");
                 if($('._check_speed').is(":checked")) {
                    console.log($('._check_speed').val());
                    console.log("speed: " + from + " - " + to);
                  }
                  else{
                   console.log("speed is unchecked");
                    }

            });

          var $range = $("#range3");

            $range.ionRangeSlider({
                type: "double",
                min: 0,
                max: 100,
                from: 20,
                to: 80,
                grid:true
            });

            $range.on("change", function () {
                var $this = $(this),
                    from = $this.data("from"),
                    to = $this.data("to");
                if($('._check_energy').is(":checked")) {
                    console.log($('._check_energy').val());
                    console.log("energy: " + from + " - " + to);
                  }
                  else{
                   console.log("energy is unchecked");
                    }
            });

          var $range = $("#range4");

            $range.ionRangeSlider({
                type: "double",
                min: 0,
                max: 100,
                from: 20,
                to: 80,
                grid:true
            });

            $range.on("change", function () {
                var $this = $(this),
                    from = $this.data("from"),
                    to = $this.data("to");

               if($('._check_strength').is(":checked")) {
                    console.log($('._check_strength').val());
                    console.log("strength: " + from + " - " + to);
                  }
                  else{
                   console.log("strength is unchecked");
                    }
            });

          var $range = $("#range5");

            $range.ionRangeSlider({
                type: "double",
                min: 0,
                max: 100,
                from: 20,
                to: 80,
                grid:true
            });

            $range.on("change", function () {
                var $this = $(this),
                    from = $this.data("from"),
                    to = $this.data("to");

                if($('._check_intellect').is(":checked")) {
                    console.log($('._check_intellect').val());
                    console.log("intellect: " + from + " - " + to);
                  }
                  else{
                   console.log("intellect is unchecked");
                    }
            });


               /*     $("#range0").ionRangeSlider({
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
                    });*/

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
    
        $(function(){
            var icon;
//            var _characters = [];
            var _locitems=loc_items;
            $.each(superheroData,function(key,value){
                console.log(key + " " + value);
            _locitems[value.State].count++;
                _locitems[value.State].Lat=value.Lat;
                _locitems[value.State].Long=value.Long;
                if(typeof _locitems[value.State].characters === "undefined"){
                    _locitems[value.State].characters=[];
                }
                _locitems[value.State].characters.push(value.Name);
                if(typeof _locitems[value.State].ids === "undefined"){
                    _locitems[value.State].ids="";
                }
                _locitems[value.State].ids=_locitems[value.State].ids+value.id+",";

            if(value.Alignment ==="good"){
                _locitems[value.State].hero++;
//                icon=L.divIcon({html:_count,className:"circle hero-sm icon point"});
            }
            else if(value.Alignment==="bad"){
                _locitems[value.State].villian++;
//                icon=L.divIcon({html:_count,className:"circle villian-sm icon point"});    
            }
            web.data.info=_locitems;    
            
//            L.marker([value.Lat,value.Long], {icon: icon}).addTo(map);
            });
            
        });
    
    
            $(function(){
            var size;
            var _locitems=web.data.info;
            $.each(_locitems,function(key,value){
                size=value.count*2 +20;
                if(value.hero>0 && value.villian>0){
                    icon=L.divIcon({html:"<div data-items='"+value.ids+"'>"+value.count+"</div>",className:"circle both-sm icon point",iconSize: L.point(size, size)});
                }
                else if(value.hero>0){
                    icon=L.divIcon({html:"<div data-items='"+value.ids+"'>"+value.count+"</div>",className:"circle hero-sm icon point",iconSize : L.point(size, size)});
                }
                else{
                    icon=L.divIcon({html:"<div data-items='"+value.ids+"'>"+value.count+"</div>",className:"circle villian-sm icon point",iconSize : L.point(size, size)});
                }
               L.marker([value.Lat,value.Long], {icon: icon}).addTo(map); 
//                $('div[class*="hero-"]').css({"width":value.count*5+" !important","height":value.count*5+ "!important"});
//                $('div[class*="villian-"]').css({"width":value.count*5+" !important","height":value.count*5+ "!important"});
//                $('div[class*="both-"]').css({"width":value.count*5+" !important","height":value.count*5+ "!important"});
//                $('.point.icon').css({"width":value.count*5+" !important","height":value.count*5+ "!important"});
            });
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


web.action.showStats = function(){
    var _this=$(this);
    var indexes=_this.children('div').data("items").split(",");
    indexes.pop();
    console.log(indexes);
    
    var template=$('#popparent').html();

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