import React from "react";

function PokemonItem (props) {
    return (
        <div className="col-md-4 col-sm-6 border">
        <div className="card text-white" style="width: 350px;">
            <img src={props.pokemon.picture} className="card-img-top" alt="Card image cap"/>
            <div className="card-img-overlay">
                <h5 className="card-title">{props.pokemon.name}</h5>
                <p className="card-text">15/12/2022</p>
                <span href="#" className="btn" ></span>
            </div>
        </div>
    </div>
    )
}

export default PokemonItem