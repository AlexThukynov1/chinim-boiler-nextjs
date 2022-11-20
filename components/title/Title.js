import React from 'react'
import styled from './Title.module.css'

const Title = (props) => {
    const {title,titleWrapperClass,titleClass} = props
    return (
        <div className={`${titleWrapperClass} titleWrapper `}>
            <h2 className={`${titleClass} titleComponent`}>{title}</h2>
        </div>
    )
}

export default Title