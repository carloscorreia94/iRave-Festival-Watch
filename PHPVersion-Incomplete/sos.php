<?php
include("top.php");
$func = $_GET["func"];

switch($func) {

	case "calling";
		?>
		<img id="calling" src="./assets/pics/calling.GIF">
		<?php
	break;
	case "paramedics";
		?>
		PARAMEDICOS
		<?php
	break;
	default:
		?>
		<a href="sos.php?func=calling"><div id="gO_security">Chamar Segurança</div></a>
		<a href="sos.php?func=paramedics"><div id="gO_historico">Chamar Paramédicos</div></a>
		<?php
}
?>
 <?php
 include("bottom.php");
 ?>
