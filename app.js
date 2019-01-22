var Request = require("request");

setInterval(getBitcoin, 5*1000);

function getBitcoin(){
	Request.get("https://www.mercadobitcoin.net/api/BTC/ticker/", (error, response, body) => {
		if(error){
			return console.dir(error);
		}

		console.dir(JSON.parse(body));
	});	
}
