<?PHP

$decoded = json_encode($_POST['myJson']);

echo $decoded;

file_put_contents("fav.json", $decoded);


?>