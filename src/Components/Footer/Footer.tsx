import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import "./Footer.css"

function Footer() {
  return (
    <div className='Footer text-white container p-4'>
        <h2 className='mb-5'>
        شرکت شما سزاوار این برتری است. بیایید صحبت کنیم
        </h2>

<div className='d-flex justify-content-between align-items-center'>
<ul className='d-flex ftr-items gap-3'>
            <li>
                درباره ما  
            </li>

            <li>
                قیمت گذاری 
            </li>

            <li>
                خدمات 
            </li>

            <li>
                امکانات 
            </li>

            <li>
                وبلاگ 
            </li>

            <li>
                تماس با ما 
            </li>
        </ul>

        <div>
        <FaTwitter className='ftr-icons fs-1 rounded-circle mx-2 p-2 '/>
        <FaLinkedinIn className='ftr-icons fs-1 rounded-circle mx-2 p-2 '/>
        </div>
</div>
        <hr />

        <p className='text-center '>
        <p>© <strong>حسام کدر </strong>. تمام حقوق قالب محفوظ است. طراحی و توسعه توسط <a className='text-orange' href="https://t.me/Programe_Developer" target="_blank">Hesam Okati</a></p>
        </p>
    </div>
  )
}

export default Footer