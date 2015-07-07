<?php


if(isset($_POST['cnt']) && isset($_POST['st'])){
	
	$theCountry = $_POST['cnt'];
	$theState = $_POST['st'];

	function get_timee($country,$city){
			
		$country = str_replace(' ', '', $country);
		$city = str_replace(' ', '', $city);
		
		$geocode_stats = file_get_contents("http://maps.googleapis.com/maps/api/geocode/json?address=$city+$country,&sensor=false");
		$output_deals = json_decode($geocode_stats);
		$latLng = $output_deals->results[0]->geometry->location;
		$lat = $latLng->lat;
		$lng = $latLng->lng;    
		
		// Call google timeZone by loc
		$google_time = file_get_contents("https://maps.googleapis.com/maps/api/timezone/json?location=$lat,$lng&timestamp=1331161200&key=AIzaSyBtwGuw546zR9Oh6xLtTQ_4V_IYeXgosDI");
		$timez = json_decode($google_time);
		$d = new DateTime("now", new DateTimeZone($timez->timeZoneId));
		$h = (int)$d->format('H');
		
		if($h > 12){
			
			$h -= 12;
		}return $h.":".$d->format('i A');
	}
	echo  get_timee($theState,$theCountry);
	
}
else{
	echo "false";
}

?>