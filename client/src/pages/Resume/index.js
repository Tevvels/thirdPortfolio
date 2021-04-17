import React from 'react'
import Card from '../../components/Card'
const Resume = ({children},props) => {
    return (
        <div>
            <Card style={props.style}>
                {children}
            </Card>
        </div>
    )
}

export default Resume