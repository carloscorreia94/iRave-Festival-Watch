<?php
include("top.php");
$func = "";
if(isset($_GET["func"])) {
$func = $_GET["func"]; }

switch($func) {

	case "payment_do";
		?>
		<a href="payments.php?func=confirmation">
			<div>
				<p id="spinner">Aguarde.</p>
				<div id="content_payments_do">Encoste o iRave ao terminal.</div>
			</div>
		</a>
		<?php
	break;
	case "confirmation":
	if($neg==true) {
		?>
			<img id="check_sign" src="./assets/pics/error_sign.png">
		<div id="content_confirmation_pay">
			Compra cancelada.<br/>
			<a href="payments.php?func=details&art=<?php echo $rand; ?>&error=true">Detalhes</a>
		</div>
		<?php
	} else {
		?>

		<img id="check_sign" src="./assets/pics/check_sign.png">
		<div id="content_confirmation_pay">
			Compra confirmada.<br/>
			<a href="payments.php?func=details&art=<?php echo $rand; ?>">Detalhes</a>
		</div>
		<?php
	}
	break;
	case "details":
		?>
			<img id="check_sign"/>
			<div id="content_confirmation_pay">
			<b><span id="prod"/></b> <br/>
			<span id="price"/> </div>
		<?php
	break;
	case "history":
		 $sql = "SELECT * FROM payment_history ORDER BY ID DESC LIMIT 4";
 		 $result = $connection->query($sql);
 		 ?>
 		 <table id="historyTable">
			<tbody>
		  		<tr>
		  		<td><b>Mont.</b> </td>
		  		<td><b>Artigo</b></td>
		  		</tr>
				  <?php
				  while($arr = $result->fetch(PDO::FETCH_ASSOC)) {
		   				echo '<tr>';
		   				echo '<td>'.$arr['price'].'</td>';
		   				echo '<td>'.$arr['name'].'</td>';
		   				echo '</tr>';
		   		}
		   		  ?>
	   	    </tbody>
         </table>
    	Últimas 4 compras.
 		 <?php
	break;
	default:
		?>
		<a href="payments.php?func=payment_do"><div id="gO_payments">EFECTUAR PAGAMENTO</div></a>
		<a href="payments.php?func=history"><div id="gO_historico">HISTÓRICO</div></a>
		<?php
}
 include("bottom.php");
 ?>
