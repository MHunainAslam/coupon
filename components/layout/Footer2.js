import { APP_KEY, APP_URL, FOOTER_ABOUT } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../public/assets/logo-white.png'
import Spinner from '../Spinner'

const Footer2 = () => {
    const about = [
        "Couponive is the website where you can find latest and verified coupons and promotion codes. Redeem and save now! Big Discounts. Simple Search. Get Code. Big Discount. Always Sale. The Best Price. Paste Code at Checkout. ALmost 5000+ Stores. Redeem Code Online."
    ]


    const [aboutus, setaboutus] = useState({})
    const [country, setcountry] = useState(true);
    const [WhatTrending, setWhatTrending] = useState(true);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch(`${APP_URL}api/pages?key=${APP_KEY}`).then(res => res.json()).then((aboutusdta) => {
            setaboutus(aboutusdta);
            setloading(false)
        }).catch(err => {
            setloading(false)
        })
        fetch(`${APP_URL}api/country?key=${APP_KEY}&paginate=5`).then(res => res.json()).then((countrydta) => {
            setcountry(countrydta)
        }).catch(err => {
            setError(true);
        })
        fetch(`${APP_URL}api/season?key=${APP_KEY}&graph=tranding&paginate=5`).then(res => res.json()).then((WhatTrendingdta) => {
            setWhatTrending(WhatTrendingdta)
        }).catch(err => {
            setError(true);
        })
    }, [])
    console.log("aa", aboutus);
    // const ShopByCountry = [
    //     "United State", "United Kingdom", "Canada",
    // ]
    // const aboutus = [
    //     "United State", "United Kingdom", "Canada",
    // ]
    // const WhatTrending = [
    //     "Father's Day Deals",
    //     "Black Friday Deals",
    //     "Cyber Monday Deals",
    // ]
    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (
        <>
            <div className="container-fluid bg-secondary">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-2-logo">
                                <Image src={logo} className="w-75  h-100 "></Image>
                            </div>
                            <p className='text-white'>{FOOTER_ABOUT}</p>

                            <ul className='footer-link footer2-icon  p-0 text-white pt-1 d-flex'>
                                <li><Link href=""> <i className='fab fa-facebook-f'></i></Link></li>
                                <li><Link href=""> <i className='fab fa-pinterest-p'></i></Link></li>
                                <li><Link href=""> <i className='fab fa-twitter '></i></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-8 row ">
                            <div className="col-md-4 ">
                                <h2 className='my-auto text-white fw-bolder'>About US</h2>
                                <ul className='footer-link p-0 text-white pt-3'>
                                    {aboutus?.data?.map((aboutli) => {
                                        return <li className='mb-1'>
                                            <Link href={`/footerpages/${aboutli.slug}`}>{aboutli.name}</Link>
                                        </li>
                                    })}
                                    <li className='mb-1'>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-md-4 ">
                                <h2 className='my-auto text-white fw-bolder'>Shop By Country</h2>
                                <ul className='footer-link p-0 text-white pt-3'>
                                    {country?.data?.map((ShopByCountryli) => {
                                        return <li className='mb-1'>
                                            <Link href={`/coupon/${ShopByCountryli.slug}`}>{ShopByCountryli.name}</Link>
                                        </li>
                                    })}

                                </ul>
                            </div>
                            <div className="col-md-4 ">
                                <h2 className='my-auto text-white fw-bolder'>What's Trending</h2>
                                <ul className='footer-link p-0 text-white pt-3'>
                                    {WhatTrending?.data?.map((WhatTrendingli) => {
                                        return <li className='mb-1'>
                                            <Link href="">{WhatTrendingli.name}</Link>
                                        </li>
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer2