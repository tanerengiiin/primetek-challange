import React from 'react'
import "./content-style.css"
import Topbar from "./Topbar"
import ContentBody from "./ContentBody"

const Content = () => {

    return (
        <div id='content' className='full-height'>
            <Topbar/>
            <ContentBody/>
        </div>
    )
}

export default Content