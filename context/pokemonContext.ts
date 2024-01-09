import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Pokemon {
	name: string;
}

interface PokemonContextValue {
	pokemon: Pokemon | null;
	errorMessage: string;
	setPokemonData: (data: Pokemon | null) => void;
	setError: (message: string) => void;
}

const PokemonContext = createContext<PokemonContextValue | undefined>(undefined);

const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [errorMessage, setErrorMessage] = useState<string>('');

	const setPokemonData = (data: Pokemon | null) => {
		setPokemon(data);
		setErrorMessage('');
	};

	const setError = (message: string) => {
		setPokemon(null);
		setErrorMessage(message);
	};

	return (
		<PokemonContext.Provider value={{ pokemon, errorMessage, setPokemonData, setError }}>
			{children}
		</PokemonContext.Provider>
	);
};

const usePokemonContext = (): PokemonContextValue => {
	const context = useContext(PokemonContext);
	if (!context) {
		throw new Error('usePokemonContext must be used within a PokemonProvider');
	}
	return context;
};

export { PokemonProvider, usePokemonContext };
