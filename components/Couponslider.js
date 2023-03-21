import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Couponcard from './Couponcard';
import { APP_URL, APP_KEY } from '@/config';
import { toast } from 'react-hot-toast';
import Spinner from './Spinner';
const Couponslider = ({ styledata }) => {


    const [mostview, setmostview] = useState({})
    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch(`${APP_URL}api/coupon?key=${APP_KEY}&ttype=coupon-type(slug)&paginate=20`).then(res => res.json()).then((dta) => {
            setmostview(dta)
            // toast.success('Slider fetch successfully!');
            setloading(false);
        }).catch(err => {
            toast.error('Something went wrong!');
            setloading(false);
            setError(true);
        })
    }, [])

    const viewcoupon = [
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
            url: "https://morecouponcode.com/adminpanel/assets/images/store/Diet%20Smoke%20Coupon%20Logo.png",
            shipping: 'Upto $299 Off St Patricks Day Sale',
            title: "Diet Smoke Coupons",
            slug: "new-coupon-slug",
            coupon_id: 123,
        },


        {
            url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
            title: "Ashimary Hair Coupons",
            shipping: 'Rafer A Friend',
            slug: "new-coupon-slug",
            coupon_id: 126,
        },
        {
            url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
            shipping: 'Rafer A Friend',
            type: 'code',
            title: "Ashimary Hair Coupons",
            slug: "new-coupon-slug",
            coupon_id: 122,
        },
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <>
            <div className='container my-5'>
                <h2 className='ms-2'>Most View Coupons</h2>
                {/* {loading ? */}
                <Slider {...settings}>
                    {mostview?.data?.data?.map((item) => {
                        return <div className='col px-2'>
                            <Couponcard item={item} data={styledata} />
                        </div>
                    })}

                </Slider>
                {/* : */}
                 {/* <Spinner />  */}
                {/* } */}
            </div>
        </>
    )
}

export default Couponslider