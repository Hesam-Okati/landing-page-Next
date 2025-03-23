import React from 'react'
import "./TableArea.css"

function TableArea() {
  return (
    <div className='TableArea p-5  d-flex justify-content-between container'>
      <div>
        <input className='ta-inp' type="text" placeholder='آدرس ایمیل ' />
        <button className='img-h-mob btn text-white fw-bold'>
          رایگان شروع کنید 
        </button>
      </div>


      <div>
        <h4>
        آماده استفاده از برنامه ما هستید؟  این فقط یک کلیک است.
        </h4>
      </div>


    </div>
  )
}

export default TableArea