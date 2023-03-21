import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const expire = ({expire}) => {
  return (
    <div className="bg-white row p-2 my-4 mx-2 coupon ">
    <div className="col-md-2 my-auto ">
        <Image src={`${expire?.url || ''}`} fill={true} className='h-auto position-relative' />
    </div>
    <div className="col-md-7">
        <Link href="#" className={`h5 text-expired`}>{expire.title}</Link>
        <p className='mb-0'>{expire.desc}</p>
        <div className='d-md-flex justify-content-between mb-0'>
            <small>{expire.expdate}</small>
           
        </div>
    </div>
    <div className="col-md-3 text-center m-auto">
        <button className={`p-2 w-100 button button-expired`}>
            {expire.type === 'code' ? 'Show Code' : 'Show Deal'}
        </button> <br />
        <small >{expire.updatedate}  </small>
    </div>

</div >
  )
}

export default expire
