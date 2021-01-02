import React from 'react'
import './Section.css'

function Section({Icon, Title, Color, Selected}) {
    return (
        <div className={`section ${Selected && "section--selected"}`}
        style={{
            borderBottom: `3px solid ${Color}`,
            color: `${Selected && Color}`
        }}
        >
            <Icon />
            <h4>{Title}</h4>
        </div>
    )
}

export default Section
