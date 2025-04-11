import { createContext, useState } from "react"

export const AppContext = createContext()

export function AppProvider({ children }) {
    const [isWork, setIsWork] = useState(false)
    const [isPersonal, setIsPersonal] = useState(false)
    const [isFun, setIsFun] = useState(false)
    const [modalName, setModalName] = useState("")

    const [tab, setTab] = useState(function () {
        const storedTab = localStorage.getItem('TodosTab')
        return storedTab ? JSON.parse(storedTab) : []
    })

    const setActiveState = (type) => {
        setIsWork(type === "Work")
        setIsPersonal(type === "Personal")
        setIsFun(type === "Fun")
    }

    const closeModal = () => {
        setIsWork(false)
        setIsPersonal(false)
        setIsFun(false)
    }

    return (
        <AppContext.Provider value={{
            isWork, setIsWork, isPersonal, setIsPersonal, isFun, setIsFun,
            setActiveState, closeModal,
            modalName, setModalName,
            tab, setTab
        }}>
            {children}
        </AppContext.Provider>
    )
}
