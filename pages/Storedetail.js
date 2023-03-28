import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Sidepanel from '@/components/store/sidepanel'
import Detail from '@/components/store/detail'
import { APP_KEY, APP_URL } from '@/config'
import { toast } from 'react-hot-toast'

const Storedetail = () => {

    const [singlestore, setsinglestore] = useState({});
    const [err, setError] = useState(false);
    const [loding, setloding] = useState(true);

    useEffect(() => {
        fetch(`${APP_URL}api/single-store/${slug}?key=${APP_KEY}`).then(res => res.json()).then((dta) => {
            setsinglestore(dta);
            // toast.success('Slider fetch successfully!');
            // setLoading(false);
        }).catch(err => {
            // toast.error('Something went wrong!');
            // setLoading(false);
            setError(true);
        });
    }, []);



    // const coupon = [
    //     {
    //         type: 'code',
    //         url: 'https://morecouponcode.com/adminpanel/assets/images/store/Audiobooksnow%20coupon%20code.png',
    //         title: '15% Off Sitewide - March 2023',
    //         desc: 'Get An Extra 15% Off On All Orders At Donald Pliner. (Verified Sitewide Promo Code)',
    //         expdate: '12-April-2023',
    //         updatedate: '13-March-2023',
    //         coupon_id:122
    //     },
    //     {
    //         type: 'deal',
    //         url: 'https://morecouponcode.com/adminpanel/assets/images/store/Audiobooksnow%20coupon%20code.png',
    //         title: '15% Off Sitewide - March 2023',
    //         desc: 'Get An Extra 15% Off On All Orders At Donald Pliner. (Verified Sitewide Promo Code)',
    //         expdate: '12-April-2023',
    //         updatedate: '13-March-2023',
    //         coupon_id:322
    //     }
    // ]

    const expire = [
        {
            type: 'code',
            url: 'https://morecouponcode.com/adminpanel/assets/images/store/Audiobooksnow%20coupon%20code.png',
            title: '15% Off Sitewide - March 2023',
            desc: 'Get An Extra 15% Off On All Orders At Donald Pliner. (Verified Sitewide Promo Code)',
            expdate: '12-April-2023',
            updatedate: '13-March-2023',
        },
        {
            type: 'deal',
            url: 'https://morecouponcode.com/adminpanel/assets/images/store/Audiobooksnow%20coupon%20code.png',
            title: '15% Off Sitewide - March 2023',
            desc: 'Get An Extra 15% Off On All Orders At Donald Pliner. (Verified Sitewide Promo Code)',
            expdate: '12-April-2023',
            updatedate: '13-March-2023',
        }
    ]

    const data = {
        product: {
            url: 'https://morecouponcode.com/adminpanel/assets/images/store/Audiobooksnow%20coupon%20code.png',
            slug: "hello-world",
            title: 'one',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, odio? Repellendus corporis temporibus sunt, aliquid quae quis illo quia dolor vitae! Earum cupiditate, dolor repudiandae nam rerum officia corrupti vitae.',
            coupon: 'Coupons & Promo Codes',
        },

        similarCategory: [
            {
                title: "First Second",
                slug: 'first-second'
            },
            {
                title: "Apparel And Accessories",
                slug: 'Apparel-And-Accessories'
            },
        ],
        similarStore: [
            {
                title: "First Second",
                slug: 'first-second'
            },
            {
                title: " Second",
                slug: 'second'
            },
            {
                title: "Third",
                slug: 'Third'
            },
            {
                title: "Fourth",
                slug: 'Fourth'
            },
            {
                title: "Fifth",
                slug: 'Fifth'
            },
        ]
    }

    const dta = useRouter()
    let slug = dta?.query?.slug;


    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-3 col-12 bg-white my-5">
                    <Sidepanel sidepanelapi={singlestore} img={singlestore.url} />
                </div>
                <div className="col-md-9 col-12 my-5 px-2">
                    <Detail storedetailapi={singlestore} img={singlestore.url} expire={expire} />
                </div>



            </div>
        </div>
    )
}

export default Storedetail

