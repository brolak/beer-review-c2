var BeerReviewApp = function () {

//start with empty string to fill with beers
	var beers = [];

//define function to add a new object with beer properties from inputs
	var addBeer = function (name,category,rating) {
	var newBeer = {
		name: name.val(),
		category: category.val(),
		rating: rating.val()
	}
//add to array
	beers.push(newBeer);
//clear input fields
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
	};

//define switch for default sorting
	var sortSwitch = true;

//sort from lowest to highest rating by default, then change the switch
	var sortBeersUp = function () {	
	beers.sort(function (a, b) {
  	return a.rating - b.rating;
	})
	};

//sort from highest to lowest ratings if already switched, then change  the switch
	var sortBeersDown = function() {
	beers.sort(function (b, a) {
  	return a.rating - b.rating;
	})
	};

	return {
		updateBeers: updateBeers,
		addBeer: addBeer,
		sortBeersDown: sortBeersDown,
		sortBeersUp: sortBeersUp
	};
};
//end of BeerReviewApp

var app = BeerReviewApp();

// js var's for jquery objects
var $beerName = $("#beerName");
var $beerCategory = $("#beerCategory");
var $rating = $("#rating");
var $beersList = $(".beers-list");

//when clicking submit button, put new beer object on list (addBeer function) and update the list (updateBeers function)
$("#post-beer").on("click", function() {
	app.addBeer($beerName,$beerCategory,$rating);
	app.updateBeers();
});

//when sort button is clicked, sort the array list by rating accordingly (with sortBeersUp or sortBeersDown functions)
$("#sort").on("click", function() {
	if(app.sortSwitch===true){
	app.sortBeersUp();
	app.sortSwitch = false;
	} else if (app.sortSwitch===false) {
	app.sortBeersDown();
	app.sortSwitch = true;
	}
	app.updateBeers();
});