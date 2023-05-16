import React from 'react'
import PropTypes from 'prop-types'
const Frase =({frase})=>{


const {quote,author}=frase 


return(
        <div className="frase_div">
            <h1>{quote}</h1>
            <p>{author}</p>
        </div>

)
    
}

Frase.propTypes={
    frase : PropTypes.object.isRequired
}

export default Frase