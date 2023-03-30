import { APP_URL, APP_KEY } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Couponcard from './Couponcard'
import Spinner from './Spinner'

const Popularcoupon = ({ data }) => {

    const [coupon, setCoupon] = useState({})
    const [err, setError] = useState(false);
    const [loding, setLoading] = useState(true)
    const [img, setImg] = useState('');

    useEffect(() => {
        fetch(`${APP_URL}api/coupon?key=${APP_KEY}&graph=popular${data.Style === 1 ? '&paginate=16' : ''} `).then(res => res.json()).then((dta) => {
            setCoupon(data.Style === 1 ? dta?.data : dta)
            setLoading(false);
            setImg(dta?.url);
        }).catch(err => {
            setLoading(false);
            setError(true);
        })
    }, [])
    // const images = [
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/Newpowa.png",
    //         title: "Newpowa Coupons",
    //         shipping: 'Rafer A Friend',
    //         slug: "new-coupon-slug",
    //         coupon_id: 124,
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         title: "Ashimary Hair Coupons",
    //         shipping: 'Accessories For $39 ',
    //         slug: "new-coupon-slug",
    //         coupon_id: 125,
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/Diet%20Smoke%20Coupon%20Logo.png",
    //         shipping: 'Upto $299 Off St Patricks Day Sale',
    //         title: "Diet Smoke Coupons",
    //         slug: "new-coupon-slug",
    //         coupon_id: 123,
    //     },


    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         title: "Ashimary Hair Coupons",
    //         shipping: 'Rafer A Friend',
    //         slug: "new-coupon-slug",
    //         coupon_id: 126,
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         shipping: 'Rafer A Friend',
    //         type: 'code',
    //         title: "Ashimary Hair Coupons",
    //         slug: "new-coupon-slug",
    //         coupon_id: 122,
    //     },
    // ]

    return (
        <>
                <div className="container mt-5">
                    <h3 className='head1 pt-5'>Most Popular Coupons</h3>
                    <div className='row '>
                        {coupon?.data?.map((item) => {
                            return <div className="col-12 col-sm-6 col-md-3 my-1 p-1">
                                <Couponcard item={item} data={data} img={img}/>
                            </div>
                        })}
                    </div>
                    {data.Style === 1 ? 
                    <div className=" text-center my-3">
                        <Link href='/popular-coupons' className={`p-2 button  ${data?.Style === 1 ? 'button-primary' : 'button-secondary'}`}>View All</Link>
                    </div>
                    :''
}
                </div>
               
        </>
    )
}

export default Popularcoupon
