"use client"
import React from 'react'
import "./container-style.css"
import Sidebar from "@/components/sidebar"
import Content from "@/components/content"
import { useSidebarContext } from '@/contexts/SidebarContext'
const Container = () => {
    const {sidebarOpen,setSidebarOpen}=useSidebarContext()
    return (
        <div id='container'>
            <Sidebar/>
            <Content/>
            {!!sidebarOpen&&<div className='sidebarOverlay' onClick={()=>setSidebarOpen(false)}>

            </div>}
        </div>
    )
}

export default Container