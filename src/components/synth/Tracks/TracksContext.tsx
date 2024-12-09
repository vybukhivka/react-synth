import React, { createContext, useContext, useRef } from "react"

type TracksContextType = {
	knobRefs: React.MutableRefObject<{ [knobId: string]: number }>
}

const TracksContext = createContext<TracksContextType | null>(null)

export const TracksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const knobRefs = useRef<{ [knobId: string]: number }>({})

	return (
		<TracksContext.Provider value={{ knobRefs }}>
			{children}
		</TracksContext.Provider>
	)
}

export const useTracksContext = (): TracksContextType => {
	const context = useContext(TracksContext)
	if(!context) {
		throw new Error ('useTracksContext must be used within it\'s provider');
	}
	return context
}

