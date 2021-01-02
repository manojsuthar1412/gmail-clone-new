import React from 'react'
import "./SideBarOption.css";

function SideBarOption({Icon, Title, Number, Selected}) {
    return (
        <div className={`sidebarOption ${Selected && "sidebarOption--active"}`}>
            <Icon />
            <h3>{Title}</h3>
            <p>{Number}</p>
        </div>
    )
}

export default SideBarOption;
