import React from 'react'

const Wirter = ({data}) => {

    return (
    <div className='text-light'>
          Premiere Time: <span className='text-light opacity'>{data?.schedule?.time}</span> &nbsp;
          Premiere Day: <span className='text-light opacity'>{data?.schedule?.days}</span>&nbsp;
          <hr className='line'/>
    </div>
  )
}

export default Wirter