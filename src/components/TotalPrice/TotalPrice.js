import React from 'react'

const TotalPrice = ({total}) => {
    return (
        <div>
                <p>Total Price: {total()}</p>
        </div>
    )
}

export default TotalPrice
