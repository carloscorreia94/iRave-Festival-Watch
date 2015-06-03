function goBack(e) {
	switch(e) {
    case 'menu_payments':
        window.location.href = 'payments.html';
        break;
    case 'home':
        window.location.href = 'index.html';
        break;
    case 'help':
    	if(sessionStorage.help=="1") {
    		window.location.href = 'index.html';
    		sessionStorage.help = 1;
    	}
    	sessionStorage.help = Number(sessionStorage.help) - 1;
    	window.location.href = 'help.html';
    default:
        window.history.back();
	}
}
function randProduct() {
	var myArray = [0,1,2,3];
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	return rand;
}
//change; without GET	
function detailsLink() {
	 window.location.href = 'payment_details.html?'+arguments[0];
}

function checkCurrency() {
	 if( sessionStorage.curr ){
      	return sessionStorage.curr = Number(sessionStorage.curr);
    }else{
        return sessionStorage.curr = 0;
    }
}

function checkTime() {
	var dt = new Date();
	var min;
	if(dt.getMinutes()<10) {
		min = "0" + dt.getMinutes();
	} else {
		min = dt.getMinutes();
	}
	var time = dt.getHours() + ":" + min;
	return time;
}

function subtractCurrency(e) {
	if(sessionStorage.curr - e < 0) { 
		return false;
	} else {
		sessionStorage.curr -= e;
		return true;
	}
}

function goTo(_current,_next) {
	$('#'+_current).fadeOut();
	$('#'+_next).fadeIn();
}
var opts = {
            lines: 10, // The number of lines to draw
            length: 7, // The length of each line
            width: 4, // The line thickness
            radius: 10, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 25, // Top position relative to parent in px
            left: 25 // Left position relative to parent in px
        };
