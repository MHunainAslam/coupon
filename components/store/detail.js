import Image from 'next/image'
import React from 'react'
import Coupon from './coupon'
import Expire from './expire'

const detail = ({ storedetailapi, data, coupon, expire, img }) => {

    console.log(storedetailapi);


    return (
        <div className="product-detail">
            <h2 className='ms-3'> {storedetailapi?.data?.store.name} Coupons & Promo Codes</h2>
            {/* " " + storedetailapi.product.coupon */}
            <div className="col-12 ">
                {storedetailapi?.data?.coupon?.map((item) =>
                   { return <div className=" ">
                        <Coupon coupon={item} img={img+"/"+ storedetailapi?.data?.store?.logo}  />
                    </div>}
                )}
            </div>
            {/* <h2 className='text-center '> {"Expired " + data.product.title + " " + data.product.coupon}</h2>
            <div className="col-12 text-expired">
                {expire.map((item) => <Expire expire={item} />
                )}
            </div> */}
        </div>
    )
}

export default detail
