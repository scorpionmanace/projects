var web = {};
web.initialise = "" || {};
web.handlers = "" || {};
web.action = "" || {};
web.data = "" || {};
web.items= "" || {};
web.data.superherodata;
web.data.info;
web.data.currentIndexes;
web.data.popdata = [];
web.data.currentcountindex='undefined';
web.data.currentindex='undefined';

var map

var markers = new L.LayerGroup();

web.data.sliderData =  {"Durability":{"from":0,"to":100},"Fighting":{"from":0,"to":100},"Speed":{"from":0,"to":100},"Energy":{"from":0,"to":100},"Strength":{"from":0,"to":100},"Intellect":{"from":0,"to":100}};

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
    
        $('body').delegate('.point','click',web.action.showStats);
        $('.point').hover(web.action.showStats,web.action.showStats);
        $('body').delegate('#navright','click',web.action.showNextCharacter);
        $('body').delegate('#navleft','click',web.action.ShowPrevCharacter);
        $('body').delegate('button[type=reset]','click',function(){
            var range=["range0","range1","range2","range3","range4","range5"];
            var slider;
            $.each(range,function(key,value){
            slider= $("#"+value).data("ionRangeSlider");
            slider.reset();
            });
        });
    
        $(document).delegate('body','click',function(e){
            e.stopPropagation();
            e.preventDefault;
            var template=$('.info.leaflet-control');
            if(template.children('#popsuper').hasClass('show') && !$(e.target).parent().hasClass('point') && !$(e.target).parents('.info').hasClass('leaflet-control')){
                template.children('#popsuper').removeClass('show hide').addClass('hide');
            }
        });

}


web.items.sliders = function(){

        var range=["range0","range1","range2","range3","range4","range5"];
        $.each(range,function(key,value){
            $("#"+value).ionRangeSlider({
                type: "double",
                min: 0,
                max: 100,
                from: 0,
                to: 100,
                grid:true,
                
                onChange: function(data){
                    var template=$('.info.leaflet-control');
                    template.children('#popsuper').removeClass('show hide').addClass('hide');
                    console.log(data);
                    var _this=$("#"+value);
                    var _check=_this.parent().find('input[type="checkbox"]');
                    var from =data.from;
                    var to=data.to;
                    web.data.sliderData;
                    if(_check.is(":checked")){
                    web.data.sliderData[_this.data('power')].from=from;
                       web.data.sliderData[_this.data('power')].to=to;
                        web.items.formData();
                    }
                },
                onUpdate: function(data){
                    var template=$('.info.leaflet-control');
                    template.children('#popsuper').removeClass('show hide').addClass('hide');
                    var _this=$("#"+value);
                    var _check=_this.parent().find('input[type="checkbox"]');
                    var from =data.from;
                    var to=data.to;
                    web.data.sliderData;
                    if(_check.is(":checked")){
                    web.data.sliderData[_this.data('power')].from=from;
                       web.data.sliderData[_this.data('power')].to=to;
                        web.items.formData();
                    }
                }
                });
            });
    }



web.items.formData = function(){
    var _data=web.data.superherodata;
    var _sliderData=web.data.sliderData;
    var _newData = {    "NY":{"count":0,"hero":0,"villian":0},"OH":{"count":0,"hero":0,"villian":0},"CA":{"count":0,"hero":0,"villian":0},"AZ":{"count":0,"hero":0,"villian":0},"NJ":{"count":0,"hero":0,"villian":0},"KS":{"count":0,"hero":0,"villian":0},"MA":{"count":0,"hero":0,"villian":0},"IA":{"count":0,"hero":0,"villian":0},"IL":{"count":0,"hero":0,"villian":0},"FL":{"count":0,"hero":0,"villian":0},"CT":{"count":0,"hero":0,"villian":0}};
    
    var powervalue;
    
    var check=1;
    var type="";
    var powers={ 
        "Strength" :0,
        "Speed":0,
        "Durability":0,
        "Fighting":0,
        "Energy":0,
        "Intellect":0
    };
    
    var isHero=$("#heroChar").is(":checked");
    var isVillian=$("#villianChar").is(":checked");
    var isBoth = (isHero && isVillian) || (!isHero && !isVillian);
    
    $.each(_data,function(key,value){
        check=1;
        $.each(powers,function(powerkey,power){
            powervalue=parseInt(value[powerkey]);
            if(powervalue<=_sliderData[powerkey].to && powervalue>=_sliderData[powerkey].from){
                powers[powerkey]=1;
            }
            else{
                powers[powerkey]=0;
            }
        });
        
        $.each(powers,function(powerkey,power){
            if(power===0){
                check=0;
            }
        });
        
        if(check===1){
            _newData[value.State].Lat=value.Lat;
            _newData[value.State].Long=value.Long;
             if(typeof _newData[value.State].ids === 'undefined'){
                _newData[value.State].ids = "";
            }
            if(isBoth){
                _newData[value.State].count++;
                _newData[value.State].ids+= value.id +',';
                if(value.Alignment==="good"){
                _newData[value.State].hero++;
                }   else if(value.Alignment==="bad" ){
                _newData[value.State].villian++;
                } 
            }
            else if(isHero){
                if(value.Alignment==="good"){
                    _newData[value.State].count++;
                    _newData[value.State].hero++;
                    _newData[value.State].ids+= value.id +',';
                }
            }
            else if(isVillian){
                if(value.Alignment==="bad"){
                _newData[value.State].count++;
                _newData[value.State].villian++;
                _newData[value.State].ids+= value.id +',';
                }
            }   
        }
    });
    web.data.info={};
    web.data.info=_newData;
    web.items.redrawMap();
}