function printDynamicItems() {
	
	$(document).ready(function(){
      //  $("#container").fadeIn();
        $("#container").fadeIn(); /*
        $("#div3").fadeIn(3000); */
});
	var products = [['Hamburger','assets/pics/food/burger.png','6.50'], ['Tabaco','assets/pics/food/cigarette.png','4.50'], ['Cerveja','assets/pics/food/beer.png','3'],['Coca-Cola','assets/pics/food/cola.png','3']];   
	var time = checkTime();
	var expression = arguments[0];
	if(expression=="spinner") {
		opts.color = '#000';
	}
	if(expression=="spinner" && sessionStorage.scheme=="black") {
		opts.color = '#fff';
	}
	window.onload = function() {
		$("#container").fadeIn();
		if(sessionStorage.programmed!="true" && expression!="config_initial" && expression!="help") {
					window.location.href="start_config.html";
		}
		if(sessionStorage.programmed=="true" && expression=="config_initial" && expression!="help") {
					window.location.href="index.html";
		}
		//select color pallette
		if(sessionStorage.scheme=="black" && expression!="config" && expression!="help") {
			var statusBar = document.querySelector("#status_bar");
			if(expression!="radar") {
				var container = document.querySelector("#container");
				container.style.backgroundColor = "black";
				container.style.color = "#fff";
			} else {
				$("#container_radar").css("background","#000 url('assets/pics/radar2.gif') center no-repeat");
			}
				statusBar.style.backgroundColor = "#ccc";
				statusBar.style.color = "#000";
				$("[href]").css("color","#fff");
				$("td").css("border-color","#fff");
				$("#spinner").css("background-color","#fff");
		}

		if(sessionStorage.scheme=="blue" && expression!="config" && expression!="help") {
			var statusBar = document.querySelector("#status_bar");
			if(expression!="radar") {
				var container = document.querySelector("#container");
				container.style.backgroundColor = "#ccc";
				container.style.color = "#000";
			} else {
				$("#container_radar").css("background","#000 url('assets/pics/radar2.gif') center no-repeat");
			}
				statusBar.style.backgroundColor = "#2668a5";
				statusBar.style.color = "#000";
				$("[href]").css("color","#000");
				$("td").css("border-color","#000");
				$("#spinner").css("background-color","#000");
		}


		switch(expression) {
			case "confirmation":
				var product=randProduct();
				sessionStorage.lastItemName = products[product][0];
				sessionStorage.lastItemImg = products[product][1];
				sessionStorage.lastItemPrice = products[product][2];
				if(subtractCurrency(products[product][2])) {
					if(sessionStorage.hist) {
						var storedHist = JSON.parse(sessionStorage.hist);
						storedHist.push(products[product]);
						sessionStorage.hist = JSON.stringify(storedHist);
					} else {
						var myHist = new Array();
						myHist.push(products[product]);
						sessionStorage.hist = JSON.stringify(myHist);
					}
					sessionStorage.moneyFlag = "yes";
					document.getElementById('check_sign').src="./assets/pics/check_sign.png";
				} else {
					sessionStorage.moneyFlag = "noMoney";
					document.getElementById('check_sign').src="./assets/pics/error_sign.png";
	   				document.getElementById('msg_buy').innerHTML="Compra Cancelada!";
				}
			break;
			case "details":
				document.getElementById('check_sign').src=sessionStorage.lastItemImg;
				document.getElementById('price').innerHTML="-" + sessionStorage.lastItemPrice + "€";
				if(sessionStorage.moneyFlag=="noMoney") {
					document.getElementById('prod').innerHTML="Saldo Insuficiente";		
				} else {
					document.getElementById('prod').innerHTML=sessionStorage.lastItemName;	
				}
			break;
			case "sos":
				if(sessionStorage.sosType=="sec") {
					document.getElementById('msg_buy').innerHTML="A segurança está a chegar ao local. Aguarde.";
				}
				if(sessionStorage.sosType=="paramedics") {
					document.getElementById('msg_buy').innerHTML="A equipa de paramédicos foi alertada. Aguarde.";
				}
			break;
			case "help":
				if(Number(sessionStorage.help)>4) {
					sessionStorage.help="1";
				}
				if(!sessionStorage.help) {
		 			sessionStorage.help = "1";
		 		}
		 		if(sessionStorage.help=="1") {
		 			$("#watch_screen_2").css("background","#000 url('assets/help/help1.png')");
		 		}
		 		else if(sessionStorage.help=="2") {
		 			$("#watch_screen_2").css("background","#000 url('assets/help/help2.png')");
		 		} else if (sessionStorage.help=="3") {
		 			$("#watch_screen_2").css("background","#000 url('assets/help/help3.png')");
		 		} else {
		 			$("#watch_screen_2").css("background","#000 url('assets/help/help4.png')");
		 			sessionStorage.help = Number(sessionStorage.help) + 1;
		 			document.getElementById('help_link').href="index.html";
		 		}
			break;
			case "radar":
				$("#container_radar").fadeIn();
				var randY = 14 + Math.floor(Math.random() * 45);
				var randX = 14 + Math.floor(Math.random() * 45);
				var myElement = document.querySelector("#point_position");
				myElement.style.paddingTop = randY + "px";
				myElement.style.paddingLeft = randX + "px";
			break;
			case "radar_init":
				var item1 = sessionStorage.item1;
				var item2 = sessionStorage.item2;
				var item3 = sessionStorage.item3;

				if(item1!="" && item1!=null) {
					document.getElementById('item1').innerHTML=item1;
				} else {
					document.getElementById("item1").style.display = "none";
					document.getElementById("no_items").style.display = "block";
				}
				if(item2!="" && item2!=null) {
					document.getElementById('item2').innerHTML=item2;
				} else {
					document.getElementById("item2").style.display = "none";
				}
				if(item3!="" && item3!=null) {
					document.getElementById('item3').innerHTML=item3;
				} else {
					document.getElementById("item3").style.display = "none";
				}
			break;
			case "config":
				var currency = checkCurrency();
				var item1 = sessionStorage.item1;
				var item2 = sessionStorage.item2;
				var item3 = sessionStorage.item3;
				document.getElementById('saldo_actual').innerHTML=currency+"EUR";
				if(item1!="" && item1!=null) {
					document.getElementById('item1').value = item1;
				}
				if(item2!="" && item2!=null) {
				 	document.getElementById('item2').value = item2;
				}
				if(item3!="" && item3!=null) {
					document.getElementById('item3').value = item3;
				}
			break;
			case "profile":
				document.getElementById('nome').innerHTML=sessionStorage.username;
				document.getElementById('idade').innerHTML=sessionStorage.age;
				document.getElementById('telemovel').innerHTML=sessionStorage.phone;
			break;
			case "ch_color":
				var color = sessionStorage.scheme;
				switch(color) {
					case "white":
						var myElement = document.querySelector("#colorS1");
					break;
					case "black":
						var myElement = document.querySelector("#colorS2");
					break;
					case "blue":
						var myElement = document.querySelector("#colorS3");
					break;
					default:
				}
				myElement.style.color = "red";
			default:
		}
		if(expression!="config" && expression!="config_initial" && expression!="help") {
			if(sessionStorage.favorite == "1") {
				document.getElementById('side_btn_link').href="help.html";
			} else if(sessionStorage.favorite == "2") {
				document.getElementById('side_btn_link').href="payments.html";
			} else if(sessionStorage.favorite == "3") {
				document.getElementById('side_btn_link').href="profile.html";
			} else if(sessionStorage.favorite == "4") {
				document.getElementById('side_btn_link').href="radar.html";
			} else {
				document.getElementById('side_btn_link').href="sos.html";
			}
			var currency = checkCurrency();
			document.getElementById('money').innerHTML=currency+"€";
			document.getElementById('clock').innerHTML=time;
		}
	}
}

