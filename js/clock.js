$(document).ready(function(){
	var ss = 0;
	var mm = 0;
	var hh = 0;

	// var ss = "00";
		// var mm = "00";
		// var hh = "00";

		var dt = new Date();
		var hh = dt.getHours();
		var mm = dt.getMinutes();
		var ss = dt.getSeconds();
		function clock(){
			//seTimeout( function, duration );
			setTimeout(function(){
				dt = new Date();
				hh = dt.getHours();
				mm = dt.getMinutes();
				ss = dt.getSeconds();
					// ss++ means ss = ss + 1
					// ss++; 

					// if(ss < 10 ){
					// 	ss = "0"+ss
					// }else if( ss == 60 ){
					// 	mm++;
					// 	ss = "00";
					// 	if( mm < 10 ){
					// 		mm = "0"+ mm;
					// 	}else if( mm == 60 ){
					// 		hh++;
					// 		mm = "00";
					// 		if( hh < 10){
					// 			hh = "0"+ hh;
					// 		}else if( hh == 12 ){
					// 			hh = "00";
					// 		}
					// 	}
					// }

					

					$("#ss").html( ss );
					$("#mm").html( mm );
					$("#hh").html( hh );


					
					clock();
			}, 1000);
		}
		clock();
});