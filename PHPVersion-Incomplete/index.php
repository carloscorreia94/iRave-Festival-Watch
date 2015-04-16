<?php
include("top.php");
$func = "";
if(isset($_GET["func"])) {
$func = $_GET["func"]; }

switch($func) {
	case "configwait":
	?>
	<a href="configs.php">
			<div>
				<p id="spinner">Aguarde.</p>
				<div id="content_payments_do">Encoste o iRave ao terminal.</div>
			</div>
		</a>
		<?php
	break;
	default:
?>
	<a href="profile.php"><div id="top_left">
		<img id="profile" src="./assets/pics/user-icon.png">
	</div></a>
	<a href="payments.php"><div id="top_right">
		<img id="payment" src="./assets/pics/euro_sign2.png">
	</div></a>
	<a href="radar.php"><div id="bottom_left">
		<img id="radar" src="./assets/pics/radar.png">
	</div></a>
	<a href="sos.php"><div id="bottom_right">
		<img id="sos" src="./assets/pics/sos.png">
	</div></a>
 <?php
}
 include("bottom.php");
 ?>
