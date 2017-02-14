// js var's for jquery objects
var $beerName = $("#beerName");
var $beerCategory = $("#beerCategory");
var $beersList = $(".beers-list");
var $rating = $("#rating");

//start with empty string to fill with beers
var beers = [];

//define function to add a new object with beer properties from inputs, add to array, clear input fields
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

//define function to clear beer list, then fill list with entire array
var updateBeers = function () {
	$beersList.empty();
	for(i=0;i<beers.length;i++) {
		$beersList.append("<li> Name: "+beers[i].name+" Category: "+beers[i].category+" Rating: "+beers[i].rating+"</li>");
	}
}

//when clicking submit button, put new beer object on list (addBeer function) and update the list (updateBeers function)
$("#post-beer").on("click", function() {
	addBeer($beerName,$beerCategory,$rating);
	updateBeers();
});

//define switch for sorting up or down
var sortSwitch = true;

//sort from lowest to highest rating by default, change the switch
var sortBeersUp = function () {
	
	beers.sort(function (a, b) {
  	return a.rating - b.rating;
	})

};

//sort from highest to lowest ratings after clicked already
var sortBeersDown = function() {

	beers.sort(function (b, a) {
  	return a.rating - b.rating;
	})

};

//when sort button is clicked, sort the array list by rating accordingly (with sortBeersUp or sortBeersDown functions)
$("#sort").on("click", function() {
	if(sortSwitch===true){
	sortBeersUp();
	sortSwitch = false;
	} else if (sortSwitch===false) {
	sortBeersDown();
	sortSwitch = true;
	}
	updateBeers();
});