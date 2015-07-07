$( document ).ready(function() {
	var check = 0;
	var value = "";
	var favArr = [];
	var playNow = "";
	var globalVar = "";
	delCheck = 0;
	var playNowCountry="";
	var playNowCity="";
	var beforeLocale;
	var currentLocale;
	var localeCheck=0;
	var screenHeight = screen.height;
	var screenWidth = screen.width;
	var myURL = "www.david-halfon.com/worldRadio";
	var newURL = "";
	var playCheck=0;




	new function(){

		if (screenHeight != 800 && screenWidth != 1280){
	
			var newHeight = ((screenHeight-650)/2);

			var newWidth = ((screenWidth-590)/2);
			$("#welcome").css({top: newHeight, left: newWidth});


		}


		if (localStorage.getItem('fav') != null) {
			readFav();
		}
		

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
		else{$("#welcome").fadeIn(300);}


	} 










var music = document.getElementById('music'); // id for audio element

  var pButton = document.getElementById('pButton'); // play button


  //Play and Pause
  function play() {
  	

    // start music
    if (music.paused) {
    	playCheck = 1;
    	music.play();
      // remove play, add pause
      pButton.className = "";
      pButton.className = "pause";
    } else { // pause music
    	music.pause();
    	playCheck = 0;
      // remove pause, add play
      pButton.className = "";
      pButton.className = "play";
  }
}

$("#pButton").click(function(){
	if (playCheck == 1){
					
					currentLocale.setIcon(L.icon({
						iconUrl: './stoping.png',
						
					 }));
				}

				else{

					currentLocale.setIcon(L.icon({
						iconUrl: './stoping.png',
						
					 }));

				}

	play();
});

$("#vol").change(function(){
	changevolume(this.value);
});



function changevolume(amount) {
	var audioobject = document.getElementsByTagName("audio")[0];  
	audioobject.volume = amount;

}




L.mapbox.accessToken = 'pk.eyJ1IjoiZGF2aWRoYWxmb24iLCJhIjoibzZhZTlJdyJ9.ab2pmxikBxsmsWEvbfYVfw';

var geojson = [{

	"features":[{"type":"Feature","properties":{"Continent":"Europe","Country":"Spain","City":"Barcelona","Station":"Radio TeleTaxi","Url":"http://195.10.10.225/gtt/radioteletaxi.mp3?","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mz"},"geometry":{"coordinates":[2.208244,41.450388],"type":"Point"},"id":"cibq75mwt0154ngmau3npf324"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Afghanistan","City":"Kabul","Station":"","Url":"http://50.117.26.26:3953/;stream.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l0"},"geometry":{"coordinates":[69.166667,34.533333],"type":"Point"},"id":"cibq75mwu0155ngmane05h0kv"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Bangladesh","City":"Dhaka","Station":"Hello Danka Live","Url":"http://184.154.145.114:8000/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l2"},"geometry":{"coordinates":[90.416256,23.780583],"type":"Point"},"id":"cibq75mwv0156ngma7ymlzihk"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Hong Kong","City":"Kowloon","Station":"RTHK Radio 5","Url":"http://202.177.192.119/radio5","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l3"},"geometry":{"coordinates":[114.181043,22.341834],"type":"Point"},"id":"cibq75mwv0157ngmaxb2fdr4v"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Iran","City":"Tehran","Station":"Radio Ava Film","Url":"http://38.99.146.102:8000/avafilm.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l4"},"geometry":{"coordinates":[51.423056,35.696111],"type":"Point"},"id":"cibq75mww0158ngmay0ll1a6r"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Iran","City":"Tehran","Station":"Radio Rerza","Url":"http://38.99.146.102:8000/reza.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l5"},"geometry":{"coordinates":[51.348724,35.729791],"type":"Point"},"id":"cibq75mwx0159ngma6edetimr"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Iraq","City":"Baghdad","Station":"Radio Nawa","Url":"http://nawaradio.primcast.com:4098/;stream.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l6"},"geometry":{"coordinates":[44.422,33.325],"type":"Point"},"id":"cibq75mwx015angmauqe3mlc7"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Israel","City":"Tel Aviv","Station":"100 FM","Url":"http://213.8.143.168/100Israeli","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l7"},"geometry":{"coordinates":[34.781767,32.085299],"type":"Point"},"id":"cibq75mwy015bngmaxcxq7nip"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Israel","City":"Tel Aviv","Station":"Noshmim Mizrahit","Url":"http://www.rs.mizrahit.co.il:7777/;stream/1","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l8"},"geometry":{"coordinates":[34.769668,32.067737],"type":"Point"},"id":"cibq75mwy015cngmasbkecnzq"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Israel","City":"Rishon LeTsiyon","Station":"Radio Lev Hamedina","Url":"http://213.8.143.168/91fmAudio","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l9"},"geometry":{"coordinates":[34.774728,31.991636],"type":"Point"},"id":"cibq75mwz015dngma949hp2yz"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Japan","City":"Tokyo","Station":"Asia DREAM Radio","Url":"http://streaming.radionomy.com/AsiaDREAMRadioJapan","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9la"},"geometry":{"coordinates":[139.691706,35.689487],"type":"Point"},"id":"cibq75mwz015engma3yoaf4uy"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Jordan","City":"Amman","Station":"Radio Haya","Url":"http://stream.purecore.net:8000/;?1396790272093.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9lb"},"geometry":{"coordinates":[35.945695,31.956578],"type":"Point"},"id":"cibq75mx0015fngmav63lhffk"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Kazakhstan","City":"Almaty","Station":"Energy FM","Url":"http://live26.kiwi.kz:8000/energyfm?","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9lc"},"geometry":{"coordinates":[76.932232,43.251901],"type":"Point"},"id":"cibq75mx0015gngmaedhq2sxa"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Lebanon","City":"Beirut","Station":"Sawt Al Farah","Url":"http://209.15.226.17:9036/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9ld"},"geometry":{"coordinates":[35.495479,33.888628],"type":"Point"},"id":"cibq75mx1015hngmae3t6793t"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Lebanon","City":"Beirut","Station":"Voix Du Liban","Url":"http://209.15.226.17:9054/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9le"},"geometry":{"coordinates":[35.48938,33.888105],"type":"Point"},"id":"cibq75mx1015ingmahnfdk0lp"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Malaysia","City":"Kuching","Station":"Red FM","Url":"http://starrfm.rastream.com/starrfm-redfm","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9lf"},"geometry":{"coordinates":[110.34087,1.555017],"type":"Point"},"id":"cibq75mx2015jngmaq18n5va2"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Mongolia","City":"Ulaanbaatar","Station":"MGLRADIO","Url":"http://50.7.76.251:8080/;stream.mp3?1423349710959.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9lg"},"geometry":{"coordinates":[106.92,47.92],"type":"Point"},"id":"cibq75mx4015kngma3ypbou1q"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Philippines","City":"Manila","Station":"Rakista Radio","Url":"http://icecast.eradioportal.com:8000/yesfm_manila","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9lh"},"geometry":{"coordinates":[120.984219,14.599512],"type":"Point"},"id":"cibq75mx4015lngmat3w4ovhw"},{"type":"Feature","properties":{"Continent":"United States","Country":"Alabama","City":"Tuscaloosa","Station":"WUAL 91.5 FM","Url":"http://130.160.176.235:8800/hd1hi","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9li"},"geometry":{"coordinates":[-87.569173,33.20984],"type":"Point"},"id":"cibq75mx5015mngmaxt991tv2"},{"type":"Feature","properties":{"Continent":"United States","Country":"Alaska","City":"Juneau","Station":"KTOO 104.3 FM","Url":"http://stream.ktoo.org:8000/ktoo","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mj"},"geometry":{"coordinates":[-134.419722,58.301944],"type":"Point"},"id":"cibq75mx5015nngmarp82qx7x"},{"type":"Feature","properties":{"Continent":"United States","Country":"Arizona","City":"Chino Valley","Station":"KDDL 94.3 FM","Url":"http://stream.amellus.com:8000/KDDL.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mk"},"geometry":{"coordinates":[-112.397785,34.545777],"type":"Point"},"id":"cibq75mx6015ongma3rubm2mf"},{"type":"Feature","properties":{"Continent":"United States","Country":"Arkansas","City":"Little Rock","Station":"KABF - 88.3 FM","Url":"http://amber.streamguys.com:4180/live","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9ml"},"geometry":{"coordinates":[-92.273735,34.728654],"type":"Point"},"id":"cibq75mx6015pngma94dongit"},{"type":"Feature","properties":{"Continent":"United States","Country":"California","City":"Oakland","Station":"Radio Soulism","Url":"http://s3.radioboss.fm:8340/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mm"},"geometry":{"coordinates":[-122.271114,37.804364],"type":"Point"},"id":"cibq75mx7015qngma6om0v4pa"},{"type":"Feature","properties":{"Continent":"United States","Country":"West Virginia","City":" Charleston","Station":"Public Radio","Url":"http://live.str3am.com:7820/","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mn"},"geometry":{"coordinates":[-81.629462,38.352427],"type":"Point"},"id":"cibq75mx7015rngmagidloyrk"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Russia","City":"moscow","Station":"Forex Expo FM","Url":"http://radio.horoshee.fm:8000/mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mo"},"geometry":{"coordinates":[37.565992,55.741416],"type":"Point"},"id":"cibq75mx8015sngma725d0d7w"},{"type":"Feature","properties":{"Continent":"United States","Country":"Washington","City":"columbia","Station":"WWRC 1260 AM","Url":"http://192.69.212.61:8032/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mp"},"geometry":{"coordinates":[-77.131324,38.848582],"type":"Point"},"id":"cibq75mx8015tngmajiskuumj"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Russia","City":"moscow","Station":"Radio 7","Url":"http://radio7128.streamr.ru","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mq"},"geometry":{"coordinates":[37.662148,55.745718],"type":"Point"},"id":"cibq75mx9015ungmahwj0icph"},{"type":"Feature","properties":{"Continent":"Europe","Country":"France","City":"Aurillac","Station":"Jordanne FM","Url":"http://live.jordannefm.com:8000/JFMCantalMD.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mr"},"geometry":{"coordinates":[2.444597,44.927951],"type":"Point"},"id":"cibq75mx9015vngmag2qprkqt"},{"type":"Feature","properties":{"Continent":"Europe","Country":"France","City":"Marseille","Station":"insidedancefloor","Url":"http://listen.shoutcast.com/insidedancefloor","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9ms"},"geometry":{"coordinates":[5.41939,43.295524],"type":"Point"},"id":"cibq75mxa015wngmaegic6t77"},{"type":"Feature","properties":{"Continent":"United States","Country":"Washington","City":"Aberdeen","Station":"KXRO 1320 AM","Url":"http://1.ice1.firststreaming.com/kxro_am.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mt"},"geometry":{"coordinates":[-123.815722,46.975371],"type":"Point"},"id":"cibq75mxa015xngma7biwipxa"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Ukraine","City":"Kyiv","Station":"Radio Chanson","Url":"http://213.128.218.54:8000/shanson","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mu"},"geometry":{"coordinates":[30.495986,50.462749],"type":"Point"},"id":"cibq75mxb015yngma6csppvhv"},{"type":"Feature","properties":{"Continent":"United States","Country":"Virginia","City":"Norfolk","Station":"WHRO 90.3 FM","Url":"http://whro.mediaplayer.whro.org/128","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mv"},"geometry":{"coordinates":[-76.285873,36.850769],"type":"Point"},"id":"cibq75mxc015zngmapkn789ji"},{"type":"Feature","properties":{"Continent":"United States","Country":"New York","City":"Albany","Station":"WAMC 90.3 FM","Url":"http://pubint.ic.llnwd.net/stream/pubint_wamc","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mw"},"geometry":{"coordinates":[-73.756232,42.652579],"type":"Point"},"id":"cibq75mxc0160ngmaonelo376"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Ukraine","City":"Zaporizhzhia","Station":"Zaporozhye FM","Url":"http://80.254.3.174:8000/radio-zaporizja-fm","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9mx"},"geometry":{"coordinates":[35.176162,47.862009],"type":"Point"},"id":"cibq75mxd0161ngmau62eawvl"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Spain","City":"Barcelona","Station":"Barcelona FM","Url":"http://195.10.10.225/barcelonatv/live.mp3?","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9my"},"geometry":{"coordinates":[1.74051,41.224576],"type":"Point"},"id":"cibq75mxd0162ngmati28s14i"},{"type":"Feature","properties":{"Continent":"Asia","Country":"Afghanistan","City":"Kabul","Station":"BFBS","Url":"http://icy-e-03-boh.sharp-stream.com/ssvcbfbs9.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9l1"},"geometry":{"coordinates":[69.1667,34.533333],"type":"Point"},"id":"cibq75mxe0163ngmaavgpxq2p"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Sweden","City":"Nacka","Station":"Radio Sotenas","Url":"http://ice-cluster.streaming.xmc.se/radiosotenas","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m10"},"geometry":{"coordinates":[18.207188,59.329957],"type":"Point"},"id":"cibq75mxe0164ngma6vpo6j51"},{"type":"Feature","properties":{"Continent":"United States","Country":"Utah","City":"Saint George","Station":"KWBR - St. George","Url":"http://broadcaster.smoothjazzutah.com:8000/kwbr","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m11"},"geometry":{"coordinates":[-113.568416,37.096528],"type":"Point"},"id":"cibq75mxf0165ngmaumgeb8k7"},{"type":"Feature","properties":{"Continent":"United States","Country":"Utah","City":"Delta","Station":"KHQN 1480 AM","Url":"http://peridot.streamguys.com:5650/live","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m12"},"geometry":{"coordinates":[-112.57717,39.35217],"type":"Point"},"id":"cibq75mxf0166ngma6tvrxqn4"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Sweden","City":"Malmö","Station":"Guldkanalen","Url":"http://stream.dbmedia.se/gkMP3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m13"},"geometry":{"coordinates":[13.21272,55.642352],"type":"Point"},"id":"cibq75mxg0167ngma2yiv13uc"},{"type":"Feature","properties":{"Continent":"United States","Country":"Texas","City":"Abilene","Station":"KACU 89.7 FM","Url":"http://stream1.kacu.org:8012/live","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m14"},"geometry":{"coordinates":[-99.742573,32.490943],"type":"Point"},"id":"cibq75mxg0168ngma33rs5jxl"},{"type":"Feature","properties":{"Continent":"United States","Country":"Texas","City":"Denton","Station":"DentonRadio","Url":"http://50.22.212.203:8069/;stream.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m15"},"geometry":{"coordinates":[-97.133068,33.214841],"type":"Point"},"id":"cibq75mxh0169ngmavycu9mkt"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Norway","City":"Oslo ","Station":"NRJ Norway","Url":"http://mms-live.online.no/p5_stavanger_mp3_mq?","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m16"},"geometry":{"coordinates":[10.744019,59.917442],"type":"Point"},"id":"cibq75mxh016angmam9x3lpg4"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Norway","City":"Kristiansand","Station":"Radio Sør Kristiansand","Url":"http://stream.radiosor.no/kristiansand128.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m17"},"geometry":{"coordinates":[7.981977,58.14529],"type":"Point"},"id":"cibq75mxi016bngma6rlz3cjb"},{"type":"Feature","properties":{"Continent":"United States","Country":"Tennessee","City":"Knoxville","Station":"Q106.8 Country","Url":"http://listen.radionomy.com/q1068country","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m18"},"geometry":{"coordinates":[-83.926942,36.060556],"type":"Point"},"id":"cibq75mxi016cngmazuoa85vp"},{"type":"Feature","properties":{"Continent":"United States","Country":"Tennessee","City":"Memphis","Station":"Radio Wezi","Url":"http://199.180.72.2:8508/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m19"},"geometry":{"coordinates":[-90.04898,35.149534],"type":"Point"},"id":"cibq75mxl016dngmau034zyw7"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Germany ","City":"Garbsen","Station":"RADIO 21 Oldenburg","Url":"http://188.94.97.91/radio21_oldenburg.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1a"},"geometry":{"coordinates":[9.62204,52.42854],"type":"Point"},"id":"cibq75mxm016engmar3tjgpmy"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Germany ","City":"Saarland","Station":"1000 Goldschlager","Url":"http://stream.laut.fm/1000goldschlager","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1b"},"geometry":{"coordinates":[7.02296,49.396423],"type":"Point"},"id":"cibq75mxm016fngmah8aqzapl"},{"type":"Feature","properties":{"Continent":"United States","Country":"Pennsylvania","City":"Pittsburgh","Station":"WQED 89.3","Url":"http://wqed.ic.llnwd.net/stream/wqed_wqed","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1c"},"geometry":{"coordinates":[-79.995886,40.440625],"type":"Point"},"id":"cibq75mxn016gngma2jnvfqat"},{"type":"Feature","properties":{"Continent":"United States","Country":"Pennsylvania","City":"State College,","Station":"WFGE 101.1 FM","Url":"http://icy3.abacast.com/foreverofpa-wfgefmmp3-64","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1d"},"geometry":{"coordinates":[-77.860001,40.793395],"type":"Point"},"id":"cibq75mxn016hngmar1rnylug"},{"type":"Feature","properties":{"Continent":"United States","Country":"Oklahoma","City":"Poteau","Station":"TBJS Radio Network","Url":"http://master.streamonomy.com/tbjs","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1e"},"geometry":{"coordinates":[-94.623558,35.053709],"type":"Point"},"id":"cibq75mxo016ingmagf0gj274"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Finland ","City":"Turku","Station":"Radio Auran Aallot","Url":"http://nettiradio.auranaallot.fi/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1f"},"geometry":{"coordinates":[22.269097,60.45302],"type":"Point"},"id":"cibq75mxo016jngma1qd0ax55"},{"type":"Feature","properties":{"Continent":"United States","Country":"Ohio","City":"Gahanna","Station":"WCVO-HD2 104.9 FM","Url":"http://stream.riverradio.com:8000/wcvohd2.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1g"},"geometry":{"coordinates":[-82.862352,40.040929],"type":"Point"},"id":"cibq75mxp016kngmas4z69001"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Finland ","City":"Maenttae","Station":"Radio Autere","Url":"http://81.209.108.93:8000/autere?type=.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1h"},"geometry":{"coordinates":[24.608688,62.036342],"type":"Point"},"id":"cibq75mxp016lngmaf7cr3ts5"},{"type":"Feature","properties":{"Continent":"United States","Country":"Ohio","City":"Newark","Station":"WZNP 89.3","Url":"http://stream.riverradio.com:8000/wznpfm.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1i"},"geometry":{"coordinates":[-82.862352,40.040929],"type":"Point"},"id":"cibq75mxq016mngma4j5ye9eh"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Poland","City":"Katowice","Station":"Open.FM - Szanty","Url":"http://gr-relay-16.gaduradio.pl/50","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1j"},"geometry":{"coordinates":[18.996047,50.262131],"type":"Point"},"id":"cibq75mxr016nngma4e5unlu0"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Poland","City":"Wrocław","Station":"Akademickie Radio","Url":"file:///Users/macmaster/Downloads/stations.html","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1k"},"geometry":{"coordinates":[16.996689,51.114335],"type":"Point"},"id":"cibq75mxr016ongmaqftms021"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Italy","City":"Verona","Station":"Radio Popolare Verona","Url":"http://50.7.173.162:8031/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1l"},"geometry":{"coordinates":[10.96838,45.36545],"type":"Point"},"id":"cibq75mxs016pngmanws6xyk8"},{"type":"Feature","properties":{"Continent":"South America","Country":"Spain","City":"Almeria","Station":"Mis Recuerdos","Url":"http://listen.radionomy.com/misrecuerdos","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1m"},"geometry":{"coordinates":[-2.463714,36.834047],"type":"Point"},"id":"cibq75mxs016qngmau5vfjnbp"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Italy","City":"Benevento","Station":"Radio Telesia FM","Url":"http://shoutcast1.dns-lab.it:8106/;stream.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1n"},"geometry":{"coordinates":[14.534394,41.222013],"type":"Point"},"id":"cibq75mxt016rngma0ajazy36"},{"type":"Feature","properties":{"Continent":"South America","Country":"Venezuela","City":"Caracas","Station":"Éxitos 99.9 FM","Url":"http://ur58.lorini.net:10999/exitosccs.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1o"},"geometry":{"coordinates":[-66.803718,10.46964],"type":"Point"},"id":"cibq75mxt016sngma4x3cspju"},{"type":"Feature","properties":{"Continent":"Europe","Country":"United Kingdom ","City":"London","Station":"Premier Christian Radio","Url":"http://icy-e-04.sharp-stream.com:80/premiergospellow.mp3","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1p"},"geometry":{"coordinates":[-0.133288,51.491732],"type":"Point"},"id":"cibq75mxu016tngmaljpb63zp"},{"type":"Feature","properties":{"Continent":"Europe","Country":"United Kingdom ","City":"London","Station":"Woodside Hospital Radio","Url":"http://stream.woodsideradio.com:8000/WSR","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1q"},"geometry":{"coordinates":[0.035914,51.522293],"type":"Point"},"id":"cibq75mxu016ungmalea33xat"},{"type":"Feature","properties":{"Continent":"South America","Country":"Brazil","City":"Rio de Janeiro","Station":"Radio 93 FM","Url":"http://1852.live.streamtheworld.com:3690/FM93_SC","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1r"},"geometry":{"coordinates":[-43.212735,-22.904797],"type":"Point"},"id":"cibq75mxv016vngmaaizh8aoe"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Romania","City":"Oradea","Station":"Radio Oldies Romania","Url":"http://radiooldies.no-ip.biz:9200/;","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1s"},"geometry":{"coordinates":[21.908798,47.062638],"type":"Point"},"id":"cibq75mxv016wngmae3bu2bbu"},{"type":"Feature","properties":{"Continent":"South America","Country":"Chile","City":"Santiago","Station":"AM 920 Nueve veinte","Url":"http://74.222.7.26:25812/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1t"},"geometry":{"coordinates":[-70.669265,-33.44889],"type":"Point"},"id":"cibq75mxw016xngmaxlt5yvaa"},{"type":"Feature","properties":{"Continent":"South America","Country":"Colombia","City":"Santander de Quilichao","Station":"Quilisalsa","Url":"http://streaming.radionomy.com/Quilisalsa","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1u"},"geometry":{"coordinates":[-76.484533,3.01228],"type":"Point"},"id":"cibq75mxw016yngma2a9jx7qq"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Belarus","City":"Minsk","Station":"radio 123","Url":"http://93.84.112.253:8036/autodj","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1v"},"geometry":{"coordinates":[27.561524,53.904539],"type":"Point"},"id":"cibq75mxx016zngmal2ft5wn6"},{"type":"Feature","properties":{"Continent":"North America","Country":"Canada","City":"Waterloo","Station":"Sound FM Canada","Url":"","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1w"},"geometry":{"coordinates":[-80.523204,43.468888],"type":"Point"},"id":"cibq75mxx0170ngmaipf6my0b"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Kazakhstan ","City":"Aksay","Station":"Radio Aksay","Url":"http://s2.radioboss.fm:8111/stream","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1x"},"geometry":{"coordinates":[53.021149,51.174942],"type":"Point"},"id":"cibq75mxy0171ngmaf4ihs95i"},{"type":"Feature","properties":{"Continent":"Europe","Country":"Greece","City":"Athens","Station":"Akous ","Url":"http://ice.onestreaming.com/akousbreeze","title":"","description":"","marker-color":"","marker-size":"","marker-symbol":"","id":"marker-ibq75c9m1y"},"geometry":{"coordinates":[23.718795,37.981009],"type":"Point"},"id":"cibq75mxy0172ngmaj6asfrqs"}],"id":"ann1990a.majoi7jh"
}];

var map1 = L.mapbox.map('map', 'ann1990a.majoi7jh', {
	minZoom: 2,
	maxZoom: 7,
});
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
		sendWithAjax(prop.Country, prop.City);
		$("h1").html(prop.Station);
		$("h2").html(prop.Country);
		$("h3").html(prop.City);
		//console.log($(this).css("transform"));
		//console.log($(this).attr("style"));
		
		//console.log($(this._icon).attr('style'));
		
		if (localeCheck == 1){ 
		beforeLocale.setIcon(L.icon({
		iconUrl: './icon.png',		
		}));
		}
		currentLocale = locale;
		beforeLocale = locale;
		localeCheck = 1;
		locale.setIcon(L.icon({
		iconUrl: './stoping.png',
		
		
		}));


		

		setTimeout(function(){ $("h4").html(globalVar);}, 100);

		$(".plusB").show();
		$(".shareB").show();

		map1.setView(locale.getLatLng(), 4);
		playNow = prop.Station;
		newURL =  myURL + "?val=" + playNow;

		playNowCountry = prop.Country
		playNowCity = prop.City;


	});  	


	$( locale).hover(


		function () {

			$("h1").html(prop.Station);
			$("h2").html(prop.Country);
			$("h3").html(prop.City);
			$("h4").hide();
			$(".plusB").hide();
			$(".shareB").hide();
		},
		function () {
			if (playNow != ""){
				$(".plusB").show();
				$(".shareB").show();
				$("h4").show();
			}
			$("h1").html(playNow);	
			$("h2").html(playNowCountry);	
			$("h3").html(playNowCity);			
			
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

						sendWithAjax(geojson[0].features[results[0]].properties.Country, geojson[0].features[results[0]].properties.City);
						$("h1").html(geojson[0].features[results[0]].properties.Station);
						$("h2").html(geojson[0].features[results[0]].properties.Country);
						$("h3").html(geojson[0].features[results[0]].properties.City);

						

						setTimeout(function(){ $("h4").html(globalVar);}, 100);

						$(".plusB").show();
						$(".shareB").show();

						$("#music").attr("src", geojson[0].features[results[0]].properties.Url);
						$(".player").show();
						play();
						
						playNow = geojson[0].features[results[0]].properties.Station;
						newURL =  myURL + "?val=" + playNow;


						map1.setView([geojson[0].features[results[0]].geometry.coordinates[1]+0, geojson[0].features[results[0]].geometry.coordinates[0]+0], 4);

						locations.eachLayer(function(locale) {

						var prop = locale.feature.properties;
						locale.setIcon(L.icon({
						iconUrl: './icon.png',
		
						}));
						if (prop.Station == playNow){
							currentLocale = locale;
							if (localeCheck == 1){ 
							beforeLocale.setIcon(L.icon({
							iconUrl: './icon.png',		
							}));
							}
							beforeLocale = locale;
							localeCheck = 1;
							locale.setIcon(L.icon({
							iconUrl: './stoping.png',
							
							}));
							localeCheck = 1;
						}


						});


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




			
			
/*
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

*/



function deleteVal(valu){
	if (delCheck == 0){


		var del = $(valu).parent();
		$(del).remove();
		var valForDelete = $(valu).parent().attr('id');
		var index = favArr.indexOf(valForDelete);
		favArr.splice(index, 1);
		localStorage.setItem('fav', JSON.stringify(favArr));
		delCheck = 1;

	}
	setTimeout(function(){ delCheck = 0; }, 1000);


}

$(".b").click(function(){
	deleteVal(this);				
});

$(".plusB").click(function(){



	var flag = 0;
	for (var i=0; i<favArr.length; i++){
		if (favArr[i] == playNow){
			flag = 1;
			var flash = document.getElementById(playNow);
			for (var x=0; x<2; x++){
			$(flash).effect("highlight", {}, 900);
			}
			setTimeout(function(){ $(".favorites").hide( "clip",{direction: "vertical"}, 300 ); $(".burger1").show(); }, 2500);
			
			$("#favorites").
			break;
		}
	}

	if (flag == 0){ 
		favArr.push(playNow);
		localStorage.setItem('fav', JSON.stringify(favArr));

		var goo = document.createElement("div");        
		goo.className = "itemlist";
		goo.setAttribute("id", playNow);


		document.getElementById("stationHolder").appendChild(goo);
		goo.innerHTML = playNow;

		var b = document.createElement("div");        
		b.className = "b";


		document.getElementById(playNow).appendChild(b);





	}
	$(".burger1").hide();						
	$(".favorites").show( "clip",{direction: "vertical"}, 300 );

	$( ".itemlist").hover(

		function () {
			
			$(".b").show();
		},
		function () {
			$(".b").hide();
});



	$(".b").click(function(){								
		deleteVal(this);					
	});		

	$(".itemlist").click(function(){
		var sID = this.id;

		for(var i=0; i < geojson[0].features.length; i++){	
			if (sID == geojson[0].features[i].properties.Station){
				$("#music").attr("src", geojson[0].features[i].properties.Url);
				$(".player").show();
				play();
				sendWithAjax(geojson[0].features[i].properties.Country , geojson[0].features[i].properties.City);
				playNow = geojson[0].features[i].properties.Station;
				newURL =  myURL + "?val=" + playNow;
				setTimeout(function(){
				 map1.setView([geojson[0].features[i].geometry.coordinates[1]+0, geojson[0].features[i].geometry.coordinates[0]+0], 4);
				},100);
				
				$("h1").html(geojson[0].features[i].properties.Station);
				$("h2").html(geojson[0].features[i].properties.Country);
				$("h3").html(geojson[0].features[i].properties.City);
				setTimeout(function(){ $("h4").html(globalVar); }, 100);
				$(".plusB").show();
				$(".shareB").show();

				

						locations.eachLayer(function(locale) {

						var prop = locale.feature.properties;
						locale.setIcon(L.icon({
						iconUrl: './icon.png',
		
						}));
						if (prop.Station == playNow){

							if (localeCheck == 1){ 
							beforeLocale.setIcon(L.icon({
							iconUrl: './icon.png',		
							}));
							}
							beforeLocale = locale;
							localeCheck = 1;
							locale.setIcon(L.icon({
							iconUrl: './stoping.png',		
							}));
							localeCheck = 1;
						}


						});

				break;

			}

		}
	});

});





$( ".itemlist").hover(

	function () {

		$(".b").show();
	},
	function () {
		$(".b").hide();
	}

	);





function readFav(){	

	favArr = JSON.parse(localStorage.getItem('fav'));
			 for (var i=0; i<favArr.length; i++){		// Favorite list
			 	var goo = document.createElement("div");        
			 	goo.className = "itemlist"
			 	goo.setAttribute("id", favArr[i]);


			 	document.getElementById("stationHolder").appendChild(goo);
			 	goo.innerHTML = favArr[i];

			 	var b = document.createElement("div");        
			 	b.className = "b";


			 	document.getElementById(favArr[i]).appendChild(b);



			 }

			}	


			$(".inputS").click(function(e){
				var parentOffset = $(this).offset(); 
  			 //or $(this).offset(); if you really just want the current element's offset
  			 var relX = e.pageX - parentOffset.left;

  			 if ((relX-200)>0){

  			 	$('#tags').val("");
  			 	$('.inputS').css('background-position', '-999px -999px');
  			 }

  			});

			

			$('.inputS').on('input', function() {
				var input = $('#tags').val();
				if ( input == ""){
					$('.inputS').css('background-position', '-999px -999px');
				}
				
				else {
					$('.inputS').css('background-position', '200px 6px');
				}



			});




			$(".burger1").click(function(){	
				$(".burger1").hide();						
				$(".favorites").show( "clip",{direction: "vertical"}, 300 );				
			});	

			$("#map").click(function(){	
				$(".favorites").hide( "clip",{direction: "vertical"}, 300 );
				setTimeout(function(){ $(".burger1").show(); }, 350);	
				$("#welcome").fadeOut(300);
				$("#addR").fadeOut(300);
				
			});	




			$(".itemlist").click(function(){
				var sID = this.id;

				for(var i=0; i < geojson[0].features.length; i++){	
					if (sID == geojson[0].features[i].properties.Station){
						$("#music").attr("src", geojson[0].features[i].properties.Url);
						$(".player").show();
						play();
						sendWithAjax(geojson[0].features[i].properties.Country , geojson[0].features[i].properties.City);
						playNow = geojson[0].features[i].properties.Station;
						setTimeout(function(){
							 map1.setView([geojson[0].features[i].geometry.coordinates[1]+0, geojson[0].features[i].geometry.coordinates[0]+0], 4);
						},100);
						$("h1").html(geojson[0].features[i].properties.Station);
						$("h2").html(geojson[0].features[i].properties.Country);
						$("h3").html(geojson[0].features[i].properties.City);
						setTimeout(function(){ $("h4").html(globalVar); }, 500);
						newURL =  myURL + "?val=" + playNow;

						$(".plusB").show();
						$(".shareB").show();

						locations.eachLayer(function(locale) {

						var prop = locale.feature.properties;
						locale.setIcon(L.icon({
						iconUrl: './icon.png',
		
						}));
						if (prop.Station == playNow){

							if (localeCheck == 1){ 
							beforeLocale.setIcon(L.icon({
							iconUrl: './icon.png',		
							}));
							}
							beforeLocale = locale;
							localeCheck = 1;
							locale.setIcon(L.icon({
							iconUrl: './stoping.png',		
							}));
							localeCheck = 1;
						}


						});

						break;



					}

				}
			});

			$(".que").click(function(){	
				$("#welcome").fadeIn(400);
				$("#addR").fadeOut(400);
			});


			$("#sButton").click(function(){	
				var rand = geojson[0].features[[Math.floor(Math.random() * geojson[0].features.length)]];
				
						$("#music").attr("src", rand.properties.Url);
						$(".player").show();
						play();
						sendWithAjax(rand.properties.Country , rand.properties.City);
						playNow = rand.properties.Station;
						newURL =  myURL + "?val=" + playNow;
						setTimeout(function(){
							 map1.setView([rand.geometry.coordinates[1]+0, rand.geometry.coordinates[0]+0], 4);
						},100);
						$("h1").html(rand.properties.Station);
						$("h2").html(rand.properties.Country);
						$("h3").html(rand.properties.City);
						setTimeout(function(){ $("h4").html(globalVar); }, 500);

						$(".plusB").show();
						$(".shareB").show();

						locations.eachLayer(function(locale) {

						var prop = locale.feature.properties;
						locale.setIcon(L.icon({
						iconUrl: './icon.png',
		
						}));
						if (prop.Station == playNow){
							currentLocale = locale;

							if (localeCheck == 1){ 
							beforeLocale.setIcon(L.icon({
							iconUrl: './icon.png',		
							}));
							}
							beforeLocale = locale;
							localeCheck = 1;
							locale.setIcon(L.icon({
							iconUrl: './stoping.png',		
							}));
							localeCheck = 1;
						}


						});

				
			});	

			function sendWithAjax(theState, theCountry){
				$.ajax({
					type : "POST",
					url : './timeZone.php',
					data : {cnt:theCountry, st:theState},
					success : function(data) {globalVar = data;					

					},
					error : function(req, errortype) {
						console.log("ERROR");		
					}
				});
			}

			$(".shareB").click(function(){	
				fbURL = "https://www.facebook.com/dialog/feed?app_id=1584884211777473&link=" 
				+ newURL + "&picture=http%3A%2F%2Fs2.postimg.org%2Fbyfdp92eh%2Fimage.png&name=Interactive%20Radio%20Map&caption="
				+ "I'm listening to "+ playNow + " station on World Radio - an interactive map of radio stations from around the globe" + "&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F";					
				$(".shareB").attr("href", fbURL);
			

				

			});	




			$(".addRButton").click(function(){	
				$("#welcome").fadeOut(300);
				$("#addR").fadeIn(300);

			});	


			




		});