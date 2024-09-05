import { createContext, useContext, RefObject } from "react"

export interface RefsInterface {
    homeRef: RefObject<HTMLDivElement> | null,
    aboutRef: RefObject<HTMLDivElement> | null,
    projectRef: RefObject<HTMLDivElement> | null,
    skillRef: RefObject<HTMLDivElement> | null,
    contactRef: RefObject<HTMLDivElement> | null
}

export const refContext = createContext<RefsInterface>({
    homeRef: null,
    aboutRef: null,
    projectRef: null,
    skillRef: null,
    contactRef: null
})

export const useRefContext = () => {
    return useContext(refContext)
}

export const RefProvider = refContext.Provider;