import React from 'react'

const TotalPrice = ({total}) => {
    return (
        <div>
                <h3>Total Price: {total()}</h3>
        </div>
    )
}

export default TotalPrice
