import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/assets/logo-white.png'

const Footer2 = () => {
    const about = [
        "Couponive is the website where you can find latest and verified coupons and promotion codes. Redeem and save now! Big Discounts. Simple Search. Get Code. Big Discount. Always Sale. The Best Price. Paste Code at Checkout. ALmost 5000+ Stores. Redeem Code Online."
    ]

    const aboutus = [
        "About us", "Term Of Use", "Privacy Policy",
    ]
    const ShopByCountry = [
        "United State", "United Kingdom", "Canada",
    ]
    const WhatTrending = [
        "Father's Day Deals",
        "Black Friday Deals",
        "Cyber Monday Deals",
    ]

    return (
        <>
            <div className="container-fluid bg-secondary">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-2-logo">
                                <Image src={logo} className="w-75  h-100 "></Image>
                            </div>
                            {about.map((item) => {
                                return <p className='text-white'>{item}</p>
                            })}
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
                                    {aboutus.map((aboutli) => {
                                        return <li className='mb-1'>
                                            <Link href="">{aboutli}</Link>
                                        </li>
                                    })}

                                </ul>
                            </div>
                            <div className="col-md-4 ">
                                <h2 className='my-auto text-white fw-bolder'>Shop By Country</h2>
                                <ul className='footer-link p-0 text-white pt-3'>
                                    {ShopByCountry.map((ShopByCountryli) => {
                                        return <li className='mb-1'>
                                            <Link href="">{ShopByCountryli}</Link>
                                        </li>
                                    })}

                                </ul>
                            </div>
                            <div className="col-md-4 ">
                                <h2 className='my-auto text-white fw-bolder'>Shop By Country</h2>
                                <ul className='footer-link p-0 text-white pt-3'>
                                    {WhatTrending.map((WhatTrendingli) => {
                                        return <li className='mb-1'>
                                            <Link href="">{WhatTrendingli}</Link>
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