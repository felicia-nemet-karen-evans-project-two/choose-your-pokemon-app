// url for Bulbasaur : (https://pokeapi.co/api/v2/pokemon/1/)
// url for Charmander : (https://pokeapi.co/api/v2/pokemon/4/)
// url for Squirtle : (https://pokeapi.co/api/v2/pokemon/7/)
// url for Pikachu : (https://pokeapi.co/api/v2/pokemon/25/)

// create namespace for the app:
const pokemonStarterApp = {};

// create init function
pokemonStarterApp.init = () => {
   pokemonStarterApp.setUpPokeEventListeners();
   pokemonStarterApp.getPokemon();
};

pokemonStarterApp.setUpPokeEventListeners = () => {
   document.querySelector('#pokemonChoice').addEventListener('change', function () {
      pokemonStarterApp.findPokemon = this.value;

      // console.log(pokemonStarterApp.findPokemon);  
      // ^ this is displaying the value (name of pokemon)

      pokemonStarterApp.getPokemon(pokemonStarterApp.findPokemon);
   });
}

pokemonStarterApp.getPokemon = (id) => {
   if (!id) return;
   // store the api URL as a property on the app
   const url = `https://pokeapi.co/api/v2/pokemon/${id}?limit=30`;
   // url.search = new URLSearchParams({
   //      q: 'query'
   // });

   fetch(url)
      .then((response) => {
         return response.json();
      })
      .then((jsonResult) => {
         const myPokemon = jsonResult;
         console.log(myPokemon);

         // need to call the display function in here
         // eg: artApp.displayPieces(data.artObjects);

         pokemonStarterApp.displayPokers(myPokemon);
         // pokemonStarterApp.removePokeClasses(id);
         pokemonStarterApp.addPokeClasses(id);
      });
}

pokemonStarterApp.displayPokers = (pokeObject) => {

   const pokeName = document.querySelector(`#poke-name`);
   pokeName.innerHTML = pokemonStarterApp.findPokemon;

   const pokeNumber = document.querySelector(`#poke-number`);
   pokeNumber.innerHTML = pokeObject.id;

   const pokeType = document.querySelector(`#poke-type`);
   pokeType.innerHTML = pokeObject.types[0].type.name;

   const pokeFrontImage = document.querySelector(`#poke-front-image`);
   pokeFrontImage.src = pokeObject[`sprites`][`front_default`];

   const pokeBackImage = document.querySelector(`#poke-back-image`);
   pokeBackImage.src = pokeObject[`sprites`][`back_default`];

}

pokemonStarterApp.addPokeClasses = (pokemonName) => {
   const pokeName = document.querySelector(`#poke-name`);

   // add squirtle styles
   if (pokemonName === 'squirtle') {
      pokeName.classList.add(`squirtle-styles`);
      pokeName.classList.remove(`charmander-styles`);
      pokeName.classList.remove(`pikachu-styles`);
      pokeName.classList.remove(`bulbasaur-styles`);
   };

   // add bulbasaur styles
   if (pokemonName === 'bulbasaur') {
      pokeName.classList.add(`bulbasaur-styles`);
      pokeName.classList.remove(`charmander-styles`);
      pokeName.classList.remove(`pikachu-styles`);
      pokeName.classList.remove(`squirtle-styles`);
   };

   // add pikachu styles
   if (pokemonName === 'pikachu') {
      pokeName.classList.add(`pikachu-styles`);
      pokeName.classList.remove(`charmander-styles`);
      pokeName.classList.remove(`squirtle-styles`);
      pokeName.classList.remove(`bulbasaur-styles`);
   };

   // add charmander styles
   if (pokemonName === 'charmander') {
      pokeName.classList.add(`charmander-styles`);
      pokeName.classList.remove(`squirtle-styles`);
      pokeName.classList.remove(`pikachu-styles`);
      pokeName.classList.remove(`bulbasaur-styles`);
   };

}

// initialize the app
pokemonStarterApp.init();
