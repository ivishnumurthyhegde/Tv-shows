import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/About/About.css'


const Status = ({data}) => {
  return (
    <div className='text-light'>
          
          Release Year : <span className='text-light opacity'>{data?.premiered?.slice(0,4)}</span>&nbsp;
          Duration : <span className='text-light opacity'>{data?.runtime} mins</span>&nbsp; 
          Status: <span className='text-light opacity'>{data?.status}</span> &nbsp;
          <hr className='line'/>
    </div>
      
  )
}

export default Status