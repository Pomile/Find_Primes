module.exports ={

	getPrimes: function(number) {
	

		array_of_prime = [];
		var counter;
		for(counter=2; counter<=number; counter++) {
			is_current_prime = true;

			for(var counter2=2; counter2<=counter; counter2++ ) {
				if (counter % counter2 === 0 && counter !==counter2){
					is_current_prime = false;



				}
			}

			if (is_current_prime === true){

				array_of_prime.push(counter);

			}

		}

		return array_of_prime

	}

}





