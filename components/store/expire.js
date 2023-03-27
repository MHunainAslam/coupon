import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const expire = ({ expire, img }) => {

    var date = new Date(expire.updated_at);
    var edate = new Date(expire.expire_date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="bg-white row p-2 my-2 mx-2 coupon ">
            <div className="col-md-2 my-auto ">
                <Image src={`${img || ''}`} fill={true} className='h-auto position-relative' />
            </div>
            <div className="col-md-7">
                <Link href="#" className={`h5 text-expired`}>{expire.title}</Link>
                <p className='mb-0' dangerouslySetInnerHTML={{ __html: expire.description }}></p>

                <div className='d-md-flex justify-content-between mb-0'> 
                    <small>Expires: {`${monthNames[edate.getMonth()].slice(0, 3)} ${edate.getDate()}, ${edate.getFullYear()}`} </small>

                </div>
            </div>
            <div className="col-md-3 text-center m-auto">
                <button className={`p-2 w-100 button button-expired`}>
                    {expire.type === 'Discount' ? 'Show Code' : 'Show Deal'}
                </button> <br />
                <small >Update: {`${monthNames[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`} </small>
            </div>

        </div >
    )
}

export default expire
