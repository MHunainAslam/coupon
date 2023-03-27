import Categorycrad from '@/components/store/coupon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const coupon = () => {


    const coupondropdown = [
        {
            type: 'code',
            url: 'https://morecouponcode.com/adminpanel/assets/images/store/Audiobooksnow%20coupon%20code.png',
            title: '15% Off Sitewide - March 2023',
            desc: 'Get An Extra 15% Off On All Orders At Donald Pliner. (Verified Sitewide Promo Code)',
            expdate: '12-April-2023',
            updatedate: '13-March-2023',
            coupon_id: 122
        },
        {
            type: 'deal',
            url: 'https://morecouponcode.com/adminpanel/assets/images/store/Audiobooksnow%20coupon%20code.png',
            title: '15% Off Sitewide - March 2023',
            desc: 'Get An Extra 15% Off On All Orders At Donald Pliner. (Verified Sitewide Promo Code)',
            expdate: '12-April-2023',
            updatedate: '13-March-2023',
            coupon_id: 322
        }
    ]
    const dta = useRouter()
    let slug = dta?.query?.slug;
    return (
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-md-10 p-0">
                    <h2 className='ms-3'> {slug} Coupons & Promo Codes</h2>
                    {coupondropdown.map((item) => {
                        return <div className="px-1 my-0 col-12">
                            <Categorycrad coupon={item} is_ico={false} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default coupon