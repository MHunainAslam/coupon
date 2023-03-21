import Categorycrad from '@/components/Categorycard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const category = () => {

    const catcard = [
        {
            url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
            shipping: 'Rafer A Friend',
            type: 'code',
            title: "Ashimary Hair Coupons",
            slug: "new-coupon-slug",
            coupon_id: 122,
        },
        {
            url: "https://morecouponcode.com/adminpanel/assets/images/store/leg.PNG",
            shipping: 'Upto $299 Off St Patricks Day Sale',
            title: "Diet Smoke Coupons",
            slug: "new-coupon-slug",
            coupon_id: 123,
        },
        {
            url: "https://morecouponcode.com/adminpanel/assets/images/store/Newpowa.png",
            title: "Newpowa Coupons",
            shipping: 'Rafer A Friend',
            slug: "new-coupon-slug",
            coupon_id: 124,
        },
        {
            url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
            title: "Ashimary Hair Coupons",
            shipping: 'Accessories For $39 ',
            slug: "new-coupon-slug",
            coupon_id: 125,
        },
        {
            url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
            title: "Ashimary Hair Coupons",
            shipping: 'Rafer A Friend',
            slug: "new-coupon-slug",
            coupon_id: 126,
        },
    ]
    const dta = useRouter()
    let slug = dta?.query?.slug;
    return (
        <div className="container my-3">
           <div className="row">
          <h2> {slug} Coupons & Promo Codes </h2>
           {catcard.map((item) => {
                return <div className="px-1 col-md-4">
                    <Link  href={`/store/${item.slug}`} > <Categorycrad item={item} /></Link>
                </div>
            })}
           </div>
        </div>
    )
}

export default category