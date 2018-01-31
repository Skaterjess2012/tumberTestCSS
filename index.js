function bg() {
	var gif = [
	'https://m.popkey.co/460d06/KM1eD.gif',
	'https://vignette.wikia.nocookie.net/cute-doge/images/e/e0/SSJ3_Doge.gif/revision/latest?cb=20151231234441',
	'https://vignette.wikia.nocookie.net/epicrapbattlesofhistory/images/9/97/Doge.gif/revision/latest?cb=20140512133544',
	'https://vignette.wikia.nocookie.net/meme/images/6/6f/Doge_dog.gif/revision/latest?cb=20150531003842',
	'http://orig00.deviantart.net/b5ca/f/2013/246/c/6/wow_stahp_by_newdelfaic-d6kvb6v.gif'
	];
	var stuff = document.getElementById('mybody');
	var number = Math.floor(Math.random() * gif.length);
	console.log(gif[number]);
	console.log(stuff);
	stuff.style.backgroundImage = "url(" + gif[number] + ")";
}