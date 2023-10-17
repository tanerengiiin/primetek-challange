"use client"
import React, { createContext, useContext, useState } from 'react'

export const SidebarContext = createContext()


const SidebarContextProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (

        <SidebarContext.Provider value={{
            sidebarOpen, setSidebarOpen
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContextProvider

export const useSidebarContext = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
    return { sidebarOpen, setSidebarOpen }
}