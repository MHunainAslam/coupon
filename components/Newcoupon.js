import { APP_URL, APP_KEY } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Newcouponcard from './Couponcard'
import Spinner from './Spinner'

const Newcoupon = ({ styledata }) => {


    const [coupon, setCoupon] = useState({})
    const [err, setError] = useState(false);
    const [loding, setloding] = useState(true)

    useEffect(() => {
        fetch(`${APP_URL}api/coupon?key=${APP_KEY}&graph=tranding&ttype=coupon-type(slug)&paginate=16`).then(res => res.json()).then((dta) => {
            setCoupon(dta)
            // toast.success('Slider fetch successfully!');
            // setLoading(false);
        }).catch(err => {
            toast.error('Something went wrong!');
            // setLoading(false);
            setError(true);
        })
    }, []) 
    // const images = [
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         shipping: 'Rafer A Friend',
    //         type: 'code',
    //         title: "Ashimary Hair Coupons",
    //         slug: "new-coupon-slug",
    //         coupon_id: 122,
    //         code: '10000dffg',
    //         discount: "$20 Off Sitewide - March 2023",
    //         usetime: 112,
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/Diet%20Smoke%20Coupon%20Logo.png",
    //         shipping: 'Upto $299 Off St Patricks Day Sale',
    //         title: "Diet Smoke Coupons",
    //         slug: "new-coupon-slug",
    //         coupon_id: 123,
    //         code: '10000dffg',
    //         discount: "$20 Off Sitewide - March 2023",
    //         usetime: 112,
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/Newpowa.png",
    //         title: "Newpowa Coupons",
    //         shipping: 'Rafer A Friend',
    //         slug: "new-coupon-slug",
    //         coupon_id: 124,
    //         usetime: 112,
    //         code: '10000dffg',
    //         discount: "$20 Off Sitewide - March 2023",
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         title: "Ashimary Hair Coupons",
    //         shipping: 'Accessories For $39 ',
    //         slug: "new-coupon-slug",
    //         coupon_id: 125,
    //         code: '10000dffg',
    //         discount: "$20 Off Sitewide - March 2023",
    //         code: '10000dffg',
    //         usetime: 112,
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         title: "Ashimary Hair Coupons",
    //         shipping: 'Rafer A Friend',
    //         slug: "new-coupon-slug",
    //         coupon_id: 126,
    //         extraoff: "Get An Extra 20% Off On Yearly Plan At Ivacy.",
    //         discount: "$20 Off Sitewide - March 2023",
    //         offertime: "(Verified Sitewide Code)",
    //         type: "showdeal",
    //         code: '10000dffg',
    //         usetime: 112,
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         title: "Ashimary Hair Coupons",
    //         shipping: 'Rafer A Friend',
    //         slug: "new-coupon-slug",
    //         coupon_id: 126,
    //         extraoff: "Get An Extra 20% Off On Yearly Plan At Ivacy.",
    //         discount: "$20 Off Sitewide - March 2023",
    //         offertime: "(Verified Sitewide Code)",
    //         type: "showdeal",
    //         usetime: 112,
    //         code: '10000dffg',
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         title: "Ashimary Hair Coupons",
    //         shipping: 'Accessories For $39 ',
    //         slug: "new-coupon-slug",
    //         coupon_id: 125,
    //         discount: "$20 Off Sitewide - March 2023",
    //         code: '10000dffg',
    //         usetime: 112,
    //     },
    // ]

    return (
        <>
         
                <div className="container mt-5">
                    <h3 className='head1 pt-5'>{styledata.Style === 1 ? "Most Trending Coupons" : "Today's Most Popular Deals"}</h3>
                    <div className='row '>
                        {coupon?.data?.data?.map((item) => {
                            return <div className=" col-12 col-sm-6 col-md-3 my-1 p-1">

                                <Newcouponcard   item={item} data={styledata} img={coupon?.url} />
                            </div>
                        })}
                    </div>
                    <div className=" text-center my-3">
                        {styledata.Style === 1 ? <Link href='/trending-coupon' className={`p-2 button ${styledata?.Style === 1 ? 'button-primary' : 'button-secondary'}`}>View All</Link>
                            : ""}
                    </div>
                </div> 
        



        </>
    )
}

export default Newcoupon
