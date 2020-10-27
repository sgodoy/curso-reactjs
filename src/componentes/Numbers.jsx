import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//DRY
const numbers = [1,2,3,4,5,6,7,8,9,0]
const renderButtons = onCLickNumber => {
    //iterar desde el boton 1 al 0
    const renderButton = number => (
        <Button key={number} text={number.toString()} clickHandler={onCLickNumber} />
    )
    return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers