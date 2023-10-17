import React from 'react'

const SidebarButton = ({data, isActive=false, ...props}) => {
    return (
        <button  className={`item ${isActive && "active"}`} {...props}>
            <span className='item__icon'>{data.icon}</span>
            <span className='item__name'>{data.name}</span>
            {!!data?.detail && <span className='item__badge'>
                {data.detail}
            </span>}
        </button>
    )
}

export default SidebarButton