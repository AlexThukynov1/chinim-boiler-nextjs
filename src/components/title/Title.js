import React from 'react'
import './index.css'

const Title = (props) => {
    const {title,titleWrapperClass,titleClass} = props
    return (
        <div className={`${titleWrapperClass} title-wrapper `}>
            <h2 className={`${titleClass} title-component`}>{title}</h2>
        </div>
    )
}

export default Title