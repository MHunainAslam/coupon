
import Image from 'next/image'
import logo from '@/public/assets/logo-white.png'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { APP_KEY, APP_URL } from '@/config'

const Header2 = ({ data }) => {


    const [category, setcategory] = useState()
    const [err, setError] = useState(false);
    const [season, setseason] = useState()
    const [coupons, setcoupons] = useState()
    const [country, setcountry] = useState()

    useEffect(() => {
        fetch(`${APP_URL}api/category?key=${APP_KEY}&paginate=10`).then(res => res.json()).then((dta) => {
            setcategory(dta)
        }).catch(err => {
            setError(true);
        })

        fetch(`${APP_URL}api/coupon_type?key=${APP_KEY}`).then(res => res.json()).then((dta) => {
            setcoupons(dta)
        }).catch(err => {
            setError(true);
        })

        fetch(`${APP_URL}api/season?key=${APP_KEY}&paginate=10`).then(res => res.json()).then((dta) => {
            setseason(dta)
        }).catch(err => {
            setError(true);
        })

        
    }, [])

    const secondrycategory = [
        'Clothing/Apperal', "Arts & Entertainment", "Automotive"
    ]


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        {/* <Image src={data?.url + "/" + data?.logo?.header || logo} alt="" className={'position-relative my-1 h-100'} fill={200} /> */}
                        <Image src={data?.url + "/" + data?.logo?.header || logo} alt="" className={'position-relative my-1 header-logo w-100'} fill={true} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-75" id="navbarSupportedContent">
                        <form className="mx-auto mx-md-0 d-flex w-75 rounded-2" role="search">
                            <input className="form-control me-2 rounded-1 " type="search" placeholder="Search 5000+ Brands Coupons & Promo Codes" aria-label="Search" />

                        </form>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 nav-css">
                            <li className="nav-item ">
                                <Link className="nav-link" href="/all-stores" >
                                    All Stores
                                </Link >

                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </Link >
                                <ul className="dropdown-menu rounded-0 header-dd-2">
                                    {category?.data?.map((cat) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov " href={`/category/${cat.slug}`}>{cat.name}</Link >
                                        </li>
                                    })}
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Couopon
                                </Link >
                                <ul className="dropdown-menu rounded-0 header-dd-2">
                                    {coupons?.map((coupondd) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov" href={`/coupon/${coupondd.slug}`}>{coupondd.name}</Link>
                                        </li>

                                    })}
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Seasons
                                </Link >
                                <ul className="dropdown-menu  rounded-0 header-dd-2">
                                    {season?.data?.map((seasondd) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov" href={`/season/${seasondd.slug}`}>{seasondd.name}</Link>
                                        </li>

                                    })}

                                </ul>
                            </li>

                            <li className="nav-item dropdown memorial-btn">
                                <Link href='' className='button button-primary py-1'>Memorial Day Coupons</Link >
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header2










