</div>
</div>

<div id="hard_btns">
<?php
$pages = array('index.php','');

if(strpos($_SERVER['REQUEST_URI'],'configwait')) {
	$url = "javascript:goBack()";
}
elseif(strpos($_SERVER['REQUEST_URI'],$pages[0])) {
	$url = "#";
}
else {
	$url = "#";
} 

if(strpos($_SERVER['REQUEST_URI'],"payments.php")) {
		$pages = array('payments.php');
		if(strpos($_SERVER['REQUEST_URI'],$pages[0])) {
		$url = "index.php";
		}

		$pages2 = array('details','confirmation','history','payment_do');
		for($i=0;$i<count($pages2);$i++) {
			if(strpos($_SERVER['REQUEST_URI'],$pages2[$i])) {
				$url = "payments.php"; 
			} 
		}

}

if(strpos($_SERVER['REQUEST_URI'],"sos.php")) {
		$pages = array('sos.php');
		if(strpos($_SERVER['REQUEST_URI'],$pages[0])) {
		$url = "index.php";
		}

		$pages2 = array('calling','paramedics');
		for($i=0;$i<count($pages2);$i++) {
			if(strpos($_SERVER['REQUEST_URI'],$pages2[$i])) {
				$url = "sos.php"; 
			} 
		}

}
?>
	<a href="index.php?func=configwait"><div id="definitions_btn">
	</div></a>
	<a href="index.php"><div id="home_btn">
	</div></a>
	<a href="<?php echo $url; ?>"><div id="back_btn"></div></a>
</div>

</body>
</html>