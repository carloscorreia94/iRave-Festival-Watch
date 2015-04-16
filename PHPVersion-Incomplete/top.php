<?php
include("config.php");
?>
<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<script src="code.js" type="text/javascript"></script> 
<?php 
if(strpos($_SERVER['REQUEST_URI'],"payments.php")) {

if(strpos($_SERVER['REQUEST_URI'],"payment_do") || strpos($_SERVER['REQUEST_URI'],"configwait")) {
	echo '<!-- SPINNER JS -->
<script src="http://stats.24ways.org/mint/?js" type="text/javascript"></script>';
}
if(strpos($_SERVER['REQUEST_URI'],"details")) {
	$y = $_GET["art"];
	$error = $_GET["error"];
	echo "<script type='text/javascript'> 
	window.onload = function() {
		var y = ".$y.";
		var x = randProduct(y);
	    var name = x[0];
	    var img = x[1];
	    var price = '- ' + x[2] + '€';
		document.getElementById('check_sign').src=img;
   		document.getElementById('prod').innerHTML=";

	if($error=="true") { echo "'Saldo Insuficiente.';"; }
	else { echo "name;"; }

	echo "
		document.getElementById('price').innerHTML=price;
		} 
	</script>";
}
if(strpos($_SERVER['REQUEST_URI'],"confirmation")) {
 $a=array(0,1,2,3);
 $index = array_rand($a,1);
$products = array(array('Hamburger','assets/pics/food/burger.png','6.50'), array('Tabaco','assets/pics/food/cigarette.png','4.50'), array('Cerveja','assets/pics/food/beer.png','3'),array('Coca-Cola','assets/pics/food/cola.png','3'));
$product = $products[$index];
$name = $product[0]; 
$price = $product[2];	

$sql = "SELECT money FROM config";
$result = $connection->query($sql);
$arr = $result->fetch(PDO::FETCH_ASSOC);
$money = $arr['money'] - $price;
$rand = $index;

if($money<0) { $neg = true; }
else {	
    $sql = "INSERT INTO payment_history(price,name) VALUES('".$price."','".$name."') ";
   	$result = $connection->query($sql);
	$sql = "UPDATE config set money='".$money."'";
	$result = $connection->query($sql);

	}
}

}

$sql = "SELECT money FROM config";
 		 $result = $connection->query($sql);
 		 $arr = $result->fetch(PDO::FETCH_ASSOC);
?>
<link rel="stylesheet" href="style.css">

<title>Interfaces Pessoa Máquina - iRave</title>


</head>

<body>

<div id="watch_screen">
  <div id="status_bar">
  	<div id="money"><?php echo $arr['money']; ?>€</div>
  	<div id="clock"><?php
$date = new \DateTime();
echo date_format($date, 'G:i');
?></div>
 </div>
<div id="container">