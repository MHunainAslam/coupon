import Categorycrad from '@/components/Categorycard'
import Spinner from '@/components/Spinner'
import { APP_KEY, APP_URL } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const country = () => {

    const dta = useRouter()
    let slug = dta?.query?.slug;
    const [countrycard, setcountrycard] = useState({})
    const [err, setError] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        setloading(true);
        fetch(`${APP_URL}api/store?key=${APP_KEY}&country=${slug}`).then(res => res.json()).then((dta) => {
            if (dta.success) {
                setcountrycard(dta);
                setError(null);
            } else {
                setError(dta.message)
            }
            setloading(false)
        }).catch(err => {
            setError('something went wrong!');
            setloading(false)
        })
    }, [slug])
    // const countrycard = [
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         shipping: 'Rafer A Friend',
    //         type: 'code',
    //         title: "Ashimary Hair Coupons",
    //         slug: "new-coupon-slug",
    //         coupon_id: 122,
    //     },
    //     {
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/leg.PNG",
    //         shipping: 'Upto $299 Off St Patricks Day Sale',
    //         title: "Diet Smoke Coupons",
    //         slug: "new-coupon-slug",
    //         coupon_id: 123,
    //     },
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
    //         url: "https://morecouponcode.com/adminpanel/assets/images/store/ashimary%20Hair%20Coupon%20Logo.png",
    //         title: "Ashimary Hair Coupons",
    //         shipping: 'Rafer A Friend',
    //         slug: "new-coupon-slug",
    //         coupon_id: 126,
    //     },
    // ]
    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div> 
   
    return (
        <>
         
            <div className="container my-3">
            {err ? <p className='text-center my-auto py-5'>{err}</p> : 
                <div className="row">
                    <h2> {countrycard.name} Coupons & Promo Codes </h2>
                    {countrycard?.data?.map((item) => {
                        return <div className="cat-card col-md-4">
                            <Link href={`/store/${item.slug}`} > <Categorycrad item={item} img={countrycard.url} /></Link>
                        </div>
                    }) }
                </div>
                }
            </div>
        </>
    )
}

export default country