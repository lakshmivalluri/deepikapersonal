
		var Name = prompt('Enter Employee Name');
		var Age  = prompt('Enter Employee Age');
		var Gender = prompt('Enter Employee Gender');
		var basicSal= prompt('Enter BasicSal');
		 basicSal = parseInt(basicSal);
		var hra = (25 * basicSal) / 100;
		
			var pf = (14 * basicSal) / 100;
			
			var totalSal = parseInt(basicSal+pf+hra);
			
		
		if(Gender=="male")
		{
			console.log("Tax calulation for Male:");
			if (totalSal > 200000)
			{
					var Tax = parseInt( (15 * totalSal)/100);
					console.log("Tax is 15% = " + Tax);
					
			}
				else if (totalSal > 100000){
			
					var Tax = parseInt( (10* totalSal)/100) ;
					console.log("Tax is 10% = " + Tax);
				}
				else if (totalSal > 50000)
				{
	             var Tax = parseInt( (5 * totalSal)/100) ;
					console.log("Tax is 5% =" + Tax);

				}

			else{
					var Tax = parseInt( (0* totalSal)/100) ;
					console.log("Tax is 0% =" + Tax);
				}

		}
		else if(Gender == 'female')
		{
			console.log("Tax calulation for female");
			if (totalSal > 200000)
			{
				var Tax = parseInt((10 * totalSal)/100);
				console.log("Tax is 10% = " + Tax);
			}
				else if(totalSal > 100000)
				{
					var Tax = parseInt((5 * totalSal)/100);
					console.log("Tax is 5% =" + Tax);

				}
				else
				{
					var Tax = parseInt((0 * totalSal)/100);
					console.log("Tax is 0% =" + Tax);
				}
		}

			document.querySelector("#name").innerText =  Name ;
			document.querySelector("#age").innerText =  Age ;
			document.querySelector("#gen").innerText =  Gender ;
   			document.querySelector("#hra").innerText =  hra ;
   			document.querySelector("#pf").innerText =  pf ;
   			document.querySelector("#sal").innerText = totalSal ;
   			document.querySelector("#tax").innerText = Tax ;

	

	