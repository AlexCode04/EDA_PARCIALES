// FirstApp.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, fetchPokemon } from './store/pokemonSlice';

const Pokemon = () => {
    const dispatch = useDispatch();
    const { counter, pokemonData, isLoading, hasError } = useSelector((state) => state.pokemon);

    // Obtener Pokémon cuando el contador cambia
    useEffect(() => {
        dispatch(fetchPokemon(counter));
    }, [counter, dispatch]);

    const handleAdd = () => {
        dispatch(incrementCounter());
    };

    const handleSubstract = () => {
        dispatch(decrementCounter());
    };

    const handleReset = () => {
        dispatch(resetCounter());
    };

    return (
        <div>
            <h1>Contador</h1>
            <span>{counter}</span>
            <br />
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Resetear</button>
            <br />
            <h2>Pokemon</h2>
            {
                isLoading
                    ? <div>Loading...</div>
                    : hasError
                        ? <div>Error: {hasError}</div>
                        : pokemonData && (
                            <div>
                                <p>{pokemonData.name}</p>
                                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                            </div>
                        )
            }
        </div>
    );
};

export default Pokemon;
