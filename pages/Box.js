import React from 'react'
import './Box.css'
const Box = () => {
  return (
   <>
<div className="container342">
      <div className="box34">
        <div className="boxContent">
          <img className='togga' src="https://cdn-icons-png.flaticon.com/512/4477/4477335.png" alt="Logo 1" />
          <h2  id='yuou'>Same Day Dispatch</h2>
          <p  id='oji'>All orders placed before 12pm Monday to<br /> Friday are dispatched same day.</p>
        </div>
      </div>

      <div className="box34">
        <div className="boxContent">
          <img   className='togga' src="https://i.pinimg.com/550x/44/a5/ca/44a5caad462417a273144e48eebf35c4.jpg" alt="Logo 2" />
          <h2  id='yuou' >Free & Fast Delivery</h2>
          <p  id='oji'>Orders to metro cities reach in 2-3<br /> working days.</p>
        </div>
      </div>

      <div className="box34">
        <div className="boxContent">
          <img  className='togga' src="https://static.thenounproject.com/png/3845673-200.png" alt="Logo 3" />
          <h2 id='yuou'>Cancellation Policy</h2>
          <p id='oji'>Easy cancellation from the dashboard within 12 <br /> hours of placing the order</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default Box