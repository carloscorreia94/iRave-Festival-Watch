function goBack() {
	var expression = arguments[0];
	switch(expression) {
    case 'menu_payments':
        window.location.href = 'payments.html';
        break;
    case 'home':
        window.location.href = 'index.html';
        break;
    default:
        window.history.back();
	}
}
	var products = [['Hamburger','assets/pics/food/burger.png','6.50'], ['Tabaco','assets/pics/food/cigarette.png','4.50'], ['Cerveja','assets/pics/food/beer.png','3'],['Coca-Cola','assets/pics/food/cola.png','3']];   
function randProduct() {
	return products[arguments[0]];
}
//change; without GET	
function detailsLink() {
	 window.location.href = 'payment_details.html?'+arguments[0];
}


/* <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script>
		function showImage(){
			$('#1').show();
			$('#2').show();
			$('#3').show();
			$('#showButton').hide();
			$('#hideButton').show();
		}
		function hideImage(){
			$('#1').hide();
			$('#2').hide();
			$('#3').hide();
			$('#showButton').show();
			$('#hideButton').hide();
		}
	</script> -*/
