import React from "react";
import PokemonItem from "./PokemonItem";

function Pokemon(props){
    
    return (
        
        <div className="row">
        <PokemonItem 
         pokemon={{
            id: 1,
            name: "Bulbizarre",
            hp: 25,
            cp: 5,
            picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            types: ["Plante", "Poison"]
        }}
        />
        <PokemonItem 
         pokemon={{
            id: 2,
            name: "Salamèche",
            hp: 28,
            cp: 6,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
            types: ["Feu"]
        }}
        />
        <PokemonItem
         pokemon={{
            id: 3,
            name: "Carapuce",
            hp: 21,
            cp: 4,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
            types: ["Eau"]
        }}
        />
         <PokemonItem
         pokemon={{
            id: 4,
            name: "Aspicot",
            hp: 16,
            cp: 2,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
            types: ["Insecte", "Poison"]
        }}
        />
         <PokemonItem
         pokemon={{
            id: 5,
            name: "Roucool",
            hp: 30,
            cp: 7,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
            types: ["Normal", "Vol"]
        }}
        />
          <PokemonItem
         pokemon={{
            id: 6,
            name: "Rattata",
            hp: 18,
            cp: 6,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
            types: ["Normal"]            
        }}
        />
          <PokemonItem
         pokemon={{
            id: 7,
            name: "Piafabec",
            hp: 14,
            cp: 5,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
            types: ["Normal", "Vol"]
        }}
        />
          <PokemonItem
         pokemon={{
            id: 5,
            name: "Roucool",
            hp: 30,
            cp: 7,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
            types: ["Normal", "Vol"]
        }}
        />
          <PokemonItem
         pokemon={{
            id: 8,
            name: "Abo",
            hp: 16,
            cp: 4,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
            types: ["Poison"]
        }}
        />
           <PokemonItem
         pokemon={{
            id: 9,
            name: "Pikachu",
            hp: 21,
            cp: 7,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
            types: ["Electrik"]
        }}
        />
           <PokemonItem
         pokemon={{
            id: 10,
            name: "Sabelette",
            hp: 19,
            cp: 3,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
            types: ["Normal"]
        }}
        />
         <PokemonItem
         pokemon={{
            id: 11,
            name: "Mélofée",
            hp: 25,
            cp: 5,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
            types: ["Fée"]
        }}
        />
         <PokemonItem
         pokemon={{
            id: 12,
            name: "Groupix",
            hp: 17,
            cp: 8,
            picture:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
            types: ["Feu"]
        }}
        />
       </div> 
        
    )
}
export default Pokemon