function goToOpacity(_div,_location) {
	 $(_div).animate({
	        opacity: '0.3'
	    });
	 switch(_location) {
	 	case "sos_sec":
	 		sessionStorage.sosType="sec";
	 		setTimeout(function(){ window.location.href="sos_confirm.html"; }, 350);
	 	break;
	 	case "sos_par":
	 		sessionStorage.sosType="paramedics";
	 		setTimeout(function(){ window.location.href="sos_confirm.html"; }, 350);
	 	break;
	 	case "sch_white":
	 		setTimeout(function(){ changeScheme("white") }, 350);
	 	break;
	 	case "sch_black":
	 		setTimeout(function(){ changeScheme("black") }, 350);
	 	break;
	 	case "sch_blue":
	 		setTimeout(function(){ changeScheme("blue") }, 350);
	 	break;
	 	case "help":
	 		sessionStorage.help = Number(sessionStorage.help) + 1;
	 		setTimeout(function(){ window.location.href="help.html"; }, 350);
	 	break;
	 	default:
	 		setTimeout(function(){ window.location.href=_location; }, 350);
	 }
}
function changeScheme(e) {
	switch(e) {
		case "white":
			sessionStorage.scheme = "white";
		break;
		case "black":
			sessionStorage.scheme = "black";
		break;
		case"blue":
			sessionStorage.scheme = "blue";
		break;
		default:
	}
	window.location.href="ch_color.html";
}

function printHistory() {
	if(sessionStorage.hist) {
		var storedHist = JSON.parse(sessionStorage.hist);
    	var i = storedHist.length-1;
    	var term;
    	//way to only put last 4 items stored.
    	if(i-3>0) {
    		term = i-3;
    	} else { term=0;}
    		for (; i>=term; i--) {
    			document.write("<tr>");
    			document.write("<td>"+ storedHist[i][0] +"</td>");
    			document.write("<td>"+storedHist[i][2] +"€</td>");
    			document.write("</tr>");
			}
		}
	else {
		document.write("<tr><td colspan='2'>Não comprou artigos.</td></tr>");
		}
}


function showScheme(e) {
	var h = document.getElementById(e);
	if(e=="white") {
		document.getElementById("black").style.display = "none";
		document.getElementById("blue").style.display = "none";
	}
	if(e=="black") {
		document.getElementById("white").style.display = "none";
		document.getElementById("blue").style.display = "none";
	}
	if(e=="blue") {
		document.getElementById("black").style.display = "none";
		document.getElementById("white").style.display = "none";
	}
	h.style.display = "initial";
}

function randomSOS() {
	var time = 5 + Math.floor(Math.random() * 5);
	var realTime = time*1000;
	setTimeout(function(){window.location.href = 'sos_complete.html';},realTime);
}

function saldoForm() {
    var x = document.forms["config_form"]["money"].value;
    if (x == null || x == "") {
        alert("Preencha uma importância.");
        return false;
    } else {
    	sessionStorage.curr = Number(sessionStorage.curr) + Number(x);
    }
}

function radarForm() {
    var item1 = document.forms["radar_form"]["item1"].value;
    var item2 = document.forms["radar_form"]["item2"].value;
    var item3 = document.forms["radar_form"]["item3"].value;
    if (item1 == null || item1 == "") {
        alert("Preencha o nome de pelo menos um item.");
        return false;
    } else {
    	sessionStorage.item1 = item1;
       	sessionStorage.item2 = item2;
    	sessionStorage.item3 = item3; 
    }
}

function favForm() {
    var item1 = document.forms["fav_form"]["type"].value;
   	sessionStorage.favorite = item1;
}


function initialConfigForm() {
    var x = document.forms["config_form"]["money"].value;
    var checkedRadar = document.getElementById('check_radar').checked;
    if (x == null || x == "") {
        alert("Preencha uma importância.");
        return false;
    } else if(Number(x) < 10) {
    	alert("A importância recebida tem que ser pelo menos de 10€.");
		return false;    
    } 
     else {
     	var nome = document.forms["config_form"]["nome"].value;
     	var idade = document.forms["config_form"]["idade"].value;
     	var telemovel = document.forms["config_form"]["telemovel"].value;
     	if (nome == null || nome == "") {
        		alert("Preencha o nome do utilizador.");
        		return false;
    		} else if (idade == null || idade == "") {
				alert("Preencha a idade do utilizador.");
        		return false;
    		} else if (telemovel == null || telemovel == "") {
    			alert("Preencha o nr de telemóvel do utilizador.");
        		return false;
    		}

     	if(checkedRadar) {
     		var item1 = document.forms["config_form"]["item1"].value;
    		var item2 = document.forms["config_form"]["item2"].value;
    		var item3 = document.forms["config_form"]["item3"].value;
    		if (item1 == null || item1 == "") {
        		alert("Preencha o nome de pelo menos um item.");
        		return false;
    		} else {
    			sessionStorage.item1 = item1;
       			sessionStorage.item2 = item2;
    			sessionStorage.item3 = item3; 
    		}
     	}
     	sessionStorage.favorite = "1";
     	sessionStorage.username = nome;
     	sessionStorage.age = idade;
     	sessionStorage.phone = telemovel;
    	sessionStorage.curr = Number(x);
    	sessionStorage.programmed = "true";
    	sessionStorage.scheme = document.getElementById('scheme').value;
    }
}