web.items.makeMap = function(){
    map = L.map('map').setView([38.8, -70],4);

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
               var marker= L.marker([value.Lat,value.Long], {icon: icon});
                markers.addLayer(marker);
                markers.addTo(map);
                
            });
            });
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

web.items.redrawMap =function(){

            var size;
            var _locitems=web.data.info;
            var marker
            
            
            markers.clearLayers();
            $.each(_locitems,function(key,value){
                if(typeof value.Lat != 'undefined' && value.count>0){
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
                    marker= L.marker([value.Lat,value.Long], {icon: icon});
                    markers.addLayer(marker);
                }
            });
                markers.addTo(map);
}
    


web.action.showStats = function(){
    var _this=$(this);
    var indexes=_this.children('div').data("items").split(",");
    indexes.pop();
    console.log(indexes);
    web.data.currentIndexes=indexes;
    web.items.performDataFetch(indexes);
    web.data.currentindex=0;
    web.data.currentcountindex=0;
    web.items.createTemplate(web.data.currentindex,web.data.currentcountindex);
}
web.items.performDataFetch = function(indexes){
    web.data.popdata.length=0;
    $.each(indexes,function(key,index){
        web.data.popdata.push(web.data.superherodata[index-1]);
    });
}
web.items.createTemplate = function(index,previouscount){
var template=$('.info.leaflet-control');
    template.children('#popsuper').removeClass('hide').addClass('show');
var powers=[ 
    "Strength",
    "Speed",
    "Durability",
    "Fighting",
    "Energy",
    "Intellect"
];
var data=web.data.popdata[index];
    template.find('#navright').removeClass('active').addClass(previouscount+1===web.data.popdata.length?'':'active');
    template.find('#navleft').removeClass('active').addClass(previouscount+1===1?'':'active');
    template.find('._current-count').html(previouscount+1);
    template.find('._total-count').html(web.data.popdata.length);
    template.find('#charname').children('label').html(data.Name);
    template.find('#charname').children('.icon').removeClass('villian-mm hero-mm').addClass(data.Alignment === 'good'? 'hero-mm': 'villian-mm');
    template.find('._alias').html(data.Name);
    template.find('._location').html(data.Location);
    template.find('._image').attr('src',data.CharImg);
    $.each(powers, function(key,power){
        template.find('.'+power).children('.bar2').data('number',data[power]).css({"width":data[power]+"%"});
        template.find('.'+power).children('.number').html(data[power]).css({"left":data[power]+"%"});
        template.find('.'+power).children('.bar2').data('number',data[power]).css({"width":data[power]+"%"});
    })
}


web.action.ShowPrevCharacter = function(){
    var template=$('.info.leaflet-control');
    template.find('#navleft').removeClass('active').addClass('active');
    if(web.data.currentcountindex===0){
        template.find('#navleft').removeClass('active');
    }
    else if(web.data.currentcountindex <web.data.popdata.length){
        web.items.createTemplate(web.data.currentcountindex-1,web.data.currentcountindex-1);
        web.data.currentcountindex--;
    }
}
web.action.showNextCharacter = function(){
    var template=$('.info.leaflet-control');
    template.find('#navright').removeClass('active').addClass('active');
    if(web.data.currentcountindex===web.data.popdata.length-1){
        template.find('#navright').removeClass('active');
    }
    else if(web.data.currentcountindex <web.data.popdata.length-1){
        web.items.createTemplate(web.data.currentcountindex+1,web.data.currentcountindex+1);
        web.data.currentcountindex++;
    }

}
