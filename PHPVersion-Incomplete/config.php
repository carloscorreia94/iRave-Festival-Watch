<?php
$user="ist176512"; //------------your username usually root
$password="abnz9935";//---------your password
$dbname="ist176512";//----the name of the database
$host="db.ist.utl.pt";
$connection = new PDO("mysql:host=" . $host. ";dbname=" . $dbname, $user, $password,
	array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING));
//$rel_path="/projeto/"
$rel_path = "/~ist176512/irave/";

?>
