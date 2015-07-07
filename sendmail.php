<?php 

    $to = "halfon7@gmail.com"; 
    $from = $_POST['email']; 
    $name = $_POST['name'];
    $address = $_POST['address'];
    $url = $_POST['url'];
    $subject = "World-Radio";
    $message = "Station name:" .  $name . " Address: " . $address . " URL: " . $url . " Email: " . $from;
    $headers = "From:" . $from;

    mail($to,$subject,$message,$headers);
    echo "Request has been sent. Thank you ";

?>
