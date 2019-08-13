const Diketik = el => ({
  	el,
  	sleep: (ms) => {
  		return new Promise(resolve => setTimeout(resolve, ms))
  	},
  	isIterable: (obj) => {
	  	// checks for null and undefined
	  	if (obj == null) {
	    	return false;
	  	}
	  	return typeof obj[Symbol.iterator] === 'function';
	},
  	ticker: async (value, ms = 250, erase = false) => {
  		if ( el != null ) {

  			if ( erase == true ) {
  				el.innerHTML = ""
  			}

	  		if ( typeof(value) == "string" && value.length > 0 ) {
	  			// convert string into array of character
	  			// "abc def " => ["a", "b", "c", " ", "d", "e", "f", " "]
	  			value = value.split("")

				for (var i = 0; i < value.length; i++) {
	  				el.insertAdjacentHTML('beforeend', value[i])
	  				await Diketik(null).sleep(ms)
				}
	  		}
  		} else {
  			console.warn("Diketik.ticker element not found !");
  		}
  	},
  	rolling: async (value, ms = 250) => {
  		if ( el != null ) {
  			if ( Diketik(0).isIterable(value) ) {

				for (var i = 0; i < value.length; i++) {
	  				el.innerHTML = value[i]
	  				await Diketik(null).sleep(ms)
				}

  			} else {
  				console.log("Diketik.rolling(value) is not iterable.")
  			}
  		} else {
  			console.warn("Diketik.rolling element not found !");
  		}
  	}
})