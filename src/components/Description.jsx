import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/About/About.css';

const Description = ({description}) => {
    return (
        <>
            <h4 className='text-light'>Overview</h4>
            <h6 className='text-light'>{description}</h6>
        </>
      
  )
}

export default Description