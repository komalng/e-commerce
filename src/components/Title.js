import React from 'react';


export default function Title({ title }) {
  return (
    <React.Fragment>
      <div className='row'>
        <div className=' mx-auto my-2 text-center text-title'>
          <h1 className='text-capitalize font-weight-bold'>
          <strong className='text-blue'>{title}</strong>

          </h1>

        </div>
      </div>
    </React.Fragment>
    // {/* <Product/> */}
  )
}
