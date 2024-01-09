'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModeContextValue {
	mode: 'light' | 'dark';
	setMode: (mode: 'light' | 'dark') => void;
}

const DarkModeContext = createContext<ModeContextValue | undefined>(undefined);

const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [mode, setMode] = useState<'light' | 'dark'>('light');

	return <DarkModeContext.Provider value={{ mode, setMode }}>{children}</DarkModeContext.Provider>;
};

const useModeContext = (): ModeContextValue => {
	const context = useContext(DarkModeContext);
	if (!context) {
		throw new Error('useModeContext must be used within a DarkModeProvider');
	}
	return context;
};

export { DarkModeProvider, useModeContext };
