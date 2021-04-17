import React from 'react'

const Container = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

// Container.propTypes = {
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.element),
//         propTypes.element.isRequired
//     ])
// }

export default Container
