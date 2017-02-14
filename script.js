/*
Add another button to your page that will sort the beers on the page by rating when clicked. 
If it gets clicked again, reverse the order 
(if they were sorted in ascending order, sort in descending and vice-versa).
*/

var $beerName = $("#beerName");
var $beerCategory = $("#beerCategory");
var $beersList = $(".beers-list");
var $rating = $("#rating");

var beers = [];

var addBeer = function (name,category,rating) {
	var newBeer = {
		name: name.val(),
		category: category.val(),
		rating: rating.val()
	}
	beers.push(newBeer);
	name.val("");
	category.val("");
	rating.val("");
};

var updateBeers = function () {
	$beersList.empty();
	for(i=0;i<beers.length;i++) {
		$beersList.append("<li> Name: "+beers[i].name+" Category: "+beers[i].category+" Rating: "+beers[i].rating+"</li>");
	}
}

var sortBeers = function () {

}

$("#post-beer").on("click", function() {
	addBeer($beerName,$beerCategory,$rating);
	updateBeers();
});

