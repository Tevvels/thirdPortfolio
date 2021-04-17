import React from 'react'
import Card from '../../components/Card'
const About = ({children},props) => {
    return (
        <div>
            <Card style={props.style}>
                {children}
            </Card>
        </div>
    )
}

export default About
