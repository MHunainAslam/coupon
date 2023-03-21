import Image from 'next/image'
import React from 'react'
import Coupon from './coupon'
import Expire from './expire'

const detail = ({ data, coupon, expire }) => {
    return (
        <div className="product-detail">
            <h2 className='text-center'> {data.product.title + " " + data.product.coupon}</h2>
            <div className="col-12 ">
                {coupon.map((item) =>
                    <div className=" ">
                        <Coupon coupon={item} />
                    </div>
                )}
            </div>
            <h2 className='text-center '> {"Expired " + data.product.title + " " + data.product.coupon}</h2>
            <div className="col-12 text-expired">
                {expire.map((item) => <Expire expire={item} />
                )}
            </div>
        </div>
    )
}

export default detail
