const topping = prompt("What topping do you like");
		let money = 0.00;
	    let iceCream = 1.90;
		let precioFinal = 0.00;

		if(topping=="oreo"){
			money = 1;
		}else if(topping == "kitkat"){
			money = 1.50;
		}else if(topping == "brownie"){
			money = 0.75;
		}else  if(topping == "lacasitos"){
			money = 0.95;
		}else{
			alert("no tenemos este topping, lo sentimos. ");
			money = 0;
		}

		totalPrice = iceCream + money;
		alert("el helado cuesta " + totalPrice + " €");
