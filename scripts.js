$( document ).ready(function() {
	var check = 0;
	var value = "";
	var favArr = [];
	var playNow = "";
	new function(){

		readFav();

		var counter = 0;
		var addressUrl = window.location.href;
		for(var i = 0; i < addressUrl.length; i++){
			counter ++;
			if (addressUrl[i]=='?'){
				check = 1;
				break;
			}
		}

		if(check == 1){
			counter +=4;
			for(counter; counter < addressUrl.length; counter++){

				value+=addressUrl[counter];

			}
			value = value.replace(/\+/g, " ");
			value=value.toLowerCase();
			


		}


	} 






			



var music = document.getElementById('music'); // id for audio element

  var pButton = document.getElementById('pButton'); // play button


  //Play and Pause
  function play() {

    // start music
    if (music.paused) {
    	music.play();
      // remove play, add pause
      pButton.className = "";
      pButton.className = "pause";
    } else { // pause music
    	music.pause();
      // remove pause, add play
      pButton.className = "";
      pButton.className = "play";
  }
}

$("#pButton").click(function(){
	play();
});

$("#vol").change(function(){
	changevolume(this.value);
});



function changevolume(amount) {
	var audioobject = document.getElementsByTagName("audio")[0];  
	audioobject.volume = 1-amount;

}









L.mapbox.accessToken = 'pk.eyJ1IjoiZGF2aWRoYWxmb24iLCJhIjoibzZhZTlJdyJ9.ab2pmxikBxsmsWEvbfYVfw';

var geojson = [{

	"features":[{"type":"Feature","properties":{"Continent":"Asia","Country":"Israel","City":"Rishon LeTzion","Station":"Lev Hamedina","Url":"http://213.8.143.168/91fmAudio","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliry9"},"geometry":{"coordinates":[34.774728,31.991636],"type":"Point"},"id":"ciaawm43y05fvjgm3f5k6tzyq"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Afghanistan","City":"Kabul","Station":"","Url":"http://50.117.26.26:3953/;stream.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawlirx0"},"geometry":{"coordinates":[69.166667,34.533333],"type":"Point"},"id":"ciaawm44005fwjgm3nqamljhf"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Bangladesh","City":"Dhaka","Station":"Hello Danka Live","Url":"http://184.154.145.114:8000/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliry2"},"geometry":{"coordinates":[90.416256,23.780583],"type":"Point"},"id":"ciaawm44205fxjgm37bs6p8r7"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Hong Kong","City":"Kowloon","Station":"RTHK Radio 5","Url":"http://202.177.192.119/radio5","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliry3"},"geometry":{"coordinates":[114.181043,22.341834],"type":"Point"},"id":"ciaawm44305fyjgm3igm7airg"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Iran","City":"Tehran","Station":"Radio Ava Film","Url":"http://38.99.146.102:8000/avafilm.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliry4"},"geometry":{"coordinates":[51.423056,35.696111],"type":"Point"},"id":"ciaawm44505fzjgm3sda12o04"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Iran","City":"Tehran","Station":"Radio Rerza","Url":"http://38.99.146.102:8000/reza.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliry5"},"geometry":{"coordinates":[51.348724,35.729791],"type":"Point"},"id":"ciaawm44605g0jgm3551nf1i5"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Iraq","City":"Baghdad","Station":"Radio Nawa","Url":"http://nawaradio.primcast.com:4098/;stream.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliry6"},"geometry":{"coordinates":[44.422,33.325],"type":"Point"},"id":"ciaawm44705g1jgm3zj1tkt3h"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Israel","City":"Tel Aviv","Station":"100 FM","Url":"http://213.8.143.168/100Israeli","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliry7"},"geometry":{"coordinates":[34.781767,32.085299],"type":"Point"},"id":"ciaawm44905g2jgm3utcrr88y"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Israel","City":"Tel Aviv","Station":"Noshmim Mizrahit","Url":"http://www.rs.mizrahit.co.il:7777/;stream/1","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliry8"},"geometry":{"coordinates":[34.769668,32.067737],"type":"Point"},"id":"ciaawm44a05g3jgm3t79z8yp2"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Afghanistan","City":"Kabul","Station":"BFBS","Url":"http://icy-e-03-boh.sharp-stream.com/ssvcbfbs9.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliry1"},"geometry":{"coordinates":[69.1667,34.533333],"type":"Point"},"id":"ciaawm44c05g4jgm3yi9cuk50"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Japan","City":"Tokyo","Station":"Asia DREAM Radio","Url":"http://streaming.radionomy.com/AsiaDREAMRadioJapan","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawlirya"},"geometry":{"coordinates":[139.691706,35.689487],"type":"Point"},"id":"ciaawm44d05g5jgm3uzoswz8q"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Jordan","City":"Amman","Station":"Radio Haya","Url":"http://stream.purecore.net:8000/;?1396790272093.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawliryb"},"geometry":{"coordinates":[35.945695,31.956578],"type":"Point"},"id":"ciaawm44f05g6jgm3qzp2xfz9"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Kazakhstan","City":"Almaty","Station":"Energy FM","Url":"http://live26.kiwi.kz:8000/energyfm?","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawlirzc"},"geometry":{"coordinates":[76.932232,43.251901],"type":"Point"},"id":"ciaawm44g05g7jgm3wn2fgef9"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Lebanon","City":"Beirut","Station":"Sawt Al Farah","Url":"http://209.15.226.17:9036/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawlirzd"},"geometry":{"coordinates":[35.495479,33.888628],"type":"Point"},"id":"ciaawm44i05g8jgm3aehu23dw"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Lebanon","City":"Beirut","Station":"Voix Du Liban","Url":"http://209.15.226.17:9054/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawlirze"},"geometry":{"coordinates":[35.48938,33.888105],"type":"Point"},"id":"ciaawm44j05g9jgm3edoglvux"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Malaysia","City":"Kuching","Station":"Red FM","Url":"http://starrfm.rastream.com/starrfm-redfm","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawlirzf"},"geometry":{"coordinates":[110.34087,1.555017],"type":"Point"},"id":"ciaawm44l05gajgm3qsyxglpf"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Mongolia","City":"Ulaanbaatar","Station":"MGLRADIO","Url":"http://50.7.76.251:8080/;stream.mp3?1423349710959.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawlirzg"},"geometry":{"coordinates":[106.92,47.92],"type":"Point"},"id":"ciaawm44m05gbjgm3ak3m6c3l"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Philippines","City":"Manila","Station":"Rakista Radio","Url":"http://icecast.eradioportal.com:8000/yesfm_manila","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-iaawlirzh"},"geometry":{"coordinates":[120.984219,14.599512],"type":"Point"},"id":"ciaawm44o05gcjgm3epprdhrg"}],"id":"davidhalfon.m49k783f"
}];

var map1 = L.mapbox.map('map', 'ann1990a.majoi7jh');
var map = map1.featureLayer.setGeoJSON(geojson)


locations = L.mapbox.featureLayer().addTo(map);
locations.setGeoJSON(geojson);



locations.eachLayer(function(locale) {

	var prop = locale.feature.properties;
	locale.setIcon(L.icon({
		iconUrl: './icon.png',
		
	}));




		locale.on('click', function(e) {
			$("#music").attr("src", prop.Url);
			$(".player").show();
			play();

			//$("#1").html("Station: "+prop.Station);
			//$("#2").html("Country: "+prop.Country);
			//$("#3").html("City: " +prop.City);

			map1.setView(locale.getLatLng(), 4);
			playNow = prop.Station;


			$(".david").show();




		});  	


		$( locale).hover(


			function () {
				$(".info").fadeIn(300);
				$("#a").html(prop.Station);
				$("#b").html(prop.Country);
				$("#c").html(prop.City);
			},
			function () {
				$(".info").fadeOut();
			}

			);

	});




 


			new function(){ // search handler

				var results = [];
				var i = 0;
				if(check == 1){ // if value has been send from user


					for(i; i < geojson[0].features.length; i++){	

						var lowerStringCountry = geojson[0].features[i].properties.Country.toLowerCase();
						var lowerStringCity = geojson[0].features[i].properties.City.toLowerCase();
						var lowerStringStation = geojson[0].features[i].properties.Station.toLowerCase();

						if (value == lowerStringCountry || value == lowerStringCity || value == lowerStringStation){
							results.push(i);
						}
					}
					if (results.length == 1){


						$("#music").attr("src", geojson[0].features[results[0]].properties.Url);
						$(".player").show();
						play();
						playNow = geojson[0].features[results[0]].properties.Station;

						map1.setView([geojson[0].features[results[0]].geometry.coordinates[1]+0, geojson[0].features[results[0]].geometry.coordinates[0]+0], 4);



					}
					else if (results.length > 1){


						map1.setView([geojson[0].features[results[0]].geometry.coordinates[1]+0, geojson[0].features[results[0]].geometry.coordinates[0]+0], 4);


					}

					else alert('No matches');
				}
			}
			




			

			$(function() { // AutoComplete



				var searchArray = [];
				var j = 0;

				while(j < geojson[0].features.length){

				 searchArray.push(geojson[0].features[j].properties.Country);
				 searchArray.push(geojson[0].features[j].properties.City);
				 searchArray.push(geojson[0].features[j].properties.Station);


				 j++;
			}
				var uniqueSearchArray = []; 	// Remove Duplicates
				$.each(searchArray, function(i, el){
 			   if($.inArray(el, uniqueSearchArray) === -1) uniqueSearchArray.push(el);
				});
				
				$( "#tags" ).autocomplete({

					source: uniqueSearchArray
				});
			});




			
			

			$("#add").click(function(){
				var flag = 0;
				for (var i=0; i<favArr.length; i++){
					if (favArr[i] == playNow){
						flag = 1;
						break;
					}
				}

				if (flag == 0){ 
				favArr.push(playNow);
				localStorage.setItem('fav', JSON.stringify(favArr));
				$('<li />', {html: playNow, id: playNow}).appendTo('ul.list');

				

			}

			});


	

			$("#sub").click(function(){



				alert($("#"+playNow).attr('id'));
				$("#"+playNow).remove();

			});

			$("#all").click(function(){
				favArr = [];
				localStorage.setItem('fav', JSON.stringify(favArr));
				$(".list").html("");

			});
			
			



			 function readFav(){	

			 	favArr = JSON.parse(localStorage.getItem('fav'));
				for (var i=0; i<favArr.length; i++){		// Favorite list
				$('<li />', {html: favArr[i]}).appendTo('ul.list');
				}

			}



			

		
		});