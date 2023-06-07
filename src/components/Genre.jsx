import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Genre.css'


const Genre = ({genres}) => {
    return (
        <>
            {genres?.map((genre) => {
              return (
                <span className="badge text-bg-danger margin px-2 my-2" > {genre} </span>
              )
          })}
        </>
                
  )
}

export default Genre