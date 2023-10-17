import React from 'react'
import Container from "@/components/container"
import SidebarContextProvider from '@/contexts/SidebarContext'
const PageLayout = () => {
    return (
        <SidebarContextProvider>
            <main>
                <Container />
            </main>
        </SidebarContextProvider>

    )
}

export default PageLayout