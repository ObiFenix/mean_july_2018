// assuming you have jQuery

$(document).ready(function () {
    var favoritePokemon;
    $.get("https://pokeapi.co/api/v2/pokemon/1/", function (data) {
        favoritePokemon = data.name;
        idPokemon = data.id;
        console.log(data.id);
        console.log(data.name);
        // $.get("https://pokeapi.co/media/sprites/pokemon/"+idPokemon+".png", function (img)
        // {
        //     imagePokemon = img.front_default;
        // });
        // the given link is for Bulbasaur's information
        console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
        // console.log("Got my favorite Pokemon", imagePokemon);      // Predict the output!
        var secondFavorite;
        // let's use setTimeout to simulate an API call that takes 0 seconds to complete
        setTimeout(function () {
            secondFavorite = "charmander";
        }, 0);
        console.log("Got my second favorite", secondFavorite);
    });


});
